import {useState} from 'react';
import {Link} from 'react-router-dom';
import './ChoiceList.css'
const ChoiceList = (props) => {

    const choices=props.choices;
    var [scores, setScores]= useState(props.scores)
    var [choiceNum, setChoiceNum]=useState(0);
    var choiceElement=choices[choiceNum];
    const handleClick1=()=>{
            setChoiceNum(choiceNum+1);
            setScores=(scores);
    }
    const handleClick2=()=>{
            if(choiceNum===0){
                setScores(scores+4);
            }
            else{
                setScores(scores+1);
            }
            setChoiceNum(choiceNum+1); 
             
    }
    console.log(choiceElement);
    if(choiceNum<4){
        return ( 
            <div className="choice-list" >
                <div className='question'> 
                    <img src={choiceElement.ss} alt='error'></img>
                    <h2>{choiceElement.title}</h2>
                </div>
                <div className='buttons'>
                    <button onClick={handleClick1}>{choiceElement.choice1}</button>
                    <button onClick={handleClick2}>{choiceElement.choice2}</button>
                </div>
                
            </div>

         );

    }
    else{
        return(
            <div className='choice-end'>
            <Link to="/result" state={{scores:scores}}>哦哦你是...  （点击查看结果） </Link>
            å</div>
        );
       
    }
    
}
 
export default ChoiceList;