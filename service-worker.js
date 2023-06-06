self.addEventListener('push', (e) => {
  let options = {
    body: 'This notification was generated from a push',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    action: [
      {action: 'explort', title: 'Explore PWA world'},
      {action: 'close', title: 'close',}
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hellow PWA', options)
  )
})