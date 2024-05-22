import React, {useState} from 'react';
import Sidebar from "../sidebar/sidebar";
import MainSectionForm from "../mainSectionForm/mainSectionForm";

const Home = (props) => {

    const [session, setSession] = useState([]);   // все сессии



    return (
        <div>
            <Sidebar
                session={session}   // все сессии
            />
            <MainSectionForm
                session={session}    // все сессии
                setSession={setSession}    // изменение сессий
            />
        </div>
    );
};

export default Home;