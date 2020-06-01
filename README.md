# KISS Google Cloud PubSub

Returns a factory function that, when paired with a kiss-google-cloud-client instance, will return a HTTP API wrapper


```javascript
const fetchFactory = require('kiss-google-cloud-client')
const pubsubFactory = require('kiss-google-cloud-pubsub')

const client = fetchFactory({
  async credentials() {
    const creds = await getDatabaseCredentials()
    return {
      clientEmail: creds.client_email,
      privateKey: creds.private_key
    }
  }
})

const pubsub = pubsubFactory(client)
```