
let testimonialsContainer = document.getElementById("testimonialsContainer");

let testimonialsCards = '';
let arrTestimonialsCards = '';

let testimonialsCardHtml = (abstractStory, img, Name, delay = 1) => {
    return `      <article class="col-lg-6 col-md-6 my-2" data-aos="flip-up" data-aos-delay="${100 * delay}">
                    <div class="testimonials-card d-flex flex-column">
                        <p>${abstractStory}</p>
                        <div class="testimonials-card-info d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center gap-3">
                                <div class="testimonials-avatar">
                                    <img src="${img}" alt="sarah">
                                </div>
                                <p>${Name}</p>
                            </div>
                            <a href="#" class="rounded-3 default-btn bg-dark-white">Read Full Story</a>
                        </div>
                    </div>
                </article>`;

}

let xhrTestimonialsCard = new XMLHttpRequest();

xhrTestimonialsCard.onreadystatechange = () => {
    if (xhrTestimonialsCard.readyState === 4) {
        if (xhrTestimonialsCard.status !== 200) {
            testimonialsContainer.innerHTML += "<h2>Error</h2>"
            return;
        }

        testimonialsCards = JSON.parse(xhrTestimonialsCard.responseText);

        testimonialsCards.forEach((card, index) => {
            arrTestimonialsCards += testimonialsCardHtml(card.abstractStory, card.img, card.Name, index + 1);
        })

        testimonialsContainer.innerHTML += arrTestimonialsCards;
    }

}
xhrTestimonialsCard.open('GET', "/assets/json/testimonials-card.json")
xhrTestimonialsCard.send()