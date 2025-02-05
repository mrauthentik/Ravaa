import {motion} from 'framer-motion'
import img1 from './assets/img (2).png'
import img2 from './assets/img (3).png'
const Team = ()=>{
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }
  return (
    <div className="team">
       <h1>Our Team</h1>
       <p>We are a team of dedicated professionals with diverse backgrounds <br />
       and expertise, our team is the driving force behind our success
       </p>
       <div className="team-img">
         {
            [
                {img: img1, name:'Maria Asuelimen', title:'Founder & CEO'},
                {img: img2, name:'Nomsey Okosa', title:'Executive Director Monitoring Evaluation and Learning'},
                {img: img2, name:'Richard Eze', title:'Executive Director Admin and Operations'}
            ].map((item,index) =>(
                <motion.div
                key={index}
                variants={cardVariants}
                initial='hidden'
                animate='visible'
                transition={{delay: index * 0.2}}
                className='team-slide'
                > 
                    <img  src={item.img} />
                    <h2> {item.name}</h2>
                    <p> {item.title}</p>
                </motion.div>
            )
        )
         }

       </div>
    </div>
  )   
}

export default Team