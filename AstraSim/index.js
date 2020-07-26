var sun = new Image();
var moon = new Image();
var earth = new Image();

let speedEarth = 0.05;
let speedMoon = 0.5;

function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
   
  var ctx = document.getElementById('canvas').getContext('2d');
  
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 800, 800); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(400, 400);

  // Earth
  
  // Rotate Earth around Sun
  ctx.rotate((speedEarth*Math.PI)/180);
  ctx.translate(200, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  
  // Rotate Earth around  
  ctx.save()
  ctx.rotate((speedEarth*Math.PI*2)/90)
  ctx.drawImage(earth, -12, -12);
  ctx.restore()
  
  

  // Moon
  ctx.save();
  ctx.rotate((speedMoon*Math.PI)/180);
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(400, 400, 200, 0, 2*Math.PI, false); // Earth orbit
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(400, 400, 150, 0, 2*Math.PI, false)
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 800, 800);

  speedEarth < 360 ? speedEarth += 0.05 : speedEarth = 1;
  speedMoon < 360 ? speedMoon += 0.5 : speedMoon = 1;
  
  
  window.requestAnimationFrame(draw);
}

init();

