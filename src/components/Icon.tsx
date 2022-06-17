import React from 'react'
// require('icons/tag.svg');
// require('icons/money2.svg');
// require('icons/chart.svg');

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
//批量导入svg文件
type Props={
  name?:string
}

const Icon =(props:Props)=>{
  return (
    <svg className="icon">
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  )
};

export default Icon;
