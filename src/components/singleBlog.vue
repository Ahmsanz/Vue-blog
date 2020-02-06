<template lang="html">
  <div id="single-blog">
    <h1>{{ post.title }}</h1>
    <article class="">
      {{ post.content }}
    </article>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      id: this.$route.params.id,
      post: ""
    }
  },
  created(){

    axios.get('https://vue-blog-8a5d8.firebaseio.com/posts/' + this.id + '.json')
    .then(res => {console.log(res.data); this.blog = res.data})
    .catch( err => console.log('oops', err))
  },
  mounted(){
    console.log(this.post);
  }
}
</script>

<style lang="css" scoped>
</style>
