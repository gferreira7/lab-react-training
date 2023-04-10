import Rating from './Rating'

function DriverCard({name, rating, img, car: {model, licensePlate}}){

    return (
        <div className="d-flex justify-content-center align-items-center w-50 bg-primary border p-2 mb-2 rounded-3">
            <div className="w-25 ">
                <img className="rounded-circle" style={{"object-fit": "cover", "width": "75px", "height": "75px"}} src={img} alt='driver' />
            </div>
            <div className='d-flex flex-column w-50' style={{"filter": "invert(100%)"}}>
                <div className='d-flex fw-bold '> {name} </div>
                <Rating>{rating}</Rating>
                <div className=' d-flex'> {model} - {licensePlate} </div>
            </div>
        </div>
    )

}

export default DriverCard