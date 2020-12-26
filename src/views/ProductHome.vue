<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 mb-5" v-for="product in products" :key="product.id">
                <div class="card text-center">
                    <div class="card-body">
                        <img :src="product.image" alt="" class="p-image">
                        <h3 class="mt-3">Product Name</h3>
                        <div class="my-4 text-muted">$ 100</div>
                        <router-link :to="`/product/${product.id}`" class="btn btn-primary btn-block">More Detail</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ProductHome',
        data() {
            return {
                products: []
            }
        },
        created() {
            axios.get('https://fakestoreapi.com/products')
                .then( response => this.products = response.data )
        }
    }
</script>

<style>
    .p-image {
        height: 150px;
    }
</style>