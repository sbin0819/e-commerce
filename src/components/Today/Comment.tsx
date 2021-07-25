import Icon from '../common/Icon'
import styled from 'styled-components'

const Container = styled.div`
  margin: 30px 15px 0;
  padding: 30px 0;

  border-top: 1px solid #ececec;
`

const CommentFieldWrapper = styled.div`
  width: 100%;
  .text_field {
    display: flex;
    gap: 8px;
    width: 100%;
    input {
      width: 100%;
    }
    input[type='submit'] {
      margin-left: -50px;
      height: 20px;
      width: 50px;
    }
  }
`

function Comment(props) {
  return (
    <Container>
      <CommentFieldWrapper>
        <div style={{ margin: '0 0 12px 5px', fontWeight: 'bold' }}>
          댓글
          <span style={{ marginLeft: '5px' }}>0</span>
        </div>
        <div className="text_field">
          <Icon />
          <input style={{ width: '100%' }} />
        </div>
      </CommentFieldWrapper>
    </Container>
  )
}

export default Comment
