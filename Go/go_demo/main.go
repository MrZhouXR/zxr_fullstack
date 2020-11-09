// 爬取
package main

import (
	"net/http"
	"log"
	"github.com/PuerkitoBio/goquery"
	"fmt"
)

func BaiduHotSearch() {
	// http  把网页请求
	// DOM 内存第三方分析
	// find 
	res, err := http.Get("http://www.baidu.com")
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close() //
	if res.StatusCode != 200 {
		log.Fatalf("status code error : %d %s",res.StatusCode , res.Status)
	}

	doc , err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		log.Fatal(err)
	}
	doc.Find(".s-hotsearch-content .hotsearch-item").Each(func(i int, s *goquery.Selection) {
    content := s.Find(".title-content-title").Text()
    fmt.Printf("%d: %s\n", i, content)
  })


}

func main() {
	BaiduHotSearch()  // 函数模块
}