(()=>{"use strict";const e="CP3MpFmjjR-ioWbnao1ri",t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("video"),c=document.createElement("canvas"),i=c.getContext("2d"),r=document.createElement("pre"),d=document.createElement("button"),l=document.createElement("button");let s=!0,p=null;const m="@#80GCLft1i!;:,. ";t.className="_2YI3Jv4S8MtPFMjU4uosm7",n.className="_38ynaZoDFbersKjrj9RqUx",t.append(n),document.body.append(t),a.style.opacity=0,a.className="_2TVpNziNNpcYMj_FFsBrf8",t.append(a),o.autoplay=!0,o.playsInline=!0,o.style.display="none",t.append(o),c.style.display="none",c.width=50,c.height=50,t.append(c),d.innerText="play",d.classList.add(e,"_2xe6DZQ5_NnURpzIaXE__b"),n.append(d),l.innerText="copy",l.classList.add(e,"_1YM5NazeM8wzdFKHs7bcLu"),n.append(l),r.textContent="",r.className="czmxIsC8-ONLxLfEuZ5xQ",t.append(r),navigator.mediaDevices.getUserMedia({audio:!1,video:{width:50,height:50}}).then((function(e){o.srcObject=e})).catch((function(e){console.error(e)})),d.onclick=function(e){s?(s=!1,o.play(),this.innerText="pause",function(e,t){let n,a="",c=e.canvas.width,i=e.canvas.height,r=Array(c*i);p=requestAnimationFrame((function d(){e.clearRect(0,0,c,i),e.drawImage(o,0,0,c,i),n=e.getImageData(0,0,c,i),a="",t.textContent="",function(){let e=-1;for(let t=0;t<n.data.length;t+=4){const a=.2126*n.data[t]+.7152*n.data[t+1]+.072*n.data[t+2];r[++e]=a}}(),function(){for(let e=0;e<i;e++){for(let t=c-1;t>=0;t--){let n=Math.floor((m.length-1)*r[e*i+t]/255);a+=m[n]}a+="\n"}t.textContent=a}(),p=requestAnimationFrame(d)}))}(i,r)):(s=!0,o.pause(),this.innerText="play",cancelAnimationFrame(p))},l.onclick=function(e){navigator.clipboard?(navigator.clipboard.writeText(document.querySelector("pre").innerText),"Copied to clipboard!",a.style.opacity=1,a.innerText="Copied to clipboard!",setTimeout((()=>a.style.opacity=0),1300)):console.error("navigator.clipboard not supported on your browser")}})();
//# sourceMappingURL=main.bundle.js.map