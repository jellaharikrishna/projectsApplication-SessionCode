import './index.css'

const TabItem = props => {
  const {tabDetails, onClickProjectsTab, isActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickProjects = () => {
    onClickProjectsTab(tabId)
  }

  const isActive = isActiveTabId ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActive}`}
        onClick={onClickProjects}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
