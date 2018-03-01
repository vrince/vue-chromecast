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
      name: 'Vue-App-Content.1',
      message: 'app content 1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
