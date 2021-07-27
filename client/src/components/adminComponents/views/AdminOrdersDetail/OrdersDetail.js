import {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom'
import {FaArrowLeft, FaCheck} from 'react-icons/fa'
import api from "../../../../helpers/api";
import Loader from "../../../Loader";

const ProductsDetail = ({match: {params: {id}}, history}) =>{
    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        // if(loading){
            api.get(`/orders/${id}`)
                .then(res => {
                    setOrder(res.data.order)
                    setLoading(false)
                })
        // }

    }, [id])
    if (loading) {
        console.log('loading')
        return <Loader/>
    }
    else return (
        <div className="OrdersDetail">
            <div className="content">
                <div className="back" onClick={history.goBack}>
                    <FaArrowLeft/>
                </div>
                <div className="top-row">
                    <div>
                        <div className="title">First Name</div>
                        <div className="content">"First Name"</div>
                    </div>
                    <div>
                        <div className="title">Last Name</div>
                        <div className="content">"Last Name"</div>
                    </div>
                    <div>
                        <div className="title">Email</div>
                        <div className="content">sampleUserEmail@email.com</div>
                    </div>
                    <div>
                        <div className="title">Phone Number</div>
                        <div className="content">08000000000</div>
                    </div>
                    <div>
                        <div className="title">status</div>
                        <div className="content text-yellow">Pending</div>
                    </div>
                </div>

                <div className="top-row">
                    <div>
                        <div className="title">State of Residence</div>
                        <div className="content">Lagos</div>
                    </div>
                </div>

                <div className="bottom-row">
                    <div className="message">
                        <div className="title">Message</div>
                        <div className="content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, voluptates magnam dignissimos eligendi in aperiam odit, doloremque maiores quo, cum expedita? Dignissimos, illo. Fugit pariatur minus mollitia veniam, harum cupiditate, maiores aut totam molestias sunt illo nulla! Illum numquam quae quod consequatur nostrum recusandae expedita rerum, incidunt, praesentium laboriosam, eum veritatis veniam tempora! Quisquam maiores quia molestiae beatae eveniet qui obcaecati debitis impedit iure inventore exercitationem unde error mollitia dolorum, totam illo consectetur laudantium labore ea nisi provident rerum. Sapiente earum, possimus nemo vitae, odio asperiores accusantium blanditiis optio molestias fuga adipisci hic accusamus eum ipsam ab ducimus voluptas laboriosam.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, voluptates magnam dignissimos eligendi in aperiam odit, doloremque maiores quo, cum expedita? Dignissimos, illo. Fugit pariatur minus mollitia veniam, harum cupiditate, maiores aut totam molestias sunt illo nulla! Illum numquam quae quod consequatur nostrum recusandae expedita rerum, incidunt, praesentium laboriosam, eum veritatis veniam tempora! Quisquam maiores quia molestiae beatae eveniet qui obcaecati debitis impedit iure inventore exercitationem unde error mollitia dolorum, totam illo consectetur laudantium labore ea nisi provident rerum. Sapiente earum, possimus nemo vitae, odio asperiores accusantium blanditiis optio molestias fuga adipisci hic accusamus eum ipsam ab ducimus voluptas laboriosam.
                        </div>
                    </div>
                </div>

                <div className="controls">
                    <div className="content">
                        <button className="btn btn-primary"><span style={{marginRight: '0.5rem'}}><FaCheck/></span> Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default withRouter(ProductsDetail)
