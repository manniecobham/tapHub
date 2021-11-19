import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 546px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: auto;
  `

export const SidebarContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: lavender;
  height:100%;
  width:100%;
  align-items: center;
  /* justify-content: center; */
  padding-left: 30px;
  border-bottom: 1px solid gray;
  transition: background .2s ease-out;
  &:hover {
    background: ivory;
  }
`

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const SidebarContentRight = styled.div`
  width: 50%;
  height: 100%;
  /* position: relative; */
  padding:  30px;
  /* background: yellow; */
`

export const SidebarText = styled.span`
  display: flex;
  flex-direction: column;
`
