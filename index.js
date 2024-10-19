document.addEventListener("DOMContentLoaded", function() {
    const welcomeContainer = document.getElementById("welcomeContainer");
    const exploreContainer = document.getElementById("exploreContainer");
    const courseFormContainer = document.getElementById("courseFormContainer");
    const statisticsContainer = document.getElementById("statisticsContainer");
    const courseInfoContainer = document.getElementById("courseInfoContainer");
    const contactContainer = document.getElementById("contactContainer");

    const exploreCoursesBtn = document.getElementById("exploreCourses");
    const createCourseBtn = document.getElementById("createCourse");
    const viewStatisticsBtn = document.getElementById("viewStatistics");
    const contactUsBtn = document.getElementById("contactUsBtn");
    const closeExploreBtn = document.getElementById("closeExplore");
    const closeStatisticsBtn = document.getElementById("closeStatistics");
    const closeContactBtn = document.getElementById("closeContact");

    exploreCoursesBtn.addEventListener("click", function() {
        welcomeContainer.style.display = "none";
        exploreContainer.style.display = "block";
        loadCourses(); // Функция для загрузки курсов
    });

    createCourseBtn.addEventListener("click", function() {
        welcomeContainer.style.display = "none";
        courseFormContainer.style.display = "block";
    });

    viewStatisticsBtn.addEventListener("click", function() {
        welcomeContainer.style.display = "none";
        statisticsContainer.style.display = "block";
        displayStatistics(); // Функция для отображения статистики
    });

    contactUsBtn.addEventListener("click", function() {
        welcomeContainer.style.display = "none";
        contactContainer.style.display = "block";
    });

    closeExploreBtn.addEventListener("click", function() {
        exploreContainer.style.display = "none";
        welcomeContainer.style.display = "block";
    });

    closeStatisticsBtn.addEventListener("click", function() {
        statisticsContainer.style.display = "none";
        welcomeContainer.style.display = "block";
    });

    closeContactBtn.addEventListener("click", function() {
        contactContainer.style.display = "none";
        welcomeContainer.style.display = "block";
    });

    const courseListContainer = document.getElementById("courseList");
    const searchButton = document.getElementById("searchButton");
    const searchCourseInput = document.getElementById("searchCourse");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchCourseInput.value.toLowerCase();
        filterCourses(searchTerm);
    });

    function loadCourses() {
        // Пример данных курсов
        const courses = [
            { name: "Курс по Python", hashtags: ["python", "программирование"], links: "link1" },
            { name: "Основы HTML", hashtags: ["html", "веб"], links: "link2" },
            // Добавьте больше курсов по необходимости
        ];

        // Отображаем курсы
        courses.forEach(course => {
            const courseDiv = document.createElement("div");
            courseDiv.innerHTML = `<h3>${course.name}</h3><p>Хэштеги: ${course.hashtags.join(", ")}</p><button class="btn view-course">Посмотреть курс</button>`;
            courseListContainer.appendChild(courseDiv);
        });
    }

    function filterCourses(searchTerm) {
        const courseItems = courseListContainer.getElementsByTagName("div");
        for (let i = 0; i < courseItems.length; i++) {
            const courseName = courseItems[i].textContent.toLowerCase();
            if (courseName.includes(searchTerm)) {
                courseItems[i].style.display = "block";
            } else {
                courseItems[i].style.display = "none";
            }
        }
    }

    const chooseTopicBtn = document.getElementById("chooseTopic");
    const topicList = document.getElementById("topicList");
    const selectedTopicDiv = document.getElementById("selectedTopic");

    chooseTopicBtn.addEventListener("click", function() {
        topicList.style.display = "block";
    });

    topicList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const selectedTopic = event.target.getAttribute("data-topic");
            selectedTopicDiv.textContent = `Вы выбрали тему: ${selectedTopic}`;
            topicList.style.display = "none";
        }
    });

    const cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("click", function() {
        courseFormContainer.style.display = "none";
        welcomeContainer.style.display = "block";
    });

    const markAsDoneBtn = document.getElementById("markAsDone");
    markAsDoneBtn.addEventListener("click", function() {
        // Обработка завершения курса
    });

    const cancelCourseInfoBtn = document.getElementById("cancelCourseInfo");
    cancelCourseInfoBtn.addEventListener("click", function() {
        courseInfoContainer.style.display = "none";
        welcomeContainer.style.display = "block";
    });

    // Функция для отображения статистики
    function displayStatistics() {
        document.getElementById("username").textContent = "Имя пользователя"; // Замените на фактическое имя
        document.getElementById("createdCourses").textContent = "0"; // Получите актуальные данные
        document.getElementById("completedCourses").textContent = "0"; // Получите актуальные данные
    }
});
