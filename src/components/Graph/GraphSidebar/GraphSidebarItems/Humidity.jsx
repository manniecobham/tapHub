import React, { useContext } from 'react'
import { SidebarContentContainer, 
        SidebarContentTop, 
        SidebarText, 
        SidebarContentBottom, 
        SidebarRelativeChange 
      } from '../GraphSidebar.styles'
import Context from "../../../../context/context";


const Humidity = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>
          Humidity
        </SidebarText>
        <SidebarRelativeChange>
          Comfort
        </SidebarRelativeChange>
      </SidebarContentTop>
      <SidebarContentBottom>
        {context["userData"]["location"]["metricAverages"]["humidity"]}%
      </SidebarContentBottom>
    </SidebarContentContainer>
  )
}

export default Humidity
