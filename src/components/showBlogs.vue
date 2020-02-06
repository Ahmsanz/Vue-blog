<template>
  <div id="show-blogs">
    <div class="posts-head">
      <h1>All posts so far</h1>
      <input v-model="search" type="text" placeholder="search..."/>
    </div>
    <div v-theme='"wide"' class="posts-collection">
    <router-link v-for="post in filteredPosts" v-bind:to="'/blog/' + post.id">
    <div class="posts-card" key={{post.id}}>
      <div class="posts-content">
        <h4>{{ post.title | to-uppercase}}</h4>
        <article>{{post.content | snippet}}</article>
      </div>
    </div>
  </router-link>
    </div>
  </div>
</template>


<script>
import searchMixin from '../mixins/searchMixin';

import {db} from '../firebase.js';

import axios from 'axios';

export default {

  data () {
    return {
      posts: [],
      search: ""
    }
  },
  firestore(){
    return {
      posts: db.collection('posts')
    }
  },
  created(){
    
    axios.get('https://vue-blog-8a5d8.firebaseio.com/posts.json')
    .then( res => {console.log('posts coming', res.status); console.log(res.data); return res.data})
    .then( data => {
      let postsArray = [];
      for (let key in data){
        data[key].id = key;
        postsArray.push(data[key]);
      }
      console.log(postsArray);
      this.posts = postsArray;
    })
    .catch(err => {
    console.log('Error getting documents', err);
  });

  },
  mixins: [searchMixin]
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
    width: 500px;
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
    color: dimgray;
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

  a {
    text-decoration: none;
  }
</style>
