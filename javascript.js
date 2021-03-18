var modal = document.getElementById("myModal");
var arr = ["myImg0", "myImg1", "myImg2"];
for (var i = 0; i < arr.length; i++) {
  var img = document.getElementById(arr[i]);
  var modalImg = document.getElementById("modal01");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "this.src";
  };
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

var quotes = [
  'If you want to know the truth about something, there is a very good chance that Aries will give it to you straight.',
  'You can definitely count on an Aries when the chips are down.',
  'If you want to spark an Aries passion take their face in your hands, look them in the eye and passionately kiss them.',
  'Aries is not about hanging in until the finish, or about being nice, they are born to initiate and inspire, and then to initiate and inspire again, and again.',
  'Aries is born to make their mark on the world and take the road less traveled.',
  'Aries are their own heroes and are true to themselves.',
  'Aries is fully committed to what they believed in.',
  'Aries is resilient, guileless and optimistic.',
  'Failure is not an option for an Aries, it is a prerequisite for success.'
  ];
  var quotes1 = [
      'Is this working?',
      'please'
      ];
  
  function newQuote() {
      var randomNumber = Math.floor(Math.random() * (quotes.length));
      document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
  }
  window.addEventListener('load', newQuote, true);

  

