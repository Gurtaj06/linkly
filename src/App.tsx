
import './App.css'
import { AppBar } from './comps/AppBar'
import { Bottom } from './comps/Bottom'

import { Table } from './comps/Table'


function App() {
  return (
    <div>
     
     <AppBar />                                                                                                         
   <Table />
   <div className="fixed bottom-0 w-full flex justify-center sm:justify-center  font-extralight bg-gradient-to-b from-transparent to-tablerowgrey ">
  <Bottom />
</div>

    </div>


  )
}

export default App
