class BaseScene {
  constructor(game) {
    this.game = game
    this.canvas = game.canvas
    this.ctx = game.ctx
    this.width = game.canvas.width
    this.height = game.canvas.height
    this.elements = []
  }

  addToElements(element) {
    this.elements.push(element)
  }

  removeFromElements(element) {
    var index = this.elements.indexOf(element)
    this.elements.splice(index, 1)
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (var i in this.elements) {
      var drawItem = this.elements[i]
      drawItem.draw()
    }
  }

  update() {
    for (var i in this.elements) {
      var v = this.elements[i]
      v.update()
    }
  }
}
