import { getLength, getAngle } from '../store/store'
import { ctx, clear } from './canvas'

const render = () => {
  clear()

  const radius = getLength()
  const angle = getAngle()

  const x = radius * Math.sin(angle)
  const y = radius * Math.cos(angle)

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(x, y)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x, y, 8, 0, Math.PI * 2)
  ctx.fill()

  requestAnimationFrame(render)
}

export const startRender = () => render()
