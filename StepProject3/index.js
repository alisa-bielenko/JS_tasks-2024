"use strict";

const DATA = [
    {
        "first name": "Олексій",
        "last name": "Петров",
        photo: "./img/trainers/trainer-m1.jpg",
        specialization: "Басейн",
        category: "майстер",
        experience: "8 років",
        description:
            "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
        "first name": "Марина",
        "last name": "Іванова",
        photo: "./img/trainers/trainer-f1.png",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
        "first name": "Ігор",
        "last name": "Сидоренко",
        photo: "./img/trainers/trainer-m2.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
        "first name": "Тетяна",
        "last name": "Мороз",
        photo: "./img/trainers/trainer-f2.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "10 років",
        description:
            "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
    },
    {
        "first name": "Сергій",
        "last name": "Коваленко",
        photo: "./img/trainers/trainer-m3.jpg",
        specialization: "Тренажерний зал",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
    },
    {
        "first name": "Олена",
        "last name": "Лисенко",
        photo: "./img/trainers/trainer-f3.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "4 роки",
        description:
            "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
    },
    {
        "first name": "Андрій",
        "last name": "Волков",
        photo: "./img/trainers/trainer-m4.jpg",
        specialization: "Бійцівський клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
    },
    {
        "first name": "Наталія",
        "last name": "Романенко",
        photo: "./img/trainers/trainer-f4.jpg",
        specialization: "Дитячий клуб",
        category: "спеціаліст",
        experience: "3 роки",
        description:
            "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
    },
    {
        "first name": "Віталій",
        "last name": "Козлов",
        photo: "./img/trainers/trainer-m5.jpg",
        specialization: "Тренажерний зал",
        category: "майстер",
        experience: "10 років",
        description:
            "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
    },
    {
        "first name": "Юлія",
        "last name": "Кравченко",
        photo: "./img/trainers/trainer-f5.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "4 роки",
        description:
            "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
    },
    {
        "first name": "Олег",
        "last name": "Мельник",
        photo: "./img/trainers/trainer-m6.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "12 років",
        description:
            "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
    },
    {
        "first name": "Лідія",
        "last name": "Попова",
        photo: "./img/trainers/trainer-f6.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
    },
    {
        "first name": "Роман",
        "last name": "Семенов",
        photo: "./img/trainers/trainer-m7.jpg",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
    },
    {
        "first name": "Анастасія",
        "last name": "Гончарова",
        photo: "./img/trainers/trainer-f7.jpg",
        specialization: "Басейн",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
    },
    {
        "first name": "Валентин",
        "last name": "Ткаченко",
        photo: "./img/trainers/trainer-m8.jpg",
        specialization: "Бійцівський клуб",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
    },
    {
        "first name": "Лариса",
        "last name": "Петренко",
        photo: "./img/trainers/trainer-f8.jpg",
        specialization: "Дитячий клуб",
        category: "майстер",
        experience: "7 років",
        description:
            "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
    },
    {
        "first name": "Олексій",
        "last name": "Петров",
        photo: "./img/trainers/trainer-m9.jpg",
        specialization: "Басейн",
        category: "майстер",
        experience: "11 років",
        description:
            "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
        "first name": "Марина",
        "last name": "Іванова",
        photo: "./img/trainers/trainer-f9.jpg",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
        "first name": "Ігор",
        "last name": "Сидоренко",
        photo: "./img/trainers/trainer-m10.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
        "first name": "Наталія",
        "last name": "Бондаренко",
        photo: "./img/trainers/trainer-f10.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "8 років",
        description:
            "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
    },
    {
        "first name": "Андрій",
        "last name": "Семенов",
        photo: "./img/trainers/trainer-m11.jpg",
        specialization: "Тренажерний зал",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
    },
    {
        "first name": "Софія",
        "last name": "Мельник",
        photo: "./img/trainers/trainer-f11.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "6 років",
        description:
            "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
    },
    {
        "first name": "Дмитро",
        "last name": "Ковальчук",
        photo: "./img/trainers/trainer-m12.png",
        specialization: "Дитячий клуб",
        category: "майстер",
        experience: "10 років",
        description:
            "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
    },
    {
        "first name": "Олена",
        "last name": "Ткаченко",
        photo: "./img/trainers/trainer-f12.jpg",
        specialization: "Бійцівський клуб",
        category: "спеціаліст",
        experience: "5 років",
        description:
            "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
    },
];

//УСІ ГЛОБАЛЬНІ ЗМІННІ ДЛЯ ПОШУКУ ЕЛЕМЕНТІВ ==================
const trainerCardContainer = document.querySelector(".trainers-cards__container");
const trainerCardTemplate = document.querySelector("#trainer-card").content;
const sortedForm = document.querySelector(".sorting");
const filterForm = document.querySelector(".sidebar");
const sortedButtons = document.querySelectorAll(".sorting__btn");
const modalTemplateElement = document.querySelector("#modal-template").content;
const showMoreButton = document.querySelector(".trainer__show-more");
const filterSubmit = document.querySelector(".filters__submit");

//НОВИЙ МАСИВ "МАР" ДЛЯ ЗБЕРІГАННЯ АЙДІ-ШОК КАРТОК ДЛЯ ВІКРИТТЯ МОДАЛЬНОГО ВІКНА ЗІ ЗБЕРЕЖЕННЯМ ПОРЯДКУ ЗНАЧЕННЬ
const idToCardMap = new Map();

//НОВИЙ МАСИВ ДЛЯ ЗБЕРІГАННЯ БАЗОВОГО + ДОДАНО АЙДІ ДЛЯ КОЖНОГО ЗАПИСУ
const dataWithId = DATA.map((item, index) => ({ id: index, ...item }));

//ІНДЕКС ДЛЯ УНІКАЛЬНИХ ЕЛЕМЕНТІВ НА КНОПКАХ ФІЛЬТРАЦІЇ
let index = 0;

//МАСИВ, ЯКИЙ ЗБЕРІГАЄ НА ПОЧАТКУ У СОБІ ЗНАЧЕННЯ МАСИВУ АЛЕ З АЙДІ-ШНИКАМИ
let filteredData = dataWithId;

//ВСІ ЛІСТЕНЕРИ ДЛЯ ВИКОНАННЯ ЗАВДАННЬ==================

window.addEventListener('load', function () {

//СКРИПТ ДЛЯ ЗАВАНТАЖЕННЯ ПРЕЛОАДЕРА==================
    const header = document.querySelector(".page-header");
    const preloaderHTML = '<div id="preloader"><img src="fitness_preloader.gif" alt="Loading..."></div>';
    header.insertAdjacentHTML('afterend', preloaderHTML);
    const preloaderElement = document.querySelector("#preloader");
    setTimeout(function () {
        preloaderElement.style.display = 'none';

//РЕНДЕР ВСИХ КАРТОК ПІСЛЯ ПРЕЛОАДЕРА, А ТАКОЖ ВІДКРИТТЯ СОРТ/ФІЛЬТР ФОРМ==================
        renderAllCards(DATA);
        sortedForm.removeAttribute("hidden");
        filterForm.removeAttribute("hidden");
    }, 3500);
});

//СТВОРЕННЯ ІНДЕКСУ ДЛЯ КНОПОК СОРТУВАННЯ==================
sortedButtons.forEach((button) => {
    button.setAttribute("data-index", index);
    index++;
})

//ЛІСТЕНЕР ДЛЯ ВІДОБРАЖЕННЯ МОДАЛЬНОГО ВІКНА ПРИ НАТИСКАННІ НА КНОПКУ НА КАРТЦІ "ПОКАЗАТИ"
trainerCardContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains('trainer__show-more')) {
        const modalWindow = modalTemplateElement.cloneNode(true);
        const cardElement = event.target.closest('.trainer');
        const cardID = +cardElement.dataset.id;

        const result = findTrainerById(cardID);

        modalWindow.querySelector(".modal__img").setAttribute("src", result.photo);
        modalWindow.querySelector(".modal__name").innerText = `${result['first name']} ${result["last name"]}`;
        modalWindow.querySelector(".modal__point--category").innerText = result.category;
        modalWindow.querySelector(".modal__point--experience").innerText = result.experience;
        modalWindow.querySelector(".modal__point--specialization").innerText = result.specialization;
        modalWindow.querySelector(".modal__text").innerText = result.description;

        document.body.append(modalWindow);

        const modalDivElement = document.querySelector('.modal');

        modalDivElement.addEventListener('click', (event) => {
            if (event.target.closest('button') || event.target === modalDivElement) {
                modalDivElement.remove();
            }
        });
    }
});


//ЛІСТЕНЕР ДЛЯ СОРТУВАННЯ ПО НАТИСКАННЮ НА КНОПКИ СОРТУВАННЯ "ЗА ПРІЗВИЩЕМ" ТА "ЗА ДОСВІДОМ"
sortedForm.addEventListener("click", (event) => {
    const target = event.target;
    const dataSortValue = target.dataset.index;

    sortedButtons.forEach(button => {
        button.classList.remove("sorting__btn--active");
    });

    if (target !== event.currentTarget) {
        target.classList.add("sorting__btn--active");
    }

    switch (dataSortValue) {
        case "0": {
            renderAllCards(sortedDataDefault);
            break;
        }
        case "1": {
            renderAllCards(sortedDataBySurname);
            break;
        }
        case "2": {
            renderAllCards(sortedDataByExperience);
            break;
        }
    }
    updateIdToCardMap();
});

//ЛІСТЕНЕР ДЛЯ ФІЛЬТРАЦІЇ ПО НАТИСКАННЮ НА КНОПКУ "ПОКАЗАТИ" НА ФОРМІ ФІЛЬТРАЦІЇ
filterSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    handleFilterChange();
    renderAllCards(filteredData);
});

//ЛІСТЕНЕР ДЛЯ ФІЛЬРАЦІЇ ПРИ ВИБОРІ РАДІОБАТТОНІВ (НЕ ВИКОНУЄ РЕНДЕРІНГ, А ТІЛЬКИ ФІЛЬТРУЄ ВСЕРЕДИНІ
//ТА ЗБЕРІГАЄТЬСЯ. ВИВІД ВІДБУВАЄТЬСЯ У "filterSubmit.addEventListener"
filterForm.addEventListener("change", handleFilterChange);

//ФУНКЦІЯ РЕНДЕРИНГУ ОДНІЄЇ КАРТКИ==================
function renderCard(trainer) {
    const cardRender = trainerCardTemplate.cloneNode(true);

    cardRender.querySelector(".trainer__img").setAttribute("src", trainer.photo);
    cardRender.querySelector(".trainer__name").innerText = `${trainer['first name']} ${trainer["last name"]}`;
    cardRender.querySelector(".trainer__show-more").innerText = "ПОКАЗАТИ";
    return cardRender;
}

//ФУНКЦІЯ РЕНДЕРИНГУ ВСИХ КАРТОК НА СТОРІНЦІ==================
function renderAllCards(data) {
    trainerCardContainer.innerHTML = '';

    data.forEach((trainer, index) => {
        const cardElement = renderCard(trainer);
        const cardID = index;
        cardElement.querySelector(".trainer").setAttribute("data-id", trainer.id);
        trainerCardContainer.appendChild(cardElement);
    });
    updateIdToCardMap();
}

//ФУНКЦІЯ, ЯКА ПРИЙМАЄ В СЕБЕ ДАННІ, ТА СВОРЮЄ ФІЛЬТРОВАНИЙ МАСИВ "filteredData"
function handleFilterChange(event) {
    const selectedDirection = document.querySelector('input[name="direction"]:checked').value;
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;

    filteredData = filterData(selectedDirection, selectedCategory, dataWithId);
    updateSortedData();
    updateIdToCardMap();
}

//ФУНКЦІЯ ПОВЕРТАЄ РЕЗУЛЬТАТ ВИКОНАННЯ ДВОХ ФУНКЦІЙ "filterByDirection" ТА "filterByCategory"
function filterData(direction, category, data) {
    return data.filter((elem) => {
        return filterByDirection(direction, elem) && filterByCategory(category, elem);
    });
}

//ФУНКЦІЯ ПОВЕРТАЄ РЕЗУЛЬТАТ ВИКОНАННЯ ФІЛЬТРАЦІІЇ "ЗА НАПРЯМОМy" ТА ПЕРЕДАЄ ЦЕ ЗНАЧЕННЯ У "filterData"
function filterByDirection(direction, elem) {
    const directionValue = direction.toLowerCase();
    if (directionValue === 'all') {
        return true;
    }
    const directionInData = elem.specialization.toLowerCase();

    if (directionValue === 'gym' && directionInData === 'тренажерний зал') {
        return true;
    } else if (directionValue === 'fight club' && directionInData === 'бійцівський клуб') {
        return true;
    } else if (directionValue === 'kids club' && directionInData === 'дитячий клуб') {
        return true;
    } else if (directionValue === 'swimming pool' && directionInData === 'басейн') {
        return true;
    }

    return directionInData === directionValue;
}

//ФУНКЦІЯ ПОВЕРТАЄ РЕЗУЛЬТАТ ВИКОНАННЯ ФІЛЬТРАЦІІЇ "ЗА КАТЕГОРІЄЮ" ТА ПЕРЕДАЄ ЦЕ ЗНАЧЕННЯ У "filterData"
function filterByCategory(category, elem) {
    const categoryValue = category.toLowerCase();
    if (categoryValue === 'all') {
        return true;
    }
    const categoryInData = elem.category.toLowerCase();

    if (categoryValue === 'master' && categoryInData === 'майстер') {
        return true;
    } else if (categoryValue === 'specialist' && categoryInData === 'спеціаліст') {
        return true;
    } else if ((categoryValue === 'instructor' && categoryInData === 'інструктор')) {
        return true;
    }

    return categoryInData === categoryValue;
}

//ФУНКЦІЯ СОРТУВАННЯ ДАНИХ, ПОВЕРТАЄ СОРТОВАНИЙ МАСИВ
const sortedData = (value, data) => {
    switch (value) {
        case "default": {
            return data.slice();
        }
        case "sortedButtonSurname": {
            return data.slice().sort((a, b) => a['last name'].localeCompare(b['last name']));
        }
        case "sortedButtonExperience": {
            return data.slice().sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
        }
    }
    updateIdToCardMap();
}

//ТРИ ВИКЛИКА ФУНКЦІЇ, ЩО ЗБЕРІГАЮТ ПОВЕРНЕНЕ ЗНАЧЕННЯ ФУНКЦІЇ "sortedData"
//АЛЕ ВРАХОВУЮТЬ НЕ БАЗОВИЙ МАСИВ, А МАСИВ З ІНДЕКСАМИ ДЛЯ КОЖНОГО ЕЛЕМЕНТУ МАСИВА
const sortedDefault = sortedData("default", dataWithId);
const sortedSurnameResult = sortedData("sortedButtonSurname", dataWithId);
const sortedExperienceResult = sortedData("sortedButtonExperience", dataWithId);

//ТРИ ЗМІННІ, ЩО ЗБЕРІГАЮТ В СОБІ ВИКЛИКИ ФУНКЦІЇ "sortedData"
let sortedDataDefault = sortedDefault;
let sortedDataBySurname = sortedSurnameResult;
let sortedDataByExperience = sortedExperienceResult;


//ФУНКЦІЯ, ЯКА ФІКСУЄ ЗМІНУ ДАНИХ ПРИ СОРТУВАННІ, ЯКЩО ДАНІ БУЛИ ВІДФІЛЬТРОВАНІ
//ЯКЩО НІ, ПОВЕРТАЄ СОРТОВАНІ МАСИВИ ТАКОЖ З МАСИВОМ З ІНДЕКСАМИ
function updateSortedData() {
    if (filteredData) {
        sortedDataDefault = sortedData("default", filteredData);
        sortedDataBySurname = sortedData("sortedButtonSurname", filteredData);
        sortedDataByExperience = sortedData("sortedButtonExperience", filteredData)
    } else {
        sortedDataDefault = sortedDefault;
        sortedDataBySurname = sortedSurnameResult;
        sortedDataByExperience = sortedExperienceResult;
    }
}

//ФУНКЦІЯ ПОШУКУ ТРЕНЕРА ПО АЙДІ, ВИКОРИСТОВУЄ ПОШУК САМЕ ТОГО ТРЕНЕРА, КАРТКУ З ЯКИМ АЙДІ МИ ВІДКРИЄМО
function findTrainerById(id) {
    return dataWithId.find(trainer => trainer.id === id);
}

//ФУНКЦІЯ ОНОВЛЕННЯ ПОРОЖНЬГО МАСИВА "МАР", ПОТРІБНА ДЛЯ ТОГО, ЩОБ ЗБЕРІГАТИ ВІДПОВІДНІСТЬ МІЖ АЙДІ КАРТОК
//ТА ЇХ ОБ'ЄКТАМИ
function updateIdToCardMap() {

    //СПОЧАТКУ ОЧИЩУЄМО КОНТЕЙНЕР АЙДІ-ШОК
    idToCardMap.clear();

    trainerCardContainer.querySelectorAll('.trainer').forEach((card, index) => {
        const cardID = card.dataset.id;
        idToCardMap.set(cardID, card);
    });
}
