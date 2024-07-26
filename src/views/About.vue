<template>
  <section class="bg-white py-8">
    <div class="container mx-auto flex flex-wrap">
      <div class="w-full md:w-1/2 px-4">
        <div class="p-4 border border-gray-200 rounded shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-center">ABOUT US</h2>
          <p class="text-lg mb-4">
            Desa Tlogoharjo adalah desa di kecamatan Slogohimo, Wonogiri, Jawa Tengah. Dikenal dengan budaya kuat dan keramahan penduduknya. Lingkungan alam yang asri menjadikan desa ini nyaman dan menarik untuk dikunjungi. Profil desa mencakup lokasi di Slogohimo, Wonogiri, Jawa Tengah dengan penduduk sebanyak 3.500 jiwa dan luas wilayah 500 hektar. Mata pencaharian utama meliputi pertanian, peternakan, dan UMKM.
          </p>
          <p class="text-lg mb-4">
            <strong>Desa Tlogoharjo</strong><br>
            Giritontro, Wonogiri, Jawa Tengah<br>
            Telp: (0274) 543914 / 543915<br>
            Email: info@tlogoharjo.desa.id
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-4 flex items-center">
        <div id="carouselExampleIndicators" class="relative w-full">
          <div class="carousel-inner relative w-full overflow-hidden rounded-lg shadow-lg">
            <div class="carousel-item active relative float-left w-full h-80">
              <img src="@/assets/Desa.jpeg" class="block w-full h-full object-cover" alt="Gambar 1">
            </div>
            <div class="carousel-item relative float-left w-full h-80">
              <img src="@/assets/home.jpg" class="block w-full h-full object-cover" alt="Gambar 2">
            </div>
            <div class="carousel-item relative float-left w-full h-80">
              <img src="@/assets/Pemandangan.jpeg" class="block w-full h-full object-cover" alt="Gambar 3">
            </div>
          </div>
          <button class="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex items-center justify-center p-2 bg-gray-800 bg-opacity-50 border border-gray-300 rounded-full hover:bg-opacity-100 transition-opacity" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button class="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 flex items-center justify-center p-2 bg-gray-800 bg-opacity-50 border border-gray-300 rounded-full hover:bg-opacity-100 transition-opacity" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  mounted() {
    const prevButton = document.querySelector('[data-bs-slide="prev"]');
    const nextButton = document.querySelector('[data-bs-slide="next"]');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = carouselInner.getElementsByClassName('carousel-item');
    let currentIndex = 0;

    function updateCarousel(newIndex) {
      items[currentIndex].classList.remove('active');
      items[newIndex].classList.add('active');
      currentIndex = newIndex;
    }

    prevButton.addEventListener('click', () => {
      const newIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel(newIndex);
    });

    nextButton.addEventListener('click', () => {
      const newIndex = (currentIndex + 1) % items.length;
      updateCarousel(newIndex);
    });
  }
};
</script>

<style scoped>
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-item {
  position: relative;
  display: none;
  width: 100%;
  transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
}
.carousel-item.active {
  display: block;
  opacity: 1;
}
.carousel-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
button {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
button:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.8);
}
@font-face {
  font-family: 'BebasNeue';
  src: url('@/assets/BebasNeue-Regular_083431.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'PoppinsReguler';
  src: url('@/assets/Poppins-Regular.ttf') format('truetype');
  font-weight: black;
  font-style: normal;
}
h2 {
  font-family: 'BebasNeue', sans-serif; /* Mengatur jenis font */
  font-size: 2.4rem; /* Ukuran font */
}
p{
  font-family: 'PoppinsRegular', sans-serif;
}
</style>
