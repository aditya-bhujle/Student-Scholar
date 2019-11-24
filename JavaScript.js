var logCount = 0;
var logIDNum = 0;

$(document).ready(function(){
	$(window).on('resize', function(){
		if(window.innerWidth <= 991){ //Mobile to Tablet
			$("#nav-search").css("display", "none");
		}
		
		if(window.innerWidth <= 479){ //Mobile
		}
		if(window.innerWidth <= 767 && window.innerWidth > 479){ //Mobile Landscape
			
		}
		if(window.innerWidth <= 991 && window.innerWidth > 767){ //Tablet
			
		}
		if(window.innerWidth > 991){ //Desktop
			$("#nav-search").css("display", "flex");
			$('#nav-search').css("border-radius", "6px");
		}
	});
	
	$(document).mouseup(
		function(e){			
			// if the target of the click isn't the container nor a descendant of the container
			if($(e.target).closest($("#nav-search")).length === 0){
				hideSuggest();
			}
		}
	)
	
	//PCHS Tag in Search
	var $searchButton = $('.input-tag');
	var $searchX = $('.notif-icon.x');
	
	$('#nav-mobile-search').click(
		function(){
			if($('#nav-search').is(":visible"))
				$('#nav-search').css('display','none');						
			else
				$('#nav-search').css('display','flex');
		}
	)
	
	$('#nav-menu-button').click(
		function(){
			if($('#nav-menu').is(":visible")){
				$('#nav-menu').css('display','none');						
			}
			else
				$('#nav-menu').css('display','flex');
		}
	)
	
	//RED X BUTTON FUNCTION
		$searchButton.hover(
			function(){
				if(window.innerWidth > 991)
					$searchX.css('display','flex');
			},

			function(){
				if(window.innerWidth > 991)
					$searchX.hide();
			}
		);
		
		$('.block').hover(
			function(){
				if(window.innerWidth > 991){
					if($(this).children('.notif-icon.x'))
						$(this).children('.notif-icon.x').css('display', 'flex');
				}
			},

			function(){
				if(window.innerWidth > 991)
					$searchX.hide();
			}
		);

		$searchX.click(
			function(){
				if($(this).closest($('.x-div')).length != 0)
					$('.x-div').hide();
				else if($(this).closest($(".input-tag")).length != 0)
					$searchButton.html("+");
				else log("Parent is unknown");
			}	
		);
	
	$('#nav-input').keydown, $('#nav-input').keyup(
		function(){
			if($('#nav-input').val() != ''){
					showSuggest();
			}
			else{
					$('.nav-notif').hide();	
			 		hideSuggest();
			}
		}
	)
	
	$('.drop-down-parent').hover(
		function(){
			$(this).children('.drop-down').show();
		},
		function(){
			$(this).children('.drop-down').hide();
		}
	)
})

function log(logText){	
	$('.nav-notif').html(logText);
	$('.nav-notif').slideDown().delay(5000).slideUp();
}

/*
function log(logText){
	//if logCount>1 is true then .nav-notif moves down 100%
	if(logCount > 0){
		logCount ++;
		logIDNum ++;
		var logID = "navLog".concat(logIDNum);
		
		console.log("black " + logCount);
		
		//Add notif
		$('.nav-notif').css("transform", "translate(0px, 100%)"); //100% should be +100%
		$('.navbar').append("<div class= 'nav-notif a' id= '" + logID + "'>"+logText+"</div>");
		
		setTimeout(function(){ //Remove notif
			logCount --;
			console.log("Count--");
			$('#navLog'+logIDNum).remove();
		}, 3000);
	} else{
		logCount ++;
		console.log("blue " + logCount);
		$('.nav-notif').text(logText);
		//$('.nav-notif').slideDown( 300 ).delay(1000).slideUp( 300 );
		$('.nav-notif').show();
		setTimeout(
			function(){
				logCount --; 
				console.log("Count--");
				$('.nav-notif').hide();
			}, 3000);
		//Delay 300+1000+300, then logCount --;
	}
}

function logSort(){
	
}*/

function hideSuggest(){
	$('#nav-suggest').css("display", "none");
	if(window.innerWidth > 479){	
		$('#nav-search').css("border-bottom-left-radius", "6px");	
		$('#nav-search').css("border-bottom-right-radius", "6px");	
	}	
}
	
function showSuggest(){
	$('#nav-suggest').css("display", "grid");
	$('#nav-search').css("border-bottom-left-radius", "0px");	
	$('#nav-search').css("border-bottom-right-radius", "0px");
}