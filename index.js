document.addEventListener("DOMContentLoaded", function () {
    const exploreCoursesBtn = document.getElementById("exploreCourses");
    const createCourseBtn = document.getElementById("createCourse");
    const viewStatisticsBtn = document.getElementById("viewStatistics");
    const contactUsBtn = document.getElementById("contactUsBtn");
    const courseFormContainer = document.getElementById("courseFormContainer");
    const exploreContainer = document.getElementById("exploreContainer");
    const statisticsContainer = document.getElementById("statisticsContainer");
    const contactContainer = document.getElementById("contactContainer");
    const courseInfoContainer = document.getElementById("courseInfoContainer");
    const courseList = document.getElementById("courseList");
    const closeExploreBtn = document.getElementById("closeExplore");
    const closeStatisticsBtn = document.getElementById("closeStatistics");
    const closeContactBtn = document.getElementById("closeContact");
    const cancelCourseInfoBtn = document.getElementById("cancelCourseInfo");
    const markAsDoneBtn = document.getElementById("markAsDone");

    const userId = 123; // пример ID пользователя
    const username = "Пользователь"; // пример имени пользователя

    // Отображение статистики
    document.getElementById("userId").innerText = userId;
    document.getElementById("username").innerText = username;

    exploreCoursesBtn.addEventListener("click", function () {
        exploreContainer.style.display = "block";
        document.getElementById("welcomeContainer").style.display = "none";
    });

    createCourseBtn.addEventListener("click", function () {
        courseFormContainer.style.display = "block";
        document.getElementById("welcomeContainer").style.display = "none";
    });

    viewStatisticsBtn.addEventListener("click", function () {
        statisticsContainer.style.display = "block";
        document.getElementById("welcomeContainer").style.display = "none";
    });

    contactUsBtn.addEventListener("click", function () {
        contactContainer.style.display = "block";
        document.getElementById("welcomeContainer").style.display = "none";
    });

    closeExploreBtn.addEventListener("click", function () {
        exploreContainer.style.display = "none";
        document.getElementById("welcomeContainer").style.display = "block";
    });

    closeStatisticsBtn.addEventListener("click", function () {
        statisticsContainer.style.display = "none";
        document.getElementById("welcomeContainer").style.display = "block";
    });

    closeContactBtn.addEventListener("click", function () {
        contactContainer.style.display = "none";
        document.getElementById("welcomeContainer").style.display = "block";
    });

    cancelCourseInfoBtn.addEventListener("click", function () {
        courseInfoContainer.style.display = "none";
        exploreContainer.style.display = "block";
    });

    markAsDoneBtn.addEventListener("click", function () {
        // Логика для отметки курса как завершенного
        alert("Курс завершен!");
    });

    // Функция для отображения списка курсов
    function displayCourses() {
        courseList.innerHTML = "";
        const courseData = [
            {
                id: 1,
                name: "Законы Ньютона",
                description: "Основы физики и механики.",
                links: "https://example.com/video1"
            }
            // Добавьте больше курсов по мере необходимости
        ];

        if (courseData.length > 0) {
            courseData.forEach(course => {
                const courseItem = document.createElement("div");
                courseItem.className = "course-item";
                courseItem.innerHTML = `${course.name} <br> <button class="btn" onclick="openCourseInfo(${course.id})">Подробнее</button>`;
                courseList.appendChild(courseItem);
            });
        } else {
            courseList.innerHTML = "Нет доступных курсов.";
        }
    }

    // Функция для открытия информации о курсе
    window.openCourseInfo = function (courseId) {
        const course = { // Здесь можно загружать данные курса по ID
            title: "Законы Ньютона",
            description: "Основы физики и механики.",
            links: "https://example.com/video1",
            creator: username
        };
        document.getElementById("courseInfoTitle").innerText = course.title;
        document.getElementById("courseInfoDescription").innerText = course.description;
        document.getElementById("courseInfoLinks").innerText = course.links;
        document.getElementById("courseCreator").innerText = course.creator;
        courseInfoContainer.style.display = "block";
        exploreContainer.style.display = "none";
    };

    // Отображаем курсы при загрузке
    displayCourses();
});
