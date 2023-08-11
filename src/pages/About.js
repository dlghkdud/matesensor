import footerlogo from '../img/footerlogo.png';
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';
import insta from '../img/insta.png';
import blog from '../img/blog.png';
import git from '../img/git.png';
import boundary from '../img/boundary.png';

const About = () => {
    return (
        <div className="about">
            <div className="Kor">


                <span className="mate">MATE SENSOR</span><span className="Kormate">는 당신이 룸메이트를 찾는데 도움을 줍니다!</span><br/>
                <span className="Korcon">경제적 부담, 혼자 사는 불안함 때문에 룸메이트를 구했다가 잘 맞지 않아서<br/>
                룸메이트와 싸웠던 경험 있으시죠? mate sensor는 룸메이트와의 싸움을 최소화해줍니다.<br/>
                당신의 성향과 취향, 생활 패턴 등이 비슷한 사람을 찾아 룸메이트가 되어보세요!<br/>
                
                모르는 사람과 같이 살라고요? 위험한 사람이면 어떡하죠?<br/>
                걱정마세요!<br/>
                mate sensor는 안전합니다!<br/>
                본인인증과 인터넷 실명제, 여러번의 동네 인증, 오직 동성끼리의 매칭, 신청 수락 후에만<br/>
                상세 주소가 표시되는 기능으로 안심하고 사용할 수 있습니다!<br/>
                
                글을 올리거나 올려진 글을 보고 룸메이트를 신청하세요!<br/>
                수락 후에 채팅을 통해 세부사항들을 조정해본 뒤, 룸메이트가 되어보세요!</span>
                
            </div>
            
            <div className="Eng">
                <span className="mate">MATE SENSOR&nbsp;</span><span className="Engmate">helps you find a roommate!</span><br/>
                <span className="Engcon">Have you ever fought with a roommate because of anxiety about financial burden <br/>
                or living alone? mate sensor minimizes fights with roommates.<br/>
                Find someone who has similar tendencies, tastes, lifestyle, etc. and be your roommate!<br/>
        
                You want me to live with someone I don't know? What if it's a dangerous person?<br/>
                Don’t worry!<br/>
                mate sensor is safe!<br/>
                You can use it with confidence with identity authentication, Internet real-name system,<br/>
                multiple neighborhood authentication, matching only between the same sex,<br/>
                and displaying detailed addresses only after accepting the application!<br/>

                Apply for a roommate by posting or looking at the post!After accepting, <br/>
                try adjusting the details via chat, then be your roommate!<br/></span>
            </div>
            
            <div className='aboutfooter'>
                <span className='footerlogo'><img src = {footerlogo}/></span>
                <span className='technology'>Technology</span>
                <span className='location'>Location</span>
                <span className='contact'>Contact</span>

                <div className='footercontent'>
                    Mate sensor only finds<br/>
                    same-sex friends to live<br/>
                    with you.<br/>
                </div>
            
                <div className='technologycontent'>
                    React<br/>
                    CSS<br/>
                    JavaScript<br/>
                    Firebase
                </div>

                <div className='locationcontent'>
                    33-4, Wonhyo-ro 97-gil,<br/>
                    Yongsan-gu, Seoul,<br/>
                    Republic of Korea
                </div>

                <div className='contactcontent'>
                    22sunrin086@sunrint.hs.kr<br/>
                    22sunrin081@sunrint.hs.kr<br/>
                    22sunrin15@sunrint.hs.kr<br/>
                    010&nbsp;5844&nbsp;2040<br/>
                    010&nbsp;4559&nbsp;2540<br/>
                    010&nbsp;2687&nbsp;6576<br/>
                </div> 

                <div className='site'>
                    <img className='twitter' src = {twitter}/>
                    <img className='facebook' src = {facebook}/>
                    <img className='insta' src = {insta}/>
                    <img className='blog' src = {blog}/>
                    <img className='git' src = {git}/>
                </div> 

                <div className='boundary' >
                    <img src = {boundary}/>
                </div>

                <div className='lastfooter'>
                    © 2023 mate sensor
                </div>
            </div>
    </div>
    )
}

export default About;