package api

import "github.com/gin-gonic/gin"

type Contact struct {
	Email   string `json:"email"`
	Name    string `json:"name"`
	Content string `json:"content"`
	Date    string `json:"date"`
}

type ContactRequest struct {
	List Contact `json:"list"`
}

func RegisterContactRoutes(router *gin.Engine) {
	router.POST("/send-contact", sendContact)
}

func sendContact(c *gin.Context) {
	var req ContactRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "success",
		"list":    req.List,
	})
}
