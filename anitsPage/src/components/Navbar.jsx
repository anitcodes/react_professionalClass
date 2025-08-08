import React from "react"

const Navbar =() => {

    return(
        <div className="navbar py-4 px-8 text-blue-500 flex items-center justify-between">
            <div className="nav-logo text-2xl font-bold">Anit</div>
            <div className="nav-items flex gap-6">
                <a className=" hover:text-blue-700" href="#">Home</a>
                <a className=" hover:text-blue-700" href="#">About</a>
                <a className=" hover:text-blue-700" href="#">Service</a>
                <a className=" hover:text-blue-700" href="#">Locations</a>
            </div>
        </div>
    )
}

export default Navbar