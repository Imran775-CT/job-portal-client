import Banner from "./Banner";
import Card from "./Card";
import CompanyCard from "./CompanyCard";
import HotJobs from "./HotJobs";


const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <CompanyCard></CompanyCard>
           <Card></Card>
           <HotJobs></HotJobs>
        </div>
    );
};

export default Home;