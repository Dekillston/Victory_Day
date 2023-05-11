console.log('JS general OPEN');
//
function ID(string) {return document.getElementById(string);}
function IDall(string) {return document.querySelectorAll('#'+string);}
// Используемые переменные которые используется в этой и други Функциях
var lookWight = 1000;
// Функция отслеживания
function Observer(block, BOOL, DATA, FUN) {
	var bool = !BOOL;
	let observer = new IntersectionObserver(function (entries) {
    	entries.forEach(function (entry) {
    		if(bool == !BOOL) {
    			if(entry.isIntersecting !== BOOL) {return}
    			bool = BOOL;
    			FUN(DATA);
    		}
    	});
	});
	observer.observe(block);	
}
	// Уменьшает блок под ширину 
function ZOOMscreen(MASS, s) {
	var screen = 0;
	setInterval(() => {
		if(screen == window.screen.width) {return}
		screen = window.screen.width;
		for(var n = 0; n <= MASS.length-1; n++) {
			if(MASS[n][1] >= screen) {
				MASS[n][0].style.zoom = ((100*screen)/MASS[n][2])-((MASS[n][1]-MASS[n][2])/10)+'%';
			} else {
				MASS[n][0].style.zoom = '100%';
			}
		}	
	}, s);
}


	// Функции
ZOOMscreen([
	[ID('look'), lookWight, lookWight],
	[ID('Victory_Day'), 750, 750]
],1);





// Уменьшает ширину по экрану	
function WidthScreen(MASS , s) {
	var screen = 0;
	setInterval(() => {
		if(screen == window.screen.width) {return}
		screen = window.screen.width;
		for(var n = 0; n <= MASS.length-1; n++) {
			if(screen <= MASS[n][2]) {
				MASS[n][0].style.minWidth = MASS[n][2]+'px';
			} else if(screen <= MASS[n][1]) {
				MASS[n][0].style.minWidth = screen+'px';
			} else {
				MASS[n][0].style.minWidth = MASS[n][1]+'px';
			}
		}	
	}, s);
}
WidthScreen([
	[ID('img_emblem'), ID('img_emblem').offsetWidth, lookWight]
],1);


// Живой фон
function LiveBackground(SCREEN, IMG) {
	if(window.screen.width > lookWight) {
		window.addEventListener('mousemove', function(e) {
    		var X = (50-(4-((e.clientX*4)/(SCREEN.offsetWidth/2))));
    		var Y = (50-(8-((e.clientY*8)/(SCREEN.offsetHeight/2))));
    		IMG.style.transform = 'translate(-'+X+'%, -'+Y+'%)';
		});
	}
}
var LiveB = ID('live_background');
LiveBackground(LiveB, LiveB.querySelector('img'));





function ONLOAD(FUN) {
	window.onload = () => {
	FUN();
	ID('SCREEN').style.opacity = '1';
	}
}