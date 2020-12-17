// .video 동영상 모달창
const playBtn = document.querySelector(".play-icon"),
    overlay = document.querySelector(".overlay"),
    closeBtn = document.querySelector(".close");

const openModal = () => {
    overlay.style.display = "block";
}
const closeModal = () => {
    overlay.style.display = "none";
}
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
playBtn.addEventListener("click", openModal);