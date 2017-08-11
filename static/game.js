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
    var s = new SceneMain(this, this.resourseManager, this.eventManager)
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
