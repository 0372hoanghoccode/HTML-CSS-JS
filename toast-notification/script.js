// Lấy các phần tử DOM cần sử dụng
let notifications = document.querySelector('.notifications');
let success = document.getElementById('success');
let error = document.getElementById('error');
let warning = document.getElementById('warning');
let info = document.getElementById('info');

// Hàm tạo thông báo (toast) mới
function createToast(type, icon, title, text) {
    // Tạo một phần tử div mới để chứa thông báo
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark" style="position: absolute; top: 5px; right: 5px;" onclick="(this.parentElement).remove()"></i>
        </div>`;
    // Thêm thông báo mới vào phần tử chứa thông báo (notifications)
    notifications.appendChild(newToast);
    // Tự động xoá thông báo sau 2 giây
    newToast.timeOut = setTimeout(
        () => newToast.remove(), 2000
    );
}

// Xử lý khi nhấn vào nút "success"
success.onclick = function() {
    let type = 'success'; // Loại thông báo
    let icon = 'fa-solid fa-circle-check'; // Biểu tượng (icon) cho thông báo
    let title = 'Success'; // Tiêu đề của thông báo
    let text = 'This is a success toast.'; // Nội dung của thông báo
    createToast(type, icon, title, text); // Gọi hàm tạo thông báo
}

// Xử lý khi nhấn vào nút "error"
error.onclick = function() {
    let type = 'error';
    let icon = 'fa-solid fa-circle-exclamation';
    let title = 'Error';
    let text = 'This is a error toast.';
    createToast(type, icon, title, text);
}

// Xử lý khi nhấn vào nút "warning"
warning.onclick = function() {
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation';
    let title = 'Warning';
    let text = 'This is a warning toast.';
    createToast(type, icon, title, text);
}

// Xử lý khi nhấn vào nút "info"
info.onclick = function() {
    let type = 'info';
    let icon = 'fa-solid fa-circle-info';
    let title = 'Info';
    let text = 'This is a info toast.';
    createToast(type, icon, title, text);
}
