import { useState } from 'react';

import NavigationBar from './components/navigation-bar/NavigationBar';
import Dashboard from './pages/Dashboard';

const App = () => {

  const [ isSignedIn, setIsSignedIn ] = useState(false);

  return (
    <>
      <NavigationBar setIsSignedIn={setIsSignedIn} />
      {isSignedIn && <Dashboard />}
    </>
  );

}

export default App;
