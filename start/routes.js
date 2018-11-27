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
  Route.get('pasien', 'PasienController.show').validator('Pagination');
  Route.get('pasien/:id', 'PasienController.detail');
  Route.post('pasien', 'PasienController.store').validator('StorePasien');
  Route.put('pasien/:id', 'PasienController.update').validator('StorePasien');
  Route.delete('pasien/:id', 'PasienController.remove')
  
  Route.get('satuan', 'SatuanController.show');
  Route.get('satuan/:id', 'SatuanController.detail');
  Route.post('satuan', 'SatuanController.store');
  Route.put('satuan/:id', 'SatuanController.update');
  Route.delete('satuan/:id', 'SatuanController.remove')
  
  Route.get('pengguna', 'PenggunaController.show').validator('Pagination');
  Route.get('pengguna/:id', 'PenggunaController.detail');
  Route.post('pengguna', 'PenggunaController.store').validator('StorePengguna');
  Route.put('pengguna/:id', 'PenggunaController.update').validator('UpdatePengguna');
  Route.delete('pengguna/:id', 'PenggunaController.remove')
  
  Route.get('jenis-pengguna', 'JenisPenggunaController.show').validator(['SortJenisPengguna','Pagination']);
  Route.get('jenis-pengguna/:id', 'JenisPenggunaController.detail');
  Route.post('jenis-pengguna', 'JenisPenggunaController.store').validator('StoreJenisPengguna');
  Route.put('jenis-pengguna/:id', 'JenisPenggunaController.update').validator('StoreJenisPengguna');
  Route.delete('jenis-pengguna/:id', 'JenisPenggunaController.remove')
  
  Route.get('jenis-satuan', 'JenisSatuanController.show');
  Route.get('jenis-satuan/:id', 'JenisSatuanController.detail');
  Route.post('jenis-satuan', 'JenisSatuanController.store');
  Route.put('jenis-satuan/:id', 'JenisSatuanController.update');
  Route.delete('jenis-satuan/:id', 'JenisSatuanController.remove');
  
  Route.get('jenis-obat', 'JenisObatController.show');
  Route.get('jenis-obat/:id', 'JenisObatController.detail');
  Route.post('jenis-obat', 'JenisObatController.store');
  Route.put('jenis-obat/:id', 'JenisObatController.update');
  Route.delete('jenis-obat/:id', 'JenisObatController.remove');
  
  Route.get('obat', 'ObatController.show');
  Route.get('obat/:id', 'ObatController.detail');
  Route.post('obat', 'ObatController.store');
  Route.put('obat/:id', 'ObatController.update');
  Route.delete('obat/:id', 'ObatController.remove');
  
  Route.post('login', 'AutentikasiController.autentikasi');
}).prefix('api/v1')
