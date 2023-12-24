import './style.styl'

const sky = document.querySelector('.underlay')
const splashScreen = document.querySelector('.splash-screen')
const btn = document.querySelector('.btn')


const open = () => {
  splashScreen.classList.add('is-open')
}

const r = () => Math.random()

const generateSnow = () => {
  Array(~~(r() * 50)).fill()
    .forEach(() => {
      const snowFlake = document.createElement('div')
      snowFlake.className = 'snow-flake'
      snowFlake.style.left = `${ ~~(r() * 100) }vw`
      snowFlake.style.width = `${ 2 + ~~(r() * 2) }px`
      snowFlake.style.filter = `blur(${ ~~(r() * 2) }px)`
      snowFlake.style.animationName = 'snowFalling'
      snowFlake.style.animationDuration = `${ 5 + r() * 2 }s`

      const layer = sky.querySelector(`.layer${ ~~(r() * 3) + 1 }`)
      layer.appendChild(snowFlake)

      const lifeTime = setTimeout(removeSnowFlake, 7000)

      function removeSnowFlake () {
        snowFlake.remove()
        clearTimeout(lifeTime)
      }
    })
}

setInterval(generateSnow, 500)
btn.onclick = open
