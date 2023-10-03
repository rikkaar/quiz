import React from 'react';
import result from "../assets/result.png";

const Result = () => {
    return (
        <div>
              <div className="profile flex flex-center py-2 justify-center">
                <img className={"w-[300px]"} src={result} alt=""/>
            </div>
            <h2 className={"text-xl text-center pt-10"}>Спасибо за участие!</h2>
        </div>
    );
};

export default Result;