class SceneStart extends BaseScene {
  constructor(game) {
    super(game)
    this.eventManager = game.eventManager
    this.resourseManager = game.resourseManager

    this.__init()
  }

  __init() {
    let configBg = globalConfig.bg
    let bgRawImage = this.resourseManager.getImageByName(configBg.defaultImage)
    let bg = new StartBg(this, configBg, bgRawImage)
    bg.setPosition(0, 0)
    this.bg = bg

    let _this = this
    let o = globalConfig.operation
    this.eventManager.registerClickHandler(o.jump, function() {
      var s = new SceneMain(_this.game)
      _this.game.setScene(s)
    })
  }

  draw() {
    super.draw()
      this.ctx.textAlign = "center"
      this.ctx.fillText(globalString.start_tip, this.width / 2, this.height / 2)
  }
}
