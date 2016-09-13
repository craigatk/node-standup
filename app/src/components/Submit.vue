<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
      <form v-on:submit.prevent="onSubmit">
        <div>
          <label>Your name</label>
          <input type="text" v-model="name"/>
        </div>
        <div>
          <label>Completed yesterday</label>
          <input type="text" v-model="yesterday"/>
        </div>
        <div>
          <label>Working on today</label>
          <input type="text" v-model="today"/>
        </div>
        <div>
          <label>Impediments</label>
          <input type="text" v-model="impediments"/>
        </div>
        <div>
          <button type="submit">Submit</button>
      </form>
    </div>
</template>
<style>

</style>
<script>
  const request = require('superagent')

  export default {

    data () {
      return {
        name: null,
        yesterday: null,
        today: null,
        impediments: null
      }
    },
    methods: {
      onSubmit: function (event) {
        let status = { name: this.name, yesterday: this.yesterday, today: this.today, impediments: this.impediments }

        request
          .post('/api/status')
          .send(status)
          .then((res) => {
            console.log('res', res.body)
          })
      }
    }

  }
</script>
