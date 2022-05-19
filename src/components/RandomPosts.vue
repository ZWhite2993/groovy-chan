<template>
  <div class="postsContainer" id="randomPosts">
    <div class="randomPostsContainer">
      <h1 v-if="!randomPosts.length" :style="{ color: 'white' }">
        NO POSTS FOUND
      </h1>
      <ul>
        <li class="postList" v-for="post in randomPosts" :key="post.id">
          <p class="postData">No. {{ post.id }}</p>
          <p>
            [<router-link
              id="postReply"
              v-bind:to="'/posts/' + post.id"
              :style="{ color: 'blue' }"
              >Reply</router-link
            >]
          </p>
          <hr />
          <p class="postData" v-if="post.title">
            <strong>Subject: </strong>{{ post.title }}
          </p>
          <p class="postData" id="postContent">{{ post.content }}</p>
          <p class="postData" id="postAuthor" v-if="post.author">
            <strong>Author: </strong>{{ post.author }}
          </p>
        </li>
      </ul>
    </div>
    <button><router-link to="/random">Return to Post Page</router-link></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomPosts: [],
    };
  },
  methods: {},

  created() {
    this.randomPosts = JSON.parse(localStorage.getItem("posts")) || [];
    console.log(localStorage.getItem("posts"));
  },
};
</script>

<style>
.postsContainer {
  text-align: center;
}
.randomPostsContainer {
  background-color: #333;
  padding-top: 0px;
  width: 40%;
  margin: 0 auto;
}
.postList {
  list-style: none;
  background-color: whitesmoke;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  padding-bottom: 10px;
}
.postData {
  margin-bottom: 0px;
  margin-top: 10px;
}
ul {
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 0px;
}
</style>
