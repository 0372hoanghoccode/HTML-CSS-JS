const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

// Khởi chạy hoạt ảnh
chayHoatAnh()

// Hàm đặt lại giao diện DOM về trạng thái ban đầu
function datLaiDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  // Xóa tất cả các lớp CSS khỏi các phần tử span
  nums.forEach((num) => {
    num.classList.value = ''
  })

  // Thêm lớp 'in' cho phần tử đầu tiên
  nums[0].classList.add('in')
}

// Hàm chạy hoạt ảnh cho từng số
function chayHoatAnh() {
  nums.forEach((num, idx) => {
    const truocCuoi = nums.length - 1

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== truocCuoi) {
        // Khi hoạt ảnh 'goIn' kết thúc, nếu không phải là phần tử cuối cùng, chuyển sang 'out'
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // Khi hoạt ảnh 'goOut' kết thúc, kích hoạt hoạt ảnh 'in' cho phần tử tiếp theo
        num.nextElementSibling.classList.add('in')
      } else {
        // Khi hoạt ảnh kết thúc cho tất cả các số, ẩn .counter và hiện .final
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

// Thêm sự kiện click vào nút replay
replay.addEventListener('click', () => {
  datLaiDOM()  // Đặt lại trạng thái ban đầu
  chayHoatAnh()  // Chạy lại hoạt ảnh
})
