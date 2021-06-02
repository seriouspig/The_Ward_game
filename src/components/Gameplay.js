import WaitingRoom from './WaitingRoom'
import Ward from './Ward'
import SpecialistGlossary from './SpecialistGlossary'
import Counter from './Counter'
import Scoreboard from './Scoreboard'
import PopupLarge from './PopupLarge'
import {useState, useEffect} from 'react'
import Request from '../helpers/request';
import '../style/Gameplay.css'
import {Link} from 'react-router-dom';
import Popup from './Popup'


const Gameplay = () => {

    const [allPatients, setAllPatients] = useState([])
    const [patients, setPatients] = useState([])
    const [specialists, setSpecialists] = useState([])
    const [waitingPatients, setWaitingPatients] = useState([])
    const [admittedPatients, setAdmittedPatients] = useState([])
    const [points, setPoints] = useState(0) 
    const [intervalId, setIntervalId] = useState(null)
    const [counter, setCounter] = useState(100);
    const [isPopupShown, setIsPopupShown] = useState(false)
    const [isPatientPopupShown, setIsPatientPopupShown] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        const request = new Request();
    
        request.get('http://localhost:8080/api/patients')
        .then((data) => {
            setAllPatients(data)
        })
        }, []) 

    useEffect(() => {
        if(allPatients.length) {
            setPatients(visiblePatients(allPatients))
        }
    }, [allPatients]) 

    useEffect(() => {
        const request1 = new Request();

        request1.get('http://localhost:8080/api/specialists')
        .then((data) => {
            setSpecialists(data)
        })
        }, [])  
    
    const visiblePatients = (patientData) => {
        let visiblePatientsList = [];
            while(visiblePatientsList.length < 6){
                let patient = allPatients[Math.floor((Math.random() * 100))]
                while(patients.filter(p => p.id === patient.id).length) {
                    patient = allPatients[Math.floor((Math.random() * 100))]
                }
                visiblePatientsList.push(patient)
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
        if (patients.length && counter>0) {
            const id = setInterval(handleHealthUpdate, 1000)
            setIntervalId(id)
        }
    },[patients])

    useEffect(() => {
        const timer = 
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
            return () => clearInterval(timer);
    },[counter])

    useEffect(() => {
        if (counter === 0) {
            setIsPopupShown(true);
        }
    },[counter])

    

    const handleAdmission = (event) => {
        
        if (admittedPatients.length < 8) {
        for (const patient of patients) {
          if (patient.id === parseInt(event.target.value)) {
            
            patient.status = "Admitted";
            console.log(patient.name + " " + patient.status)
            
          }         
        }
        let patient = allPatients[Math.floor((Math.random() * 100))]
        while(patients.filter(p => p.id === patient.id).length) {
            patient = allPatients[Math.floor((Math.random() * 100))]
        }
        patients.push(patient)
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
        handleDischarge()
          const newPatients = patients.map(patient => {
            const change = calculateHealthChange(patient)
            
              return {
                  ...patient,
                  health: patient.health + change
              }

          })

          setPatients(newPatients)
          
      } 

      const handleTreatment = (event) => {
        for (const patient of admittedPatients) {
            if (patient.id === parseInt(event.target.value)) {
                if (patient.specialist === patient.illness.specialist.speciality){
                    patient.health += 10
                } else {
                    patient.health -= 10
                }
        }
      }
        setAdmittedPatients([...admittedPatients])
    } 
     
    const handleDischarge = () => {
        for (const patient of patients) {    
            if (patient.health <= 0) {
                patient.status = "Done";
                setPoints(points - 100)
                setMessage(<p>{patient.name} died from {patient.illness.name}</p>)
                setIsPatientPopupShown(true)
                if (waitingPatients.length < 6) {
                    let patient = allPatients[Math.floor((Math.random() * 100))]
                    while(patients.filter(p => p.id === patient.id).length) {
                        patient = allPatients[Math.floor((Math.random() * 100))]
                    }
                    patients.push(patient)
                }
            } 
            if (patient.health >= 100) {
                patient.status = "Done";
                setPoints(points + 100)
                setMessage(<p>{patient.name} got cured from {patient.illness.name}</p>)
                setIsPatientPopupShown(true)
                
            }        
        }        
        setPatients([...patients])   
    }

    const healthDecreaseOnNewSymptom = patient => {
        patient.health -= 5;
        setAdmittedPatients([...admittedPatients])
    }

    const content = <div>
                        <h2>Game Over</h2>    
                        <p>Score: {points}</p>
                        <Link to="/"> 
                        <button>Play Again</button>
                        </Link>
                    </div>
    
    return(
        <>
        <PopupLarge content={content} onClose={() => setIsPopupShown(false)} isShown={isPopupShown}/>
        <div className="main-grid">
            
            <div className="scoreboard">
                <Scoreboard points={points}/>
            </div> 
            <div className='counter'>
            <Counter counter={counter} />  
            </div> 
             <div className="glossary">  
                <SpecialistGlossary specialists={specialists} />
            </div>
            <div className="waiting-room">
                <WaitingRoom waitingPatients={waitingPatients} handleAdmission={handleAdmission}/>
            </div> 
            <div className="ward">   
                <Ward admittedPatients={admittedPatients} specialists={specialists} 
                handleAssignment={(specialistId, patientId) => handleAssignment(specialistId, patientId)} 
                handleTreatment={handleTreatment}
                healthDecreaseOnNewSymptom={healthDecreaseOnNewSymptom}/>
            </div>
        </div>
        <Popup timer={3000} content={message} onClose={() => setIsPatientPopupShown(false)} isShown={isPatientPopupShown}/>
        </>
    )
}
    


export default Gameplay;