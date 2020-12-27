const toasts = document.querySelector('.toasts')
const button = document.querySelector('.toast-btn')

const messages = [
  'Message one',
  'Message two',
  'Message three',
  'Message four',
  'Message five',
]
const types = [
  'info',
  'success',
  'error',
]
button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notif)
  setTimeout(() => {
    notif.remove()
  }, 6000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}