<script setup>
defineProps({
    dataType: {
        type: String,
        required: true
    }
})

const formValue = defineModel('formValue', {
    type: [String, Number],
    required: true
})
</script>

<template>
    <div class="pb-2">
        <label for="text-label" class="form-label">Text</label>
        <input :type="dataType" v-model="formValue" class="form-control" />
    </div>
</template>