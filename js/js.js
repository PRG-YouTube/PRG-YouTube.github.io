( function() {
	var youtube = document.querySelectorAll( ".youtube" );

	for (var i = 0; i < youtube.length; i++) {
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		//var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/maxresdefault.jpg";

		var image = new Image();
		image.src = source;
		image.loading = "lazy";
		image.alt = "Video with title: "+ youtube[i].dataset.title;
		image.title = "Click to play video! "+ youtube[i].dataset.title;
		image.addEventListener( "load", function() {
			youtube[ i ].appendChild( image );
		} ( i ) );

		youtube[i].addEventListener( "click", function() {
			var iframe = document.createElement( "iframe" );
			iframe.setAttribute( "frameborder", "0" );
			iframe.setAttribute( "allowfullscreen", "" );
			iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
			iframe.setAttribute( "loading", "lazy");

			this.innerHTML = "";
			this.appendChild( iframe );
		} );	
	};
} ) ();

