let isSection=document.querySelectorAll(".scroll-section");void 0!==isSection&&null!=isSection&&(document.querySelectorAll(".scroll-section").forEach(function(a){a.closest(".page-section").setAttribute("data-section-name","scroll-section"),a.closest(".code-block").setAttribute("style","display: none;")}),document.querySelectorAll('body .page-section[data-section-name="scroll-section"]').forEach(function(b){let a=b,d=a.offsetTop-a.offsetHeight+300;a.offsetHeight;let e=0,f=getComputedStyle(a).borderRadius;function c(){(e=window.pageYOffset)>=d&&g()}function g(){var b=(e-d)/a.offsetHeight;a.style.width="calc(80% + 20% * "+b+")",a.style.borderRadius="calc("+f+" - "+f+" * "+b+")"}c(),window.addEventListener("scroll",function(a){c()})}));