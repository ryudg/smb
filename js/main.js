// main.js
console.log("main.js");

$(function () {
  // 배너 이미지 배열
  let bgArr = [
    "images/main-banner-e1.jpg",
    "images/main-banner-e2.jpg",
    "images/main-banner-e3.jpg",
  ];

  let bg_img_num = 0; // 이미지 번호

  // 배경 재생
  setInterval(function () {
    bg_img_num++; // 이미지 번호 증가
    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }
    /* console.log(bg_img_num); */
    // 배경이미지 변경
    $("#main-banner .container").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });
  }, 5000);
});
/* 사이트맵 버튼 */
$(function () {
  $("#btn-toggle").on("click", function () {
    $("#site-map-menu").toggleClass("show");
  });
  $("#site-menu-close").on("click", function () {
    $("#site-map-menu").removeClass("show");
  });
});

/* intro */
$(function () {
  // 배너 이미지 배열
  let bgArr1 = [
    "../images/main-banner2.jpg",
    "../images/itro1.jpg",
    "../images/main-banner3.jpg",
  ];
  let bg_img_num1 = 0; // 이미지 번호
  // 배경 재생

  $(".rigth").click(function () {
    bg_img_num1++;
    if (bg_img_num1 == 3) {
      bg_img_num1 = 0;
    }
    $("#intro #sub-title").css({
      "background-image": `url(${bgArr1[bg_img_num1]})`,
    });
  });

  $(".left").click(function () {
    bg_img_num1--;
    if (bg_img_num1 == -1) {
      bg_img_num1 = 2;
    }
    $("#intro #sub-title").css({
      "background-image": `url(${bgArr1[bg_img_num1]})`,
    });
  });

  setInterval(function () {
    bg_img_num1++; // 이미지 번호 증가
    if (bg_img_num1 >= bgArr1.length) {
      bg_img_num1 = 0;
    }
    // 배경이미지 변경
    $("#intro #sub-title").css({
      "background-image": `url(${bgArr1[bg_img_num1]})`,
    });
  }, 5000);
});
