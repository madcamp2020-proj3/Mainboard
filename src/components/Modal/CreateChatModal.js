import React, {useState} from 'react';
import "./modal.css";

const Modal = ( props ) => {
  const { open, close, header } = props;
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [location, setLocation] = useState("");
  const [members, setMembers] = useState("");

  return (
    <div className={ open ? 'openModal modal' : 'modal' } id="myModal">
      { open ? (  
        <section>

          <header>
            {header}
            <button className="close" onClick={close}> &times; </button>
          </header>

          <main>
            <form>
            {props.children}
            <div class="form-group">
            <label>제목:</label>
              <input type="text" class="form-control" name="title" value={title} onChange={({target: {value}}) => setTitle(value)}></input>
            
            </div>

            <div class="form-group">
            <label>상세 설명:</label>
              <input type="text" class="form-control" name="subtitle" value={subtitle} onChange={({target: {value}}) => setSubtitle(value)}></input>
            
            </div>

            <div class="form-group">
            <label>지역:</label>
              <input type="text" class="form-control" name="location" value={location} onChange={({target: {value}}) => setLocation(value)}></input>
            
            </div>

            <div class="form-group">
            <label >최대 인원수:</label>
            <input type="number" class="form-control" name="members" value={members} onChange={({target: {value}}) => setMembers(value)}></input>
            </div>
            </form>
          </main>
          
          <footer>
            <button className="btn btn-primary p-2 mx-3"
             onClick={() => localStorage.setItem(title, [subtitle, location, members])}> Save </button>
          </footer>

        </section>
      ) : null }
    </div>
  )
}


export default Modal;