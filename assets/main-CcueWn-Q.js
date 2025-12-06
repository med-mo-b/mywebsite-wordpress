(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function v(){if(document.querySelector(".background-blobs"))return;const e=document.createElement("div");e.className="background-blobs",e.innerHTML=`
        <div class="blob-wrapper blob-wrapper-1"><div class="blob blob-inner-1"></div></div>
        <div class="blob-wrapper blob-wrapper-2"><div class="blob blob-inner-2"></div></div>
        <div class="blob-wrapper blob-wrapper-3"><div class="blob blob-inner-3"></div></div>
        <div class="blob-wrapper blob-wrapper-4"><div class="blob blob-inner-4"></div></div>
    `,document.body.prepend(e)}function w(){const e=document.querySelectorAll(".blob-wrapper");return function(n,r){e.forEach(t=>{const o=t.getBoundingClientRect(),s=o.left+o.width/2,d=o.top+o.height/2,a=n-s,l=r-d,c=Math.sqrt(a*a+l*l),u=400,m=100;let h=0,p=0;if(c<u){const g=(u-c)/u;h=-(a/c)*g*m,p=-(l/c)*g*m}t.style.transform=`translate(${h}px, ${p}px)`})}}function k(){if(window.matchMedia("(hover: none) and (pointer: coarse)").matches||document.querySelector(".cursor-dot"))return;const e=document.createElement("div");e.className="cursor-dot";const i=document.createElement("div");i.className="cursor-circle",document.body.prepend(i),document.body.prepend(e)}function x(e){if(window.matchMedia("(hover: none) and (pointer: coarse)").matches)return;const i=document.querySelector(".cursor-dot"),n=document.querySelector(".cursor-circle");let r=0,t=0,o=0,s=0;if(i&&n){let a=function(){const l=r-o,c=t-s;o+=l*.25,s+=c*.25,n.style.left=o+"px",n.style.top=s+"px",requestAnimationFrame(a)};var d=a;document.addEventListener("mousemove",l=>{r=l.clientX,t=l.clientY,i.style.left=r+"px",i.style.top=t+"px",e&&e(r,t)}),a()}}function L(){if(document.querySelector(".site-header"))return;const e=document.createElement("header");e.className="site-header",document.body.classList.contains("page-detail")||window.location.pathname.includes("project-detail")?e.innerHTML=`
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
        `;const n=document.querySelector("main");n?n.before(e):document.body.prepend(e)}function E(){if(document.querySelector(".menu-overlay"))return;const e=document.createElement("div");e.className="menu-overlay",e.innerHTML=`
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
    `;const i=document.querySelector(".background-blobs");i?i.after(e):document.body.prepend(e)}function C(){const e=document.querySelector(".menu-trigger");e&&e.addEventListener("click",()=>document.body.classList.toggle("menu-open"))}function S(){const e=document.querySelector(".theme-toggle"),i=document.documentElement;if(e){const n=localStorage.getItem("theme")||"light";i.setAttribute("data-theme",n),f(n),e.addEventListener("click",()=>{const t=i.getAttribute("data-theme")==="light"?"dark":"light";i.setAttribute("data-theme",t),localStorage.setItem("theme",t),f(t)})}}function f(e){const i=document.querySelector(".icon-sun"),n=document.querySelector(".icon-moon"),r=document.querySelector(".logo-light"),t=document.querySelector(".logo-dark");e==="dark"?(n&&(n.style.display="none"),i&&(i.style.display="block"),r&&(r.style.display="none"),t&&(t.style.display="block")):(n&&(n.style.display="block"),i&&(i.style.display="none"),r&&(r.style.display="block"),t&&(t.style.display="none"))}function q(){const e=document.querySelector(".lang-switch");document.querySelectorAll("[data-text-en]");const n=new URLSearchParams(window.location.search).get("lang");let r=localStorage.getItem("lang")||"en";n==="de"&&(r="de"),b(r,!1),e&&e.addEventListener("click",()=>{const o=(localStorage.getItem("lang")||"en")==="en"?"de":"en";b(o,!0)})}function b(e,i=!0){const n=document.querySelector(".lang-switch");document.querySelectorAll("[data-text-en]").forEach(o=>{const s=o.getAttribute(`data-text-${e}`);s&&(o.textContent=s)}),n&&(n.textContent=e==="en"?"DE":"EN"),localStorage.setItem("lang",e);const t=new URL(window.location);if(e==="de"?t.searchParams.set("lang","de"):t.searchParams.delete("lang"),i?window.history.pushState({},"",t):window.history.replaceState({},"",t),window.location.pathname.includes("/de")){const o=window.location.pathname.replace("/de","").replace("//","/"),s=new URL(window.location);s.pathname=o,e==="de"&&s.searchParams.set("lang","de"),window.history.replaceState({},"",s)}}function T(){document.querySelectorAll("a, button, .work-item").forEach(n=>{n.addEventListener("mouseenter",()=>document.body.classList.add("hovering")),n.addEventListener("mouseleave",()=>document.body.classList.remove("hovering"))}),document.querySelectorAll('a[href^="index.html"], a[href^="work.html"], a[href^="about.html"], a[href^="project-detail.html"]').forEach(n=>{n.addEventListener("click",r=>{if(r.button===0&&!r.ctrlKey&&!r.metaKey){r.preventDefault();const t=n.getAttribute("href");document.body.classList.add("exiting"),n.classList.contains("menu-link")&&document.body.classList.add("exiting-menu"),setTimeout(()=>{window.location.href=t},500)}})})}function y(e,i=null){const n=document.createElement("div");n.className="lightbox";const r=document.createElement("img");r.src=e;const t=document.createElement("button");if(t.className="lightbox-close",t.innerHTML="&times;",n.appendChild(r),n.appendChild(t),i){const s=document.createElement("a");s.href=i,s.target="_blank",s.className="lightbox-link-btn",s.textContent="VISIT PROJECT ↗",n.appendChild(s)}document.body.appendChild(n),requestAnimationFrame(()=>{n.classList.add("active")});const o=()=>{n.classList.remove("active"),setTimeout(()=>{n.remove()},300)};t.addEventListener("click",o),n.addEventListener("click",s=>{s.target===n&&o()})}function A(){const e=document.getElementById("preview-img"),i=document.querySelectorAll(".work-item a");i.length>0&&i.forEach(n=>{n.addEventListener("mouseenter",()=>{if(window.innerWidth>768&&e){const r=n.getAttribute("data-img");r&&(e.src=r,e.style.opacity="1",e.style.transform="scale(1.05)")}}),n.addEventListener("mouseleave",()=>{window.innerWidth>768&&e&&(e.style.opacity="0",e.style.transform="scale(1)")}),n.addEventListener("click",r=>{if(window.innerWidth<=768){r.preventDefault();let t=n.parentNode.querySelector(".mobile-preview");if(!t){t=document.createElement("div"),t.className="mobile-preview";const o=document.createElement("img");o.src=n.getAttribute("data-img"),t.appendChild(o),n.parentNode.appendChild(t)}if(t.classList.contains("active"))t.classList.remove("active");else{document.querySelectorAll(".mobile-preview").forEach(s=>s.classList.remove("active")),t.classList.add("active");const o=t.querySelector("img");if(o){const s=o.cloneNode(!0);o.parentNode.replaceChild(s,o),s.addEventListener("click",d=>{d.stopPropagation();const a=n.getAttribute("data-link");y(s.src,a)})}}}else{const t=n.getAttribute("data-link");t&&window.open(t,"_blank")}})}),e&&e.addEventListener("click",()=>{if(e.style.opacity!=="0"&&e.src){const n=document.querySelector(".work-item a:hover")?.getAttribute("data-link");y(e.src,n)}})}document.addEventListener("DOMContentLoaded",()=>{v(),E(),k(),L();const e=w();x(e),C(),S(),q(),T(),document.body.classList.contains("page-work")&&A()});
