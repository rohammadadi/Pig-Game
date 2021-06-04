var score, roundscore, playerturn, name1, name2, text1, text2, pic1, pic2;

score0 = 0;
score1 = 0;
roundscore = 0;
playerturn = 0;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.winnerM').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.img1').addEventListener('click', function() {
	document.querySelector('.img1').classList.add('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img17').classList.remove('chosen');
	document.querySelector('.img15').classList.remove('chosen');
	pic1 = img1.src;
});
document.querySelector('.img2').addEventListener('click', function() {
	document.querySelector('.img2').classList.add('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img17').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img15').classList.remove('chosen');
	pic1 = img2.src;
});
document.querySelector('.img3').addEventListener('click', function() {
	document.querySelector('.img3').classList.add('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img17').classList.remove('chosen');
	document.querySelector('.img15').classList.remove('chosen');
	pic1 = img3.src;
});
document.querySelector('.img4').addEventListener('click', function() {
	document.querySelector('.img4').classList.add('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img17').classList.remove('chosen');
	document.querySelector('.img15').classList.remove('chosen');
	pic1 = img4.src;
});
document.querySelector('.img9').addEventListener('click', function() {
	document.querySelector('.img9').classList.add('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img17').classList.remove('chosen');
	document.querySelector('.img15').classList.remove('chosen');
	pic1 = img9.src;
});
document.querySelector('.img10').addEventListener('click', function() {
	document.querySelector('.img10').classList.add('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img15').classList.remove('chosen');
	document.querySelector('.img17').classList.remove('chosen');
	pic1 = img10.src;
});
document.querySelector('.img13').addEventListener('click', function() {
	document.querySelector('.img13').classList.add('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img15').classList.remove('chosen');
	document.querySelector('.img17').classList.remove('chosen');
	pic1 = img13.src;
});
document.querySelector('.img15').addEventListener('click', function() {
	document.querySelector('.img15').classList.add('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img17').classList.remove('chosen');
	pic1 = img15.src;
});
document.querySelector('.img17').addEventListener('click', function() {
	document.querySelector('.img17').classList.add('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img15').classList.remove('chosen');
	pic1 = img17.src;
});

document.querySelector('.img5').addEventListener('click', function() {
	document.querySelector('.img5').classList.add('chosen');
	document.querySelector('.img6').classList.remove('chosen');
	document.querySelector('.img7').classList.remove('chosen');
	document.querySelector('.img8').classList.remove('chosen');
	document.querySelector('.img12').classList.remove('chosen');
	document.querySelector('.img11').classList.remove('chosen');
	document.querySelector('.img14').classList.remove('chosen');
	document.querySelector('.img19').classList.remove('chosen');
	document.querySelector('.img16').classList.remove('chosen');
	pic2 = img5.src;
});
document.querySelector('.img6').addEventListener('click', function() {
	document.querySelector('.img6').classList.add('chosen');
	document.querySelector('.img5').classList.remove('chosen');
	document.querySelector('.img7').classList.remove('chosen');
	document.querySelector('.img8').classList.remove('chosen');
	document.querySelector('.img12').classList.remove('chosen');
	document.querySelector('.img11').classList.remove('chosen');
	document.querySelector('.img19').classList.remove('chosen');
	document.querySelector('.img14').classList.remove('chosen');
	document.querySelector('.img16').classList.remove('chosen');
	pic2 = img6.src;
});
document.querySelector('.img7').addEventListener('click', function() {
	document.querySelector('.img7').classList.add('chosen');
	document.querySelector('.img5').classList.remove('chosen');
	document.querySelector('.img6').classList.remove('chosen');
	document.querySelector('.img8').classList.remove('chosen');
	document.querySelector('.img12').classList.remove('chosen');
	document.querySelector('.img11').classList.remove('chosen');
	document.querySelector('.img14').classList.remove('chosen');
	document.querySelector('.img16').classList.remove('chosen');
	document.querySelector('.img19').classList.remove('chosen');
	pic2 = img7.src;
});
document.querySelector('.img8').addEventListener('click', function() {
	document.querySelector('.img8').classList.add('chosen');
	document.querySelector('.img7').classList.remove('chosen');
	document.querySelector('.img6').classList.remove('chosen');
	document.querySelector('.img5').classList.remove('chosen');
	document.querySelector('.img12').classList.remove('chosen');
	document.querySelector('.img11').classList.remove('chosen');
	document.querySelector('.img14').classList.remove('chosen');
	document.querySelector('.img16').classList.remove('chosen');
	document.querySelector('.img19').classList.remove('chosen');
	pic2 = img8.src;
});
document.querySelector('.img11').addEventListener('click', function() {
	document.querySelector('.img11').classList.add('chosen');
	document.querySelector('.img7').classList.remove('chosen');
	document.querySelector('.img6').classList.remove('chosen');
	document.querySelector('.img5').classList.remove('chosen');
	document.querySelector('.img8').classList.remove('chosen');
	document.querySelector('.img12').classList.remove('chosen');
	document.querySelector('.img14').classList.remove('chosen');
	document.querySelector('.img16').classList.remove('chosen');
	document.querySelector('.img19').classList.remove('chosen');
	pic2 = img11.src;
});
document.querySelector('.img12').addEventListener('click', function() {
	document.querySelector('.img12').classList.add('chosen');
	document.querySelector('.img7').classList.remove('chosen');
	document.querySelector('.img6').classList.remove('chosen');
	document.querySelector('.img5').classList.remove('chosen');
	document.querySelector('.img8').classList.remove('chosen');
	document.querySelector('.img11').classList.remove('chosen');
	document.querySelector('.img14').classList.remove('chosen');
	document.querySelector('.img16').classList.remove('chosen');
	document.querySelector('.img19').classList.remove('chosen');
	pic2 = img12.src;
});
document.querySelector('.img14').addEventListener('click', function() {
	document.querySelector('.img14').classList.add('chosen');
	document.querySelector('.img5').classList.remove('chosen');
	document.querySelector('.img6').classList.remove('chosen');
	document.querySelector('.img7').classList.remove('chosen');
	document.querySelector('.img8').classList.remove('chosen');
	document.querySelector('.img12').classList.remove('chosen');
	document.querySelector('.img11').classList.remove('chosen');
	document.querySelector('.img16').classList.remove('chosen');
	document.querySelector('.img19').classList.remove('chosen');
	pic2 = img14.src;
});
document.querySelector('.img16').addEventListener('click', function() {
	document.querySelector('.img16').classList.add('chosen');
	document.querySelector('.img5').classList.remove('chosen');
	document.querySelector('.img6').classList.remove('chosen');
	document.querySelector('.img7').classList.remove('chosen');
	document.querySelector('.img8').classList.remove('chosen');
	document.querySelector('.img12').classList.remove('chosen');
	document.querySelector('.img11').classList.remove('chosen');
	document.querySelector('.img14').classList.remove('chosen');
	document.querySelector('.img19').classList.remove('chosen');
	pic2 = img16.src;
});
document.querySelector('.img19').addEventListener('click', function() {
	document.querySelector('.img19').classList.add('chosen');
	document.querySelector('.img1').classList.remove('chosen');
	document.querySelector('.img2').classList.remove('chosen');
	document.querySelector('.img3').classList.remove('chosen');
	document.querySelector('.img4').classList.remove('chosen');
	document.querySelector('.img10').classList.remove('chosen');
	document.querySelector('.img9').classList.remove('chosen');
	document.querySelector('.img13').classList.remove('chosen');
	document.querySelector('.img16').classList.remove('chosen');
	pic2 = img19.src;
});

document.querySelector('.done').addEventListener('click', function() {
	name1 = p1username.value;
	name2 = p2username.value;
	text1 = p1text.value;
	text2 = p2text.value;
	document.querySelector('.Modal').style.display = 'none';
	document.querySelector('#name--0').textContent = name1;
	document.querySelector('#name--1').textContent = name2;
	if (pic1 == undefined) {
		picturep1.src = 'nopic2.png';
	} else {
		picturep1.src = pic1;
	}
	if (pic2 == undefined) {
		picturep2.src = 'nopic2.png';
	} else {
		picturep2.src = pic2;
	}
});

document.querySelector('.btn--roll').addEventListener('click', function() {
	//1. A random number
	var dice = Math.floor(Math.random() * 6) + 1;

	//2. Display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	//3. Update the round score IF the rolled number was NOT 1
	if (dice !== 1) {
		//Add score
		roundscore += dice;
		document.querySelector('#current--' + playerturn).textContent = roundscore;
	} else {
		//Next player's turn
		document.querySelector('#current--' + playerturn).textContent = 0;
		roundscore = 0;
		if (playerturn === 0) {
			playerturn = 1;
		} else {
			playerturn = 0;
		}
		document.querySelector('.player--0').classList.toggle('active');
		document.querySelector('.player--1').classList.toggle('active');

		if (score0 > 99) {
			//first player is the winner
			document.querySelector('.player--0').classList.add('player--winner');
			document.querySelector('#current--0').style.display = 'none';
			document.querySelector('.current0').textContent = text1;
			document.querySelector('.winnerp').textContent = name1;
			document.querySelector('.winnerM').style.display = 'block';
			document.querySelector('.main').style.background = "url('player-1-winner.png')";
			document.querySelector('.main').style.backgroundRepeat = "no-repeat";
			document.querySelector('.main').style.backgroundSize = "cover";
			document.querySelector('.main').style.backgroundPosition = "center";
			setTimeout(winfun, 2000);
			
		} else if (score1 > 99) {
			//second player is the winner
			document.querySelector('.player--1').classList.add('player--winner');
			document.querySelector('#current--1').style.display = 'none';
			document.querySelector('.current1').textContent = text2;
			document.querySelector('.winnerp').textContent = name2;
			document.querySelector('.winnerM').style.display = 'block';
			document.querySelector('.main').style.background = "url('player-2-winner.png')";
			document.querySelector('.main').style.backgroundRepeat = "no-repeat";
			document.querySelector('.main').style.backgroundSize = "cover";
			document.querySelector('.main').style.backgroundPosition = "center";
			setTimeout(winfun, 2000);
		}

	}
});

document.querySelector('.btn--hold').addEventListener('click', function() {
	if (playerturn === 0) {
		score0 += roundscore;
		document.getElementById('score--' + playerturn).textContent = score0;
	} else {
		score1 += roundscore;
		document.getElementById('score--' + playerturn).textContent = score1;
	}
	roundscore = 0;
	document.querySelector('#current--' + playerturn).textContent = 0;
	if (playerturn === 0) {
		playerturn = 1;
	} else {
		playerturn = 0;
	}
	document.querySelector('.player--0').classList.toggle('active');
	document.querySelector('.player--1').classList.toggle('active');

	if (score0 > 99) {
		//first player is the winner
		//document.querySelector('.player--0').classList.add('player--winner');
		document.querySelector('#current--0').style.display = 'none';
		document.querySelector('.current0').textContent = text1;
		document.querySelector('.winnerp').textContent = name1;
		document.querySelector('.winnerM').style.display = 'block';
		document.querySelector('.main').style.background = "url('player-1-winner.png')";
		document.querySelector('.main').style.backgroundRepeat = "no-repeat";
		document.querySelector('.main').style.backgroundSize = "cover";
		document.querySelector('.main').style.backgroundPosition = "center";
		setTimeout(winfun, 2000);
	} else if (score1 > 99) {
		//second player is the winner
		//document.querySelector('.player--1').classList.add('player--winner');
		document.querySelector('#current--1').style.display = 'none';
		document.querySelector('.current1').textContent = text2;
		document.querySelector('.winnerp').textContent = name2;
		document.querySelector('.winnerM').style.display = 'block';
		document.querySelector('.main').style.background = "url('player-2-winner.png')";
		document.querySelector('.main').style.backgroundRepeat = "no-repeat";
		document.querySelector('.main').style.backgroundSize = "cover";
		document.querySelector('.main').style.backgroundPosition = "center";
		setTimeout(winfun, 2000);
	}
});

function winfun() {
	document.querySelector('.winnerM').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', function () {
	score0 = 0;
	score1 = 0;
	roundscore = 0;
	playerturn = 0;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score--0').textContent = '0';
	document.getElementById('score--1').textContent = '0';
	document.getElementById('current--0').textContent = '0';
	document.getElementById('current--1').textContent = '0';

	document.querySelector('.player--0').classList.remove('player--winner');
	document.querySelector('.player--1').classList.remove('player--winner');

	document.querySelector('.player--0').classList.add('active');
	document.querySelector('.player--1').classList.remove('active');

	document.querySelector('.Modal').style.display = 'block';
	document.querySelector('#name--0').textContent = 'Player 1';
	document.querySelector('#name--1').textContent = 'Player 2';

	document.querySelector('#current--0').style.display = 'block';
	document.querySelector('#current--' + playerturn).textContent = roundscore;
	document.querySelector('#current--1').style.display = 'block';
	document.querySelector('#current--' + playerturn).textContent = roundscore;
	document.querySelector('.current0').textContent = 'current';
	document.querySelector('.current1').textContent = 'current';
	document.querySelector('.main').style.background = 'rgba(255, 255, 255, 0.75)';
});







//document.querySelector('#current--' + playerturn).textContent = dice;
// You could also do: document.querySelector('#current--' + playerturn).innerHTML = '<b>' + dice + '</b>' for bold text
