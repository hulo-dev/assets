!function(){let e=document.querySelectorAll(".user-items-list")[0];void 0!==e&&null!=e&&document.querySelectorAll(".user-items-list").forEach(function(e){let t=e.querySelector('.list-section-title a[href="https://ghostplugins.com"]'),s="";if(!t)return!1;if(s=t.innerText||t.textContent,console.log(t+" = thisHeadingElement"),console.log(s+" = thisHeadText"),"grove"==s){globalGhostGrove.showErrorBar&&(i=s,setTimeout(function(){document.getElementsByTagName("html")[0].classList.contains("squarespace-damask")&&document.querySelectorAll("section[class*='user-items-list-section'").forEach(function(e){let t=e.querySelector('.list-section-title a[href="https://ghostplugins.com"]'),s="";if(!t)return!1;if(s=t.innerText||t.textContent,i==s){let t=document.querySelector("link[href*='ghostplugins.dev/assets/helpers/swiper/swiper.css']"),o=document.querySelector("link[href*='ghostplugins.dev/assets/grove/grove.css']");console.log(t),console.log(o);let r={ghostLogoImg:'<div class="logo"><img src="https://images.squarespace-cdn.com/content/v1/5ba5e044b10f25cb908c506f/b9ee89ec-6dc8-4295-b138-3b68a5bd6d57/Ghost_Single_Dark.png?format=1500w"></div>',sucessInstall:"<p>Well done! Looks like the plugin was installed correctly.</p>",pluginNameInstalled:s,messageOfPlugin:"<p>Ghost Plugin is installed in this summary.</p>",pluginName:"<p>Plugin name: "+i+"</p>",steps:{codeInjectionHeader:t&&o?"<p>Code Injection Header was set up correctly for this plugin.</p><p>If something looks incorect, plaese check the block settings. </p>":t||o?t?o?"<p>Something went wrong. Please contact support.</p>":"<p>We haven't found plugin CSS file in the Code Injection Header. Please, add the following code to the Code Injection Header area: <xmp><link rel='stylesheet' href='https://www.ghostplugins.dev/assets/grove/grove.css'></xmp></p>":"<p>We haven't found swiper CSS file in the Code Injection Header. Please, add the following code to the Code Injection Header area:  <xmp><link rel='stylesheet' href='https://www.ghostplugins.dev/assets/helpers/swiper/swiper.css'></xmp></p>":"<p>We haven't found the CSS files in the Code Injection Header. <br> Please, add the following code to the Code Injection Header area: <xmp><link rel='stylesheet' href='https://www.ghostplugins.dev/assets/grove/grove.css'></xmp><xmp><link rel='stylesheet' href='https://www.ghostplugins.dev/assets/helpers/swiper/swiper.css'></xmp></p>"}};document.head.insertAdjacentHTML("beforeend","<style>.ghost-error-tracking.hide {display: none;}.ghost-error-tracking {position: absolute;top: 17px;left: 17px;background-color: #000;border-radius: 8px;color: #fff;padding: 25px 17px;z-index: 100; max-width: 100%;}.ghost-error-tracking .logo {max-width: 20px;margin-bottom: 15px;}.ghost-error-tracking .logo img {display: block;width: 100%;filter: invert(1) !important;}.ghost-error-tracking p {margin: 5px 0px 10px;line-height: 1;}.ghost-error-tracking-button{cursor: pointer; padding: 20px 20px;}.ghost-error-tracking-button .logo{margin: 0px;}</style>");let n=r.ghostLogoImg+r.messageOfPlugin+r.pluginName+r.steps.codeInjectionHeader;e.querySelector(".content").insertAdjacentHTML("beforebegin",'<div class="ghost-error-tracking ghost-error-tracking-button">'+r.ghostLogoImg+'</div><div class="ghost-error-tracking ghost-error-tracking-pop hide">'+n+"</div>"),e.querySelector(".ghost-error-tracking-button").addEventListener("click",function(t){e.querySelector(".ghost-error-tracking-pop").classList.remove("hide")})}})},5e3)),e.closest("section").classList.add("section-with-grove-ghost-plugin"),e.classList.add("grove-plugin"),e.classList.add("swiper");let t=e.querySelector(".user-items-list-item-container"),r=t.getAttribute("data-section-id");t.classList.add("swiper-wrapper","grove-wrapper"),console.log(r),e.classList.add("swiper-"+r);let n=0;e.querySelectorAll(".list-item").forEach(function(e,t){n++;let s=r+"-slide-"+t;e.setAttribute("data-slide-id",s),e.classList.add("swiper-slide"),e.querySelector(".list-item-content__title").insertAdjacentHTML("afterend",'<p class="subtitle">'+e.querySelector(".list-image").getAttribute("alt")+"</p>"),e.querySelector(".list-item-media").insertAdjacentHTML("beforebegin",'<div class="main-quote-place quote-font">'+e.querySelector(".list-item-content__description").innerHTML+"</div>"),e.insertAdjacentHTML("beforeend",'<div class="swiper-pagination-'+r+'"></div>')});var o=!1;globalGhostGrove.autoplay&&(o={delay:globalGhostGrove.autoplayDelay});new Swiper(".swiper-"+r,{loop:!0,autoplay:o,slidesPerView:1,spaceBetween:0,speed:600,effect:"fade",pagination:{el:".swiper-pagination-"+r,clickable:!0}})}var i})}();