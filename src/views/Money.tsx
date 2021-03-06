import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection'
import {useRecords} from '../hooks/useRecords'


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const defaultFormData = {
  tagIds:[] as number[],
  note:'',
  category:'-' as ('-' | '+'),
  amount:0
}
const Header = styled.div`
  background-color: #ff9c76;
  text-align:center;
  line-height: 48px;
  font-size: 24px;
  padding: 4px 0;
`
function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const { addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  }
  const submit = () => {
    addRecord(selected);
    setSelected(defaultFormData);
  };

  return(
    <MyLayout>
      <Header>桔子记账</Header>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds=>onChange({tagIds})}/>

      <NoteSection value={selected.note} onChange={note=>onChange({note})}  />

      <CategorySection value={selected.category}
                       onChange={category=>onChange({category})}/>

      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}
                        />

    </MyLayout>
  )
}

export default Money;