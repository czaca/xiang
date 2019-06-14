<template>
<div id="mao">
  <div class="tou"><p>猫眼电影</p></div>
  <!-- <div class="biaoqian">
    <div class="cs">
       <span>深圳</span>
       <i></i>
    </div>
    <div class="hot">
      <div class="hot-item active" data-tab=".n-hot">正在热映</div>
      <div class="hot-item " data-tab=".f-hot">即将上映</div>
      <pseudo:after>></pseudo:after>>
    </div>
    <div>
      <div class="search-entry search-icon" data-type="movie"></div>
    </div>
  </div> -->
 <div class="page-film">
   <van-tabs
      class="film-tabs"
      sticky
      v-model="curFilmType"
      @click="filmChange"
      >
      <van-tab title="正在热映">
        <FilmList film-type="nowPlaying" :list="filmList" />
      </van-tab>
      <van-tab title="即将上映">
        <FilmList film-type="comingSoon" :list="filmList" />
      </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script>
import FilmList from '@/components/FilmList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    FilmList
  },

  computed: {
    ...mapState('film', [
      'bannerList',
      'filmList',
      'loading'
    ]),

    curFilmType: {
      get () {
        return this.$store.state.film.curFilmType
      },

      set (value) {
        this.$store.commit('film/SETCURFILMTYPE', value)
      }
    }
  },

  methods: {
    ...mapActions('film', [
      'getBannerList',
      'getFilmList',
      'filmChange'
    ]),

    /**
     * 滚动条滚动事件
     */
    onScroll () {
      // 判断当前是否滚动到了底部
      let scrollTop = document.documentElement.scrollTop // 滚动条距离顶部的距离

      let scrollHeight = document.body.scrollHeight // 页面的高度
      let clientHeight = document.documentElement.clientHeight // 可视区域的高度
      // console.log(scrollTop, scrollHeight, clientHeight);

      if ((scrollHeight - clientHeight) - scrollTop < 50) {
        // console.log('到底了');
        if (!this.loading) {
          this.getFilmList(true)
        }
      }
    }
  },

  created () {
    this.getBannerList()
    this.getFilmList()

    window.addEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="less">
@import '~@/styles/common/mixins.less';
@import '~@/styles/common/variable.less';

.tou{
  height: 50px;
  background: red;
}
.tou p{
  font-size: 20px;
  color: white;
  text-align: center;
  line-height: 50px;

}
.page-film {
  .swiper {
    height: 210px;
    img {
      width: 100%;
    }
  }

  .film-item {
    .border-bottom;
    display: flex;
    align-items: center;
    padding: 15px;
    height: 94px;
    position: relative;

    .film-img {
      width: 66px;
    }

    .film-info {
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
      line-height: 1;
      color: @tabColor;
    }

    .film-buy {
      .border;
      line-height: 25px;
      height: 25px;
      width: 50px;
      color: #ff5f16;
      font-size: 13px;
      text-align: center;
      border-radius: 2px;
    }
  }

  .film-tabs {
    padding-bottom: 50px;
    overflow: hidden;
  }
}
</style>


 
