import './ResultList.css'
const ResultList = (props) => {
    const resultPics=props.resultPics;
    const scores=props.scores;
    var resultPic=resultPics[scores];
    console.log(scores)
    return ( 
        <div className="result-list">
            <img src={resultPic.pic} alt="error"></img>
        </div>
     );
}
 
export default ResultList;