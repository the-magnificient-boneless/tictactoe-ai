export default function Board(){
    <>
			<section className="card">
				<div>
					<p
						style={{ fontSize: '1.2em' }}
						className={showModal ? 'blur' : ''}
					>
						<strong>Score</strong> 👤 {PLAYER.HUMAN} ❯{' '}
						<strong>{scoreA}</strong> | 💻 {PLAYER.AI} ❯{' '}
						<strong> {scoreB} </strong> | ⚖️ ❯
						<strong> {draws}</strong>
						<br />
						<span style={{ fontSize: '.8em' }}>
							🕹️ {roundsPlayed} of {totalRoundsToPlay} Rounds{' '}
						</span>
					</p>
				</div>

				<div className={showModal ? 'container blur' : 'container'}>
					<div className="board">
						{board.map((player, index) => (
							<div
								key={index}
								className={
									player
										? 'boxSelected'
										: 'box' +
											(winner &&
											boxRef.current[
												index
											]?.current?.classList.contains(
												'winner',
											)
												? ' winner'
												: '')
								}
								onClick={() => handleClickBox(index)}
								ref={boxRef.current[index]}
							>
								<span ref={playerRef.current[index]}>
									{player}
								</span>
							</div>
						))}
					</div>
				</div>
				<div>
					{!winner && (
						<p>
							💬 Waiting for the player {currentPlayer} movement!
						</p>
					)}
					<p>
						<img
							src="./Globant-LightBG-Color.png"
							className="logo"
							alt="React logo"
						/>
					</p>
					{/* <button
						onClick={handleResetMatch}
						className={showModal ? 'blur' : ''}
					>
						Reset Match!
					</button> */}

					{/* <p>
						<button
							className={showModal ? 'blur' : ''}
							onClick={handleResetRound}
						>
							{roundsPlayed === totalRoundsToPlay
								? 'Continue'
								: 'Restart Round'}
						</button>
					</p> */}
				</div>
			</section>
			{winner && roundsPlayed < totalRoundsToPlay && (
				<Modal
					show={showModal}
					winner={winner}
					onHandleClickButton={handleResetRound}
				/>
			)}
			 {/* Conditional Rendering of EndingScreen */}
			 {showEndingScreen && (
                <EndingScreen
                    player={PLAYER}
                    scores={[scoreA, scoreB]}
                    onHandleClickButton={handleResetMatch}
                />
            )}
		</>
}