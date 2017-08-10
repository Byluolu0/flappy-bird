class SceneStart extends BaseScene {
  constructor(game, resourseManager, eventManager) {
    super(game)
    this.eventManager = eventManager
    this.resourseManager = resourseManager

    this.__init()
  }

  __init() {
    let configBg = globalConfig.bg
    let bgRawImage = this.resourseManager.getImageByName(configBg.defaultImage)
    let bg = new StartBg(this, configBg, bgRawImage)
    bg.setPosition(0, 0)
    this.bg = bg

    let configBrink = globalConfig.brink
    let brinkRawImage = this.resourseManager.getImageByName(configBrink.defaultImage)
    let ground = new Ground(this, configBrink, brinkRawImage)
    this.ground = ground
  }

  draw() {
    super.draw()
  }

  update() {
    super.update()
    this.ground.update()
  }
}
