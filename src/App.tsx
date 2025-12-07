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
      <section className='hidden md:grid grid-rows-[1fr_auto] h-screen'>
        <div className='flex flex-col h-full lg:flex-row gap-8 p-6'>
          <VersionContext.Provider value={{ estadoVersion, setEstadoVersion }}>
            <aside className='lg:w-100 space-y-6'>
              <Version />
              <Description />
            </aside>
            <Tablero />
          </VersionContext.Provider>
        </div>
        <Footer />
      </section>
      <Limit/>
    </>
  );
}

export default App;
