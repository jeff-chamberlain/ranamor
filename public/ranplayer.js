var socket;

jQuery(document).ready( function() {

	socket = io.connect('http://localhost:5000/player');
	
	socket.on('con', function(data) {
		var msg = data.message;
		$('#message').text(msg);
	});

});