<script>

import { ref } from 'vue'

export default {
  setup() {
    const formData = ref(
      [
        {
          id: 1,
          datasource: "text",
          datatype: "string",
          value: "ini adalah global component dari text field",
          sorting: 1
        },
        {
          id: 2,
          datasource: "date",
          datatype: "date",
          value: "2024-02-16",
          sorting: 2
        },
        {
          id: 3,
          datasource: "text-area",
          datatype: "string",
          value: "<p>ni adalah global component dari text area</p>",
          sorting: 3
        },

        {
          id: 4,
          datasource: "text",
          datatype: "number",
          value: 100,
          sorting: 4
        },
      ]
    )

    const deleteItem = (item) => {
      formData.value = formData.value.filter((data) => data.id !== item.id)
    }
    return {
      formData,
      deleteItem
    }
  }
}
</script>

<template>
  <section>
    <div class="container pt-5">
      <div class="card p-3">
        <div class="row">
          <div class="col pb-3 d-flex align-items-center justify-content-center">
            <div class="text-center">
              <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125" class="px-1" />
              <div class="pt-3 pr-3">
                <h3 class="text-2xl font-semibold green ">Technical Test</h3>
                <p class="text-sm font-bold">
                  Arifin Yunianta | KSNI Bandung
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <!-- tambah form -->
              <div class="d-flex justify-content-between pb-3">
                <h3 class="text-2xl font-semibold green">Dynamic Form</h3>
                <button class="btn-sm btn-success py-0">Tambah Kolom</button>
              </div>

              <form class="card p-2">
                <div v-if="formData.length === 0">
                  <div class="alert alert-danger p-1 text-center" role="alert">
                    Data tidak ditemukan
                  </div>
                </div>

                <div v-for="item in formData" :key="item.source">
                  <div class="d-flex  align-items-center">
                    <div class="flex-grow-1 ms-3">
                      <FormItemField :dataSource="item.datasource" :dataType="item.datatype" :formValue="item.value" />

                    </div>
                    <div class="flex-shrink-0">
                      <button class="btn-sm btn-danger mx-3" @click.prevent="deleteItem(item)">Hapus</button>
                    </div>
                  </div>
                </div>



                <button class="btn btn-primary mt-3">Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
