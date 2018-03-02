<template>
  <v-app dark>
    <v-toolbar app>
      <v-icon>query_builder</v-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{appName}}</v-toolbar-title>
      <v-spacer/>
       <v-btn-toggle v-model="appName">
          <v-btn flat value="app1"><span>1</span></v-btn>
          <v-btn flat value="app2"><span>2</span></v-btn>
       </v-btn-toggle>
    </v-toolbar>
    <v-content>
      <app-content1 v-if="appName == 'app1'"></app-content1>
      <app-content2 name='app2' v-if="appName == 'app2'"></app-content2>
    </v-content>
    <v-snackbar color="primary" v-if="debug.enabled" v-model="debug.snackbar">
      <v-avatar size="24" color="secondary">{{debug.count}}</v-avatar>
      {{debug.message}}
    </v-snackbar>
  </v-app>
</template>

<script>
import AppContent1 from './components/AppContent1'
import AppContent2 from './components/AppContent2'

export default {
  data () {
    return {
      title: 'Vue-Receiver',
      appName: '',
      namespace: 'urn:x-cast:com.google.cast.vue.chromecast',
      debug: {
        enabled: true,
        message: '',
        snackbar: false,
        count: 0
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    const context = cast.framework.CastReceiverContext.getInstance()
    context.addCustomMessageListener(this.namespace, customEvent => {
      console.log(customEvent)
      this.displayDebug(customEvent.data)
    })
    context.start()
  },
  components: {
    AppContent1,
    AppContent2
  },
  watch: {
    appName: function () {
      this.displayDebug(`setting app ${this.appName}`)
    }
  },
  methods: {
    displayDebug (message) {
      if (message) {
        this.debug.message = message
        this.debug.snackbar = true
        this.debug.count = this.debug.count + 1
      }
    }
  }
}
</script>
