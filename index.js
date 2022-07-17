setInterval(() => {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    img.src =
      "https://images-ext-2.discordapp.net/external/_B4qBbeuje9uuBmdVvYNgO5-OGFhO0d-UNgL7uBu2kM/https/t1.daumcdn.net/cfile/tistory/9934214D5A5425792A";
  });

  const allElem = document.querySelectorAll("body *");

  allElem.forEach((el) => {
    const checkBgImage =
      getComputedStyle(el).getPropertyValue("background-image") !== "none";
    if (checkBgImage) {
      el.style.backgroundImage =
        "url(https://images-ext-2.discordapp.net/external/_B4qBbeuje9uuBmdVvYNgO5-OGFhO0d-UNgL7uBu2kM/https/t1.daumcdn.net/cfile/tistory/9934214D5A5425792A)";
    }
  });
}, 500);
