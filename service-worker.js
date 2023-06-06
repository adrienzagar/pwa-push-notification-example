self.addEventListener('push', () => {
  self.registration.sendNotification('Hello world', {})
})