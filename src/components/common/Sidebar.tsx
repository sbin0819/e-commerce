import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '.';

import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

import {
  comunityList,
  categoryList,
  storeList,
  usersMenuList,
} from '../../libs/menus';

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  color: #424242;

  transition: 0.3s linear;
`;

const Rest = styled.div`
  width: 60%;
  height: 100%;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    width: 30%;
  }
`;

const Side = styled.div`
  background: #fff;
  border-left: 1px solid #eee;
  width: 40%;
  height: 100%;
  z-index: 2;
  overflow: scroll;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;

const SidebarContainer = styled.div`
  margin: 20px 25px;
`;

const Logo = styled.div`
  font-size: 28px;
`;

const AccountBtns = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 25px;
  button {
    width: 100%;
  }
`;

const Menus = styled.div`
  margin-top: 30px;
  .dropdown {
    :first-child {
      border-top: 1px solid #888;
    }
    border-bottom: 1px solid #888;
  }
  .btn {
    padding: 15px 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .user_menu {
    margin-top: 10px;
  }
  li {
    padding: 7px 10px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
  }
`;

const InnerMenu = styled.div`
  .inner_btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    font-weight: 400;
  }
`;

interface IProps {
  onClose?: any;
}

const Sidebar: React.FC<IProps> = ({ onClose }) => {
  const history = useHistory();
  const [communityBtn, setCommunityBtn] = useState(false);
  const [storeBtn, setStoreBtn] = useState({
    isOpen: true,
    isCategoryOpen: false,
  });
  return (
    <Container>
      <Side>
        <SidebarContainer>
          <Logo>AEKI</Logo>
          <AccountBtns>
            <Button onClick={() => history.push('/login')}>로그인</Button>
            <Button onClick={() => history.push('/signup')}>회원가입</Button>
          </AccountBtns>
          <Menus>
            <div className="dropdown community">
              <div
                className="btn"
                onClick={() => setCommunityBtn((state) => !state)}
              >
                <div>커뮤니티</div>
                <div>
                  {communityBtn ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </div>
              </div>
              {communityBtn && (
                <ul>
                  {comunityList.map((data, i) => (
                    <li key={i}>
                      <Link to={`${data.url}`}>{data.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="dropdown store">
              <div
                className="btn"
                onClick={() =>
                  setStoreBtn((state) => ({ ...state, isOpen: !state.isOpen }))
                }
              >
                <div>스토어</div>
                <div>
                  {storeBtn.isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </div>
              </div>
              {storeBtn.isOpen && (
                <ul>
                  {storeList.map((data, i) => (
                    <li key={i}>
                      {data.label !== '카테고리' ? (
                        <Link to={`${data.url}`}>{data.label}</Link>
                      ) : (
                        <InnerMenu
                          onClick={() =>
                            setStoreBtn((state) => ({
                              ...state,
                              isCategoryOpen: !state.isCategoryOpen,
                            }))
                          }
                        >
                          <div className="inner_btn">
                            <div>{data.label}</div>
                            <div>
                              {storeBtn.isCategoryOpen ? (
                                <RiArrowUpSLine />
                              ) : (
                                <RiArrowDownSLine />
                              )}
                            </div>
                          </div>
                          {storeBtn.isCategoryOpen && (
                            <ul>
                              {categoryList.map((data, i) => (
                                <li key={i}>
                                  <Link to={`${data.url}`}>{data.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </InnerMenu>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="user_menu">
              <ul>
                {usersMenuList.map((data, i) => (
                  <li key={i}>
                    <Link to={`${data.url}`}>{data.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Menus>
        </SidebarContainer>
      </Side>
      <Rest
        onClick={() => {
          onClose();
        }}
      />
    </Container>
  );
};

export default Sidebar;
