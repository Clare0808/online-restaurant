package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5"
	"github.com/joho/godotenv"

	"backend/api"
)

func database() {
	// 環境變數載入
	err := godotenv.Load()
	if err != nil {
		log.Fatal(err)
	}

	// 建立連線字串
	dsn := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
	)

	// 建立連線
	conn, err := pgx.Connect(context.Background(), dsn)

	if err != nil {
		panic(err)
	}
	defer conn.Close(context.Background())

	fmt.Println("資料庫連線成功")

	// 執行 SQL 版本查詢
	var version string

	err = conn.QueryRow(
		context.Background(),
		"SELECT version()",
	).Scan(&version)

	if err != nil {
		panic(err)
	}

	fmt.Println(version)
}

func main() {
	database()

	router := gin.Default()

	// 啟用 CORS middleware
	router.Use(cors.Default())

	api.RegisterUserRoutes(router)
	api.RegisterDishRoutes(router)
	api.RegisterReviewRoutes(router)
	api.RegisterContactRoutes(router)
	api.RegisterBuyRoutes(router)

	router.Run(":80")
}
