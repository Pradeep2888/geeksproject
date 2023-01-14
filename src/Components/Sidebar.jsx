import React from 'react'
import { useState } from 'react'
import '../Styles/Sidebar.css'

function Sidebar() {

    const [color,setColor]=useState("")
    const [,set]=useState("")

    return (
        <aside className='sidebar'>


            <div>
                <h5>Colour</h5>
                <div>
                    <input type={"checkbox"}  onClick={()=>setColor("red")} />
                    <span>Red</span>
                </div>

                <div>
                    <input type={"checkbox"}  onClick={()=>setColor("blue")} />
                    <span>Blue</span>
                </div>

                <div>
                    <input type={"checkbox"}  onClick={()=>setColor("green")} />
                    <span>Green</span>
                </div>
            </div>

            <div>
                <h5>Gender</h5>
                <div>
                    <input type={"checkbox"} />
                    <span>Male</span>
                </div>

                <div>
                    <input type={"checkbox"} />
                    <span>Female</span>
                </div>
            </div>

            <div>
                <h5>Price</h5>
                <div>
                    <input type={"checkbox"} />
                    <span>0-Rs250</span>
                </div>

                <div>
                    <input type={"checkbox"} />
                    <span>251-Rs450</span>
                </div>

                <div>
                    <input type={"checkbox"} />
                    <span>450</span>
                </div>
            </div>

            <div>
                <h5>Type</h5>
                <div>
                    <input type={"checkbox"} />
                    <span>Polo</span>
                </div>

                <div>
                    <input type={"checkbox"} />
                    <span>Hoodies</span>
                </div>

                <div>
                    <input type={"checkbox"} />
                    <span>Basic</span>
                </div>
            </div>

        </aside>
    )
}

export default Sidebar