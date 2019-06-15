import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    CinemaList: [],
    CityList: []
  },
  getters: {
    newCitylist (state) {
      let index = 0
      let hash = {}
      let result = []

      state.CityList.forEach(city => {
        let py = city.pinyin.charAt(0).toUpperCase()
        if (hash[py]) {
          result[hash[py] - 1].list.push(city)
        } else {
          hash[py] = ++index
          let obj = {
            py: py,
            list: []
          }
          result.push(obj)
        }
      })
      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt())
    },
    hotList (state) {
      return state.CityList.filter(item => item.isHot)
    },
    indexList (state, getters) {
      return getters.newCitylist.map(item => item.py)
    }
  },
  mutations: {
    SETCINEMALIST (state, list) {
      state.CinemaList = list
    },
    SETCITYLIST (state, list) {
      state.CityList = list
    }
  },
  actions: {
    getCinemaList ({ commit }) {
      axios.get('http://localhost:8080/maoyan/ajax/cinemaList', {
        params: {
          day: '2019-06-12',
          offset: 0,
          limit: 20,
          districtId: -1,
          lineId: -1,
          hallType: -1,
          brandId: -1,
          serviceId: -1,
          areaId: -1,
          stationId: -1,
          item: '',
          updateShowDay: true,
          reqId: '1560314612687',
          cityId: 10
        }
      })
        .then(response => {
          let res = response.data
          console.log(res)
          commit('SETCINEMALIST', res.cinemas)
        })
    },
    getCityList ({ commit }) {
      axios.get('https://m.maizuo.com/gateway?k=4329869/gateway?k=4329869', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15601483346244882449173"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(response => {
        let res = response.data
        console.log(res)
        commit('SETCITYLIST', res.data.cities)
      })
    }
  }
})
