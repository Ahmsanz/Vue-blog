<template>
  <div >
    <add-blog />
    <show-blog />
  </div>
</template>


<script>

import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'

export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlogs
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
