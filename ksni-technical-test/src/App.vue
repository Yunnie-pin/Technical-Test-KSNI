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
          value: "100",
          sorting: 4
        },
      ]
    )

    return {
      formData,
    }
  }
}
</script>

<template>
  <section>
    <div class="container pt-5">
      <div class="card p-3">
        <div class="row">
          <div class="col pb-3">
            <div class="text-center">
              <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125" class="px-1" />
              <div class="pt-3 pr-3">
                <h3 class="text-2xl font-semibold green ">Technical Test</h3>
                <p class="text-sm font-bold">
                  Arifin Yunianta | Fullstack Developer
                </p>
              </div>
            </div>

          </div>
          <div class="col">
            <div>
              <form>
                <DateField formValue="2021-02-01" />
                <TextField formValue="sdasdsa" />
                <TextAreaField formValue="Hello" />
                <!-- <div v-for="item in formData" :key="item.id">
                  <div v-if="item.datasource === 'text'">
                    <div class="pb-2">
                      <label for="text-label" class="form-label">Text</label>
                      <input type="text" :value="item.value" class="form-control" />
                    </div>
                    <div class="pb-2">
                      <label for="text-label" class="form-label">Number</label>
                      <input type="number" :value="item.value" class="form-control" />
                    </div>
                  </div>
                </div> -->
              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>
