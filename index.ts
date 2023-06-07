import Yom from '.'

let yom = new Yom()
console.log(yom)

const audio = document.querySelector('audio') as HTMLAudioElement
const duration = document.querySelector('.duration') as HTMLSpanElement
const current = document.querySelector('.current') as HTMLSpanElement
const played = document.querySelector('.played') as HTMLDivElement
const slider = document.querySelector('.slider') as HTMLDivElement

duration.innerHTML = getTimeFromDuration(audio.duration)
current.innerHTML = getTimeFromDuration(audio.currentTime)

document.documentElement.addEventListener('click', () => {
  // audio.currentTime = 100
  audio.play()
})

audio.addEventListener('timeupdate', () => {
  current.innerHTML = getTimeFromDuration(audio.currentTime)
  const percent = audio.currentTime / audio.duration

  played.style.width = `${percent * 100}%`
  slider.style.transform = `translateX(${percent * 16}em)`
})

function getTimeFromDuration(duration: number) {
  let _duration = Math.floor(duration)
  console.log(_duration)

  let hour = 0

  if (_duration > 3600) {
    hour = Math.floor(_duration / 3600)
    _duration = _duration % 3600
  }

  let min = 0

  if (_duration > 60) {
    min = Math.floor(_duration / 60)
    _duration = _duration % 60
  }

  let sec = _duration

  return `${hour ? `${addZeroPrefiex(hour)}:` : ''}${addZeroPrefiex(min)}:${addZeroPrefiex(sec)}`
}

function addZeroPrefiex(num: number) {
  return num >= 10 ? num + '' : `0${num}`
}
