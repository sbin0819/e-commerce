import styled from 'styled-components'

import { BsHeart, BsBookmarks, BsChat } from 'react-icons/bs'
import { AiOutlineShareAlt } from 'react-icons/ai'

const Container = styled.div`
  position: sticky;
  bottom: 1px;
  height: 46px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  .item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 20px;
    }
    span {
      margin-left: 5px;
      font-size: 12px;
    }
  }
`

function MFooter(props) {
  return (
    <Container>
      <div className="item">
        <BsHeart />
        <span>29</span>
      </div>
      <div className="item">
        <BsBookmarks />
        <span>27</span>
      </div>
      <div className="item">
        <BsChat />
        <span>5</span>
      </div>
      <div className="item">
        <AiOutlineShareAlt />
        <span>2</span>
      </div>
    </Container>
  )
}

export default MFooter
