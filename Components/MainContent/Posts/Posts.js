import elipse from './Ellipse.png'
import myRect from './Rectangle.png'
import {BiMinusCircle,BiBookmarkPlus,BiHeart} from 'react-icons/bi'
import './Posts.css'
const Posts = (Props) => {


    return (
        <div className='post'>
            <section className='post-pp'>
                 <img src={elipse} alt="Ellipse"/>
            </section>


            <section className='post-info'>
                <h3>diana malewciz</h3>
                <span>2/14/2023</span>
                <h2>2022 UI design trends guide</h2>
                <p>Minimalism, Claymorphism, Brutalism and a look into the future of NFT, VR and Metaverse — 2021 was an exciting year for designers — the introduction of Metaverse caused quite a disruption in the industry......</p>
                <div className='tags'>
                    <span>Design</span>
                    <span>6 Min Read</span>
                    <span>Based on Your Reading History</span>
                    <BiBookmarkPlus size={24} className='icon'/>
                    <BiMinusCircle size={24}/>
                </div>
            </section>

            <section className='post-data'>
            <button style={{borderColor: Props.btnColor,color:Props.btnColor}}>192 <BiHeart/></button>
            <img src={myRect} alt="Rectangle"/>
            </section>

        </div>
    )

}

export default Posts