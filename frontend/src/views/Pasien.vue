<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Data Pasien</h3>
      </div>
    </v-card-title>
    <v-card-text>
        <v-text-field v-bind="form.fields.nm_pasien" v-model="form.models.nm_pasien"></v-text-field>
        <v-text-field v-bind="form.fields.tgl_lahir" v-model="form.models.tgl_lahir"></v-text-field>
        <v-select v-bind="form.fields.jk" v-model="form.models.jk"></v-select>
        <v-text-field v-bind="form.fields.pekerjaan" v-model="form.models.pekerjaan"></v-text-field>
        <v-textarea v-bind="form.fields.alamat" v-model="form.models.alamat"></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn v-bind="form.buttons.save" @click="sendForm()">Save</v-btn>
      <v-btn v-bind="form.buttons.reset" @click="clearForm()">Reset</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        saveUrl: "http://localhost:3333/api/v1/pasien",
        updateUrl: "http://localhost:3333/api/v1/pasien",
        fields: {
          nm_pasien: {
            label: "Nama Pasien",
            error: false,
            errorMessages: null,
            default: null
          },
          tgl_lahir: {
            label: "Tanggal Lahir",
            value: "2018-12-31",
            error: false,
            errorMessages: null,
            mask: '####-##-##',
            default: new Date().toISOString().substr(0, 10)
          },
          jk: {
            label: "Jenis Kelamin",
            error: false,
            errorMessages: null,
            items: ['Laki-laki', 'Perempuan'],
            default: null
          },
          pekerjaan: {
            label: "Pekerjaan",
            error: false,
            errorMessages: null,
            default: null
          },
          alamat: {
            label: "Alamat tinggal",
            error: false,
            errorMessages: null,
            default: null
          }
        },
        models: {
          nm_pasien: null,
          tgl_lahir: new Date().toISOString().substr(0, 10),
          jk: null,
          pekerjaan: null,
          alamat: null
        },
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
  methods: {
    // Return list of fields name as array from this.form.fields properties
    getFormFields(){
      // return properties of this.form.fields
      return Object.keys(this.form.fields)
    },
    // clear form errors message and status
    clearFormErrors(){
      // get form field lists
      let fields = this.getFormFields();
      
      // looping through field lists
      fields.forEach(val =>{
        // set error message of fields to null
        this.form.fields[val].errorMessages = null;
        // set error status of fields to false or clear error status on form input
        this.form.fields[val].error = false;
      })
    },
    // clear form values and reset it to their default values
    // default values come from this.form.fields.field_name.default
    clearFormValues(){
      let fields = this.getFormFields();
      fields.forEach(val =>{
        // set modelds to their default value
        this.form.models[val] = this.form.fields[val].default;
      })
    },
    // execute clearFormErrors() and clearFormValues()
    clearForm(){
      let fields = this.getFormFields();
      fields.forEach(val =>{
        this.form.fields[val].errorMessages = null;
        this.form.fields[val].error = false;
        this.form.models[val] = this.form.fields[val].default;
      })
    },
    /*
      setFormErrors(field_name STRING, err_messages STRING)
      param :
      field_name - field name
      err_messages - error message for given field
      description :
      set error message to specific field
    */
    setFormErrors(field_name,err_messages){
      // set fields error status to true
      this.form.fields[field_name].error = true;
      // set field error message
      this.form.fields[field_name].errorMessages = err_messages;
    },
    // Button state while send some data such as loading button, disabled button etc
    buttonState(state = 'normal'){
      if(state == 'normal'){
        // Bring back all button to their default state
        this.form.buttons.save.disabled = false;
        this.form.buttons.reset.disabled = false;
        this.form.buttons.save.loading = false;
      }else{
        // Button state while send some data such as loading button, disabled button etc
        this.form.buttons.save.disabled = true;
        this.form.buttons.reset.disabled = true;
        this.form.buttons.save.loading = true;
      }
    },
    // save form value to database
    sendForm(){
      this.buttonState('save');
      axios.post(this.saveUrl, this.form.models)
        .then(res =>{
          switch(res.status){
            case 201: 
              this.clearForm();
            break;
          }
        })
        .catch(err=>{
          let data = err.response
          switch(data.status){
            case 400:
              this.clearFormErrors()
              data.data.forEach(val =>{
                this.setFormErrors(val.field, val.message)
              })
            break;
            case 500:
              
            break;
          }
        })
        .finally(()=>{
          this.buttonState('normal');
        })
    }
  }
}
</script>
