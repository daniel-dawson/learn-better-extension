const ua = "UA-160250616-2";
(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);
ga("create", "UA-160250616-2", "auto");
ga("set", "checkProtocolTask", null);
ga("send", "pageview");
chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
  if (req.action === "extensionLoaded") {
    ga("send", "pageview");
    console.log(ga);
    console.log("IT WORKED");
  }
});
