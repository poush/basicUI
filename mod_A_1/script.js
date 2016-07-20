var i = 30;

function timer(){
	if(i>=1)
	{
		i--;
		$('#timer h1 span').html(i);

		if(i<6)
		    jQuery("#block").animate({
		            backgroundColor: "#abcdef"
		    }, 1500 );
	}
}

$('#timer h1').draggable({ 
	revert: 'invalid',
	drag: function(){
		var width = $('.droppable').width();
		$('#timer h1').width(width/2);
	}
});
$('.droppable').droppable({
	accept: '#timer h1',
	drop: function(){
		$('#timer h1').css('background-color', 'transparent');
		$('.droppable span').html('');
		setInterval(timer,1000);
		$('#timer').css('background-color', 'transparent');
		$('#timer').css('z-index', '-2');
		$('.p-p').draggable({
			revert: 'invalid',
			start: function(){
				// $(this).css('width','200px');
				// $(this).css('height','200px');
			}
		});
		$('.p-p').css('z-index',10);
		$('#canvas span#1').droppable({
			accept: '[data-block="1"]',
			drop: function(event, ui){

				$(this).append(ui.draggable);
				$(ui.draggable).removeAttr('style');
				showPop(1);
			}
		});

		$('#canvas span#2').droppable({
			accept: '[data-block="2"]',
			drop: function(event, ui){

				$(this).append(ui.draggable);
				$(ui.draggable).removeAttr('style');
				showPop(1);

			}
		});
			$('#canvas span#3').droppable({
			accept: '[data-block="3"]',
			drop: function(event, ui){

				$(this).append(ui.draggable);
				$(ui.draggable).removeAttr('style');
				showPop(1);

			}
		});

		$('#canvas span#4').droppable({
			accept: '[data-block="4"]',
			drop: function(event, ui){

				$(this).append(ui.draggable);
				$(ui.draggable).removeAttr('style');
				showPop(1);

			}
		});
	}
});

function showPop(type){

	var pop = $('#pop');
	pop.removeClass('success');

	if(type == 1)
		pop.addClass('success');

	pop.html('Good Move!!').toggleClass('show');
	setTimeout(function(){
		$('#pop').html('Good Move!!').toggleClass('show');
	},2000);

}



