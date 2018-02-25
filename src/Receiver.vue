<template>
  <v-app dark>
    <v-toolbar app>
      <v-icon>query_builder</v-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color='error'>Button</v-btn>
    </v-toolbar>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue-Receiver'
    }
  },
  name: 'App'
}
</script>
