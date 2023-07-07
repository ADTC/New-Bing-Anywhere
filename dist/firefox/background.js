"use strict";(()=>{var i="https://www.bing.com/";var E=["zh-CN","ru","ru-ru"],u="113",g="113.0.1774.57",l=["csp_report","font","image","main_frame","media","object","other","ping","script","stylesheet","sub_frame","webbundle","websocket","webtransport","xmlhttprequest"];var S="modifyHeaders",y="redirect",K="append",h="set",q=[{action:{type:S,requestHeaders:[{operation:h,header:"sec-ch-ua",value:`"Microsoft Edge";v="${u}", "Chromium";v="${u}", "Not-A.Brand";v="24"`},{operation:h,header:"sec-ch-ua-full-version",value:`"${g}"`},{operation:h,header:"sec-ch-ua-full-version-list",value:`"Microsoft Edge";v="${g}", "Chromium";v="113.0.5672.127", "Not-A.Brand";v="24.0.0.0"`},{operation:h,header:"sec-ms-gec-version",value:`1-${g}`},{operation:h,header:"User-Agent",value:`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${u}.0.0.0 Safari/537.36 Edg/${g}`}]},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:l}},{action:{type:y,redirect:{regexSubstitution:"\\1setlang=zh-Hans&mkt=zh-HK\\2"}},condition:{regexFilter:"(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=zh-CN|cc=cn|cc=zh-cn|cc=zh)(.*)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:l}},{action:{type:y,redirect:{regexSubstitution:"\\1setlang=ru&cc=clean&mkt=en-us\\2"}},condition:{regexFilter:"(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=ru-ru|mkt=ru|cc=ru)(.*)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:l}},{action:{type:y,redirect:{url:`${i}?setlang=zh-Hans&mkt=zh-HK`}},condition:{regexFilter:"\\/\\?(?:new-bing-anywhere|nba|run)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:l}},{priority:99,action:{type:y,redirect:{regexSubstitution:`${i}\\1`}},condition:{requestDomains:["cn.bing.com","bing.com"],regexFilter:"^http(?:s)?:\\/\\/(?:cn\\.)?bing\\.com\\/(.*)",resourceTypes:l}},{action:{type:S,responseHeaders:[{header:"Set-Cookie",operation:K,value:"SNRHOP=I=8; domain=.bing.com; path=/; secure; SameSite=None; HttpOnly;"}]},condition:{requestDomains:["bing.com","www.bing.com"]}}].map((e,o)=>({id:o+1,...e}));var N="2.1.2";var b={type:"git",url:"https://github.com/haozi/New-Bing-Anywhere"};var Y=()=>{try{return chrome.i18n.getUILanguage().toLowerCase()==="zh-cn"}catch{return!1}},W=()=>{try{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"}catch{return!1}};var B="configV1",A=async()=>({showGoogleButtonOnBing:!0,showBingButtonOnGoogle:!0,showGuideToGithub:!0,showChat:!0,showRelease:!0,triggerMode:"Always",conversationStyle:"Balanced","X-Forwarded-For":void 0,...(await chrome.storage.sync.get(B))[B]});var P=e=>{chrome.runtime.onMessage.addListener((o,t,n)=>((async()=>{try{let{method:r,args:s}=o,a=await e[r](...s);n({code:200,msg:"ok",data:a})}catch(r){let s=r??{};n({code:500,msg:s.stack??s.message??r})}})(),!0))};var de=(()=>{let e="v1";return{get:async o=>{o=`${e}:${o}`;let{data:t,maxAge:n,lastModified:r}=(await chrome.storage.local.get(o))?.[o]??{};return Date.now()-r>n*1e3?(chrome.storage.local.remove(o),null):t},set:async(o,t,n=1/0)=>{o=`${e}:${o}`,await chrome.storage.local.set({[o]:{data:t,lastModified:Date.now(),maxAge:n}})}}})();var v=navigator.userAgent,V=navigator.userAgentData,X=v.includes("Macintosh"),pe=v.includes("Firefox"),Q=v.includes("Edg/"),he=V?.brands.findIndex(e=>e.brand==="Brave")>-1,I=W(),we=Y(),x=!!globalThis.__NBA_isCanary,w=x?`0.${N}`:N,_=()=>{let e=v;return Q||(X?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${u}.0.0.0 Safari/537.36 Edg/${g}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${u}.0.0.0 Safari/537.36 Edg/${g}`),e},M=async e=>{let o=b.url;try{let t=await A(),r=`${o}/issues/new?title=&body=`,s="Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.Please confirm that you have read the #8 https://github.com/haozi/New-Bing-Anywhere/issues/8.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";I&&(s="\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BF7\u786E\u8BA4\u5DF2\u7ECF\u9605\u8BFB\u4E86FAQ(https://github.com/haozi/New-Bing-Anywhere/issues/8)\uFF0C\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0C\u63CF\u8FF0\u4E0D\u6E05\u7684\u95EE\u9898\u4F1A\u88AB\u5173\u95ED\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A");let a=` 



<!--  ${s} -->
<pre>
`+Object.entries({Version:`${w}${x?" (Canary)":""} `,UA:navigator.userAgent,Lang:chrome.i18n.getUILanguage(),AcceptLangs:(await chrome.i18n.getAcceptLanguages()).join(", "),config:JSON.stringify(t),...e}).map(([f,p])=>p?`${f}: ${p}`:"").join(`
`)+"</pre>";return r+=encodeURIComponent(a.slice(0,2e3)),r}catch{return o}},m=(e="",o)=>{try{return new URL(e,o)}catch{return{searchParams:{get:()=>null}}}},k=e=>{try{return new URLSearchParams(e)}catch{return{get:()=>null}}},c=async e=>{let o=await chrome.tabs.query({currentWindow:!0}),t=m(e),n=o.find(r=>r.url?.startsWith(t.origin));return n==null?n=await chrome.tabs.create({url:e}):await Promise.all([chrome.tabs.move(n.id,{index:o.length-1}),n.url!==e&&chrome.tabs.update(n.id,{url:e}),chrome.tabs.update(n.id,{active:!0,url:n.url!==e?e:void 0})].filter(Boolean)),n};var R={openChat:{title:"\u{1F4AC} New Bing",contexts:["action"],onclick:e=>{c("https://www.bing.com/search?q=Bing+AI&showconv=1")}},openImageCreate:{title:"\u{1F5BC}\uFE0F New Bing Image Creator",contexts:["action"],onclick:e=>{c("https://www.bing.com/create")}},likeIt:{title:"\u2764\uFE0F Like it",contexts:["action"],onclick:()=>{c("https://chrome.google.com/webstore/detail/new-bing-anywhere-bing-ch/hceobhjokpdbogjkplmfjeomkeckkngi/reviews")}},reportIssues:{title:I?"\u{1F41B} \u53CD\u9988\u5EFA\u8BAE":"\u{1F41B} Report issues",contexts:["action"],onclick:async e=>{let o=await M();c(o)}}};var D=()=>{chrome.contextMenus.removeAll(()=>{for(let[e,o]of Object.entries(R))chrome.contextMenus.create({id:e,title:o.title,contexts:o.contexts})}),chrome.contextMenus.onClicked.addListener((e,o)=>{let{menuItemId:t}=e,n=R[t];n?.onclick&&n.onclick(e,o)})};var d="notification",C="notification:hide",J=async()=>{let e;try{e=await fetch("https://api.github.com/repos/haozi/New-Bing-Anywhere/issues/24").then(async o=>await o.json())}catch{}return e},H=async()=>{let{[d]:e}=await chrome.storage.local.get(d);if(!e||e.lastModify&&Date.now()-e.lastModify>36e5){await chrome.storage.local.remove(d);let n=await J();n&&await chrome.storage.local.set({[d]:{data:n,lastModify:Date.now()}})}let{[C]:o,[d]:t}=await chrome.storage.local.get([C,d]);return!t?.data||!(t.data.title&&t.data.state==="open")||o===1&&t.data.title===e.data?.title?null:(await chrome.storage.local.remove(C),t.data)},U=async()=>{chrome.storage.local.set({[C]:1})};var Z=async()=>({version:w}),ee=async({url:e}={})=>{let o=await chrome.tabs.query({currentWindow:!0}),t=m(e),n=o.find(j=>j.url?.startsWith(t.origin));n==null?n=await chrome.tabs.create({url:e}):n.id!=null&&await Promise.all([chrome.tabs.move(n.id,{index:o.length-1}),chrome.tabs.update(n.id,{active:!0})]);let r=e,s="",a="",f=t.hostname==="www.google.com",p=t.hostname==="www.bing.com";f?(s=t.searchParams.get("q")??"",a=m(n.url).searchParams.get("q")??"",m(n.url).searchParams.get("q")):p&&(s=t.searchParams.get("q")??"",a=m(n.url).searchParams.get("q")??""),s=s.trim(),a=a.trim(),!(s&&s===a)&&(f?r=`${t.origin}${t.pathname}?q=${encodeURIComponent(s)}`:p&&(r=`${t.origin}${t.pathname}?q=${encodeURIComponent(s)}`),await chrome.tabs.update(n.id,{url:r}))},O={getEnv:Z,openUrlInSameTab:ee,getNotification:H,hideNotification:U};var T=async(e,o={})=>await chrome.cookies.set({domain:o.domain,storeId:o.storeId,path:o.path,httpOnly:o.httpOnly,secure:o.secure,sameSite:o.sameSite,expirationDate:o.expirationDate,...e});var z=()=>{D(),P(O),chrome.runtime.onInstalled.addListener(async e=>{let o=await A(),t=b.url;if(x){c(`${t}/tree/canary`);return}e.reason==="install"?c(t):e.reason==="update"&&o.showRelease&&c(`${t}/releases/tag/v${w}`)}),chrome.webRequest.onBeforeRequest.addListener(()=>{chrome.cookies.get({name:"_EDGE_S",url:i},e=>{let o=e?.value;if(!o)return;let t=k(o),n=t.get("mkt")?.toLowerCase()??"";E.map(r=>r.toLowerCase()).includes(n)&&(n==="zh-cn"?(t.set("mkt","zh-HK"),t.set("ui","zh-hans")):t.delete("mkt"),T({url:i,name:e.name,value:t.toString()},e))}),chrome.cookies.get({name:"_RwBf",url:i},e=>{let o=e?.value;if(!o){T({url:i,name:"_RwBf",value:"wls=2",domain:".bing.com",httpOnly:!0});return}let t=k(o),n=t.get("wls");n!=="2"&&n!==""&&t.set("wls","2"),T({url:i,name:"_RwBf",domain:".bing.com",httpOnly:!0,value:t.toString()},e)})},{urls:[i+"*"],types:["main_frame"]})};var oe={"User-Agent":_()},te="modifyHeaders",ne="set",$=[{priority:2001,action:{type:te,requestHeaders:Object.entries(oe).map(([e,o])=>({operation:ne,header:e,value:o}))},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:l}}].filter(Boolean).map((e,o)=>({id:o+1+2e3,...e}));var G=chrome,F=[...q,...$],re=F.filter(e=>e.action?.type==="modifyHeaders"&&e.action?.requestHeaders?.length),se=F.filter(e=>e.action?.type==="modifyHeaders"&&e.action?.responseHeaders?.length);z();G.webRequest.onBeforeSendHeaders.addListener(e=>{if(!e.requestHeaders)return;let o=e.requestHeaders;for(let t of re){let n=new URL(e.url);if(!t.condition||(t.condition?.requestDomains??[]).includes(n.hostname)||new RegExp(t.condition?.regexFilter??"",t.condition?.isUrlFilterCaseSensitive?"i":void 0).test(n.href)||n.href.includes(t.condition?.urlFilter??""))for(let r of t.action.requestHeaders??[])switch(r.operation){case"set":if(!e.requestHeaders.find(s=>s.name===r.header))o.push({name:r.header,value:r.value});else for(let s of e.requestHeaders)s.name.toLowerCase()===r.header.toLowerCase()&&(s.value=r.value);break;case"append":o.push({name:r.header,value:r.value});break;case"remove":{let s=o.findIndex(a=>a.name.toLowerCase()===r.header.toLowerCase());s>-1&&o.splice(s,1)}break;default:}}return{requestHeaders:o}},{urls:["<all_urls>"]},["blocking","requestHeaders"]);G.webRequest.onHeadersReceived.addListener(e=>{if(!e.responseHeaders)return;let o=e.responseHeaders;for(let t of se)if(new RegExp(t.condition?.regexFilter??"",t.condition?.isUrlFilterCaseSensitive?"i":void 0).test(e.url))for(let n of t.action.responseHeaders??[])switch(n.operation){case"set":for(let r of e.responseHeaders)r.name.toLowerCase()===n.header.toLowerCase()?r.value=n.value:o.push({name:n.header,value:n.value});break;case"append":o.push({name:n.header,value:n.value});break;default:}return{responseHeaders:o}},{urls:["<all_urls>"]},["blocking","responseHeaders"]);})();
