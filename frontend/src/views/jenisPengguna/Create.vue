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
      <v-btn append:boolean="true" :to="{ name: 'showJpengguna'}" class="normal">Daftar Jenis Pengguna</v-btn>
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
        saveUrl: "http://localhost:3333/api/v1/jenis-pengguna",
        // Fields list form formGenerator component
        fields: [
          {
            name: "nm_jpengguna",
            inputType: "v-text-field",
            label: "Nama Jenis Pengguna",
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
