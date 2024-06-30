const form = document.getElementById('form'); // Lấy ra phần tử form từ HTML
const input = document.getElementById('input'); // Lấy ra input từ HTML
const todosUL = document.getElementById('todos'); // Lấy ra danh sách ul từ HTML

// Lấy danh sách todos từ localStorage và chuyển đổi thành mảng các đối tượng nếu tồn tại
const todos = JSON.parse(localStorage.getItem('todos'));

// Nếu danh sách todos đã tồn tại, thêm từng todo vào danh sách
if (todos) {
    todos.forEach(todo => addTodo(todo)); // Gọi hàm addTodo để thêm từng todo vào danh sách
}

// Bắt sự kiện submit của form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form

    addTodo(); // Gọi hàm addTodo để thêm todo mới
});

// Hàm thêm một todo mới vào danh sách
function addTodo(todo) {
    let todoText = input.value; // Lấy giá trị nhập vào từ input

    // Nếu todo đã tồn tại, sử dụng nội dung của todo đó
    if (todo) {
        todoText = todo.text;
    }

    // Kiểm tra nếu todoText có giá trị
    if (todoText) {
        const todoEl = document.createElement('li'); // Tạo một phần tử li mới
        if (todo && todo.completed) { // Nếu todo đã hoàn thành, thêm class 'completed'
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText; // Thiết lập nội dung của todo

        // Bắt sự kiện click vào todo để đánh dấu hoàn thành hoặc bỏ đánh dấu
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed'); // Đảo ngược trạng thái class 'completed'
            updateLS(); // Cập nhật lại localStorage
        });

        // Bắt sự kiện click chuột phải để xóa todo
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Ngăn chặn hành động mặc định của context menu

            todoEl.remove(); // Xóa todo khỏi danh sách
            updateLS(); // Cập nhật lại localStorage
        });

        todosUL.appendChild(todoEl); // Thêm todo vào danh sách ul

        input.value = ''; // Đặt lại giá trị của input thành rỗng để chuẩn bị nhập todo mới

        updateLS(); // Cập nhật lại localStorage
    }
}

// Hàm cập nhật localStorage với danh sách todos hiện tại
function updateLS() {
    todosEl = document.querySelectorAll('li'); // Lấy ra tất cả các phần tử li trong danh sách

    const todos = [];

    // Duyệt qua từng phần tử li và đẩy vào mảng todos với các thuộc tính text và completed
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos)); // Lưu mảng todos vào localStorage với key 'todos'
}
