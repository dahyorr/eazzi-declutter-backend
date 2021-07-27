import {withRouter} from 'react-router-dom'
import qs from 'qs'

const VerifyView = ({history, location}) =>{
    const query = qs.parse(location.search, { ignoreQueryPrefix: true })
    const onClose = () => {
        history.push('/login')
    }
    return(
        <div className='FullScreenModal flex' onClick={onClose}>
            <div className="modal flex" onClick={e=> e.stopPropagation()}>
                <div className='modal-content flex'>
                    {query.success ?
                        <>
                        <i className="fas fa-check text-primary"/>
                        <p>Account Verified Successfully</p>
                        </>
                        :
                        <>
                            <i className="fas fa-times text-danger"/>
                            <p>Account could not be verified</p>
                        </>
                    }
                    <button className='close-button' onClick={onClose}>Ok</button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(VerifyView)