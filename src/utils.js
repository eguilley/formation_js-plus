export default function isFrenchTweet(tweet) {
  return !!tweet.lang?.startsWith('fr')
}
