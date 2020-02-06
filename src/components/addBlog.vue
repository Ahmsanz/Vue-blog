<template>
  <div id="add-blog" >
    <h2>Add a new blog post</h2>
    <form v-if="!submitted">
      <label>Blog Title: </label>
      <input type="text" v-model="blog.title" required>
      <label>Blog content: </label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" v-model="blog.categories" value="ninjas" />
        <label>Wizards</label>
        <input type="checkbox" v-model="blog.categories" value="wizards" />
        <label>Mario</label>
        <input type="checkbox" v-model="blog.categories" value="mario" />
        <label>Cheese</label>
        <input type="checkbox" v-model="blog.categories" value="cheese" />
      </div>
      <label for="author"></label>
      <select v-model="blog.author" >
        <option v-for="author in authors">{{author}}</option>
      </select>

      <button v-on:click.prevent="addPost">Save</button>
    </form>

    <div v-if="submitted">
      <h3>Thanks for your post!</h3>
    </div>
    <div id="preview">
      <h3>Preview</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content: </p>
      <p>{{blog.content}}</p>
      <p>Blog categories:</p>
      <ul v-for="category in blog.categories">
        <li>{{ category }}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>


<script>
import { db } from '../firebase';
import axios from 'axios';

export default {

  data () {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ['Adrián', 'Sara', 'Draco', 'Chula'],
      submitted: false
    }
  },
  firestore(){
    return {
        posts: db.collection('posts')
    }
  },
  methods: {
    addPost: function(){
      // this.$firestore.posts.add(this.blog);
      axios.post('https://vue-blog-8a5d8.firebaseio.com/posts.json', this.blog)
      .then(console.log('adding post to realtime database', this.blog)).catch(err => {if (err) throw err})
      // console.log('adding new post', this.blog);
      // this.$http.post('https://vue-blog-8a5d8.firebaseio.com/posts', {
      //   title: this.title,
      //   body: this.content,
      //   categories: this.categories,
      //   author: this.author
      // }).then((data) => {console.log(data); this.submitted = true;}).catch(err=> console.log('nope',err))
      // axios.post('https://vue-blog-8a5d8.firebaseio.com/posts', {headers: {'Content-Type': 'application/json' }, data: this.blog}, ).then( res => { console.log(res); this.submitted = true;});
    }
  }
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 800px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
