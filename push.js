let push = require('web-push')

const vapidKeys = {
  publicKey: 'BOWBTOylN8vW4LGWSAbryl0UnSbZi3GY7ZHPRQ1MRA25qL8QlKDhrCzk_WWpwD6exzkTvd5BLcMEVfeRe388s_M',
  privateKey: 'kjx-xLNdf5p0p8ld5YzROXHAE0u-ignsmKEeVhIpWNo'
}

push.setVapidDetails()

let sub = {};

push.sendNotification(sub, 'Hello world')

console.log(vapidKeys)