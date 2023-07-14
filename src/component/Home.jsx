import JourneyAdd from "./journeyAdd"


const Home = () => {
    return(
        <>
            <div className="journeyDetail">
                <h1 className="text-center pt-3">LTA Journey Details <i class="fa-solid fa-circle-info"></i></h1>
                <JourneyAdd/>
            </div>
            
        </>
       
    )
}

export default Home