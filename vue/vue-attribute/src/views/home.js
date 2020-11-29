const addLog = {
  updated () {
    console.log('success')
  }
}
const app = {
  created () {
    console.log('extension created')
  }
}
module.exports = { addLog, app }
