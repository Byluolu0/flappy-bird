class Ground {
  constructor(scene, configBrink, rawImage) {
    this.scene = scene
    this.brinks = []
    this.brink_width = rawImage.width
    this.max_brick_x = rawImage.width * 18
    this.move_cool_down = 0
    for (let i = 0; i < 19; i++) {
      let brink = new Brink(scene, configBrink, rawImage)
      brink.setPosition(i * brink.width, this.scene.bg.height - brink.height / 2)
      this.brinks[i] = brink
    }
    this.brinks[18].x = -this.brink_width
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
