import Contacts from "./components/Contacts.jsx";
import Skills from "./components/Skills.jsx";
import Languages from "./components/Languages.jsx";
import Education from "./components/Education.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Profile from "./components/Profile.jsx";

import {
    name,
    icons,
    contacts,
    profile,
    technicalSkills,
    softSkills,
    workExperience,
    education,
    languages,
} from "./data.js";

export default function App() {
    return (
        <div className="main">
            <h2>{name.toUpperCase()}</h2>
            <hr />
            <Contacts contacts={contacts} icons={icons} />
            <div className="content">
                <Profile profile={profile} />
                <Skills technicalSkills={technicalSkills} softSkills={softSkills} />
                <WorkExperience workExperience={workExperience} />
                <Education education={education} />
                <Languages languages={languages} />
            </div>
        </div>
    );
}
