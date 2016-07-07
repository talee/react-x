import React from 'react'

import Render from './Render'

class LoggingComponent extends React.Component {
  componentDidMount() {
    console.log('Did mount', this)
  }
  componentWillReceiveProps() {
    console.log('Will receive props', this, arguments)
  }
  componentWillUpdate() {
    console.log('Will update', this, arguments)
  }
  componentWillUnmount() {
    console.log('Unmount', this)
  }
}
export class Initial extends LoggingComponent {
  render() {
    function nextView() {
      Render(ModalA, 'modal')
    }
    return <div>
      <h1>react-x</h1>
      <button onClick={nextView}>Open Modal A</button>
    </div>
  }
}

export class Modal extends LoggingComponent {
  render() {
    return <div>{this.props.children}</div>
  }
}

export class ModalA extends LoggingComponent {
  render() {
    function nextView() {
      Render(ModalB, 'modal')
    }
    return <div>
    <section>
      <h1>Modal A</h1>
    </section>
    <footer>
      <button onClick={nextView}>Continue</button>
    </footer>
    </div>
  }
}

export class ModalB extends LoggingComponent {
  render() {
    function nextView() {
      Render(ModalB, 'modal')
    }
    return <div>
    <section>
      <h1>Modal B</h1>
    </section>
    <footer>
      <button onClick={nextView}>Continue</button>
    </footer>
    </div>
  }
}
