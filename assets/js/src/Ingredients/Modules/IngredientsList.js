const { withSelect } = wp.data
const Render = ({selected, isRequesting}) => {
  if (isRequesting) {
    return <p>Loading</p>
  }
  return (
    <ul>
      {
        selected.map((term) => {
          return (
            <li>{term.name}</li>
          )
        })
      }
    </ul>
  )
}

const IngredientsList = withSelect(
  (select) => {
    const selectedIds = select('core/editor').getEditedPostAttribute('categories')
    const { getCategories, isRequestingCategories } = select('core')
    var selected = []
    if (!isRequestingCategories() && getCategories()) {
      selected = getCategories().filter(
        term => {
          return selectedIds.indexOf(term.id) !== -1
        }
      )
    }
    return {
      isRequesting: isRequestingCategories(),
      selected
    }
  }
)(Render)

export default IngredientsList
