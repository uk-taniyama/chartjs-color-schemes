import{C as d,g as b,s as h}from"./index.js";import{c as y,a as C,s as F}from"./setup.js";import{M as k,a as N,c as f}from"./chartjs-chart-matrix.esm.js";d.register(k,N);const E=y();C("Primary",["#00F","#0F0","#0FF","#F00","#F0F","#FF0"]);const{namedLinear:m}=b(),M=Object.keys(m);F(E);const v=document.getElementById("schemeName"),g=document.getElementById("schemes");let u=h("default");function w(s,o,e){const a=[];for(let t=0;t<s;t+=1)for(let n=0;n<o;n+=1){const p=n<1?t*2+n*s:u()*e;a.push({x:t,y:n,v:p})}return a}const r=30,i=25,c=50;function B(){u=h("default");const s=e=>{var a;return f(m.Blues,0,c)(((a=e==null?void 0:e.raw)==null?void 0:a.v)||0)},o=w(r,i,c);return{type:"matrix",data:{datasets:[{data:o,backgroundColor:e=>s(e),width:e=>{var a,t;return(((t=(a=e==null?void 0:e.chart)==null?void 0:a.chartArea)==null?void 0:t.width)||0)/r},height:e=>{var a,t;return(((t=(a=e==null?void 0:e.chart)==null?void 0:a.chartArea)==null?void 0:t.height)||0)/i}}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{min:-.5,max:r-.5,ticks:{callback:e=>Number.isInteger(e)?e:void 0},offset:!1},y:{min:-.5,max:i-.5,ticks:{callback:e=>Number.isInteger(e)?e:void 0},offset:!1}},plugins:{title:{display:!1},legends:{display:!1}}}}}const I=document.getElementById("chart"),l=new d(I,B());g.innerHTML=M.map(s=>`<button class="btn btn-chartjs" id="${s}">${s}</button>`).join(" ");g.addEventListener("click",s=>{if(s.target.tagName!=="BUTTON")return;const o=s.target.id;v.innerHTML=o;const e=m[o],a=t=>{var n;return f(e,0,c)(((n=t==null?void 0:t.raw)==null?void 0:n.v)||0)};l.config.data.datasets[0].backgroundColor=a,l.update()});
