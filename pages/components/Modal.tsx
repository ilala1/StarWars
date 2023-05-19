import React from "react";
import styled from "styled-components";

export const Modal = ({ openModal, setOpenModal, content, title }) => {
	const {
		name,
		model,
		manufacturer,
		cost_in_credits,
		length,
		max_atmosphering_speed,
		crew,
		passengers,
		cargo_capacity,
		consumables,
		hyperdrive_rating,
		MGLT,
		starship_class,
		pilots,
		films,
		created,
		edited,
		url,
	} = content;
	return (
		<ModalStyles className={openModal ? "active" : ""}>
			<ModalContent>
				<span className="close" onClick={() => setOpenModal(false)}>
					&times;
				</span>
				<h2 className="modalTitle">{name}</h2>
				<h2 className="modalTitle">{model}</h2>
				<p>{manufacturer}</p>
				<p>{cost_in_credits}</p>
				<p>{length}</p>
				<p>{max_atmosphering_speed}</p>
				<p>{crew}</p>
				<p>{passengers}</p>
				<p>{cargo_capacity}</p>
				<p>{consumables}</p>
				<p>{hyperdrive_rating}</p>
				<p>{MGLT}</p>
				<p>{starship_class}</p>
				<p>{pilots.length}</p>
				<p>{films.length}</p>
				<p>{new Date(created).toString()}</p>
				<p>{edited}</p>
				<p>{url}</p>
			</ModalContent>
		</ModalStyles>
	);
};

export const ModalStyles = styled.div`
	display: none;
	position: fixed; /* Stay in place */
	z-index: 100; /* Sit on top */
	padding-top: 25px; /* Location of the box */
	left: 0;
	top: 0%;
	width: 100%;
	height: 100%; /* Full height */
	overflow: hidden; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
	&.active {
		display: block;
	}
	.close {
		cursor: pointer;
		color: #aaaaaa;
		text-align: right;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: #fff;
		text-decoration: none;
		cursor: pointer;
	}
`;

export const ModalContent = styled.div`
	background-color: #000;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 50%;
	margin-top: 3rem;
	height: 80vh;
	overflow: scroll;
	color: #fff;
`;

export default Modal;
