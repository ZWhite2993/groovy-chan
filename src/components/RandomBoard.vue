<template>
  <div id="randomBoard">
    <h2>Make An Anonymous Post?</h2>
    <form>
      <input id="postTitle" type="text" placeholder="Post Title" required />
      <br>
      <textarea id="postContent" placeholder="Post Content"></textarea>
      <br>
      <input id="postAuthor" type="text" placeholder="Author" required />
    </form>
    <button>Submit Post</button>
    <br>
    <button><router-link to="/">RETURN</router-link></button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#randomBoard {
  background-image: url(https://wallup.net/wp-content/uploads/2015/12/126274-nature-landscape-sky-hill-grass-field-clouds-Windows_XP.jpg);
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  text-align: center;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  margin: 0 auto;
  margin-top: 10px;
  padding: 8px;
  width: 20%;
}
textarea{
  width: 20%;
}
button {
  margin-top: 10px;
}
</style>
