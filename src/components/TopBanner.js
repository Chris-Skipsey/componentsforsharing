import './TopBanner.css';

function TopBanner(props) {
  return (
    
    <div className="top1">
        <h1 className="h1">{props.aboutthispage}</h1>
        <h3 className="h1">{props.chatgpt}</h3>
        <h2 className="p1">{props.smalldescription1}</h2>
        <h2 className="p2">{props.smalldescription2}</h2>
        <h2 className="p3">{props.smalldescription3}</h2>
        <h2 className="p4">{props.smalldescription4}</h2>
        <h2 className="p5">{props.smalldescription5}</h2>
        <h2 className="p6">{props.smalldescription6}</h2>
  </div>  

   
  );
}
export default TopBanner;
