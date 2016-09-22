<template>
    <div class="row">
      <div class="col-md-9 col-md-offset-3">
        <dl class="dl-horizontal" v-for="status in statusList">
          <dt>Name</dt>
          <dd>{{status.name}}</dd>
          <dt>Completed yesterday</dt>
          <dd>{{status.yesterday}}</dd>
          <dt>Working on today</dt>
          <dd>{{status.today}}</dd>
          <dt>Impediments</dt>
          <dd>{{status.impediments}}</dd>
        </dl>
      </div>
    </div>
</template>
<style>

</style>
<script>
  import store from '../store'

  export default {

    data () {
      return {
        statusList: []
      }
    },
    created () {
      store.on('statusList-updated', this.update)

      store.loadAll().then((list) => {
        this.statusList = list
      })
    },
    destroyed () {
      store.removeListener('statusList-updated', this.update)
    },
    methods: {
      update: function () {
        this.statusList = store.getStatusList()
      }
    }
  }
</script>
