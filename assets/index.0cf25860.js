var Pe=Object.defineProperty;var W=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var ue=(r,i,n)=>i in r?Pe(r,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[i]=n,x=(r,i)=>{for(var n in i||(i={}))pe.call(i,n)&&ue(r,n,i[n]);if(W)for(var n of W(i))de.call(i,n)&&ue(r,n,i[n]);return r};var he=(r,i)=>{var n={};for(var a in r)pe.call(r,a)&&i.indexOf(a)<0&&(n[a]=r[a]);if(r!=null&&W)for(var a of W(r))i.indexOf(a)<0&&de.call(r,a)&&(n[a]=r[a]);return n};const Ce=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const c of f)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(f){const c={};return f.integrity&&(c.integrity=f.integrity),f.referrerpolicy&&(c.referrerPolicy=f.referrerpolicy),f.crossorigin==="use-credentials"?c.credentials="include":f.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(f){if(f.ep)return;f.ep=!0;const c=n(f);fetch(f.href,c)}};Ce();var Ue=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Re={exports:{}};(function(r){var i=function(n){var a=Object.prototype,f=a.hasOwnProperty,c,p=typeof Symbol=="function"?Symbol:{},h=p.iterator||"@@iterator",S=p.asyncIterator||"@@asyncIterator",P=p.toStringTag||"@@toStringTag";function y(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{y({},"")}catch{y=function(e,o,l){return e[o]=l}}function T(t,e,o,l){var s=e&&e.prototype instanceof G?e:G,d=Object.create(s.prototype),w=new J(l||[]);return d._invoke=Oe(t,o,w),d}n.wrap=T;function A(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(l){return{type:"throw",arg:l}}}var B="suspendedStart",Z="suspendedYield",D="executing",C="completed",F={};function G(){}function k(){}function u(){}var m={};y(m,h,function(){return this});var g=Object.getPrototypeOf,$=g&&g(g(K([])));$&&$!==a&&f.call($,h)&&(m=$);var v=u.prototype=G.prototype=Object.create(m);k.prototype=u,y(v,"constructor",u),y(u,"constructor",k),k.displayName=y(u,P,"GeneratorFunction");function I(t){["next","throw","return"].forEach(function(e){y(t,e,function(o){return this._invoke(e,o)})})}n.isGeneratorFunction=function(t){var e=typeof t=="function"&&t.constructor;return e?e===k||(e.displayName||e.name)==="GeneratorFunction":!1},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,y(t,P,"GeneratorFunction")),t.prototype=Object.create(v),t},n.awrap=function(t){return{__await:t}};function M(t,e){function o(d,w,b,E){var L=A(t[d],t,w);if(L.type==="throw")E(L.arg);else{var Q=L.arg,q=Q.value;return q&&typeof q=="object"&&f.call(q,"__await")?e.resolve(q.__await).then(function(O){o("next",O,b,E)},function(O){o("throw",O,b,E)}):e.resolve(q).then(function(O){Q.value=O,b(Q)},function(O){return o("throw",O,b,E)})}}var l;function s(d,w){function b(){return new e(function(E,L){o(d,w,E,L)})}return l=l?l.then(b,b):b()}this._invoke=s}I(M.prototype),y(M.prototype,S,function(){return this}),n.AsyncIterator=M,n.async=function(t,e,o,l,s){s===void 0&&(s=Promise);var d=new M(T(t,e,o,l),s);return n.isGeneratorFunction(e)?d:d.next().then(function(w){return w.done?w.value:d.next()})};function Oe(t,e,o){var l=B;return function(d,w){if(l===D)throw new Error("Generator is already running");if(l===C){if(d==="throw")throw w;return fe()}for(o.method=d,o.arg=w;;){var b=o.delegate;if(b){var E=ce(b,o);if(E){if(E===F)continue;return E}}if(o.method==="next")o.sent=o._sent=o.arg;else if(o.method==="throw"){if(l===B)throw l=C,o.arg;o.dispatchException(o.arg)}else o.method==="return"&&o.abrupt("return",o.arg);l=D;var L=A(t,e,o);if(L.type==="normal"){if(l=o.done?C:Z,L.arg===F)continue;return{value:L.arg,done:o.done}}else L.type==="throw"&&(l=C,o.method="throw",o.arg=L.arg)}}}function ce(t,e){var o=t.iterator[e.method];if(o===c){if(e.delegate=null,e.method==="throw"){if(t.iterator.return&&(e.method="return",e.arg=c,ce(t,e),e.method==="throw"))return F;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return F}var l=A(o,t.iterator,e.arg);if(l.type==="throw")return e.method="throw",e.arg=l.arg,e.delegate=null,F;var s=l.arg;if(!s)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,F;if(s.done)e[t.resultName]=s.value,e.next=t.nextLoc,e.method!=="return"&&(e.method="next",e.arg=c);else return s;return e.delegate=null,F}I(v),y(v,P,"Generator"),y(v,h,function(){return this}),y(v,"toString",function(){return"[object Generator]"});function je(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function H(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function J(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(je,this),this.reset(!0)}n.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function l(){for(;e.length;){var s=e.pop();if(s in t)return l.value=s,l.done=!1,l}return l.done=!0,l}};function K(t){if(t){var e=t[h];if(e)return e.call(t);if(typeof t.next=="function")return t;if(!isNaN(t.length)){var o=-1,l=function s(){for(;++o<t.length;)if(f.call(t,o))return s.value=t[o],s.done=!1,s;return s.value=c,s.done=!0,s};return l.next=l}}return{next:fe}}n.values=K;function fe(){return{value:c,done:!0}}return J.prototype={constructor:J,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(H),!t)for(var e in this)e.charAt(0)==="t"&&f.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(E,L){return d.type="throw",d.arg=t,e.next=E,L&&(e.method="next",e.arg=c),!!L}for(var l=this.tryEntries.length-1;l>=0;--l){var s=this.tryEntries[l],d=s.completion;if(s.tryLoc==="root")return o("end");if(s.tryLoc<=this.prev){var w=f.call(s,"catchLoc"),b=f.call(s,"finallyLoc");if(w&&b){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(w){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else if(b){if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o];if(l.tryLoc<=this.prev&&f.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var s=l;break}}s&&(t==="break"||t==="continue")&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var d=s?s.completion:{};return d.type=t,d.arg=e,s?(this.method="next",this.next=s.finallyLoc,F):this.complete(d)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),F},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),H(o),F}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var l=o.completion;if(l.type==="throw"){var s=l.arg;H(o)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:K(t),resultName:e,nextLoc:o},this.method==="next"&&(this.arg=c),F}},n}(r.exports);try{regeneratorRuntime=i}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}})(Re);var Te={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}};let ie=!1,ve=()=>{};const Ae=r=>{ie=r},Ge=r=>{ve=r},qe=(r,i)=>{ve({type:r,message:i}),ie&&console.log(`[${r}] ${i}`)};var we={logging:ie,setLogging:Ae,setCustomLogger:Ge,log:qe};let N=0,X=0;const me=r=>{const[i,n,a]=r.split(":");return parseFloat(i)*60*60+parseFloat(n)*60+parseFloat(a)};var Ne=(r,i)=>{if(typeof r=="string")if(r.startsWith("  Duration")){const n=r.split(", ")[0].split(": ")[1],a=me(n);i({duration:a,ratio:X}),(N===0||N>a)&&(N=a)}else if(r.startsWith("frame")||r.startsWith("size")){const n=r.split("time=")[1].split(" ")[0],a=me(n);X=a/N,i({ratio:X,time:a})}else r.startsWith("video:")&&(i({ratio:1}),N=0)},_e=(r,i)=>{const n=r._malloc(i.length*Uint32Array.BYTES_PER_ELEMENT);return i.forEach((a,f)=>{const c=r._malloc(a.length+1);r.writeAsciiToMemory(a,c),r.setValue(n+Uint32Array.BYTES_PER_ELEMENT*f,c,"i32")}),[i.length,n]},se={exports:{}};(function(r,i){(function(n,a){r.exports=a()})(Ue,function(){function n(){var a=arguments.length;if(a===0)throw new Error("resolveUrl requires at least one argument; got none.");var f=document.createElement("base");if(f.href=arguments[0],a===1)return f.href;var c=document.getElementsByTagName("head")[0];c.insertBefore(f,c.firstChild);for(var p=document.createElement("a"),h,S=1;S<a;S++)p.href=arguments[S],h=p.href,f.href=h;return c.removeChild(f),h}return n})})(se);const Be="@ffmpeg/ffmpeg",De="0.10.1",Ie="FFmpeg WebAssembly version",Me="src/index.js",We="src/index.d.ts",xe={example:"examples"},ze={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},Ye={"./src/node/index.js":"./src/browser/index.js"},Ve={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},Ze=["ffmpeg","WebAssembly","video"],He="Jerome Wu <jeromewus@gmail.com>",Je="MIT",Ke={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},Qe={node:">=12.16.1"},Xe="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",et={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},tt={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"};var be={name:Be,version:De,description:Ie,main:Me,types:We,directories:xe,scripts:ze,browser:Ye,repository:Ve,keywords:Ze,author:He,license:Je,bugs:Ke,engines:Qe,homepage:Xe,dependencies:et,devDependencies:tt};const{devDependencies:rt}=be;var ot={corePath:`https://unpkg.com/@ffmpeg/core@${rt["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const nt=se.exports,{log:_}=we,ee=async(r,i)=>{_("info",`fetch ${r}`);const n=await(await fetch(r)).arrayBuffer();_("info",`${r} file size = ${n.byteLength} bytes`);const a=new Blob([n],{type:i}),f=URL.createObjectURL(a);return _("info",`${r} blob URL = ${f}`),f};var it=async({corePath:r})=>{if(typeof r!="string")throw Error("corePath should be a string!");const i=nt(r),n=await ee(i,"application/javascript"),a=await ee(i.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),f=await ee(i.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore=="undefined"?new Promise(c=>{const p=document.createElement("script"),h=()=>{p.removeEventListener("load",h),_("info","ffmpeg-core.js script loaded"),c({createFFmpegCore,corePath:n,wasmPath:a,workerPath:f})};p.src=n,p.type="text/javascript",p.addEventListener("load",h),document.getElementsByTagName("head")[0].appendChild(p)}):(_("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:n,wasmPath:a,workerPath:f}))};const st=se.exports,at=r=>new Promise((i,n)=>{const a=new FileReader;a.onload=()=>{i(a.result)},a.onerror=({target:{error:{code:f}}})=>{n(Error(`File could not be read! Code=${f}`))},a.readAsArrayBuffer(r)});var lt=async r=>{let i=r;return typeof r=="undefined"?new Uint8Array:(typeof r=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(r)?i=atob(r.split(",")[1]).split("").map(n=>n.charCodeAt(0)):i=await(await fetch(st(r))).arrayBuffer():(r instanceof File||r instanceof Blob)&&(i=await at(r)),new Uint8Array(i))};const ct=ot,ft=it,ut=lt;var Le={defaultOptions:ct,getCreateFFmpegCore:ft,fetchFile:ut};const{defaultArgs:pt,baseOptions:dt}=Te,{setLogging:ge,setCustomLogger:ye,log:j}=we,ht=Ne,mt=_e,{defaultOptions:gt,getCreateFFmpegCore:yt}=Le,{version:vt}=be,te=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var wt=(r={})=>{const k=x(x(x({},dt),gt),r),{log:i,logger:n,progress:a}=k,f=he(k,["log","logger","progress"]);let c=null,p=null,h=null,S=!1,P=a;const y=u=>{u==="FFMPEG_END"&&h!==null&&(h(),h=null,S=!1)},T=({type:u,message:m})=>{j(u,m),ht(m,P),y(m)},A=async()=>{if(j("info","load ffmpeg-core"),c===null){j("info","loading ffmpeg-core");const{createFFmpegCore:u,corePath:m,workerPath:g,wasmPath:$}=await yt(f);c=await u({mainScriptUrlOrBlob:m,printErr:v=>T({type:"fferr",message:v}),print:v=>T({type:"ffout",message:v}),locateFile:(v,I)=>{if(typeof window!="undefined"){if(typeof $!="undefined"&&v.endsWith("ffmpeg-core.wasm"))return $;if(typeof g!="undefined"&&v.endsWith("ffmpeg-core.worker.js"))return g}return I+v}}),p=c.cwrap("proxy_main","number",["number","number"]),j("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},B=()=>c!==null,Z=(...u)=>{if(j("info",`run ffmpeg command: ${u.join(" ")}`),c===null)throw te;if(S)throw Error("ffmpeg.wasm can only run one command at a time");return S=!0,new Promise(m=>{const g=[...pt,...u].filter($=>$.length!==0);h=m,p(...mt(c,g))})},D=(u,...m)=>{if(j("info",`run FS.${u} ${m.map(g=>typeof g=="string"?g:`<${g.length} bytes binary file>`).join(" ")}`),c===null)throw te;{let g=null;try{g=c.FS[u](...m)}catch{throw Error(u==="readdir"?`ffmpeg.FS('readdir', '${m[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:u==="readFile"?`ffmpeg.FS('readFile', '${m[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return g}},C=()=>{if(c===null)throw te;S=!1,c.exit(1),c=null,p=null,h=null},F=u=>{P=u},G=u=>{ye(u)};return ge(i),ye(n),j("info",`use ffmpeg.wasm v${vt}`),{setProgress:F,setLogger:G,setLogging:ge,load:A,isLoaded:B,run:Z,exit:C,FS:D}};const bt=wt,{fetchFile:Lt}=Le;var Fe={createFFmpeg:bt,fetchFile:Lt};const V=document.querySelector(".drop-zone-container"),Ft=document.querySelector("#upload"),re=document.querySelector(".alert-container"),ae=document.querySelector("video"),Ee=document.querySelector(".video-container"),Et=document.querySelector(".close-video-btn"),R=document.querySelector(".convert-btn"),Se=document.querySelector(".gif-container"),St=document.querySelector(".gif"),$t=document.querySelector(".download-img"),le=document.querySelector(".input-container"),oe=document.querySelector(".progress-container"),z=Fe.createFFmpeg();let ne,$e,U;async function kt(){await z.load(),R.disabled=!1}function ke(r){$e=r,ne=URL.createObjectURL(r),V.style.display="none",ae.src=ne,Ee.style.display="block",R.style.display="block",le.style.display="block"}function Ot(){St.src=U,$t.href=U,Se.style.display="block"}function Y(r){re.style.visibility="visible",re.textContent=r,setTimeout(()=>{re.style.visibility="hidden"},2e3)}async function jt(){U&&URL.revokeObjectURL(U);const r=parseFloat(le.querySelector("input").value),i=2;if(r<0)Y("Start time cannot be less than zero");else if(r>ae.duration-i)Y("Start time cannot be more than the duration of the video");else{oe.style.display="block",R.disabled=!0,z.FS("writeFile","video.mp4",await Fe.fetchFile($e));try{await z.run("-i","video.mp4","-r","10","-ss",String(r),"-t",String(i),"-vf","scale=320:-1","out.gif");const n=z.FS("readFile","out.gif");U=URL.createObjectURL(new Blob([n.buffer]),{type:"image/gif"})}catch(n){console.error(n.message),Y("Something went wrong during the conversion");return}finally{R.disabled=!1,oe.style.display="none"}Ot(),oe.style.display="none"}}V.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="copy"});V.addEventListener("drop",r=>{r.preventDefault();const i=r.dataTransfer.files[0];i.type==="video/mp4"?ke(i):Y("Format not supported")});Ft.addEventListener("change",({target:{files:r}})=>{ke(r[0])});Et.addEventListener("click",()=>{URL.revokeObjectURL(ne),URL.revokeObjectURL(U),V.style.display="block",ae.src="",Ee.style.display="none",R.style.display="none",Se.style.display="none",le.style.display="none"});R.addEventListener("click",jt);kt();