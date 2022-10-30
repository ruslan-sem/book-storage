const books = [{
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },{
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },{
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  }
]
const listEl = document.querySelector("#root")

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const title = document.createElement('h1');
title.textContent = 'Library';
title.classList = 'main-title';
const ul = document.createElement('ul');
ul.classList.add("list")
const button = document.createElement('button');
button.classList.add("btn")
button.textContent = 'Add book';

button.addEventListener('click', addBook)

div1.classList.add("item")
div2.classList.add("elem")

listEl.append(div1, div2)
div1.append(title, ul, button)

function renderList() {
 const bookList = books.map(({id,title}) => ` <li id=${id}>
      <p class="title">${title}</p>
      <button type="button" class="edit">Edit</button><button type="button" class="delete">Delete</button>
    </li>`).join('')
    ul.insertAdjacentHTML("beforeend", bookList);
    const bookName = document.querySelectorAll('.title');
    
    bookName.forEach((el) => el.addEventListener('click',renderPreview))
}
renderList()
function renderPreview(evt) {
    const serch = books.find((el) => el.title === evt.currentTarget.textContent)
   div2.innerHTML=''
    div2.insertAdjacentHTML("beforeend",createPreviewMarkup(serch))
}

function createPreviewMarkup({id,title,author,img,plot}){
    const currentBook = ` <div data-book=${id}>
    <h2>${title}</h2>
    <p>${author}</p>
    <img src="${img}" alt="${title}">
    <p>${plot}</p>
</div>`;
     return currentBook
}

function addBook() {
    div2.insertAdjacentHTML("beforeend",creatFormMarkup())
}
function creatFormMarkup() {
    const addForm = `<form class="form">
      <label>Title:<input type="text" /></label>
      <label>Author:<input type="text" /></label>
      <label>Img:<input type="text" /></label>
      <label>Plot:<input type="text" /></label>
      <button>Save</button>
    </form>`
    return addForm
}