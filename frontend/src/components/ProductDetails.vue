<template>
  <div v-if="currentProduct.id" class="edit-form">
    <h4>Product</h4>
    <form>
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentProduct.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentProduct.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentProduct.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentProduct.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deleteProduct">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateProduct">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a product...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductDataService from "@/services/ProductDataService";
import Product from "@/types/Product";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "product",
  data() {
    return {
      currentProduct: {} as Product,
      message: "",
    };
  },
  methods: {
    getProduct(id: any) {
      ProductDataService.get(id)
        .then((response: ResponseData) => {
          this.currentProduct = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    updatePublished(status: boolean) {
      let data = {
        id: this.currentProduct.id,
        title: this.currentProduct.title,
        description: this.currentProduct.description,
        published: status,
      };

      ProductDataService.update(this.currentProduct.id, data)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.currentProduct.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    updateProduct() {
      ProductDataService.update(this.currentProduct.id, this.currentProduct)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.message = "The product was updated successfully!";
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    deleteProduct() {
      ProductDataService.delete(this.currentProduct.id)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.$router.push({ name: "products" });
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
