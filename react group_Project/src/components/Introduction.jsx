import React from 'react'
import Header from './Header'
import '../componets_CSS/Introduction.css'
function Introduction() {
  return (
    <>
      <Header/> 
      <div className="Page"> 
        <h1 className='title'>Introduction</h1> 
        <div className="crad-container"> 
          <div className="Tom card"> 
            <h1 className='story-title'>Tom and Jerry</h1> 
            <p>A classic cartoon about a cat and mouse who are always chasing each other in funny and chaotic ways.</p><br></br>
            <h3>Main Characters</h3>
            <p>Tom, named "Jasper" in his debut appearance, is a gray and white domestic shorthair cat. "Tom" is a generic name for a male cat.</p>
            <p> Jerry, whose name is not explicitly mentioned in his debut appearance, is a small, brown house mouse who always lives in close proximity to Tom. </p>
          </div> 
          <div className="oggy card"> 
            <h1 className='story-title'>Oggy</h1> 
            <p></p>
          </div> 
          <div className="Spon card"> 
            <h1 className='story-title'>SpongeBob Square Pants</h1> 
          </div> 
          <div className="homer card"> 
            <h1 className='story-title'>homer J.Simpson</h1> 
          </div> <div className="pink card"> 
            <h1 className='story-title'>The Pink Panther</h1> 
          </div> 
        </div> 
      </div>
    </>
  )
}

export default Introduction