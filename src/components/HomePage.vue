<template>
  <div id="homePage">
    <h1 >Welcome to <span class="colorChangingLogo">Groovy Chan!</span></h1>
    <h2>We're Glad you're here!</h2>
    
    <h3>Groovy Chan is under consruction!</h3>
      <img src="http://www.textfiles.com/underconstruction/Corridor4748construction_spin.gif" alt="Construction1">
      <img src="http://www.textfiles.com/underconstruction/MoMotorCity4109construct.gif" alt="Construction2">
      <img src="http://www.textfiles.com/underconstruction/TokyoFuji7118constructsonic.gif" alt="Construction3">
    <br>
    <h5>Please come back!</h5>
    <h6>Enjoy your time!</h6>
  
    <button><router-link to="/main">Enter!</router-link></button>
    <br>
    <img src="http://www.textfiles.com/underconstruction/Nebula5275_underconstructionsmall1.gif" alt="skull-with-shovels">
    <br>
    <audio controls src="assets/Super.mp3" ></audio>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  methods: {

  },

}
</script>

<style>
#homePage {
  text-align: center;
  background-image: url(https://i.pinimg.com/originals/67/b6/47/67b6477ac6df198ff8726cdd6a5bbaf2.gif);
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
}
.colorChangingLogo {
  animation: color-change 500ms infinite;
}

@keyframes color-change {
  0%   {color: violet;}
  17%  {color: indigo;}
  33%  {color: blue;}
  49%   {color: green;}
  65%  {color: yellow;}
  81%  {color: orange;}
  100%   {color: red;}
}
a {
  text-decoration: none;
  color: black;
}
a:visited {
  text-decoration: none;
  color: black;
}
router-link {
  text-decoration: none;
}
audio {
  bottom: 0;
  position: fixed;
  right: 0;
}
</style>
