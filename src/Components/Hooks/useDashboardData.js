import React, { useEffect, useState } from "react";

export const useDashboardData = () => {
    const [information,setInf] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    useEffect(() => {
        const data = fetch("/dashboard-data.json");
        data.then((res) => {
            if(!res.ok)  throw new Error('Failed to load dashboard data!')
            return res.json()
        }).then((final) => {
            setInf(final)
            setLoading(false)
        }).catch((err)=>
        {
            console.log(err)
            setError(err)
            setLoading(false)
        })
       
    },[])
    return {information,loading,error};
}