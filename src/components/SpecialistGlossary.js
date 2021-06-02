import Specialist from './Specialist'
import '../style/Specialists.css'

const SpecialistGlossary = ({specialists}) => {

    if (specialists === 0) {
        return (<p>Loading...</p>)
    }

    const specialistsShown = specialists.map((specialist, index) => {
        return (
            <li key={index}>
                <div>
                    <Specialist specialist={specialist} />
                </div>

            </li>
        )
    })

    return(
        <>
        <ul className="specialists-list">
        {specialistsShown}
        </ul>
        </>
    )

}

export default SpecialistGlossary;