export default function createFrenchButton(
  label,
  selector,
  baseOl,
  specificOl
) {
  let filter = false
  const button = document.createElement('button')
  button.textContent = label
  button.addEventListener(selector, function () {
    filter = !filter
    if (filter) {
      baseOl.replaceWith(specificOl)
    } else {
      specificOl.replaceWith(baseOl)
    }
  })
  return button
}
