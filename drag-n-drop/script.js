// Lấy phần tử có class 'fill'
const fill = document.querySelector('.fill')

// Lấy tất cả các phần tử có class 'empty'
const empties = document.querySelectorAll('.empty')

// Thêm sự kiện 'dragstart' và 'dragend' cho phần tử 'fill'
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// Thêm sự kiện kéo thả cho tất cả các phần tử 'empty'
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// Hàm gọi khi bắt đầu kéo
function dragStart() {
    this.className += ' hold' // Thêm class 'hold' cho phần tử đang kéo
    setTimeout(() => this.className = 'invisible', 0) // Làm phần tử trở nên vô hình sau một khoảng thời gian ngắn
}

// Hàm gọi khi kết thúc kéo
function dragEnd() {
    this.className = 'fill' // Trả lại class 'fill' cho phần tử
}

// Hàm gọi khi kéo qua phần tử 'empty'
function dragOver(e) {
    e.preventDefault() // Ngăn chặn hành động mặc định để cho phép thả
}

// Hàm gọi khi kéo vào phần tử 'empty'
function dragEnter(e) {
    e.preventDefault() // Ngăn chặn hành động mặc định
    this.className += ' hovered' // Thêm class 'hovered' cho phần tử
}

// Hàm gọi khi rời khỏi phần tử 'empty'
function dragLeave() {
    this.className = 'empty' // Trả lại class 'empty' cho phần tử
}

// Hàm gọi khi thả phần tử kéo vào 'empty'
function dragDrop() {
    this.className = 'empty' // Trả lại class 'empty' cho phần tử
    this.append(fill) // Thêm phần tử 'fill' vào bên trong phần tử 'empty'
}
