var onSurgePricing = -1;
var surgePtn = /<i class="icon-surge"><\/i>(\d.\d)<small>x<\/small>/;

var intervalID = window.setInterval(function() {
  var el = document.querySelector("div.surge-data > p");
  if (!!el) {
    onSurgePricing = 1;
  } else {
    if (onSurgePricing === 1) {
      alert("No more surge!");
    }
    onSurgePricing = 0;
  }
  console.log(onSurgePricing);
  // surgePtn.exec(el.innerHTML)[1]
}, 5000);
