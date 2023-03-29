const images = [
  "bg01.jpg",
  "bg02.jpg",
  "bg03.jpg",
  "bg04.jpg",
  "bg05.jpg",
  "bg06.jpg",
  "bg07.jpg",
  "bg08.jpg",
  "bg09.jpg",
  "bg11.jpg",
  "bg12.jpg",
  "bg13.jpg",
  "bg14.jpg",
  "bg16.jpg",
  "bg17.jpg",
  "bg18.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;
document.body.prepend(bgImage);
