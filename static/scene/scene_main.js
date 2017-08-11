class SceneMain extends BaseScene {
  constructor(game, resourseManager, eventManager) {
    super(game)
    this.eventManager = eventManager
    this.resourseManager = resourseManager

    this.tube_cooldown = 0
    this.max_tube_cooldown = 60
    this.tubes = []
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

    let configBird = globalConfig.bird
    let birdRawImage = this.resourseManager.getImageByName(configBird.defaultImage)
    let bird = new Bird(this, configBird, birdRawImage)
    bird.setPosition(this.width / 2 - bird.width / 2, this.height / 2 - bird.width / 2)
    this.setImageAnimations(bird, configBird.image_animations)
    this.setRotateAnimations(bird, configBird.rotate_animations)
    this.bird = bird

    this.createTube()

    let _this = this
    let o = globalConfig.operation
    this.eventManager.registerClickHandler(o.jump, function() {
        _this.bird.jump()
    })
  }

  setImageAnimations(entity, animations) {
    for (var k in animations) {
      var v = animations[k]
      var finishCallback = function() {
        if (entity[k]) entity[k]()
      }
      entity.animations[k] = new ImageAnimation(entity, v, finishCallback)
    }
  }

  setRotateAnimations(entity, animations) {
    for (var k in animations) {
      var v = animations[k]
      var finishCallback = function() {
        if (entity[k]) entity[k]()
      }
      entity.animations[k] = new RotateAnimation(entity, v, finishCallback)
    }
  }

  draw() {
    super.draw()
    // 地板最后画
    this.ground.draw()
  }

  update() {
    super.update()
    this.ground.update()
    this.tube_cooldown++
    if (this.tube_cooldown == this.max_tube_cooldown) {
      this.tube_cooldown = 0
      this.createTube()
    }

    for (let i in this.tubes) {
      let tube = this.tubes[i]
      if (collide(tube, this.bird)) {
        log("dead")
        this.removeFromElements(this.bird)
        this.bird = null
        //this.gameover()
      }
    }
  }

  createTube() {
    let configUpTube = globalConfig.uptube
    let upTubeRawImage = this.resourseManager.getImageByName(configUpTube.defaultImage)
    let upTube = new Tube(this, configUpTube, upTubeRawImage)
    let up_y = randomBetween(100, 200)
    upTube.setPosition(this.width - upTube.width, up_y - upTube.height)
    this.tubes.push(upTube)

    let configDownTube = globalConfig.downtube
    let downTubeRawImage = this.resourseManager.getImageByName(configDownTube.defaultImage)
    let downTube = new Tube(this, configDownTube, downTubeRawImage)
    let down_y = randomBetween(100, 200)
    downTube.setPosition(this.width - upTube.width, this.height - down_y)
    this.tubes.push(downTube)
  }
}
