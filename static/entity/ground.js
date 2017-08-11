class Ground {
  constructor(scene, configBrink, rawImage) {
    this.scene = scene
    this.brinks = []
    this.brink_count = 19
    this.brink_width = rawImage.width
    this.max_brick_x = rawImage.width * (this.brink_count - 1)
    this.move_cool_down = 0
    this.y = this.scene.bg.height - rawImage.height / 2
    for (let i = 0; i < this.brink_count; i++) {
      let brink = new Brink(scene, configBrink, rawImage)
      brink.setPosition(i * brink.width, this.y)
      this.brinks[i] = brink
    }
    this.brinks[this.brink_count - 1].x = -this.brink_width
  }

  draw() {
    for (let i = 0; i < this.brink_count; i++) {
      let brink = this.brinks[i]
      brink.draw()
    }
  }

  update() {
    this.move_cool_down++
    if (this.move_cool_down == 5) {
      this.move_cool_down = 0
      for (let i in this.brinks) {
        let v = this.brinks[i]
        v.x += this.brink_width / 2
        if (v.x >= this.max_brick_x) {
          v.x = -this.brink_width
        }
      }
    }
  }
}
