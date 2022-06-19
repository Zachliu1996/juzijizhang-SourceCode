import styled from 'styled-components'
import React, {useState} from 'react'
import {useTags} from 'hooks/useTags'

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

type Props = {
  value: number[],
  onChange: (selected:number[]) => void,
}
const TagsSection:React.FunctionComponent<Props>=(props)=>{

  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagID:number)=>{
    const index = selectedTagIds.indexOf(tagID);
    if(index>=0){
      props.onChange(selectedTagIds.filter(t=>t!==tagID));
    }else{
      props.onChange([...selectedTagIds,tagID])
    }
  }

  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
        <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={selectedTagIds.indexOf(tag.id)>=0 ? 'selected' : ''}>{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection};
