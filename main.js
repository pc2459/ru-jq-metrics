$(document).on('ready', function() {


	// Track when user came onto page
	var enteredPage = new Date();
	var clickedSignup, 
			timeOnMasthead, 
			timeOnDemo, 
			timeOnGallery,
			timeOnMiddle,
			timeOnFooter;

	$("#sign-up-button").on("click", function(){
		clickedSignup = new Date();
	})



	$("#stats").on("click",function(){

		// Determine total amount scrolled
		var scrolled = $(window).scrollTop(),
			doc = $(document).height(),
			win = $(window).height();

		percentScrolled = (scrolled/(doc-win)) * 100;

		// Find time on page
		var timeOnPage = (new Date() - enteredPage) / 1000;


		// Find time till sign up
		var tillSignup = (clickedSignup - enteredPage) / 1000;


		console.log("Clicked on stats");
		console.log("Scrolled " + percentScrolled + "%");
		console.log("Scrolled a distance of " + scrolled);
		console.log("Been on page " + timeOnPage + " seconds");
		console.log("Took " + tillSignup + " seconds till sign up");
	})
  
});