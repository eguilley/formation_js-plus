import moment from 'moment'
import 'moment/locale/fr'

export default function createLi(tweet) {
  const li = document.createElement('li')
  li.textContent = tweet.full_text
  const createdAt = document.createElement('div')
  createdAt.textContent = moment(tweet.created_at).fromNow()
  li.append(createdAt)
  return li
}
