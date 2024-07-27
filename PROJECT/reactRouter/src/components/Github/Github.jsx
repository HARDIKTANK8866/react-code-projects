import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({ followers: 0, avatar_url: '' });

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ekmett') 
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data); 
    //             setData(data); 
    //         })
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    return (
        <div className='text-center m-4'>
            <div className='text-gray-900 p-4 rounded-lg inline-block'>
                <div className='mb-2'>
                    <img src={data.avatar_url} alt="Git picture" className='rounded-full mx-auto' style={{ width: 100, height: 100 }} />
                </div>
                <div className='text-xl'>
                    Github Followers : <span className='font-bold'>{data.followers}</span>
                </div>
            </div>
        </div>
    );
}

export default Github


export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/ekmett');
    return res.json();
}