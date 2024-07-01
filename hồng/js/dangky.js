document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Lấy giá trị từ các trường nhập liệu
    var username = document.querySelector('input[name="username"]').value.trim();
    var email = document.querySelector('input[name="email"]').value.trim();
    var phone = document.querySelector('input[name="phone"]').value.trim();
    var password = document.querySelector('input[name="password"]').value.trim();
    var confirmPassword = document.querySelector('input[name="confirm_password"]').value.trim();
    
    // Kiểm tra xem các trường có được điền đầy đủ hay không
    if (username === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
        document.getElementById('errorMessage').textContent = 'Vui lòng điền đầy đủ thông tin.';
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    } else if (password !== confirmPassword) {
        document.getElementById('errorMessage').textContent = 'Mật khẩu và xác nhận mật khẩu không khớp.';
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        // Chuyển hướng hoặc xử lý thêm ở đây nếu cần thiết
    }
});
