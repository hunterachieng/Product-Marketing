import React from 'react';
import Layout from './Layout';
import Footer from './Footer';
import ReadMore from './Readmore';
import variety from './Images/watch3.jpg';
import variety2 from './Images/variety.jpg';


export default function smartwatch(){
    return(
<div >
<Layout/>
<h1 className="watch-heading">Superb A50 SmartWatch</h1>
<div className="smartwatch">
<p>Timeless Design</p>
<ReadMore>
<div className="watch">
<h4>Materials</h4>
<p>The new Superb A50 watch is made
of solid black bio-degradable plastic.
The watch has a smooth finish with multiple
straps to give you a classic look.</p>
<h4>Durability</h4>
<ul>
    <li>5 ATM water resistance</li>
    <li>Military grade: Suitable for outdoor activities</li>
    <li>Square design and vintage texured body</li>
    <li>Scratch-resistant Gorilla Glass DX+</li>
</ul>
<h4>Customizable Watch Faces</h4>
<p>With the Superb A50 watch, you can choose
    from a variety of watch faces to match your
    look.
</p>
</div>
</ReadMore>
</div>
{/* two */}
<div className="excercise">
<p>Personal Health Coach</p>
<ReadMore>
<div className="watch">
<h4>Workout Tracking</h4>
<p>The watch keeps track of your indoor and outdoor excercise by offering 30+
    excercise suggestions.
</p>
<p>Track calories burnt, time taken, pace, and resting time.</p>
<h4>Seamless Swimming</h4>
<p>A50's water resistant capabilities allow for effotless swimming 
    without the worries of unwanted functional changes. 
    Press the <b>"Swimming"</b> button on your watch to activate the 
     <b>SwimLock</b>.
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
