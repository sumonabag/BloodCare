(function () {
  // 🔓 Signal that brand script ran successfully
  window.__BRAND_OK__ = true;
  // 🔓 Make the page visible
  document.documentElement.classList.remove('locked');
  const encoded = {
    "#f1": "RGV2ZWxvcGVkIHdpdGg=",
    "#f2": "YnkgU3Vtb25hIGFuZCBLcnV0aWth",
    "#f3": "U2F2aW5nIGxpdmVzLCBvbmUgZG9uYXRpb24gYXQgYSB0aW1lLg==",
    "#f4": "U3Vtb25hIEJhZw==",
    "#f5": "S3J1dGlrYSBTaGluZGU=",
  };

  function inject() {
    for (let id in encoded) {
      const el = document.querySelector(id);
      if (el) el.textContent = atob(encoded[id]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
