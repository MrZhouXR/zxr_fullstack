<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city">切换城市</div>
    </div>
    <div class="city-info">
      <p class="city">{{ mapData.city }}</p>
      <p class="weather">{{mapData.weather}}</p>
      <h2 class="temp"><em>{{mapData.temperature}}</em>℃</h2>
      <div class="detail">
        <span>风力: {{mapData.windPower}}</span> | <span>风向: {{mapData.windDirection}}</span> |
        <span>空气湿度: {{mapData.humidity}}%</span>
      </div>
    </div>
    <div class="future" v-if="futureMapData.length > 0">
      <div class="group">
        明天: 
        <span class="tm">
          白天：
          {{futureMapData[0].dayTemp}} 
          {{futureMapData[0].dayWeather}} 
          {{futureMapData[0].dayWindDir}}
          {{futureMapData[0].dayWindPower}}
        </span>
        <span class="time">
          夜间：
          {{futureMapData[0].nightTemp}} 
          {{futureMapData[0].nightWeather}} 
          {{futureMapData[0].nightWindDir}}
          {{futureMapData[0].nightWindPower}}
        </span>
      </div>
       <div class="group">
        后天: 
        <span class="tm">
          白天：
          {{futureMapData[1].dayTemp}} 
          {{futureMapData[1].dayWeather}} 
          {{futureMapData[1].dayWindDir}}
          {{futureMapData[1].dayWindPower}}
        </span>
        <span class="time">
          夜间：
          {{futureMapData[1].nightTemp}} 
          {{futureMapData[1].nightWeather}} 
          {{futureMapData[1].nightWindDir}}
          {{futureMapData[1].nightWindPower}}
        </span>
      </div>
    </div>
    <div class="map-container" ref="mapContener"></div>
    <div class="echart-container" ref="echartsContainer">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTime: "",
      mapData: {},
      futureMapData: [],
      seriesData: []
    };
  },
  mounted() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
    this.initMap();
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    // 获取地理位置
    initMap() {
      var map = new AMap.Map(this.$refs.mapContener, {
        resizeEnable: true,
      });
      let _this = this;
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            console.log(result);
            _this.getCurrentCityData(result.city)
          }
        })
      })
      // AMap.plugin("AMap.Geolocation", function () {
      //   var geolocation = new AMap.Geolocation({
      //     // 是否使用高精度定位，默认：true
      //     enableHighAccuracy: true,
      //     // 设置定位超时时间，默认：无穷大
      //     timeout: 10000,
      //     // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
      //     buttonOffset: new AMap.Pixel(10, 20),
      //     //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      //     zoomToAccuracy: true,
      //     //  定位按钮的排放位置,  RB表示右下
      //     buttonPosition: "RB",
      //   });
      //   geolocation.getCurrentPosition();
      //   AMap.event.addListener(geolocation, "complete", onComplete);
      //   AMap.event.addListener(geolocation, "error", onError);

      //   function onComplete(data) {
      //     // data是具体的定位信息
      //     console.log(data);
      //   }

      //   function onError(data) {
      //     // 定位出错
      //     console.log(data);
      //   }
      // });
    },
    getCurrentCityData(city) {
      let _this = this
      // 查询天气
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather()

        //执行实时天气信息查询
        weather.getLive(city, function (err, data) {
          console.log(err, data)
          _this.mapData = data
        })
        weather.getForecast(city, function(err, data) {
          console.log(err, data);
          _this.futureMapData = data.forecasts
          _this.futureMapData.map((item) => {
            _this.seriesData.push(item.dayTemp)
          })
          _this.initChart()
        });
      })
    },
    initChart () {
      let dom = this.$refs.echartsContainer
      var myChart = echarts.init(dom)
      let app = {},option = null;

      // 指定图表的配置项和数据
      option = {
        xAxis: {
            type: 'category',
            data: ['今天', '明天', '后天', '三天后']
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        series: [{
            data: this.seriesData,
            type: 'line'
        }],
        tooltip: {
          trigger: 'axis',
          formatter:function(params){  
              var relVal = params[0].name;  
              for (var i = 0, l = params.length; i < l; i++) {  
                      relVal += params[i].value+"°C";  
                  }  
              return relVal;  
          }  
        }
      };
       // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
};
</script>

<style lang="less">
.container {
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info {
    text-align: center;
    .temp {
      font-size: 26px;
      em {
        font-size: 34px;
        font-style: normal;
      }
    }
  }
  .future{
    margin-top: 30px;
    padding: 0 10px;
    .group{
      height: 44px;
      line-height: 44px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.3);
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      margin-bottom: 10px;
      padding: 0 10px;
      span{
        color: #fff;
      }
    }
  }
  .echart-container{
    height: 50vh;
  }
}
</style>