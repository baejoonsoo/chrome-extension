const url = "https://t1.daumcdn.net/cfile/tistory/9934214D5A5425792A";

setInterval(() => {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    img.src = url;
  });

  const allElem = document.querySelectorAll("body *");

  allElem.forEach((el) => {
    const checkBgImage =
      getComputedStyle(el).getPropertyValue("background-image") !== "none";
    if (checkBgImage) {
      el.style.backgroundImage = `url(${url})`;
    }
  });
}, 500);
