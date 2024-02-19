<script setup>
const formValue = defineModel('formValue', {
    type: String,
    required: true
})
</script>

<template>
    <div class="pb-2">
        <label for="text-area" class="form-label">Text Area</label>
        <textarea id="text-area" v-model="formValue" class="form-control"></textarea>
    </div>
</template>