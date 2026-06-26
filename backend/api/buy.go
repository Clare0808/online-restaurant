package api

import "github.com/gin-gonic/gin"

type Item struct {
	Name   string `json:"name"`
	Amount int    `json:"amount"`
	Price  int    `json:"price"`
	Total  int    `json:"total"`
}

type Buy struct {
	Email string `json:"email"`
	Dish  []Item `json:"dish"`
	Total int    `json:"total"`
	Code  string `json:"code"`
	Date  string `json:"date"`
}

type BuyRequest struct {
	List Buy `json:"list"`
}

func RegisterBuyRoutes(router *gin.Engine) {
	router.POST("/send-buy", sendBuy)
}

func sendBuy(c *gin.Context) {
	var req BuyRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "success",
		"list":    req.List,
	})
}
