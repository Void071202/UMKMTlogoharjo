<template>
  <div>
    <h1>Contact Us</h1>
    <div class="contact-info">
      <p class="whatsapp">
        <a :href="whatsappLink" target="_blank">Chat via WhatsApp: 0818956973</a>
      </p>
      <p class="instagram">
        <a :href="instagramLink" target="_blank">Visit our Instagram</a>
      </p>
      <p>Location: Jl. AM. Sangaji 64 Yogyakarta 55233</p>
      <GmapMap :center="center" :zoom="15" style="width: 100%; height: 400px;">
        <GmapMarker :position="center" />
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppContact',
  data() {
    return {
      center: { lat: -7.7955798, lng: 110.3694896 },
      whatsappLink: 'https://wa.me/0818956973',
      instagramLink: 'https://www.instagram.com/your-instagram-handle',
    };
  },
  created() {
    this.$gmapApiPromiseLazy().then(() => {
      console.log('Google Maps API is loaded');
    });
  },
};
</script>

<style scoped>
.whatsapp a {
  color: #25d366; /* Warna khas WhatsApp */
  text-decoration: none;
}

.instagram a {
  color: #e4405f; /* Warna khas Instagram */
  text-decoration: none;
}
</style>
