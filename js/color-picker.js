$(document).ready(function(){

    // Test 1 function
    $("#test-1 .slider").slider({
	  range: true,
	  min: 0,
	  max: 16777215,
	  values: [0, 16777215],
	  slide: function(event, ui) {
	    var dec = ui.values[0];
	    var hex = "#" + dec.toString(16);
	    $("#test-1 .debug-text").text('slider value: ' + hex);
	    $("#test-1 .rectangle").css('background-color', hex);
	  }
	});

});