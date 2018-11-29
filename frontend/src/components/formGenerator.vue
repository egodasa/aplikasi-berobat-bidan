<template>
  <v-form>
    <template v-for="field in Object.keys(fields)">
      <template v-if="fields[field].inputType == 'v-text-field'">
        <v-text-field v-bind="fields[field]" v-model="fields[field].val"></v-text-field>
      </template>
      <template v-else-if="fields[field].inputType == 'v-select'">
        <v-select v-bind="fields[field]" v-model="fields[field].val"></v-select>
      </template>
      <template v-else-if="fields[field].inputType == 'v-textarea'">
        <v-textarea v-bind="fields[field]" v-model="fields[field].val"></v-textarea>
      </template>
      <template v-else-if="fields[field].inputType == 'v-date'">
        <v-menu
          :close-on-content-click="false"
          v-model="fields[field].show"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            v-bind="fields[field]"
            slot="activator"
            v-model="fields[field].val"
            readonly
          ></v-text-field>
          <v-date-picker v-model="fields[field].val" @input="fields[field].show = false" reactive.boolean="true"></v-date-picker>
        </v-menu>
      </template>
      <template v-else>
        <p>Form salah...</p>
      </template>
    </template>
  </v-form>
</template>
<script>
export default {
  name: 'formGenerator',
  props: {
    fields: {
      type: Array,
      required: true
    }
  }
}
</script>
