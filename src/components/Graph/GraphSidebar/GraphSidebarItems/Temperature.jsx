import React, { useContext } from 'react'
import { SidebarContentContainer, 
        SidebarContentTop, 
        SidebarText, 
        SidebarContentBottom, 
        SidebarRelativeChange 
      } from '../GraphSidebar.styles'
import Context from "../../../../context/context";


const Temperature = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>
          Temperature
        </SidebarText>
        <SidebarRelativeChange>
          11.1% dd/dd
        </SidebarRelativeChange>
      </SidebarContentTop>
      <SidebarContentBottom>
        {context["userData"]["location"]["metricAverages"]["temperature"]}&deg;F
      </SidebarContentBottom>
    </SidebarContentContainer>
  )
}

export default Temperature
