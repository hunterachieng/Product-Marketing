import React from 'react';
import Layout from './Layout';
import Footer from './Footer';
import ReadMore from './Readmore';
import sony from './Images/sony.jpg';
import sony1 from './Images/sony1.jpg';


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

</div>
</ReadMore>
</div>
{/* three */}
<div className="excercise">
<p>Sound You Can Believe In</p>
<ReadMore>
<div className="watch">
<p>The  built-in analogue amplifier integrated in the HD Noise Cancelling 
    Processor QN1 realises an unmatched signal-to-noise 
    ratio for low distortion and exceptional sound quality for portable devices.
</p>


<p>Powerful 30mm drivers, enquipped with Liquid Crystal Polymer (LCP) diaphragms, 
    make the headphones 
    perfect for handling heavy beats.
</p>

</div>
</ReadMore>
</div>
<h2 className="variety-heading">Other Varieties</h2>
<div className="varieties">
    <img src={sony} alt="headphones"/>
    <img src= {sony1} alt="headphones"/>

</div>

<Footer/>

</div>
        
    )
}
