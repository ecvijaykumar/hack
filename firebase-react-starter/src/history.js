import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


import store from './store'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


history.listen(location => {
      console.log("Location Listener", location)
  }
)

export default history
