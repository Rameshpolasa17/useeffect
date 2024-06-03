// import React from 'react'

// const Nav= React.memo(  (props) => {
//     return (
//       <div>{props.title}</div>  ---------memo used to decrese the re rendering
//     )
//   })

// export default Nav

import React from 'react'

const Nav = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
    </div>
  )
}

export default Nav