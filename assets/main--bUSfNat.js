(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function u(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(s){if(s.ep)return;s.ep=!0;const r=u(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{I(),R(),M(),P();const h=document.querySelector(".cursor-dot"),c=document.querySelector(".cursor-circle");let u=0,d=0,s=0,r=0;if(h&&c){let e=function(){const n=u-s,t=d-r;s+=n*.25,r+=t*.25,c.style.left=s+"px",c.style.top=r+"px",requestAnimationFrame(e)};var j=e;document.addEventListener("mousemove",n=>{u=n.clientX,d=n.clientY,h.style.left=u+"px",h.style.top=d+"px",N(u,d)}),e()}const p=document.querySelectorAll(".blob-wrapper");function N(e,n){p.forEach(t=>{const o=t.getBoundingClientRect(),i=o.left+o.width/2,m=o.top+o.height/2,a=e-i,y=n-m,f=Math.sqrt(a*a+y*y),v=400,S=100;let q=0,A=0;if(f<v){const T=(v-f)/v;q=-(a/f)*T*S,A=-(y/f)*T*S}t.style.transform=`translate(${q}px, ${A}px)`})}const l=document.getElementById("preview-img"),w=document.querySelectorAll(".work-item a");w.length>0&&w.forEach(e=>{e.addEventListener("mouseenter",()=>{if(window.innerWidth>768&&l){const n=e.getAttribute("data-img");n&&(l.src=n,l.style.opacity="1",l.style.transform="scale(1.05)")}}),e.addEventListener("mouseleave",()=>{window.innerWidth>768&&l&&(l.style.opacity="0",l.style.transform="scale(1)")}),e.addEventListener("click",n=>{if(window.innerWidth<=768){n.preventDefault();let t=e.parentNode.querySelector(".mobile-preview");if(!t){t=document.createElement("div"),t.className="mobile-preview";const o=document.createElement("img");o.src=e.getAttribute("data-img"),t.appendChild(o),e.parentNode.appendChild(t)}if(t.classList.contains("active"))t.classList.remove("active");else{document.querySelectorAll(".mobile-preview").forEach(i=>i.classList.remove("active")),t.classList.add("active");const o=t.querySelector("img");if(o){const i=o.cloneNode(!0);o.parentNode.replaceChild(i,o),i.addEventListener("click",m=>{m.stopPropagation();const a=e.getAttribute("data-link");k(i.src,a)})}}}else{const t=e.getAttribute("data-link");t&&window.open(t,"_blank")}})}),l&&l.addEventListener("click",()=>{var e;if(l.style.opacity!=="0"&&l.src){const n=(e=document.querySelector(".work-item a:hover"))==null?void 0:e.getAttribute("data-link");k(l.src,n)}});function k(e,n=null){const t=document.createElement("div");t.className="lightbox";const o=document.createElement("img");o.src=e;const i=document.createElement("button");if(i.className="lightbox-close",i.innerHTML="&times;",t.appendChild(o),t.appendChild(i),n){const a=document.createElement("a");a.href=n,a.target="_blank",a.className="lightbox-link-btn",a.textContent="VISIT PROJECT ↗",t.appendChild(a)}document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add("active")});const m=()=>{t.classList.remove("active"),setTimeout(()=>{t.remove()},300)};i.addEventListener("click",m),t.addEventListener("click",a=>{a.target===t&&m()})}const x=document.querySelector(".menu-trigger"),L=document.querySelector(".theme-toggle"),b=document.documentElement;if(x&&x.addEventListener("click",()=>document.body.classList.toggle("menu-open")),L){const e=localStorage.getItem("theme")||"light";b.setAttribute("data-theme",e),E(e),L.addEventListener("click",()=>{const t=b.getAttribute("data-theme")==="light"?"dark":"light";b.setAttribute("data-theme",t),localStorage.setItem("theme",t),E(t)})}function E(e){const n=document.querySelector(".icon-sun"),t=document.querySelector(".icon-moon"),o=document.querySelector(".logo-light"),i=document.querySelector(".logo-dark");e==="dark"?(t&&(t.style.display="none"),n&&(n.style.display="block"),o&&(o.style.display="none"),i&&(i.style.display="block")):(t&&(t.style.display="block"),n&&(n.style.display="none"),o&&(o.style.display="block"),i&&(i.style.display="none"))}const g=document.querySelector(".lang-switch"),O=document.querySelectorAll("[data-text-en]");function B(){const n=new URLSearchParams(window.location.search).get("lang");let t=localStorage.getItem("lang")||"en";n==="de"&&(t="de"),C(t,!1)}function C(e,n=!0){O.forEach(o=>{const i=o.getAttribute(`data-text-${e}`);i&&(o.textContent=i)}),g&&(g.textContent=e==="en"?"DE":"EN"),localStorage.setItem("lang",e);const t=new URL(window.location);if(e==="de"?t.searchParams.set("lang","de"):t.searchParams.delete("lang"),n?window.history.pushState({},"",t):window.history.replaceState({},"",t),window.location.pathname.includes("/de")){const o=window.location.pathname.replace("/de","").replace("//","/"),i=new URL(window.location);i.pathname=o,e==="de"&&i.searchParams.set("lang","de"),window.history.replaceState({},"",i)}}B(),g&&g.addEventListener("click",()=>{const n=(localStorage.getItem("lang")||"en")==="en"?"de":"en";C(n,!0)}),document.querySelectorAll("a, button, .work-item").forEach(e=>{e.addEventListener("mouseenter",()=>document.body.classList.add("hovering")),e.addEventListener("mouseleave",()=>document.body.classList.remove("hovering"))}),document.querySelectorAll('a[href^="index.html"], a[href^="work.html"], a[href^="about.html"], a[href^="project-detail.html"]').forEach(e=>{e.addEventListener("click",n=>{if(n.button===0&&!n.ctrlKey&&!n.metaKey){n.preventDefault();const t=e.getAttribute("href");document.body.classList.add("exiting"),e.classList.contains("menu-link")&&document.body.classList.add("exiting-menu"),setTimeout(()=>{window.location.href=t},500)}})});function M(){if(document.querySelector(".cursor-dot"))return;const e=document.createElement("div");e.className="cursor-dot";const n=document.createElement("div");n.className="cursor-circle",document.body.prepend(n),document.body.prepend(e)}function P(){if(document.querySelector(".site-header"))return;const e=document.createElement("header");e.className="site-header",document.body.classList.contains("page-detail")||window.location.pathname.includes("project-detail")?e.innerHTML=`
                <div class="logo">
                     <a href="index.html" data-text-en="BACK" data-text-de="ZURÜCK">BACK</a>
                </div>
            `:e.innerHTML=`
                <div class="logo">
                    <a href="index.html" aria-label="Back to Home">
                        <div class="logo-wrapper">
                            <svg class="logo-light" width="50" height="37" viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <path id="mo-path-dark" d="M50 160 C 40 90, 90 90, 100 140 C 110 180, 140 180, 150 140 C 160 80, 210 80, 210 130 C 210 185, 270 170, 260 120 C 250 80, 195 95, 205 135" />
                                    <mask id="hollow-mask-black">
                                        <use href="#mo-path-dark" stroke="white" stroke-width="28" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                        <use href="#mo-path-dark" stroke="black" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    </mask>
                                </defs>
                                <rect x="0" y="0" width="300" height="220" fill="#151515" mask="url(#hollow-mask-black)"/>
                            </svg>
                            <svg class="logo-dark" width="50" height="50" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                <path d="M50 180 C 40 100, 80 80, 90 140 C 100 190, 130 190, 140 140 C 150 80, 200 80, 190 140 C 180 190, 250 180, 240 130 C 230 80, 170 80, 180 130 C 185 155, 210 160, 225 145" 
                                      stroke="#F0F0F0" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </a>
                </div>
                
                <div class="header-controls">
                    <button class="lang-switch">EN</button>
                    <button class="theme-toggle" aria-label="Toggle Dark Mode">
                        <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </button>
                    <button class="menu-trigger" aria-label="Open Menu">
                        <div class="grid-dots">
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                        </div>
                        <div class="close-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </button>
                </div>
            `;const t=document.querySelector("main");t?t.before(e):document.body.prepend(e)}function I(){if(document.querySelector(".background-blobs"))return;const e=document.createElement("div");e.className="background-blobs",e.innerHTML=`
            <div class="blob-wrapper blob-wrapper-1"><div class="blob blob-inner-1"></div></div>
            <div class="blob-wrapper blob-wrapper-2"><div class="blob blob-inner-2"></div></div>
            <div class="blob-wrapper blob-wrapper-3"><div class="blob blob-inner-3"></div></div>
            <div class="blob-wrapper blob-wrapper-4"><div class="blob blob-inner-4"></div></div>
        `,document.body.prepend(e)}function R(){if(document.querySelector(".menu-overlay"))return;const e=document.createElement("div");e.className="menu-overlay",e.innerHTML=`
            <nav class="menu-nav">
                <ul>
                    <li><a href="index.html" class="menu-link" data-text-en="HOME" data-text-de="START">HOME</a><span class="menu-number">01</span></li>
                    <li><a href="work.html" class="menu-link" data-text-en="WORK" data-text-de="PROJEKTE">WORK</a><span class="menu-number">02</span></li>
                    <li><a href="about.html" class="menu-link" data-text-en="ABOUT" data-text-de="ÜBER MICH">ABOUT</a><span class="menu-number">03</span></li>
                    <li><a href="mailto:contact@moritzbednorz.com" class="menu-link" data-text-en="CONTACT" data-text-de="KONTAKT">CONTACT</a><span class="menu-number">04</span></li>
                </ul>
            </nav>
            <div class="menu-footer">
                <a href="https://www.linkedin.com/in/moritz-bednorz/" target="_blank">↗ LinkedIn</a>
                <a href="https://orcid.org/0000-0002-4981-5732" target="_blank">↗ ORCID</a>
            </div>
        `;const n=document.querySelector(".background-blobs");n?n.after(e):document.body.prepend(e)}});
