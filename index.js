document.addEventListener('DOMContentLoaded', function () {
    const userId = Telegram.WebApp.initDataUnsafe.user.id;
    const username = Telegram.WebApp.initDataUnsafe.user.username;

    document.getElementById('userId').textContent = userId;
    document.getElementById('username').textContent = username;

    let createdCoursesCount = 0;
    let completedCoursesCount = 0;

    // Показать форму создания курса
    document.getElementById('createCourse').addEventListener('click', function () {
        document.getElementById('welcomeContainer').style.display = 'none';
        document.getElementById('courseFormContainer').style.display = 'block';
    });

    // Показать контейнер для исследования курсов
    document.getElementById('exploreCourses').addEventListener('click', function () {
        document.getElementById('welcomeContainer').style.display = 'none';
        document.getElementById('exploreContainer').style.display = 'block';
    });

    // Поиск курсов
    document.getElementById('searchButton').addEventListener('click', function () {
        const query = document.getElementById('searchCourse').value.toLowerCase();
        // Логика фильтрации курсов здесь
    });

    // Создание курса
    document.getElementById('courseForm').addEventListener('submit', function (event) {
        event.preventDefault();
        createdCoursesCount++;
        document.getElementById('createdCourses').textContent = createdCoursesCount;

        // Логика для сохранения курса
        document.getElementById('courseFormContainer').style.display = 'none';
        document.getElementById('welcomeContainer').style.display = 'block';
    });

    // Завершение курса
    document.getElementById('markAsDone').addEventListener('click', function () {
        completedCoursesCount++;
        document.getElementById('completedCourses').textContent = completedCoursesCount;
        // Логика для обработки завершения курса
    });

    // Показать статистику
    document.getElementById('viewStatistics').addEventListener('click', function () {
        document.getElementById('welcomeContainer').style.display = 'none';
        document.getElementById('statisticsContainer').style.display = 'block';
    });

    // Закрыть статистику
    document.getElementById('closeStatistics').addEventListener('click', function () {
        document.getElementById('statisticsContainer').style.display = 'none';
        document.getElementById('welcomeContainer').style.display = 'block';
    });

    // Отмена создания курса
    document.getElementById('cancel').addEventListener('click', function () {
        document.getElementById('courseFormContainer').style.display = 'none';
        document.getElementById('welcomeContainer').style.display = 'block';
    });

    // Выбор темы
    document.getElementById('chooseTopic').addEventListener('click', function () {
        document.getElementById('topicList').style.display = 'block';
    });

    document.querySelectorAll('.topic-list li').forEach(function (item) {
        item.addEventListener('click', function () {
            const selectedTopic = item.dataset.topic;
            document.getElementById('selectedTopic').textContent = `Выбранная тема: ${selectedTopic}`;
            document.getElementById('topicList').style.display = 'none';
        });
    });

    // Закрыть исследование курсов
    document.getElementById('closeExplore').addEventListener('click', function () {
        document.getElementById('exploreContainer').style.display = 'none';
        document.getElementById('welcomeContainer').style.display = 'block';
    });

    // Закрыть информацию о курсе
    document.getElementById('cancelCourseInfo').addEventListener('click', function () {
        document.getElementById('courseInfoContainer').style.display = 'none';
        document.getElementById('exploreContainer').style.display = 'block';
    });

    // Контактная информация
    document.getElementById('contactUsBtn').addEventListener('click', function () {
        document.getElementById('welcomeContainer').style.display = 'none';
        document.getElementById('contactContainer').style.display = 'block';
    });

    // Закрыть контакт
    document.getElementById('closeContact').addEventListener('click', function () {
        document.getElementById('contactContainer').style.display = 'none';
        document.getElementById('welcomeContainer').style.display = 'block';
    });
});
