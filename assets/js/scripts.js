const urlImages = "https://source.unsplash.com/600x600/?";

// get value from input
function search() {
  var input = document.getElementById("searchInput").value;
  console.log(input);

  // replace all img src with input value
  var img = document.querySelectorAll("#gambar");
  for (var i = 0; i < img.length; i++) {
    img[i].src = urlImages + input + "&sig=" + i;
    console.log(img[i].src);
  }

  // set condition if input value is empty
  if (input == "") {
    for (var i = 0; i < img.length; i++) {
      img[i].src = urlImages + i;
      console.log(img[i].src);
    }
  }
}

const showCategory = document.getElementById("showCategory");

function categoryImages(params1) {
  showCategory.textContent = "";

  for (let i = 0; i < 2; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "28rem";

    const contaner = document.createElement("div");
    contaner.classList.add("image-container", "overflow-hidden");

    const img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = urlImages + params1 + "&sig=" + i;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    contaner.appendChild(img);
    card.appendChild(contaner);
    card.appendChild(overlay);
    showCategory.appendChild(card);
  }
}

const buttonflower = document.getElementById("flower");
buttonflower.addEventListener("click", function () {
  const params1 = "flower";
  categoryImages(params1);
});

const buttonSoccer = document.getElementById("soccer");
buttonSoccer.addEventListener("click", function () {
  const params1 = "soccer";
  categoryImages(params1);
});
const buttonComputer = document.getElementById("computer");
buttonComputer.addEventListener("click", function () {
  const params1 = "computer";
  categoryImages(params1);
});
const buttonLaptop = document.getElementById("laptop");
buttonLaptop.addEventListener("click", function () {
  const params1 = "laptop";
  categoryImages(params1);
});
const buttonGame = document.getElementById("game");
buttonGame.addEventListener("click", function () {
  const params1 = "game";
  categoryImages(params1);
});
