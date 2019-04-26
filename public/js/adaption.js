(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; // 640位设计稿宽度
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  setTimeout(function () {
    document.getElementsByTagName('html')[0].style.display = 'block';
  }, 100)
  window.addEventListener("load", function () {
    window['FastClick'] && FastClick.attach(document.body);
  }, false);
})(document, window);