(function () {
  var de = document.documentElement
  function resetFontSize () {
    var w = de.getBoundingClientRect.width
    if (w > 640) {
      w = 640
    }
    de.style.fontSize = (w / 10) + 'px'
  }
  resetFontSize()
  window.addEventListener('resize', resetFontSize, false)
})()