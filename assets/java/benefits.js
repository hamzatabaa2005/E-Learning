let benefitContainer = document.getElementById("benefitsContainer");



let benefitCards = '';
let arrBenefitCards = '';

let benefitsCardHtml = (cardNumber, title, description) => {
    return `  <article class="col-lg-4 col-md-6 my-2">
                    <div class="info-card d-flex flex-column overflow-hidden text-black bg-white" data-aos="fade-down"  data-aos-delay="${100 * cardNumber}">
                        <h2 class="fs-1 align-self-end" data-aos="fade-down"  data-aos-delay="${150 * cardNumber}">${(cardNumber < 10) ? "0" + cardNumber : cardNumber}</h2>
                        <h3 class="fs-5">${title}</h3>
                        <p>${description}</p>
                        <button class="align-self-end  text-primary"><i class="fa-solid fa-location-arrow "></i>
                        </button>
                    </div>
                </article> `;

}

let xhrBenefitsCard = new XMLHttpRequest();

xhrBenefitsCard.onreadystatechange = () => {
    if (xhrBenefitsCard.readyState === 4) {
        if (xhrBenefitsCard.status !== 200) {
            benefitContainer.innerHTML += "<h2>Error</h2>"
            return;
        }

        benefitCards = JSON.parse(xhrBenefitsCard.responseText);

        benefitCards.forEach((card, cardNumber) => {

            arrBenefitCards += benefitsCardHtml(cardNumber + 1, card.title, card.description);

        })

        benefitContainer.innerHTML += arrBenefitCards;
    }

}
xhrBenefitsCard.open('GET', "/assets/json/benefits-card.json")
xhrBenefitsCard.send()