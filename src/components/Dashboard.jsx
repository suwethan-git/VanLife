import React from "react";
import { Link,Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
        <h2>Dashboard...</h2>
        {/* <Link to={"/host/income"}>Income</Link>
        <Link to={"/host/reviews"}>Reviews</Link> */}
        <Outlet />
        </>
    )
}