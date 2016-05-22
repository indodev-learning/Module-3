$(document).ready(function(){

	var accessories = $('.accessories');
	var dropPlace 	= $('#picture');
	var dropImage 	= $('#drop');
	var self 		= this;


	// Draggable the accessories
	accessories.draggable({

		helper : 'clone',
		revert : function(e){

			if(e == false){

				return true;
			}
		}
	});

	// Set place to drop the draggable images
	dropPlace.droppable({

		drop : function(e, ui){

			$(this).append($(ui.draggable).clone());
			$("#picture .dropped").addClass("item");

			$(".item").removeClass("ui-draggable product");
			$(".item").draggable({

				containment: 'parent',
				grid: [150,150]
			});
		}
	});

	dropImage.on('dragenter', function (e){

		e.stopPropagation();
		e.preventDefault();

		$(this).css('border', '2px solid #0B85A1');
		$(this).css('background', 'limegreen');
	});

	dropImage.on('dragover', function (e) {

		e.stopPropagation();
		e.preventDefault();

		$(this).css('background', 'limegreen');
	});

	dropImage.on('dragleave', function (e) {

		e.stopPropagation();
		e.preventDefault();

		$(this).css('background', 'white');
	});

	dropImage.on('drop', function (e) {

		$(this).css('border', '2px dotted #0B85A1');
		$(this).css('color', 'white');
		$(this).text('Dropped !');

		e.preventDefault();

		var image  = e.originalEvent.dataTransfer.files,
			img    = image[0],
			reader = new FileReader();

		reader.addEventListener('load', function(e){


			dropPlace.append("<img src='"+e.target.result+"'></img>");
		});

		reader.readAsDataURL(img);
	});
});
