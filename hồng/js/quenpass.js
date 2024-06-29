document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  alert("Yêu cầu quên mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn.");

  
  window.location.href = "dangnhap.html";
});
