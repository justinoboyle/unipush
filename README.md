# unipush

Universal push notification server supporting across platforms.

### Examples

#### Server notifications

Server notifications go directly to the device, and never touch the native app's code. This is useful for sending broadcasts, or unencrypted messages.

```javascript
const Unipush = require('unipush'),
      server = new Unipush('./config')

// unique identifiers for each device
const recipients = [
    'android@abc1',
    'ios@def2',
    'desktop@hij3'
]

const message = {
    title: 'Important message!',
    message: 'This is a very important message!'
}

// full promise / async support
server.pushServer(recipients, message)
      .then(() => console.log('Sent notifications!'))
```

#### Client notifications

Client notifications are processed locally by the client. Unipush automatically creates a WebSocket (with cluster support through pubsubs) 

```javascript
const Unipush = require('unipush'),
      server = new Unipush('./config')

server.openListener(3000) // or pass in an express app object
server.setRoute('/unipush') // custom route
// server.usePubSub(redis)

// unique identifiers for each device
const recipients = [
    'android@abc1',
    'ios@def2',
    'desktop@hij3'
]

// this is processed client-side on your app, so do whatever you want :)
// functions are processed on the SERVER, BEFORE the messages goes out.
const payload = {
    messageId: 'abcdefg',
    // unique for each device
    title: device => `Hi ${device}`
}

// Events are optional.
// These are implemented in your own apps.
const events = {
    onOpen: data => console.log("A device opened the notification!"),
    onProcess: data => console.log("A device proccessed your notification!")
}

// full promise / async support
server.pushClient(recipients, message)
      .then(() => console.log('Sent notifications!'))
```
