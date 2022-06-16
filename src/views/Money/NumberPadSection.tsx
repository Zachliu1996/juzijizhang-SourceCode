import styled from 'styled-components'
import React from 'react'
require('helper.scss')

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
    font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  }

  > .pad {
    
    > button {
      font-size: 18px;
      border: none;
      float: left;
      width: 25%;
      height: 64px;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }
      
      &:nth-child(1) {
        background: #ffb79b;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #ff9c76;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #ff8153;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #ff6832;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #f6581f;
      }

      &:nth-child(12) {
        background: #da720b;
      }

      &:nth-child(14) {
        background: #ff8153;
      }
    }
  }
`
type Props = {
  value:number,
  onChange:(value:number)=>void;
  onOk?:()=>void;
}

const NumberPadSection:React.FC<Props> = (props)=>{
  const output = props.value.toString();
  const setOutput = (output:string)=>{
    let value
    if (output.length>16){value = parseFloat(output.slice(0,16))}
  else if (output.length === 0) {
      value = 0;
    }else {value = parseFloat(output)}
    props.onChange(value);
  }
  const onClickButtonWrapper = (e:React.MouseEvent)=>{
    const text = (e.target as HTMLButtonElement).textContent;
    if(text===null){return;}
    if (text==='ok'){
      if(props.onOk){props.onOk()}
      return;
    }

    switch(text){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output==='0'){setOutput(text)}
        else{setOutput(output + text)}

        break
      case '.':
        if (output.indexOf('.')>=0){return }
        setOutput(output + '.')
        break
      case '删除':
        if (output.length===1){setOutput('0')}
        else {setOutput(output.slice(0,-1))}
        break
      case '清空':
        setOutput('0')
        break
      case 'OK':
        break
    }
  }

  return(
      <Wrapper>
        <div className="output" >
          {output}
        </div>
        <div className="pad clearfix" onClick={onClickButtonWrapper}>
          <button >1</button>
          <button >2</button>
          <button >3</button>

          <button>删除</button>

          <button >4</button>
          <button >5</button>
          <button >6</button>

          <button>清空</button>

          <button >7</button>
          <button >8</button>
          <button >9</button>

          <button className="ok">OK</button>

          <button className="zero">0</button>

          <button className="dot">.</button>
        </div>
      </Wrapper>
  )
}

export {NumberPadSection};