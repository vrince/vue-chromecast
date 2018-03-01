<template>
  <v-container fluid>
    <v-layout>
      <v-alert color="info" v-show="true">{{ message }}</v-alert>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      name: 'Vue-App-Content.2',
      message: 'app content 2'
    }
  },
  name: 'app2'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
