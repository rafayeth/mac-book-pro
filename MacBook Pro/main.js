// update total input


function getUpdatePrice(fieldId, price) {
    const inputField = document.getElementById(fieldId)
    inputField.innerText = price

    totalPeice()
}




function getInputCost(fieldId) {

    const inputField = document.getElementById(fieldId)
    const inputText = inputField.innerText
    const total = parseFloat(inputText)
    return total




}


// update sum total

function totalPeice() {
    const bestPeice = getInputCost('base-total')
    const memoryCost = getInputCost('memoy-cost')
    const storeCost = getInputCost('store-cost')
    const deleveryCost = getInputCost('delevery-cost')

    const total = bestPeice + memoryCost + storeCost + deleveryCost

    document.getElementById('total-price').innerText = total
    document.getElementById('totalAmount').innerText = total



}






// memory cost
document.getElementById('8gb').addEventListener('click', function () {

    getUpdatePrice('memoy-cost', 0)
})
document.getElementById('16gb').addEventListener('click', function () {

    getUpdatePrice('memoy-cost', 180)
})





// storege  cost

document.getElementById('26gb').addEventListener('click', function () {

    getUpdatePrice('store-cost', 0)
})

document.getElementById('512gb').addEventListener('click', function () {

    getUpdatePrice('store-cost', 100)
})

document.getElementById('1tb').addEventListener('click', function () {

    getUpdatePrice('store-cost', 180)
})






// delevery  cost


document.getElementById('free').addEventListener('click', function () {

    getUpdatePrice('delevery-cost', 0)
})

document.getElementById('charge').addEventListener('click', function () {

    getUpdatePrice('delevery-cost', 20)
})





// apply promoCode 


document.getElementById('applyBtn').addEventListener('click', function () {

    const promoInput = document.getElementById('promoInput')
    const totalPeice = getInputCost('total-price')
    const totalAmount = document.getElementById('totalAmount')

    if (promoInput.value == 0000) {

        const discount = totalPeice / 100 * 20
        const price = totalPeice - discount
        totalAmount.innerText = price;
    }

    promoInput.value = ''
})