import isFrenchTweet from './utils.js'

describe('Test de la fonction isFrenchTweet', () => {
  it('Doit renvoyer true pour un tweet français', () => {
    const frenchTweet = {
      lang: 'fr'
    }
    const maValeur = isFrenchTweet(frenchTweet)
    expect(maValeur).toBe(true) // chercher dans la doc de Jest
  })

  it('Doit renvoyer false pour un tweet anglais', () => {
    const englishTweet = {
      lang: 'en'
    }
    const maValeur = isFrenchTweet(englishTweet)
    expect(maValeur).toBe(false) // chercher dans la doc de Jest
  })

  it('Doit renvoyer false pour un tweet sans langue', () => {
    const undefinedTweet = {
      lang: undefined
    }
    const maValeur = isFrenchTweet(undefinedTweet)
    expect(maValeur).toBe(false) // chercher dans la doc de Jest
  })

  it('Doit renvoyer false pour un tweet en français canadien', () => {
    const frCaTweet = {
      lang: 'fr-ca'
    }
    const maValeur = isFrenchTweet(frCaTweet)
    expect(maValeur).toBe(true) // chercher dans la doc de Jest
  })

  it('Doit lever une exception pour un tweet undefined', () => {
    // const maValeur = isFrenchTweet()
    expect(() => isFrenchTweet()).toThrow() // chercher dans la doc de Jest
  })
})
