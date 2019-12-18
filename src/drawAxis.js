const drawAxis = (ctx, xAxis = "Time (s)", yAxis = "Distance", width = 400, height = 400) => {
  ctx.font = "20px Arial";
  ctx.lineWidth = 1;
  ctx.moveTo(100, 50);
  // 0,0 origin is at 50, 360
  // end origin is at 360, 25
  // grid is 350 px by 350px starting at 100, 400 (0,0) and ends at 450, 50
  ctx.lineTo(100, height / (height / 350) + 50 );
  ctx.lineTo(width / (width / 350) + 100 , height / (height / 350) + 50);
  ctx.stroke();
  ctx.lineWidth = 0.5;
  for(let i = 1; i < 10; i ++) {
    ctx.moveTo(100, 400 - (35 * i));
    ctx.lineTo(450, 400 - (35 * i));
  }
  for (let j = 1; j < 10; j++) {
    ctx.moveTo(100 + (35 * j), 50);
    ctx.lineTo(100 + (35 * j), 400);
  }
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.fillText("0,0", 80, 420);
  ctx.fillText(`${width}`, 450, 420);
  ctx.fillText(`${height}`, 80, 50);
  ctx.fillText(`${xAxis}`, 250, 420);
  ctx.fillText(`${yAxis}`, 5, 200);
  ctx.fillText("(m)", 30, 230);
  
}

module.exports = drawAxis;