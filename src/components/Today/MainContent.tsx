import React from 'react'
import styled from 'styled-components'

import Comment from './Comment'

import { mockData } from './mock'

const LeftContainer = styled.div`
  padding-top: 25px;
  flex: 2;
  min-width: 250px;
  border-right: 1px solid #eee;
  background: #fff;
  .top_info {
    margin: 0 30px;
    span {
      font-size: 15px;
      color: #757575;
      margin-right: 7px;
      padding-right: 7px;
      border-right: 1px solid #757575;
      :last-child {
        border: none;
      }
    }
    @media (max-width: 700px) {
      margin: 0 10px;
    }
  }
  .main_img_container {
    background: #ebebeb;
    margin: 20px 30px;
    height: 600px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 700px) {
      height: 450px;
      margin: 20px 0px;
    }
  }

  .sub_img_container {
    display: flex;
    margin: 20px 30px 30px;
    align-items: center;
    height: 110px;
    gap: 10px;
    overflow: scroll;
    max-width: 500px;
    .sub_item {
      width: 100px;
      height: 100px;
      border: 1px solid #eee;
      border-radius: 28px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 28px;
      }
    }
    @media (max-width: 750px) {
      margin: 20px 0px 30px;
      height: 80px;
      .sub_item {
        width: 72px;
        height: 72px;
        border-radius: 18px;
        max-width: 300px;
        img {
          border-radius: 18px;
        }
      }
    }
  }

  .tag_container {
    margin: 10px 30px;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    span {
      color: #424242;
      background: #fafafa;
      padding: 10px 12px;
      border-radius: 8px;
      margin-top: 8px;
      margin-right: 10px;
    }
    @media (max-width: 700px) {
      margin: 10px 0px;
    }
  }
`

function MainContent(props) {
  return (
    <LeftContainer>
      <div className="top_info">
        {mockData.shortInfo.map((data, idx) => (
          <React.Fragment key={idx}>
            <span>{data}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="main_img_container">
        <img src={`${mockData.mainImg}`} alt="main" />
      </div>
      <div className="sub_img_container">
        {Object.values(mockData.subImg).map((data, idx) => (
          <div className="sub_item" key={idx}>
            <img src={`${data}`} alt="sub" />
          </div>
        ))}
      </div>
      <div className="tag_container">
        {mockData.tags.map((data, idx) => (
          <span key={idx}># {data.title}</span>
        ))}
      </div>
      <Comment />
    </LeftContainer>
  )
}

export default MainContent
