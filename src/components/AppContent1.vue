<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center mp-0>
      <v-progress-circular
        :size="600"
        :width="80"
        :rotate="-90"
        :value="value"
        :style="`color:${timer.color};`"
      > 
      <v-layout column align-center>
        <v-icon size="128px">{{timer.icon}}</v-icon>
        <div v-if="elaspsed" class="display-4">{{elaspsed}}</div>
      </v-layout>
      </v-progress-circular>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  props: {
    message: {
      type: Object
    }
  },
  data () {
    return {
      name: 'Vue-App-Content.1',
      value: 100,
      interval: {},
      elaspsed: null,
      timer: {
        start: null,
        running: false,
        duration: 60,
        color: '#925636',
        icon: 'fa-optin-monster'
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.timer.running) {
        const now = new Date().getTime() / 1000
        let s = this.timer.duration - Math.floor(now - this.timer.start)
        this.elaspsed = (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s
        const nextValue = 100 - ((100 * (now - this.timer.start)) / this.timer.duration)
        this.value = nextValue
        if (nextValue <= 0) {
          this.value = 0
          this.pauseTimer()
        }
      }
    }, 1000)
  },
  watch: {
    message: function (message, oldMessage) {
      console.log(message)
      if (message.duration) {
        this.timer.duration = message.duration
      }
      if (message.icon) {
        console.log(message.icon)
        this.timer.icon = message.icon
      }
      if (message.color) {
        this.timer.color = message.color
      }
      switch (message.action) {
        case 'start': return this.startTimer()
        case 'pause': return this.pauseTimer()
        case 'stop': return this.stopTimer()
      }
    }
  },
  computed: {
  },
  methods: {
    startTimer: function () {
      console.log('start')
      this.value = 100
      this.elaspsed = null
      this.timer.running = true
      this.timer.start = new Date().getTime() / 1000
    },
    pauseTimer: function () {
      console.log('pause')
      this.timer.running = !this.timer.running
    },
    stopTimer: function () {
      console.log('stop')
      this.value = 100
      this.elaspsed = null
      this.timer.running = false
      this.timer.start = null
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
  width: 100vmin; height: 100vmin;
  position: absolute;
  top:0;bottom:0;
  left:0;right:0;
  margin: auto;
}
img {
  object-fit: cover;
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
fill {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
