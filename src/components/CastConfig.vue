<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-btn @click="initializeCastApi">Init</v-btn>
        <v-btn @click="requestSession">Session</v-btn>
        <v-btn @click="sendMessage">Send</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>

export default {
  data () {
    return {
      applicationID: '550F28EC',
      namespace: 'urn:x-cast:com.google.cast.vue.chromecast',
      session: null
    }
  },
  created () {
    let castSenderScript = document.createElement('script')
    castSenderScript.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js')
    document.head.appendChild(castSenderScript)
    // console.log(castSenderScript)
    /* eslint-disable */
    // console.log(chrome.cast)

    const applicationID = '550F28EC'
    const namespace = 'urn:x-cast:com.google.cast.vue.chromecast'
    const session = null

    if (!chrome.cast || !chrome.cast.isAvailable) {
      setTimeout(this.initializeCastApi, 5000)
    }
  },
  mounted() {
    this.initializeCastApi()
  },
  methods: {
    initializeCastApi () {
      var sessionRequest = new chrome.cast.SessionRequest(this.$data.applicationID)
      var apiConfig = new chrome.cast.ApiConfig(sessionRequest,
        this.sessionListener,
        this.receiverListener)
      chrome.cast.initialize(apiConfig, this.onInitSuccess, this.onError)
      //console.log(chrome.cast)
    },
    onInitSuccess() {
      console.log('onInitSuccess');
    },
    onError(e) {
      console.log('onError', e);
    },
    sessionListener(e) {
      console.log('sessionListener', e);
      e.addUpdateListener(sessionUpdateListener)
      e.addMessageListener(this.namespace, this.messageListener)
    },
    receiverListener(e) {
      console.log('receiverListener', e)
      if(e === 'available') {
        console.info('receiver found')
      }
      else {
        console.info('receiver list empty')
      }
    },
    messageListener(namespace, message) {
      console.log('message', namespace, message)
    },
    requestSession() {
      console.info('requestSession')
      chrome.cast.requestSession(e => { console.log("yeah")}, this.onError)
    },
    sendMessage(message) {
      console.info('sendMessage', message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
