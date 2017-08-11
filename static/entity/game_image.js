class GameImage {
  constructor(scene, cfg, rawImage) {
    this.scene = scene
    this.canvas = scene.canvas
    this.ctx = scene.ctx
    this.image = rawImage
    this.width = rawImage.width
    this.height = rawImage.height
    this.x = 0
    this.y = 0
    this.dead = false
    this.animations = {}

    this.degree = 0

    this.addToElements()
  }

  addToElements() {
    this.scene.addToElements(this)
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  update() {
    for (var k in this.animations) {
      this.animations[k].update()
    }
  }

  addAnimations(animations) {
    for (var k in animations) {
      var v = animations[k]
      var _this = this
      var finishCallback = function() {
        if (_this[k]) _this[k]()
      }
      this.animations[k] = new Animation(this, v, finishCallback)
    }
  }

  runAnimation(name) {
    var ani = this.animations[name]
    if (ani) {
      ani.enable()
    }
  }

  resetAnimation(name) {
    var ani = this.animations[name]
    if (ani) {
      ani.reset()
    }
  }

  setDead() {
    this.dead = true
  }

  isDead() {
    return this.dead
  }

  setRawImage(name) {
    let toImage = this.scene.resourseManager.getImageByName(name)
    if (name) {
      this.image = toImage
    }
  }

  draw() {
    if (this.degree % 360 == 0) {
      this.ctx.drawImage(this.image, this.x, this.y)
    } else {
      this.drawRotate(this.degree)
    }
  }

  drawRotate(degree) {
    let translate_x = this.x + this.width / 2
    let translate_y = this.y + this.height / 2
    this.ctx.translate(translate_x, translate_y)
    this.ctx.rotate(degree * Math.PI / 180)
    this.ctx.drawImage(this.image, -this.width / 2, -this.height / 2)
    this.ctx.rotate(-degree * Math.PI / 180)
    this.ctx.translate(-translate_x, -translate_y)
  }

  rotate(degree) {
    this.degree = degree
  }
}
