import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 546px;
  margin: 5px 0 20px 5px;
  overflow: auto;
  `

export const SidebarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: azure;
  height:100%;
  width:100%;
  /* align-items: center; */
  /* justify-content: center; */
  padding-left: 20px;
  border-bottom: 1px solid lightgray;
  /* border-right: 1px solid lightgray; */
  transition: background .2s ease-out;
  &:hover {
    background: white;
  }
`

export const SidebarContentTop = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  justify-content: space-between;
`

export const SidebarText = styled.span`
  display: flex;
  flex-direction: column;
  color: darkslategray;
`

export const SidebarRelativeChange = styled.span`
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  background: lightgray;
  border-radius: 5px;
  padding: 2px 10px 2px 10px;
  color: darkslategray;
`

export const SidebarContentBottom = styled.div`
  display: flex;
  padding-top: 5px;
  font-size: 32px;
  font-weight: 600;
  color: black;
`