const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const opacityEl = document.getElementById('opacity');
const opacityValueEl = document.getElementById('opacity-value');
const brushStyleEl = document.getElementById('brush-style');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
colorEl.value = 'black';
let color = colorEl.value;
let opacity = opacityEl.value;
let brushStyle = brushStyleEl.value;
let x, y;

// Sự kiện khi nhấn chuột xuống canvas
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

// Sự kiện khi thả chuột ra
document.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

// Sự kiện khi di chuyển chuột trên canvas
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) { // Nếu chuột đang được nhấn
        const x2 = e.offsetX; // Lấy tọa độ X mới của con trỏ chuột
        const y2 = e.offsetY; // Lấy tọa độ Y mới của con trỏ chuột

        drawCircle(x2, y2); // Vẽ một vòng tròn tại tọa độ mới
        drawLine(x, y, x2, y2); // Vẽ một đường thẳng từ tọa độ cũ đến tọa độ mới

        x = x2; // Cập nhật tọa độ X
        y = y2; // Cập nhật tọa độ Y
    }
});

// Hàm vẽ một vòng tròn tại tọa độ (x, y)
function drawCircle(x, y) {
    ctx.beginPath(); // Bắt đầu một đường vẽ mới
    ctx.arc(x, y, size, 0, Math.PI * 2); // Vẽ một vòng tròn
    ctx.fillStyle = color; // Đặt màu sắc cho vòng tròn
    ctx.globalAlpha = opacity; // Đặt độ mờ cho vòng tròn
    ctx.fill(); // Đổ màu cho vòng tròn
}

// Hàm vẽ một đường thẳng từ (x1, y1) đến (x2, y2)
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath(); // Bắt đầu một đường vẽ mới
    ctx.moveTo(x1, y1); // Đặt điểm bắt đầu của đường thẳng
    ctx.lineTo(x2, y2); // Đặt điểm kết thúc của đường thẳng
    ctx.strokeStyle = color; // Đặt màu sắc cho đường thẳng
    ctx.globalAlpha = opacity; // Đặt độ mờ cho đường thẳng
    ctx.lineWidth = size * 2; // Đặt độ dày của đường thẳng
    ctx.lineCap = brushStyle; // Đặt kiểu cọ vẽ
    ctx.stroke(); // Vẽ đường thẳng
}

// Hàm cập nhật kích thước cọ vẽ trên màn hình
function updateSizeOnScreen() {
    sizeEL.innerText = size; // Hiển thị kích thước cọ vẽ
}

// Sự kiện khi nhấn nút tăng kích thước cọ vẽ
increaseBtn.addEventListener('click', () => {
    size += 5; // Tăng kích thước cọ vẽ thêm 5 đơn vị

    if (size > 50) { // Giới hạn kích thước tối đa là 50
        size = 50;
    }

    updateSizeOnScreen(); // Cập nhật kích thước trên màn hình
});

// Sự kiện khi nhấn nút giảm kích thước cọ vẽ
decreaseBtn.addEventListener('click', () => {
    size -= 5; // Giảm kích thước cọ vẽ 5 đơn vị

    if (size < 5) { // Giới hạn kích thước tối thiểu là 5
        size = 5;
    }

    updateSizeOnScreen(); // Cập nhật kích thước trên màn hình
});

// Sự kiện khi thay đổi màu sắc
colorEl.addEventListener('change', (e) => color = e.target.value);

// Sự kiện khi thay đổi độ mờ
opacityEl.addEventListener('input', (e) => {
    opacity = e.target.value;
    opacityValueEl.innerText = opacity;
});

// Sự kiện khi thay đổi kiểu cọ vẽ
brushStyleEl.addEventListener('change', (e) => brushStyle = e.target.value);

// Sự kiện khi nhấn nút xóa sạch canvas
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
