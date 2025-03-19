// let mythumbs = document.querySelectorAll(".imgTile");

// mythumbs.forEach((img) => {
//   img.addEventListener("click", function (e) {
//     console.log(e.target.src);
//     let thumbsUrl = e.target.src;
//     let bigImageUrl = document.getElementById("big").src;
//     e.target.src = bigImageUrl;
//     document.getElementById("big").src = thumbsUrl;
//   });
// });

const carGallery = document.createElement("section");
carGallery.id = "carGallery";
document.body.appendChild(carGallery);

const thumbs = document.createElement("section");
thumbs.id = "thumbs";
carGallery.appendChild(thumbs);

const bigImage = document.createElement("section");
bigImage.id = "BigImage";
bigImage.className = "bigImage";
carGallery.appendChild(bigImage);

const big = document.createElement("img");
big.id = "big";
big.src = "assets/img/cars1.jpg";
big.alt = "big car image";
bigImage.appendChild(big);

const images = [
  "assets/img/cars1.jpg",
  "assets/img/cars2.jpg",
  "assets/img/cars3.jpg",
  "assets/img/cars4.jpg",
  "assets/img/cars5.jpg",
  "assets/img/cars6.jpg",
  "assets/img/cars7.jpg",
  "assets/img/cars8.jpg",
  "assets/img/cars9.jpg",
];

images.forEach((imgName) => {
  const img = document.createElement("img");
  img.classList.add("imgTile");
  img.src = imgName;
  img.alt = "thumbnail of car";

  img.addEventListener("click", () => {
    big.src = img.src;
  });

  thumbs.appendChild(img);
});

carGallery.appendChild(thumbs);
carGallery.appendChild(bigImage);
