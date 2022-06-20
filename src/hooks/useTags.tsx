import {useEffect, useState} from 'react'
import {createId} from '../lib/createId'
import {useUpdate} from './useUpdate'

const useTags = ()=> {
  const [tags,setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);

  }, []); // 组件挂载时执行

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id:number)=>tags.filter(tag =>tag.id===id)[0];

  const findTagIndex = (id:number) =>{
    let result = -1;
    for(let i=0;i<tags.length;i++){
      if(tags[i].id===id){
        result = i;
        break;
      }
      return result;
    }
  }
  const updateTag = (id:number,obj:{name:string}) => {
    const index = findTagIndex(id);
    // 获取要改的 tag 的下标
    const tagsClone = JSON.parse(JSON.stringify(tags))
    // 深拷贝 tags 得到 tagsClone
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    // 把 tagsClone 的第 index 删掉，换成 {id:id, name: obj.name}
    setTags(tagsClone)
  }

  const deleteTag = (id:number) =>{
    setTags(tags.filter(tag=>tag.id!==id))
  };
  const addTag=()=>{
    const tagName = window.prompt('请输入新标签名称')
    if(tagName!==null && tagName!==''){
      setTags([...tags, {id:createId(),name:tagName}])
    }
  };
  const getName =(id:number)=>{
    const tag = tags.filter(t=>t.id===id)[0];
    return tag ? tag.name : '无'
  }

  return {tags,getName,addTag,setTags,findTag,updateTag,findTagIndex,deleteTag}
};

export {useTags}