export var HAModal = document.registerElement('ha-modal', {
  prototype: Object.assign(Object.create(HTMLElement.prototype), {
    attachedCallback() {
      console.log('attachedCallback:', this)
      let section = this.querySelector('section')
      let footer = this.querySelector('footer')
      if (!section || !footer) {
        throw new Error('Must contain a section or footer')
      }
      const sectionChildren = section && section.childNodes
      const footerChildren = footer && footer.childNodes

      this.innerHTML = `<div class='modal'>
      <section class='content'></section>
      <footer class='footer'></footer>
      </div>
      `
      section = this.querySelector('section')
      footer = this.querySelector('footer')
      if (sectionChildren) {
        sectionChildren.forEach(child => section.appendChild(child))
      }
      if (footerChildren) {
        footerChildren.forEach(child => footer.appendChild(child))
      }
    }
  })
})
