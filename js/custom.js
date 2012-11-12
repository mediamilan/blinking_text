$(function(){
	$bling_txt = function($id){
		setInterval(function() 
			{
				$($id).css({
					'color' : '#ffff00'
				});
				
				setTimeout(function(){
					$($id).css({
						'color' : '#ff00cc'
					});
				}, 500);
				
				setTimeout(function(){
					$($id).css({
						'color' : '#00ff00'
					});
				}, 1000);
				
				setTimeout(function(){
					$($id).css({
						'color' : '#00ffff'
					});
				}, 1500);
				
			}, 2000
		); // every 1 second
	}
	$bling_txt('.bling_txt');
	
});