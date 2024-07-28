<template>
  <section class="hero">
    <div class="overlay flex justify-center items-center">
      <div class="text-right text-white text-container">
        <h1 class="hero-title mb-2">UMKM TLOGOHARJO</h1>
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
  max-width: 1240px;
  height: 661px;
  background-image: url('@/assets/home.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0 auto;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10%;
}

.text-container {
  max-width: 600px;
  text-align: right;
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
  .hero {
    max-width: 100%;
    height: 50vh; /* Adjust height for medium devices */
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .hero {
    max-width: 100%;
    height: 40vh; /* Adjust height for smaller devices */
  }
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    max-width: 100%;
    height: 30vh; /* Adjust height for mobile devices */
    background-size: cover; /* Ensure the image is fully visible */
    background-position: center; /* Ensure the image is aligned properly */
  }
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
