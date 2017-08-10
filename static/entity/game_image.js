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

    this.scene.addToDrawList(this)
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y)
  }

  update() {
    for (var k in this.animations) {
      this.animations[k].update()
    }
  }

  replace(image) {
    this.image = image
  }

  setAnimations(animations) {
    //log(animations)
    for (var k in animations) {
      var v = animations[k]
      var _this = this
      var finishCallback = function() {
        if (_this[k]) _this[k]()
      }
      //log(k, v)
      this.animations[k] = new Animation(this, v, finishCallback)
    }
    //log("setAnimations", this.animations)
  }

  runAnimation(name) {
    var ani = this.animations[name]
    if (ani) {
      ani.enable()
    }
    //log(name, ani)
  }

  setDead() {
    this.dead = true
  }

  isDead() {
    return this.dead
  }
}
