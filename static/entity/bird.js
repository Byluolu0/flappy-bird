class Bird extends GameImage {
  constructor(scene, cfg, rawImage) {
    super(scene, cfg, rawImage)

    this.drop_a = 0.4
    this.drop_v = 0

    this.jump_height = 10
    this.jump_count = 0
    this.jump_interval = 5
  }

  idle() {
    this.runAnimation('idle')
  }

  jump() {
    this.jump_count = 0
    this.drop_v = 0
    this.resetAnimation('drop')
    this.runAnimation('drop')
  }

  outOfSceneAdjust() {
    if (this.y < 0) {
      this.y = 0
    }

    let bottom = this.scene.ground.y - this.height
    if (this.y > bottom) {
      this.y = bottom
    }
  }

  update() {
    super.update()
    this.drop_v += this.drop_a
    this.y += this.drop_v

    if (this.jump_count < this.jump_interval) {
      this.y -= this.jump_height
      this.jump_count++
    }

    this.outOfSceneAdjust()
  }
}
