import React, { createContext, useState } from "react";
import Arthur from '.././img/imgs-perfil/Arthur.jpg'

export const ImgContext = createContext({})

export function ImgProvider({children}) {
    const [img, setImg] = useState(Arthur)

    function changeImg(selectedImg) {
        setImg(selectedImg)
    }
    

    return(
        <ImgContext.Provider value={{img, changeImg}}>
            {children}
        </ImgContext.Provider>
    )

}