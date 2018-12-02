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
  Route.get('pasien', 'PasienController.show').validator('ShowPasien');
  Route.get('pasien/:id', 'PasienController.detail');
  Route.post('pasien', 'PasienController.store').validator('StorePasien');
  Route.put('pasien/:id', 'PasienController.update').validator('StorePasien');
  Route.delete('pasien/:id', 'PasienController.remove')
  Route.post('pasien/deletes', 'PasienController.bulkDeletes')
  
  Route.get('satuan', 'SatuanController.show').validator('ShowSatuan');
  Route.get('satuan/:id', 'SatuanController.detail');
  Route.post('satuan', 'SatuanController.store').validator('StoreSatuan');
  Route.put('satuan/:id', 'SatuanController.update').validator('StoreSatuan');
  Route.delete('satuan/:id', 'SatuanController.remove');
  Route.post('satuan/deletes', 'SatuanController.bulkDeletes');
  
  Route.get('pengguna', 'PenggunaController.show').validator('ShowPengguna');
  Route.get('pengguna/:id', 'PenggunaController.detail');
  Route.post('pengguna', 'PenggunaController.store').validator('StorePengguna');
  Route.put('pengguna/:id', 'PenggunaController.update').validator('UpdatePengguna');
  Route.delete('pengguna/:id', 'PenggunaController.remove')
  Route.post('pengguna/deletes', 'PenggunaController.bulkDeletes')
  
  Route.get('jenis-pengguna', 'JenisPenggunaController.show').validator('ShowJenisPengguna');
  Route.get('jenis-pengguna/:id', 'JenisPenggunaController.detail');
  Route.post('jenis-pengguna', 'JenisPenggunaController.store').validator('StoreJenisPengguna');
  Route.put('jenis-pengguna/:id', 'JenisPenggunaController.update').validator('StoreJenisPengguna');
  Route.delete('jenis-pengguna/:id', 'JenisPenggunaController.remove')
  Route.post('jenis-pengguna/deletes', 'JenisPenggunaController.bulkDeletes')
  
  Route.get('jenis-satuan', 'JenisSatuanController.show').validator('ShowJenisSatuan');
  Route.get('jenis-satuan/:id', 'JenisSatuanController.detail');
  Route.post('jenis-satuan', 'JenisSatuanController.store').validator('StoreJenisSatuan');
  Route.put('jenis-satuan/:id', 'JenisSatuanController.update').validator('StoreJenisSatuan');
  Route.delete('jenis-satuan/:id', 'JenisSatuanController.remove');
  Route.post('jenis-satuan/deletes', 'JenisSatuanController.bulkDeletes');
  
  Route.get('jenis-obat', 'JenisObatController.show').validator('ShowJenisObat');
  Route.get('jenis-obat/:id', 'JenisObatController.detail');
  Route.post('jenis-obat', 'JenisObatController.store').validator('StoreJenisObat');
  Route.put('jenis-obat/:id', 'JenisObatController.update').validator('StoreJenisObat');
  Route.delete('jenis-obat/:id', 'JenisObatController.remove');
  Route.post('jenis-obat/deletes', 'JenisObatController.bulkDeletes');
  
  Route.get('obat', 'ObatController.show').validator('ShowObat');
  Route.get('obat/:id', 'ObatController.detail');
  Route.post('obat', 'ObatController.store').validator('StoreObat');
  Route.put('obat/:id', 'ObatController.update').validator('StoreObat');
  Route.delete('obat/:id', 'ObatController.remove');
  Route.post('obat/deletes', 'ObatController.bulkDeletes');
  
  Route.get('keranjang-beli-obat', 'KeranjangBeliObatController.show').validator('ShowKeranjangBeliObat');
  Route.get('keranjang-beli-obat/:id', 'KeranjangBeliObatController.detail');
  Route.post('keranjang-beli-obat', 'KeranjangBeliObatController.store').validator('StoreKeranjangBeliObat');
  Route.put('keranjang-beli-obat/:id', 'KeranjangBeliObatController.update');
  Route.delete('keranjang-beli-obat/:id?', 'KeranjangBeliObatController.remove');
  Route.post('keranjang-beli-obat/deletes', 'KeranjangBeliObatController.bulkDeletes');
  
  Route.post('login', 'AutentikasiController.autentikasi');
  
  Route.get('beli-obat', 'BeliObatController.show').validator('ShowBeliObat');
  Route.get('beli-obat/:id', 'BeliObatController.detail');
  Route.post('beli-obat', 'BeliObatController.store').validator('StoreBeliObat');
  Route.put('beli-obat/:id', 'BeliObatController.update');
  Route.delete('beli-obat/:id', 'BeliObatController.remove');
  Route.post('beli-obat/deletes', 'BeliObatController.bulkDeletes');
  
}).prefix('api/v1')
