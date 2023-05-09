import { useState } from "react"
import styled from "styled-components";

const Button = styled.button`
    background-color: '#FFC300';
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #900C3F;
    border: none;
    width: 20%;
    height: 50px;
    border-radius: 6px;
`

const Pagination = ({pages, setPages}) => {

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(input + 1)
        setPages(pages + 1)
    }
    
    const prevPage = () => {
        if(pages < 2) return;
        setInput(input - 1)
        setPages(pages - 1)
    }
    

    return (
    <Button>
        <button style={{border:'none', backgroundColor:'#FFC300'}} disabled={pages === 1 || input < 1} onClick={prevPage}><span className="material-symbols-outlined">arrow_back</span></button>
        <input style={{width:'30px', height:'30px', textAlign:'center'}} readOnly={true} autoComplete="off" value={input} />
        <button style={{border:'none', backgroundColor:'#FFC300'}} onClick={nextPage}><span  className="material-symbols-outlined">arrow_forward</span></button>
    </Button>
  )
}

export default Pagination 