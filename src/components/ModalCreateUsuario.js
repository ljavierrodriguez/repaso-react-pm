const ModalCreateUsuario = ({ handleChange, handleClick, usuario }) => {
    return (
        <div className="modal" id="agregarUsuarioModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Agregar Usuario</h4>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="ingrese Nombre"
                                        value={usuario.nombre}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apellido"
                                        placeholder="ingrese apellido"
                                        value={usuario.apellido}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={handleClick}>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateUsuario;