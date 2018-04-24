var count = 0;
var words = ["persistent", "hard-working","passionate"];
var colors = ["#1aff68", "#38fff0","#ff1f36"];
var current = "website_mockup/vuasiawok/vuasiawok_index.html";

$(document).ready(function(){	
	window.setInterval(function repeating_words(){
		
		$("#repeat_words").fadeOut(function(){
			$(this).text(words[count]).fadeIn();
			$(this).css("color",colors[count]);
			count++;
			if(count == 3){
				count = 0;
			}
		});
	}, 2000);
	
	$("#workList li").click(function(){
		var clickedText = $(this).text();
		switch(clickedText){
			case "Vu Asia Wok v1": current = 'website_mockup/vuasiawok/vuasiawok_index.html';
								$("#workContent").load('website_mockup/vuasiawok/vuasiawok_index.html');
								break;
			case "Vu Asia Wok v2": current = 'website_mockup/vuasiawok2/vuasiawok2_index.html';
								$("#workContent").load('website_mockup/vuasiawok2/vuasiawok2_index.html');
								break;
			case "Futurera"   : current = 'website_mockup/futurera/futurera_index.html';
								$("#workContent").load('website_mockup/futurera/futurera_index.html');
							    break;
			case "Burger Website": current = 'website_mockup/burgerWebsite/burger_index.html';
								$("#workContent").load('website_mockup/burgerWebsite/burger_index.html');
								break;
			case "OLAP": current = 'website_mockup/olap/olap_index.html';
						 $('#workContent').load('website_mockup/olap/olap_index.html');
						break;
		}
	});
	
	$("#workContent").load(current);
});