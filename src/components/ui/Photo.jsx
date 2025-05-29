import React from 'react'
import photo from "../../assets/img/photo.jpg"

export const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <div className="w-[298px] h-[298px] xl:w-[500px] xl:h-[500px] mix-blend-lighten pt-15" >
                <img src={photo} className="object-contain rounded-full border-2 border-amber-500 " />
            </div>
        </div>
    )
}
