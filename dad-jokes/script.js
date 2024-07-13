const jokeEl = document.getElementById('joke')  // Tìm và lưu phần tử có id là 'joke' vào biến jokeEl
const jokeBtn = document.getElementById('jokeBtn')  // Tìm và lưu phần tử có id là 'jokeBtn' vào biến jokeBtn

jokeBtn.addEventListener('click', generateJoke)  // Thêm sự kiện 'click' cho jokeBtn để gọi hàm generateJoke khi nhấn vào nút

generateJoke()  // Gọi hàm generateJoke ngay khi trang được tải để hiển thị một câu đùa ban đầu

// SỬ DỤNG ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',  // Đặt header để yêu cầu định dạng trả về là JSON
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)  // Gửi yêu cầu fetch đến API với cấu hình header, đợi cho đến khi nhận được phản hồi
  const data = await res.json()  // Chuyển đổi phản hồi thành định dạng JSON, đợi cho đến khi quá trình hoàn thành

  jokeEl.innerHTML = data.joke  // Cập nhật nội dung của jokeEl với câu đùa nhận được từ API
}

// thích em theo nhiều kiểu nên code này anh viết theo nhiều kiểu nhưng tóm lại là một
// SỬ DỤNG .then()
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',  // Đặt header để yêu cầu định dạng trả về là JSON
    },
  }

  fetch('https://icanhazdadjoke.com', config)  // Gửi yêu cầu fetch đến API với cấu hình header
    .then((res) => res.json())  // Khi nhận được phản hồi, chuyển đổi phản hồi thành JSON
    .then((data) => {  // Khi việc chuyển đổi JSON hoàn thành
      jokeEl.innerHTML = data.joke  // Cập nhật nội dung của jokeEl với câu đùa nhận được từ API
    })
}
