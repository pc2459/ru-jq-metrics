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
	});

	// Track time on masthead
	$("#masthead").on("mouseenter", function(){
		var mastEnter = new Date();
		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var mastLeave = new Date();
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
			timeOnMasthead += (mastLeave - mastEnter);
		});
	});

	$("#demo").on("mouseenter", function(){
		var demoEnter = new Date();
		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var demoLeave = new Date();
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
			timeOnDemo += (demoLeave - demoEnter);
		});
	});


	$("#gallery").on("mouseenter", function(){
		var galleryEnter = new Date();
		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var galleryLeave = new Date();
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
			timeOnGallery += (galleryLeave - galleryEnter);
		});
	});

	$("#middleimg").on("mouseenter", function(){
		var middleEnter = new Date();
		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var middleLeave = new Date();
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
		
			timeOnMiddle += (middleLeave - middleEnter);
		});
	});

	$("footer").on("mouseenter", function(){
		var footerEnter = new Date();

		// Save the mouseenter
		var that = $(this);

		$(this).on("mouseleave", function(){
			var footerLeave = new Date();
			// Kill of the event listener from the mouseenter
			that.off("mouseleave");
			timeOnFooter += (footerLeave - footerEnter);
		});
	});	


	$("#stats").on("click",function(){

		// Determine total amount scrolled
		var scrolled = $(window).scrollTop(),
				doc = $(document).height(),
				win = $(window).height();

		percentScrolled = (scrolled/(doc-win)) * 100;

		// Find time on page
		var timeOnPage = ((new Date() - enteredPage) / 1000);

		// Find time till sign up

		var signedUp = isNaN(clickedSignup) ? "<p>Not yet signed up.</p>" : ("<p>Took " + ((clickedSignup - enteredPage) / 1000).toFixed(2) + " seconds to sign up");
		// var tillSignup = ((clickedSignup - enteredPage) / 1000);

		// Find time on sections 
		var totalTimeOnMasthead = timeOnMasthead/1000; 
		var totalTimeOnDemo = timeOnDemo / 1000; 
		var totalTimeOnGallery = timeOnGallery/1000;
		var totalTimeOnMiddle = timeOnMiddle/1000;
		var totalTimeOnFooter = timeOnFooter/1000;

		

		var lightbox = '<div class="lightbox-bg center"><div class="lightbox">' +
										'<h2>Statistics</h2>' + 
										'<p>Scrolled ' + percentScrolled.toFixed(2) + '%</p>' +
										'<p>Scrolled a distance of ' + scrolled + '</p>' + 
										"<p>Been on page " + timeOnPage.toFixed(2) + " seconds</p>" +
										signedUp +
										"<p>Spent " + totalTimeOnMasthead.toFixed(2) + " seconds on the masthead</p>" +
										"<p>Spent " + totalTimeOnDemo.toFixed(2) + " seconds on the demo</p>" +
										"<p>Spent " + totalTimeOnGallery.toFixed(2) + " seconds on the gallery</p>" +
										"<p>Spent " + totalTimeOnMiddle.toFixed(2) + " seconds on the lower image</p>" +
										"<p>Spent " + totalTimeOnFooter.toFixed(2) + " seconds on the footer</p>" +
										'<canvas id="chart" width="200" height="200"></canvas>' +
										'<p><a href="#" id="close-lightbox">Close</a></p>' +
										"</div></div>";




		$("body").append(lightbox); 



			// Get context with jQuery - using jQuery's .get() method.
		var ctx = $("#chart").get(0).getContext("2d");

		var data = [
		    {
		        value: totalTimeOnMasthead,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Masthead"
		    },
		    {
		        value: totalTimeOnDemo,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Demo"
		    },
		    {
		        value: totalTimeOnGallery,
		        color: "#FDB45C",
		        highlight: "#FFC870",
		        label: "Gallery"
		    },
		    {
		        value: totalTimeOnMiddle,
		        color: "#FFB0CB",
		        highlight: "#E59EB6",
		        label: "Lower Image"
		    },
		    {
		        value: totalTimeOnFooter,
		        color: "#CC45B6",
		        highlight: "#CC68B6",
		        label: "Footer"
		    }

		];


			// This will get the first returned node in the jQuery collection.
			var myNewChart = new Chart(ctx).Pie(data);

			

		
	});

	// Hide lightbox
	$("body").on("click","#close-lightbox",function(){
		
		$(".lightbox, .lightbox-bg").remove();
		return false;
	});
	  
});