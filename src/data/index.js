import img1 from 'assets/img/Ubr.jpg';
import prev1 from 'assets/img/preview/Ubr.jpg';
import img2 from 'assets/img/Uristar.jpg';
import prev2 from 'assets/img/preview/Uristar.jpg';
import img3 from 'assets/img/Barber/Main.jpg';
import prev3 from 'assets/img/preview/Barber.jpg';
import img4 from 'assets/img/Zdoba.jpg';
import prev4 from 'assets/img/preview/Zdoba.jpg';
import img5 from 'assets/img/Alcotek/Main.jpg';
import prev5 from 'assets/img/preview/Alcotek.jpg';
import img6 from 'assets/img/Zvorota.jpg';
import prev6 from 'assets/img/preview/Zvorota.jpg';
import img7 from 'assets/img/Domokomplekt.jpg';
import prev7 from 'assets/img/preview/Domokomplekt.jpg';
import img8 from 'assets/img/Forum.jpg';
import prev8 from 'assets/img/preview/Forum.jpg';
import img9 from 'assets/img/InterStroy.jpg';
import prev9 from 'assets/img/preview/InterStroy.jpg';
import img10 from 'assets/img/PrimeVertical/Main.jpg';
import prev10 from 'assets/img/preview/PrimeVertical.jpg';
import img11 from 'assets/img/PlayHouse.jpg';
import prev11 from 'assets/img/preview/PlayHouse.jpg';
import img12 from 'assets/img/SportMask.jpg';
import prev12 from 'assets/img/preview/SportMask.jpg';
import img13 from 'assets/img/LPT/Main.jpg';
import prev13 from 'assets/img/preview/LPT.jpg';
import img14 from 'assets/img/Daria.jpg';
import prev14 from 'assets/img/preview/Daria.jpg';
import img15 from 'assets/img/Ropamo/Main.jpg';
import prev15 from 'assets/img/preview/Ropamo.jpg';
import img16 from 'assets/img/Avicena/Main.jpg';
import prev16 from 'assets/img/preview/Avicena.jpg';
import img17 from 'assets/img/Glagol/Main.jpg';
import prev17 from 'assets/img/preview/Glagol.jpg';
import img18 from 'assets/img/HouseCanada.jpg';
import prev18 from 'assets/img/preview/HouseCanada.jpg';
import img19 from 'assets/img/Token.jpg';
import prev19 from 'assets/img/preview/Token.jpg';

const skills = [
	{ id: "s123",
		skill: "HTML5",
		rate : 90
	},
	{ id: "t234",
		skill: "CSS3",
		rate : 90
	},
	{ id: "9fff",
		skill: "SCSS",
		rate : 90
	},
	{ id: "m342",
		skill: "BEM",
		rate : 90
	},
	{ id: "tr12",
		skill: "Bootstrap",
		rate : 60
	},
	{ id: "p453",
		skill: "Materialize.css",
		rate : 50
	},
	{ id: "sp90",
		skill: "JS",
		rate : 50
	},
	{ id: "23ud",
		skill: "jQuery",
		rate : 50
	},
	{ id: "od34",
		skill: "React",
		rate : 40
	},
	{ id: "pw32",
		skill: "Git",
		rate : 40
	},
	{ id: "pw3242",
		skill: "Webpack",
		rate : 50
	},
	{ id: "pw32100",
		skill: "Gulp",
		rate : 50
	}
	
]

const works = [
  {
		id: "19wer",
		img: img19,
		preview: prev19,
		shape: 1,
		type: "Лендинг",
		name: "В разработке",
		metods: [
		'Резиновая верстка 1920рх 1200рх',
		'Слайдеры, анимация'
		],
		source: 'http://worker.zz.mu/Token/ '
	},
	{
		id: "1wer",
		img: img1,
		preview: prev1,
		shape: 1,
		type: "Лендинг",
		name: "UBR консалт",
		metods: [
		'Фиксированная верстка',
		],
		source: 'http://ubrconsalt.ru/ '
	},
	{
		id: "2wer",
		img: img2,
		preview: prev2,
		shape: 1,
		type: "Лендинг",
		name: "Юристар ",
		metods: [
		'Фиксированная верстка',
		],
		source: 'http://www.yuristar.ru/ '
	},
	{
		id: "3wer",
		img: img3,
		preview: prev3,
		shape: 2,
		type: "Сайт-магазин",
		name: "Веселый цирюльник",
		metods: [
		'Адаптивная верстка',
		],
		source: 'http://www.vc-pro.ru'
	},
	{
		id: "4wer",
		img: img4,
		preview: prev4,
		shape: 2,
		type: "Сайт",
		name: "Zdoba микс",
		metods: [
		'Редизайн сайта',
		'Адаптивная верстка',
		],
		source: 'https://zdoba-mix.ru'
	},
	{
		id: "5wer",
		img: img5,
		preview: prev5,
		shape: 2,
		type: "Сайт",
		name:  "Alcotek",
		metods: [
		'Редизайн сайта',
		'Адаптивная верстка',
		],
		source: 'https://www.alcotek.ru'
	},
	{
		id: "6wer",
		img: img6,
		preview: prev6,
		shape: 1,
		type: "Лендинг",
		name: "Zворота",
		metods: [
		'Фиксированая верстка сайта'
		],
		source: 'http://zvorota.ru/'
	},
	{
		id: "7wer",
		img: img7,
		preview: prev7,
		shape: 2,
		type: "Сайт компании",
		name: "Домокомплект",
		metods: [
		'Фиксированая верстка сайта',
		'анимация в виде выплывающих блоков'
		],
		source: 'http://domokomplekt.biz/'
	},
	{
		id: "8wer",
		img: img8,
		preview: prev8,
		shape: 1,
		type: "Лендинг",
		name: "Forum Team",
		metods: [
		'Фиксированая верстка сайта'
		],
		source: 'http://forum.team/'
	},
	{
		id: "9wer",
		img: img9,
		preview: prev9,
		shape: 1,
		type: "Лендинг",
		name: "ФПК строй",
		metods: [
		'Фиксированая верстка ',

		],
		source: 'http://vorota-1.ru/'
	},
	{
		id: "10wer",
		img: img10,
		preview: prev10,
		shape: 2,
		type: "Сайт компании",
		name: " Prime Vertical",
		metods: [
		'Bootstrap 3',
		'Адаптивная верстка',
		'Подключение плагинов'
		],
		source: 'http://pv-mdd.ru/'
	},
	{
		id: "11wer",
		img: img11,
		preview: prev11,
		shape: 1,
		type: "Лендинг",
		name: "ИгроДом",
		metods: [
		'Адаптивная верстка',
		'адаптация без дизайна',
		'валидация форм'
		],
		source: 'http://test5.chumak.pro/'
	},
	{
		id: "12wer",
		img: img12,
		preview: prev12,
		shape: 1,
		type: "Лендинг",
		name: " СпортМаск",
		metods: [
		'Фиксированая верстка',
		'слайдер  анимация ',
		],
		source: ''
	},
	{
		id: "13wer",
		img: img13,
		preview: prev13,
		shape: 2,
		type: "Сайт-магазин",
		name: " ЛТП-Электро",
		metods: [
		'Фиксированая верстка',
		],
		source: 'http://ltp-electro.ru/'
	},
	{
		id: "14wer",
		img: img14,
		preview: prev14,
		shape: 2,
		type: "Сайт",
		name: "Сайт ясновидящей Дарьи Светлой",
		metods: [
		'Фиксированная верстка',
		],
		source: 'http://daria-svetlaya.ru/ '
	},
	{
		id: "15wer",
		img: img15,
		preview: prev15,
		shape: 2,
		type: "Сайт",
		name: "Юридическая компания",
		metods: [
		'Фиксированная верстка',
		],
		source: 'http://ropamo.ru/'
	},
	{
		id: "16wer",
		img: img16,
		preview: prev16,
		shape: 2,
		type: "Сайт",
		name: 'Медцентр "Авиценна"',
		metods: [
		'Фиксированная верстка',
		],
		source: 'http://www.aviclinic.ru/'
	},
	{
		id: "17wer",
		img: img17,
		preview: prev17,
		shape: 2,
		type: "Сайт",
		name: "Глагол",
		metods: [
		'Фиксированная верстка',
		],
		source: 'https://gla-gol.ru/'
	},
	{
		id: "18wer",
		img: img18,
		preview: prev18,
		shape: 1,
		type: "Лендинг",
		name: " каркасный дом",
		metods: [
		'Фиксированная верстка',
		],
		source: 'http://ssz.ru/'
	},
	
 
]

export  { skills, works};