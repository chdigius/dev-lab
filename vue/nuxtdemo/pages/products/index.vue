<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"></ProductCard>
        <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

useHead({
  title: "Chris DiGiuseppe | Merch",
  meta: [{ name: "description", content: "Chris DiGiuseppe Merch" }],
});
// this code can fire on both the server and the client
// fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
