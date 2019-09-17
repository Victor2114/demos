<template>
  <div id="app">
    <Head></Head>
    <Banner />
    <router-view/><!--通过路由设置，接入HelloWorld组件-->
  </div>
</template>

<script>

import Head from './components/Head'
import Banner from './components/Banner'
export default {
  name: 'App',
  data () {
    return {hello: 'Hello'}
  },
  components: {
    Head,
    Banner
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
