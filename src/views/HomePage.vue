<template>
    <div class="home-page">
      <AppHero />
      <BestProduct />
    </div>
  </template>
  
  <script>
  import AppHero from '@/components/AppHero.vue';
  import BestProduct from '@/components/ProductsList.vue';

  
  export default {
    name: 'HomePage',
    components: {
      AppHero,
      BestProduct,
    },
  };
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    flex-direction: column;
  }
  </style>
  