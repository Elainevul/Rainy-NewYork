var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var numDrops = 500;
var rainDrops = [];
var numLines = 5; // 添加的横线数量

// 初始化雨滴
for (var i = 0; i < numDrops; i++) {
  rainDrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 2 + Math.random() * 4,
    length: 5 + Math.random() * 20
  });
}

// 绘制横线
function drawLines() {
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  var lineHeight = canvas.height / (numLines + 1);
  for (var i = 1; i <= numLines; i++) {
    var y = i * lineHeight;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

// 绘制雨滴
function drawRain() {
  ctx.strokeStyle = '#00a8ff';
  ctx.lineWidth = 2;
  for (var i = 0; i < rainDrops.length; i++) {
    var drop = rainDrops[i];
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.speed;

    if (drop.y - drop.length > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }
}

// 绘制动画
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLines(); // 绘制横线
  drawRain(); // 绘制雨滴

  requestAnimationFrame(draw);
}

draw();
