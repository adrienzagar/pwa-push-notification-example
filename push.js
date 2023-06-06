let push = require('web-push')

const vapidKeys = {
  publicKey: 'BOWBTOylN8vW4LGWSAbryl0UnSbZi3GY7ZHPRQ1MRA25qL8QlKDhrCzk_WWpwD6exzkTvd5BLcMEVfeRe388s_M',
  privateKey: 'kjx-xLNdf5p0p8ld5YzROXHAE0u-ignsmKEeVhIpWNo'
}

push.setVapidDetails()

let sub = {
  endpoint:"https://fcm.googleapis.com/fcm/send/dYW6xynrDFI:APA91bEUDGIsIPxrhX_3yPjpW-4SZTMzjDBpwsTFpzEN7luilyLvkxDFE9CmGzrTvzSENbaEHFyntJa4569viLrJsJ3o2nUZCoSqoi1MckTx32vx3lb1mc996t8v89q_SIJPmpztyOv_",
  "expirationTime":null,
  "keys":{
    "p256dh":"BJgNmz3cEe8rgxJ587QKzLFI-D2JRavfvLFFutaV-CwnPSa8ufX-RDYNN6wf2tUbdLA7Rs9YMccCbFO5eB8RNq4",
    "auth":"UOhYteSL7HwtrkzFy10cPw"
  }
}

push.sendNotification(sub, 'Hello world')

console.log(vapidKeys)