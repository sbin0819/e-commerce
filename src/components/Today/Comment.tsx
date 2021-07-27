import Icon from '../common/Icon'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import { BsHeart } from 'react-icons/bs'

import { mockComment, mockData } from './mock'
import React from 'react'

const Container = styled.div`
  margin: 30px 15px 0;
  padding: 30px 0;

  border-top: 1px solid #ececec;
`

const WriteField = styled.div`
  width: 100%;
  .text_field {
    display: flex;
    gap: 8px;
    width: 100%;
    .input_wrapper {
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 38px;
      border: 1px solid #ececec;
      textarea {
        font-size: 15px;
        padding: 4px 14px;
        width: 100%;
        overflow: visible;
        border: none;
        resize: none;
        :focus {
          border: none;
          outline: none;
        }
      }
      button {
        border: none;
        background: none;
        margin-right: 8px;
        font-size: 15px;
        color: #a3e4f8;
      }
    }
  }
`

const BottomWrapper = styled.div`
  margin-top: 25px;
`

const FeedWrapper = styled.div`
  margin-top: 20px;
  .body {
    align-items: center;
    display: flex;
    gap: 10px;
    color: #424242;
    font-size: 15px;
    .username {
      font-weight: bold;
    }
    .comment {
      margin-top: 6px;
    }
  }
  .footer {
    display: flex;
    margin-top: 10px;
    margin-left: 48px;
    gap: 12px;
    .date {
      color: #757575;
    }
    .like {
      display: flex;
      gap: 2px;
    }
  }
`

function Comment(props) {
  return (
    <Container>
      <WriteField>
        <div style={{ margin: '0 0 12px 5px', fontWeight: 'bold' }}>
          댓글
          <span style={{ marginLeft: '5px' }}>0</span>
        </div>
        <div className="text_field">
          <Icon />
          <form className="input_wrapper">
            <TextareaAutosize />
            <button>등록</button>
          </form>
        </div>
      </WriteField>
      <BottomWrapper>
        {mockComment.map((data, idx) => (
          <React.Fragment key={idx}>
            <FeedWrapper>
              <div className="body">
                <Icon />
                <div>
                  <div className="username">{data.username}</div>
                  <div className="comment">{data.comment}</div>
                </div>
              </div>
              <div className="footer">
                <div className="date">1시간 전</div>
                <div className="like">
                  <div>
                    <BsHeart />
                  </div>
                  <div>좋아요</div>
                </div>
                <div className="write_feed">답글 달기</div>
              </div>
            </FeedWrapper>
          </React.Fragment>
        ))}
      </BottomWrapper>
    </Container>
  )
}

export default Comment
