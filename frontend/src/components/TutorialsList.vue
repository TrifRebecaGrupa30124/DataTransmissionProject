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

  <h4 style="text-align: center">Products List</h4>


<!--    Table-->

    <table class="table-row tablee">
        <tr
            class="products-table"
            :class="{ active: index == currentIndex }"
            v-for="(tutorial, index) in tutorials"
            :key="index"
            @click="setActiveTutorial(tutorial, index)">
            <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>UnitInStock</th>
            <th>Available</th>

            </thead>
            <tbody>
            <td>
                {{ tutorial.title }}
            </td>
            <td>
                {{ tutorial.price }}
            </td>
            <td>
                {{ tutorial.description }}
            </td>
            <td>
                {{ tutorial.UnitInStock }}
            </td>
            <td>
                {{ tutorial.ProductAvailable }}
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
    @click="removeAllTutorials"
  >
    Remove All
  </button>

  <div class="col-md-6 details">
    <div v-if="currentTutorial.id">
      <h4>Tutorial</h4>
      <div>
        <label><strong>Title:</strong></label> {{ currentTutorial.title }}
      </div>
      <div>
        <label><strong>Description:</strong></label>
        {{ currentTutorial.description }}
      </div>
      <div>
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? 'Published' : 'Pending' }}
      </div>

      <router-link
        :to="'/tutorials/' + currentTutorial.id"
        class="badge badge-warning"
        >Edit</router-link
      >
    </div>
  </div>

  <!-- Features -->

  <section id="features" style="border-radius: 10%">
    <div class="row">
      <div class="col-lg-3 col-md-12 feature-1">
        <img class="produs" src="../assets/p2c.png" />

        <br /><br /><br />
        <h3>Dior Addict</h3>
        <p>
          Primul balsam de buze Dior cu o formula bazata pe 97% ingrediente** de
          origine naturala care amplifica discret culoarea naturala a buzelor cu
          o stralucire personalizata timp de 6 ore*** si hidrateaza buzele timp
          de 24 de ore*.
        </p>
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
        <p>
          CE ESTE: Efectul de finisaj impecabil devine acum realitate cu acest
          contur de buze incredibil de ușor de aplicat.CE FACE: Alunecă cu mare
          ușurință, iar linia sa plină acoperă perfect buzele, mărindu-le
          volumul.
        </p>
        <br />
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
        <p>
          Rosy Glow universal blush este arma secreta a echipei de makeup
          artists Dior pentru crearea unui aspect de obraji imbujorati natural
          si a unui efect luminos proaspat.Confera obrajilor un efect
          personalizat de imbujorare.
        </p>
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
        <p>
          Pudra Dior Forever Natural Bronze recreeaza dintr-o singura miscare
          mangaierea soarelui pe piele, pentru un ten luminos, care radiaza de
          vitalitate.Delicata si ultralejera, textura pudrei bronzante
          fuzioneaza impecabil.
        </p>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TutorialDataService from '@/services/TutorialDataService';
import Tutorial from '@/types/Tutorial';
import ResponseData from '@/types/ResponseData';

export default defineComponent({
  name: 'tutorials-list',
  data() {
    return {
      tutorials: [] as Tutorial[],
      currentTutorial: {} as Tutorial,
      currentIndex: -1,
      title: ''
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response: ResponseData) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = {} as Tutorial;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial: Tutorial, index = -1) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response: ResponseData) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then((response: ResponseData) => {
          this.tutorials = response.data;
          this.setActiveTutorial({} as Tutorial);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTutorials();
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
    border: 2px solid #fde9ea;
}
.tablee th,
.tablee td {
    padding: 12px 15px;
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
  padding: 5% 11%;
  background-color: #fce7ec;
  position: relative;
  z-index: 1;
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

</style>
