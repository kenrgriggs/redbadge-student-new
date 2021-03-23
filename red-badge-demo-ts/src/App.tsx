import React from "react";
import PropsExample from './components/PropsExample.jsx'
import PropsMappingExample from './components/PropsMapping'

function App() {
  const VisitedPlaces = ["California", "Utah", "Kentucky", "Ontario", "Louisiana", "Michigan"]
  return (
  <div>
    <PropsExample name="Tom" business="MySpace" />
    <PropsMappingExample visited={VisitedPlaces} />
  </div>
  )
}

export default App;
