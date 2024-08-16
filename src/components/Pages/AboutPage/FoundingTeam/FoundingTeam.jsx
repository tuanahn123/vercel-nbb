import React from "react";

function FoundingTeam(props) {
    return (
        <div className="flex flex-col items-center my-6 md:my-8">
            <img 
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full" 
                src={props.image} 
                alt="" 
            />
            <div className="font-sora text-base md:text-lg mt-4 text-center">{props.text}</div>
        </div>
    );
}

export default FoundingTeam;
