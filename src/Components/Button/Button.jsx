import React from "react";

export const Button = (
    {
        className,value
    })=>
{
    return (
    
        <button className={className} >{value}</button>
    )
}