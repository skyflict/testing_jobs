const rectangle_2 = document.querySelector(".rectangle_2");
const rectangle_3 = document.querySelector(".rectangle_3");
const rectangle_4 = document.querySelector(".rectangle_4");
const rectangle_5 = document.querySelector(".rectangle_5");
const rectangle_5_1 = document.querySelector(".rectangle_5_1");
const rectangle_5_2 = document.querySelector(".rectangle_5_2");

const center_text_2_1 = document.querySelector(".center_text_2_1");
const center_text_2_2 = document.querySelector(".center_text_2_2");
const center_text_2_3 = document.querySelector(".center_text_2_3");
const center_text_2_4 = document.querySelector(".center_text_2_4");
const center_text_2_5 = document.querySelector(".center_text_2_5");
const center_text_2_6 = document.querySelector(".center_text_2_6");

const readMoreBtn = rectangle_2.querySelector(".read-more");
const readMoreBtn1 = rectangle_3.querySelector(".read-more");
const readMoreBtn2 = rectangle_4.querySelector(".read-more");
const readMoreBtn3 = rectangle_5.querySelector(".read-more");
const readMoreBtn4 = rectangle_5_1.querySelector(".read-more");
const readMoreBtn5 = rectangle_5_2.querySelector(".read-more");

readMoreBtn.addEventListener("click", function () {
  rectangle_2.style.height = "210px";
  center_text_2_1.style.height = "200px";
  readMoreBtn.style.display = "none";
});

readMoreBtn1.addEventListener("click", function () {
  rectangle_3.style.height = "235px";
  center_text_2_2.style.height = "250px";
  readMoreBtn1.style.display = "none";
});

readMoreBtn2.addEventListener("click", function () {
  rectangle_4.style.height = "210px";
  center_text_2_3.style.height = "250px";
  readMoreBtn2.style.display = "none";
});

readMoreBtn3.addEventListener("click", function () {
  rectangle_5.style.height = "205px";
  center_text_2_4.style.height = "250px";
  readMoreBtn3.style.display = "none";
});

readMoreBtn4.addEventListener("click", function () {
  rectangle_5_1.style.height = "208px";
  center_text_2_5.style.height = "250px";
  readMoreBtn4.style.display = "none";
});

readMoreBtn5.addEventListener("click", function () {
  rectangle_5_2.style.height = "185px";
  center_text_2_6.style.height = "250px";
  readMoreBtn5.style.display = "none";
});

function topFunction() {
  document.body.scrollTop = 0; // для Safari
  document.documentElement.scrollTop = 0; // для Chrome, Firefox, IE и Opera
}
