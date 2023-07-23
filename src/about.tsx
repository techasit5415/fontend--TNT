import React from "react";

type Props = {
    data: string[];
    func: React.Dispatch<React.SetStateAction<string>>;
};

const About = ({data,func}:Props)=> {
    return (
        <div>
          <h1>about</h1>
          <button onClick={()=> func("state set!")}>click meeee</button>
          </div>

         
        
    );
};

export default About;

//short -> tsracfe