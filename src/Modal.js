import { useState } from "react";

import './Modal.css'

function Modal()
{
    let [open, setOpen] = useState(false);
    let image = "https://wallpapercat.com/w/full/1/d/3/5818397.jpg"
    return(
        <div>
            <img src={image} 
                className="small" 
                onClick={()=>setOpen(true)}
                alt="Картинка"
                style={{display : open ? "none":"block"}}
                />

                {
                    open && 
                    (
                        <div>
                            <div>
                                <img src={image}
                                    alt=""
                                    className="big"
                                    onClick={()=>setOpen(false)}
                                    />
                            </div>
                        </div>
                    )
                }
        </div>
    )
}

export default Modal;