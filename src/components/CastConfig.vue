<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex>
          <v-card>
            <v-toolbar dark>
              <v-toolbar-title>Session</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="secondary" @click="initializeCastApi">Re-Init</v-btn>
              <v-btn color="secondary" @click="requestSession">Request</v-btn>
              <v-btn :disabled="!session" color="primary" @click="sendMessage({message:'salut'})">Test</v-btn>
              <v-btn :disabled="!session" color="error" @click="stopSession">Stop</v-btn>
            </v-toolbar>
            <v-list two-line v-if="session">
              <template v-for="(item, index) in sessionItems">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                <v-list-tile v-else :key="item.title">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.key"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.value"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'applicationId',
      'namespace',
      'session'
    ]),
    sessionItems: function () {
      console.log(this.session)
      const items = []
      items.push({key: 'application id', value: this.session.appId})
      items.push({key: 'display name', value: this.session.displayName})
      items.push({key: 'name', value: this.session.receiver.friendlyName})
      items.push({key: 'type', value: this.session.receiver.receiverType})
      return items
    }
  },
  methods: {
    ...mapActions([
      'initializeCastApi',
      'requestSession',
      'sendMessage',
      'stopSession'
    ])
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
