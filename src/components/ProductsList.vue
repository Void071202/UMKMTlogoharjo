<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">OUR PRODUCT</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover rounded">
          <h3 class="text-xl font-bold mt-4">{{ product.name }}</h3>
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="mt-2 py-2 px-4 bg-brown-800 text-white rounded inline-block text-center btn-selengkapnya">
            Selengkapnya
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductsList',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Intip Madu Santosa',
          image: require('@/assets/intip.jpg')
        },
        {
          id: 2,
          name: 'Kembang Goyang',
          image: require('@/assets/Kembanggoyang.jpg')
        },
        {
          id: 3,
          name: 'Arang Warimo',
          image: require('@/assets/arang.jpg')
        }
      ]
    };
  }
};
</script>

<style scoped>
.product-card {
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.bg-brown-800 {
  background-color: #2cc295;
}
@font-face {
  font-family: 'BebasNeue';
  src: url('@/assets/BebasNeue-Regular_083431.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'PoppinsMedium';
  src: url('@/assets/Poppins-Medium.ttf') format('truetype');
  font-weight: black;
  font-style: normal;
}
@font-face {
  font-family: 'PoppinsReguler';
  src: url('@/assets/Poppins-Regular.ttf') format('truetype');
  font-weight: black;
  font-style: normal;
}
h3 {
  font-family: 'PoppinsMedium', sans-serif;
}
h2 {
  font-family: 'BebasNeue', sans-serif;
  font-size: 2.4rem;
}
.btn-selengkapnya {
  font-family: 'PoppinsReguler', sans-serif;
}
</style>
