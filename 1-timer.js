import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{f,i as p}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");o.addEventListener("click",C);let u=null,i=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=new Date)return p.error({position:"topRight",title:"Error",message:"Please choose a date in the future"});u=t[0],o.disabled=!1}};f(n,b);function C(){n.disabled=!0,o.disabled=!0,i=setInterval(D,1e3)}function D(){const t=u-new Date;if(t<=0){n.disabled=!1,clearInterval(i);return}const{days:r,hours:a,minutes:s,seconds:c}=e(t);h.textContent=String(r).padStart(2,0),y.textContent=String(a).padStart(2,0),g.textContent=String(s).padStart(2,0),q.textContent=String(c).padStart(2,0)}function e(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:S}}console.log(e(2e3));console.log(e(14e4));console.log(e(2414e4));
//# sourceMappingURL=1-timer.js.map
