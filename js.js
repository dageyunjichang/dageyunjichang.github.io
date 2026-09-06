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
        </div>`;
      document.body.appendChild(overlay);
    }
    window.setTimeout(() => overlay.classList.add("show"), 500);
  }

  function installExtraContent() {
    if (document.getElementById("dageyun-service-guide")) return;

    const style = document.createElement("style");
    style.id = "dageyun-extra-style";
    style.textContent = `
      .dy-guide{padding:64px 20px;background:#0b1220;color:#e5e7eb;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}
      .dy-guide-inner{width:min(1120px,100%);margin:auto}.dy-guide h2{text-align:center;margin:0 0 12px;color:#fff;font-size:clamp(26px,4vw,38px)}
      .dy-guide-lead{max-width:760px;margin:0 auto 34px;text-align:center;color:#aebbd0;line-height:1.8}.dy-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
      .dy-card{padding:24px;border:1px solid #263550;border-radius:16px;background:#111c30;box-shadow:0 12px 35px rgba(0,0,0,.18)}.dy-card h3{margin:0 0 10px;color:#7db2ff;font-size:19px}.dy-card p{margin:0;color:#c3cddd;line-height:1.75}
      .dy-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:38px}.dy-step{display:flex;gap:14px;align-items:flex-start}.dy-num{flex:0 0 38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#2563eb;color:#fff;font-weight:800}.dy-step strong{display:block;margin-bottom:5px;color:#fff}.dy-step span{color:#aebbd0;line-height:1.6}
      .dy-faq{margin-top:40px}.dy-faq h3{text-align:center;color:#fff;font-size:24px}.dy-faq details{max-width:820px;margin:12px auto;padding:16px 18px;border:1px solid #263550;border-radius:12px;background:#111c30}.dy-faq summary{cursor:pointer;color:#fff;font-weight:700}.dy-faq p{margin:10px 0 0;color:#b8c4d8;line-height:1.7}
      @media(max-width:760px){.dy-grid,.dy-steps{grid-template-columns:1fr}.dy-guide{padding:48px 16px}}
    `;
    document.head.appendChild(style);

    const section = document.createElement("section");
    section.id = "dageyun-service-guide";
    section.className = "dy-guide";
    section.innerHTML = `
      <div class="dy-guide-inner">
        <h2>稳定连接，从每一个使用场景出发</h2>
        <p class="dy-guide-lead">覆盖日常浏览、远程协作、影音娱乐与多设备连接需求。根据所在地区和网络状况选择合适节点，即可获得更顺畅的访问体验。</p>
        <div class="dy-grid">
          <article class="dy-card"><h3>智能线路选择</h3><p>按延迟、负载和可用状态选择线路，减少高峰期拥堵，让网页、会议与文件传输保持稳定。</p></article>
          <article class="dy-card"><h3>多设备兼容</h3><p>适配 Windows、macOS、Android、iOS 与常见路由环境，一份配置即可满足个人多终端使用。</p></article>
          <article class="dy-card"><h3>连接安全保护</h3><p>通过加密隧道保护传输过程，并提供清晰的使用指引和常见故障排查建议。</p></article>
          <article class="dy-card"><h3>影音与内容访问</h3><p>针对视频播放、音乐和海外内容访问场景优化线路，建议优先选择距离较近且负载较低的节点。</p></article>
          <article class="dy-card"><h3>学习与远程办公</h3><p>兼顾在线课程、代码仓库、云端文档和视频会议等场景，帮助降低连接中断带来的影响。</p></article>
          <article class="dy-card"><h3>新手友好配置</h3><p>从下载安装到导入配置均提供简明步骤。遇到连接问题时，可依次检查网络、节点与客户端版本。</p></article>
        </div>
        <div class="dy-steps">
          <div class="dy-step"><b class="dy-num">1</b><div><strong>选择对应客户端</strong><span>根据设备系统下载适用版本，并完成基础安装。</span></div></div>
          <div class="dy-step"><b class="dy-num">2</b><div><strong>导入连接配置</strong><span>复制订阅信息，在客户端中更新并查看可用线路。</span></div></div>
          <div class="dy-step"><b class="dy-num">3</b><div><strong>测速后开始使用</strong><span>选择延迟较低的节点连接，网络变化时可切换线路。</span></div></div>
        </div>
        <div class="dy-faq">
          <h3>使用问题速查</h3>
          <details><summary>连接后速度不理想怎么办？</summary><p>先切换不同地区或较低负载的节点，再检查本地 Wi-Fi、后台下载任务与客户端是否为最新版本。</p></details>
          <details><summary>更换设备后如何继续使用？</summary><p>在新设备安装对应客户端并重新导入配置即可。请妥善保管个人配置，不要公开分享。</p></details>
          <details><summary>为什么需要定期更新节点？</summary><p>线路状态会随网络环境变化。定期更新能够获取当前可用节点及最新连接参数。</p></details>
        </div>
      </div>`;
    const footer = document.querySelector("footer");
    if (footer) footer.parentNode.insertBefore(section, footer);
    else document.body.appendChild(section);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      installExtraContent();
      installAd();
    }, { once: true });
  } else {
    installExtraContent();
    installAd();
  }
})();
