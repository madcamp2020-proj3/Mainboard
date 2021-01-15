import React from 'react';
import "./modal.css";

const Modal = ( props ) => {
    const { open, close, header } = props;

    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <button className="btn btn-primary p-2 mx-3" onClick={close}> Save </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;