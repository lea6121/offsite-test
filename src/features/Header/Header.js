import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { status, setNavStatus } from '../../redux/reducers/statusReducer';

const FirstHeader = styled.div`
  background-color: rgb(57, 181, 230);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: white;
    margin-left: 10px;
  }
  p {
    color: white;
    font-size: 30px;
    font-weight: 700;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`
const SecondHeader = styled.nav`
  display: flex;
  color: #010101;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  a, i {
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    color: white;
    padding: 6px 5px;
  }
  .isActive {
  background: white;
  color: black;
  .bi-twitter,
  .bi-facebook,
  .bi-instagram,
  .bi-youtube {
    color: black;
  }
}
`

export default function Header() {
  const [isHide, setIsHide] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status.navStatus); 
  const changeStatus = (currentStatus) => {
    dispatch(setNavStatus(currentStatus))
  }
  const changeHideStatus = () => {
    setIsHide(!isHide);
  }

  return (
    <>
      <FirstHeader>
        <div></div>
        <h1>CARD</h1>
        <p>?</p>
      </FirstHeader>
      {!isHide &&
        <SecondHeader >
          <div></div>
          <div>
            <a onClick={() => changeStatus('all')} className={status === 'all' ? "isActive" : null}>ALL</a>
            <a onClick={() => changeStatus('twitter')} className={status === 'twitter' ? "isActive" : null}><i className="bi bi-twitter"></i></a>
            <a onClick={() => changeStatus('facebook')} className={status === 'facebook' ? "isActive" : null}><i className="bi bi-facebook"></i></a>
            <a onClick={() => changeStatus('instagram')} className={status === 'instagram' ? "isActive" : null}><i className="bi bi-instagram"></i></a>
            <a onClick={() => changeStatus('youtube')} className={status=== 'youtube' ? "isActive" : null}><i className="bi bi-youtube"></i></a>
          </div>
          <a className="hide" onClick={changeHideStatus}>HIDE</a>
        </SecondHeader>
      }
    </>
  )
}
