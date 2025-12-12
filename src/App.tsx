// styles
import './App.css';
// hooks
import { useState } from 'react';
import { VersionContext } from './hooks/contexts';
// components
import { Tablero } from './ui/Tablero';
import { Navbar } from './ui/Navbar';
import { Footer } from './ui/Footer';
import { Aside } from './ui/Aside';
// import { Limit } from './ui/Limit';



function App() {
  const [estadoVersion, setEstadoVersion] = useState("");

  return (
    <>
      <Navbar />
      <section className='grid grid-rows-[1fr_auto] min-h-screen'>
        <div className='relative flex flex-col h-full md:flex-row gap-4 sm:gap-6 md:gap-8 p-3 sm:p-4 md:p-6 overflow-auto'>
          <VersionContext.Provider value={{ estadoVersion, setEstadoVersion }}>
            <Aside />
            <Tablero />
          </VersionContext.Provider>
        </div>
        <Footer />
      </section>
      {/* Este componente es para cuando se necesite bloquear una dimension especifica de pantalla */}
      {/* <Limit /> */}
    </>
  );
}

export default App;
