// get value from input
function search() {
  var input = document.getElementById("searchInput").value;
  console.log(input);

  // replace all img src with input value
  var img = document.querySelectorAll("#gambar");
  for (var i = 0; i < img.length; i++) {
    img[i].src = "https://source.unsplash.com/600x600/?" + input + "&sig=" + i;
    console.log(img[i].src);
  }

  // set condition if input value is empty
  if (input == "") {
    for (var i = 0; i < img.length; i++) {
      img[i].src = "https://source.unsplash.com/600x600/?flower&sig=" + i;
      console.log(img[i].src);
    }
  }
}

function categoryButton() {
  var category = document.getElementById("flower").innerText.toLowerCase();
  console.log(category);
}
