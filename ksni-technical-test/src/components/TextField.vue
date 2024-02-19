<script setup>
defineProps({
    formValue: {
        type: String || Number,
        required: true
    },
    dataType: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="pb-2">
        <label for="text-label" class="form-label">Text</label>
        <input type="text" :value="formValue" class="form-control" />
    </div>
</template>