import PatientInfo from './PatientInfo'

const WardPatient = ({patient}) => {

    return (
        <>
        <div className="ward-patient">
        <PatientInfo patient={patient}/>
        </div>
        </>
    )
}

export default WardPatient;