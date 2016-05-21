$(document).ready(function(){

	var accessories = $('.accessories');
	var dropPlace 	= $('#picture');
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
});
