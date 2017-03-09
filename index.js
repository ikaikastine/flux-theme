const backgroundColor = '#353845'
const foregroundColor = '#ffffff'
const black = '#546e7a'
const blue = '#90d8ff'
const cyan = '#90ffef'
const green = '#50fa7b'
const orange = '#fad050'
const magenta = '#bd93f9'
const red = '#fa7b50'
const yellow = '#fad050'
const white = '#ffffff'
const lightBlack = '#b0bec5'
const lightRed = '#fba284'
const lightGreen = '#84fba2'
const lightYellow = '#fbde84'
const lightOrange = '#fbde84'
const lightBlue = '#b1e3ff'
const lightMagenta = '#d0b3fa'
const lightCyan = '#90ffef'
const lightWhite = '#ffffff'


exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    colors: [
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite
    ]
  });
}
