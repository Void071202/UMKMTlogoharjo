<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-4">Our Products</h1>
    <div class="search-bar mb-6">
      <div class="search-input-wrapper">
        <input v-model="searchQuery" placeholder="Search Products .." class="search-input" />
        <img src="@/assets/search.png" alt="Search Icon" class="search-icon" />
      </div>
      <button @click="searchProducts" class="search-button">Search</button>
    </div>
    <div class="product-grid">
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" />
        <h4 class="text-xl font-bold mt-4">{{ product.name }}</h4>
        <p><router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="view-button">Selengkapnya</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      searchQuery: '',
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
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    searchProducts() {
      // Logic for searching products can be implemented here
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.search-input-wrapper {
  position: relative;
  width: 300px;
}
.search-input {
  width: 100%;
  padding: 10px 40px 10px 10px; /* Add padding-right for the icon */
  border: 1px solid #ccc;
  border-radius: 5px;
}
.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}
.search-button {
  padding: 10px;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
}
.search-button:hover {
  background-color: #555;
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.product-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 300px;
  background-color: #f9f9f9;
}
.product-card img {
  max-width: 100%;
  border-radius: 10px;
}
.product-card h4 {
  margin: 10px 0;
}
.product-card p {
  color: #777;
}
.view-button {
  display: inline-block; /* Ensure the button has proper block behavior */
  padding: 10px;
  border: none;
  background-color: #2cc295;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px; /* Add margin-top for spacing */
}
.view-button:hover {
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
h1 {
  font-family: 'BebasNeue', sans-serif;
  font-size: 2.4rem;
}
h4 {
  font-family: 'PoppinsMedium', sans-serif;
  font-size: 1.0rem;
}
p {
  font-family: 'PoppinsReguler', sans-serif;
}
</style>
