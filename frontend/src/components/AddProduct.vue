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
        <textarea
          class="form-control"
          id="description"
          required
          v-model="product.description"
          name="description"></textarea>

      </div>

        <div class="price">
            <label for="color">Price</label>
            <input
                    class="form-control"
                    id="price"
                    required
                    v-model="product.price"
                    name="price"
            />
        </div>

        <div class="producer">
            <label for="producer">Producer</label>
            <input
                    class="form-control"
                    id="producer"
                    required
                    v-model="product.producer"
                    name="producer"
            />
        </div>

        <div class="brand">
            <label for="brand">Brand</label>
            <input
                    class="form-control"
                    id="brand"
                    required
                    v-model="product.brand"
                    name="brand"
            />
        </div>

        <div class="ProductAvailable">
            <label for="ProductAvailable">Available(true/false)</label>
            <input
                    class="form-control"
                    id="ProductAvailable"
                    required
                    v-model="product.ProductAvailable"
                    name="ProductAvailable"
            />
        </div>

        <div class="UnitInStock">
            <label for="UnitInStock">Unit In Stock</label>
            <input
                    class="form-control"
                    id="UnitInStock"
                    required
                    v-model="product.UnitInStock"
                    name="UnitInStock"
            />
        </div>

        <div class="unitWeight">
            <label for="unitWeight">Unit Weight</label>
            <input
                    class="form-control"
                    id="unitWeight"
                    required
                    v-model="product.unitWeight"
                    name="unitWeight"
            />
        </div>

        <div class="summary">
            <label for="summary">Summary</label>
            <input
                    class="form-control"
                    id="summary"
                    required
                    v-model="product.summary"
                    name="summary"
            />
        </div>

        <div class="shop">
            <label for="shop">Shop</label>
            <input
                    class="form-control"
                    id="shop"
                    required
                    v-model="product.shop"
                    name="shop"
            />
        </div>
<br>
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
        price: null,
        producer: "",
        brand: "",
        ProductAvailable: false,
        UnitInStock: null,
        unitWeight: null,
        summary: "",
        shop: ""
      } as Product,
      submitted: false,
    };
  },
  methods: {
    saveProduct() {
      let data = {
        title: this.product.title,
        description: this.product.description,
        price: this.product.price,
          producer: this.product.producer,
          brand: this.product.brand,
          ProductAvailable: this.product.ProductAvailable,
          UnitInStock: this.product.UnitInStock,
          unitWeight: this.product.unitWeight,
          summary: this.product.summary,
          shop: this.product.shop,
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
