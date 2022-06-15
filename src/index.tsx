import { render } from 'react-dom'
import App from './app'

const MOUNT_POINT = document.querySelector('#app')

render(
  <App />,
  MOUNT_POINT
)
