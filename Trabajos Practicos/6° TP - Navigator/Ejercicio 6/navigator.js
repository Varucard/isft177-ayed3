const video = document.getElementById('video');
const captureButton = document.getElementById('captureButton');
const canvas = document.getElementById('canvas');
const capturedImage = document.getElementById('capturedImage');

// Acceder a la cámara web del usuario
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
  })
  .catch(function(error) {
    console.error('Error al acceder a la cámara: ', error);
  });

// Tomar una captura y mostrarla en un canvas
captureButton.addEventListener('click', function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  // Mostrar la captura en una imagen
  capturedImage.src = canvas.toDataURL('image/png');
  capturedImage.style.display = 'block';
});
