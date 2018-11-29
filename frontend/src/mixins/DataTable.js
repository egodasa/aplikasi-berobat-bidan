import axios from 'axios'
import qs from 'query-string'
// This mixin is method for formGenerator
export const DataTable = {
  // formObject as String
  // formObject is object name for formGenerator
  // variable formObject should be defined in data()
  methods: {
    getDataTableRows(){
      let url = [this[this.tableObjectName].url]
      let query = {}
      this[this.tableObjectName].loading = true
      if(this[this.tableObjectName].pagination.descending == false){
        query.sort = this[this.tableObjectName].pagination.sortBy + ':asc'
      }else{
        query.sort = this[this.tableObjectName].pagination.sortBy + ':desc'
      }
      query.page = this[this.tableObjectName].pagination.page
      query.perpage = this[this.tableObjectName].pagination.rowsPerPage
      
      url.push('?')
      url.push(qs.stringify(query))
      url = url.join('')
      axios.get(url)
        .then(res=>{
          this[this.tableObjectName].items = res.data.data;
          this[this.tableObjectName].totalItems = res.data.total
        })
        .catch(err=>{
          console.log(err)
        })
        .finally(()=>{
          this[this.tableObjectName].loading = false
        })
    }
  }
}
