import React, {useState} from 'react';
import './sidebar.css';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';



const Sidebar = (props) => {


    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div className="flexAndCenter">
            <section className="side">
                <a href='#!' className="nameSidebar">
                    Помощник ТРИЗ
                    <span className="signIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 24 24" className="icon-xl-heavy">
                            <path
                                d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
                        </svg>
                    </span>
                </a>


                <div className="sessions">
                    {
                        props.session.length >= 1 &&
                        <div className="nameList">Предыдущие Сессии</div>
                    }
                    {
                        props.session.map(el => (
                                <div className="linkSession">
                                    <a href="#!">{el}</a>
                                    <button type="button" className="changeNameLink" onClick={(e) => {
                                        setOpen(o => !o)
                                    }}>
                                        <svg fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 32.055 32.055">
                                            <g>
                                                <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                                                    C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                                                    s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                                                    c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            )
                        )
                    }
                </div>
            </section>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a href="#!" className="closeModal" onClick={closeModal}>
                        &times;
                    </a>
                    <div className="headerModal">

                    </div>
                    <form action="" id="changeName">
                        <input type="text" className="changeName" />
                        <input type="submit" onClick={(e) => {
                            const formChangeName = e.target.closest('#changeName');
                            formChangeName.addEventListener('submit' , e => {
                                e.preventDefault();
                            })
                        }}/>
                    </form>
                </div>
            </Popup>
        </div>

    );
};

export default Sidebar;