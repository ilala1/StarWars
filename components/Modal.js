import React from "react";
import styled from "styled-components";

import { numberWithCommas } from "../public/js/common";

export const Modal = ({
	openModal,
	setOpenModal,
	content,
	highestFilmCount,
}) => {

	if (!content) return null;
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
				{films.length === highestFilmCount && (
					<img src="../img/star.png" alt="star" className="star" />
				)}
				<div className="modalContentWrapper">
					<div className="modalHeaderWrap">
						<h2 className="modalTitle">Ship name: {name}</h2>
						<h2 className="modalTitle">Model: {model}</h2>
					</div>
					<div className="modalContentContainer specs">
						<h2 className="modalContentHeader">Specs:</h2>
						<p>Class: {starship_class}</p>
						<p>Manufacturer: {manufacturer}</p>
						<p>Max Atmosphering speed: {max_atmosphering_speed}</p>
						<p>Cargo Capacity: {cargo_capacity}</p>
						<p>Length: {length}</p>
						<p>Crew: {crew}</p>
						<p>Passengers: {passengers}</p>
						<p>MGLT: {MGLT}</p>
						<p>Created: {new Date(created).toLocaleDateString()}</p>
						<p>Edited: {new Date(edited).toLocaleDateString()}</p>
					</div>

					<div className="modalContentContainer costs_efficiency">
						<h2 className="modalContentHeader">
							Costs & Efficiency:
						</h2>
						<p>Hyperdrive Rating: {hyperdrive_rating}</p>
						<p>
							Cost In Credits: {numberWithCommas(cost_in_credits)}
						</p>
						<p>Consumables: {consumables}</p>
					</div>

					<div className="modalContentContainer funFacts">
						<h2 className="modalContentHeader">Fun Facts:</h2>
						<p>Pilots: {pilots.length}</p>
						<p>Number of films: {films.length}</p>
						{/* <a href={url}>{url}</a> */}
					</div>
				</div>
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
	background-color: rgba(0, 0, 0, 1); /* Black w/ opacity */
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
	width: 70%;
	min-width: 700px;
	margin-top: 3rem;
	height: 80vh;
	overflow: scroll;
	color: #fff;
	position: relative;
	.star {
		position: absolute;
		top: 10px;
		left: 10px;
		width: 50px;
	}
	.modalContentWrapper {
		margin-top: 10px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
		.modalHeaderWrap {
			grid-column: 1 / 3;
		}
		.specs {
			grid-column: 1 / 3;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
		.modalContentContainer {
			border: 1px solid #ffc909;
			padding: 1rem;
			.modalContentHeader {
				grid-column: 1 / 3;
			}
		}
	}
	@media (max-width: 780px) {
		width: 90%;
		min-width: 300px;
		.modalContentWrapper {
			margin-top: 10px;
			display: block;
			.specs {
				display: block;
			}
		}
	}
`;

export default Modal;
