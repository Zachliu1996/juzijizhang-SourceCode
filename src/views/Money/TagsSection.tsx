import styled from 'styled-components'
import React, {useState} from 'react'

const Wrapper = styled.section`
  background: #fff;
  padding: 0 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #e8d3cb;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 4px 12px;

      &.selected {
        background: #fd7a4d;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #ffb79b;
    color: #ffb79b;
    margin-top: 8px;
  }
`
const TagsSection:React.FunctionComponent=(props)=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags,setSelectedTags] = useState<string[]>([])

    const onAddTag=()=>{
    const tagName = window.prompt('请输入新标签名称')
    if(tagName!==null){
      setTags([...tags,tagName])
    }
  }
  const onToggleTag = (tag:string)=>{
    const index = selectedTags.indexOf(tag);
    if(index>=0){
      setSelectedTags(selectedTags.filter(t=>t!==tag));
    }else{
      setSelectedTags([...selectedTags,tag])
    }
  }

  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
        <li key={tag} onClick={()=>{onToggleTag(tag)}} className={selectedTags.indexOf(tag)>=0 ? 'selected' : ''}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection};