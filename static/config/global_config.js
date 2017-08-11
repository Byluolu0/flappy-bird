
const globalConfig = {
  fps: 30,
  image_animation_cooldown: 5,
  rotate_animation_cooldown: 2,
  image_path: {
    logo: '../static/images/logo.png',
    bg: '../static/images/background.png',
    ground: '../static/images/ground.png',
    getready: '../static/images/getready.png',
    tube1: '../static/images/tube1.png',
    tube2: '../static/images/tube2.png',
    bird0: '../static/images/bird0.png',
    bird1: '../static/images/bird1.png',
    bird2: '../static/images/bird2.png',
    bird3: '../static/images/bird3.png',
  },
  bg: {
    defaultImage: 'bg',
  },
  brink: {
    defaultImage: 'ground',
  },
  bird: {
    defaultImage: 'bird0',
    image_animations: {
      idle: [
        'bird0',
        'bird1',
        'bird2',
        'bird3',
      ],
    },
    rotate_animations: {
      drop: [
        -45,
        -30,
        -15,
        0,
        15,
        30,
        45,
      ]
    },
  },
  uptube: {
    defaultImage: 'tube1',
  },
  downtube: {
    defaultImage: 'tube2',
  },
  operation: {
    jump: 'j',
  },
}
