class PreLoadImage  {
  constructor (imgNode) {
    this.imgNode = imgNode
  }

  setSrc(imgUrl) {
    this.imgNode.src =imgUrl
  }
}


class ProxyImage {
  // 占位
  static LOADING_URL = 'xxx'

  constructor (targetImage) {
    this.targetImage = targetImage
  }

  setSrc(targetUrl) {
    this.targetImage.setSrc(ProxyImage.LOADING_URL)

    const virtualImage = new Image()
    virtualImage.onload = () => {
      this.targetImage.setSrc(targetUrl)
    }
    virtualImage.src = targetUrl
  }
}
// new PreLoadImage('image')
// 奇奇怪怪