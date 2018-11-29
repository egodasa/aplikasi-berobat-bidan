import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import ShowPasien from './views/pasien/Show.vue'
import CreatePasien from './views/pasien/Create.vue'
import UpdatePasien from './views/pasien/Update.vue'

import ShowJsatuan from './views/jenisSatuan/Show.vue'
import CreateJsatuan from './views/jenisSatuan/Create.vue'
import UpdateJsatuan from './views/jenisSatuan/Update.vue'

import ShowSatuan from './views/satuan/Show.vue'
import CreateSatuan from './views/satuan/Create.vue'
import UpdateSatuan from './views/satuan/Update.vue'

import ShowJobat from './views/jenisObat/Show.vue'
import CreateJobat from './views/jenisObat/Create.vue'
import UpdateJobat from './views/jenisObat/Update.vue'

import ShowJpengguna from './views/jenisPengguna/Show.vue'
import CreateJpengguna from './views/jenisPengguna/Create.vue'
import UpdateJpengguna from './views/jenisPengguna/Update.vue'

import ShowPengguna from './views/pengguna/Show.vue'
import CreatePengguna from './views/pengguna/Create.vue'
import UpdatePengguna from './views/pengguna/Update.vue'

import ShowObat from './views/obat/Show.vue'
import CreateObat from './views/obat/Create.vue'
import UpdateObat from './views/obat/Update.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pasien',
      name: 'showPasien',
      component: ShowPasien
    },
    {
      path: '/pasien/create',
      name: 'createPasien',
      component: CreatePasien
    },
    {
      path: '/pasien/update/:id',
      name: 'updatePasien',
      component: UpdatePasien
    },
    {
      path: '/jenis-satuan',
      name: 'showJsatuan',
      component: ShowJsatuan
    },
    {
      path: '/jenis-satuan/create',
      name: 'createJsatuan',
      component: CreateJsatuan
    },
    {
      path: '/jenis-satuan/update/:id',
      name: 'updateJsatuan',
      component: UpdateJsatuan
    },
    {
      path: '/satuan',
      name: 'showSatuan',
      component: ShowSatuan
    },
    {
      path: '/satuan/create',
      name: 'createSatuan',
      component: CreateSatuan
    },
    {
      path: '/satuan/update/:id',
      name: 'updateSatuan',
      component: UpdateSatuan
    },
    {
      path: '/jenis-pengguna',
      name: 'showJpengguna',
      component: ShowJpengguna
    },
    {
      path: '/jenis-pengguna/create',
      name: 'createJpengguna',
      component: CreateJpengguna
    },
    {
      path: '/jenis-pengguna/update/:id',
      name: 'updateJpengguna',
      component: UpdateJpengguna
    },
    {
      path: '/jenis-obat',
      name: 'showJobat',
      component: ShowJobat
    },
    {
      path: '/jenis-obat/create',
      name: 'createJobat',
      component: CreateJobat
    },
    {
      path: '/jenis-obat/update/:id',
      name: 'updateJobat',
      component: UpdateJobat
    },
    {
      path: '/pengguna',
      name: 'showPengguna',
      component: ShowPengguna
    },
    {
      path: '/pengguna/create',
      name: 'createPengguna',
      component: CreatePengguna
    },
    {
      path: '/pengguna/update/:id',
      name: 'updatePengguna',
      component: UpdatePengguna
    },
    {
      path: '/obat',
      name: 'showObat',
      component: ShowObat
    },
    {
      path: '/obat/create',
      name: 'createObat',
      component: CreateObat
    },
    {
      path: '/obat/update/:id',
      name: 'updateObat',
      component: UpdateObat
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
