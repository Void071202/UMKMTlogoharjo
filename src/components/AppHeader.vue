<template>
  <header class="bg-brown-800 text-white p-4 flex justify-between items-center flex-wrap">
    <div class="flex items-center">
      <img src="@/assets/logo.png" alt="Logo" class="h-10 mr-2"/>
      <div class="text-3xl font-bold">TLOGOHARJO MAKMUR</div>
    </div>
    <button class="block md:hidden" @click="toggleMenu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <nav :class="{'block': menuOpen, 'hidden': !menuOpen}" class="nav-menu w-full md:flex md:items-center md:w-auto">
      <router-link to="/" class="nav-link block md:inline-block px-4 py-2">HOME</router-link>
      <router-link to="/about" class="nav-link block md:inline-block px-4 py-2">ABOUT</router-link>
      <router-link to="/product" class="nav-link block md:inline-block px-4 py-2">PRODUCT</router-link>
      <router-link to="/contact" class="nav-link block md:inline-block px-4 py-2">CONTACTS</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'PoppinsBold';
  src: url('@/assets/Poppins-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'PoppinsBlack';
  src: url('@/assets/Poppins-Black.ttf') format('truetype');
  font-weight: black;
  font-style: normal;
}
@font-face {
  font-family: 'PoppinsMedium';
  src: url('@/assets/Poppins-Medium.ttf') format('truetype');
  font-weight: black;
  font-style: normal;
}
.bg-brown-800 {
  background-color: #03624c;
}

.header-title {
  font-family: 'PoppinsBold', sans-serif;
}

.nav-menu .nav-link {
  font-family: 'PoppinsMedium', sans-serif;
}
img {
    width: 60px; /* Mengatur lebar gambar */
    height: 60px; /* Mengatur tinggi gambar */
}

.h-10 {
    height: 60px; /* Mengatur tinggi gambar sesuai dengan class h-10 */
}

.mr-2 {
    margin-right: 8px; /* Mengatur margin kanan sesuai dengan class mr-2 */
}

</style>
