import { useEffect, useState } from 'react'
import { CocktailService } from '../services/cocktail.service'
import defaultCocktail from '../assets/img/cocktail.jpeg'

export function useCocktailImg(customer) {
    const [cocktailImg, setCocktailImg] = useState(defaultCocktail)

    useEffect(() => {
        async function loadCocktailImg() {
            if (!customer) return
            try {
                const cocktail = await CocktailService.getCocktail(customer.cocktail)
                setCocktailImg(cocktail ? cocktail.img : defaultCocktail)
            } catch (error) {
                console.log('error', error)
            }
        }

        loadCocktailImg()
    }, [customer])

    return cocktailImg
}
