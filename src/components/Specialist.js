const Specialist = ({specialist}) => {
    return (
        <div>
            {/* <img src={`/images/patients/${patient.name}.png`} className="photo"/> */}
            <h4>{`Dr. ${specialist.name}`}</h4>
            <p>{specialist.speciality}</p>
        </div>
    )
}

export default Specialist;