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
        <textarea
          class="form-control"
          id="description"
          v-model="currentProduct.description"></textarea>

      </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input
                    type="text"
                    class="form-control"
                    id="price"
                    v-model="currentProduct.price"
            />

        </div>

        <div class="form-group">
            <label for="discount">Discount</label>
            <input
                    type="text"
                    class="form-control"
                    id="discount"
                    v-model="currentProduct.discount"
            />

        </div>

        <div class="form-group">
            <label for="newPrice">New Price</label>
            <input
                    type="text"
                    class="form-control"
                    id="newPrice"
                    v-model="currentProduct.newPrice"
            />

        </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
<!--        {{ currentProduct.published ? "Published" : "Pending" }}-->
          {{ currentProduct.ProductAvailable ? "Available" : "Not available" }}

      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentProduct.ProductAvailable"
      @click="updatePublished(false)"
    >
      UnAvailable
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Available
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
        price: this.currentProduct.price,
          producer: this.currentProduct.producer,
          brand: this.currentProduct.brand,
          ProductAvailable: status,
          UnitInStock: this.currentProduct.UnitInStock,
          unitWeight: this.currentProduct.unitWeight,
          summary: this.currentProduct.summary,
          shop: this.currentProduct.shop,
      };

      ProductDataService.update(this.currentProduct.id, data)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.currentProduct.ProductAvailable = status;
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
#description{

}
</style>
