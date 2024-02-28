import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {Modal} from "./Modal"

import ProfilePhoto from "../../img/rigo-baby.jpg";


const ContactCard = ({ contact }) => {
	const { full_name, email, address, phone } = contact;
	const { actions } = useContext(Context);

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src={ProfilePhoto}
						alt="profile image"
						width="110"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className="float-end">
						<Link to={`/editContact/${contact.id}`}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3"></i>
							</button>
						</Link>
						<button type="button" class="btn" data-bs-toggle="modal" data-bs-target={`#Modal${contact.id}`}>
						<i className="fas fa-trash-alt"></i>
						</button>
						<Modal contact={contact}/>
					</div>
					<div className="text-start">
						<label className="name lead fw-bold">{full_name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted me-3"></i>
						<span className="text-muted">{address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted me-2"
							data-toggle="tooltip"
							title=""
							data-original-title=""></span>
						<span className="text-muted small">{phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted me-2"
							data-toggle="tooltip"
							data-original-title=""
							title="">
						</span>
						<span className="text-muted small text-truncate">
							{email}
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};


export default ContactCard;