class Tube extends GameImage {
  constructor(scene, cfg, rawImage) {
    super(scene, cfg, rawImage)
    this.speed = 3
  }

  outOfScene() {
    if (this.x < -this.width) {
      return true
    }
    return false
  }

  update() {
    super.update()
    this.x -= this.speed
    if (this.outOfScene()) {
      this.scene.removeFromElements(this)
    }
  }
}
