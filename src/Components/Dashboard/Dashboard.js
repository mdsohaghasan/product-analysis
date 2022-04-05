import React from 'react'
import AreaChert from '../AreaChert/AreaChert'
import Navbar from '../Navbar/Navbar'
import Rechert from '../Rechert/Rechert'



export default function Dashboard() {
    return (

        <div>
            <Navbar></Navbar>
            <h1>This Is DashBoard</h1>
            <Rechert></Rechert>
            <AreaChert></AreaChert>
            
        </div>

    )
}

