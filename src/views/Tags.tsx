import Layout from '../components/Layout'
import React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'
import {useTags} from '../hooks/useTags'
import {Button} from '../components/Button'
import {Center} from '../components/Center'

const Space = styled.div`
  height: 24px;
`
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
const Header = styled.h3`
  text-align: center;
  padding: 16px;
  background: #ff9c76;
  color:white;
  margin-bottom: 8px;
`

function Tags() {
  const {tags,addTag} = useTags();
  return(
    <Layout>
      <TagList>
        <Header>
          所有标签
        </Header>
        {tags.map(tag=>
          <li key={tag.id}>
          <Link to={"/tags/"+tag.id}>
          <span className="oneLine"> {tag.name} </span>
          <Icon name="right"/>
          </Link>
        </li>)}

      </TagList>
      <Center>
        <Space/>
        <Space/>
      <Button onClick={addTag}>新增标签</Button>
      <Space/>
      </Center>
    </Layout>
  )
}

export default Tags;