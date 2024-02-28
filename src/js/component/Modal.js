import React, {useContext} from 'react';
import { Context } from "../store/appContext";


export const Modal = ({contact}) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id={`Modal${contact.id}`} tabIndex="-1" role="dialog" aria-labelledby="Are you sure?" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {actions.deleteContact(contact.id)}}>Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}




               


// const Modal = ({ showModal, setModal, handleDelete }) => {
//     const { store, actions } = useContext(Context);
//     return (
//         showModal && (
//             <div className="modal" tabIndex="-1" role="dialog">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">Are you sure?</h5>
//                             <button type="button" className="close" onClick={() => setModal(false)} aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <p>If you delete...</p>
//                         </div>
//                         <div className="modal-footer">
//                             <button className="btn btn-danger" onClick={handleDelete}>
//                                 Yes
//                             </button>
//                             <button type="button" className="btn btn-secondary" onClick={() => setModal(false)}>
//                                 No
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     );
// };