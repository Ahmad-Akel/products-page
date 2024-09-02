<template>
  <div class="shadow-md transition-shadow flex flex-col justify-between h-full">
    <div class="relative">
      <div class="w-97 h-54 rounded-t-2xl overflow-hidden">
        <img :src="product.image" alt="Product Image" class="w-full h-full object-cover rounded-t-3xl" />
      </div>
      <span class="absolute top-8 right-8 text-white font-bold text-[13px]">
        {{ product.rating.rate }}/5
      </span>
    </div>
    <div class="flex flex-col justify-between flex-grow bg-custom-lighter-gray">
      <div class="p-8 flex-grow">
        <h2 class="text-32 font-bold text-custom-green mb-4">
          {{ truncatedTitle }}
        </h2>
        <p class="text-base font-medium text-custom-green flex-grow">
          {{ truncatedDescription }}
        </p>
      </div>
      <div class="p-8">
        <a :href="product.image" target="_blank" class="block w-165 px-3 py-3 bg-custom-kiwi-green text-white rounded-lg text-base font-bold">
          Detail produktu
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    truncatedTitle(): string {
      return this.product.title.length > 60
          ? this.product.title.slice(0, 57) + '...'
          : this.product.title;
    },
    truncatedDescription(): string {
      return this.product.description.length > 142
          ? this.product.description.slice(0, 139) + '...'
          : this.product.description;
    }
  }
});
</script>
