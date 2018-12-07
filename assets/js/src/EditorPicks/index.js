const { FormToggle } = wp.components
const { PluginPostStatusInfo } = wp.editPost
const { compose, withInstanceId } = wp.compose
const { withSelect, withDispatch } = wp.data
const { registerPlugin } = wp.plugins

const Render = ({ isChecked = false, updateCheck, instanceId }) => {
  const callback = () => updateCheck(!isChecked)
  const id = instanceId + '-editors-pick'
  return (
    <PluginPostStatusInfo>
      <label htmlFor={id}>Editors Pick</label>
      <FormToggle
        key='toggle'
        checked={ isChecked }
        onChange={ callback }
        id={id}
      />
    </PluginPostStatusInfo>
  )
}

const EditorPicks = compose(
  [
    withSelect((select) => {
      return {
        isChecked: select('core/editor').getEditedPostAttribute('meta').editors_pick
      }
    }),
    withDispatch((dispatch) => {
      return {
        updateCheck (editors_pick) {
          dispatch('core/editor').editPost({ meta: { editors_pick } })
        }
      }
    }
    ),
    withInstanceId
  ]
)(Render)

registerPlugin('recipe-editors-pick', {
  render: EditorPicks
})
