import React from 'react'
import { BrowserRouter, NavLink, Route, Routes, Link } from "react-router-dom";
import { Intro} from './Pages'


const App = () => {

      return (
        <BrowserRouter>
          <div className='introHome'>
            {/* <NavLink to="/intro" className={({isActive})=>isActive ? '':''}>Intro</NavLink> */}
            <Link to="/intro" className='introButton'>Intro</Link>

          </div>
          <Routes>
            <Route path='/intro' element={<Intro />} />
          </Routes>
            
        
        </BrowserRouter>
      )
}

export default App;


