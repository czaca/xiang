<template>
  <div class="mian">
<ul class="cinema-list">
      <li class="cinema-list01" v-for="cinema in list" :key="cinema.id">
        <p class="cinema-list01-1">
          <span class="content01">{{ cinema.nm}}</span>
          <span class="content02">{{ cinema.sellPrice}}</span>
          <span class="content03">元起</span>
        </p>
        <p class="cinema-list01-2">
          <span class="content04">{{ cinema.addr}}</span>
          <span class="content05">{{ cinema.distance}}</span>
        </p>
        <p class="cinema-list01-3">
          <span class="content06">退</span>
          <span class="content07">改签</span>
          <span class="content08">{{ cinema.tag.vipTag}}</span>
          <span class="content09">{{ cinema.tag.hallTypeVOList |format}}</span>
        </p>
        <p class="cinema-list01-4">
          <span class="content010">卡</span>
          <span class="content011">{{cinema.promotion.cardPromotionTag}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  filters: {
    format (value) {
      let str = ''
      let arr = value.map(item => item.name)
      str = arr.join('丶')
      return str
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/style/common/mixins.less';
body,html{
  overflow-y: hidden;
}
.mian {
  position: absolute;
  top: 120px;
  z-index: 0;
  padding-left: 12px;
  padding-bottom: 50px;
  .cinema-list01 {
    width: 343px;
    height: 106px;
    margin: 15px 0px;
   .border-bottom;
    p {
      height: 23px;
      line-height: 20px;
      .content01 {
        display: inline-block;
        font-size: 15px;
        line-height: 23px;
        color: #000;
        font-weight: 900
      }
      .content02 {
        margin-left: 3px;
        font-size: 18px;
        color: #f03d37;
      }
      .content03 {
        margin-left: 3px;
        font-size: 11px;
        color: #f03d37;
      }
    }
  }
  .cinema-list01-2 {
    margin-top: 6px;
    font-size: 13px;
    color: #666;
  }
  .content04 {
width:260px;
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
  }
  .content05 {
    float:right;
  }
  .content06,.content07,.content09 {
    .content
  }
  .content08{
    color: #f90;
    border: 1px solid #f90;
    font-size: 13px;
    border-radius: 2px;
    margin-right: 5px;
    padding: 0 3px;
  }
  .content010 {
    color: #fff;
    border: 1px solid #589daf;
    font-size: 11px;
    border-radius: 2px;
    margin-right: 5px;
    background: #8000ff;
  }
  .content011 {
    font-size: 11px;
    color: #666;
  }
}
</style>
