<template>
  <v-app dark>
    <v-btn color="" fab dark small top left v-show="!debug.enabled"
           @click="onEvent({ data: {debug: !debug.enabled}})">
    </v-btn>
    <v-toolbar app v-if="debug.enabled">
      <v-icon>query_builder</v-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-toolbar-title>{{currentApp}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="onEvent({ data: {debug: !debug.enabled}})">Debug</v-btn>
      <v-btn @click="onEvent({ data: {message: 'test', app: 'app1'}})">Send</v-btn>
      <v-btn flat icon @click="onEvent({ data: {action: 'start', app: 'app1'}})"><v-icon>fas fa-play</v-icon></v-btn>
      <v-btn flat icon @click="onEvent({ data: {action: 'pause', app: 'app1'}})"><v-icon>fas fa-pause</v-icon></v-btn>
      <v-btn flat icon @click="onEvent({ data: {action: 'stop', app: 'app1'}})"><v-icon>fas fa-stop</v-icon></v-btn>
      <v-btn @click="onEvent({ data: {color: '#154685', app: 'app1'}})">Color</v-btn>
      <v-btn @click="onEvent({ data: {icon: 'build', app: 'app1'}})">Icon</v-btn>
      <v-btn @click="onEvent({ data: {select: 'app1'}})">Select</v-btn>
      <v-btn-toggle v-model="currentApp">
         <v-btn v-for="(a,i) in applications" flat :value="a.name" :key="a.name">
           <span>{{i}}</span>
         </v-btn>
      </v-btn-toggle>
    </v-toolbar>
    <v-content fill-height>
      <template v-for="(a) in applications">
        <component v-if="currentApp == a.name" 
        :is="a.component" 
        :key="a.name"
        :message="currentApp == a.name && message.app == a.name ? message : null"></component>
      </template>
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
      currentApp: '',
      namespace: 'urn:x-cast:com.google.cast.vue.chromecast',
      message: null,
      applications: [ {
        name: 'app1',
        component: 'AppContent1'
      }, {
        name: 'app2',
        component: 'AppContent2'
      }
      ],
      dialog: false,
      debug: {
        enabled: false,
        message: '',
        snackbar: false,
        count: 0
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    const context = cast.framework.CastReceiverContext.getInstance()
    context.addCustomMessageListener(this.namespace, this.onEvent)
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
    onEvent (event) {
      console.log(event)
      const data = event.data
      this.displayDebug(data)
      // handle receiver level
      if (data.select) {
        this.currentApp = data.select
      }
      if (typeof data.debug !== 'undefined') {
        this.debug.enabled = data.debug
      }
      this.message = data
    },
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
