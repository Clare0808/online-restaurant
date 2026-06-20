package api

import "github.com/gin-gonic/gin"

type Review struct {
	Name    string `json:"name"`
	Content string `json:"content"`
	Score   int    `json:"score"`
	Date    string `json:"date"`
}

type ReviewRequest struct {
	List Review `json:"list"`
}

func RegisterReviewRoutes(router *gin.Engine) {
	router.POST("/send-review", sendReview)
}

func sendReview(c *gin.Context) {
	var req ReviewRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "success",
		"list":    req.List,
	})
}
