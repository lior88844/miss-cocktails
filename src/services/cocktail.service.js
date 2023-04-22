import axios from "axios"
export const CocktailService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
    getCocktail,
    getCocktails,
    getSpirit

}

async function getCocktail(cocktailName = 'martini') {
    try {
        const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
        )
        const res = response.data.drinks[0]
        const ingredients = []
        const instructions = res.strInstructions
        const name = res.strDrink
        const img = res.strDrinkThumb
        for (var i = 0; i < 15; i++) {
            const ingredient = res[`strIngredient${i + 1}`]
            const measure = res[`strMeasure${i + 1}`]
            if (ingredient && measure) ingredients.push({ ingredient: ingredient, measure: measure })
        }
        const cocktail = { name, img, ingredients, instructions }
        return cocktail

    } catch (error) {
        console.log('error', error)

    }
}
async function getCocktails(cocktail = 'martini') {
    try {
        const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
        )
        return response.data.data.drinks

    } catch (error) {
        console.log('error', error)

    }
}

async function getSpirit(spirit = 'vodka') {
    try {
        const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${spirit}`
        )
        return response.data.data.drinks[0]

    } catch (error) {
        console.log('error', error)

    }
}

async function getRate() {
    // return 0.00003309
    try {
        const response = await fetch(
            'https://blockchain.info/tobtc?currency=USD&value=1'
        )
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

async function getMarketPrice() {
    return { "symbol": "BTC-USD", "bids": [{ "px": 30230.57, "qty": 0.03340989, "num": 1 }, { "px": 30229.44, "qty": 0.30070024, "num": 1 }, { "px": 30227.93, "qty": 0.50119211, "num": 1 }, { "px": 30226.42, "qty": 0.83536191, "num": 1 }, { "px": 30224.91, "qty": 1.67080729, "num": 1 }, { "px": 30169.07, "qty": 0.54565976, "num": 1 }, { "px": 30163.92, "qty": 0.0348098, "num": 1 }, { "px": 29500.0, "qty": 0.0017, "num": 1 }, { "px": 29100.0, "qty": 0.0115, "num": 1 }, { "px": 29000.0, "qty": 0.00277, "num": 2 }, { "px": 28500.0, "qty": 0.0018, "num": 1 }, { "px": 28400.0, "qty": 6.6119E-4, "num": 1 }, { "px": 28184.0, "qty": 0.005799, "num": 1 }, { "px": 28100.0, "qty": 0.0146, "num": 1 }, { "px": 28000.0, "qty": 0.00635582, "num": 4 }, { "px": 27950.0, "qty": 0.007, "num": 1 }, { "px": 27500.0, "qty": 0.00121103, "num": 1 }, { "px": 27318.0, "qty": 5.0513E-4, "num": 1 }, { "px": 27000.0, "qty": 0.00172706, "num": 2 }, { "px": 26888.0, "qty": 0.03131786, "num": 1 }, { "px": 26800.0, "qty": 0.00105141, "num": 1 }, { "px": 26750.0, "qty": 7.6225E-4, "num": 1 }, { "px": 26701.0, "qty": 1.56, "num": 1 }, { "px": 26500.0, "qty": 5.8064E-4, "num": 1 }, { "px": 26427.0, "qty": 0.01332224, "num": 1 }, { "px": 26228.0, "qty": 0.00645501, "num": 1 }, { "px": 26133.0, "qty": 0.00141827, "num": 1 }, { "px": 26100.0, "qty": 0.01, "num": 1 }] }
    // try {
    //   // const response = await axios.get(
    //   //   'https://api.blockchain.com/v3/exchange/l2/BTC-USD'
    //   // )
    //   // return response.data
    // } catch (error) {
    //   console.log(error)
    // }
}

async function getConfirmedTransactions() {
    return '{"status":"ok","name":"Transaction Rate","unit":"Transactions Per Second","period":"minute","description":"The number of Bitcoin transactions added to the mempool per second.","values":[{"x":1680777900,"y":4.583333333333333},{"x":1680778800,"y":3.8833333333333333},{"x":1680779700,"y":4.466666666666667},{"x":1680780600,"y":4.516666666666667},{"x":1680781500,"y":4.3},{"x":1680782400,"y":3.65},{"x":1680783300,"y":3.7},{"x":1680784200,"y":4.533333333333333},{"x":1680785100,"y":4.983333333333333},{"x":1680786000,"y":4.283333333333333},{"x":1680786900,"y":5.233333333333333},{"x":1680787800,"y":4.533333333333333},{"x":1680788700,"y":4.2},{"x":1680789600,"y":4.716666666666667},{"x":1680790500,"y":4.95},{"x":1680791400,"y":5.366666666666666},{"x":1680792300,"y":5.8},{"x":1680793200,"y":5.1},{"x":1680794100,"y":4.533333333333333},{"x":1680795000,"y":4.933333333333334},{"x":1680795900,"y":4.7},{"x":1680796800,"y":5.016666666666667}]}'
    // try {
    //   // const response = await axios.get(
    //   //   'https://api.blockchain.info/charts/transactions-per-second?timespan=1weeks&format=json&cors=true'
    //   // )
    //   // return response.data
    // } catch (error) {
    //   console.log(error)
    // }
}