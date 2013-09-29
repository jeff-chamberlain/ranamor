var socket;

jQuery(document).ready( function() {

	socket = io.connect('http://ranamor.herokuapp.com/player');
	
	socket.on('con', function(data) {
		var msg = data.message;
		$('#message').text(msg);
	});

});