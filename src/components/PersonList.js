import React, { Component } from 'react'
import Person from "./Person"; 

export default class PersonList extends Component {
       people= [
        {
        name:"James", 
        role:"Graphic Designer"
        }, 
        {
            name: "MJ",
            role: "Business Analys"
        }, {
            name: "Tengis",
            role: "Senior Developer"
        }, {
            name: "Tuya",
            role: "Lead Accountant"
        }, {
            name: "Sonya",
            role: "Manager"
        }
        
    ];
   
    render() {
        
        const people = this.people;
        return (
            
            <div>
                {
                    people.map(person =>{
                        return (
                            <Person person = {person}/>
                        )
                    })
                }
            </div>
            
        )
    }
}
