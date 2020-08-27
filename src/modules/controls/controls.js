import { setLength } from '../store/store'

const input = document.querySelector('input')

export const bindControls = () => input
  .addEventListener('input', () => setLength(+input.value))
