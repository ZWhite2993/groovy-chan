<template>
  <div id="replyThread">
    <ul>
      <li id="replyList" v-for="post in filteredPosts" :key="post.content">
        <p v-if="post.title"><strong>Subject: </strong>{{ post.title }}</p>
        <p>{{ post.content }}</p>
        <p v-if="post.author"><strong>Author: </strong>{{ post.author }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      randomPosts: [],
    };
  },
  methods: {},
  computed: {
    filteredPosts: function() {
      return this.randomPosts.filter(post => {
        return post.id.toString().includes(this.id)
      })
    }
  },
  created() {
    this.randomPosts = JSON.parse(localStorage.getItem("posts")) || [];
  },
};
</script>

<style>

</style>
