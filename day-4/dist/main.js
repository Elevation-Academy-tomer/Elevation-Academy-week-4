class APIManager {
    fetch() {
        return $.get('/randomWord')
    }

    fetchGoogleBookesApi(title) {
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`)
    }
    fetchGIFBookesApi(query){
        return $.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=BCLtSJzk90RZUzhgT9Rdb0xFr27Zrswg&limit=1`)
    }
}

class Renderer {
    render(dataPromise) {
        dataPromise.then(function (data) {
            console.log(data)
            let bookData = apiManager.fetchGoogleBookesApi(data)
            let gifData = apiManager.fetchGIFBookesApi(data)
            Promise.all([bookData, gifData])
            .then(function (results) {
                let book = results[0].items[0].volumeInfo.title
                let gif = results[1].data[0].embed_url
                $("body").append(`<div>
                                     <h1>${book}</h1>
                                     <iframe src="${gif}">
                                </div>`)
            })
        }) 
    }

}

const apiManager = new APIManager()
const renderer = new Renderer()

let initialDataPromise = apiManager.fetch()
renderer.render(initialDataPromise) //initial page load

// "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=BCLtSJzk90RZUzhgT9Rdb0xFr27Zrswg&limit=5

    