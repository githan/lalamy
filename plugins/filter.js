import Vue from 'vue'

Vue.filter('addComma', function (value) {
  if (value) {
    return value.toLocaleString()
  } else {
    return 0
  }
})

Vue.filter('setDate', function (date) {
  if (date) {
    const d = new Date(date.seconds * 1000)
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    const fullDate = year + '/' + month + '/' + day
    return fullDate
  }
})
