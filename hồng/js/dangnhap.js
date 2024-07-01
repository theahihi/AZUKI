document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Lấy giá trị từ các trường nhập liệu
    var username = document.querySelector('input[name="username"]').value.trim();
    var password = document.querySelector('input[name="pass"]').value.trim();
    
    // Kiểm tra xem các trường có được điền đầy đủ hay không
    if (username === '' || password === '') {
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        // Chuyển hướng tới trang chủ sau khi đăng nhập thành công
        window.location.href = "../../index.html"; 
    }
});
