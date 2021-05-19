import { createContext, useState } from "react";

export const PersonContext = createContext();

const PersonContextProvider = (props) => {
    const [people, setPeople] = useState([
        { 
            id: 1,
            username: "Graner007",
            password: 'malibu',
            description: 'guy from hungary', 
            birthDate: "2001.12.27", 
            registrationDate: "2021.05.02.", 
            followersCount: 5, 
            followedCount: 3, 
            profileImageRoute: "https://picsum.photos/300",
            profileBackgroundImageRoute: "https://picsum.photos/800"
        },
        { 
            id: 2,
            username: "Gergo",
            password: 'lol',
            description: 'another guy from hungary', 
            birthDate: "2001.12.23", 
            registrationDate: "2021.04.24.", 
            followersCount: 3, 
            followedCount: 7, 
            profileImageRoute: "https://picsum.photos/400",
            profileBackgroundImageRoute: "https://picsum.photos/900"
        }
    ]);



    const addPerson = (person) => { setPeople([...people, person]); }

    const currentPerson = people[0];

    return (
        <PersonContext.Provider value={{ people, addPerson, currentPerson }}>
            { props.children }
        </PersonContext.Provider>
    )
}

export default PersonContextProvider;