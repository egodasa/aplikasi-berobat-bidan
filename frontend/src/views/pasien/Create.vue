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
      <v-btn v-bind="form.buttons.reset" @click="clearForm()">Bersihkan</v-btn>
      
      <!-- This button isn't included in form generator -->
      <v-btn append:boolean="true" :to="{ name: 'showPasien'}" class="normal">Daftar Pasien</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
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
        saveUrl: "http://localhost:3333/api/v1/pasien",
        // Fields list form formGenerator component
        fields: [
          {
            name: "nm_pasien",
            inputType: "v-text-field",
            label: "Nama Pasien",
            error: false,
            errorMessages: null,
            default: null,
            val: null
          },
          {
            name: "tgl_lahir",
            inputType: "v-date",
            label: "Tanggal Lahir",
            value: "2018-12-31",
            error: false,
            errorMessages: null,
            mask: '####-##-##',
            default: new Date().toISOString().substr(0, 10),
            val: new Date().toISOString().substr(0, 10),
            show: false
          },
          {
            name: "jk",
            inputType: "v-select",
            label: "Jenis Kelamin",
            error: false,
            errorMessages: null,
            items: ['Laki-laki', 'Perempuan'],
            default: null,
            val: null
          },
          {
            name: "pekerjaan",
            inputType: "v-text-field",
            label: "Pekerjaan",
            error: false,
            errorMessages: null,
            default: null,
            val: null
          },
          {
            name: "alamat",
            inputType: "v-textarea",
            label: "Alamat tinggal",
            error: false,
            errorMessages: null,
            default: null,
            val: null
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
  }
}
</script>
