<template>
  <v-app>
    <v-navigation-drawer app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <!-- v-list-tile adalah container menu -->
        <v-list-tile v-for="item in items" :key="item.title" append:boolean="true" :to="{name: item.routerLink}">
          <!-- v-list-tile-action khusus untuk icon menunya -->
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          
          <!-- v-list-tile-content khusus untuk tulisannya -->
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content app>
      <v-container fluid>
        <v-layout>
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  <v-footer class="pa-3"app>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      items: [
        { title: 'Data Pengguna', icon: 'dashboard', routerLink: 'showPengguna'},
        { title: 'Data Pasien', icon: 'dashboard', routerLink: 'showPasien'},
        { title: 'Data Satuan', icon: 'dashboard', routerLink: 'showSatuan'},
        { title: 'Data Obat', icon: 'dashboard', routerLink: 'showObat'},
        { title: 'Data Jenis Satuan', icon: 'dashboard', routerLink: 'showJsatuan'},
        { title: 'Data Jenis Pengguna', icon: 'dashboard', routerLink: 'showJpengguna'},
        { title: 'Data Jenis Obat', icon: 'dashboard', routerLink: 'showJobat'}
      ],
      right: null
    }
  }
}
</script>
