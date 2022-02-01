import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";

const Filter = ({filterChange}) => {
    const [selected, setSelected] = useState("Filter by region");
    return (
        <>
            <Dropdown 
                selected={selected} 
                setSelected={setSelected} 
            />   
        </>         
    )
};

export default Filter;