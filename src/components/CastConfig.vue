<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-btn @click="initializeCastApi">Init</v-btn>
        <v-btn @click="requestSession">Session</v-btn>
        <v-btn @click="sendMessage({message:'salut'})">Send</v-btn>
        <v-btn @click="stopSession">Stop</v-btn>
      </v-layout>
    </v-slide-y-transition>
    <v-snackbar :color="debug.color" v-if="debug.enabled" v-model="debug.snackbar">
      <v-icon>{{debugIcon}}</v-icon>
     {{debug.message}}
    </v-snackbar>
  </v-container>
</template>


<script>

export default {
  data () {
    return {
      applicationId: '550F28EC',
      namespace: 'urn:x-cast:com.google.cast.vue.chromecast',
      session: null,
      initialized: false,
      debug: {
        enabled: true,
        message: '',
        snackbar: false,
        color: ''
      }
    }
  },
  created () {
  },
  mounted () {
    this.initializeCastApi()
  },
  computed: {
    debugIcon: function () {
      switch (this.debug.color) {
        case 'info': return 'info outline'
        case 'error': return 'error outline'
        case 'success': return 'check'
        default: return 'report'
      }
    }
  },
  methods: {
    initializeCastApi () {
      console.log(this.applicationId)
       // eslint-disable-next-line
      cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: this.applicationId,
        // eslint-disable-next-line
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
      })
    },
    onError (e) {
      this.displayDebug(e)
    },
    receiverListener (e) {
      this.displayDebug(e, 'error')
    },
    messageListener (namespace, message) {
      console.log('message', namespace, message)
    },
    requestSession () {
      console.info('requestSession')
      // eslint-disable-next-line
      chrome.cast.requestSession(session => { 
        this.session = session
        this.displayDebug('session success', 'success')
      }, this.onError)
    },
    sendMessage (message) {
      console.info('sendMessage', message)
      if (this.session) {
        this.session.sendMessage(this.namespace, message, this.displayDebug.bind(this, message), this.onError)
      } else {
        // eslint-disable-next-line
        chrome.cast.requestSession(function (session) {
          this.session = session
          this.sendMessage(message)
        }, this.onError)
      }
    },
    stopSession () {
      if (this.session) {
        this.session.stop(e => { this.displayDebug('stop session success', 'success') }, this.onError)
      }
    },
    displayDebug (message, type) {
      if (message) {
        this.debug.message = message
        this.debug.snackbar = true
        this.debug.color = type || 'primary'
      }
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
