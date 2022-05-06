<template>
  <div id="mainPage">
    <h1>Welcome to the main page!</h1>
    <h2>We are undergo heavy renovation! Please check soon again!</h2>
    <h3>Updated: May 6th, 2022</h3>
    <button><router-link to="/">Get Out!</router-link></button>

    <table id="contentBoard">
      <tr>
        <th colspan="2">Boards!</th>
      </tr>

      <tr>
        <td><router-link to="/random">Random!</router-link></td>
        <td>A board for anything.</td>
      </tr>
      <tr>
        <td><router-link to="/failure">Special Place</router-link></td>
        <td>A special board for special folks...</td>
      </tr>
    </table>
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
#mainPage {
  background-image: url(https://wallup.net/wp-content/uploads/2015/12/126274-nature-landscape-sky-hill-grass-field-clouds-Windows_XP.jpg);
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  text-align: center;
}

table {
  background-color: white;
  border: 2px solid;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

th {
  border-bottom: 2px solid;
}

tr {
  border: 1px solid;
}

td {
  border: 1px solid;
  padding-left: 6px;
  padding-right: 6px;
}
</style>
