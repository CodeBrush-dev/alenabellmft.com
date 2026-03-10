// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.alenabellmft.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.alenabellmft.com/","title_tag":"Marriage Therapist Oakland & Telehealth Therapy | Alena Bell MFT","meta_description":"Marriage and family therapist in Oakland offering complex trauma therapy, psychodynamic care, and telehealth therapy services across California."},{"page_url":"https://www.alenabellmft.com/about-1","title_tag":"Psychodynamic Therapy Services & Care | Alena Bell MFT","meta_description":"Licensed psychodynamic therapist in Oakland, California offering complex trauma therapy and mental health counseling with a warm, relational approach."},{"page_url":"https://www.alenabellmft.com/services","title_tag":"Individual & Couples Counseling Oakland | Alena Bell MFT","meta_description":"Individual, couples, youth, and family therapy services in Oakland, plus telehealth therapy across California for anxiety, trauma, and relationship stress."},{"page_url":"https://www.alenabellmft.com/contact","title_tag":"Mental Health Counseling Oakland Contact | Alena Bell MFT","meta_description":"Contact an Oakland-based marriage and family therapist for mental health counseling, youth and family therapy, and secure telehealth sessions across California."}],"keywords":["Marriage Therapist Oakland","Family Therapy Services","Telehealth Therapy California","Complex Trauma Therapy","Individual and Couples Counseling Oakland","Interpersonal Relationships Therapy","Anxiety Therapy California","Youth Therapy Oakland","Psychodynamic Therapy Services","Mental Health Counseling Oakland"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.alenabellmft.com/#localbusiness",
  "name": "Alena Bell, MFT",
  "image": "https://static.wixstatic.com/media/f4a2eb10b3154a8a8c1bcda2e37e94c0.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f4a2eb10b3154a8a8c1bcda2e37e94c0.jpg",
  "url": "https://www.alenabellmft.com/",
  "description": "Licensed Marriage and Family Therapist based in Oakland, California, providing in-person and telehealth psychotherapy services to individuals, couples, families, and young adults across California.",
  "telephone": "+14157356009",
  "email": "mailto:alenabellmft@gmail.com",
  "priceRange": "$180-250",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Oakland",
    "addressRegion": "CA",
    "postalCode": "94612",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "California"
    }
  ],
  "sameAs": [],
  "founder": {
    "@type": "Person",
    "name": "Alena Bell",
    "jobTitle": "Licensed Marriage and Family Therapist"
  },
  "knowsAbout": [
    "complex trauma",
    "anxiety",
    "mood disorders",
    "emotional dysregulation",
    "relationship stress",
    "interpersonal functioning",
    "psychodynamic therapy",
    "trauma-informed therapy",
    "attachment-based therapy",
    "mindfulness-based therapy",
    "individual therapy",
    "couples therapy",
    "family therapy",
    "young adult therapy",
    "telehealth therapy"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Individual Therapy",
        "description": "Collaborative process of self-discovery and personal growth, focusing on issues such as anxiety, grief, depression, trauma, addiction, relationships, stress management, identity, race-based trauma, and major life transitions."
      },
      {
        "@type": "Offer",
        "name": "Couples Therapy",
        "description": "Therapy for couples to improve communication, increase emotional and physical intimacy, and navigate the complexities of modern romantic partnerships using trauma-informed and sex therapy approaches."
      },
      {
        "@type": "Offer",
        "name": "Family Therapy",
        "description": "Therapy sessions designed to help families improve healthy communication and develop more positive approaches to life’s complex and challenging circumstances, including blended family dynamics."
      },
      {
        "@type": "Offer",
        "name": "Young Adult Therapy (17-24)",
        "description": "Therapy for teens and young adults to support them in navigating stress, social relationships, and life transitions, with experience in school counseling and community mental health settings."
      },
      {
        "@type": "Offer",
        "name": "Telehealth Therapy",
        "description": "Secure video or telephone therapy sessions for clients residing in California, typically 50 minutes for individuals and 80 minutes for couples."
      },
      {
        "@type": "Offer",
        "name": "Group Therapy",
        "description": "Group psychotherapy services designed to support individuals in their healing process and personal growth."
      },
      {
        "@type": "Offer",
        "name": "Consultation and Trainings",
        "description": "Professional consultation and training services related to psychotherapy and mental health practice."
      }
    ]
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Psychotherapy Sessions",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "180-250",
        "priceCurrency": "USD"
      }
    }
  ],
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "California"
  },
  "hasFAQPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I schedule a telehealth session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scheduling a telehealth session is simple. You can send an appointment request through the website or contact via email. You will be provided with all the necessary details to join your session online."
        }
      },
      {
        "@type": "Question",
        "name": "What is telehealth therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Telehealth therapy allows you to receive professional mental health support from the comfort of your home. Secure video conferencing is used to conduct sessions, ensuring your privacy and convenience."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
