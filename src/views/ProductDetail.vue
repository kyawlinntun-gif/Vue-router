<template>
    <div class="container">
        <h1 v-if="loading">Loading...</h1>
        <div v-else class="row">
            <div class="col-4 d-flex justify-content-center align-items-center">
                <img :src="product.image" class="img-fluid" alt="">
            </div>
            <div class="col-8 p-5">
                <div class="display-4">{{ product.title }}</div>
                <div class="h3 text-muted mt-5">$ {{ product.price }}</div>
                <div class="mt-5">{{ product.description }}</div>
                <div class="mt-5">
                    <router-link to='/product' class="btn btn-outline-secondary">Go Back</router-link>
                    <router-link to='#' class="btn btn-primary float-right">Add To Card</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductDetail',
    data() {
        return {
            loading: false,
            product: []
        }
    },
    created() {
        this.loading = true;
        axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
                .then(response => {
                    this.product = response.data;
                    this.loading = false;
                });
    }
}
</script>