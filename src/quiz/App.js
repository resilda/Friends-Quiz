import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const questions = [
		{
			questionText: '“Well, maybe I don’t need your money. Wait, wait, I said maybe!”',
			answerOptions: [
				{ answerText: 'Rachel', isCorrect: true },
				{ answerText: 'Ross', isCorrect: false },
				{ answerText: 'Monica', isCorrect: false },
				{ answerText: 'Chandler', isCorrect: false }
			]
		},
		{
			questionText: '“I wish I could, but I don’t want to.”',
			answerOptions: [
				{ answerText: 'Monica', isCorrect: false },
				{ answerText: 'Pheobe', isCorrect: true },
				{ answerText: 'Rachel', isCorrect: false },
				{ answerText: 'Emily', isCorrect: false }
			]
		},
		{
			questionText: '"And what is life without love?"',
			answerOptions: [
				{ answerText: 'Chandler', isCorrect: false },
				{ answerText: 'Pheobe', isCorrect: false },
				{ answerText: 'Joey', isCorrect: true },
				{ answerText: 'Janice', isCorrect: false }
			]
		},
		{
			questionText: '“You can’t just give up. Is that what a dinosaur would do?"',
			answerOptions: [
				{ answerText: 'Joey', isCorrect: true },
				{ answerText: 'Chandler', isCorrect: false },
				{ answerText: 'Gunther', isCorrect: false },
				{ answerText: 'Ross', isCorrect: false }
			]
		},
		{
			questionText: '"What is wrong with me? Uh, do not open that door."',
			answerOptions: [
				{ answerText: 'Rachel', isCorrect: false },
				{ answerText: 'Chandler', isCorrect: true },
				{ answerText: 'Ross', isCorrect: false },
				{ answerText: 'Monica', isCorrect: false }
			]
		},
		{
			questionText: '"You did not sit in my Kit-Kats, did you?"',
			answerOptions: [
				{ answerText: 'Rachel', isCorrect: false },
				{ answerText: 'Chandler', isCorrect: false },
				{ answerText: 'Ross', isCorrect: false },
				{ answerText: 'Monica', isCorrect: true }
			]
		},
		{
			questionText: '“I knowwwwww"',
			answerOptions: [
				{ answerText: 'Joey', isCorrect: false },
				{ answerText: 'Chandler', isCorrect: false },
				{ answerText: 'Monica', isCorrect: true },
				{ answerText: 'Ross', isCorrect: false }
			]
		},
		{
			questionText: '“See? He’s her lobster.”',
			answerOptions: [
				{ answerText: 'Chandler', isCorrect: false },
				{ answerText: 'Pheobe', isCorrect: true },
				{ answerText: 'Joey', isCorrect: false },
				{ answerText: 'Janice', isCorrect: false }
			]
		},
		{
			questionText: '"I am glad we are having a rehearsal dinner. I rarely practice my meals before I eat."',
			answerOptions: [
				{ answerText: 'Chandler', isCorrect: true },
				{ answerText: 'Pheobe', isCorrect: false },
				{ answerText: 'Joey', isCorrect: false },
				{ answerText: 'Janice', isCorrect: false }
			]
		},
		{
			questionText: '"Be honest. Were they on a break?"',
			answerOptions: [
				{ answerText: 'They were on a break!!!', isCorrect: true },
				{ answerText: 'NOOOOO', isCorrect: false }
			]
		}
	];

	//the questions shown and the update from one question to another
	const [ currentQuestion, setCurrentQuestion ] = useState(0);
	//if the user wants to see the score reached
	const [ showScore, setShowScore ] = useState(false);
	//keeping track of the score
	const [ score, setScore ] = useState(0);
	//a specific time for each question
	const [ seconds, setSeconds ] = useState(60);

	useEffect(() => {
		if (seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 1000);
		} else {
			setSeconds('The time stopped!');
		}
	});

	//accumulating the score and passing from one question to another
	const handleAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		next(currentQuestion, setCurrentQuestion, setShowScore);
	};

	const next = (currentQuestion, setCurrentQuestion, setShowScore) => {
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	//this function is nessesary to generate a random key number for each element of the quiz
	//by installing uuid, it is possible to create your own key generater implemented in line 186
	//CHECK THE README.MD FILE
	var createUUID = function() {
		return 'uuid-' + (new Date().getTime().toString(16) + Math.floor(1e7 * Math.random()).toString(16));
	};

	return (
		<div>
			<section className="presentation">
				<h1 className="h1-presentation">Take the newest Friends quiz!!!</h1>
				<p className="p-presentation">
					Let's see how well do you know these phrases of FRIENDS in under 60 seconds!
				</p>
			</section>
			<div className="wrapper">
				{showScore ? (
					<div>
						<div className="score-section">
							You scored {score} out of {questions.length}
						</div>
						<div className="result-section">
							<section className="true-results">
								{score < 5 ? (
									<h1 className="result-text">
										"You know 'Friends' and you enjoy watching this show occasionally. Maybe at
										weekends or even in a week night, to escape a little from the responsibilities
										and just having 'Friends' there for you."
									</h1>
								) : (
									<h1 className="result-text">
										"You love friends so much and see them as soon as a little free time pops up. Or
										maybe you catch up with them daily in social media videos and memes. Also, I do
										not know if you need to hear this, but 'They were on a break!', even though Ross
										screw up badly. Keep enjoying them, cause they are there for you!!!"
									</h1>
								)}
							</section>
						</div>
					</div>
				) : (
					<section className="wrapper-2">
						<div className="question-section">
							<div className="question-count">
								<span>Question {currentQuestion + 1}</span>/{questions.length}
								<div id="seconds-alignment">
									{''}
									{seconds}
									{''}
								</div>
							</div>
							<div id="question-text">{questions[currentQuestion].questionText}</div>
						</div>
						<div className="answer-section">
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button key={createUUID()} onClick={() => handleAnswer(answerOption.isCorrect)}>
									{answerOption.answerText}
								</button>
							))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
}

export default App;
