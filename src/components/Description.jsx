import React from 'react';
import avatar from '../assets/avatar.png'

const Description = () => {
    return (
        <div className="">
            <div className="profile flex flex-center py-2 justify-center">
                <img className={"border-4 border-gray-100 w-[110px] rounded-full shadow-lg cursor-pointer hover:border-gray-200 duration-150"} src={avatar} alt="Avatar"/>
            </div>
            <h2 className={'text-base text-center'}>Ник в instagram: <span className={'text-highlight'}>azarian_katerina</span></h2>
        </div>
    );
};

export default Description;