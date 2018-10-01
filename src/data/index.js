import img1 from 'assets/img/Ubr.jpg';
import img2 from 'assets/img/Uristar.jpg';
import img3 from 'assets/img/Barber/Main.jpg';
import img3_1 from 'assets/img/Barber/About.jpg';
import img3_2 from 'assets/img/Barber/Action.jpg';
import img3_3 from 'assets/img/Barber/Category.jpg';
import img3_4 from 'assets/img/Barber/Contact.jpg';
import img3_5 from 'assets/img/Barber/Unit.jpg';
import img3_6 from 'assets/img/Barber/News.jpg';
import img4 from 'assets/img/Zdoba.jpg';
import img5 from 'assets/img/Alcotek/Main.jpg';
import img5_1 from 'assets/img/Alcotek/Advertise.jpg';
import img5_2 from 'assets/img/Alcotek/Contact.jpg';
import img5_3 from 'assets/img/Alcotek/Gallery.jpg';
import img5_4 from 'assets/img/Alcotek/Page.jpg';
import img6 from 'assets/img/Zvorota.jpg';
import img7 from 'assets/img/Domokomplekt.jpg';
import img8 from 'assets/img/Forum.jpg';
import img9 from 'assets/img/InterStroy.jpg';
import img10 from 'assets/img/PrimeVertical/Main.jpg';
import img10_1 from 'assets/img/PrimeVertical/About.jpg';
import img10_2 from 'assets/img/PrimeVertical/Learn.jpg';
import img10_3 from 'assets/img/PrimeVertical/Project.jpg';
import img10_4 from 'assets/img/PrimeVertical/Tehnology.jpg';
import img11 from 'assets/img/PlayHouse.jpg';
import img12 from 'assets/img/SportMask.jpg';
import img13 from 'assets/img/LPT/Main.jpg';
import img13_1 from 'assets/img/LPT/Catalog.jpg';
import img13_2 from 'assets/img/LPT/Category.jpg';
import img13_3 from 'assets/img/LPT/Inner.jpg';
import img14 from 'assets/img/Daria.jpg';
import img15 from 'assets/img/Ropamo/Main.jpg';
import img15_1 from 'assets/img/Ropamo/Inner.jpg';
import img16 from 'assets/img/Avicena/Main.jpg';
import img16_1 from 'assets/img/Avicena/Catalog.jpg';
import img16_2 from 'assets/img/Avicena/Inner.jpg';
import img17 from 'assets/img/Glagol/Main.jpg';
import img17_1 from 'assets/img/Glagol/Catalog.jpg';
import img17_2 from 'assets/img/Glagol/Unit.jpg';
import img17_3 from 'assets/img/Glagol/Unit_inner.jpg';
import img18 from 'assets/img/HouseCanada.jpg';
import img19 from 'assets/img/Token.jpg';

const skills = [
	{ id: "s123",
		skill: "HTML5",
		rate : 8
	},
	{ id: "t234",
		skill: "CSS3",
		rate : 8
	},
	{ id: "9fff",
		skill: "SCSS",
		rate : 7
	},
	{ id: "m342",
		skill: "BEM",
		rate : 7
	},
	{ id: "tr12",
		skill: "Bootstrap",
		rate : 5
	},
	{ id: "p453",
		skill: "Materialize.css",
		rate : 4
	},
	{ id: "sp90",
		skill: "JS",
		rate : 4
	},
	{ id: "23ud",
		skill: "jQuery",
		rate : 4
	},
	{ id: "od34",
		skill: "React",
		rate : 3
	},
	{ id: "pw32",
		skill: "Git",
		rate : 5
	},
	{ id: "pw3242",
		skill: "Webpack",
		rate : 5
	},
	{ id: "pw32100",
		skill: "Gulp",
		rate : 5
	}
	
]

const works = [
  {
		id: "19wer",
		img: img19,
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
		inner: [
			img3,
			img3_1,
			img3_2,
			img3_3,
			img3_4,
			img3_5,
			img3_6
		],
		shape: 2,
		type: "Сайт-магазин",
		name: "Веселый церюльник",
		metods: [
		'Адаптивная верстка',
		],
		source: 'http://www.vc-pro.ru'
	},
	{
		id: "4wer",
		img: img4,
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
		inner: [
			img5,
			img5_1,
			img5_2,
			img5_3,
			img5_4
		],
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
		inner: [
			img10,
			img10_1,
			img10_2,
			img10_3,
			img10_4
		],
		shape: 2,
		type: "Сайт компании",
		name: " Prime Vertical",
		metods: [
		'Адаптивная верстка внутренних страниц',
		'Bootstrap 3',
		'Подключение и настройка плагинов'
		],
		source: 'http://pv-mdd.ru/'
	},
	{
		id: "11wer",
		img: img11,
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
		inner: [
			img13,
			img13_1,
			img13_2,
			img13_3,

		],
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
		inner: [
			img15,
			img15_1
		],
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
		inner: [
			img16,
			img16_1,
			img16_2
		],
		shape: 2,
		type: "Сайт",
		name: 'Медицинский центр "Авиценна"',
		metods: [
		'Фиксированная верстка',
		],
		source: 'http://www.aviclinic.ru/'
	},
	{
		id: "17wer",
		img: img17,
		inner: [
			img17,
			img17_1,
			img17_2,
			img17_3
		],
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
		shape: 1,
		type: "Лендинг",
		name: " Компания по строительству каркасных домов",
		metods: [
		'верстка',
		],
		source: 'http://ssz.ru/'
	},
	
 
]

export  { skills, works};