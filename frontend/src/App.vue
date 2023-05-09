<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark " style="background-color: purple">
      <router-link to="/" class="navbar-brand" style="color: pink; font-size:200%">Rebeca's website
      </router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/products" class="nav-link" style="font-size: 120%">Makeup Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link" style="font-size: 120%">Add</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3" style="text-align: center">
        <br>
        <br>
        <section class="carousel" aria-label="carousel" Tabindex="0">
            <a class="carousel__skip-link" href="#skip-link">Skip the Carousel</a>
            <div class="slides">
                <div class="slides-item slide-1" id="slide-1" aria-label="slide 1 of 5" tabindex="0"></div>
                <div class="slides-item slide-2" id="slide-2" aria-label="slide 2 of 5" tabindex="0"></div>
                <div class="slides-item slide-3" id="slide-3" aria-label="slide 3 of 5" tabindex="0"></div>
                <div class="slides-item slide-4" id="slide-4" aria-label="slide 4 of 5" tabindex="0"></div>
                <div class="slides-item slide-5" id="slide-5" aria-label="slide 5 of 5" tabindex="0"></div>
            </div>
            <div class="carousel__nav">
                <a class="slider-nav" href="#slide-1" aria-label="Go to slide 1">1</a>
                <a class="slider-nav" href="#slide-2" aria-label="Go to slide 2">2</a>
                <a class="slider-nav" href="#slide-3" aria-label="Go to slide 3">3</a>
                <a class="slider-nav" href="#slide-4" aria-label="Go to slide 4">4</a>
                <a class="slider-nav" href="#slide-5" aria-label="Go to slide 5">5</a>
            </div>
            <div class="carousel__skip-message" id="skip-link" tabindex="0"></div>
        </section>
      <router-view />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>

body {
    font-family: sans-serif;
}

.carousel {
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
}

.slides {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
}

.slides::-webkit-scrollbar {
    display: none;
}

.slides-item {
    align-items: center;
    border-radius: 10px;
    display: flex;
    flex-shrink: 0;
    font-size: 100px;
    height: 300px;
    justify-content: center;
    margin: 0 1rem;
    position: relative;
    scroll-snap-align: start;
    transform: scale(1);
    transform-origin: center center;
    transition: transform .5s;
    width: 100%;
}

.carousel__nav {
    padding: 1.25rem .5rem;
}

.slider-nav {
    align-items: center;
    background-color: #ddd;
    border-radius: 50%;
    color: #000;
    display: inline-flex;
    height: 1.5rem;
    justify-content: center;
    padding: .5rem;
    position: relative;
    text-decoration: none;
    width: 1.5rem;
}

.slider-nav:hover,
.slider-nav:active {
    background-color: #000;
    color: #fff;
}

.slide-1 {
    background-image: url("https://i.etsystatic.com/33761199/r/il/32087b/3634825836/il_fullxfull.3634825836_7jcr.jpg");
}

.slide-2 {
    background-image: url("https://m.media-amazon.com/images/I/71x0t3B3DvL.jpg");

}

.slide-3 {
    background-image: url("https://www.zastavki.com/pictures/1024x1024/2013/Girls___Beautyful_Girls_Lilac_makeup_041207_31.jpg");
}

.slide-4 {
    background-color: #dca;
}

.slide-5 {
    background-color: #ffc;
}

.carousel__skip-link {
    height: 1px;
    overflow: hidden;
    position: absolute;
    top: auto;
    width: 1px;
}

.carousel__skip-link:focus {
    align-items: center;
    background-color: #000;
    color: #fff;
    display: flex;
    font-size: 30px;
    height: 680px;
    justify-content: center;
    opacity: .8;
    text-decoration: none;
    width: 100%;
    z-index: 1;
}
</style>


