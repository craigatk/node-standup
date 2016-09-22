<template>
  <div id="app" class="container">
    <h1>Your Status</h1>
    <submit></submit>

    <h1>Team Status</h1>
    <list></list>
  </div>
</template>

<script>
import List from './components/List'
import Submit from './components/Submit'

export default {
  components: {
    List,
    Submit
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
