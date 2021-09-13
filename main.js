const $ = document.querySelector.bind(document);

const navBarBtn = $(".navBar__list__btn");
const navBarList = $(".navBar__list--mb");
navBarBtn.onclick = () => {
  navBarBtn.classList.toggle("active");
  navBarList.classList.toggle("active");
};
