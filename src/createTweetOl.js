import createLi from './createTweetLi.js'

export default function createOl(tweets) {
  const ol = document.createElement('ol')
  const liTweets = tweets.map(createLi)
  ol.append(...liTweets)
  return ol
}
