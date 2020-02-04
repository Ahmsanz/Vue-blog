<template>
  <div id="show-blogs">
    <h1>All posts so far</h1>
    <div class="posts-collection">

    <div v-for="post in posts" class="posts-card">
      <div class="posts-content">
        <h4>{{ post.title}}</h4>
        <article>{{post.body}}</article>
      </div>
    </div>

    </div>
  </div>
</template>


<script>


export default {

  data () {
    return {
      posts: ""

    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts')
    .then(data => {console.log(data); this.posts = data.body.slice(0, 8);});
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
    border: solid 1px blue;
    margin: 20px 10px;
    padding: 30px 15px;
    border-radius: 6px;
    text-align: center;
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

  article {
    text-align: left;
  }

  #show-blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
