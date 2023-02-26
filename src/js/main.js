const teamPlayers = document.querySelectorAll('.team__player')
const boxes = document.querySelectorAll('.box')
const teamBox = document.querySelector('.team')
const chosenBox = document.querySelector('.chosen')
const sendBtn = document.querySelector('.chosen__btn-send')

teamPlayers.forEach(player => {
	player.addEventListener('dragstart', () => {
		player.classList.add('is-dragged')
	})

	player.addEventListener('dragend', () => {
		player.classList.remove('is-dragged')
	})
})

boxes.forEach(box => {
	box.addEventListener('dragover', e => {
		e.preventDefault()
		const isDragged = document.querySelector('.is-dragged')
		box.appendChild(isDragged)

		handleTeam()
	})
})

const handleTeam = () => {
	const chosenTeam = chosenBox.querySelectorAll('.team__player')
	console.log(chosenTeam.length)
	if (chosenTeam.length > 2) {
		const notChosenTeam = teamBox.querySelectorAll('.team__player')
		console.log(notChosenTeam)
		notChosenTeam.forEach(player => {
			player.setAttribute('draggable', 'false')
			player.classList.add('team__player-disabled')
		})

		sendBtn.disabled = false
	} else {
		const notChosenTeam = teamBox.querySelectorAll('.team__player')
		console.log(notChosenTeam)
		notChosenTeam.forEach(player => {
			player.setAttribute('draggable', 'true')
			player.classList.remove('team__player-disabled')
		})

		sendBtn.disabled = true
	}
}
