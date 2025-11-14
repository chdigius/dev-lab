<template>
  <div>
    <h2>About</h2>
    <p>About page</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
// const { data } = await useFetch("/api/ninja?name=mario", {
//   method: "post",
//   body: JSON.stringify({ age: 30 }),
//   headers: {
//     "Content-Type": "application/json", // Set appropriate content type header for JSON
//   },
// });
</script>

<style scoped></style>
