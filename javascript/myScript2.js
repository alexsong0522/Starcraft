

$(document).ready(function(){


	$('#picBox').hide();
	$('.sideMenuPic').hide();



	$('.buttonIt').hover(function(){

		$('#leftSide').animate({'width': '22%'}, {duration: 500, queue: false});
		$('#rightSide').animate({'width': '77%'}, {duration: 500, queue: false});
		

	}, function(){
   

   		$('#leftSide').animate({'width': '10%'}, {duration: 500, queue: false});
		$('#rightSide').animate({'width': '89%'}, {duration: 500, queue: false});


	});

	$('#B1').hover(function(){
          $("#B1Link").html("About");

 


	}, function(){
				 $("#B1Link").html("");


	});

	

	$('#B2').hover(function(){
          $("#B2Link").html("Terran");
          $('#picBox1').show();
          $('#picBox1Pic').show();




	}, function(){
		 $("#B2Link").html("");
         $('#picBox1').hide();
          $('#picBox1Pic').hide();




	});

	

	$('#B3').hover(function(){
          $("#B3Link").html("Zerg");
          $('#picBox2').show();
          $('#picBox2Pic').show();


	}, function(){
		 $("#B3Link").html("");
         $('#picBox2').hide();
         $('#picBox2Pic').hide();




	});

		$('#B4').hover(function(){
          $("#B4Link").html("Protoss");
          $('#picBox3').show();
          $('#picBox3Pic').show();


	}, function(){
		 $("#B4Link").html("");
         $('#picBox3').hide();
         $('#picBox3Pic').hide();




	});
			$('#B5').hover(function(){
          $("#B5Link").html("Starcraft Player");
 


	}, function(){
				 $("#B5Link").html("");


	});









});