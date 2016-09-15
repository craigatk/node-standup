<template>
    <div>
      <form v-on:submit.prevent="onSubmit">
        <div>
          <label>Your name</label>
          <input type="text" v-model="yourName" id="yourName"/>
        </div>
        <div>
          <label>Completed yesterday</label>
          <input type="text" v-model="yesterday" id="yesterday"/>
        </div>
        <div>
          <label>Working on today</label>
          <input type="text" v-model="today" id="today"/>
        </div>
        <div>
          <label>Impediments</label>
          <input type="text" v-model="impediments" id="impediments"/>
        </div>
        <div>
          <button type="submit" id="submit">Submit</button>
      </form>
    </div>
</template>
<style>

</style>
<script>
  import store from '../store'

  export default {

    data () {
      return {
        yourName: null,
        yesterday: null,
        today: null,
        impediments: null
      }
    },
    methods: {
      onSubmit: function (event) {
        let status = { name: this.yourName, yesterday: this.yesterday, today: this.today, impediments: this.impediments }

        store.newStatus(status)
      }
    }

  }
</script>
