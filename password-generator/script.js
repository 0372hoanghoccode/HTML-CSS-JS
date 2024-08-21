// Lấy các phần tử từ DOM
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genBtn = document.getElementById("genBtn");
const copyIcon = document.getElementById("copyIcon");

// Cập nhật giá trị của thanh trượt
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

// Xử lý sự kiện nhấn nút tạo mật khẩu
genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

// Các ký tự cho mật khẩu
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSymbols = "~!@#$%^&*";

// Hàm tạo mật khẩu
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    // Thêm các ký tự dựa trên lựa chọn của người dùng
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    // Nếu không có ký tự nào được chọn, trả về chuỗi rỗng
    if (allChars.length === 0) {
        return "";
    }

    // Sinh mật khẩu ngẫu nhiên
    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}

// Sao chép mật khẩu vào clipboard và thay đổi biểu tượng
copyIcon.addEventListener('click', () => {
    if (passBox.value) {
        navigator.clipboard.writeText(passBox.value)
            .then(() => {
                copyIcon.innerText = "check";
                copyIcon.title = "Password Copied";
                setTimeout(() => {
                    copyIcon.innerText = "content_copy";
                    copyIcon.title = "Copy to Clipboard";
                }, 2000);
            })
            .catch(() => {
                alert("Failed to copy password!");
            });
    }
});
