class ScoreBoard {
  constructor(scene) {
    this.scene = scene
    this.ctx = this.scene.ctx
    this.score = 0
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  addScore(delta) {
    this.score += delta
  }

  draw() {
    this.ctx.fillText("score: " + this.score, this.x, this.y)
  }
}
