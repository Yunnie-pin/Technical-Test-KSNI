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
            structure: [
                {
                    'datasource': 'text',
                    'datatype': ['String', 'Number']
                },
                {
                    'datasource': 'text-area',
                    'datatype': ['String']
                },
                {
                    'datasource': 'date',
                    'datatype': ['Date']
                }
            ],
            selectedDataSource: '',
            selectedDataType: '',
            filteredDataTypes: []
        }
    },

    methods: {
        closeModal() {
            this.$emit('close');
        },
        filterDataTypes() {
            const selectedStructure = this.structure.find(item => item.datasource === this.selectedDataSource);
            if (selectedStructure) {
                this.filteredDataTypes = selectedStructure.datatype;
                this.selectedDataType = '';
            } else {
                this.filteredDataTypes = [];
            }
        },
        sendData() {
            this.$emit('newColoum', {
                datasource: this.selectedDataSource,
                datatype: this.selectedDataType
            });
        }
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
                            <label for="form-data-source" class="form-label">Data Source</label>
                            <select class="form-select" id="form-data-source" v-model="selectedDataSource"
                                @change="filterDataTypes">
                                <option v-for="(item, index) in structure" :key="index">{{ item.datasource }}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="form-data-type" class="form-label">Data Type</label>
                            <select class="form-select" id="form-data-type" v-model="selectedDataType">
                                <option v-for="(item, index) in filteredDataTypes" :key="index">{{ item }}</option>
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">Tutup</button>
                        <button type="button" class="btn btn-primary" @click="sendData">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>