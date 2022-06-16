import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import React from 'react'
import Icon from './Icon'


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  background: #fff;

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 0;

        .icon {
          width: 30px;
          height: 30px;
        }

        &.selected {
          color: #ff7300;
          transform: scale(1.2);

          .icon {
            fill: #096e09;
          }
        }
      }
    }
  }
`;

const Nav=()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name='tag'/>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name='money2'/>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name='chart'/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;