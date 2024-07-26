<template>
  <section class="hero" :style="{ backgroundImage: `url(${homeImage})` }">
    <div class="overlay flex justify-center items-center h-full">
      <div class="text-right text-white text-container">
        <h1 class="hero-title mb-2">UMKM TLOGOHARJO</h1>
        <p class="hero-subtitle mb-4">Mengembangkan potensi lokal bersama</p>
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
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center; /* Center content vertically */
  justify-content: flex-end; /* Align content to the right */
  padding-right: 10%; /* Add padding to the right */
}

.text-container {
  max-width: 600px;
  text-align: right; /* Right align text */
}

.hero-title,
.hero-subtitle {
  font-family: 'BebasNeue', sans-serif;
  margin: 0;
}

.hero-title {
  font-size: 2.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
}

/* Media queries for responsive design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .overlay {
    padding-right: 5%;
  }
  .hero-title {
    font-size: 1.25rem;
  }
  .hero-subtitle {
    font-size: 0.875rem;
  }
}
</style>
