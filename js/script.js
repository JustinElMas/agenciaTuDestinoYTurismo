/* hacer que cuando se de doble clic en el hero del video no se coloque el cursor */

/* video start for second 2 */
const video = document.getElementById('video-segundo');
    
// Definir el segundo desde el cual comenzar el video
const segundoInicial = 3;

video.addEventListener('loadedmetadata', function() {
  video.currentTime = segundoInicial;
});

video.play();

window.addEventListener("scroll", function(){
  let navbar = document.querySelector('.navbar');
  navbar.classList.toggle("down",this.window.scrollY>0);
});