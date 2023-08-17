import '../My.css';
import login from '../img/login.png';

const My = () => {
    return(
        <div className='my'>
            <div className='info'>
                <div className='block'>
                    <h2 className="name">Name/age</h2>
                    <input className="name desc"></input>
                </div>
                <div className='block'>
                    <h2 className="phone">Phone</h2>
                    <input className="phone desc"></input>
                </div>
                <div className='block'>
                    <h2 className='my-residence'>residence</h2>
                    <input className='my-residence desc'></input>
                </div>
                <div className='block'>
                    <h2 className="mbti">MBTI</h2>
                    <input className="mbti desc"></input>
                </div>
                <div className='block'>
                    <h2 className="actTime">Main activity time</h2>
                    <input className="actTime desc"></input>
                </div>
                <div className='block'>
                    <h2 className="pets">Pets</h2>
                    <button className="petsdesc">O</button>
                    <button className="petsdesc">X</button>
                </div>
                <div className='block'>
                    <h2 className="introduction">Introduction</h2>
                    <textarea className="introductiondesc"></textarea>
                </div>
                <div className='block'>
                    <button className='modify'>수정</button>
                    <button className='save'>저장</button>
                </div>
            </div>
            <div className='imageblock'>
                <img src={login} className='image' />
            </div>
        </div>
    )
}

export default My;