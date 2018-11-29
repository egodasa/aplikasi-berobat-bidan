<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="title">Data Baru</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <form-generator :fields="form.fields"></form-generator>
    </v-card-text>
    <v-card-actions>
      <!-- This button is the part of form generator. Just change button caption with You need -->
      <v-btn v-bind="form.buttons.save" @click="sendForm()">Simpan</v-btn>
      <v-btn v-bind="form.buttons.reset" @click="clearForm()">Berishkan</v-btn>
      
      <!-- This button isn't included in form generator -->
      <v-btn append:boolean="true" :to="{ name: 'showSatuan'}" class="normal">Daftar Satuan</v-btn>
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
        saveUrl: "http://localhost:3333/api/v1/satuan",
        // Fields list form formGenerator component
        fields: [
          {
            name: "nm_satuan",
            inputType: "v-text-field",
            label: "Nama Satuan",
            error: false,
            errorMessages: null,
            default: null,
            val: null
          },
          {
            name: "id_jsatuan",
            inputType: "v-select",
            label: "Jenis Satuan",
            error: false,
            errorMessages: null,
            default: null,
            val: null,
            itemText: 'nm_jsatuan',
            itemValue: 'id_jsatuan',
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
    axios.get('http://localhost:3333/api/v1/jenis-satuan')
      .then((res)=>{
        this.form.fields[1].items = res.data.data
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}
</script>
