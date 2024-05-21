import { Link } from 'react-router-dom'

function Book(props) {
    console.log(props);
    return <Link to={'book/' + props.data.id} className="card" style={{ width: "18rem" }}>
        <img src={props.data.images[0].base_url} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5>{props.data.name}</h5>
            <p className="card-text">
                {props.data.short_description}
            </p>
        </div>
    </Link>
}

export default Book;