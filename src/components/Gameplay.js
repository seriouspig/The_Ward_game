import WaitingRoom from './WaitingRoom'
import Ward from './Ward'
import SpecialistGlossary from './SpecialistGlossary'
import {useState, useEffect} from 'react'
import Request from '../helpers/request';
import './PatientInfo.css'

const Gameplay = () => {

    const [allPatients, setAllPatients] = useState([])
    const [patients, setPatients] = useState([])
    const [specialists, setSpecialists] = useState([])
    const [waitingPatients, setWaitingPatients] = useState([])
    const [admittedPatients, setAdmittedPatients] = useState([])
    const [points, setPoints] = useState(0) 
    const [intervalId, setIntervalId] = useState(null)

    useEffect(() => {
        const request = new Request();
    
        request.get('http://localhost:8080/api/patients')
        .then((data) => {
            setAllPatients(data)
        })
        }, []) 

        useEffect(() => {
            const request2 = new Request();
        
            request2.get('http://localhost:8080/api/patients')
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
                visiblePatientsList.push(patientData[Math.floor((Math.random() * 100) + 1)])
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
    
    useEffect(() => {
        if (intervalId) {
            clearInterval(intervalId)
        }
        if (patients.length) {
            const id = setInterval(handleHealthUpdate, 1000)
            setIntervalId(id)
        }
    },[patients])

    const handleAdmission = (event) => {
        
        if (admittedPatients.length < 8) {
        for (const patient of patients) {
          if (patient.id === parseInt(event.target.value)) {
            
            patient.status = "Admitted";
            console.log(patient.name + " " + patient.status)
            
          }         
        }
        patients.push(allPatients[Math.floor((Math.random() * 100) + 1)])
        setPatients([...patients])   
              
      }
    }

      const handleAssignment = (specialistId, patientId) => {
        let selectedSpecialist = null;
        for (const specialist of specialists) {
            if(specialist.id === parseInt(specialistId)){
                selectedSpecialist = specialist;
            }
        }   
        for (const patient of admittedPatients) {
            if (patient.id === patientId) {
                patient.specialist = selectedSpecialist.speciality;
            }
        }
        setPatients([...patients]) 
      }

      const calculateHealthChange = patient => {
          const changeLookup = {
              WAITING: -1,
              Admitted: -1,

          }
          return changeLookup[patient.status]
      }

      const handleHealthUpdate = () => {
    //       for (const patient of allPatients) {
    //         if (waitingPatients.includes(patient) || admittedPatients.includes(patient)){
    //             patient.health -= 1
    //           }
    //       }
    //       setPatients([...patients]) 
          const newPatients = patients.map(patient => {
            const change = calculateHealthChange(patient)
            
              return {
                  ...patient,
                  health: patient.health + change
              }
          })
          console.log(newPatients)

          setPatients(newPatients) 
      } 
    

    return(
        <>
        <h3>gameplay</h3>
        <SpecialistGlossary />
        <div className="flex-container">
        <WaitingRoom waitingPatients={waitingPatients} handleAdmission={handleAdmission}/>
        <Ward admittedPatients={admittedPatients} specialists={specialists} handleAssignment={(specialistId, patientId) => handleAssignment(specialistId, patientId)}/>
        </div>
        </>
    )
}
    


export default Gameplay;