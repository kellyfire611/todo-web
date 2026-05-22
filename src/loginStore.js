function login(emailInput, passwordInput) {
    // 1. Kiểm tra email
    if(!emailInput) {
        return "Vui lòng nhập email!";
    }
    // 2. Kiểm tra mật khẩu
    if(!passwordInput) {
        return "Vui lòng nhập mật khẩu!";
    }
    // 3. Kiểm tra logic/nghiệp vụ: 
    // Tài khoản có đúng không?
    // Giả sử: admin@gmail.com và 123456 là đúng
    if(emailInput == "admin@gmail.com" 
        && passwordInput == "123456") {
        return "Đăng nhập thành công!";
    } else {
        return "Đăng nhập thất bại!";
    }
}