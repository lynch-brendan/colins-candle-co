import React from 'react';
import '../App.css';

export default function Title({name, title}){
  return (
        <h1 className = "title-text">
            {name} 
                {title}
        </h1>
    );
}