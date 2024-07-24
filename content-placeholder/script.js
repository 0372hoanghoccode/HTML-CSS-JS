{
  // Lấy các phần tử từ DOM dựa trên ID và class
  const header = document.getElementById("header");
  const title = document.getElementById("title");
  const excerpt = document.getElementById("excerpt");
  const profile_img = document.getElementById("profile_img");
  const name = document.getElementById("name");
  const date = document.getElementById("date");
  const headerText = document.getElementById("headerText");
  const footerText = document.getElementById("footerText");

  // Lấy tất cả các phần tử có class là "animated-bg" và "animated-bg-text"
  const animated_bgs = document.querySelectorAll(".animated-bg");
  const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
  const animated_bg_titles = document.querySelectorAll(".animated-bg-title");

  // Gọi hàm getData sau 2500ms (2.5 giây)
  setTimeout(getData, 2500);

  // Hàm getData để thay đổi nội dung các phần tử
  function getData() {
    // Thay đổi nội dung phần tử header với một hình ảnh
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />`;

    // Thay đổi nội dung phần tử title
    title.innerHTML = "Lorem ipsum dolor sit amet";

    // Thay đổi nội dung phần tử excerpt
    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";

    // Thay đổi nội dung phần tử profile_img với hình ảnh đại diện
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;

    // Thay đổi nội dung phần tử name
    name.innerHTML = "John Doe";

    // Thay đổi nội dung phần tử date
    date.innerHTML = "Jan 28, 2024";

    // Thay đổi nội dung phần tử headerText
    headerText.innerHTML = "Content Placeholder";

    // Thay đổi nội dung phần tử footerText
    footerText.innerHTML = `Made with <i class="fa-solid fa-heart"></i> by <a target="_blank">Hoàng</a>`;

    // Xóa class "animated-bg" từ tất cả các phần tử có class đó
    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));

    // Xóa class "animated-bg-text" từ tất cả các phần tử có class đó
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));

    // Xóa class "animated-bg-title" từ tất cả các phần tử có class đó
    animated_bg_titles.forEach((bg) => bg.classList.remove("animated-bg-title"));
  }
}
