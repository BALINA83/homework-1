import '../scss/style.scss'
import switchThemeColor from './localstaradge.js'
switchThemeColor()
const tabs = document.querySelectorAll('.tabs__links-item')
const contents = document.querySelectorAll('.tabs__content-item')

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'))
    contents.forEach(c => c.classList.remove('active'))

    tab.classList.add('active')
    contents[i].classList.add('active')
  })
})
