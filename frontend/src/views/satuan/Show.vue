<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="title">Daftar Satuan</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-btn append:boolean="true" :to="{ name: 'createSatuan'}" class="info">Data Baru</v-btn>
      <v-data-table v-bind="table" :pagination.sync="table.pagination">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.nm_satuan }}</td>
          <td>{{ props.item.nm_jsatuan }}</td>
          <td>
            <v-btn :disabled="button.delete.disabled" append:boolean="true" :to="{ name: 'updateSatuan', params: {id: props.item[table.primaryKey]}}" class="info">Ubah</v-btn>
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
        primaryKey: 'id_satuan',
        headers: [
          {
            text: 'Nama Satuan',
            value: 'nm_satuan'
          },
          {
            text: 'Jenis Satuan',
            value: 'nm_jsatuan'
          },
          {
            text: 'Action',
            sortable: false,
            value: 'id_satuan'
          }
        ],
        items: [],
        totalItems: 0,
        url: 'http://localhost:3333/api/v1/satuan',
        loading: false,
        pagination: {
          descending: false,
          page: 1,
          rowsPerPage: 10,
          sortBy: 'nm_satuan'
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
    }
  } 
}  
</script>
