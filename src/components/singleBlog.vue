<template lang="html">
  <div id="single-blog">

  <div class="posts-card" key={{post.id}}>
    <div class="posts-content">
      <h4>{{ post.title }}</h4>
      <article>{{post.content}}</article>
    </div>
  </div>

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
  mounted(){

    axios.get('https://vue-blog-8a5d8.firebaseio.com/posts/' + this.id + '.json')
    .then(res => {console.log(res.data); this.post = res.data})
    .catch( err => console.log('oops', err))
  }
  // mounted(){
  //   console.log(this.post);
  // }
}
</script>

<style lang="css" scoped>
.posts-collection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;

}
  .posts-card {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: auto;

    margin: 20px 10px;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    background-color: rgba(235, 189, 165, 0.2);
  }

  .posts-content button{
    background-color: red;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    padding: 3px;
  }

  .posts-content button:hover {
    background-color: red;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    padding: 3px 6px;
  }

  .posts-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
    align-items: center;
  }

  .posts-head input {
    width: 200px;
    height: 20px;
    border-radius: 5px;
  }
  article {
    text-align: left;
    color: dimgray;
  }

  h4 {
    color: rgb(231, 137, 13);
    font-weight: bold;
  }

  #single-blog {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
</style>
