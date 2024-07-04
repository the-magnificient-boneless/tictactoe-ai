import React from 'react'
import PropTypes from 'prop-types'
import './modal.css'

export default function Modal({ show, winner, onHandleClickButton }) {
	if (!show) {
		return null
	}

	return (
		<div className="modal-overlay">
			<div className="modal">
				<h2>
					{winner === 'Draw!' ? "It's a Draw!" : `Player ${winner}`}
				</h2>
				<h1>{winner === 'Draw!' ? '' : ` Wins!`}</h1>
				<button onClick={onHandleClickButton} className="btnYepModal">
					Continue
				</button>
			</div>
		</div>
	)
}

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	winner: PropTypes.string.isRequired,
	onHandleClickButton: PropTypes.func.isRequired,
}
