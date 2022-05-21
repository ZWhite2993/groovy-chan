<template>
  <div id="randomBoard">
    <h2>Make An Post?</h2>
    <form>
      <p id="errorMessage" v-if="this.errors.length">{{ this.errors[0] }}</p>
      <input
        id="postTitle"
        type="text"
        placeholder="Post Title (Optional)"
        v-model="post.title"
        required
      />
      <br />
      <textarea
        id="postContent"
        placeholder="Post Content"
        v-model="post.content"
        required
      ></textarea>
      <br />
      <input
        id="postAuthor"
        type="text"
        placeholder="Author (Optional)"
        v-model="post.author"
      />
      <br />
      <button v-on:click.prevent="submitForm">POST</button>
    </form>
    <button><router-link to="/main">RETURN</router-link></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        content: "",
        author: "",
        id: 0,
      },
      posts: [],
      errors: [],
    };
  },
  methods: {
    submitForm: function () {
      this.checkForm();
      if (!this.errors.length) {
        const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        let maxId = 0;
        for (let i = 0; i < storedPosts.length; i++) {
          const thisPostId = storedPosts[i].id;
          if (thisPostId > maxId) {
            maxId = thisPostId;
          }
        }
        this.post.id = maxId + 1;
        this.posts.push(this.post);
        localStorage.setItem("posts", JSON.stringify(this.posts));
        this.$router.push("/randomposts");
      }
    },
    checkForm: function () {
      this.errors = [];

      if (!this.post.content) {
        this.errors.push("Please Submit Post Content.");
        console.log(this.errors);
      }
    },
  },
  created() {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts !== null) {
      this.posts = storedPosts;
    }
  },
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
textarea {
  width: 20%;
}
button {
  margin-top: 10px;
}
#posts {
  background-color: #eee;
  width: 20%;
  margin: 0 auto;
  margin-top: 10px;
  text-align: left;
  padding: 5px 5px 5px 5px;
  border: 1px solid;
}
#errorMessage {
  font-weight: bold;
  color: red;
}
</style>
