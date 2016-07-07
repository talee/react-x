import React from 'react'
import ReactDOM from 'react-dom'
import {Initial, Modal} from './Views'

const main = document.getElementById('main')
const modal = document.getElementById('modal')

export default function(View, region) {
  if (region == 'modal')
    ReactDOM.render(
      <Modal>
        <View/>
      </Modal>
      , modal)
  else if (View)
    ReactDOM.render(<View/>, main)
  else
    ReactDOM.render(<Initial/>, main)
}
