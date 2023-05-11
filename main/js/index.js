console.log('JS index OPEN');
	// Кнопка
ID('WarHeroes').onclick = () => {window.location.href='WarHeroes.html';};
var test = 123;
ONLOAD(() => {
//
	// Адаптивные фото
function IMGadaption(MASS) {
	for(var n = 0; n <= MASS.length-1; n++) {
		Observer(ID(MASS[n][0]), true, MASS[n], (data) => {
			ID(data[0]).innerHTML = '<img src="png/topics/'+data[1]+'">';
		});

	}
}
IMGadaption([
	['img_1', 'may91.jpg'],
	['img_2', 'kart.jpg'],
	['img_3', 'flak.jpg'],
	['img_4', 'piple.jpg'],
	['img_5', 'overlord.jpg'],
	['img_6', 'nrmndoprc.jpg'],
	['img_7', 'children.jpg'],
	['img_8', 'l2.jpg'],
	['img_9', 'fire.jpg'],
	['img_10', 'oow.jpg'],
	['img_11', 'kacha.jpg'],
	['img_12', 'prd.jpg'],
	['img_13', 'salut.jpg'],
	['img_14', 'memorial.jpg'],
	['img_15', 'red.jpg'],
	['img_16', 'table.jpg'],
	['img_17', 'oocr.jpg'],
	['img_18', 'mak.jpg']
]);
	// Кнопка открытия содержания
function ContentButton(BUTTON, OPEN, IdScroll, IMG, MASS) {
	var Length = MASS.length-1;  
	for(var n = 0; n <= Length; n++) {
		OPEN.innerHTML = OPEN.innerHTML+'<button id="'+(IdScroll+n)+'"><p>'+(n+1)+'.</p><p>'+MASS[n]+'</p></button>';
	}
	var blocks = document.querySelectorAll('.defeult_text');
	for(var n = 0; n <= Length; n++) {
		ID(IdScroll+n).onclick = (data) => {
			var CLICK = (data.view.document.activeElement).querySelectorAll('p')[1];
			for(var num = 0; num <= blocks.length-1; num++) {
				if(blocks[num].textContent == CLICK.textContent) {
					var TOP = 0;
					if(window.screen.width < lookWight) {
						TOP = ((blocks[num].offsetTop*window.screen.width) / lookWight);
					} else {
						TOP = (blocks[num].offsetTop);
					}
					window.scroll({
						top: TOP,
						left: 0,
						behavior: 'smooth'
					});
				}
			}
		};
	}
	//
	var bool = true;
	BUTTON.onclick = () => {
		//
		var HEIGHT = 0;
		function Interv() {
			var height = 0;
			for(var n = 0; n <= MASS.length-1; n++) {
				height += ID(IdScroll+n).offsetHeight;
			}
			HEIGHT = height;
			if(IMG.style.transform == 'rotate(180deg)') {
				OPEN.style.height = HEIGHT+'px';
			}
		}
		Interv();
		setInterval(Interv, 500);
		//
		if(bool) {
			OPEN.style.height = HEIGHT+'px';
			IMG.style.transform = 'rotate(180deg)';
		} else {
			OPEN.style.height = '0px';
			IMG.style.transform = 'rotate(0deg)';
		}
		bool = !bool;

	}
}
ContentButton(ID('button_content'), ID('open_content'), 'Scroll_', ID('content_arrow'), [
	'Праздник: 9 мая – День Победы',
	'История праздника. Как появился День Победы?',
	'Первый День Победы и Парад Победы',
	'Когда союзники высадились в Европе, где уже были войска СССР?',
	'Почему День Победы важен?',
	'Символы Дня Победы',
	'Георгиевская лента',
	'Вечный огонь',
	'Красная гвоздика',
	'Фронтовая каша',
	'Парад',
	'Салют',
	'Мемориалы в городах-героях',
	'Бессмертный полк',
	'Как отмечают? Традиции 9 мая',
	'Почему День Победы 9 мая?',
	'В каких странах отмечают День Победы?',
	'Когда празднуют День Победы в других странах?',
	'Символы Дня Победы в других странах',
	'День Победы, интересное видео'
]);





	// Показывать больше фоток в одном блоке
function IMGlotAnimation(MASS) {
	for(var n = 0; n <= MASS.length-1; n++) {
		Observer(ID(MASS[n][0]), true, MASS[n], (data) => {
			Animation(data, 3000);
		});
	}
	function Animation(mass, s) {
		var num = 2;
		//
		for(var n = 1; n < mass.length; n++) {
			ID(mass[0]).innerHTML = ID(mass[0]).innerHTML+'<img src="png/topics/'+mass[n]+'" id="'+(mass[0]+n)+'">';
			if(n !== 1) {
				ID(mass[0]+n).style.opacity = '0';
			}
		}
		Observer(ID(mass[0]), true, {}, () => {FUN();});
		function FUN() {
			setTimeout(() => {
				//
				if(num !== 1) {
					ID(mass[0]+(num-1)).style.opacity = '0';
				} else {
					ID(mass[0]+(mass.length-1)).style.opacity = '0';
				}
				ID(mass[0]+num).style.opacity = '1';
				//
				num+=1;
				if(num > mass.length-1) {
					num=1;
				}
				FUN();
			}, s);
		}
	}
}
IMGlotAnimation([
	['img_lot_1', 'prd/prd1.jpg', 'prd/prd3.jpg', 'prd/prd4.jpg', 'prd/prd7.jpg', 'prd/prd8.jpg'],
]);




	// Добавление видео на страницу
function OpenMP4(settings) {
	for(var n = 0; n <= settings.length-1; n++) {
		//
		ID(settings[n][0]).style.height = settings[n][2]+'px';
		//
		ID(settings[n][0]).style.background = 'url(png/preview/'+settings[n][1]+') center no-repeat';
		ID(settings[n][0]).style.backgroundSize = 'auto 100%';
		//
		ID(settings[n][0]).innerHTML = '<div><p></p></div>';
		Observer(ID(settings[n][0]), true, settings[n], (data) => {
			ID(data[0]).innerHTML = ID(data[0]).innerHTML+'<iframe width="100%" height="'+data[2]+'" src="'+data[3]+'" title="'+data[4]+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
		});
	}
}
OpenMP4([
	['mp4_1', 'P1.jpg', 480, 'https://www.youtube.com/embed/6sqiS4nPfIo', 'Первый Парад Победы 24 июня 1945 года на Красной Площади'],
	['mp4_2', 'P2.jpg', 480, 'https://www.youtube.com/embed/yaOvKvWUK6A', 'Берлинская наступательная операция – кинохроника и воспоминания очевидцев'],
	['mp4_3', 'P3.jpg', 480, 'https://www.youtube.com/embed/svJxvalguIM', '10 Фактов о Параде ПОБЕДЫ 1945'],
	['mp4_4', 'P4.jpg', 480, 'https://www.youtube.com/embed/M444sp7BoGc', 'Высадка в Нормандии | Документальный фильм Би-би-си'],
	['mp4_5', 'P5.jpg', 480, 'https://www.youtube.com/embed/HfYqtEky2Y4', 'Все, что нужно знать о ГЕОРГИЕВСКОЙ ЛЕНТЕ !'],
	['mp4_6', 'P6.jpg', 480, 'https://www.youtube.com/embed/iRvBxXA4eBU', 'Галилео. Вечный огонь'],
	['mp4_7', 'P7.jpg', 480, 'https://www.youtube.com/embed/3Y5HurvGouc', 'Парад в честь 75-летия Великой Победы'],
	['mp4_8', 'P8.jpg', 480, 'https://www.youtube.com/embed/zkT_1NG9KJQ', 'Салют в честь Дня Победы 9 мая 2022 года: прямая трансляция'],
	['mp4_9', 'P9.jpg', 480, 'https://www.youtube.com/embed/yX1F6gBSgFw', '10 самых известных мемориалов ВОВ'],
	['mp4_10', 'P10.jpg', 480, 'https://www.youtube.com/embed/9M0bSAvlt-4', 'Лев Лещенко - День Победы (9 мая)'],
	['mp4_11', 'P11.jpg', 480, 'https://www.youtube.com/embed/23ER6TEjeyg', '9 мая: история, которую нужно помнить'],
	['mp4_12', 'P12.jpg', 480, 'https://www.youtube.com/embed/UeJzY6fY4UE', 'День Победы в Европе'],
	['mp4_13', 'P13.jpg', 480, 'https://www.youtube.com/embed/5FFNMshdeOA', 'Почему в Европе День Победы празднуют 8 мая?'],
	['mp4_14', 'P14.jpg', 480, 'https://www.youtube.com/embed/kFIwyZofYnQ', 'Забытые факты о Дне Победы']
]);
//
	//ID('SCREEN').style.opacity = '1';
});