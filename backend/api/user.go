package api

import "github.com/gin-gonic/gin"

func RegisterUserRoutes(router *gin.Engine) {
	router.GET("/user", getUser)
}

func getUser(c *gin.Context) {
	c.JSON(200, gin.H{"status": "ok"})
}
