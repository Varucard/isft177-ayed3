if ("geolocation" in navigator) {
  // El navegador admite geolocalización
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;

    console.log(`Latitud: ${latitud}, Longitud: ${longitud}`);
  }, function(error) {
    console.error("Error al obtener la ubicación:", error);
  });
} else {
  console.log("La geolocalización no está disponible en este navegador.");
}
