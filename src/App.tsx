import { Route, BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
