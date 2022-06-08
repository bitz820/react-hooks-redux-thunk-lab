// write your CatList component here

import React from 'react'

function CatList({props}) {

    console.log(props)
    // const {url} = props
  return (
    //   null
      <img src={props.url} alt="cat" />
  )
}

export default CatList