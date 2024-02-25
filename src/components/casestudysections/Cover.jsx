import React from 'react'

const Cover = ({image}) => {
    return(
        <div className="h-128 w-256 mx-auto flex justify-center items-center">
            <img className="object-cover rounded-lg h-[100vh] w-[190vh] border border-black" src={image} alt="" />
        </div>
    )
}

export default Cover;
