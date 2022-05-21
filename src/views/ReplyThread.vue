<template>
  <div class="postsContainer" id="replyThread">
    <div class="randomPostsContainer">
      <ul>
        <li
          class="postList"
          id="replyList"
          v-for="post in filteredPosts"
          :key="post.content"
        >
          <p class="postData">No. {{ post.id }}</p>
          <p
            id="postReply"
            v-bind:to="'/posts/' + post.id"
            :style="{ color: 'blue' }"
            @click="isReplying = true"
          >
            Reply
          </p>
          <hr />

          <p v-if="post.title" class="postData">
            <strong>Subject: </strong>{{ post.title }}
          </p>
          <p class="postData">{{ post.content }}</p>
          <p v-if="post.author" class="postData">
            <strong>Author: </strong>{{ post.author }}
          </p>
        </li>
      </ul>
      <div class="randomPostsContainer" v-if="this.hasReplied">
      <ul>
        <li
          v-for="post in posts" :key="post.id"
          class="postList"
          id="replyList"
        >
          <p class="postData">No. {{ post.id }}</p>
          <p
            id="postReply"
            v-bind:to="'/posts/' + post.id"
            :style="{ color: 'blue' }"
            @click="isReplying = true"
          >
            Reply
          </p>
          <hr />
           <!-- <p>Replied to post No. {{ this.randomPosts.length - 1}}</p>-->
          <p v-if="post.title" class="postData">
            <strong>Subject: </strong>{{ post.title }}
          </p>
          <p class="postData">{{ post.content }}</p>
          <p v-if="post.author" class="postData">
            <strong>Author: </strong>{{ post.author }}
          </p>
        </li>
      </ul>
    </div>
    </div>
    
    
    <div id="replyContainer" v-if="isReplying">
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
      <button v-on:click="submitForm">POST</button>
    </form>
    </div>
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
      id: this.$route.params.id,
      randomPosts: [],
      isReplying: false,
      hasReplied: false,
      errors: []
    };
  },
  methods: {
    submitForm: function () {
      this.checkForm();
      if (!this.errors.length) {
        this.hasReplied = true;
        this.isReplying = false;
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
      }
    },
    checkForm: function () {
      this.errors = [];

      if (!this.post.content) {
        this.errors.push("Please Submit Post Content.");
        console.log(this.errors);
      }
    }
  },
  computed: {
    filteredPosts: function () {
      return this.randomPosts.filter((post) => {
        return post.id == this.id;
      });
    },
  },
  created() {
    this.randomPosts = JSON.parse(localStorage.getItem("posts")) || [];
  },
};
</script>

<style></style>
