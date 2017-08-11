class RotateAnimation extends Animation {
  constructor(holder, elements, finishCallback) {
    super(holder, elements, finishCallback)
    this.animation_cooldown = globalConfig.rotate_animation_cooldown
  }

  replaceElement(to) {
    this.holder.rotate(to)
  }

}
