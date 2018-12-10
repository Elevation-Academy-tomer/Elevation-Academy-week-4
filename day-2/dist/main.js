const fetchBookData = function () {
    let input = $("#book-input").val()

    $.get(`books/?booksID=${input}`, function (bookData) {
        $("body").append(`<div>${bookData.title} - ${bookData.author}`)
    })
}