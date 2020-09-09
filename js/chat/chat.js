const socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')
var userName = ''
var messageLog
var loaded = false
var targetWindow = document.getElementById('targetDiv')
var inputForm = document.getElementById('uInput')
var sendButton = document.getElementById('uSend')

function init () {
  sendButton.addEventListener('click', setUserName, false)
}

var setUserName = function () {
  userName = inputForm.value
  console.log(userName)
  sendButton.removeEventListener('click', setUserName, false)
  messageLog = document.createElement('div')
  messageLog.setAttribute('id', 'msg_log')
  targetWindow.appendChild(messageLog)
  inputForm.value = ''
  inputForm.placeholder = 'Type here...'
  inputForm.style.width = '400px'
  inputForm.style.margin = '0px'
  sendButton.style.margin = '0px'
  sendButton.addEventListener('click', sendMsg, false)
  setInterval(() => {
    var mssg = {
      'type': 'heartbeat',
      'data': '^',
      'username': 'Server',
      'key': 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
    }
    socket.send(JSON.stringify(mssg))
  }, 40000)
}

function sendMsg () {
  var msg = {
    'type': 'message',
    'data': inputForm.value,
    'username': userName,
    'key': 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
  }
  socket.send(JSON.stringify(msg))
  inputForm.value = ''
}

socket.onmessage = function (e) {
  console.log(e.data)
  if (JSON.parse(e.data).type === 'message') {
    var d = new Date()
    var htmlInjection = '(' + d.getHours() + ':' + d.getMinutes() + ')' + JSON.parse(e.data).username + ': -' + JSON.parse(e.data).data
    var htmlProtect = '<p>' + htmlInjection.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>'
    messageLog.innerHTML += htmlProtect
    messageLog.scrollTop = messageLog.scrollHeight
  }
}

if (!loaded) { loaded = true; window.onload = init }
