const FullScreenModal = ({children}) =>{
    return(
        <div className='FullScreenModal flex'>
            <div className="modal flex">
                <div className='modal-content flex'>
                    <i className="fas fa-check text-primary"></i>
                    {children}
                    <button className='close-button'>Ok</button>
                </div>
            </div>
        </div>
    )
}
export default FullScreenModal