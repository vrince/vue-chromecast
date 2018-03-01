<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-alert color="success" v-show="true">{{title}}</v-alert>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue-Sender-1'
    }
  }
}
</script>
