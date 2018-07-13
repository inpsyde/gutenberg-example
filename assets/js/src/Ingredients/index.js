import IngredientsList from './Modules/IngredientsList.js'

const {registerBlockType} = wp.blocks

registerBlockType('recipe/ingredients', {
  title: 'Ingredients',
  icon: 'universal-access-alt',
  category: 'common',
  supports: {
    html: false // Do not show the Edit HTML option.
  },
  edit: () => {
    return <IngredientsList />
  },

  save: () => {
    return null
  }
})
