<template>
  <header>
    <!-- 顶部开始 -->
    <div class="top">
      <div class="title">
        <img src="/static/img/logo.png" alt="" class="logo" />
        <span class="title">Listen World</span>
      </div>
      <img class="mine" src="/static/img/icon-mine.png" alt="" />
    </div>
    <!-- 顶部结束 -->
    <!-- 导航开始 -->
    <nav>
      <a class="active" href="#"><span>推荐</span></a>
      <a href="#"><span>歌手</span></a>
      <a href="#"><span>排行</span></a>
      <a href="#"><span>搜索</span></a>
    </nav>
    <!-- 导航结束 -->
  </header>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
