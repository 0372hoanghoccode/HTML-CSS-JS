// Định nghĩa các URL và đường dẫn API
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1' // URL để lấy danh sách các phim phổ biến nhất
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280' // Đường dẫn cơ sở cho ảnh poster phim
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=' // URL để tìm kiếm phim theo tên

// Lấy các phần tử DOM
const main = document.getElementById('main') // Phần tử chính nơi các phim sẽ được hiển thị
const form = document.getElementById('form') // Phần tử form dùng cho việc tìm kiếm
const search = document.getElementById('search') // Phần tử input để nhập từ khóa tìm kiếm

// Lấy danh sách phim ban đầu
getMovies(API_URL) // Gọi hàm getMovies với API_URL để lấy và hiển thị các phim phổ biến

// Hàm bất đồng bộ để lấy danh sách phim từ URL
async function getMovies(url) {
    const res = await fetch(url) // Gửi yêu cầu đến URL và chờ phản hồi
    const data = await res.json() // Chuyển phản hồi từ JSON thành đối tượng JavaScript

    showMovies(data.results) // Gọi hàm showMovies để hiển thị các phim lấy được
}

// Hàm để hiển thị danh sách phim
function showMovies(movies) {
    main.innerHTML = '' // Xóa nội dung hiện tại của phần tử chính

    movies.forEach((movie) => { // Duyệt qua từng phim trong danh sách
        const { title, poster_path, vote_average, overview } = movie // Lấy các thuộc tính cần thiết từ đối tượng phim

        const movieEl = document.createElement('div') // Tạo phần tử div mới cho mỗi phim
        movieEl.classList.add('movie') // Thêm lớp CSS 'movie' vào phần tử div

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}"> <!-- Đặt ảnh poster phim -->
            <div class="movie-info">
                <h3>${title}</h3> <!-- Hiển thị tên phim -->
                <span class="${getClassByRate(vote_average)}">${vote_average}</span> <!-- Hiển thị đánh giá phim với lớp màu tương ứng -->
            </div>
            <div class="overview">
                <h3>Overview</h3> <!-- Hiển thị tiêu đề 'Overview' -->
                ${overview} <!-- Hiển thị nội dung tóm tắt phim -->
            </div>
        `
        main.appendChild(movieEl) // Thêm phần tử phim vào phần tử chính
    })
}

// Hàm để lấy lớp CSS tương ứng với mức đánh giá
function getClassByRate(vote) {
    if (vote >= 8) { // Nếu đánh giá lớn hơn hoặc bằng 8
        return 'green' // Trả về lớp màu xanh lá cây
    } else if (vote >= 5) { // Nếu đánh giá lớn hơn hoặc bằng 5
        return 'orange' // Trả về lớp màu cam
    } else { // Nếu đánh giá dưới 5
        return 'red' // Trả về lớp màu đỏ
    }
}

// Lắng nghe sự kiện submit của form tìm kiếm
form.addEventListener('submit', (e) => {
    e.preventDefault() // Ngăn chặn hành vi mặc định của form (tải lại trang)

    const searchTerm = search.value // Lấy từ khóa tìm kiếm từ input

    if (searchTerm && searchTerm !== '') { // Nếu từ khóa không rỗng
        getMovies(SEARCH_API + searchTerm) // Gọi hàm getMovies với URL tìm kiếm và từ khóa
    } else {
        window.location.reload() // Tải lại trang nếu từ khóa rỗng
    }
})
