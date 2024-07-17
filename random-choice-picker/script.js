// Lấy phần tử HTML có id là 'tags'
const tagsEl = document.getElementById('tags')

// Lấy phần tử HTML có id là 'textarea'
const textarea = document.getElementById('textarea')

// Đặt focus vào phần tử textarea khi trang được tải
textarea.focus()

// Thêm sự kiện lắng nghe khi người dùng nhả phím lên cho phần tử textarea
textarea.addEventListener('keyup', (e) => {
    // Tạo các thẻ từ giá trị của textarea
    createTags(e.target.value)

    // Nếu phím Enter được nhấn
    if(e.key === 'Enter') {
        // Đặt giá trị của textarea thành rỗng sau 10ms
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        // Bắt đầu quá trình chọn ngẫu nhiên
        randomSelect()
    }
})

// Hàm tạo các thẻ từ chuỗi input
function createTags(input) {
    // Tách chuỗi input thành các phần tử, loại bỏ các phần tử rỗng và khoảng trắng
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    // Xóa nội dung của phần tử tagsEl
    tagsEl.innerHTML = ''

    // Duyệt qua từng thẻ và tạo phần tử span cho mỗi thẻ
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// Hàm chọn ngẫu nhiên thẻ
function randomSelect() {
    const times = 30

    // Thiết lập một khoảng thời gian lặp lại
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
    
        // Nếu randomTag không undefined, thì làm nổi bật thẻ đó
        if (randomTag !== undefined) {
            highlightTag(randomTag)

            // Bỏ nổi bật thẻ đó sau 100ms
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100);

    // Dừng lặp lại sau khi đã lặp đủ số lần (times)
    setTimeout(() => {
        clearInterval(interval)

        // Làm nổi bật một thẻ ngẫu nhiên cuối cùng sau 100ms
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

// Hàm chọn ngẫu nhiên một thẻ từ các thẻ đã tạo
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// Hàm làm nổi bật thẻ (thêm class 'highlight')
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// Hàm bỏ nổi bật thẻ (xóa class 'highlight')
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
