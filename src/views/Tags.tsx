import Layout from '../components/Layout'
import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  >li{
    border-bottom: 1px solid gray;
    line-height: 20px;
    margin: 0 16px ;
    
    >a{
      padding: 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #f60;
  border-radius: 4px;
  color: white;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Space = styled.div`
  height: 24px;
`

function Tags() {
  const [tags,setTags] = useState<{id:number,name:string}[]>([
    {id:1,name:'衣'},
    {id:2,name:'食'},
    {id:3,name:'住'},
    {id:4,name:'行'}])
  return(
    <Layout>
      <TagList>
        {tags.map(tag=><li key={tag.id}>
          <Link to={"/tags/"+tag}>
          <span className="oneLine"> {tag.name} </span>
          <Icon name="right"/>
          </Link>
        </li>)}

      </TagList>
      <Center>
      <Space/>
      <Button>新增标签</Button>
      <Space/>
      </Center>
    </Layout>
  )
}

export default Tags;