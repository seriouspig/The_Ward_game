import PatientInfo from './PatientInfo'

const WardPatient = ({patient}) => {

    return (
        <>
        <div className="ward-patient">
        <p>Ward Patient</p>
        <PatientInfo patient={patient}/>
        </div>
        </>
    )
}

export default WardPatient;