document.documentElement.dataset.ready = "true";

(function () {
  const AD_URL = "https://xn--9kqs58iq4c.com/";
  const AD_IMAGE = "https://free.picui.cn/free/2026/06/05/6a229370bf0c1.png";

  function installAd() {
    if (!document.getElementById("dageyun-ad-style")) {
      const style = document.createElement("style");
      style.id = "dageyun-ad-style";
      style.textContent = `
        .popup-overlay{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(0,0,0,.68);opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease}
        .popup-overlay.show{opacity:1;visibility:visible}
        .popup-content{position:relative;width:min(92vw,430px);padding:18px;border:1px solid rgba(255,255,255,.2);border-radius:18px;background:#111827;box-shadow:0 24px 70px rgba(0,0,0,.55);text-align:center}
        .popup-stack{display:grid;gap:14px}.popup-link{display:block;color:#fff;text-decoration:none}.popup-title{margin:0 0 10px;font:700 20px/1.3 system-ui,sans-serif}
        .popup-image{display:block;width:100%;height:auto;border-radius:12px}.popup-shop-wrap{display:flex;justify-content:center}.popup-shop-btn{display:inline-block;padding:11px 24px;border-radius:999px;background:#2563eb;color:#fff!important;font:700 16px/1.2 system-ui,sans-serif;text-decoration:none}
        .popup-close{position:absolute;top:-12px;right:-12px;width:36px;height:36px;border:0;border-radius:50%;background:#fff;color:#111827;font:700 25px/32px Arial,sans-serif;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.35)}
      `;
      document.head.appendChild(style);
    }

    let overlay = document.getElementById("popupOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "popupOverlay";
      overlay.className = "popup-overlay";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", "推荐广告");
      overlay.innerHTML = `
        <div class="popup-content">
          <div class="popup-stack">
            <a href="${AD_URL}" target="_blank" rel="sponsored noopener" class="popup-link">
              <p class="popup-title">Clash 机场推荐</p>
              <img src="${AD_IMAGE}" alt="机场地址" class="popup-image">
            </a>
            <div class="popup-shop-wrap"><a href="${AD_URL}" target="_blank" rel="sponsored noopener" class="popup-shop-btn">加速器下载</a></div>
          </div>
          <button class="popup-close" id="popupCloseBtn" type="button" aria-label="关闭广告">&times;</button>
        </div>`;
      document.body.appendChild(overlay);
    }

    let closeButton = document.getElementById("popupCloseBtn");
    if (!closeButton) {
      closeButton = overlay.querySelector("button");
      if (closeButton) {
        closeButton.id = "popupCloseBtn";
        closeButton.className = "popup-close";
      }
    }
    if (closeButton) closeButton.addEventListener("click", () => overlay.classList.remove("show"));
    window.setTimeout(() => overlay.classList.add("show"), 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installAd, { once: true });
  } else {
    installAd();
  }
})();
