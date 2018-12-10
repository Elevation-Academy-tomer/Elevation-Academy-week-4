const cash = $("#money").data().money

const fetchBookData = function () {
    let input = $("#store-input").val()
    $.get(`priceCheck/${input}`, function (data) {
        $("body").append(`<div>The price is ${data.price}</div>`)
    })
}

const buy = function () {
    let input = $("#buy-input").val()
    $.get(`priceCheck/${input}`, function (data) {
        cash > data.price ? 
        $.get(`buy/${input}`, function (data) {
            $("body").append(`<div>Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.</div>`)
        })
        : $("body").append(`<div>You don't have enough money.</div>`)
    })
}