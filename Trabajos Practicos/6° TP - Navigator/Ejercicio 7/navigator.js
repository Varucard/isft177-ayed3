const video = document.getElementById('video');
const autoCapturedCanvas = document.getElementById('autoCapturedCanvas');
const autoCapturedImage = document.getElementById('autoCapturedImage');
const captureButton = document.getElementById('captureButton');
const userCapturedCanvas = document.getElementById('userCapturedCanvas');
const userCapturedImage = document.getElementById('userCapturedImage');

// Acceder a la cámara web del usuario
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
  })
  .catch(function(error) {
    console.error('Error al acceder a la cámara: ', error);
  });

// Función para tomar una captura automática y mostrarla en el autoCapturedCanvas
function captureAndShowAuto() {
  autoCapturedCanvas.width = video.videoWidth;
  autoCapturedCanvas.height = video.videoHeight;
  autoCapturedCanvas.getContext('2d').drawImage(video, 0, 0, autoCapturedCanvas.width, autoCapturedCanvas.height);
  autoCapturedImage.src = autoCapturedCanvas.toDataURL('image/png');
  autoCapturedImage.style.display = 'block';
}

// Función para tomar una captura cuando se presiona el botón y mostrarla en el userCapturedCanvas
function captureAndShowUser() {
  userCapturedCanvas.width = video.videoWidth;
  userCapturedCanvas.height = video.videoHeight;
  userCapturedCanvas.getContext('2d').drawImage(video, 0, 0, userCapturedCanvas.width, userCapturedCanvas.height);
  userCapturedImage.src = userCapturedCanvas.toDataURL('image/png');
  userCapturedImage.style.display = 'block';
}

// Capturar imágenes automáticamente cada 1 segundo
setInterval(captureAndShowAuto, 1000);

// Tomar una captura cuando se presiona el botón
captureButton.addEventListener('click', captureAndShowUser);
