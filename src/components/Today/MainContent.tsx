import React from 'react'
import styled from 'styled-components'

const LeftContainer = styled.div`
  flex: 2;
  min-width: 250px;
  background: gold;
  border-right: 1px solid grey;
  padding: 0 40px;
  .main_img_container {
    background: #ebebeb;
    margin: 20px 0;
    height: 600px;
  }

  .sub_img_container {
    display: flex;
    align-items: center;
    height: 110px;
    background: #ebebeb;
    gap: 10px;
    overflow: scroll;
    max-width: 300px;
    .sub_item {
      background: #ebcbcb;
      width: 100px;
      height: 100px;
      border-radius: 16px;
    }
  }

  .tag_container {
  }
`

function MainContent(props) {
  return (
    <LeftContainer>
      <div>설명</div>
      <div className="main_img_container">img</div>
      <div className="sub_img_container">
        <div className="sub_item">item</div>
        <div className="sub_item">item</div>
      </div>
      <div className="tag_container"></div>
    </LeftContainer>
  )
}

export default MainContent
