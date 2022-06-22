import {useEffect, useState} from 'react'
import {useUpdate} from './useUpdate'

export type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string // ISO 8601
}
type newRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
  const initialRecord = JSON.stringify([{
      tagIds: [1],
      note: "买衣服支出",
      category: "-",
      amount: 1000,
      createdAt: "2022-06-20T12:28:48.502Z"
    },
    {
      tagIds: [2],
      note: "卖水果收益",
      category: "+",
      amount: 2000,
      createdAt: "2022-06-19T12:28:48.502Z"
    }
    ])

  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || initialRecord));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: newRecordItem) => {
    if(newRecord.amount<=0){
      alert('请输入金额')
      return;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    alert('保存成功');
  };


  return {records, addRecord};
};