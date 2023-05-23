<template>
    <div
            class="input-group mb-3"
            style="padding-left: 250px; padding-right: 200px"
    >
        <input
                type="text"
                class="form-control"
                placeholder="Search by name"
                v-model="title"
        />
        <div class="input-group-append">
            <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="searchTitle"
            >
                Search
            </button>
        </div>
    </div>
<br>
  <h4 style="text-align: center">Product List</h4>
<br>
  <!-- Features -->

    <section id="features" style="background-color: #fde9ea">
        <div class="row">
            <div class="col-lg-3 col-md-12 feature-1">
                <img class="produs" src="../assets/p2c.png" />

                <br /><br /><br />
                <h3>Dior Addict</h3>

                <p>🖤🖤🖤🖤🖤(5/5)</p>
                <p>120 lei</p>
                <a href=""
                ><i class="fa-solid fa-heart fa-xl" style="color: #f382d5"></i
                ></a>
                <a href=""
                ><i class="fa-solid fa-cart-shopping fa-xl" style="color: #f382d5"></i
                ></a>
            </div>
            <div class="col-lg-3 col-md-12 feature-2">
                <img class="produs1" src="../assets/p3c.png" />
                <h3>Dior Pencil</h3>


                <p>🖤🖤🖤🖤🖤(5/5)</p>
                <p>90 lei</p>
                <a href=""
                ><i class="fa-solid fa-heart fa-xl" style="color: #f382d5"></i
                ></a>
                <a href=""
                ><i class="fa-solid fa-cart-shopping fa-xl" style="color: #f382d5"></i
                ></a>
            </div>
            <div class="col-lg-3 col-md-12 feature-3">
                <img class="produs2" src="../assets/p4c.png" /> <br /><br />
                <h3>Dior Blush</h3>

                <p>🖤🖤🖤🖤🖤(5/5)</p>
                <p>170 lei</p>
                <a href=""
                ><i class="fa-solid fa-heart fa-xl" style="color: #f382d5"></i
                ></a>
                <a href=""
                ><i class="fa-solid fa-cart-shopping fa-xl" style="color: #f382d5"></i
                ></a>
            </div>
            <div class="col-lg-3 col-md-12 feature-3">
                <img class="produs3" src="../assets/p5c.png" />
                <h3>Dior Bronzer</h3>

                <p>🖤🖤🖤🖤🖤(5/5)</p>
                <p>190 lei</p>
                <a href=""
                ><i class="fa-solid fa-heart fa-xl" style="color: #f382d5"></i
                ></a>
                <a href=""
                ><i class="fa-solid fa-cart-shopping fa-xl" style="color: #f382d5"></i
                ></a>
            </div>
        </div>
    </section>
    <section id="features">
        <div class="row">
            <div class="col-lg-3 col-md-12 feature-1"><img class="produs4" src="../assets/p10c.png" alt="">
                <br><br><br>
                <h3>Dior Black Mascara</h3>

                <p>🖤🖤🖤🖤🖤(5/5)</p>
                <p>120 lei</p>
                <a href=""><i class="fa-solid fa-heart fa-xl" style="color: #f382d5;"></i></a>
                <a href=""><i class="fa-solid fa-cart-shopping fa-xl" style="color: #f382d5;"></i></a>
            </div>
            <div class="col-lg-3 col-md-12 feature-2"><img class="produs5" src="../assets//p11.png" alt="">
                <h3>Dior Face Palette</h3>

                <p>🖤🖤🖤🖤🖤(5/5)</p>
                <p>90 lei</p>
                <a href=""><i class="fa-solid fa-heart fa-xl" style="color: #f382d5;"></i></a>
                <a href=""><i class="fa-solid fa-cart-shopping fa-xl" style="color: #f382d5;"></i></a>
            </div>
            <div class="col-lg-3 col-md-12 feature-3"><img class="produs6" src="../assets//p12.png" alt="">
                <br><br>
                <h3>Dior Foundation</h3>
                <p>🖤🖤🖤🖤🖤(5/5)</p>
                <p>170 lei</p>
                <a href=""><i class="fa-solid fa-heart fa-xl" style="color: #f382d5;"></i></a>
                <a href=""><i class="fa-solid fa-cart-shopping fa-xl" style="color: #f382d5;"></i></a>
            </div>
            <div class="col-lg-3 col-md-12 feature-3"><img class="produs7" src="../assets//p13.png" alt="">
                <h3>Dior EyeShadow</h3>

                <p>🖤🖤🖤🖤🖤(5/5)</p>
                <p>190 lei</p>
                <a href=""><i class="fa-solid fa-heart fa-xl" style="color: #f382d5;"></i></a>
                <a href=""><i class="fa-solid fa-cart-shopping fa-xl" style="color: #f382d5;"></i></a>
            </div>
        </div>

    </section>


<!--    Table-->
<br>
    <br>
    <br>
    <table class="table-row tablee" style="position: relative; margin-left: -120px">
        <tr
            class="products-table"
            :class="{ active: index == currentIndex }"
            v-for="(product, index) in products"
            :key="index"
            @click="setActiveProduct(product, index)">
            <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Producer</th>
            <th>Brand</th>
            <th>Available</th>
            <th>UnitInStock</th>
            <th>UnitWeight</th>
            <th>Discount</th>
            <th>NewPrice</th>
            <th>Summary</th>
            <th>Shop</th>
<!--            <th>Description</th>-->




            </thead>
            <tbody>
            <td>
                {{ product.title }}
            </td>
            <td>
                {{ product.price }}
            </td>
            <td>
                {{ product.producer }}
            </td>
            <td>
                {{ product.brand }}
            </td>
            <td>
                {{ product.ProductAvailable }}
            </td>
            <td>
                {{ product.UnitInStock }}
            </td>

            <td>
                {{ product.unitWeight }}
            </td>
            <td>
                {{ product.discount }}
            </td>
            <td>
                {{ product.newPrice }}
            </td>
            <td>
                {{ product.name }}
            </td>
            <td>
                {{ product.shop }}
            </td>
<!--            <td>-->
<!--                {{ product.description }}-->
<!--            </td>-->
            <td>
                <button class="badge mr-2 btnDelete" @click ="deleteProduct(product.id)" >
                    Delete
                </button>
            </td>
            <td>

                <router-link
                    :to="'/products/' + product.id"
                    class="badge btnEdit"
                >Edit</router-link
                >
            </td>




            </tbody>
        </tr>
    </table>

<!--  <ul class="list-group">-->
<!--    <li-->
<!--      class="list-group-item"-->
<!--      :class="{ active: index == currentIndex }"-->
<!--      v-for="(tutorial, index) in tutorials"-->
<!--      :key="index"-->
<!--      @click="setActiveTutorial(tutorial, index)"-->
<!--    >-->
<!--      {{ tutorial.title }} {{ tutorial.price }}-->
<!--    </li>-->
<!--  </ul>-->
  <br />

  <!--Remove button-->
  <button
    class="m-3 btn btn-lg"
    style="background-color: #fde9ea"
    @click="removeAllProducts"
  >
    Remove All
  </button>

  <div class="col-md-6 details">
    <div v-if="currentProduct.id">
      <h4>Product</h4>
      <div>
        <label><strong>Title:</strong></label> {{ currentProduct.title }}
      </div>
      <div>
        <label><strong>Description:</strong></label>
        {{ currentProduct.description }}
      </div>
      <div>
        <label><strong>Status:</strong></label>
        {{ currentProduct.ProductAvailable ? 'Available' : 'Not Available' }}
      </div>

    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductDataService from '@/services/ProductDataService';
import Product from '@/types/Product';
import ResponseData from '@/types/ResponseData';

export default defineComponent({
  name: 'products-list',
  data() {
    return {
        products: [] as Product[],
      currentProduct: {} as Product,
      currentIndex: -1,
      title: ''
    };
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
        .then((response: ResponseData) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProducts();
      this.currentProduct = {} as Product;
      this.currentIndex = -1;
    },

    setActiveProduct(product: Product, index = -1) {
      this.currentProduct = product;
      this.currentIndex = index;
    },
      deleteProduct(id:any) {
          ProductDataService.delete(id)
              .then((response: ResponseData) => {
                  console.log(response);
              })
              .catch((e: Error) => {
                  console.log(e);
              });
      },

    removeAllProducts() {
      ProductDataService.deleteAll()
        .then((response: ResponseData) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    searchTitle() {
      ProductDataService.findByTitle(this.title)
        .then((response: ResponseData) => {
          this.products = response.data;
          this.setActiveProduct({} as Product);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProducts();
  }
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.products-table{
    border: 2px solid #fadadb;
}
.tablee th,
.tablee td {
    padding: 12px 18px;
}
.tablee{
    margin-left: auto;
    margin-right: auto;

}
.details{
    margin-left: auto;
    margin-right: auto;
}
#features {

  background-color: #fde9ea;

}
.feature-1 {
  text-align: center;
  padding: 5%;
}

.feature-2 {
  text-align: center;
  padding: 5%;
}

.feature-3 {
  text-align: center;
  padding: 5%;
}
.produs {
  margin-top: 20%;
  width: 80%;
}

.produs1 {
  width: 30%;
  padding-top: 10%;
  padding-bottom: 15%;
}

.produs2 {
  width: 80%;
  padding-top: 70%;
}

.produs3 {
  width: 100%;
  padding-top: 45%;
  padding-bottom: 7%;
}
.produs4 {
    width: 40%;
    padding-bottom: 7%;
}

.produs5 {
    width: 80%;
    padding-top: 30%;
    padding-bottom: 33%;
}

.produs6 {
    width: 30%;
    padding-top: 30%;
    padding-bottom: 15%;
}
.produs7{
    width: 80%;
    padding-top: 30%;
    padding-bottom: 30%;
}
.btnDelete{
    background-color: pink;
}
.btnEdit{
    background-color: deeppink;
    font-size: 15px;
    color: #000000;
}

</style>
