<script setup>
defineProps({
  formValue: {
    type: String,
    required: true
  },
  

})

</script>

<template>
  <div class="pb-2">
    <label for="date" class="form-label">Date</label>
    <input type="date" id="date" :value="formValue" class="form-control" />
  </div>
</template>