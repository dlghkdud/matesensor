import "../App.css";
import profile from "../img/myprofile.png";
import myimg from "../img/my.png";

const My = () => {
  return (
    <div className="my">
      <img src={profile} className=""></img>

      <span className="Myname">
        <span className="myname">Name/age</span>
        <input className="namedesc"></input>
      </span>
      <span className="myphone">Phone</span>
      <input className="phonedesc"></input>

      <span className="myresidence">residence</span>
      <input className="my-residence desc"></input>

      <span className="mymbti">MBTI</span>
      <input className="mbti desc"></input>

      <span className="mymaintime">Main activity time</span>
      <input className="actTime desc"></input>

      <span className="mypets">Pets</span>
      <button className="myO">O</button>
      <button className="myX">X</button>

      <span className="myintroduction">Introduction</span>
      <textarea className="introductiondesc"></textarea>

      <button className="mymodify">수정</button>
      <button className="mysave">저장</button>

      <img src={myimg} className="myimg" />
    </div>
  );
};

export default My;
