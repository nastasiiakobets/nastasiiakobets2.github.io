//стрілочка
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var topButton = document.getElementById("topButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //для інших браузерів
}


//кнопочка переключає тему
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const icon = document.getElementById('icon');
    const striloczka = document.getElementById('striloczka');
    const c = document.getElementById('c');
    const wheel = document.getElementById('wheel');
    const palette = document.getElementById('palette');
    const textDiv = document.getElementById('text');

    themeToggle.addEventListener('click', function () {
        const root = document.documentElement;
        document.body.classList.toggle('dark-theme');

        if (getComputedStyle(root).getPropertyValue('--background-color') === 'rgb(255, 0, 0)') {
            root.style.setProperty('--background-color', 'rgb(0, 0, 102)');
            root.style.setProperty('--top-background-color', '#AAAAFF');
            root.style.setProperty('--text-color1', '#ffffff');
            root.style.setProperty('--text-color2', '#D4D4FF');
            root.style.setProperty('--header', '#3E3EBB');

            icon.src = 'images/icon.png';

            striloczka.src = 'images/down-arrow.png';

            c.src = 'images/c2.png';
            wheel.src = 'images/wheelgood.png';
            palette.src = "images/palettegood.jpg";

            textDiv.innerHTML = `<h1 id="section1"><b>Що було використано:</b></h1>
            <p><b>Монохроматична колірна схема</b>, що складається з різних тонів, відтінків і насиченості одного основного кольору. Вони дуже згуртовані, але ризикують стати одноманітними.</p>
            <h1 id="section2"><b>Значення кольорів:</b></h1>
            <p><b>Синій</b> - довіра, спокій, безпека, впевненість, відповідальність, надійність, авторитет, комфорт, розслаблення.
                Синій колір може зміцнити лояльність клієнтів і дати їм відчуття, що вони можуть задуматися і не поспішати під час покупок. 
                Викликає відчуття безпеки та довіри до бренду. У дітей асоціюється з дорослішанням
            </p>
            <p><b>Фіолетовий</b> - креативність, багатство, витонченість, вишуканість, таємничість, духовність, розкіш, натхненність. Історично асоціюється з досконалістю, багатством, престижем. 
                Темні відтінки фіолетового заспокоюють, а світлі - відображають відчуття весни та романтики. Популярний серед креативних та оригінальних брендів, сервісів
            </p>
            <h1 id="section3"><b>Приклади використання:</b></h1>
            <p>Завдяки культу Діви Марії синій стає символом жіночності й чистоти.
                А завдяки королю Філіппу Августу став модним у державній символіці. Він почав носити синє вбрання замість червоного і змінив прапор Франції. Так синій поступово став кольором політичного мейнстріму. Зараз він об’єднує весь світ: прапор Євросоюзу, Ліга Націй, ЮНЕСКО, ООН, НАТО. 
                Також він став символом рівних прав завдяки джинсам, які стали “уніформою”. Джинси — це перший одяг, який однаково вільно носили чоловіки та жінки.</p>
            <p>Синій використано в брендингу гігантської кількості IT-компаній: Microsoft, Intel, Facebook, Linkedin. Також синій обирають PayPal, Ford, Nivea, Dove</p>
            <img id='examp' src="images/examp1.jpg" alt="example">
            <h1 id="section4"><b>Чому:</b></h1>
            <p>Бренди переважно віддають перевагу монохромним рішенням: понад 90% великих компаній обмежуються одним або двома кольорами. Синій — найпопулярніший колір, наявний у брендингу 33% компаній. </p>
            <p>Тілбурзський університет (Нідерланди) заявив, що картини, на яких переважають сині тони, йдуть з аукціонів на 11% дорожче за інші картини. Отже, синій є найбільш продаваним кольором. </p>
            <p>Дослідження Джо Хеллока про гендерні та колірні переваги виявило, що багато вікових груп віддають перевагу фіолетовому </p>`;

        } else {//bad
            root.style.setProperty('--background-color', 'rgb(255, 0, 0)');
            root.style.setProperty('--top-background-color', '#ff6a00');
            root.style.setProperty('--text-color1', '#FF00FF');
            root.style.setProperty('--text-color2', 'rgb(245, 251, 139)');
            root.style.setProperty('--header', 'rgb(255, 0, 0)');

            icon.src = 'images/icon_2.png';

            striloczka.src = 'images/striloczka.png';

            c.src = 'images/c.png';

            wheel.src = 'images/wheelbad.png';
            palette.src = "images/palettebad.jpg";

            textDiv.innerHTML = `<h1 id="section1"><b>Що було використано:</b></h1>
            <p><b>Аналогічна колірна схема</b>, що містить три кольори, розташовані поруч один з одним на колірному колі. Але побудовані неправильно і зарахунок своєї яскравості - нечитабельно</p>
            <h1 id="section2"><b>Значення кольорів:</b></h1>
            <p><b>Червоний</b> - енергія, пристрасть, терміновість, небезпека, зухвалість, провокація. Підвищує пульс, що змушує споживачів діяти швидше. Червоний колір створює ефект терміновості і психічно привертає увагу.
            </p>
            <p><b>Помаранчевий</b> - приплив енергії, тепло, дружелюбність, життєва сила, запал. Його часто використовують бренди, пов'язані з розвагами, ІТ-товарами, медичними товарами та послугами. 
            Але помаранчевий часто вважається "бідним".
            </p>
            <h1 id="section3"><b>Приклади використання:</b></h1>
            <p>Багато брендів використовують червоний колір, щоб створити святковий настрій(наприклад, Coca-Cola). Фірмовий відтінок червоного кольору Coke Red навіть називають другою формулою успіху компанії. Цікаво й те, що поєднання червоного із жовтим може збуджувати апетит. Саме тому ці два кольори — фірмові у McDonald’s.
            Червоний – колір руху, колір воїна. Згадайте героїв Marvel: Спайдермен і Залізна людина – червоні, а Супермен – у червоному плащі.</p>
            <p> Червоний використовують такі бренди: Coca-Cola, Netflix, Toyota, H&M, Lego, KFC.</p>
            <img id='examp' src="images/examp2.png" alt="example">
            <h1 id="section4"><b>Чому:</b></h1>
            <p>Червоний на другому місці за популярністю — 29%</p>
            <p>Фабер Біррен, автор книги « Психологія кольору та кольоротерапія» , виявив, що молоді люди, як правило, віддають перевагу кольорам з більшою довжиною хвилі (наприклад, червоному та помаранчевому).</p>
            <p>Яскраві кольори – це кольори, які виділяються на тлі та пульсують енергією. Ці кольори чудово підходять для створення енергійної атмосфери та є гарним вибором для компаній, які хочуть представити себе в нетрадиційній манері</p>`;
        }
    });
});

function toggleNav() {
    var overlay = document.getElementById('overlay');
    var navList = document.querySelector('.nav-list');

    overlay.style.display = 'block';
    navList.classList.add('open');
}

function closeNav() {
    var overlay = document.getElementById('overlay');
    var navList = document.querySelector('.nav-list');

    overlay.style.display = 'none';
    navList.classList.remove('open');
}

