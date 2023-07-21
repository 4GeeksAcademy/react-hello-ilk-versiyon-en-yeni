import React from 'react'

const Jumbatron = () => {
  const jumbatronDiv = {
    display: "flex",
    flexDirection: "column", 
    alignItems : "start",
    justifyContent :"center",
    backgroundColor:"lightgrey",
  
    borderRadius :"10px",
    marginTop: "15px",
    
    padding:"20px",
  }

  const jumbatronTitle = {
    fontSize : "3.5rem",
  }

  const jumbatronPag = {
    textAlign : "justify"
  }

  return (
    <div className='container' style= {jumbatronDiv}>
    <h1 style={jumbatronTitle}>A Warm Welcome!</h1>
    <p style={jumbatronPag} className='text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repudiandae necessitatibus doloribus dolor qui et illo, corrupti explicabo facere, commodi aperiam eaque exercitationem aliquam quam quaerat delectus nobis odio eum doloremque fugit. Voluptate modi ea debitis a dignissimos et. Ad reiciendis, culpa aut labore repellendus dolore ullam nemo laudantium aliquid.</p>
    <button className='btn btn-primary'>Call to action!</button>
    </div>
  )
}

export default Jumbatron