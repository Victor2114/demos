<template>
  <div class="list">
    <h3 class="title">热门歌单推荐</h3>
    <ul v-if="discList.length">
      <li @click="selectItem(item)"  v-for="item in discList" v-bind:key="item.dissid">
        <img :src="item.imgurl" alt=""  />
        <div class="text">
          <h4 class="name">{{item.creator.name}}</h4>
          <span class="desc">{{item.dissname}}</span>
        </div>
      </li>
    </ul>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getDiscList } from '../api/recommend.js'
import { ERR_OK } from 'api/config'
export default {
  name: 'Recommend',
  data () {
    return {
      discList: []
    }
  },
  methods: {
    selectItem (item) {
      this.$router.push({
        path: `/recommend/${item.dissid}`
      })
      //this.setDisc(item)
    }
  },
  beforeMount () {
    getDiscList().then(res => {
      if (res.code === ERR_OK) {
        this.discList = res.data.list
        console.log(this.discList)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
