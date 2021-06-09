import '../style/Specialists.css'

const Specialist = ({specialist}) => {
    return (
        <div className="flex-specialists">
            <div>
                <img src={`/images/specialists/${specialist.name}.png`} className="specialist-photo"/>
            </div>
            <div>
                <h4 className="doctor-name">{`Dr. ${specialist.name}`}</h4>
                <p className="specialty">{specialist.speciality}</p>
            </div>
        </div>
    )
}

export default Specialist;