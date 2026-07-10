(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");
  var toTop = document.getElementById("to-top");
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll("a")) : [];

  var currentPage = location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("is-active");
    }
  });

  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navLinks.forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    if (header) {
      header.classList.toggle("is-scrolled", scrollY > 8);
    }

    if (toTop) {
      toTop.classList.toggle("is-visible", scrollY > 480);
    }
  }

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var scrollCue = document.getElementById("scroll-cue");
  var hero = document.getElementById("hero");
  if (scrollCue && hero) {
    scrollCue.addEventListener("click", function () {
      window.scrollTo({ top: hero.offsetHeight, behavior: "smooth" });
    });
  }

  var revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealTargets.length) {
    // Only hide-then-animate once we know JS can actually reveal the
    // content again; otherwise every .reveal element stays visible
    // (see the default CSS rule for .reveal).
    document.body.classList.add("reveal-armed");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (target) {
      observer.observe(target);
    });
  }

  var copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.textContent = String(new Date().getFullYear());
  }

  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Honeypot: if this hidden field got filled in, silently drop it.
      if (contactForm.elements.botcheck && contactForm.elements.botcheck.checked) {
        return;
      }

      var submitButton = contactForm.querySelector(".form-submit");
      submitButton.disabled = true;
      formStatus.textContent = "送信中です…";
      formStatus.className = "form-status";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      })
        .then(function (response) {
          return response.json().then(function (data) {
            return { ok: response.ok && data.success, data: data };
          });
        })
        .then(function (result) {
          if (result.ok) {
            formStatus.textContent = "送信しました。お問い合わせいただきありがとうございます。";
            formStatus.className = "form-status is-success";
            contactForm.reset();
          } else {
            formStatus.textContent = "送信に失敗しました。お手数ですが、下記のメールアドレスから直接ご連絡ください。";
            formStatus.className = "form-status is-error";
          }
        })
        .catch(function () {
          formStatus.textContent = "送信に失敗しました。お手数ですが、下記のメールアドレスから直接ご連絡ください。";
          formStatus.className = "form-status is-error";
        })
        .finally(function () {
          submitButton.disabled = false;
        });
    });
  }
})();
