import "./Card2.css";

function Card2(props) {
  return (
    <div className="workcard">
        <div><h1>{props.workheading}</h1></div>
        <div><p>{props.workdescription}</p></div>
    </div>
   
  );
}
export default Card2;