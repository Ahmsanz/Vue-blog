<template>
  <div id="show-blogs">
    <div class="posts-head">
      <h1>All posts so far</h1>
      <input v-model="search" type="text" placeholder="search..."/>
    </div>
    <div v-theme='"wide"' class="posts-collection">

    <div v-for="post in filteredPosts" class="posts-card">
      <div class="posts-content">
        <h4 v-rainbow>{{ post.title | to-uppercase}}</h4>
        <article>{{post.body | snippet}}</article>
      </div>
    </div>

    </div>
  </div>
</template>


<script>


export default {

  data () {
    return {
      posts: [],
      search: ""
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts')
    .then(data => {console.log('posts ok', data.status); this.posts = data.body.slice(0, 8);});
  },
  computed: {
    filteredPosts: function(){
      return this.posts.filter( (post) => {
        return post.title.match(this.search);
      })
    }
  }
}
</script>

<style>
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
    width: 200px;
    height: auto;

    margin: 20px 10px;
    padding: 30px 15px;
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
  }

  h4 {
    color: rgb(231, 137, 13);
    font-weight: bold;
  }

  #show-blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
