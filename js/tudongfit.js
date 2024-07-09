//function setZoom() {
  const minWidth = 900; // Độ rộng tối thiểu mà bạn muốn trang web có
  const screenWidth = window.innerWidth;
  let zoomLevel = 1; // Mặc định là 100%

  if (screenWidth < minWidth) {
    zoomLevel = screenWidth / minWidth;
  }

  document.body.style.zoom = zoomLevel;
}

window.onload = setZoom;
window.onresize = setZoom;//
