<template>

    <h3>REVIEWS</h3>
    <section style="padding-left:320px ">
    <table class="table-row table" style="text-align: center">
        <tr
                class="reviews-table"
                :class="{ active: index == currentIndex }"
                v-for="(review, index) in reviews"
                :key="index"
                @click="setActiveReview(review, index)"
        >
            <thead>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Review</th>
            <th scope="col">Rate</th>
            <th >Date</th>

            </thead>
            <tbody>

            <td>
                {{ review.name }}
            </td>
            <td>
                {{ review.email }}
            </td>
            <td>
                {{ review.review }}
            </td>
            <td>
                {{ review.rate }}
            </td>
            <td>
                {{ review.date }}
            </td>

            </tbody>
        </tr>
    </table>
    </section>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';
    import Review from '@/types/Review';
    import ResponseData from '@/types/ResponseData';
    import ReviewDataService from '@/services/ReviewDataService';
    import "bootstrap/dist/css/bootstrap.min.css";

    export default defineComponent({
    name: 'ReviewList.vue',
    data() {
    return {
    reviews: [] as Review[],
    currentReview: {} as Review,
    currentIndex: -1,
    title: ''
};
},
    methods: {
    retrieveReviews() {
    ReviewDataService.getAll()
    .then((response: ResponseData) => {
    this.reviews = response.data;
    console.log(response.data);
})
    .catch((e: Error) => {
    console.log(e);
});
},

    refreshList() {
    this.retrieveReviews();
    this.currentReview = {} as Review;
    this.currentIndex = -1;
},

    setActiveReview(review: Review, index = -1) {
    this.currentReview = review;
    this.currentIndex = index;
},
    deleteReview(id: any) {
    ReviewDataService.delete(id)
    .then((response: ResponseData) => {
    console.log(response);
})
    .catch((e: Error) => {
    console.log(e);
});
},

    removeAllReviews() {
    ReviewDataService.deleteAll()
    .then((response: ResponseData) => {
    console.log(response.data);
    this.refreshList();
})
    .catch((e: Error) => {
    console.log(e);
});
}
},
    mounted() {
    this.retrieveReviews();
}
});

</script>

<style scoped>


.table{

    text-align: center;
}
.table, td, td{
    border: 1px solid pink;
}
.table, tr{
    width: 140px;
    border: 1px solid pink;
}


</style>