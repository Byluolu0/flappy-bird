class Game {
  constructor(canvas, resourseManager, eventManager) {
      this.canvas = canvas
      this.ctx = canvas.getContext('2d')
      this.resourseManager = resourseManager
      this.eventManager = eventManager
      this.curScene = null
      this.createStartScene()
  }

  createStartScene() {
    var s = new SceneStart(this)
    this.setScene(s)
  }

  setScene(s) {
    this.curScene = s
  }

  runLoop() {
    this.curScene.update()
    this.curScene.draw()
  }
}
