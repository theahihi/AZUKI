document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        formResponse.innerHTML = '';
        formResponse.classList.remove('success', 'error');

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Kiểm tra định dạng email Gmail
        const emailPattern = /^[^\s@]+@gmail\.com$/;
        // Kiểm tra định dạng số điện thoại
        const phonePattern = /^\d{10,11}$/;

        if (!emailPattern.test(email)) {
            formResponse.innerHTML = 'Vui lòng nhập một địa chỉ Gmail hợp lệ.';
            formResponse.classList.add('error');
            return;
        }

        if (!phonePattern.test(phone)) {
            formResponse.innerHTML = 'Vui lòng nhập một số điện thoại hợp lệ (10-11 chữ số).';
            formResponse.classList.add('error');
            return;
        }

        if (name.trim() === '' || message.trim() === '') {
            formResponse.innerHTML = 'Vui lòng điền đầy đủ thông tin.';
            formResponse.classList.add('error');
            return;
        }

        // Giả lập yêu cầu AJAX
        setTimeout(() => {
            formResponse.innerHTML = 'Cảm ơn bạn đã liên hệ!';
            formResponse.classList.add('success');
            form.reset();
        }, 1000);
    });
});