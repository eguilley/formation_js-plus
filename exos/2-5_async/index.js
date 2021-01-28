'use strict';

function getJson(url) {
  return fetch(url)
    .then(response => {
      return response.json()
    })
}

document.addEventListener(
  'DOMContentLoaded',
  getJson('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json')
  // function () {
  //   fetch(
  //     'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
  //   )
  //     .then(function (resp) {
  //       return resp.json();
  //     })
      .then(async function (tweets) {
        console.log('Le tableau de tweet', tweets);

        // Asynchrone

        console.log('--- Question 1 ---');
        /* créer une Promesse qui renvoie un nombre aléatoire entre 0 et 99 au bout de 2 secondes.
            Si ce nombre est pair, le résoudre, sinon le rejeter.

            Utiliser setTimeout().
        */
        const maPromesse = new Promise((res, rej) => {
          setTimeout(() => {
            const myNumber = Math.floor(Math.random() * (99 - 0 + 1) + 0)
            if (myNumber % 2 === 0) res(myNumber)
            else rej(myNumber)
          }, 2000)
        })

        console.log('--- Question 2 ---');
        /* Consommer la Promesse de 1) pour
            - afficher le texte du tweet correspondant au nombre renvoyé quand elle résoud
            - logguer un message d'erreur expliquant que le nombre est incorrect quand elle est rejetée
        */
        maPromesse
          .then(vp => {
            console.log('Le nombre ' + vp + ' est correct')
            console.log(tweets[vp].full_text)
          })
          .catch(error => {
            console.log('Le nombre ' + error + ' est incorrect')
          })

        console.log('--- Question 3 ---');
        // Même chose que la 2), mais avec async/await
        try {
          const vp = await maPromesse
          console.log('Le nombre ' + vp + ' est correct')
          console.log(tweets[vp].full_text)
        } catch (error) {
          console.log('Le nombre ' + error + ' est incorrect')
        }

        console.log('--- Question 4 ---');
        /* Écrire une fonction getJson() qui prend une URL en entrée,
          et renvoie la Promesse de récupérer la réponse HTTP transformée en JSON
        */

        console.log('--- Question 5 ---');
        // Utiliser cette fonction pour charger les données de ce script à la place des lignes 6 à 11

        console.log('--- BONUS ---');
        /* Créer une Promesse qui:
          - crée un nombre aléatoire (delay) en 0 et 5000
          - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
          - au bout de delay ms, résoudre le nombre delay
          - consommer la Promesse de sorte que si elle est rejetée, on recommence jusqu'à ce qu'elle résolve
        */
        const nouvellePromesse = new Promise((res, rej) => {
          const delay = Math.floor(Math.random() * (5000 - 0 + 1) + 0)
          setTimeout(() => {
            rej('Trop long...')
          }, 2000)
          setTimeout(() => {
            res(delay)
          }, delay)
        })
        
        nouvellePromesse
          .then(vp => {
            console.log('Valeur promise : ' + vp)
          })
          .catch(error => {
            console.error(error)
          })
        
        // function startPromesse() {
        //   nouvellePromesse
        //   .then(vp => {
        //     console.log('Valeur promise : ' + vp)
        //     return vp
        //   })
        //   .catch(error => {
        //     console.log('Start again')
        //     return startPromesse()
        //   })
        // }
        // startPromesse()

      })
      .catch(function (e) {
        console.error(e);
      })
  // },
  // { once: true },
);

