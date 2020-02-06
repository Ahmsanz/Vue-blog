<template lang="html">
  <nav>
    <ul>
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a post</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;

}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
    background: rgba(235, 189, 165, 0.4);

}
nav{
    background: rgb(231, 137, 13);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
    font-weight: bold;
}
</style>
