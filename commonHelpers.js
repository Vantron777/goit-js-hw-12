import{S as m,i as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(s){const r="https://pixabay.com",i="/api/",n="?key=42408826-646f1c33dda85bc33c99aac2a",e=`&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,t=r+i+n+e;return fetch(t).then(o=>o.json()).catch(o=>{throw new Error(o.status)})}const c=document.querySelector(".gallery");function g(s){const r=s.hits.map(({webformatURL:n,largeImageURL:e,tags:t,likes:o,views:l,comments:u,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img class="gallery-img" src="${n}" alt="${t}" />
  <div class="image-description">
    <p><b>Likes: </b>${o}</p>
    <p><b>Views: </b>${l}</p>
    <p><b>Comments: </b>${u}</p>
    <p><b>Downloads: </b>${d}</p>
  </div>
  </a>
</li>`).join("");c.insertAdjacentHTML("beforeend",r),new m(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}const h=document.querySelector(".img-search-form"),a=document.querySelector(".loader");h.addEventListener("submit",y);function y(s){s.preventDefault(),c.innerHTML="",a.classList.remove("hidden");const r=s.target.elements.query.value.trim();f(r).then(i=>{i.totalHits===0||r===""?(a.classList.add("hidden"),p.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})):(a.classList.add("hidden"),g(i))}),s.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
