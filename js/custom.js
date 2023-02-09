(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/09/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


// Google Maps Iframe
let iframe_map = document.getElementById("iframe");
if ($(window).width() < 720) {
  
  iframe_map.innerHTML += `<div class="opacity-8 gmap_canvas"><iframe width="360" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=Endere%C3%A7o:%20Av.%20Tr%C3%AAs%20Barras,%20968%20-%20Vila%20Vilas%20Boas,%20Campo%20Grande%20-%20MS,%2079051-290&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:450px;width:360px;}</style><a href="https://www.embedgooglemap.net">google map codes for website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:450px;width:360px;}</style></div>`;
}
else {
  iframe_map.innerHTML += `<div class="opacity-8 gmap_canvas"><iframe width="700" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Endere%C3%A7o:%20Av.%20Tr%C3%AAs%20Barras,%20968%20-%20Vila%20Vilas%20Boas,%20Campo%20Grande%20-%20MS,%2079051-290&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:300px;width:700px;}</style><a href="https://www.embedgooglemap.net">google map codes for website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:700px;}</style></div>`;
}
