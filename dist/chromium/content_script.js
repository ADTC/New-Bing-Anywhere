"use strict";(()=>{var f="New Bing Anywhere";var b=navigator.userAgent,S=b.includes("Macintosh"),z=b.includes("Firefox"),x=b.includes("Edg/");var w="configV1",p=async()=>({showGoogleButtonOnBing:!0,showBingButtonOnGoogle:!0,showGuideToGithub:!0,...(await chrome.storage.sync.get(w))[w]}),y=async e=>{let c=await p();await chrome.storage.sync.set({[w]:{...c,...e}})},v=e=>String(e).replace(/&/g,"&amp;").replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2f;");var u=async(e,c=[])=>await new Promise((a,o)=>{chrome.runtime.sendMessage({method:e,args:[...c]},r=>{!r||r.code!==200?o(r?.msg):a(r.data)})}),d=async e=>{try{return await u("openUrlInSameTab",[{url:e}])}catch{location.href=e}},m={attributes:!0,childList:!0,subtree:!0};var T=async e=>{if(!x){let a=window.document,o=a.createElement("script");o.src=chrome.runtime.getURL("inject.js"),o.onload=o.remove,a.documentElement.appendChild(o)}if(e(()=>{(async()=>{let{showGuideToGithub:a}=await p();if(!a)return;let o=e("#est_switch");e.trim(o.text())==="\u56FD\u5185\u7248\u56FD\u9645\u7248"&&setTimeout(()=>{let r=e('<a href="https://github.com/haozi/New-Bing-Anywhere/issues/8" title="\u67E5\u770B\u5982\u4F55\u6B63\u786E\u914D\u7F6E\u7F51\u7EDC\u4EE3\u7406" target="_blank" rel="noopener noreferrer nofollow">\u4F9D\u7136\u51FA\u73B0\u56FD\u5185\u7248/\u56FD\u9645\u7248\uFF1F</a>').css({color:"#E89ABE",textShadow:"0.5px 0.1px 1px #58070D",fontSize:"12px",fontWeight:"lighter"}).click(()=>{y({showGuideToGithub:!1})});e("#est_switch").append(r).css("width","auto")},2e3)})()}),!location.href.startsWith("https://www.bing.com/search?"))return;let c=await p();new MutationObserver((a,o)=>{if(!document.getElementById("sb_form")||(o.disconnect(),u("getNotification").then(t=>{if(!t)return;let s=e(document.body),n=e("<div/>").css({width:"100%",height:40,border:"1px solid #590727",background:"#58070d",position:"fixed",top:0,fontSize:"12px",lineHeight:"40px",textAlign:"center",zIndex:99999,whiteSpace:"nowrap",textOverflow:"ellipsis",display:"block !important"}),i=()=>{n.remove(),s.css("padding-top",null)},_=e(`<a style="color:#fff; background:url(${chrome.runtime.getURL("images/bing_32x32.png")}) no-repeat left 0; background-size: 12px; padding-left: 20px" href="${t.html_url}" target="_blank" rel="noopener noreferrer nofollow">${t.title}</a>`).on("click",i),I=e('<a href="#" style="background:#58070d; color:#fff; cursor:pointer;padding: 0 68px 0 18px;position: absolute;right:0" title="no reminder">\u2715</a>').on("click",B=>{B.preventDefault(),confirm("Are you sure never see this notice again?")&&u("hideNotification"),i()});n.append(_).append(I),s.append(n).css("padding-top",40)}),e(document.body).on("click","a.b_logoArea",t=>{e(t.currentTarget).attr("href","/").attr("target","_self")}),!c.showGoogleButtonOnBing))return;let r=e("#sb_form_q"),h=r.val(),l=e(`
      <a href="https://www.google.com/search?q=${encodeURIComponent(v(h))}" target="google" tabindex="10" rel="noopener noreferrer nofollow" title="search with Google">
        <img src="${chrome.runtime.getURL("images/google.png")}" alt="google" style="width: 100%;display: block;">
      </a>`).css({position:"absolute",left:0,top:0,width:"70px",height:"23px",display:"inline-block","z-index":999,transition:"all .3s",transform:"translate3d(835px, 13px, 0px)","will-change":"transform",cursor:"pointer"});e("#sb_form").css("position","relative").prepend(l),l.on("click",async t=>{let s=e(t.currentTarget);t.preventDefault();let n="";n||(n=r.val().trim());let i=`https://www.google.com/search?q=${encodeURIComponent(n)}`;s.attr("href",i),await d(i)}),location.search.includes("showconv=1")&&(l.css("display","none"),setTimeout(()=>{l.css("display","inline-block")},1200));let g=()=>{let t=e("#b-scopeListItem-conv"),s=t.hasClass("b_active");if(s){let n=0;t.offset().left?n=t.offset().left+t.width()+30:n=350,l.css({transform:`translate3d(${n}px, 15px, 0)`})}else l.css({transform:"translate3d(835px, 15px, 0)"});!s&&e(".b_searchboxForm").hasClass("as_rsform")&&l.css({transform:"translate3d(1155px, 15px, 0)"})};g(),new MutationObserver((t,s)=>{for(let n of t){let i=n.target;i&&(i.id==="b-scopeListItem-conv"&&g(),i.classList.contains("b_searchboxForm")&&g())}}).observe(document.getElementById("b_header"),m)}).observe(document,m)};var N=async e=>{(await p()).showBingButtonOnGoogle&&(location.href.startsWith("https://www.google.com/search?")||location.href.startsWith("https://www.google.com.hk/search?"))&&new MutationObserver((a,o)=>{let r='[action="/search"]';if(!e(r).length)return;o.disconnect();let h=e(r),l=h.find('[name="q"]'),g=h.find('button[type="submit"]'),t=e(`
      <a href="https://www.bing.com/search?q=Bing+AI&showconv=1" rel="noopener noreferrer nofollow" target="bing" title="search with New Bing">
        <img src="${chrome.runtime.getURL("images/bing-chat.svg")}" style="display: block; width: 24px;" alt="bing" />
      </a>`).css({width:"40px",display:"flex",position:"relative","z-index":999,cursor:"pointer","justify-content":"center",margin:"0 10px 0 -10px"});g.after(t),t.on("click",async s=>{let n=e(s.currentTarget);s.preventDefault();let i=`https://www.bing.com/search?q=${encodeURIComponent(l.val())}&showconv=1`;n.attr("href",i),await d(i)})}).observe(document,m)};(async e=>{let c=e(document.documentElement);if(c.find(`meta[name="${f}"]`).length)return;let a=e(`<meta name="${f}" />`);c.prepend(a),u("getEnv").then(o=>{a.attr("content",o.version)}),location.hostname==="www.bing.com"&&await T(e),location.hostname.startsWith("www.google.")&&await N(e)})(window.Zepto);})();
