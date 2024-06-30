const loadText = document.querySelector('.loading-text'); // Lấy phần tử có class 'loading-text' từ HTML
const bg = document.querySelector('.bg'); // Lấy phần tử có class 'bg' từ HTML

let load = 0; // Khởi tạo biến load để theo dõi tiến độ tải
let int = setInterval(blurring, 30); // Thiết lập interval để gọi hàm blurring mỗi 30ms

function blurring() {
  load++; // Tăng biến load lên mỗi lần hàm được gọi

  if (load > 99) {
    clearInterval(int); // Dừng interval nếu load đạt 100%
  }

  loadText.innerText = `${load}%`; // Hiển thị tiến độ tải trên phần tử có class 'loading-text'
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // Điều chỉnh độ mờ của văn bản tải dựa trên tiến độ load
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // Điều chỉnh độ mờ của phần tử nền dựa trên tiến độ load
}

// Hàm scale để ánh xạ giá trị từ một dải số này sang một dải số khác
// Hàm này được sử dụng để điều chỉnh độ mờ và độ trong suốt dựa trên tiến độ load
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
//không có ứng dụng mấy nên khỏi ghi chú