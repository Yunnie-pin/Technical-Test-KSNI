<script setup>
const formValue = defineModel('formValue', {
  type: Date,
  required: true
})

</script>

<template>
  <div class="pb-2">
    <label for="date" class="form-label">Date</label>
    <input type="date" id="date" v-model="formValue" class="form-control" />
  </div>
</template>