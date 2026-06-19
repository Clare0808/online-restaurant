package api

import "github.com/gin-gonic/gin"

type Dish struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Price       int    `json:"price"`
	Image       string `json:"image"`
	CATEGORY    string `json:"category"`
}

type DishRequest struct {
	List Dish `json:"list"`
}

func RegisterDishRoutes(router *gin.Engine) {
	router.POST("/send-dish", sendDish)
}

func sendDish(c *gin.Context) {
	var req DishRequest

	// 把前端傳來的 JSON body 綁定到 req
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "User data received",
		"list":    req.List,
	})
}
