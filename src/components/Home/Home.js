import React, {useState} from 'react';
import Class from "../Class/Class";
import "./Home.css";

function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);
    

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('')
        }
        console.log(favoriteClasses);
        
    }

    return (
        <div id="paper">
            <div id="pattern">
            <h1>My Favorite Classes!</h1> 
            <form onSubmit={handleSubmit}>
                <label className='prompt'>Add Favorite Class </label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add Class!</button>
            </form> 
            <div id="content">
            <div className="my-classes">
                {favoriteClasses.map((favClass) =>
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
            </div>
            </div>
        </div>
    )
}

export default Home;