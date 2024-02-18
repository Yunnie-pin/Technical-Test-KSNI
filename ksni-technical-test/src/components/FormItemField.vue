<script setup>
defineProps({
    dataSource: {
        type: String,
        required: true
    },
    dataType: {
        type: String,
        required: true
    },
    formValue: {
        type: String || Number || Date,
        required: true
    }
})
</script>

<template>
    <div v-if="dataSource === 'text'">
        <TextField :formValue="formValue" />
    </div>
    <div v-else-if="dataSource === 'text-area'">
        <TextAreaField :formValue="formValue" />
    </div>
    <div v-else-if="dataSource === 'date'">
        <DateField :formValue="formValue" />
    </div>
</template>