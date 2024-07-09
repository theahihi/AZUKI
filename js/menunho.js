document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const verticalMenu = document.getElementById("verticalMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  hamburgerBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan rộng đến tài liệu
    if (verticalMenu.style.display === "block") {
      verticalMenu.style.display = "none";
      menuOverlay.style.display = "none";
    } else {
      verticalMenu.style.display = "block";
      menuOverlay.style.display = "block";
    }
  });

  // Ẩn menu và overlay khi nhấp vào bất kỳ khu vực nào khác ngoài menu và nút hamburger
  document.addEventListener("click", function (event) {
    if (
      !verticalMenu.contains(event.target) &&
      !hamburgerBtn.contains(event.target)
    ) {
      verticalMenu.style.display = "none";
      menuOverlay.style.display = "none";
    }
  });

  // Đảm bảo menu và overlay ẩn khi nhấp vào overlay
  menuOverlay.addEventListener("click", function () {
    verticalMenu.style.display = "none";
    menuOverlay.style.display = "none";
  });
});
