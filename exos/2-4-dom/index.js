'use strict';

function createElt(type, content, style) {
  const elt = document.createElement(type)
  elt.textContent = content
  elt.classList.add(style)
  return elt
}

document.addEventListener(
  'DOMContentLoaded',
  function () {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (tweets) {
        console.log('Le tableau de tweet', tweets);

        console.log('--- Question 1 ---');
        /* pour le premier tweet
          - créer une div
          - lui fournir le texte du tweet en textContent
          - ajouter la div au <body>
        */
        const elt = document.createElement('div')
        elt.textContent = tweets[0].full_text
        document.body.append(elt)

        console.log('--- Question 2 ---');
        // créer un <ol> et remplacer la <div> par le <ol>
        const liste = document.createElement('ol')
        // liste.textContent = 'test'
        elt.replaceWith(liste)

        console.log('--- Question 3 ---');
        /* pour chaque tweet
          - créer un <li>
          - mettre le texte dedans
          - mettre le <li> dans le <ol>
        */
        tweets.forEach(e => {
          const listeElt = createElt('li', e.full_text, 'listeElt')
          listeElt.addEventListener(
            'click',
            function () {
              console.log(e.id)
            }
          )
          const createdDate = createElt('div', e.created_at, 'createdDate')
          const author = createElt('div', e.user.name, 'author')
          listeElt.append(createdDate, author)
          e.entities.hashtags.forEach(hashtag => {
            const hashtagElt = createElt('div', '#'+hashtag.text, 'hashtag')
            listeElt.append(hashtagElt)
          })
          liste.append(listeElt)
        })

        console.log('--- Question 4 ---');
        /* enrichir la fonction de la question 3 pour:
          - ajouter des infos d'auteur et de date
          - ajouter des classes pourt styliser le texte, l'auteur, la date
          - ajouter un listener au clic ou mouseenter pour logguer l'id du tweet dans la console
        */

        console.log('--- BONUS ---');
        // enrichir la fonction de la question 3 pour aussi afficher les hashtags de chaque tweet
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
