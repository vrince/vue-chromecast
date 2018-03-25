<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container>
          <v-card>
            <v-card-text>
              <h1>Timer</h1>
              <v-layout row align-center>
                <v-subheader>Duration</v-subheader>
                <v-slider thumb-label step="10" ticks :max="60*5" v-model="duration"></v-slider>
                <h2>{{duration}}</h2>
              </v-layout>
              <v-layout row align-center>
                <v-subheader>Color</v-subheader>
                <swatches background-color="" v-model="color" inline></swatches>
              </v-layout>
              <v-layout row align-center>
                <v-subheader>Icon</v-subheader>
                <v-btn flat icon v-for="i in ['fa-optin-monster','fa-android','fa-dribbble','fa-earlybirds','fa-frown','fa-fort-awesome', 'fa-meh', 'fa-smile', 'fa-rocket']" :key="i" @click="setIcon(i)">
                  <v-icon>fas {{i}} </v-icon>
                </v-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-container>
        <v-layout row>
          <v-btn color="primary" @click="startTimer()">Start</v-btn>
          <v-btn @click="pauseTimer()">Pause</v-btn>
          <v-btn @click="stopTimer()">Stop</v-btn>
        </v-layout>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Swatches from 'vue-swatches'
export default {
  data () {
    return {
      title: 'Vue-Sender-1',
      name: 'app1',
      duration: 1,
      color: '',
      icon: 'fa-optin-monster',
      input: ''
    }
  },
  mounted () {
    this.$store.dispatch('sendMessage', {select: this.name})
  },
  components: {
    Swatches
  },
  watch: {
    color: function () {
      this.$store.dispatch('sendMessage', {app: this.name, color: this.color})
    },
    duration: function () {
      this.$store.dispatch('sendMessage', {app: this.name, duration: this.duration})
    }
  },
  methods: {
    setIcon (i) {
      this.$store.dispatch('sendMessage', {app: this.name, icon: i})
    },
    startTimer () {
      this.$store.dispatch('sendMessage', {app: this.name, action: 'start'})
    },
    pauseTimer () {
      this.$store.dispatch('sendMessage', {app: this.name, action: 'pause'})
    },
    stopTimer () {
      this.$store.dispatch('sendMessage', {app: this.name, action: 'stop'})
    }
  },
  computed: {
  }
}
</script>
