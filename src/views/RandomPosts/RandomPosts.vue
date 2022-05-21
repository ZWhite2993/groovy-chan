<template>
  <div class="postsContainer" id="randomPosts">
    <div class="randomPostsContainer">
      <h1 v-if="!randomPosts.length" :style="{ color: 'white' }">
        NO POSTS FOUND
      </h1>
      <ul>
        <post-item
          v-for="post in randomPosts" 
          :key="post.id" 
          :id="post.id" 
          :title="post.title" 
          :author="post.author"
          :content="post.content"
        />
      </ul>
    </div>
    <button><router-link to="/random">Make a post.</router-link></button>
  </div>
</template>

<script>
/**
* Component responsibilities:
* - Fetches any existing posts
* - Render any posts found, or a message if no posts exist currently
* - Offers a redirect to user to the post creation page
*/
import PostItem from './components/PostItem.vue';

export default {
  components: { PostItem },

  data() {
    return {
      randomPosts: [],
    };
  },

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
ul {
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 0px;
}
</style>
