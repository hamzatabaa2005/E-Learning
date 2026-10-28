
let courseContainer = document.getElementById("ourCourses");

let courseCards = '';
let arrCourseCards = '';

let courseCardHtml = (img, week, level, instructor, courseName, courseDescription) => {
    return `   <div class="col-lg-6 my-3" data-aos="zoom-in" data-aos-delay="100">
                    <a href="pricing.html" class="text-body" >
                        <div class="course-card d-flex flex-column bg-white ">
                            <div class="course-card-avatar">

                                <img src=${img} alt="">
                            </div>
                            <div class="course-card-info">
                                <div>
                                    <div class="chips">${week} week</div>
                                    <div class="chips">${level}</div>
                                </div>
                                <p>${instructor}</p>
                            </div>
                            <div>
                                <h2>${courseName}</h2>
                                <p>${courseDescription}</p>
                                <a href="pricing.html" class="default-btn bg-dark-white w-100">Get it Now</a>
                            </div>
                        </div>
                    </a>
                </div>`;

}

let xhrCourseCard = new XMLHttpRequest();

xhrCourseCard.onreadystatechange = () => {
    if (xhrCourseCard.readyState === 4) {
        if (xhrCourseCard.status !== 200) {
            courseContainer.innerHTML += "<h2>Error</h2>"
            return;
        }

        courseCards = JSON.parse(xhrCourseCard.responseText);

        courseCards.forEach((card) => {
            arrCourseCards += courseCardHtml(card.img, card.week, card.level, card.instructor, card.courseName, card.courseDescription);
        })

        courseContainer.innerHTML += arrCourseCards;
    }

}
xhrCourseCard.open('GET', "/assets//json/course-card-info.json")
xhrCourseCard.send()