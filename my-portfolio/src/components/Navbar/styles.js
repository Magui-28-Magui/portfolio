import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2rem solid #000;
`
export const MenuLink = styled.li`
  color: #000000;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  font-weight: bold;
  &:hover {
    color: #FF90E8;
    font-weight:bold;
  }
`

export const ImageNavbar = styled.img`
margin-left: 1rem;
width: auto;
height:auto;
padding:0.3rem;
`

export const GetInTouch = styled.div`
  color: #ffffff;
  border: 0.2rem solid #000000;
  width: 20rem;
  padding: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: #000000;
  &:hover{
        background-color: #BED149;
        color: #000000;
        border: 0.2rem solid #BED149;
    }
  `

export const GetInTouchText = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-top:0.3rem;
  `

export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`