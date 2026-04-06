import React from 'react' 
import Header from './Header' 
import '../componets_CSS/Introduction.css' 
import tomImg from '../assets/Tom_and_Jerry.png'
import OImg from '../assets/og.png'
import SImg from '../assets/spongebob.png'
import HImg from '../assets/simpson.png'
import PiImg from '../assets/P.png'
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
function Introduction() { 
  return ( <> 
  <Header/> 
  <div>
  <div className="Page"> 
    <h1 id='movieLogo'>Introduction</h1> 
    <div className="card-container"> 
      <div className="Tom card"> 
        <h1 className='story-title'>Tom and Jerry</h1> 
        <p>A classic cartoon about a cat and mouse who are always chasing each other in funny and chaotic ways.</p><br></br> 
        <h3>Main Characters</h3> 
        <p>Tom, named "Jasper" in his debut appearance, is a gray and white domestic shorthair cat. "Tom" is a generic name for a male cat.</p> 
        <p> Jerry, whose name is not explicitly mentioned in his debut appearance, is a small, brown house mouse who always lives in close proximity to Tom. </p> 
        <img src={tomImg} alt="Tom" className='card-img' />
      </div> 
      <div className="oggy card"> 
        <h1 className='story-title'>Oggy</h1> 
        <p>Oggy, an anthropomorphic cat, spends his days watching television, lounging around, and eating, but is continually pestered and annoyed by three cockroaches 
          (Joey, Marky, and Dee Dee) in his house, whose endgoal is to obtain absolute control of Oggy's house through any means.
        </p> <br></br>
        <h3>Main Characters</h3>
        <p>Oggy is a placid, solitary, and unlucky cat. When he's not dealing with the cockroaches, he usually spends his time at home, 
          watching TV, doing housework, gardening, cooking, eating, or trying to woo over Olivia.
        </p>
        <p>The Cockroaches are a trio of hedonistic, sadistic and problematic cockroaches named Joey, Marky, and Dee Dee (who are implied to be named after members of the rock band Ramones).</p>
        {/* <p>Jack is Oggy's cousin. In contrast to Oggy, he is more violent and arrogant than him.</p> */}
        <img src={OImg} alt="oggy" className='card-img' />
      </div> 
      <div className="Spon card"> 
        <h1 className='story-title'>SpongeBob Square Pants</h1>
        <p>SpongeBob SquarePants is an energetic, optimistic, and naive sea sponge who lives in a pineapple in the underwater city of Bikini Bottom.</p><br></br>
        <h3>Main Characters</h3>
        <p>SpongeBob is a childish, joyful, hardworking, silly, and sometimes clumsy sea sponge who lives in a pineapple with his pet snail Gary in the underwater city of Bikini Bottom. </p>
        <p>Patrick Star is SpongeBob’s best friend, a pink starfish who is kind but not very smart. He is lazy, loves food, and often joins SpongeBob in silly and funny adventures.</p>
        <p>Mr. Krabs is the owner of the Krusty Krab and SpongeBob’s boss. He loves money very much and is always thinking about business, but he also cares about his daughter and his restaurant.</p>
        <img src={SImg} alt="Spong" className='card-img' /> 
      </div> 
      <div className="homer card"> 
        <h1 className='story-title'>homer J.Simpson</h1> 
        <p>The Simpsons follow the funny and chaotic adventures of a quirky family in Springfield, where Homer’s mistakes, Bart’s pranks, and Lisa’s intelligence create endless humor and heartwarming moments.</p><br></br>
        <h3>Main Characters</h3>
        <p>Homer Simpson is the lazy but lovable father who works at the Springfield Nuclear Power Plant. He enjoys donuts, beer, and spending time with his family, though his silly mistakes often cause trouble.</p>
        <p>Marge Simpson is the caring and patient mother who keeps the family together. She is hardworking, responsible, and often the voice of reason in the household.</p>
        {/* <p>Bart Simpson is the mischievous and rebellious son. He loves pranks, skateboarding, and causing trouble at school, but he also shows a caring side for his family.</p> */}
        <img src={HImg} alt="Simpson" className='card-img' />
      </div> 
      <div className=''>
      <div className="pink card"> 
        <h1 className='story-title'>The Pink Panther</h1> 
        <p>The Pink Panther wanders through comical and tricky situations, using wit and charm to solve problems while making everyone laugh along the way.</p><br></br>
        <h3>Main Characters</h3>
        <p>The Pink Panther is a clever and silent pink cat known for his smooth moves and humorous adventures. He often outsmarts his enemies and gets into funny situations, all without saying a word.</p>
        <p>Inspector Clouseau is a bumbling but determined detective who constantly tries to catch the Pink Panther. Despite his clumsiness, his persistence and accidental successes make him both funny and lovable.</p>
        <p>The Little Man is a recurring character who often acts as the Pink Panther’s foil. He gets caught up in the Panther’s clever tricks, leading to humorous and unexpected outcomes.</p>
        <img src={PiImg} alt="Pink" className='card-img object-cover'/>
      </div>

      </div>
 
  </div>
  </div> 
      <div id='btm'>
          <h4>Website Terms of Use</h4>
          <div id='footer'>
            <FaYoutube />
            <FaTiktok />
            <FaInstagram />
            <FaXTwitter />
            <FaFacebook />
            <span id='divider'>|</span>
            <FaInstagram />
            <FaXTwitter />
            <span>for Cambodian</span>
          </div>
          <h5>@Sony Music Labels Inc.</h5>
        </div>
    </div> 
  </> ) 
} export default Introduction
