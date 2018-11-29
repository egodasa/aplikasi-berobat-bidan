<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Data Pengguna Aplikasi</h3>
      </div>
    </v-card-title>
    <v-card-text>
        <v-data-table
          :headers="headers"
          :items="data"
          :total-items="total_items"
          :item-key="item_key"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.username }}</td>
            <td>{{ props.item.email }}</td>
          </template>
        </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from 'axios'
export default {
    data () {
      return {
        headers: [
          { text: 'Username',value: 'username'},
          { text: 'Email',value: 'email'},
        ],
        data: [],
        total_items: 0,
        item_key: 'id_pengguna'
      }
    },
    created (){
      this.getData()
    },
    methods : {
      getData(){
        axios.get('http://localhost:3333/api/v1/pengguna')
          .then((res)=>{
            this.total_items = res.data.total;
            this.data = res.data.data;
          })
      }
    }
  }
</script>
