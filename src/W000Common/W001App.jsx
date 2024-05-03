import React from 'react'
import { useMatches,useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const App = () => {
    const matches = useMatches();
    const outlet = useOutlet();
    return (
      <AnimatePresence>
        <React.Fragment key={matches[1].pathname}>{outlet}</React.Fragment>
      </AnimatePresence>
    );
}

export default App;