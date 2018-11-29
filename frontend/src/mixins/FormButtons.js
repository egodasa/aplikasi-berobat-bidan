/*
 * This mixin is method for form button
 * Only include 2 buttons, Save and Reset Button
 */
export const formButtons = {
  // formObject as String
  // formObject is object name for formGenerator
  // variable formObject should be defined in data()
  methods: {
    // Return list of fields name as array from this[this.formObject].fields properties
    getFormFields(){
      let result = this[this.formObject].fields.map(val=>{
        return val.name
      })
      // return properties of this[this.formObject].fields
      return result;
    },
    getFormValues(){
      let result = {}
      this[this.formObject].fields.forEach(val=>{
        result[val.name] = val.val
      })
      return result
    },
    // clear form errors message and status
    clearFormErrors(){
      this[this.formObject].fields.forEach(val=>{
        // set error message of fields to null
        val.errorMessages = null;
        // set error status of fields to false or clear error status on form input
        val.error = false;
      })
    },
    // clear form values and reset it to their default values
    // default values come from this[this.formObject].fields.field_name.default
    clearFormValues(){
      this[this.formObject].fields.forEach(val=>{
        // set modelds to their default value
        val.value = val.default
      })
    },
    // execute clearFormErrors() and clearFormValues()
    clearForm(){
      this[this.formObject].fields.forEach(val =>{
        val.errorMessages = null;
        val.error = false;
        val.val = val.default;
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
      this[this.formObject].fields.some(val=>{
        if(val.name == field_name){
          // set fields error status to true
          val.error = true;
          // set field error message
          val.errorMessages = err_messages;
          return true;
        }
      })
    }
  }
}
