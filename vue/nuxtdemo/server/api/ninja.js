export default defineEventHandler(async (event) => {
  // //handle query params
  // const { name } = getQuery(event);

  // //handle post data
  // const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/currencies?apikey=cur_live_ZQ2b2FEkDvY83Fp9fjXz5VkJTTwz2y4nDQGa1xkd&currencies=EUR%2CUSD%2CCAD"
  );

  return {
    data,
  };
});
