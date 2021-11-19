import React from 'react'
import { SidebarContentContainer, SidebarContent, SidebarText, SidebarContentRight } from './GraphSidebar.styles'

const GraphSidebarItem = () => {
  return (
    <SidebarContentContainer>
      <SidebarContent>
        <SidebarText>
          Space utilization
        </SidebarText>
        <SidebarText>
          52%
        </SidebarText>
      </SidebarContent>
      <SidebarContentRight>
        <SidebarText>
          2.1% dd/dd
        </SidebarText>
      </SidebarContentRight>
    </SidebarContentContainer>
  )
}

export default GraphSidebarItem
