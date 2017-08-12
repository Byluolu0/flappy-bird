class Tube extends GameImage {
  constructor(scene, cfg, rawImage) {
    super(scene, cfg, rawImage)
    this.speed = 3
    this.crossBird = false
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
    if (this.crossBird == false && this.x < this.scene.bird.x) {
      this.scene.addScore(0.5)
      this.crossBird = true
    }
    if (this.outOfScene()) {
      this.scene.removeFromElements(this)
    }
  }
}
