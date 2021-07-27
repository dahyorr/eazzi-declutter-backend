import {useState} from 'react'
const Dropdown = ({options, onChange, value}) => {
    const [open, setOpen] = useState(false)

    const renderedOptions = options.map((option) =>{
        if(value.value !== option.value){
            return(
                <div key={option.value} className={'item'} onClick={() =>{
                    onChange(option);
                    setOpen(false)
                }}><i className={`fas fa-${option.icon} text-secondary`}></i> {option.label}
                </div>
        )}
        else{
            return null;
        }
    })
    
    return(
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="Dropdown flex">
            <div className='selected'>{value.label} <i className="fas fa-caret-down"></i></div>
            <div className={`dropdown-options ${open?'visible':'non-visible'}`}>
                {renderedOptions}
            </div>
        

        </div>
    )
}
export default Dropdown