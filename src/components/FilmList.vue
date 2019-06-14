// 影片列表组件
<template>
 <div> 
   <!-- <div>
     <p>近期最受期待</p>
   </div>
   <div></div> -->


  <ul class="film-list">
    <!-- <li>{{ msg | a(3, 123) }}</li> -->
    <li class="film-item"
      v-for="film in list"
      :key="film.filmId"
      >
      <img class="film-img" :src="film.poster" alt="">
      <div class="film-info">
        <p class="film-info__name">{{ film.name }}</p>
        <p class="film-info__grade"
          v-if="filmType === 'nowPlaying'"
          >
          观众评分: <span>{{ film.grade }}</span>
        </p>
        <p class="film-info__actors">主演：{{ film.actors | formatActor }}</p>
        <p class="film-info__detail">{{ film.nation }} | {{ film.runtime }}分钟</p>
      </div>
      <div class="film-buy" v-if="filmType === 'nowPlaying'">购票</div>
      <div class="film-buy" v-else>预售</div>
    </li>
  </ul>
 </div>
</template>

<script>
export default {
  props: {
    // 影片类型
    filmType: {
      validator (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['nowPlaying', 'comingSoon'].indexOf(value) !== -1
      }
    },

    // 影片数据
    list: {
      type: Array
    }
  },

  // data () {
  //   return {
  //     msg: 'hello'
  //   }
  // },

  // 过滤器
  filters: {
    // key -> 过滤器的名字
    // value -> 过滤的处理函数，会接收一个value数据, 注意要return
    // key: value
    // a: function (value, num = 1) {
    //   let a = value.slice(0, num);
    //   let b = value.slice(num);
    //   return a.toUpperCase() + b;
    // },
    // b: function (value) {
    //   return value.split('').reverse().join('');
    // }

    /**
     * 格式我们的主演信息
     */
    formatActor (value = []) {
      let str = ''
      let arr = value.map(item => item.name)
      str = arr.length > 0 ? arr.join('、') : '暂无主演'
      return str
    }
  },

  methods: {

    // formatActor (actors) {

    // }
  }
}
</script>
