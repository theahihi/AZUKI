const listImage = document.querySelector(".list-image");
const imgs = document.getElementsByClassName("imgslide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const length = imgs.length;
let current = 0;
const ChangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(0px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  }
};
let handleEventChangeSilde = setInterval(ChangeSlide, 10000);

btnRight.addEventListener("click", () => {
  clearInterval(handleEventChangeSilde);
  ChangeSlide();
  handleEventChangeSilde = setInterval(ChangeSlide, 10000);
});
btnLeft.addEventListener("click", () => {
  clearInterval(handleEventChangeSilde);
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
  }
  handleEventChangeSilde = setInterval(ChangeSlide, 10000);
});
