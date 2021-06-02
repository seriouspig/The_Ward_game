import Specialist from './Specialist'

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
        <ul>
        {specialistsShown}
        </ul>
        </>
    )

}

export default SpecialistGlossary;