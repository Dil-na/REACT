import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {UserProvider} from './Components/Hooks/useContext/UserContext'
import { Provider } from 'react-redux';
import { store } from './redux/Store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </UserProvider>
  </StrictMode>,
)
