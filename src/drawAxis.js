const drawAxis = (ctx, width, height) => {
  ctx.lineWidth = 2;
  ctx.moveTo(50, 25);
  ctx.lineTo(50, 360);
  ctx.lineTo(760, 360);
  ctx.stroke();
  ctx.strokeText("0,0", 30, 370);
  ctx.strokeText(`${width}`, width - 50, 370);
  ctx.strokeText(`${height}`, 30, 30);

}
module.exports = drawAxis;