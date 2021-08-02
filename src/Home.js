import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//images
import watches from './Images/watch1.jpg';
import sony from './Images/watch2.jpg';
import grey from './Images/watch4.jpg';
import Layout from './Layout';
import Footer from './Footer';
import Modal from './Modal';




export default function Home(){
    const [show, setShow] = useState(true);
    

    return(
        <div className="home">
            <Layout/>
            <Modal show = {show} setShow = {()=> setShow(false)}/>
            <p className="pitch"> As the year comes to an end, Superb is pleased to announce the<br/>
             introduction of new products from our summer collection. Just<br/>
             as clothes are important, technology is also needed in our daily<br/>
             lives. </p>
             <h3>New Products</h3>
             <div className="featured">
                 <img src={watches} alt="sonyheadphones"/>
                 <img src={sony} alt="smartwatch"/>
                 <img src={grey} alt="greyheadset"/>
             </div>
             <div className="more">
                <Link to="/smartwatch" style={{textDecoration:"none"}}><button className="more1">Read More</button></Link> 
                 <Link to="/sonyheadphones" style={{textDecoration: "none"}}><button className="more2">Read More</button></Link>
                 <Link to="/headphones" style={{textDecoration: "none"}}><button className="more3">Read More</button></Link>
             </div>
             <Footer/>

        </div>
    )
}