import React, { useState } from 'react';
import './Algorithmen.css';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import AlgorithmImage from '../../../assets/algorithm.png';

const Algorithmen = () => {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [progress, setProgress] = useState(0);

  const quizzes = [
    {
      question: 'Was sind Algorithmen?',
      options: ['Kleine Roboter', 'Eine Reihe von Schritten zur Lösung eines Problems', 'Magische Bücher'],
      correctAnswer: 'Eine Reihe von Schritten zur Lösung eines Problems',
      emoji: '🤖',
    },
    {
      question: 'Welche Farbe hat ein Algorithmus?',
      options: ['Blau', 'Rot', 'Er hat keine Farbe'],
      correctAnswer: 'Er hat keine Farbe',
      emoji: '🎨',
    },
    {
      question: 'Warum sind Algorithmen wichtig?',
      options: ['Um Kuchen zu backen', 'Um Computerprogramme zu erstellen', 'Um Rennen zu gewinnen'],
      correctAnswer: 'Um Computerprogramme zu erstellen',
      emoji: '💻',
    },
    {
      question: 'Wie viele Schritte kann ein Algorithmus haben?',
      options: ['Nur einen Schritt', 'Unendlich viele Schritte', 'Einige Schritte'],
      correctAnswer: 'Einige Schritte',
      emoji: '🚀',
    },
    {
      question: 'Können Kinder auch Algorithmen machen?',
      options: ['Nein, nur Erwachsene', 'Ja, natürlich!', 'Nur wenn sie groß sind'],
      correctAnswer: 'Ja, natürlich!',
      emoji: '👶',
    },
  ];

  const handleAnswer = (event) => {
    event.preventDefault();
    const selectedAnswer = answer;
    const correctAnswer = quizzes[quizIndex].correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;

    setQuizAnswers([...quizAnswers, { question: quizzes[quizIndex].question, answer: selectedAnswer, correct: isCorrect }]);
    setShowResult(true);

    const newProgress = ((quizIndex + 1) / quizzes.length) * 100;
    setProgress(newProgress);
  };

  const nextQuestion = () => {
    if (quizIndex + 1 < quizzes.length) {
      setQuizIndex(quizIndex + 1);
      setShowResult(false);
      setAnswer('');
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div>
      <Header />
      <main className="main-content">
        {!quizCompleted ? (
          <div className="hero-section">
            <div className="hero-text">
              <h1>Willkommen beim Algorithmen-Quiz!</h1>
              <p className="intro-text">
                Teste dein Wissen über Algorithmen mit diesen lustigen Fragen!
              </p>
            </div>
            <div className="hero-media">
              <img src={AlgorithmImage} alt="Beispielbild für Algorithmen" className="algorithm-image" />
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FBUoEumkP2w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/MGrt5aiEKRM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ) : null}
        <div className="quiz-section">
          {!quizCompleted ? (
            <>
              <div className="quiz-question">
                <h2>{quizzes[quizIndex].question}</h2>
                {quizzes[quizIndex].options.map((option, index) => (
                  <div key={index} className="quiz-option">
                    <input
                      type="radio"
                      id={`option${index}`}
                      name="quizOption"
                      value={option}
                      onChange={(e) => setAnswer(e.target.value)}
                      checked={answer === option}
                    />
                    <label htmlFor={`option${index}`}>{option}</label>
                  </div>
                ))}
                <button
                  className="answer-button"
                  disabled={!answer}
                  onClick={handleAnswer}
                >
                  Antworten
                </button>
              </div>
              <div className="emoji-container">
                <span role="img" aria-label="emoji">{quizzes[quizIndex].emoji}</span>
              </div>
            </>
          ) : (
            <div className="results-section">
              <h2>Quiz abgeschlossen!</h2>
              <div className="quiz-results">
                {quizAnswers.map((quiz, index) => (
                  <div key={index} className="quiz-result">
                    <p>
                      <strong>Frage:</strong> {quiz.question}
                    </p>
                    <p>
                      <strong>Deine Antwort:</strong> {quiz.answer}
                    </p>
                    {quiz.correct ? (
                      <p className="correct-answer">Richtig!</p>
                    ) : (
                      <p className="incorrect-answer">Leider falsch. Die richtige Antwort war: {quizzes[index].correctAnswer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {showResult && (
            <div className="result">
              <p>{quizAnswers[quizIndex].correct ? 'Richtig! 🎉' : 'Leider falsch. 😞'}</p>
              <p>Die richtige Antwort war: {quizzes[quizIndex].correctAnswer}</p>
              <button className="next-button" onClick={nextQuestion}>
                {quizIndex + 1 < quizzes.length ? 'Nächste Frage' : 'Quiz beenden'}
              </button>
            </div>
          )}
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Algorithmen;