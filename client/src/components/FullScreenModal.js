const FullScreenModal = ({children, onClose}) =>{

    return(
        <div className='FullScreenModal flex' onClick={onClose}>
            <div className="modal flex" onClick={e=> e.stopPropagation()}>
                <div className='modal-content flex'>
                    <i className="fas fa-check text-primary"/>
                    {children}
                    <button className='close-button' onClick={onClose}>Ok</button>
                </div>
            </div>
        </div>
    )
}
export default FullScreenModal