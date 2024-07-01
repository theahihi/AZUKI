document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  // Lấy giá trị từ trường nhập liệu
  var username = document.querySelector('input[name="username"]').value.trim();
  
  // Kiểm tra xem trường nhập liệu có được điền đầy đủ hay không
  if (username === '') {
      document.getElementById('errorMessage').style.display = 'block';
      document.getElementById('successMessage').style.display = 'none';
  } else {
      document.getElementById('errorMessage').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
      // Chuyển hướng hoặc xử lý thêm ở đây nếu cần thiết
  }
});
