const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body p-3 text-center">
                {props.icon}
                {/* <FaHtml5 className="fs-1 bg-warning" /> */}
                <p className="card-text my-3">
                    {props.texto}
                </p>
            </div>
        </div>
    )
}

export default Card;