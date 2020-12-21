// 상단 메인 슬라이더
$('.main-visual').slick({
    infinite : true,
    pauseOnHover : false,
    pauseOnFocus: false,
    dots: true,
    arrows : true,
    autoplay: true,
    autoplaySpeed: 2500
});

// .recent-posts 슬라이더
$('.posts-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

// .video 모달창
const playBtn = document.querySelector(".play-icon"),
    overlay = document.querySelector(".overlay"),
    closeBtn = document.querySelector(".close");
const openModal = () => {
    overlay.style.display = "block";
}
const closeModal = () => {
    overlay.style.display = "none";
    $(".overlay iframe").attr("src", $(".overlay iframe").attr("src"));
}
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
playBtn.addEventListener("click", openModal);