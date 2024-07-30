<template>
  <div class="product-detail">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h1 class="product-name">{{ product.name }}</h1>
      <p class="product-description">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {}
    };
  },
  created() {
    const productId = this.$route.params.id;
    // Fetch the product details using the productId
    const products = [
      {
       id: 1,
       name: "Intip Madu Santosa",
       description: "Intip madu adalah salah satu produk makanan khas dari Indonesia, terutama Jawa Tengah. Intip adalah lapisan kerak nasi yang terbentuk di bagian bawah periuk atau wajan saat memasak nasi. Ketika nasi dimasak dalam panci tradisional, sering kali bagian bawah nasi menjadi agak keras dan terbentuk kerak. Inilah yang disebut intip. Untuk membuat intip madu, kerak nasi ini biasanya dikeringkan terlebih dahulu hingga benar-benar keras. Setelah itu, intip tersebut digoreng hingga garing dan berwarna kecokelatan. Proses penggorengan ini memberikan tekstur yang renyah pada intip. Setelah digoreng, intip biasanya disajikan dengan cara diberi siraman madu atau gula cair. Madu atau gula cair ini memberikan rasa manis yang khas dan lezat pada intip yang sudah renyah. Kombinasi antara tekstur renyah dan rasa manis membuat intip madu menjadi camilan yang digemari banyak orang. Intip madu sering dijual sebagai oleh-oleh khas dari berbagai daerah di Jawa Tengah, seperti Solo dan sekitarnya. Camilan ini selain memiliki cita rasa yang unik, juga membawa nilai nostalgia bagi banyak orang yang mengingat masa kecil mereka saat makan intip yang dibuat secara tradisional.\n\nAlamat: Kecamatan Giritontro, Kelurahan Tlogoharjo, Dusun Jajar RT 05/RW 02.\n\nNomor WhatsApp: 082134245442.",
       image: require('@/assets/intip.jpg')
      },
      {
        id: 2,
        name: 'Kembang Goyang',
        description: 'Kembang Goyang adalah salah satu camilan tradisional yang populer di Indonesia, khususnya di daerah Jawa. Kembang Goyang terbuat dari adonan tepung beras yang dicampur dengan santan dan bahan-bahan lainnya, kemudian digoreng menggunakan cetakan khusus berbentuk bunga. Hasilnya adalah camilan yang renyah dan berbentuk bunga yang cantik, yang sering disajikan pada acara-acara spesial dan hari raya. Kembang Goyang memiliki rasa yang gurih dan sedikit manis, cocok dinikmati sebagai teman minum teh atau kopi. Produk ini diproduksi di kecamatan Giritontro, kabupaten Wonogiri, kelurahan Tlogoharjo, dusun Ginade Kulon.\n\n Nomor Whatsapp: 081326778825 ',
        image: require('@/assets/Kembanggoyang.jpg')
      },
      {
        id: 3,
        name: "Arang Warimo",
        description: "Arang Warimo adalah produk arang yang dibuat dari pohon akasia. Arang ini diproduksi melalui proses pembakaran kayu akasia yang dikontrol dengan baik, sehingga menghasilkan arang berkualitas tinggi yang memiliki daya bakar lama dan panas yang konsisten. Arang Warimo sangat cocok digunakan untuk berbagai keperluan, mulai dari memasak, BBQ, hingga kebutuhan industri. Produk ini diproduksi di Kecamatan Giritontro, Kelurahan Tlogoharjo, Kabupaten Wonogiri, Dusun Jajar.\n\nNomor WhatsApp: 082142176669.",
        image: require('@/assets/arang.jpg')
      }

    ];
    this.product = products.find(product => product.id === parseInt(productId));
  }
};
</script>

<style scoped>
.product-detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}
.product-image {
  flex: 1;
  padding-right: 20px;
}
.product-image img {
  max-width: 100%;
  border-radius: 10px;
}
.product-info {
  flex: 2;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.product-name {
  font-size: 2rem;
  margin: 10px 0;
  text-align: left;
  font-family: 'BebasNeue';
}
.product-description {
  font-size: 1rem;
  font-family: 'PoppinsReguler';
  color: #2b2a2a;
  padding: 15px;
  text-align: left;
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
</style>
