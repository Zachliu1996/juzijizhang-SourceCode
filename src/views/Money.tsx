import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection'


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  const [selected,setSelected] = useState({
    tagIds:[] as number[],
    note:'',
    category:'-' as ('-' | '+'),
    amount:0
  })

const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({...selected, ...obj})
}

  return(
    <MyLayout>
      {selected.tagIds.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <TagsSection value={selected.tagIds}
                   onChange={tagIds=>onChange({tagIds})}/>

      <NoteSection value={selected.note} onChange={note=>onChange({note})}  />

      <CategorySection value={selected.category}
                       onChange={category=>onChange({category})}/>

      <NumberPadSection value={selected.amount}
                        onChange={amount=>onChange({amount})} onOk={()=>{}}/>

    </MyLayout>
  )
}

export default Money;