$(document).on('ready', function() {


	// Track when user came onto page
	var enteredPage = new Date();
	var clickedSignup,
			timeOnMasthead = 0, 
			timeOnDemo = 0, 
			timeOnGallery = 0,
			timeOnMiddle = 0,
			timeOnFooter = 0;

	// Track signup click
	$("#sign-up-button").on("click", function(){
		clickedSignup = new Date();
	})

	// Track time on masthead

	$("#masthead").on("mouseenter", function(){
		var mastEnter = new Date();
		console.log("Entered masthead");

		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var mastLeave = new Date();
		
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
		
			console.log("Left masthead");
		
			timeOnMasthead += (mastLeave - mastEnter);
			console.log(timeOnMasthead/1000);
		})
	})

	$("#demo").on("mouseenter", function(){
		var demoEnter = new Date();
		console.log("Entered demo");

		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var demoLeave = new Date();
		
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
		
			console.log("Left demo");
		
			timeOnDemo += (demoLeave - demoEnter);
			console.log(timeOnDemo/1000);
		})
	})


	$("#gallery").on("mouseenter", function(){
		var galleryEnter = new Date();
		console.log("Entered gallery");

		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var galleryLeave = new Date();
		
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
		
			console.log("Left gallery");
		
			timeOnGallery += (galleryLeave - galleryEnter);
			console.log(timeOnGallery/1000);
		})
	})

	$("#middleimg").on("mouseenter", function(){
		var middleEnter = new Date();
		console.log("Entered middle");

		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var middleLeave = new Date();
		
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
		
			console.log("Left middle");
		
			timeOnMiddle += (middleLeave - middleEnter);
			console.log(timeOnMiddle/1000);
		})
	})

	$("footer").on("mouseenter", function(){
		var footerEnter = new Date();
		console.log("Entered footer");

		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var footerLeave = new Date();
		
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
		
			console.log("Left footer");
		
			timeOnFooter += (footerLeave - footerEnter);
			console.log(timeOnFooter/1000);
		})
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