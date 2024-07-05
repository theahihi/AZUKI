document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const currentImage = document.getElementById("currentImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
      currentIndex = index;
      updateCurrentImage();
    });
  });

  prevBtn.addEventListener("click", function () {
    currentIndex =
      currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
    updateCurrentImage();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex =
      currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
    updateCurrentImage();
  });

  function updateCurrentImage() {
    const largeImageURL = thumbnails[currentIndex].getAttribute("data-large");
    currentImage.setAttribute("src", largeImageURL);

    thumbnails.forEach((thumb) => thumb.classList.add("inactive"));
    currentImage.classList.add("inactive");

    thumbnails.forEach((thumb) => thumb.classList.add("inactive"));

    thumbnails[currentIndex].classList.remove("inactive");
    currentImage.classList.remove("inactive");
  }

  updateCurrentImage();
});
document.querySelectorAll(".size").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".size").forEach((color) => {
      color.classList.remove("active");
    });
    this.classList.add("active");
  });
});

document.querySelectorAll(".color").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".color").forEach((color) => {
      color.classList.remove("active");
    });
    this.classList.add("active");
  });
});
function increaseQuantity() {
  var input = document.getElementById("quantity");
  var value = parseInt(input.value, 10);
  input.value = value + 1 <= 1000 ? value + 1 : 10; // Max limit is 10
}

function decreaseQuantity() {
  var input = document.getElementById("quantity");
  var value = parseInt(input.value, 10);
  input.value = value - 1 >= 1 ? value - 1 : 1; // Min limit is 1
}
function chuyengiohang() {
  var quantityInput = document.getElementById("quantity");
  var quantity = parseInt(quantityInput.value);

  if (quantity > 0) {
    var productName = document.getElementById("tensanpham").innerText.trim();
    var messageBox = document.getElementById("messageBox");
    var messageText = document.getElementById("messageText");

    messageText.innerText = 'Đã thêm "' + productName + '" vào giỏ hàng.';
    messageBox.style.display = "block";

    // Chuyển đến trang giỏ hàng (thay đổi link dưới đây bằng đường dẫn thực tế của trang giỏ hàng của bạn)
    // window.location.href = "link-cua-trang-gio-hang";
  } else {
    alert("Vui lòng chọn số lượng sản phẩm hợp lệ.");
    quantityInput.value = 1; // Đặt lại giá trị số lượng về 1
    return false;
  }

  return false; // Ngăn chặn form submit
}

function redirectToCart() {
  // Thay bằng đường dẫn thực tế tới trang giỏ hàng
  window.location.href =
    "https://theahihi.github.io/AZUKI/Th%E1%BA%BF/tranggiohang_thanhtoan_hoanthanh/giohang.html";
}

function closeMessageBox() {
  var messageBox = document.getElementById("messageBox");
  messageBox.style.display = "none";
}
function chuyenmuasp() {
  var quantityInput = document.getElementById("quantity");
  var quantity = parseInt(quantityInput.value);

  if (quantity <= 0) {
    alert("Số lượng sản phẩm phải lớn hơn 0.");
    quantityInput.value = 1; // Đặt lại giá trị số lượng về 1
    return false;
  }
  window.location.href =
    "https://theahihi.github.io/AZUKI/Th%E1%BA%BF/tranggiohang_thanhtoan_hoanthanh/thanhtoan.html";
  return true;
}

// Hiển thị popup khi nhấp vào nút "ĐÁNH GIÁ NGAY"
document.querySelector(".chondanhgia").addEventListener("click", function () {
  document.querySelector(".popup-overlay").style.display = "block";
  document.querySelector(".popup").style.display = "block";
});

// Đóng popup
function closePopup() {
  document.querySelector(".popup-overlay").style.display = "none";
  document.querySelector(".popup").style.display = "none";
}

let selectedRating = 0;
document.querySelectorAll(".chon_sao .sao").forEach((item, index) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".chon_sao .sao").forEach((color) => {
      color.classList.remove("active");
    });
    this.classList.add("active");
    selectedRating = index + 1; // Lưu lại số sao được chọn
  });
});
// Kiểm tra và hiển thị thông báo khi gửi form
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const comment = document.getElementById("comment").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  let isValid = true;

  // Kiểm tra số sao
  if (selectedRating === 0) {
    document.getElementById("rating-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("rating-error").style.display = "none";
  }

  // Kiểm tra nhận xét
  if (comment === "") {
    document.getElementById("comment-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("comment-error").style.display = "none";
  }

  // Kiểm tra tên
  if (name === "") {
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("name-error").style.display = "none";
  }

  // Kiểm tra email
  if (email === "") {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("email-error").style.display = "none";
  }

  // Nếu tất cả các trường hợp đều hợp lệ
  if (isValid) {
    alert("Cảm ơn bạn đã đánh giá!"); // Hiển thị thông báo cảm ơn
    setTimeout(function () {
      closePopup();
      // Reset form
      document.querySelector("form").reset();
      selectedRating = 0;
      document.querySelectorAll(".chon_sao .sao").forEach((color) => {
        color.classList.remove("active");
      });
    }, 1000);
  }
});
// hover anh
const options = document.querySelectorAll(".option");
options.forEach((option) => {
  // Thêm sự kiện mouseenter để thay đổi ảnh chính khi di chuột vào màu sắc
  option.addEventListener("mouseenter", function () {
    const imgSrc = this.querySelector("img").src; // Lấy đường dẫn của ảnh màu sắc
    document.getElementById("currentImage").src = imgSrc; // Thay đổi ảnh chính
  });

  // Thêm sự kiện mouseleave để khi rời khỏi màu sắc, ảnh chính quay về ảnh ban đầu (nếu cần)
  option.addEventListener("mouseleave", function () {
    const originalImgSrc = document.getElementById("defaultImage").src; // Đường dẫn của ảnh chính ban đầu
    document.getElementById("currentImage").src = originalImgSrc; // Thay đổi ảnh chính
  });
  // Thêm sự kiện click để chọn màu và thay đổi ảnh chính
  option.addEventListener("click", function () {
    // Bỏ chọn tất cả các thẻ màu sắc trước đó
    options.forEach((opt) => opt.classList.remove("selected"));

    // Chọn thẻ màu sắc hiện tại và đánh dấu là đã chọn
    this.classList.add("selected");

    // Lấy đường dẫn ảnh và thay đổi ảnh chính
    const imgSrc = this.querySelector("img").src;
    document.getElementById("currentImage").src = imgSrc;

    // Thực hiện các thay đổi khác nếu cần
    const selectedColor = this.querySelector("span").innerText;
    console.log("Bạn đã chọn màu:", selectedColor);
  });
});
