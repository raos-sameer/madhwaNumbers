import React, { useEffect, useState } from "react";
import {
  Icon,
  Header,
  Container,
  Button,
} from "semantic-ui-react";
import {findRandomNumber} from '../utils/helper'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const WSTH = () => {

const [startGame, setStartGame] = useState(false);
const [allQuestions, setAllQuestions] = useState([]);
const [questionToShow, setQuestionToShow] = useState("")
const [answer, setAnswer] = useState("")
const [randomNumber, setRandomNumber] = useState(0);
const [timeOut, setTimeOut] = useState(false)
const [key, setKey] = useState(0);
    useEffect(() => {
        const allQuestions = ["Yontah Pravishya MamaVaacha...; Prahlad to Vishnu","Yato Dharmah tato jaya; Gaandhari to Duryodhana",
    "Ashwathama Hatah.. Naro va Kunjaro va; Yudhishtra to Dronacharya", "Shravanam Kirtam Vishnum...; Prahlaad to Hirankyakshipu",
    "Bheeemacha Balabhadracha Madra-rajacha Veeryavaan...; Duryodhan to All", "Jaanami Dharma na cha may pravrutti...; Duryodhan to Gandhari",
    "Kim Pashu Purva dehe; Akshobhay teertha to Dhondopant Deshpande (Jayateertha)", "Viraat nagam ramyam, gacha maano;Yudhisthira praying to Duraga devi"]
    setAllQuestions(allQuestions)
    },[])
    const handleClick = () => {
        const randomNo = findRandomNumber(allQuestions.length)
        setRandomNumber(randomNo)
        setQuestionToShow(allQuestions[randomNo].split(";")[0])
        setAnswer(allQuestions[randomNo].split(";")[1])
        setStartGame(true)
        setTimeOut(false)
        setKey(prevKey => prevKey + 1)
      };
    
      return (
        <React.Fragment>
          <Header as="h2" color="teal">
            <Icon name="game" />
            <Header.Content>Who Said To Home</Header.Content>
          </Header>
          <Container>
            {!startGame && <Button primary onClick={handleClick}>Start Game</Button>}
            
            {startGame && <React.Fragment>
              <CountdownCircleTimer
              onComplete={() => setTimeOut(true)}
              key={key}
        isPlaying = {!timeOut}
        duration={10}
        size={80}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
                          <span style={{color:"red", fontSize:"large"}}>Question: {questionToShow}</span>
                          {timeOut && <React.Fragment>
                             <div style={{marginTop:"3%",color:"green", fontSize:"large"}}>Answer: { answer}</div>
                            <div>
                            <Button primary style={{marginTop: "3%"}} onClick={handleClick}>Next Question</Button></div></React.Fragment>}
            </React.Fragment>}
          </Container>
        </React.Fragment>
      );
}

export default WSTH;