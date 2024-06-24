document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("search-button")
    .addEventListener("click", function () {
      let query = document.getElementById("search-input").value.toLowerCase();

      // Kiểm tra từ khóa tìm kiếm
      if (query.includes("áo điều hoà")) {
        window.location.href =
          "https://theahihi.github.io/AZUKI/Quyen/ao_dieu_hoa.html"; // Đường dẫn đến trang áo điều hoà
      } else {
        alert("Không tìm thấy sản phẩm."); // Thông báo nếu không tìm thấy sản phẩm
      }
    });
});
