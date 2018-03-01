<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer" 
      enable-resize-watcher
      fixed  
      app
      >
      <v-list class="pt-0" dense>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-btn :to="item.route" :disabled="!item.route" block flat>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-fab-transition>
                <v-btn v-if="item.receiverRoute" :to="item.receiverRoute"
                  color="error" fab dark small absolute right
                  v-show="true">
                  <v-icon>code</v-icon>
                </v-btn>
              </v-fab-transition>
            </v-list-tile-content>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>  
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      miniVariant: false,
      title: 'Vue-Sender',
      items: [ {
        title: 'Configuration'
      },
      {
        icon: 'cast',
        title: 'Session',
        route: '/'
      }, {
        title: 'Applications'
      }, {
        icon: 'code',
        title: 'Sender 1',
        route: '/sender1',
        receiverRoute: '/app1'
      }]
    }
  },
  name: 'App'
}
</script>
