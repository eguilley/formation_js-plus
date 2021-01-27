'use strict';

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

        // Tableaux

        console.log('--- Question 0 ---');
        // observer la structure des données des tweets dans la console du navigateur

        console.log('--- Question 1 ---');
        /* pour le premier tweet
          - l'afficher dans la console
          - afficher son texte dans la console
        */
        console.log(tweets[0])
        console.log(tweets[0].full_text)

        console.log('--- Question 2 ---');
        // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()
        tweets.forEach((e) => {
          console.log(e.full_text)
        })

        console.log('--- Question 3 ---');
        // créer un tableau avec seulement tous les textes des tweets en utilisant .map()
        const tweetsTexts = tweets.map((e) => {
          return e.full_text
        })
        console.log(tweetsTexts)

        console.log('--- Question 4 ---');
        // créer un tableau avec seulement les dates de publication
        const tweetsDates = tweets.map((e) => {
          return e.created_at
        })
        console.log(tweetsDates)

        console.log('--- Question 5 ---');
        // créer un tableau avec seulement les tweets en français en utilisant .filter()
        const frenchTweets = tweets.filter((e) => {
          return e.lang === 'fr'
        })
        console.log(frenchTweets)

        console.log('--- Question 6 ---');
        // trouver le tweet qui parle de 'Moonlighter' en utilisant .find()
        const moonlighter = tweets.find((e) => {
          return e.full_text.includes('Moonlighter')
        })
        console.log(moonlighter)

        console.log('--- Question 7 ---');
        const hashtags = tweets[0].entities.hashtags.map((hashtag) => {
          return hashtag.text
        })
        console.log(hashtags)

        console.log('--- BONUS ---');
        // lister les 56 tweets qui ont pour hashtag `coronadiary`
        const coronadiary = tweets.filter((e) => {
          const found = e.entities.hashtags.find((hashtag) => {
            return hashtag.text === 'coronadiary'
          })
          return found !== undefined
        })
        console.log(coronadiary)

      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
