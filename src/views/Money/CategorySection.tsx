import styled from 'styled-components'
import React, {useState} from 'react'

const Wrapper = styled.section`
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
type Props={
  value:'-' | '+',
  onChange:(value:'-'|'+')=>void
}
const CategorySection:React.FC<Props> = (props)=>{
  const [categoryList] = useState<('-' | '+')[]>(['-','+']);
  const category = props.value;
  const categoryMap = {'-':'支出','+':'收入'};


  return (
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li className={category===c ? 'selected' : ''} onClick={()=>{props.onChange(c)}} key={c}>
            {categoryMap[c]}
          </li>
        )}

      </ul>
    </Wrapper>
  )
}

export {CategorySection};