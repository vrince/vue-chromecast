<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-alert color="success" v-show="true">{{title}}</v-alert>
        <v-btn @click="send()">Send</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue-Sender-1',
      name: 'app1'
    }
  },
  mounted () {
    this.$store.dispatch('sendMessage', {select: this.name})
  },
  methods: {
    send () {
      this.$store.dispatch('sendMessage', {app: this.name, message: 'from sender 1'})
    }
  }
}
</script>
