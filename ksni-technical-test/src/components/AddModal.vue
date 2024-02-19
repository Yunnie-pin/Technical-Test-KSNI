<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            default: 'Modal'
        }
    },
    data() {
        return {
            dataSource: ['text', 'text-area', 'date'],
            dataTypes: ['String', 'Number', 'Date'],
        }
    },

    methods: {
        closeModal() {
            this.$emit('close');
        },

    }
};
</script>

<template>
    <form>
        <div class="modal" tabindex="-1" style="display: block;" v-if="show">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ title }}
                        </h5>
                        <button type="button" class="btn-close" @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="form-id" class="form-label">ID</label>
                            <input type="text" class="form-control" id="form-id" />
                        </div>
                        <div class="mb-3">
                            <label for="form-data-source" class="form-label">Data Source</label>
                            <select class="form-select" id="form-data-source">
                                <option v-for="(item, index) in dataSource" :key="index">{{ item }}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="form-data-type" class="form-label">Data Type</label>
                            <select class="form-select" id="form-data-type">
                                <option v-for="(item, index) in dataTypes" :key="index">{{ item }}</option>
                            </select>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">Tutup</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>