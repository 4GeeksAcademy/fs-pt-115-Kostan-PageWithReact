
export const Cartas = ({ imagen, nombre, descripcion, info}) => {
    return (
        <div className="col-md-4 ">
            <div className="card md-4 shadow-sm mx-auto" style={{ width: "18rem" }}>
                <img src={imagen} style={{height: "240px", objectPosition: "top", backgroundColor: "black" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a href={info} className="btn btn-primary">+ Información</a>
                </div>
            </div>
        </div>
    );
};