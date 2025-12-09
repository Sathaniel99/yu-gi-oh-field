import { Version } from './ui/Version';
import { Tablero } from './ui/Tablero';
import { Description } from './ui/Descript';
import { Navbar } from './ui/Navbar';
import { Footer } from './ui/Footer';
import { Limit } from './ui/Limit';
import './App.css';
import { useState } from 'react';
import { VersionContext } from './hooks/contexts';



function App() {
  const [estadoVersion, setEstadoVersion] = useState("");

  return (
    <>
      <Navbar />
      <section className='grid grid-rows-[1fr_auto] min-h-screen'>
        <div className='flex flex-col h-full md:flex-row gap-4 sm:gap-6 md:gap-8 p-3 sm:p-4 md:p-6 overflow-auto'>
          <VersionContext.Provider value={{ estadoVersion, setEstadoVersion }}>
            <aside className='w-full md:w-80 lg:w-96 space-y-4 sm:space-y-6 shrink-0'>
              <Version />
              <Description />
            </aside>
            <div className='flex-1 min-w-0 overflow-hidden'>
              <Tablero />
            </div>
          </VersionContext.Provider>
        </div>
        <Footer />
      </section>
      <Limit />
    </>
  );
}

export default App;
