class Animation {
  constructor(holder, elements, finishCallback) {
    this.holder = holder
    this.elements = elements
    this.idx = 0
    this.enabled = false
    this.cooldown = 0
    this.finishCallback = finishCallback
  }

  enable() {
    this.enabled = true
  }

  reset() {
    this.enabled = false
    this.idx = 0
    this.cooldown = 0
  }

  update() {
    if (!this.enabled) {
      return
    }
    this.cooldown++
    if (this.cooldown == this.animation_cooldown) {
      this.cooldown = 0
      this.idx++
      let to = this.elements[this.idx - 1]
      //log(this.idx - 1, to, this.elements)
      if (to == null) {
        this.enabled = false
        this.idx = 0
        this.cooldown = 0
        if (this.finishCallback) {
          this.finishCallback()
        }
        return
      }

      this.replaceElement(to)
    }
  }

  replaceElement(to) {
    //this.holder.setRawImage(to)
  }

}
