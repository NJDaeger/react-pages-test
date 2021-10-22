const Login = () => {
    return (
        <div className='modal columns is-flex-mobile p-5'>
            <div className="modal-card card">
                <p className="modal-card-head modal-card-title is-justify-content-center">Mentor Login</p>
                <div className="modal-card-body">
                    <div className="content control">
                        <input type="email" className="field input is-primary" placeholder="Email"/>
                        <input type="password" className="field input is-primary" placeholder="Password"/>
                    </div>
                    <div className="content control">
                        <button className="button is-primary is-fullwidth">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login