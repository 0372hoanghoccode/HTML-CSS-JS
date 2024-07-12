const labels = document.querySelectorAll('.form-control label')
/* Lấy tất cả các nhãn (label) bên trong phần tử có lớp (class) là 'form-control' và lưu chúng vào biến labels. */

labels.forEach(label => {
    label.innerHTML = label.innerText
        /* Với mỗi nhãn (label), lấy nội dung văn bản của nó (innerText). */
        .split('')
        /* Tách chuỗi văn bản thành một mảng các ký tự. */
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        /* Với mỗi ký tự trong mảng, tạo một phần tử span và đặt thuộc tính delay cho chuyển đổi (transition-delay) dựa trên chỉ số của ký tự. */
        .join('')
        /* Ghép lại các phần tử span thành một chuỗi HTML. */
})
/* Áp dụng sự thay đổi này cho mỗi nhãn (label) trong danh sách labels. */
