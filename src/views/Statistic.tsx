import Layout from '../components/Layout'
import React, {useState} from 'react'
import {CategorySection} from './Money/CategorySection'
import {useRecords} from '../hooks/useRecords'
import styled from 'styled-components'
import {useTags} from '../hooks/useTags'
import day from 'dayjs'

const CategoryWrapper = styled.div`
  background: white;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background:white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  >.note{
    margin-right: auto;
    margin-left: 24px;
    color:#999;
  }
  >.amount{
    font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;;
  }
`

function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>('-')
  const {records} = useRecords();
  const {getName} = useTags();
  return(
    <Layout>
      <CategoryWrapper>
      <CategorySection value={category}
                       onChange={value=>setCategory(value)}/>
      </CategoryWrapper>
      <div>
        {records.map(r=>{
          return <Item>
            <div className="tags">
            {r.tagIds.map(tagId=><span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
            ￥ {r.amount}
            </div>
            {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>;
        })}
      </div>
    </Layout>
  )

}
export default Statistics;