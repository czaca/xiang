<template>
  <div class="city-list-container">
    <div class="city-title">
      <span>定位城市</span>
    </div>
    <div class="city-list city-list-inline clearfix">
      <div class="location-city">定位失败，请点击重试</div>
    </div>
    <div id="history" class="city-title">最近访问城市</div>
    <div class="city-list city-list-inline clearfix">
      <div class="city-item" data-nm="北京" data-id="1">北京</div>
      <div class="city-item" data-nm="北京" data-id="1">北京</div>
      <div class="city-item" data-nm="上海" data-id="10">上海</div>
    </div>
    <div id="hot" class="city-title">热门城市</div>
    <div class="city-list01 city-list-inline">
      <div class="city-item" v-for="city in hotList" :key="city.cityId">{{city.name}}</div>
    </div>
    <div class="city" v-for="item in newCitylist" :key="item.py">
      <div id="A" class="city-title city-title-letter">{{ item.py}}</div>
      <div class="city-list-block clearfix">
        <div class="cityitem" v-for="city in item.list" :key="city.cityId">{{city.name}}</div>
      </div>
    </div>
    <div class="nav">
      <div class="nav-item" data-id="locate">定位</div>

      <div class="nav-item" data-id="history">最近</div>
      <div class="nav-item" data-id="hot">热门</div>
      <div
        class="nav-letter nav-item"
        v-for="index in indexList"
        :key="index"
      >{{ index}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['newCitylist', 'hotList', 'indexList'])
  },
  methods: {
    ...mapActions(['getCityList'])
  },
  created () {
    this.getCityList()
  }
}
</script>
<style lang="less" scoped>
.city-list-container {
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-right: 20px;
  box-sizing: border-box;

  .city-title {
    padding-left: 15px;
    line-height: 30px;
  }
  .city-list-inline {
    min-height: 48px;
    background-color: #f5f5f5;
    padding-bottom: 8px;
  }
  .city-list {
    height: 48px;
    min-width: 328px;
  }
  .city-list-inline .location-city {
    width: auto;
    min-width: 30%;
    padding: 0 20px;
  }
  .city-list-inline .location-city {
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .city-item {
    width: auto;
    // min-width: 30%;
    padding: 0 20px;
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .city-list01 {
    height: 200px;
    min-width: 328px;
  }
  .city-title-letter {
    padding-left: 25px;
  }
  .city-list-block {
    // min-height:440px;
    background-color: #f5f5f5;
  }
  .city-list-block .city-item {
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
    border-bottom: 1px solid #c8c7cc;
  }
  .cityitem {
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
    border-bottom: 1px solid #c8c7cc;
  }
  .nav {
    position: fixed;
    top: 75px;
    top: 11vh;
    right: 0;
    width: 35px;
    z-index: 10;
    text-align: center;
    font-size: 12px;
  }
  .nav .nav-item {
    height: 16px;
    height: 2.8vh;
  }
}
</style>
