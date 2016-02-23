document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    var el = document.querySelector("div.surge-data > p");
    console.log(el);
  }
}
