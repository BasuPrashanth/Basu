import React,{username}from 'react'
function Header() {
    const [texts,settexts]=username([
        {name1:"eat"},
        {name1:"sleep"},
        {name1:"code"}
    ]);
    const[index,setIndex]=useState(0)
    function change(){
        const newindex=(index+1)%texts.length
        setIndex(newindex)}
        return(
            <div>
                <button onClick={change}>Text change</button>
                <span>{texts[index].name1}</span>
            </div>
        )
    }
    export default Header
    