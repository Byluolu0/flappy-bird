class ImageAnimation extends Animation {
  constructor(holder, elements, finishCallback) {
    super(holder, elements, finishCallback)
    this.animation_cooldown = globalConfig.image_animation_cooldown
  }

  replaceElement(to) {
    this.holder.setRawImage(to)
  }

}
