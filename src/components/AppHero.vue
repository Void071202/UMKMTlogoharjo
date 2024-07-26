<template>
  <section class="hero bg-cover bg-center h-screen" :style="{ backgroundImage: `url(${homeImage})` }">
    <div class="flex justify-center items-center h-full bg-black bg-opacity-50">
      <div class="text-center text-white text-container">
        <h1 class="text-5xl font-bold mb-4">UMKM TLOGOHARJO</h1>
        <p class="text-xl"></p>
      </div>
    </div>
  </section>
</template>

<script>
import homeImage from '@/assets/home.jpg';

export default {
  name: 'AppHero',
  data() {
    return {
      homeImage
    };
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'BebasNeue';
  src: url('@/assets/BebasNeue-Regular_083431.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.hero {
  height: 100vh;
}

.text-container {
  padding-left: 20px; /* Adjust this value to move the text more or less to the right */
}

.text-white h1,
.text-white p {
  font-family: 'BebasNeue', sans-serif;
  padding-left: 500px;
}
</style>
