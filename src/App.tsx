
import './App.css'
import { AppBar } from './comps/AppBar'
import { Bottom } from './comps/Bottom'
import { Hero } from './comps/Hero'

import { Table } from './comps/Table'
import { ToggleDarklight } from './comps/Toggle_darklight'


function App() {
  return (
    <div>
    <AppBar />
    <div className="mt-10 mb-10">
    <Hero />
    </div>
    <Table />
    <div className="fixed bottom-0 w-full flex justify-center sm:justify-center bg-gradient-to-b from-tableheadgrey to-transparent">
  <Bottom />
</div>
                                                  
 
 
   
  </div>


  )
}

export default App
