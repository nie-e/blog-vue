/**
 * 图片懒加载
 */
function getImgs(el) {
  const imgs = Array.from(document.querySelectorAll(el))
  imgs.forEach(v => io.observe(v))
}

function loadImg(el) {
  if (!el.src) {
    el.src = el.dataset.src
  }
}

const io = new IntersectionObserver(entries => {
  entries.forEach(item => {
    const el = item.target
    const intersectionRatio = item.intersectionRatio
    if (intersectionRatio > 0 && intersectionRatio <= 1) {
      loadImg(el)
    }
    el.onload = () => {
      el.classList.add('loaded')
      el.previousElementSibling.classList.add('hidden');  // 图片加载后隐藏缩略图
      io.unobserve(el)
    }
    el.onerror = () => io.unobserve(el)
  })
});

export default getImgs

/**
 * 首页轮播图


!function (a, b) {
  a.DeviceOrientationEvent && a.addEventListener("deviceorientation",
    function (a) {
      a.beta && a.gamma && (b.onmousemove = null);
      var d = (a.beta - 20) / 3,
        e = -a.gamma / 3;
      d = Math.min(d, 20),
        d = Math.max(d, -20),
        e = Math.min(e, 20),
        e = Math.max(e, -20),
        c(d, e)
    },
    !1);
  var c = function (a, b) {
    test.style.cssText = "-webkit-transform:rotateX(" + a + "deg) rotateY(" + b + "deg);-ms-transform:rotateX(" + a + "deg) rotateY(" + b + "deg);transform:rotateX(" + a + "deg) rotateY(" + b + "deg);"
  },
    d = b.documentElement;
  BODY = b.body,
    b.onmousemove = function (a) {
      var b = a.clientX - BODY.offsetWidth / 2;
      b /= 100;
      var e = a.clientY - d.clientHeight / 2;
      e /= 100,
        e = -e,
        c(e, b)
    };
  var e = [0, 700, 2e3, 3100, 3800];
  setTimeout(function () {
    a.onscroll = function () {
      for (var a, b = 0; b < e.length; b++) if (a = e[b], a > Math.max(d.scrollTop, BODY.scrollTop) + d.clientHeight / 2) return d.setAttribute("step", b)
    },
      a.onscroll()
  },
    1e3)
} (this, document); 
*/