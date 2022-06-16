import styled from 'styled-components'

const CategorySection = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #ff9c76;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        background: #04a1dc;
        display: block;
        height: 3px;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
  }
`
export {CategorySection};