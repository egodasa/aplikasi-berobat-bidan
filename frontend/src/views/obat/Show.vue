<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="title">Daftar Obat</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-btn append:boolean="true" :to="{ name: 'createObat'}" class="info">Data Baru</v-btn>
      <v-data-table v-bind="table" :pagination.sync="table.pagination">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.nm_obat }}</td>
          <td>{{ props.item.stok + ' ' + props.item.nm_satuan }}</td>
          <td>{{ numToRupiah(props.item.hrg_obat) + '/' + props.item.nm_satuan }}</td>
          <td>{{ props.item.nm_jobat}}</td>
          <td>{{ props.item.nm_satuan}}</td>
          <td>
            <v-btn :disabled="button.delete.disabled" append:boolean="true" :to="{ name: 'updateObat', params: {id: props.item[table.primaryKey]}}" class="info">Ubah</v-btn>
            <v-btn :disabled="button.delete.disabled" @click="deleteData(props.item[table.primaryKey])" class="error">Hapus</v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from 'axios'
import { DataTable } from '../../mixins/DataTable.js'
export default {
  mixins: [DataTable],
  data () {
    return {
      tableObjectName: 'table',
      table: {
        primaryKey: 'id_obat',
        headers: [
          {
            text: 'Nama Obat',
            value: 'nm_obat'
          },
          {
            text: 'Stok',
            value: 'stok'
          },
          {
            text: 'Harga Obat',
            value: 'hrg_obat'
          },
          {
            text: 'Jenis Obat',
            value: 'nm_jobat'
          },
          {
            text: 'Satuan',
            value: 'nm_satuan',
            width: '0'
          },
          {
            text: 'Action',
            sortable: false,
            value: 'id_obat'
          }
        ],
        items: [],
        totalItems: 0,
        url: 'http://localhost:3333/api/v1/obat',
        loading: false,
        pagination: {
          descending: false,
          page: 1,
          rowsPerPage: 10,
          sortBy: 'nm_obat'
        } 
      },
      button: {
        delete: {
          disabled: false
        }
      }
    }
  },
  watch: {
    "table.pagination": {
      handler () {
        this.getDataTableRows()
      },
      deep: true
    }
  },
  methods: {
    deleteData(id){
      this.button.delete.disabled = !this.button.delete.disabled
      axios.delete(this.table.url + '/' + id)
        .then(res=>{
          if(res.status == 204){
            this.getDataTableRows()
          }else{
            console.log(res)
          }
        })
        .catch(err=>{
          console.log(err)
        })
        .finally(()=>{
          this.button.delete.disabled = !this.button.delete.disabled
        })
    },
    numToRupiah(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return 'Rp' + parts.join(".");
    }
  } 
}  
</script>
