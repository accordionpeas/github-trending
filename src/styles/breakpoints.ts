import facepaint from 'facepaint'

export const small = 768
export const medium = 1024
export const large = 1440

export default facepaint([
  `@media(min-width: ${small}px)`,
  `@media(min-width: ${medium}px)`,
  `@media(min-width: ${large}px)`,
])
