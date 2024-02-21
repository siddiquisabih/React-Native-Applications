
import React from 'react';
import MainPage from './src/components/mainPage';
import { CustomThemeProvider } from './src/context/themeContext';




function App(): React.JSX.Element {

  return (
    <CustomThemeProvider>
      <MainPage />
    </CustomThemeProvider>
  );
}



export default App;