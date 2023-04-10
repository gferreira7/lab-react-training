function Rating(props){

    const { children } = props

    const roundNumber = Number(Math.round(children))

    const emptyStarPath = "./empty_star.png"
    const fillStarPath = "./filled_star.png"

    return (
        <div className="d-flex justify-content-center align-items-center w-50 p-2 mb-2">

            { roundNumber >= 1 ? <img className="w-25" src={fillStarPath}/> : <img className="w-25" src={emptyStarPath}/> }
            { roundNumber >= 2 ? <img className="w-25" src={fillStarPath}/> : <img className="w-25" src={emptyStarPath}/> }
            { roundNumber >= 3 ? <img className="w-25" src={fillStarPath}/> : <img className="w-25" src={emptyStarPath}/> }
            { roundNumber >= 4 ? <img className="w-25" src={fillStarPath}/> : <img className="w-25" src={emptyStarPath}/> }
            { roundNumber >= 5 ? <img className="w-25" src={fillStarPath}/> : <img className="w-25" src={emptyStarPath}/> }

        </div>
    )

}

export default Rating