export const siteConfig = {
  businessName: "Riyan NJS Naripan",
  dealerName: "Dealer Resmi Mobil Suzuki NJS Naripan Bandung",
  salesName: "Riyan",
  salesRole: "Sales Consultant Suzuki NJS Naripan Bandung",
  phone: "+6289626390120",
  phoneNumberFormatted: "0896-2639-0120",
  whatsappNumber: "6289626390120",
  email: "riyansuzuki.bandung@gmail.com",
  address: "Jl. Naripan No.68, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40112",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.535!2d107.6316605!3d-6.9147128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e781f491aa2d%3A0x1eabdb84d1cee61b!2sSuzuki%20Ahmad%20Yani%20PT%20Nusantara%20Jaya%20Sentosa!5e0!3m2!1sen!2sid!4v1750000000000",
  siteUrl: "https://www.suzukinjsbandung.id/",
  dealerCoords: {
    lat: -6.9147128,
    lng: 107.6316605
  }
};

export function getWhatsAppLink(message = "Halo, saya tertarik dengan produk Suzuki. Mohon informasi lebih lanjut.") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const deliveryPhotos = [
  { src: "serah-terima.jpeg", caption: "Serah Terima Suzuki XL7 Alpha AT" },
  { src: "serah-terima1.jpeg", caption: "Serah Terima Suzuki Ertiga GX Hybrid" },
  { src: "serah-terima2.jpeg", caption: "Serah Terima Suzuki Carry Wide Deck" },
  { src: "serah-terima3.jpeg", caption: "Serah Terima Suzuki Jimny 5 Door" },
  { src: "serah-terima4.jpeg", caption: "Serah Terima Grand Vitara Alpha" },
  { src: "serah-terima5.jpeg", caption: "Serah Terima S-Presso GX AGS" },
  { src: "serah-terima6.jpeg", caption: "Serah Terima Suzuki Fronx RX Turbo" },
  { src: "serah-terima7.jpeg", caption: "Serah Terima Suzuki Baleno Alpha AT" },
  { src: "serah-terima8.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima9.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima10.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima11.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima12.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima13.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima14.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima15.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima16.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima17.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima18.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima19.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima20.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima21.jpeg", caption: "Serah Terima Mobil Suzuki" },
  { src: "serah-terima22.jpeg", caption: "Serah Terima Mobil Suzuki" }
];
