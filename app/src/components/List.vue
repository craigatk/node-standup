<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
      <ul>
        <li v-for="status in statusList">
          {{status.name}}: {{status.today}}
        </li>
      </ul>
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
