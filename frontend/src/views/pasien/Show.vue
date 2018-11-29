<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="title">Daftar Pasien</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-btn append:boolean="true" :to="{ name: 'createPasien'}" class="info">Data Baru</v-btn>
      <v-data-table v-bind="table" :pagination.sync="table.pagination">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id_pasien }}</td>
          <td>{{ props.item.nm_pasien }}</td>
          <td>{{ props.item.jk }}</td>
          <td>{{ props.item.pekerjaan }}</td>
          <td>{{ props.item.alamat }}</td>
          <td>
            <v-btn :disabled="button.delete.disabled" append:boolean="true" :to="{ name: 'updatePasien', params: {id: props.item.id_pasien}}" class="info">Ubah</v-btn>
            <v-btn :disabled="button.delete.disabled" @click="deleteData(props.item.id_pasien)" class="error">Hapus</v-btn>
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
        headers: [
          {
            text: 'No Pasien',
            sortable: false,
            value: 'id_pasien'
          },
          {
            text: 'Nama Pasien',
            value: 'nm_pasien'
          },
          {
            text: 'Jenis Kelamin',
            value: 'jk'
          },
          {
            text: 'Pekerjaan',
            sortable: false,
            value: 'pekerjaan'
          },
          {
            text: 'Alamat',
            sortable: false,
            value: 'alamat'
          },
          {
            text: 'Action',
            sortable: false,
            value: 'id_pasien'
          }
        ],
        items: [],
        totalItems: 0,
        url: 'http://localhost:3333/api/v1/pasien',
        loading: false,
        pagination: {
          descending: false,
          page: 1,
          rowsPerPage: 10,
          sortBy: 'nm_pasien'
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
