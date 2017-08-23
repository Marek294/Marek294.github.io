$(document).ready(function() {
   $(".person1").hover(function() {
		$(".person1").next().stop().animate({opacity:1},{queue:false,duration:1500});
		},
		function() {
		$(".person1").next().stop().animate({opacity:0},{queue:false,duration:500});
		});

   $(".person2").hover(function() {
		$(".person2").next().stop().animate({opacity:1},{queue:false,duration:1000});
		},
		function() {
		$(".person2").next().stop().animate({opacity:0},{queue:false,duration:500});
		});
		

   $(".person3").hover(function() {
		$(".person3").next().stop().animate({opacity:1},{queue:false,duration:1000});
		},
		function() {
		$(".person3").next().stop().animate({opacity:0},{queue:false,duration:500});
		});
		

   $(".person4").hover(function() {
		$(".person4").next().stop().animate({opacity:1},{queue:false,duration:1000});
		},
		function() {
		$(".person4").next().stop().animate({opacity:0},{queue:false,duration:500});
		});
		

   $(".person5").hover(function() {
		$(".person5").next().stop().animate({opacity:1},{queue:false,duration:1000});
		},
		function() {
		$(".person5").next().stop().animate({opacity:0},{queue:false,duration:500});
		});
});