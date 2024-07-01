import React, { useState } from 'react';
import './Algorithmen.css';
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
      options: [
        { text: 'Kleine Roboter', id: 'option1' },
        { text: 'Eine Reihe von Schritten zur Lösung eines Problems', id: 'option2' },
        { text: 'Magische Bücher', id: 'option3' },
      ],
      correctAnswer: 'Eine Reihe von Schritten zur Lösung eines Problems',
      emoji: '🤖',
    },
    {
      question: 'Welche Farbe hat ein Algorithmus?',
      options: [
        { text: 'Blau', id: 'option1' },
        { text: 'Rot', id: 'option2' },
        { text: 'Er hat keine Farbe', id: 'option3' },
      ],
      correctAnswer: 'Er hat keine Farbe',
      emoji: '🎨',
    },
    {
      question: 'Warum sind Algorithmen wichtig?',
      options: [
        { text: 'Um Kuchen zu backen', id: 'option1' },
        { text: 'Um Computerprogramme zu erstellen', id: 'option2' },
        { text: 'Um Rennen zu gewinnen', id: 'option3' },
      ],
      correctAnswer: 'Um Computerprogramme zu erstellen',
      emoji: '💻',
    },
    {
      question: 'Wie viele Schritte kann ein Algorithmus haben?',
      options: [
        { text: 'Nur einen Schritt', id: 'option1' },
        { text: 'Unendlich viele Schritte', id: 'option2' },
        { text: 'Einige Schritte', id: 'option3' },
      ],
      correctAnswer: 'Einige Schritte',
      emoji: '🚀',
    },
    {
      question: 'Können Kinder auch Algorithmen machen?',
      options: [
        { text: 'Nein, nur Erwachsene', id: 'option1' },
        { text: 'Ja, natürlich!', id: 'option2' },
        { text: 'Nur wenn sie groß sind', id: 'option3' },
      ],
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

  const restartQuiz = () => {
    setAnswer('');
    setShowResult(false);
    setQuizIndex(0);
    setQuizCompleted(false);
    setQuizAnswers([]);
    setProgress(0);
  };

  return (
    <div className="algorithmen-container">
      <main className="main-content">
        {!quizCompleted && (
          <div className="hero-section">
            <div className="hero-media">
              <img src={AlgorithmImage} alt="Beispielbild für Algorithmen" className="algorithm-image" />
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FBUoEumkP2w"
                  title="YouTube video player"
                  style={{ border: 0 }}
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
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="hero-text">
              <h1>Willkommen beim Algorithmen-Quiz!</h1>
              <p className="intro-text">
                Teste dein Wissen über Algorithmen mit diesen lustigen Fragen!
              </p>
            </div>
          </div>
        )}
        <div className="quiz-section">
          {!quizCompleted ? (
            <>
              <div className="quiz-question">
                <h2>{quizzes[quizIndex].question}</h2>
                {quizzes[quizIndex].options.map((option) => (
                  <div key={option.id} className="quiz-option">
                    <input
                      type="radio"
                      id={option.id}
                      name="quizOption"
                      value={option.text}
                      onChange={(e) => setAnswer(e.target.value)}
                      checked={answer === option.text}
                    />
                    <label htmlFor={option.id}>{option.text}</label>
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
                  <div key={`result-${index}`} className="quiz-result">
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
              <button className="restart-button" onClick={restartQuiz}>Zurück zum Start</button>
            </div>
          )}
          {showResult && !quizCompleted && (
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
    </div>
  );
};

export default Algorithmen;