import React, { useState } from 'react';
import './QuestSpiel.css';

const questions = [
  { question: 'Wie viele Äpfel sind 🍎🍎🍎🍎🍎 + 🍎🍎🍎?', answer: 8, type: 'addition', emoji: '🍎' },
  { question: 'Wie viele Orangen sind 🍊🍊🍊🍊🍊🍊🍊 + 🍊🍊?', answer: 9, type: 'addition', emoji: '🍊' },
  { question: 'Wie viele Bananen sind 🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌 + 🍌🍌🍌🍌?', answer: 14, type: 'addition', emoji: '🍌' },
  { question: 'Wie viele Erdbeeren sind 🍓🍓🍓🍓🍓🍓 + 🍓🍓🍓🍓🍓?', answer: 11, type: 'addition', emoji: '🍓' },
  { question: 'Wie viele Kirschen sind 🍒🍒🍒🍒🍒🍒🍒🍒 + 🍒🍒🍒🍒🍒?', answer: 15, type: 'addition', emoji: '🍒' },
  { question: 'Wie viele Katzen sind 🐱🐱🐱🐱🐱🐱🐱🐱🐱 - 🐱🐱🐱🐱?', answer: 5, type: 'subtraction', emoji: '🐱' },
  { question: 'Wie viele Hunde sind 🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶 - 🐶🐶🐶?', answer: 7, type: 'subtraction', emoji: '🐶' },
  { question: 'Wie viele Elefanten sind 🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘 - 🐘🐘🐘🐘🐘🐘🐘🐘?', answer: 7, type: 'subtraction', emoji: '🐘' },
  { question: 'Wie viele Giraffen sind 🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒 - 🦒🦒🦒🦒🦒🦒🦒?', answer: 5, type: 'subtraction', emoji: '🦒' },
  { question: 'Wie viele Löwen sind 🦁🦁🦁🦁🦁🦁🦁🦁 - 🦁🦁?', answer: 6, type: 'subtraction', emoji: '🦁' }
];

const QuestSpiel = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNext = () => {
    setFeedback('');
    setUserAnswer('');
    if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    } 
    else {
  setCurrentQuestion(currentQuestion + 1);
   }
  };

  const handlePrev = () => {
    setFeedback('');
    setUserAnswer('');
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(userAnswer) === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback('Richtig! 😊');
    } else {
      setFeedback('Leider falsch. 😞');
    }
  };

  const progress = (currentQuestion + 1) / questions.length * 100;

  if (currentQuestion >= questions.length) {
    return (
      <div className="game-container">
        <h2>Dein Ergebnis</h2>
        <p>Du hast {score} von {questions.length} Aufgaben richtig beantwortet!</p>
        {score === questions.length ? (
          <div className="emoji-container">
            <p>Super gemacht! 🎉</p>
          </div>
        ) : (
          <div className="emoji-container">
            <p>Gute Arbeit! Nächstes Mal schaffst du es bestimmt! 👍</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="game-container">
      <h2>Mathe-Quest: Tiere und Früchte</h2>
      <p>Frage {currentQuestion + 1}: {questions[currentQuestion].question}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        <button className="answer-button" type="submit">Antworten</button>
      </form>
      <p className="feedback">{feedback}</p>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={handlePrev} disabled={currentQuestion === 0}>Zurück</button>
        <button className="nav-button" onClick={handleNext} disabled={userAnswer === ''}>Weiter</button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default QuestSpiel;
