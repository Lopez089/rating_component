const $form = document.querySelector('form');
const $items = document.querySelectorAll('input[type=radio]')
const $submit = document.querySelector('button[type=submit]')
const $card = document.querySelector('.card')
const $error = document.querySelector('.error')
const cardTanks = (value) => {
    return `  <section class='card-content'> 
                <img src='static/illustration-thank-you.svg' alt='thank-you'> 
                    <div class='tab-selectied'> 
                        <p> You selectied ${value} out of 5</p> 
                    </div > 
                    <h1>Thank you!</h1> 
                    <p class="text-center">We appreciate you taking the time to give a rating. If you ever need more support, dont´t hesitate to get in touch!</p> 
                </section > `
}
let valueUser

$items.forEach(item => {

    item.addEventListener('click', (e) => valueUser = e.target.value)

})

const submit = (e) => {
    e.preventDefault()
    if (valueUser) {
        $card.innerHTML = cardTanks(valueUser)
    } else {
        $error.innerHTML = 'Please select a value. Thank you.'

        setTimeout(() => {
            $error.innerHTML = ''
        }, 4000)
    }


}

$form.addEventListener('submit', (e) => submit(e))


//https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI 