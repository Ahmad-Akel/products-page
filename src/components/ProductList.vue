<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-start mt-30">
      <button
          @click="sortBy('asc')"
          :class="{'bg-custom-light-green text-white': sortDirection === 'asc', 'bg-gray-200 text-gray-800': sortDirection !== 'asc'}"
          class="px-4 py-2 rounded-l-lg transition-colors duration-300 text-13 font-extrabold"
      >
        Nejlepší
      </button>
      <button
          @click="sortBy('desc')"
          :class="{'bg-gray-200 text-custom-light-green': sortDirection !== 'desc', 'bg-custom-light-green text-white': sortDirection === 'desc'}"
          class=" px-4 py-2 rounded-r-lg transition-colors duration-300 text-13 font-extrabold"
      >
        Nejhorší
      </button>
    </div>
    <div class="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
      <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product" />
    </div>
    <div class="flex justify-center mt-8">
      <button @click="loadMore" class="m-30 text-base font-bold px-4 py-2 bg-custom-lighter-green text-custom-green rounded">
        Načíst další
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import ProductCard from './ProductCard.vue';
import { getProducts } from '../services/api';
import {Product} from "../services/types.ts";

export default defineComponent({
  components: {
    ProductCard,
  },
  setup() {
    const products = ref<Product[]>([]);
    const loadCount = ref(6);
    const sortDirection = ref<'asc' | 'desc'>('asc');

    const sortedProducts = computed(() => {
      const sorted = [...products.value].sort((a, b) => {
        if (sortDirection.value === 'asc') {
          return b.rating.rate - a.rating.rate;
        } else {
          return a.rating.rate - b.rating.rate;
        }
      });
      return sorted.slice(0, loadCount.value);
    });

    const loadMore = () => {
      loadCount.value += 6;
    };

    const sortBy = (direction: 'asc' | 'desc') => {
      sortDirection.value = direction;
    };

    onMounted(async () => {
      const data = await getProducts();
      products.value = data;
    });

    return {
      sortedProducts,
      loadMore,
      sortBy,
      sortDirection,
    };
  }
});
</script>

