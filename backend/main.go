package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"backend/api"
)

func main() {
	router := gin.Default()

	// 啟用 CORS middleware
	router.Use(cors.Default())

	api.RegisterUserRoutes(router)
	api.RegisterDishRoutes(router)

	router.Run(":80")
}
