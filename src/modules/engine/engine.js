import { getLength, setAngle } from '../store/store'

const amplitude = Math.PI / 8

const tick = () => {
  const frequency = Math.sqrt(9.8 / getLength())
  const time = Date.now() / 100

  setAngle(amplitude * Math.cos(frequency * time))
  setTimeout(tick, 4)
}

export const startTicks = () => tick()
