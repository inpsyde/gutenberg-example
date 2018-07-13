const {registerBlockType} = wp.blocks

registerBlockType('recipe/ingredients', {
  title: 'Ingredients',
  icon: 'universal-access-alt',
  category: 'common',
  supports: {
    html: false // Do not show the Edit HTML option.
  },
  edit: () => {
    return null
  },

  save: () => {
    return null
  }
})
