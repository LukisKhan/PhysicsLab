!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t){function o(e=0,t=50){return Math.random()*(t-e)+e}e.exports=function(e=[o(),o()],t=[1,1],n=[.5,.5]){return{pos:e,vel:t,accel:n}}},function(e,t){e.exports=(e,t="Time",o="Distance",n=400,r=400)=>{e.lineWidth=1,e.moveTo(50,50),e.lineTo(50,r/(r/350)+50),e.lineTo(n/(n/350)+50,r/(r/350)+50),e.stroke(),e.lineWidth=.5;for(let t=1;t<10;t++)e.moveTo(50,400-35*t),e.lineTo(400,400-35*t);for(let t=1;t<10;t++)e.moveTo(50+35*t,50),e.lineTo(50+35*t,400);e.stroke(),e.lineWidth=1,e.strokeText("0,0",30,420),e.strokeText(`${n}`,400,420),e.strokeText(`${r}`,30,50),e.strokeText(`${t}`,200,420),e.strokeText(`${o}`,5,200)}},function(e,t,o){const n=o(3);document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("canvas");e.height=450,e.width=450,n(e)})},function(e,t,o){const n=o(4),r=o(7);o(1);e.exports=function(e){const t=document.querySelector(".topics"),o=document.querySelectorAll(".topic-window"),c=document.getElementById("equation");let l="velocity",s=e.getContext("2d");t.addEventListener("click",(function(e){if("LI"==e.target.tagName){const t=document.querySelector(e.target.dataset.topic);switch(o.forEach(e=>{e==t?(e.classList.add("active"),l=e.classList[1],console.log(t),c.innerText=`${l}`):e.classList.remove("active")}),l){case"velocity":console.log("vel case"),n(s);break;case"acceleration":console.log("accel case"),r(s);break;default:console.log("default case"),n(s)}}}))}},function(e,t,o){const n=o(5),r=o(1),c=o(6);e.exports=function(e){e.clearRect(0,0,2e3,2e3),r(e,"Time","Distance");const t=document.forms["vel-inputs"];t.addEventListener("submit",o=>{o.preventDefault();let l={pos:[],vel:[]};t.querySelectorAll("#pos").forEach(e=>{l.pos.push(parseInt(e.value)||0)}),t.querySelectorAll("#vel").forEach(e=>{l.vel.push(parseInt(e.value)||0)});let s=t.elements.distance.value,a=t.elements.time.value,i=(t.elements.velocity.value,s/a);l={pos:[50,400],vel:[1,-i]},10*i>350?(e.clearRect(0,0,2e3,2e3),r(e,"Time","Distance",10,10*i),c(e),n(e,l,10,10*i)):1/i*10>350?(e.clearRect(0,0,2e3,2e3),l.vel=[i,-1],r(e,"Time","Distance",1/i*10,10),c(e),n(e,l,1/i*10,10)):(e.clearRect(0,0,2e3,2e3),r(e,"Time","Distance",400,400),n(e,l))})}},function(e,t,o){o(0);e.exports=function(e,t,o=400,n=400){const r=()=>{let c=requestAnimationFrame(r),l=t.pos,s=(t=(e=>{let{pos:t,vel:r,accel:c}=e;return t=n>400?[t[0]+r[0]/10*350,t[1]+r[1]/n*350]:o>400?[t[0]+1/r[0]/o*350,t[1]+r[1]/10*350]:[t[0]+r[0],t[1]+r[1]],{...e,pos:t}})(t)).pos[0],a=t.pos[1];e.moveTo(l[0],l[1]),e.lineTo(t.pos[0],t.pos[1]),e.stroke(),e.beginPath(),e.arc(s,a,2,0*Math.PI,2*Math.PI,!0),e.stroke(),(t.pos[0]>399||t.pos[1]<51)&&cancelAnimationFrame(c)};r()}},function(e,t){e.exports=e=>{e.strokeText("UNEVEN AXISES",180,440)}},function(e,t,o){const n=o(8);e.exports=function(e){const t=document.forms["accel-inputs"];t.addEventListener("submit",o=>{o.preventDefault();let r={pos:[],vel:[],accel:[]};t.querySelectorAll("#pos").forEach(e=>{r.pos.push(parseInt(e.value)||0)}),t.querySelectorAll("#vel").forEach(e=>{r.vel.push(parseInt(e.value)||0)}),t.querySelectorAll("#accel").forEach(e=>{r.accel.push(parseInt(e.value)||0)});e.clearRect(0,0,2e3,2e3),n(e,r)})}},function(e,t,o){o(0);e.exports=function(e,t){const o=()=>{requestAnimationFrame(o);let n=(t=(e=>{let{pos:t,vel:o,accel:n}=e;return t=[t[0]+o[0],t[1]+o[1]],o=[o[0]+n[0],o[1]+n[1]],{...e,pos:t,vel:o}})(t)).pos[0],r=t.pos[1];e.beginPath(),e.arc(n,r,6,0*Math.PI,2*Math.PI,!0),e.stroke()};o()}}]);
//# sourceMappingURL=main.js.map