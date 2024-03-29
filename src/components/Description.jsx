import React from 'react';
import avatar from '../assets/Avatar.png'

const Description = () => {
    return (
        <div className="">
            <div className="profile flex flex-center py-2 justify-center">
                <img className={"border-4 border-gray-100 w-[110px] rounded-full shadow-lg cursor-pointer hover:border-gray-200 duration-150"} src={avatar} alt="Avatar"/>
            </div>
            <h2 className={'text-base text-center'}>Ник в instagram: <span className={'text-highlight'}>azarian_katerina</span></h2>
            <div>
                <p className='text-center mt-8 text-base font-medium max-w-[350px]'>АНКЕТА ПРЕДЗАПИСИ НА КУРС
instaКРЕАТОР</p>
                <p className='text-center mt-2 text-base font-medium max-w-[350px]'>Всем, кто будет тут я дарю скидку 15% на курс, старт 5 декабря</p>
                {/* <p className='text-center mt-2 text-base font-medium max-w-[350px]'>В замен, после заполнения анкеты, я каждому пришлю свой новый "Гайд по упаковке 2.0", который вы увидите первыми, абсолютно БЕСПЛАТНО!</p> */}
            </div>
        </div>
    );
};

export default Description;