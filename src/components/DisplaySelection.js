import React from 'react'
import "../css/displaySelection.css"

const DisplaySelection = () => {
    return (
        <div className="displaySelection__div">
        <h1 className="displaySelection__h1"> Results for {sessionStorage.getItem("month")} and {sessionStorage.getItem("usersState")}.</h1>
        </div>
    )
}

export default DisplaySelection
