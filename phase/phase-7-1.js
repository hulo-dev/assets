var isGallery=document.querySelectorAll(".sqs-gallery-design-carousel")[0];void 0!==isGallery&&null!=isGallery&&document.querySelectorAll(".sqs-gallery-design-carousel").forEach(function(e){var i=e.querySelector(".summary-header-text");if("phase-image-changer"==(i.innerText||i.textContent)){e.classList.add("phase-image-changer-plugin");var t=e.closest(".sqs-block").getAttribute("id");e.insertAdjacentHTML("beforeend",'<div class="phase-image-changer-images-wrapper"></div>');var a=e.querySelector(".phase-image-changer-images-wrapper");e.querySelectorAll(".summary-item").forEach(function(i,s){var r=t+"-slide-"+s;i.setAttribute("data-slide-id",r),a.insertAdjacentHTML("beforeend",'<div class="image-slide" data-slide-img-id="'+r+'"><div class="image-slide-inner"><img src="'+i.querySelector(".summary-thumbnail img").getAttribute("data-src")+'"></div></div>'),i.addEventListener("click",function(t){console.log(i.getAttribute("data-slide-id")),i.classList.contains("current-active")||(e.querySelector(".current-active").classList.remove("current-active"),e.querySelector(".active-slide").classList.remove("active-slide"),i.classList.add("current-active"),e.querySelector('.image-slide[data-slide-img-id="'+i.getAttribute("data-slide-id")+'"]').classList.add("active-slide"))})}),e.querySelector(".summary-item").classList.add("current-active"),e.querySelector(".image-slide").classList.add("active-slide")}});