<template>
    <li class="postList">
        <p class="postData">No. {{ id }}</p>
        <p>
            [<router-link
                id="postReply"
                v-bind:to="'/posts/' + id"
                :style="{ color: 'blue' }"
                >Reply</router-link
            >]
        </p>
        <hr />
        <p class="postData" v-if="title">
            <strong>Subject: </strong>{{ title }}
        </p>
        <p class="postData" id="postContent">{{ content }}</p>
        <p class="postData" id="postAuthor" v-if="author">
            <strong>Author: </strong>{{ author }}
        </p>
    </li>
</template>

<script>

/**
* Component responsibilities:
* - Accept fields of a post object as props
* - Render the markup/style for a post object
*/

export default {
    props: [ 'id', 'title', 'author', 'content']
}
</script>

<style>
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
</style>