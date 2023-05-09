<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="product.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="product.description"
          name="description"
        />
      </div>

      <button @click="saveProduct" class="btn" style="background-color: pink">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductDataService from "@/services/ProductDataService";
import Product from "@/types/Product";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-product",
  data() {
    return {
        product: {
        id: null,
        title: "",
        description: "",
        published: false,
      } as Product,
      submitted: false,
    };
  },
  methods: {
    saveProduct() {
      let data = {
        title: this.product.title,
        description: this.product.description,
      };

      ProductDataService.create(data)
        .then((response: ResponseData) => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newProduct() {
      this.submitted = false;
      this.product = {} as Product;
    },
  },
});
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
