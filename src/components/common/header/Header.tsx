import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Button } from '..'

import { comunityList } from '../../../libs/menus'

const Container = styled.div`
  color: #424242;
`

const Top = styled.div`
  position: sticky;
  height: 60px;
  padding: 60px 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  .logo {
    font-size: 30px;
  }
  .nav_left {
    margin-left: 15px;
    display: flex;
    div {
      position: relative;
      display: inline-block;
      margin: 6px 10px 0;
      padding: 14px 6px;
      font-size: 18px;
      line-height: 26px;
      font-weight: 700;
    }
  }
  .nav_right {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .link {
      position: relative;
      display: inline-block;
      margin: 0 9px 0 8px;
      padding: 2px;
      color: #757575;
      font-size: 15px;
      font-weight: 700;
      line-height: 20px;
      font-size: 15px;
    }
    .dropdown {
      width: 85px;
    }
  }
`

const Nav = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid #eee;
  div {
    font-size: 15px;
    line-height: 23px;
    margin: 8px 4px;
    padding: 6px 8px 4px;
    color: #424242;
  }
`

const Header = () => {
  return (
    <Container>
      <Top>
        <div className="logo">
          <Link to="/">AEKI</Link>
        </div>
        <div className="nav_left">
          <div>
            <Link to="/">커뮤니티</Link>
          </div>
          <div>
            <Link to="/store">스토어</Link>
          </div>
          <div>
            <Link to="/">인테리어시공</Link>
          </div>
        </div>
        <div className="nav_right">
          <div className="link login">
            <Link to="/login">로그인</Link>
          </div>
          <div className="link signup">
            <Link to="/signup">회원가입</Link>
          </div>
          <div className="dropdown">
            <Button>글쓰기</Button>
          </div>
        </div>
      </Top>
      <Nav>
        {comunityList.map((data, i) => (
          <div key={i}>
            <Link to={`${data.url}`}>{data.label}</Link>
          </div>
        ))}
      </Nav>
    </Container>
  )
}

export default Header
