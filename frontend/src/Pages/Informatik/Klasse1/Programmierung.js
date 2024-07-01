import React, { Component } from 'react';
import './Programmierung.css'; 
import magicWizard from '../../../assets/magic-wizard.png'; 
import robotImage from '../../../assets/robot.png'; 
import webDevelopment from '../../../assets/web-development.png'; 

class Programmierung extends Component {
  state = {
    currentQuestion: 0,
    quizAnswers: {
      question1: '',
      question2: '',
      question3: '',
      question4: ''
    },
    feedback: '',
    quizCompleted: false,
    correctAnswers: 0
  };

  questions = [
    {
      question: 'Was kann man mit Programmierung machen? 🤔',
      answers: ['Spiele erstellen', 'Fernsehen schauen', 'Essen kochen', 'Auto fahren'],
      correct: 'Spiele erstellen'
    },
    {
      question: 'Wie nennt man jemanden, der Programme schreibt? 🖥️',
      answers: ['Programmierer', 'Malerei', 'Schauspieler', 'Musiker'],
      correct: 'Programmierer'
    },
    {
      question: 'Welches ist ein beliebtes Programmierspielzeug? 🧩',
      answers: ['Lego Mindstorms', 'Barbie-Puppen', 'Stofftiere', 'Schreibmaschine'],
      correct: 'Lego Mindstorms'
    },
    {
      question: 'Was kann ein Roboter tun? 🤖',
      answers: ['Tanzen', 'Bücher lesen', 'E-Mails senden', 'Laufen und sprechen'],
      correct: 'Tanzen'
    }
  ];

  handleAnswer = (answer) => {
    const { currentQuestion } = this.state;
    const currentQuiz = this.questions[currentQuestion];
    const isCorrect = currentQuiz.correct === answer;

    this.setState(prevState => {
      const newAnswers = {
        ...prevState.quizAnswers,
        [`question${currentQuestion + 1}`]: answer
      };

      const correctCount = Object.keys(newAnswers).reduce((count, key) => {
        return newAnswers[key] === this.questions[parseInt(key.replace('question', '')) - 1].correct ? count + 1 : count;
      }, 0);

      return {
        quizAnswers: newAnswers,
        correctAnswers: correctCount,
        feedback: isCorrect ? 'Super! Deine Antwort ist richtig! 🎉' : 'Leider falsch. Versuche es noch einmal! ❌',
        quizCompleted: currentQuestion === this.questions.length - 1
      };
    });
  };

  nextQuestion = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1,
      feedback: ''
    }));
  };

  previousQuestion = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion - 1,
      feedback: ''
    }));
  };

  render() {
    const { currentQuestion, quizCompleted, correctAnswers, feedback } = this.state;
    const currentQuiz = this.questions[currentQuestion];

    return (
        <div className="programming-container">
          <header className="header">
            <h1>Was ist Programmierung?</h1>
          </header>
          <main className="main-content">
            <section className="content-section">
              <h2>Einführung in die Programmierung</h2>
              <p>Programmierung ist wie Zaubern mit einem Computer! Du kannst ihm sagen, was er tun soll, und er macht es.</p>
              <p>Mit Programmierung kannst du Spiele machen, Roboter steuern und Webseiten erstellen.</p>
              <div className="example-images">
                <img src={magicWizard} alt="Zauberer mit Computer" className="example-image" />
                <img src={robotImage} alt="Roboter" className="example-image" />
                <img src={webDevelopment} alt="Webentwicklung" className="example-image" />
              </div>
              <div className="youtube-videos">
                <h3>Lehrvideos</h3>
                <div className="video-container">
                  <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/g56vqSs4bS8"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{ border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/nTqCbCBmt-E"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{ border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="quiz-section">
                <h3>Quiz: Teste dein Wissen über Programmierung!</h3>
                <div className="quiz-question">
                  <p>{currentQuiz.question}</p>
                  <ul className="answers">
                    {currentQuiz.answers.map(answer => (
                      <li key={answer}>
                        <button onClick={() => this.handleAnswer(answer)}>{answer}</button>
                      </li>
                    ))}
                  </ul>
                </div>
                {feedback && <div className="feedback">{feedback}</div>}
                <div className="navigation-buttons">
                  {currentQuestion > 0 && <button onClick={this.previousQuestion}>Zurück</button>}
                  {currentQuestion < this.questions.length - 1 && <button onClick={this.nextQuestion}>Weiter</button>}
                </div>
                <div className="progress-bar">
                  Frage {currentQuestion + 1} von {this.questions.length}
                </div>
                {quizCompleted && (
                  <div className="quiz-result">
                    {correctAnswers === 4 ? (
                      <div className="fireworks">
                        🎉🎆🎇 Glückwunsch! Du hast alle Fragen richtig beantwortet! 🎇🎆🎉
                      </div>
                    ) : (
                      <div className="try-again">
                        ❌ Du hast {4 - correctAnswers} Fragen falsch beantwortet. Versuche es noch einmal! ❌
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          </main>
        </div>
    );
  }
}

export default Programmierung;