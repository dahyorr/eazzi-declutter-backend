import Header from "../../AdminHeader/Header";

function Viewport({children, title}) {
    return (
        <div className="Viewport">
            <div className="container">
                <Header title={title}/>
                {children}
            </div>
        </div>
    )
}

export default Viewport 
