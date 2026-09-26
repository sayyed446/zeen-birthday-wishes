const host=document.getElementById('hearts');
function heart(){if(!host)return;const h=document.createElement('span');h.className='heart';h.textContent=['♥','💕','💓'][Math.floor(Math.random()*3)];h.style.left=Math.random()*100+'vw';h.style.setProperty('--x',(Math.random()-.5)*180+'px');h.style.fontSize=12+Math.random()*22+'px';const duration=8+Math.random()*8;h.style.animationDuration=duration+'s';host.appendChild(h);setTimeout(()=>h.remove(),duration*1000)}
for(let i=0;i<16;i++)setTimeout(heart,i*250);setInterval(heart,550);
