

$(document).ready(function() {
	$('#tasks-form').on('submit', function(e){
		e.preventDefault();
		var $toDo=$('#tasks-form input').val();
		console.log($toDo);
		$('#tasks-form input').val('');
		$('ul').append('<li>'+$toDo+'<span>        X</span></li>');	
	});
	$('ul').on('click', 'span', function(){
			$(this).parent().remove();
		});
});