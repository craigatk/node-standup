<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
const request = require('superagent')

export default {

  data () {
    return {
      msg: null
    }
  },
  created () {
    request.get('/api/')
    .then(res => {
      this.msg = res.body.msg
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
