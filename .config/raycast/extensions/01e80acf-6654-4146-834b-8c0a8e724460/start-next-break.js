var vn=Object.create;var N=Object.defineProperty,En=Object.defineProperties,In=Object.getOwnPropertyDescriptor,Tn=Object.getOwnPropertyDescriptors,Pn=Object.getOwnPropertyNames,Pe=Object.getOwnPropertySymbols,Cn=Object.getPrototypeOf,Ge=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable;var Ce=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Ge.call(t,n)&&Ce(e,n,t[n]);if(Pe)for(var n of Pe(t))Gn.call(t,n)&&Ce(e,n,t[n]);return e},v=(e,t)=>En(e,Tn(t)),Ae=e=>N(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),An=(e,t)=>{for(var n in t)N(e,n,{get:t[n],enumerable:!0})},Oe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Pn(t))!Ge.call(e,o)&&(n||o!=="default")&&N(e,o,{get:()=>t[o],enumerable:!(r=In(t,o))||r.enumerable});return e},qe=(e,t)=>Oe(Ae(N(e!=null?vn(Cn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),On=(e=>(t,n)=>e&&e.get(t)||(n=Oe(Ae({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var _e=c((Go,Fe)=>{Fe.exports=Ne;Ne.sync=Rn;var Re=require("fs");function qn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function ke(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:qn(t,n)}function Ne(e,t,n){Re.stat(e,function(r,o){n(r,r?!1:ke(o,e,t))})}function Rn(e,t){return ke(Re.statSync(e),e,t)}});var je=c((Ao,Me)=>{Me.exports=$e;$e.sync=kn;var Be=require("fs");function $e(e,t,n){Be.stat(e,function(r,o){n(r,r?!1:Le(o,t))})}function kn(e,t){return Le(Be.statSync(e),t)}function Le(e,t){return e.isFile()&&Nn(e,t)}function Nn(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),p=a|u,y=n&l||n&u&&o===i||n&a&&r===s||n&p&&s===0;return y}});var De=c((qo,Ue)=>{var Oo=require("fs"),U;process.platform==="win32"||global.TESTING_WINDOWS?U=_e():U=je();Ue.exports=te;te.sync=Fn;function te(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){te(e,t||{},function(s,i){s?o(s):r(i)})})}U(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function Fn(e,t){try{return U.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Ye=c((Ro,Ve)=>{var P=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",He=require("path"),_n=P?";":":",Xe=De(),Ke=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),We=(e,t)=>{let n=t.colon||_n,r=e.match(/\//)||P&&e.match(/\\/)?[""]:[...P?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=P?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=P?o.split(n):[""];return P&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},ze=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=We(e,t),i=[],a=l=>new Promise((p,y)=>{if(l===r.length)return t.all&&i.length?p(i):y(Ke(e));let h=r[l],S=/^".*"$/.test(h)?h.slice(1,-1):h,x=He.join(S,e),w=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;p(u(w,l,0))}),u=(l,p,y)=>new Promise((h,S)=>{if(y===o.length)return h(a(p+1));let x=o[y];Xe(l+x,{pathExt:s},(w,T)=>{if(!w&&T)if(t.all)i.push(l+x);else return h(l+x);return h(u(l,p,y+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},Bn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=We(e,t),s=[];for(let i=0;i<n.length;i++){let a=n[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=He.join(u,e),p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let y=0;y<r.length;y++){let h=p+r[y];try{if(Xe.sync(h,{pathExt:o}))if(t.all)s.push(h);else return h}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Ke(e)};Ve.exports=ze;ze.sync=Bn});var re=c((ko,ne)=>{"use strict";var Qe=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ne.exports=Qe;ne.exports.default=Qe});var tt=c((No,et)=>{"use strict";var Ze=require("path"),$n=Ye(),Ln=re();function Je(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=$n.sync(e.command,{path:n[Ln({env:n})],pathExt:t?Ze.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=Ze.resolve(o?e.options.cwd:"",i)),i}function Mn(e){return Je(e)||Je(e,!0)}et.exports=Mn});var nt=c((Fo,se)=>{"use strict";var oe=/([()\][%!^"`<>&|;, *?])/g;function jn(e){return e=e.replace(oe,"^$1"),e}function Un(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(oe,"^$1"),t&&(e=e.replace(oe,"^$1")),e}se.exports.command=jn;se.exports.argument=Un});var ot=c((_o,rt)=>{"use strict";rt.exports=/^#!(.*)/});var it=c((Bo,st)=>{"use strict";var Dn=ot();st.exports=(e="")=>{let t=e.match(Dn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var ct=c(($o,at)=>{"use strict";var ie=require("fs"),Hn=it();function Xn(e){let n=Buffer.alloc(150),r;try{r=ie.openSync(e,"r"),ie.readSync(r,n,0,150,0),ie.closeSync(r)}catch{}return Hn(n.toString())}at.exports=Xn});var ft=c((Lo,dt)=>{"use strict";var Kn=require("path"),ut=tt(),lt=nt(),Wn=ct(),zn=process.platform==="win32",Vn=/\.(?:com|exe)$/i,Yn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Qn(e){e.file=ut(e);let t=e.file&&Wn(e.file);return t?(e.args.unshift(e.file),e.command=t,ut(e)):e.file}function Zn(e){if(!zn)return e;let t=Qn(e),n=!Vn.test(t);if(e.options.forceShell||n){let r=Yn.test(t);e.command=Kn.normalize(e.command),e.command=lt.command(e.command),e.args=e.args.map(s=>lt.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Jn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Zn(r)}dt.exports=Jn});var ht=c((Mo,mt)=>{"use strict";var ae=process.platform==="win32";function ce(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function er(e,t){if(!ae)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=pt(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function pt(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawn"):null}function tr(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawnSync"):null}mt.exports={hookChildProcess:er,verifyENOENT:pt,verifyENOENTSync:tr,notFoundError:ce}});var xt=c((jo,C)=>{"use strict";var yt=require("child_process"),ue=ft(),le=ht();function St(e,t,n){let r=ue(e,t,n),o=yt.spawn(r.command,r.args,r.options);return le.hookChildProcess(o,r),o}function nr(e,t,n){let r=ue(e,t,n),o=yt.spawnSync(r.command,r.args,r.options);return o.error=o.error||le.verifyENOENTSync(o.status,r),o}C.exports=St;C.exports.spawn=St;C.exports.sync=nr;C.exports._parse=ue;C.exports._enoent=le});var wt=c((Uo,gt)=>{"use strict";gt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Et=c((Do,_)=>{"use strict";var F=require("path"),bt=re(),vt=e=>{e=f({cwd:process.cwd(),path:process.env[bt()],execPath:process.execPath},e);let t,n=F.resolve(e.cwd),r=[];for(;t!==n;)r.push(F.join(n,"node_modules/.bin")),t=n,n=F.resolve(n,"..");let o=F.resolve(e.cwd,e.execPath,"..");return r.push(o),r.concat(e.path).join(F.delimiter)};_.exports=vt;_.exports.default=vt;_.exports.env=e=>{e=f({env:process.env},e);let t=f({},e.env),n=bt({env:t});return e.path=t[n],t[n]=_.exports(e),t}});var Tt=c((Ho,de)=>{"use strict";var It=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};de.exports=It;de.exports.default=It});var Ct=c((Xo,H)=>{"use strict";var rr=Tt(),D=new WeakMap,Pt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(D.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return rr(s,e),D.set(s,r),s};H.exports=Pt;H.exports.default=Pt;H.exports.callCount=e=>{if(!D.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return D.get(e)}});var Gt=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.SIGNALS=void 0;var or=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];X.SIGNALS=or});var fe=c(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.SIGRTMAX=G.getRealtimeSignals=void 0;var sr=function(){let e=Ot-At+1;return Array.from({length:e},ir)};G.getRealtimeSignals=sr;var ir=function(e,t){return{name:`SIGRT${t+1}`,number:At+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},At=34,Ot=64;G.SIGRTMAX=Ot});var qt=c(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.getSignals=void 0;var ar=require("os"),cr=Gt(),ur=fe(),lr=function(){let e=(0,ur.getRealtimeSignals)();return[...cr.SIGNALS,...e].map(dr)};K.getSignals=lr;var dr=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=ar.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:o,standard:s}}});var kt=c(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.signalsByNumber=A.signalsByName=void 0;var fr=require("os"),Rt=qt(),pr=fe(),mr=function(){return(0,Rt.getSignals)().reduce(hr,{})},hr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}){return v(f({},e),{[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}})},yr=mr();A.signalsByName=yr;var Sr=function(){let e=(0,Rt.getSignals)(),t=pr.SIGRTMAX+1,n=Array.from({length:t},(r,o)=>xr(o,e));return Object.assign({},...n)},xr=function(e,t){let n=gr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},gr=function(e,t){let n=t.find(({name:r})=>fr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},wr=Sr();A.signalsByNumber=wr});var Ft=c((Yo,Nt)=>{"use strict";var{signalsByName:br}=kt(),vr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",Er=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:p,parsed:{options:{timeout:y}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let h=o===void 0?void 0:br[o].description,S=r&&r.code,w=`Command ${vr({timedOut:u,timeout:y,errorCode:S,signal:o,signalDescription:h,exitCode:s,isCanceled:l})}: ${i}`,T=Object.prototype.toString.call(r)==="[object Error]",M=T?`${w}
${r.message}`:w,j=[M,t,e].filter(Boolean).join(`
`);return T?(r.originalMessage=r.message,r.message=j):r=new Error(j),r.shortMessage=M,r.command=i,r.escapedCommand=a,r.exitCode=s,r.signal=o,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=l,r.killed=p&&!u,r};Nt.exports=Er});var Bt=c((Qo,pe)=>{"use strict";var W=["stdin","stdout","stderr"],Ir=e=>W.some(t=>e[t]!==void 0),_t=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return W.map(r=>e[r]);if(Ir(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${W.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,W.length);return Array.from({length:n},(r,o)=>t[o])};pe.exports=_t;pe.exports.node=e=>{let t=_t(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var $t=c((Zo,z)=>{z.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&z.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&z.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Dt=c((Jo,R)=>{var d=global.process,E=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};E(d)?(Lt=require("assert"),O=$t(),Mt=/^win/i.test(d.platform),B=require("events"),typeof B!="function"&&(B=B.EventEmitter),d.__signal_exit_emitter__?m=d.__signal_exit_emitter__:(m=d.__signal_exit_emitter__=new B,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),R.exports=function(e,t){if(!!E(global.process)){Lt.equal(typeof e,"function","a callback must be provided for exit handler"),q===!1&&me();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&V()};return m.on(n,e),r}},V=function(){!q||!E(global.process)||(q=!1,O.forEach(function(t){try{d.removeListener(t,Y[t])}catch{}}),d.emit=Q,d.reallyExit=he,m.count-=1)},R.exports.unload=V,I=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},Y={},O.forEach(function(e){Y[e]=function(){if(!!E(global.process)){var n=d.listeners(e);n.length===m.count&&(V(),I("exit",null,e),I("afterexit",null,e),Mt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),R.exports.signals=function(){return O},q=!1,me=function(){q||!E(global.process)||(q=!0,m.count+=1,O=O.filter(function(t){try{return d.on(t,Y[t]),!0}catch{return!1}}),d.emit=Ut,d.reallyExit=jt)},R.exports.load=me,he=d.reallyExit,jt=function(t){!E(global.process)||(d.exitCode=t||0,I("exit",d.exitCode,null),I("afterexit",d.exitCode,null),he.call(d,d.exitCode))},Q=d.emit,Ut=function(t,n){if(t==="exit"&&E(global.process)){n!==void 0&&(d.exitCode=n);var r=Q.apply(this,arguments);return I("exit",d.exitCode,null),I("afterexit",d.exitCode,null),r}else return Q.apply(this,arguments)}):R.exports=function(){};var Lt,O,Mt,B,m,V,I,Y,q,me,he,jt,Q,Ut});var Xt=c((es,Ht)=>{"use strict";var Tr=require("os"),Pr=Dt(),Cr=1e3*5,Gr=(e,t="SIGTERM",n={})=>{let r=e(t);return Ar(e,t,n,r),r},Ar=(e,t,n,r)=>{if(!Or(t,n,r))return;let o=Rr(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Or=(e,{forceKillAfterTimeout:t},n)=>qr(e)&&t!==!1&&n,qr=e=>e===Tr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Rr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Cr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},kr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Nr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Fr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Nr(e,n,u)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},_r=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Br=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=Pr(()=>{e.kill()});return r.finally(()=>{o()})};Ht.exports={spawnedKill:Gr,spawnedCancel:kr,setupTimeout:Fr,validateTimeout:_r,setExitHandler:Br}});var Wt=c((ts,Kt)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Kt.exports=b});var Vt=c((ns,zt)=>{"use strict";var{PassThrough:$r}=require("stream");zt.exports=e=>{e=f({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new $r({objectMode:o});n&&s.setEncoding(n);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var Yt=c((rs,$)=>{"use strict";var{constants:Lr}=require("buffer"),Mr=require("stream"),{promisify:jr}=require("util"),Ur=Vt(),Dr=jr(Mr.pipeline),ye=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function Se(e,t){if(!e)throw new Error("Expected a stream");t=f({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Ur(t);return await new Promise((o,s)=>{let i=a=>{a&&r.getBufferedLength()<=Lr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),s(a)};(async()=>{try{await Dr(e,r),o()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new ye)})}),r.getBufferedValue()}$.exports=Se;$.exports.buffer=(e,t)=>Se(e,v(f({},t),{encoding:"buffer"}));$.exports.array=(e,t)=>Se(e,v(f({},t),{array:!0}));$.exports.MaxBufferError=ye});var Zt=c((os,Qt)=>{"use strict";var{PassThrough:Hr}=require("stream");Qt.exports=function(){var e=[],t=new Hr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var nn=c((ss,tn)=>{"use strict";var en=Wt(),Jt=Yt(),Xr=Zt(),Kr=(e,t)=>{t===void 0||e.stdin===void 0||(en(t)?t.pipe(e.stdin):e.stdin.end(t))},Wr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Xr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},xe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ge=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Jt(e,{encoding:t,maxBuffer:r}):Jt.buffer(e,{maxBuffer:r})},zr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let a=ge(e,{encoding:r,buffer:o,maxBuffer:s}),u=ge(t,{encoding:r,buffer:o,maxBuffer:s}),l=ge(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,l])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},xe(e,a),xe(t,u),xe(n,l)])}},Vr=({input:e})=>{if(en(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};tn.exports={handleInput:Kr,makeAllStream:Wr,getSpawnedResult:zr,validateInputSync:Vr}});var on=c((is,rn)=>{"use strict";var Yr=(async()=>{})().constructor.prototype,Qr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Yr,e)]),Zr=(e,t)=>{for(let[n,r]of Qr){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,v(f({},r),{value:o}))}return e},Jr=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});rn.exports={mergePromise:Zr,getSpawnedPromise:Jr}});var cn=c((as,an)=>{"use strict";var sn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],eo=/^[\w.-]+$/,to=/"/g,no=e=>typeof e!="string"||eo.test(e)?e:`"${e.replace(to,'\\"')}"`,ro=(e,t)=>sn(e,t).join(" "),oo=(e,t)=>sn(e,t).map(n=>no(n)).join(" "),so=/ +/g,io=e=>{let t=[];for(let n of e.trim().split(so)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};an.exports={joinCommand:ro,getEscapedCommand:oo,parseCommand:io}});var hn=c((cs,k)=>{"use strict";var ao=require("path"),we=require("child_process"),co=xt(),uo=wt(),lo=Et(),fo=Ct(),Z=Ft(),ln=Bt(),{spawnedKill:po,spawnedCancel:mo,setupTimeout:ho,validateTimeout:yo,setExitHandler:So}=Xt(),{handleInput:xo,getSpawnedResult:go,makeAllStream:wo,validateInputSync:bo}=nn(),{mergePromise:un,getSpawnedPromise:vo}=on(),{joinCommand:dn,parseCommand:fn,getEscapedCommand:pn}=cn(),Eo=1e3*1e3*100,Io=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?f(f({},process.env),e):e;return n?lo.env({env:s,cwd:r,execPath:o}):s},mn=(e,t,n={})=>{let r=co._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=f({maxBuffer:Eo,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=Io(n),n.stdio=ln(n),process.platform==="win32"&&ao.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},L=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?uo(t):t,J=(e,t,n)=>{let r=mn(e,t,n),o=dn(e,t),s=pn(e,t);yo(r.options);let i;try{i=we.spawn(r.file,r.args,r.options)}catch(S){let x=new we.ChildProcess,w=Promise.reject(Z({error:S,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return un(x,w)}let a=vo(i),u=ho(i,r.options,a),l=So(i,r.options,u),p={isCanceled:!1};i.kill=po.bind(null,i.kill.bind(i)),i.cancel=mo.bind(null,i,p);let h=fo(async()=>{let[{error:S,exitCode:x,signal:w,timedOut:T},M,j,bn]=await go(i,r.options,l),ve=L(r.options,M),Ee=L(r.options,j),Ie=L(r.options,bn);if(S||x!==0||w!==null){let Te=Z({error:S,exitCode:x,signal:w,stdout:ve,stderr:Ee,all:Ie,command:o,escapedCommand:s,parsed:r,timedOut:T,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return Te;throw Te}return{command:o,escapedCommand:s,exitCode:0,stdout:ve,stderr:Ee,all:Ie,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return xo(i,r.options.input),i.all=wo(i,r.options),un(i,h)};k.exports=J;k.exports.sync=(e,t,n)=>{let r=mn(e,t,n),o=dn(e,t),s=pn(e,t);bo(r.options);let i;try{i=we.spawnSync(r.file,r.args,r.options)}catch(l){throw Z({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=L(r.options,i.stdout,i.error),u=L(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Z({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};k.exports.command=(e,t)=>{let[n,...r]=fn(e);return J(n,r,t)};k.exports.commandSync=(e,t)=>{let[n,...r]=fn(e);return J.sync(n,r,t)};k.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=ln.node(n),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=n;return J(s,[...i,e,...Array.isArray(t)?t:[]],v(f({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Po={};An(Po,{default:()=>To});var g=require("@raycast/api");var xn=require("@raycast/api");var yn=qe(require("node:process"),1),Sn=qe(hn(),1);async function be(e){if(yn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,Sn.default)("osascript",["-e",e]);return t}async function gn(){return await be('tell application "Flow" to getPhase')}async function wn(){return(await(0,xn.getApplications)()).some(({bundleId:t})=>t==="design.yugen.Flow")}async function ee(){await be('tell application "Flow" to skip')}async function To(){let e=new g.Toast({title:"Starting next break",style:g.Toast.Style.Animated});if(e.show(),!await wn()){e.title="Flow not installed",e.message="Install it from: https://flowapp.info/download",e.style=g.Toast.Style.Failure;return}if(await gn()==="Flow"){await ee(),await(0,g.showHUD)("Break started");return}e.hide();let n={icon:{source:g.Icon.ExclamationMark,tintColor:g.Color.Yellow},title:"Currently in break phase",message:"Are you sure you want to skip your next focus and start a new break?"};await(0,g.confirmAlert)(n)&&(await ee(),await ee())}module.exports=On(Po);0&&(module.exports={});