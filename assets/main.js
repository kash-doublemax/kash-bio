/* Kash 講師網站 — 導覽列互動
   僅處理手機漢堡選單開合與無障礙 aria 狀態 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // 點選單連結後自動收合（手機）
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
})();

/* Newsletter 彈跳視窗
   觸發：到站 15 秒 或 桌機離站意圖（滑鼠移出視窗上緣）
   記憶：關閉/訂閱後 7 天內不再顯示 */
(function () {
  "use strict";

  var SUBSTACK_URL = "https://imkash.substack.com";
  var SUBSTACK_EMBED = "https://imkash.substack.com/embed";
  var STORAGE_KEY = "kash_nl_modal_seen";
  var SUPPRESS_DAYS = 7;
  var DELAY_MS = 15000;

  function recentlySeen() {
    try {
      var ts = window.localStorage.getItem(STORAGE_KEY);
      if (!ts) return false;
      var elapsed = Date.now() - parseInt(ts, 10);
      return elapsed < SUPPRESS_DAYS * 24 * 60 * 60 * 1000;
    } catch (e) {
      return false;
    }
  }

  function markSeen() {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (recentlySeen()) return;

    var shown = false;
    var timer = null;
    var lastFocused = null;

    var modal = document.createElement("div");
    modal.className = "nl-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "nl-modal-title");
    modal.innerHTML =
      '<div class="nl-modal__dialog">' +
        '<button class="nl-modal__close" type="button" aria-label="關閉">&times;</button>' +
        '<p class="nl-modal__eyebrow">電子報</p>' +
        '<h2 class="nl-modal__title" id="nl-modal-title">每週一則，把數據決策的思路帶著走</h2>' +
        '<p class="nl-modal__desc">訂閱電子報，收到 AI 導入、數據決策與數位轉型的實戰觀點——寫給要做決定的人，不是給看熱鬧的人。</p>' +
        '<div class="newsletter-embed">' +
          '<iframe title="訂閱陳誼峰 Kash 的 Substack 電子報" src="' + SUBSTACK_EMBED + '" ' +
          'width="480" style="border:1px solid #EEE;background:white" frameborder="0" scrolling="auto"></iframe>' +
        '</div>' +
        '<a class="btn btn-primary nl-modal__link" href="' + SUBSTACK_URL + '" target="_blank" rel="noopener">前往 Substack 訂閱 →</a>' +
        '<button class="nl-modal__dismiss" type="button">先不用，謝謝</button>' +
      '</div>';
    document.body.appendChild(modal);

    var closeBtn = modal.querySelector(".nl-modal__close");
    var dismissBtn = modal.querySelector(".nl-modal__dismiss");
    var dialog = modal.querySelector(".nl-modal__dialog");

    function open() {
      if (shown) return;
      shown = true;
      lastFocused = document.activeElement;
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
      markSeen();
      cleanupTriggers();
    }

    function close() {
      modal.classList.remove("is-open");
      document.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }

    closeBtn.addEventListener("click", close);
    dismissBtn.addEventListener("click", close);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) close();
    });

    // 觸發 1：到站 15 秒
    timer = window.setTimeout(open, DELAY_MS);

    // 觸發 2：桌機離站意圖（滑鼠移出視窗上緣）
    function onExitIntent(e) {
      if (!e.relatedTarget && e.clientY <= 0) open();
    }
    document.addEventListener("mouseout", onExitIntent);

    function cleanupTriggers() {
      if (timer) window.clearTimeout(timer);
      document.removeEventListener("mouseout", onExitIntent);
    }
  });
})();

/* 活動剪影：多張照片輪播 */
(function () {
  "use strict";

  function initCarousel(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll(".photo-carousel__slide"));
    var dots = Array.prototype.slice.call(root.querySelectorAll(".photo-carousel__dots button"));
    var prevBtn = root.querySelector(".photo-carousel__btn--prev");
    var nextBtn = root.querySelector(".photo-carousel__btn--next");
    if (!slides.length) return;

    var index = 0;
    var total = slides.length;

    function goTo(nextIndex) {
      index = (nextIndex + total) % total;
      slides.forEach(function (slide, i) {
        var active = i === index;
        slide.classList.toggle("is-active", active);
        slide.hidden = !active;
        slide.setAttribute("aria-label", (i + 1) + " / " + total);
      });
      dots.forEach(function (dot, i) {
        var active = i === index;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", active ? "true" : "false");
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        goTo(index - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        goTo(index + 1);
      });
    }
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goTo(i);
      });
    });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    });

    var touchStartX = 0;
    root.addEventListener("touchstart", function (e) {
      if (e.touches.length === 1) touchStartX = e.touches[0].clientX;
    }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (!e.changedTouches.length) return;
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) < 40) return;
      goTo(delta > 0 ? index - 1 : index + 1);
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var carousels = document.querySelectorAll("[data-photo-carousel]");
    carousels.forEach(initCarousel);
  });
})();
