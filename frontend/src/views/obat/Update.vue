<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="title">Perubahan Data</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <form-generator :fields="form.fields"></form-generator>
    </v-card-text>
    <v-card-actions>
      <!-- This button is the part of form generator. Just change button caption with You need -->
      <v-btn v-bind="form.buttons.save" @click="sendForm('put')">Simpan Perubahan Data</v-btn>
      <v-btn v-bind="form.buttons.reset" @click="clearForm()">Berishkan</v-btn>
      
      <!-- This button isn't included in form generator -->
      <v-btn append:boolean="true" :to="{ name: 'showObat'}" class="normal">Daftar Obat</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from 'axios'
import { formData } from '../../mixins/FormData.js'
import formGenerator from '../../components/formGenerator.vue'
export default {
  // all formGenerator methods are inside mixin. Please refer to src/mixins/formData.js file.
  mixins: [formData],
  components: {formGenerator},
  data () {
    return {
      // formObject to define formGenerator object name
      formObject: 'form',
      form: {
        // Form data should be structured like bellow object
        // Just change what You need
        // URL for save data
        saveUrl: "http://localhost:3333/api/v1/obat",
        // Fields list form formGenerator component
        fields: [
          {
            name: "nm_obat",
            inputType: "v-text-field",
            label: "Nama Obat",
            error: false,
            errorMessages: null,
            default: null,
            val: null
          },
          {
            name: "stok",
            inputType: "v-text-field",
            label: "Jumlah Stok",
            error: false,
            errorMessages: null,
            default: null,
            val: null,
            type: "number"
          },
          {
            name: "id_satuan_obat",
            inputType: "v-select",
            label: "Satuan",
            error: false,
            errorMessages: null,
            default: null,
            val: null,
            itemText: 'nm_satuan',
            itemValue: 'id_satuan',
            items: []
          },
          {
            name: "hrg_obat",
            inputType: "v-text-field",
            label: "Harga Per Satuan",
            error: false,
            errorMessages: null,
            default: null,
            val: null,
            type: "number"
          },
          {
            name: "id_jobat",
            inputType: "v-select",
            label: "Jenis Obat",
            error: false,
            errorMessages: null,
            default: null,
            val: null,
            itemText: 'nm_jobat',
            itemValue: 'id_jobat',
            items: []
          }
        ],
        // Save and reset button for form
        buttons: {
          save: {
            loading: false,
            disabled: false,
            color: "info"
          },
          reset: {
            disabled: false,
            color: "error"
          }
        }
      }
    }
  },
  mounted() {
    this.buttonState('save')
    axios.get('http://localhost:3333/api/v1/jenis-obat')
      .then((res)=>{
        this.form.fields[4].items = res.data.data
        axios.get('http://localhost:3333/api/v1/satuan')
      })
      .then((res)=>{
        this.form.fields[2].items = res.data.data
        axios.get(this.form.saveUrl)
      })
      .then(res=>{
        let data = Object.keys(res.data.data)
        data.forEach(val=>{
          this.setFieldValue(val, res.data.data[val]);
        })
      })
      .catch(err=>{
        console.log(err)
      })  
      .finally(()=>{
        this.buttonState('normal')
      })  
  }
}
</script>
