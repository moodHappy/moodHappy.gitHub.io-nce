// ==UserScript==
// @name         youtubeSmallLowerCase
// @namespace    http://tampermonkey.net/
// @version      2024-01-18
// @description  try to take over the world!
// @author       You
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=firefox.net.cn
// @grant        none
// ==/UserScript==
       
(function obs() {
  let c = document.querySelector("#ytp-caption-window-container");
  if (c == null) {
    setTimeout(obs, 100);
    return;
  }
  new MutationObserver(function(mutationList, observer) {
    for (const mutation of mutationList) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 3) {
          node.textContent = node.textContent.toLowerCase();
        }
      }
    }
  }).observe(c, { childList: true, subtree: true });
})();