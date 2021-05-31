import WaitingRoom from './WaitingRoom'
import Ward from './Ward'
import SpecialistGlossary from './SpecialistGlossary'
import {useState, useEffect} from 'react'
import Request from '../helpers/request';

const Gameplay = () => {

    const [patients, setPatients] = useState([])
    const [specialists, setSpecialists] = useState([])
    const [waitingPatients, setWaitingPatients] = useState([])
    const [admittedPatients, setAdmittedPatients] = useState([])
    const [points, setPoints] = useState(0) 

    useEffect(() => {
        const request = new Request();
    
        request.get('http://localhost:8080/api/patients')
        .then((data) => {
            setPatients(visiblePatients(data))
        })
        }, []) 

    useEffect(() => {
        const request1 = new Request();

        request1.get('http://localhost:8080/api/specialists')
        .then((data) => {
            setSpecialists(data)
        })
        }, []) 
    
    
    const visiblePatients = (patientData) => {
        let visiblePatientsList = [];
            while(visiblePatientsList.length < 8){
                visiblePatientsList.push(patientData[Math.floor((Math.random() * 50) + 1)])
            }
            return visiblePatientsList;
        }

    useEffect(() => {
        const admitted = patients.filter(patient => 
            patient.status === "Admitted"
        )
        setAdmittedPatients(admitted)
    }, [patients])
    
    useEffect(() => {
        const waiting = patients.filter(patient => 
            patient.status === "WAITING"
        )
        setWaitingPatients(waiting)
    }, [patients])  

    const handleAdmission = (event) => {
        console.log(event)
        for (const patient of patients) {
          if (patient.id === parseInt(event.target.value)) {
            
            
            // setPatients({ ...patients.patient,
            //             patient.status: "Admitted"
            
            console.log("Found patient")
            patient.status = "Admitted";
          }
        }
        setPatients(patients)
        
      }
    

    return(
        <>
        <h3>gameplay</h3>
        <SpecialistGlossary />
        <WaitingRoom waitingPatients={waitingPatients} handleAdmission={handleAdmission}/>
        <Ward admittedPatients={admittedPatients} specialists={specialists}/>
        </>
    )
}

export default Gameplay;