import { useState } from "react"

function Task (){
    const[theme,setTheme]=useState(true)
return(
<div className={`container ${theme ?'white':'black'}`}>
    <h2>click the below botton for theme change</h2>
<button onClick={()=> setTheme(!theme)}>Switch Theme</button>

</div>

)
}
export default Task