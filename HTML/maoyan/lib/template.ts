interface MovieInfo{
  src : string,
  title : string,
  score : string,
  actor : string,
  show : string
}

type getMovieInfoFunc = (movie:MovieInfo) 
        => string

const getMovieInfo:getMovieInfoFunc = (movie) =>
      `
      <a href="javascript:" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb" src="${movie.src}" alt="">
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">${movie.title}</h4>
                <p class="weui-media-box__desc">${movie.score}${movie.actor}${movie.show}</p>
            </div>
        </a> 
      `
