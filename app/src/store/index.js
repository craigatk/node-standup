import { EventEmitter } from 'events'

const request = require('superagent')

const store = new EventEmitter()

let statusList = []

let addStatus = (newStatus) => {
  if (!statusList) {
    statusList = []
  }

  statusList.push(newStatus)

  store.emit('statusList-updated')
}

store.newStatus = (status) => {
  return request
    .post('/api/status')
    .send(status)
    .then(function (res) {
      let newStatus = res.body

      addStatus(newStatus)
    })
}

store.loadAll = () => {
  return request.get('/api/status/all')
    .then(res => {
      statusList = res.body

      return statusList
    })
}

store.getStatusList = () => {
  return statusList
}

export default store
