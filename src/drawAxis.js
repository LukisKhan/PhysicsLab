const drawAxis = (ctx, xAxis = "Time", yAxis = "Distance", width = 400, height = 400) => {
  ctx.lineWidth = 1;
  ctx.moveTo(50, 50);
  // 0,0 origin is at 50, 360
  // end origin is at 360, 25
  // grid is 350 px by 350px starting at 50, 400 (0,0) and ends at 400, 50
  ctx.lineTo(50, height / (height / 350) + 50 );
  ctx.lineTo(width / (width / 350) + 50 , height / (height / 350) + 50);
  ctx.stroke();
  ctx.lineWidth = 0.5;
  for(let i = 1; i < 35; i ++) {
    ctx.moveTo(50, 400 - (10 * i));
    ctx.lineTo(400, 400 - (10 * i));
  }
  for (let j = 1; j < 35; j++) {
    ctx.moveTo(50 + (10 * j), 50);
    ctx.lineTo(50 + (10 * j), 400);
  }
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeText("0,0", 30, 420);
  ctx.strokeText(`${width}`, 400, 420);
  ctx.strokeText(`${height}`, 30, 50);
  ctx.strokeText(`${xAxis}`, 200, 420);
  ctx.strokeText(`${yAxis}`, 5, 200);
  
}

module.exports = drawAxis;