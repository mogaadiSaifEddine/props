import React from 'react';
import PropTypes from "prop-types";




const ProfileComponent =props =>{



    const handleName =()=>{
        alert(` My name is  ${props.fullName}`);
    }
    const stylingH1 = {color :'#912119' , fontFamily :'Arial, sans-serif' };
    const stylingH2 ={color :'#F02A52 ' , fontFamily : 'Trebuchet MS'}
    const stylingH3 ={color :'#260f4f'}

    const stylingBut ={backgroundColor:'grey', color:'black',borderRadius: '12px', width : '150px'}
    return (
        <div >

            <div>
                <h1 style={stylingH1} >{props.fullName}</h1>
            </div>

            <div>
                <h2 style = {stylingH2}>{props.profession}</h2>
            </div> 

            <div>
                <h3 style = {stylingH3}>{props.bio}</h3>
            </div> 

            <div>
                <button style ={stylingBut} onClick ={handleName}>click me ! </button>
            </div> 
       
        </div>
    )
}

ProfileComponent.propTypes= {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession : PropTypes.string

};

ProfileComponent.defaultProps={
    fullName:'it exists no name yet ',
    bio : 'it exists no bio yet',
    profession : 'it esxists no profession yet '
};

export default ProfileComponent;