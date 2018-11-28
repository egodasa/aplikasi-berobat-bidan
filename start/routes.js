'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.get('pasien', 'PasienController.show').validator('showPasien');
  Route.get('pasien/:id', 'PasienController.detail');
  Route.post('pasien', 'PasienController.store').validator('StorePasien');
  Route.put('pasien/:id', 'PasienController.update').validator('StorePasien');
  Route.delete('pasien/:id', 'PasienController.remove')
  
  Route.get('satuan', 'SatuanController.show').validator('showSatuan');
  Route.get('satuan/:id', 'SatuanController.detail');
  Route.post('satuan', 'SatuanController.store').validator('StoreSatuan');
  Route.put('satuan/:id', 'SatuanController.update').validator('StoreSatuan');
  Route.delete('satuan/:id', 'SatuanController.remove');
  
  Route.get('pengguna', 'PenggunaController.show').validator('showPengguna');
  Route.get('pengguna/:id', 'PenggunaController.detail');
  Route.post('pengguna', 'PenggunaController.store').validator('StorePengguna');
  Route.put('pengguna/:id', 'PenggunaController.update').validator('UpdatePengguna');
  Route.delete('pengguna/:id', 'PenggunaController.remove')
  
  Route.get('jenis-pengguna', 'JenisPenggunaController.show').validator('showJenisPengguna');
  Route.get('jenis-pengguna/:id', 'JenisPenggunaController.detail');
  Route.post('jenis-pengguna', 'JenisPenggunaController.store').validator('StoreJenisPengguna');
  Route.put('jenis-pengguna/:id', 'JenisPenggunaController.update').validator('StoreJenisPengguna');
  Route.delete('jenis-pengguna/:id', 'JenisPenggunaController.remove')
  
  Route.get('jenis-satuan', 'JenisSatuanController.show').validator('showJenisPengguna');
  Route.get('jenis-satuan/:id', 'JenisSatuanController.detail');
  Route.post('jenis-satuan', 'JenisSatuanController.store').validator('StoreJenisSatuan');
  Route.put('jenis-satuan/:id', 'JenisSatuanController.update').validator('StoreJenisSatuan');
  Route.delete('jenis-satuan/:id', 'JenisSatuanController.remove');
  
  Route.get('jenis-obat', 'JenisObatController.show').validator('showJenisObat');
  Route.get('jenis-obat/:id', 'JenisObatController.detail');
  Route.post('jenis-obat', 'JenisObatController.store').validator('StoreJenisSatuan');
  Route.put('jenis-obat/:id', 'JenisObatController.update').validator('StoreJenisSatuan');
  Route.delete('jenis-obat/:id', 'JenisObatController.remove');
  
  Route.get('obat', 'ObatController.show').validator('ShowObat');
  Route.get('obat/:id', 'ObatController.detail');
  Route.post('obat', 'ObatController.store').validator('StoreObat');
  Route.put('obat/:id', 'ObatController.update').validator('StoreObat');
  Route.delete('obat/:id', 'ObatController.remove');
  
  Route.post('login', 'AutentikasiController.autentikasi');
}).prefix('api/v1')
