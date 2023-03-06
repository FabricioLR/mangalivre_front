import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './storage'
import { MangaTypes } from './storage/ducks/manga/types'

store.dispatch({ type: MangaTypes.GET_MANGAS_REQUEST })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
