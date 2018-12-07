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
    const { isResolving } = select('core/data')
    const { getEntityRecords } = select('core')

    var selected = []
    var isRequesting = false
    if (selectedIds.length) {
      const query = {
        per_page: -1,
        include: selectedIds
      }
      const records = getEntityRecords(
        'taxonomy', 'category', query)
      isRequesting = isResolving('core', 'getEntityRecords', [ 'taxonomy', 'category', query ])

      selected = (!records) ? [] : records
    }

    return {
      isRequesting,
      selected
    }
  }
)(Render)

export default IngredientsList
