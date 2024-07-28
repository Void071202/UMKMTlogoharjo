<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
    <p class="text-lg">You can reach us through:</p>
    <ul class="list-disc pl-5">
      <p class="text-lg mb-4">
            <strong>Desa Tlogoharjo</strong><br>
            Giritontro, Wonogiri, Jawa Tengah<br>
            Telp: (0274) 543914 / 543915<br>
            Email: info@tlogoharjo.desa.id
            </p>
      <li class="mb-2 flex items-center">
        <img src="@/assets/instagram.png" alt="Instagram" class="w-6 h-6 mr-2">
        <a href="https://www.instagram.com/desatlogoharjomakmur?igsh=MWlubHE2NHB2MTM4OA==" target="_blank" class="text-pink-500 bg-pink-100 p-2 rounded flex-grow">
          Instagram
        </a>
      </li>
    </ul>
    <div id="map" class="w-full h-64 mt-8"></div>
  </div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'ContactPage',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = L.map('map').setView([-8.094240240708197, 110.91309300861738], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([-8.094240240708197, 110.91309300861738]).addTo(map)
        .bindPopup('Our Location')
        .openPopup();
    }
  }
};
</script>

<style scoped>
#map {
  height: 400px; /* Adjust as needed */
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
h1 {
  font-family: 'BebasNeue', sans-serif; /* Mengatur jenis font */
  font-size: 2.4rem; /* Ukuran font */
}
p {
  font-family: 'PoppinsRegular', sans-serif;
}
li {
  display: flex;
  align-items: center;
}
a {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'PoppinsRegular', sans-serif;
}
img {
  width: 34px;
  height: 34px;
  margin-right: 8px;
}
</style>
