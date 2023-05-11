console.log('JS WarHeroes OPEN');
ID('home').onclick = () => {window.location.href='index.html';};
ONLOAD(() => {
	function WarHeroesBlocks(block , MASS) {
		var SORT = [];
		for(var n = 0; n <= MASS.length-1; n++) {SORT.push(MASS[n][1]);}
		SORT = SORT.sort();
		for(var n = 0; n <= SORT.length-1; n++) {
			for(var num = 0; num <= MASS.length-1; num++) {
				if(SORT[n] == MASS[num][1]) {SORT[n] = [MASS[num][0], MASS[num][1]];}
			}
		}
		MASS = SORT;
		//
		var BlockName = 'block_name';
		var IMG = 'img';
		for(var n = 0; n <= MASS.length-1; n++) {
			block.innerHTML = block.innerHTML+'<div class="'+BlockName+'"><div class="'+IMG+'"></div><div class="name">'+MASS[n][1]+'</div></div>';
		}
		var ALL = document.querySelectorAll('.'+BlockName);
		var bool = true;
		for(var n = 0; n <= ALL.length-1; n++) {
			//
			Observer(ALL[n], true, [ALL[n].querySelector('.'+IMG), MASS[n][0]], (data) => {
				data[0].innerHTML = '<img src="png/WarHeroes/'+data[1]+'">';
			});
			//
			if(bool) {
				ALL[n].style.backgroundColor = 'rgb(255, 184, 0, 20%)';
				ALL[n].querySelector('.'+IMG).style.border = '3px solid #FFB800';
				ALL[n].querySelector('.'+IMG).style.boxShadow = '0px 0px 10px #FFB800';
			} else {
				ALL[n].style.backgroundColor = 'rgb(217, 45, 32, 20%)';
				ALL[n].querySelector('.'+IMG).style.border = '3px solid #D92D20';
				ALL[n].querySelector('.'+IMG).style.boxShadow = '0px 0px 10px #D92D20';
			}

			//
			bool = !bool;
		}
	}
	WarHeroesBlocks(ID('WarHeroes'), [
		['B1.jpg', 'Бежин Иван Яковлевич'],
		['B2.jpg', 'Сотников Алексей Иванович'],
		['B3.jpg', 'Дьячков Сергей Николаевич'],
		['B4.jpg', 'Иванов Иван Филиппович'],
		['B5.jpg', 'Веслободский Демьян Михайлович'],
		['B6.jpg', 'Панков Алексей Михайлович'],
		['B7.jpg', 'Ковалёв Николай Фёдорович'],
		['B8.jpg', 'Добринчук Григорий Тимофеевич'],
		['B9.jpg', 'Козлов Григорий Леонтьевич'],
		['B10.jpg', 'Кравченко Лидия Антоновна'],
		['B11.jpg', 'Кислов Семён Макарович'],
		['B12.jpg', 'Аксёнов Семён Тимофеевич'],
		['B13.jpg', 'Шайкин Роман Макарович'],
		['B14.jpg', 'Субботин Василий Иванович'],
		['B15.jpg', 'Захаренко Степан Максимович'],
		['B16.jpg', 'Огиенко Андрей Наумович'],
		['B17.jpg', 'Образцов Фёдор Илларионович'],
		['B18.jpg', 'Мухин Василий Михайлович'],
		['B19.jpg', 'Касаткин Григорий Николаевич'],
		['B20.jpg', 'Фролова Александра Ивановна'],
		['B21.jpg', 'Пономарёва Антонина Дмитриевна'],
		['B22.jpg', 'Мягков Георгий Иванович'],
		['B23.jpg', 'Овсянников Степан Егорович'],
		['B24.jpg', 'Пономарёв Николай Алексеевич'],
		['B25.jpg', 'Коровин Филипп Иванович'],
		['B26.jpg', 'Никишин Виктор Васильевич'],
		['B27.jpg', 'Трофим Пётр Фёдорович'],
		['B28.jpg', 'Соколов Владимир Анатольевич'],
		['B29.jpg', 'Чиргин Пётр Якубович'],
		['B30.jpg', 'Гребенщиков Егор Фёдорович'],
		['B31.jpg', 'Фомичёв Иван Яковлевич'],
		['B32.jpg', 'Кумаков Павел Васильевич'],
		['B33.jpg', 'Пономарёв Дмитрий Степанович'],
		['B34.jpg', 'Мягкова Тамара Ивановна'],
		['B35.jpg', 'Репин Михаил Иванович'],
		['B36.jpg', 'Пиндюрин Алексей Иванович'],
	]);
});