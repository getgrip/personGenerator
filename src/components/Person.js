import React, { Component } from 'react'

export default class Person extends Component {
    render() {
    
        const num = Math.floor(Math.random()*100);
        const gender = num%2>0 ? "women":"men"; 
        const url =`https://randomuser.me/api/portraits/${gender}/${num}.jpg`
        const personInfo = this.props.person; 
        console.log(personInfo);
        
        return (  
            <div class = "Person">
               <img src= {url} alt=""/>
               <h4>Name:{this.props.person.name}</h4>
               <p>Role:{this.props.person.role}</p>
              
            </div>
        )
    }
}
