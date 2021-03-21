var modal = document.getElementById("myModal");
var arr = ["myImg0", "myImg1", "myImg2"];
for (var i = 0; i < arr.length; i++) {
  var img = document.getElementById(arr[i]);
  var modalImg = document.getElementById("modal01");
  img.onclick = function () {
    modal.style.display = "block";
  };
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

var quotes = [
  [
    "If you want to know the truth about something, there is a very good chance that Aries will give it to you straight.",
    "You can definitely count on an Aries when the chips are down.",
    "If you want to spark an Aries passion take their face in your hands, look them in the eye and passionately kiss them.",
    "Aries is not about hanging in until the finish, or about being nice, they are born to initiate and inspire, and then to initiate and inspire again, and again.",
    "Aries is born to make their mark on the world and take the road less traveled.",
    "Aries are their own heroes and are true to themselves.",
    "Aries is fully committed to what they believed in.",
    "Aries is resilient, guileless and optimistic.",
    "Failure is not an option for an Aries, it is a prerequisite for success.",
  ],
  [
    "Taurus will say it to your face, not behind your back.",
    "Taurus won’t sit and wait. They get sh*t done themselves.",
    "Taurus are doing more than you know, on things you don’t know about.",
    "Taurus remembers everything you do and don’t do.",
    "Everything you know about Taurus is what they want you to know.",
  ],

  [
    "Gemini can either be your biggest blessing or your worst nightmare.",
    "You never know what’s on the mind of a Gemini.",
    "Geminis will give you all the attention until you give them a reason not to.",
    "Geminis act like they are fine when they aren’t.",
    "Gemini can be impatient. They save their attention to people they truly care about.",
  ],
];

document.getElementById("aries").addEventListener("click", function () {
  document.getElementById("newQuoteBtn").addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * quotes[0].length);
    document.getElementById("modalContent").innerHTML = quotes[0][randomNumber];
  });
});
document.getElementById("taurus").addEventListener("click", function () {
  document.getElementById("newQuoteBtn").addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * quotes[1].length);
    document.getElementById("modalContent").innerHTML = quotes[1][randomNumber];
  });
});
document.getElementById("gemini").addEventListener("click", function () {
  document.getElementById("newQuoteBtn").addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * quotes[2].length);
    document.getElementById("modalContent").innerHTML = quotes[2][randomNumber];
  });
});

const reload=()=>window.location.reload();