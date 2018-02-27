<template>
   <v-app dark>
    <v-toolbar app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>  
    <v-content>
      <router-view/>
    </v-content>
   </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue-App-Content.1'
    }
  },
  name: 'AppContent1'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
