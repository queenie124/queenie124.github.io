
import ChoiceList from './ChoiceList';
import s1 from './component/ss/s1.png';
import s2 from './component/ss/s2.png';
import s3 from './component/ss/s3.png';
import s4 from './component/ss/s4.png';
const Choice = (props) => {
    const scores=props.scores;
    const choices=[
        {title:"虽然凌晨一点了，但...你愿意和我去看日出吗？--来自布偶猫的邀请", choice1:"唔，我还想睡会",choice2:"马上来！", key:1,ss:s1},
        {title:"一天过去了还一只老鼠没捉到，难怪没人要。--路过的贵宾犬瞥了你一眼说到", choice1:"嘿嘿，，嘿嘿（默默走开）",choice2:"额，老鼠捉不住但能挠你", key:2,ss:s2},
        {title:"（前面有两只猫猫在打架）你准备:", choice1:"快溜走先，待会儿通知缅因猫老大来劝架",choice2:"喂！你们先别打了！", key:3,ss:s3},
        {title:"路过一位面目慈善的女孩，你立刻:", choice1:"贴贴～收养我吧～",choice2:"躲起来，人类都是坏蛋ToT", key:4,ss:s4}]
    return ( 
        <div className="Choice">
            <ChoiceList choices={choices} scores={scores}></ChoiceList>
        </div>
     );
}
 
export default Choice;