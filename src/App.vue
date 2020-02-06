<template>
  <div >
    <app-header />
    <router-view></router-view>
  </div>
</template>


<script>

import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'


export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
  },

  data () {
    return {

    }
  }
}
</script>

<style>
app {
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  font-family: verdana;
}
</style>
