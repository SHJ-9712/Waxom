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

// .latest-projects 카테고리
$('.categories > button').click(function(){
    $('.categories > button').removeClass('active')
    $(this).addClass('active')
});

$('.all').click(function(){
    $('.project-list > li').fadeIn(500);    
});
$('.webDesign').click(function(){
    $('.project-list > .wD').fadeIn(500);
    $('.project-list .mA, .illu, .ps').fadeOut(500);
});
$('.mobileApp').click(function(){
    $('.project-list > .mA').fadeIn(500);
    $('.project-list .wD, .illu, .ps').fadeOut(500);
});
$('.illust').click(function(){
    $('.project-list > .illu').fadeIn(500);
    $('.project-list .wD, .mA, .ps').fadeOut(500);
});
$('.psd').click(function(){
    $('.project-list > .ps').fadeIn(500);
    $('.project-list .wD, .mA, .illu').fadeOut(500);
});

// .video 모달창
const playBtn = document.querySelector('.play-icon'),
    overlay = document.querySelector('.overlay'),
    closeBtn = document.querySelector('.close');
const openModal = () => {
    overlay.style.display = 'block';
}
const closeModal = () => {
    overlay.style.display = 'none';
    $('.overlay iframe').attr('src', $('.overlay iframe').attr('src'));
}
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
playBtn.addEventListener('click', openModal);

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