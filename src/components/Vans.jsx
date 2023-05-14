import React from "react"
import "./server"

export default function Vans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    },[])

    console.log(vans)

    return (
        <h2>This is Vans list page</h2>
    )
};