let mythumbs = document.querySelectorAll(".imgTile");

mythumbs.forEach((img) => {
  img.addEventListener("click", function (e) {
    console.log(e.target.src);
    let thumbsUrl = e.target.src;
    let bigImageUrl = document.getElementById("big").src;
    e.target.src = bigImageUrl;
    document.getElementById("big").src = thumbsUrl;
  });
});
