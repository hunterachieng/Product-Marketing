import React from 'react';
import Layout from './Layout';
import Footer from './Footer';
import ReadMore from './Readmore';
import variety from './Images/watch3.jpg';
import variety2 from './Images/variety.jpg';


export default function SonyHeadPhones(){
    return(
<div >
<Layout/>
<h1 className="watch-heading">Sony HeadPhones</h1>
<div className="smartwatch">
<p>Noise Cancellation</p>
<ReadMore>
<div className="watch">
<p>Sony's noise cancellation headphones are 
    equiped with two microphones on each earcup
    that capture surrounding noise and send the data to 
    NQ1, the new HD noise cancellation processor.
</p>
<p>The algorithm allows for the filtering of noise to cancel out 
    the surrounding noise and increase the frequency of the music.
</p>
<h4>Optimizing Noise Cancelling</h4>
<p>With this technology, our customers will be able to use the
    device during their travels where they can listen to music without 
    worry as the device optimizes the atmospheric pressure within the
    plane to give you a better experience.
</p>
</div>
</ReadMore>
</div>
{/* two */}
<div className="excercise">
<p>Ambient Sound Controll</p>
<ReadMore>
<div className="watch">
<p>Adjust ambient sound with the Sony Connect app to cancel noise and still allow 
    essential sounds to pass through such as transport announcements when listening to music on the move. 
</p>
<h4>Seamless Swimming</h4>
<p>LDAC transmits approximately three times more data (at the maximum transfer 
    rate of 990kbps) than conventional BLUETOOTH® audio, allowing you to
     enjoy High-Resolution Audio content
     in exceptional quality as close as possible to that of a dedicated wired connection.
</p>
<p>When deactivating the <b>SwimLock</b>, the resonating click sound 
indicates the dispensing of water from the watch.</p>
</div>
</ReadMore>
</div>
{/* three */}
<div className="excercise">
<p>Intelligent Time Keeper</p>
<ReadMore>
<div className="watch">
<h4>Time Management</h4>
<p>Use Day Watch mode for an interactive time management system.
    <br/> This new mode allows a user to:
</p>
<ul>
    <li>View your schedule at a glance in Day watch mode</li>
    <li>Get reminded of appointments and important occasion </li>
</ul>
<h4>Day Planner</h4>
<p>The Day Watch mode offers two daily breefings on your schedule when you wake up 
    and before going to bed.
</p>
<h4>Peaceful Night</h4>
<p>With the Peaceful Night mode, A50 shuts off all disturbances such as bright light and 
     notifications, and only leaves the morning alarm.
</p>
</div>
</ReadMore>
</div>
<h2 className="variety-heading">Other Varieties</h2>
<div className="varieties">
    <img src={variety} alt="smartwatch"/>
    <img src={variety2} alt="smartwatch"/>

</div>

<Footer/>

</div>
        
    )
}
