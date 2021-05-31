import PatientInfo from './PatientInfo'

const WardPatient = ({patient}) => {

    return (
        <>
        <p>Ward Patient</p>
        <PatientInfo patient={patient}/>
        
        </>
    )
}

export default WardPatient;