<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Your Status</h1>
      </div>
    </div>
    <submit></submit>

    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Team Status</h1>
      </div>
    </div>
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
  height: 100%;
}
</style>
