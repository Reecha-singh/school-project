var options = {
            
	strings: ["the passport to the future,for tomorrow belongs to those who prepare for it today", "the most powerful weapon we can use to change the world", "not a problem.Education is an Opportunity.","the foundation upon which we build our future"],
	  stringsElement: null,
	  // typing speed
	  typeSpeed: 60,
	  // time before typing starts
	  startDelay: 600,
	  // backspacing speed
	  backSpeed: 20,
	  // time before backspacing
	  backDelay: 1000,
	  // loop
	  loop: true,
	  // false = infinite
	  loopCount: 5,
	  // show cursor
	  showCursor: false,
	  // character for cursor
	  cursorChar: "|",
	  // attribute to type (null == text)
	  attr: null,
	  // either html or text
	  contentType: 'html',
	
};
var typed = new Typed('Span', options);


var images = ["teacher.jpg","teacher1.jpg", "teacher2.jpg", "teacher3.jpg"];
$(function () {
    var i = 0;
    $("#five #image").css("background-image", "url(images/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {   
            i = 0;
        }
        $("#five #image").fadeOut("slow", function () {
            $(this).css("background-image", "url(images/images/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 3000);
});