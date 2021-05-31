const PatientInfo = ({patient}) => {

    return (
        <>
            <p>{patient.name}</p>
            <p>{patient.age}</p>
            <p>{patient.health}</p>
        </>
    )
}

export default PatientInfo;