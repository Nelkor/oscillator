const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

const resize = () => {
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight

  ctx.strokeStyle = '#ddd'
  ctx.fillStyle = '#333'
  ctx.translate(canvas.width / 2, 0)
}

resize()

window.addEventListener('resize', resize)

export const clear = () =>
  ctx.clearRect(-canvas.width / 2, 0, canvas.width, canvas.height)
