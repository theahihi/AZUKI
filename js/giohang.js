function increaseQuantity1() {
  var input = document.getElementById("sp1");
  var value = parseInt(input.value, 10);
  input.value = value + 1 <= 10 ? value + 1 : 10; // Max limit is 10
}

function decreaseQuantity1() {
  var input = document.getElementById("sp1");
  var value = parseInt(input.value, 10);
  input.value = value - 1 >= 1 ? value - 1 : 1; // Min limit is 1
}

function increaseQuantity2() {
  var input = document.getElementById("sp2");
  var value = parseInt(input.value, 10);
  input.value = value + 1 <= 10 ? value + 1 : 10; // Max limit is 10
}

function decreaseQuantity2() {
  var input = document.getElementById("sp2");
  var value = parseInt(input.value, 10);
  input.value = value - 1 >= 1 ? value - 1 : 1; // Min limit is 1
}
function applyDiscount() {
  var discountCode = document.getElementById("uudai").value;
  var messageElement = document.getElementById("message");
  if (discountCode.trim() === "") {
    messageElement.textContent = "Hãy nhập mã ưu đãi";
    messageElement.className = "message error";
  } else if (discountCode.trim() !== "azuki2024") {
    messageElement.textContent = "Không có mã ưu đãi này";
    messageElement.className = "message error";
  } else {
    messageElement.textContent = "Bạn đã áp dụng ưu đãi";
    messageElement.className = "message success";
  }
}
function capnhatgiohang() {
  alert("Bạn đã cập nhật thành công ");
}
