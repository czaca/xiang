<template>
  <div>
    <router-view></router-view>

    <Tabbar :tabs="tabs" />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  data () {
    return {
      tabs: [
        { id: 1, name: '电影', icon: 'icon-films', href: '/films' },
        { id: 2, name: '影院', icon: 'icon-cinemas', href: '/cinemas' },
        { id: 4, name: '我的', icon: 'icon-center', href: '/center' }
      ]
    }
  },

  components: {
    Tabbar
  }
}
</script>
