package main //包 主  module 模块化


import (
	"fmt"
	"os"
)

func main() {
	//
	if len(os.Args) > 1 {
			fmt.Println(os.Args[1])
	}
	fmt.Println("hello,world")
}