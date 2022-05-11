<template>
  <div id="UserPage">
    <h1 id="profileNameDisplay"></h1>
    <h2>You've found your secret place...</h2>
    <h3>Soon you can make it your own!</h3>
    <h5>Please come back again soon. Won't you?</h5>
    <img
      src="https://web.archive.org/web/20090821073605/http://geocities.com/sacredwisdom2003/globe.gif"
      alt="globe"
    />
    <br />
    <br />
    <br />
    <button><router-link to="/main">I want to get out...</router-link></button>
    <br />
    <audio controls src="assets/Depr.mp3"></audio>
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
#UserPage {
  background-color: black;
  color: white;
  text-align: center;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
}
audio {
  bottom: 0;
  position: fixed;
  right: 0;
}
</style>
