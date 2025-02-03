import img1 from './assets/icons (7).png'
import img2 from './assets/icons (6).png'
import img3 from './assets/icons (5).png'   
import img4 from './assets/icons (4).png'

const Core = () => {
  return (
    <div className="core">
       <h1>Core Values</h1>
       <p>We strive for the highest standards in every project, <br />
       ensuring quality and impact.</p>
         <div className="core-flex">
            <div className="flex">
                <img src={img1} alt="" />
                <h2>Integrity</h2>
                <p>We always do what is right and 
                keep our words.</p>
            </div>
            <div className="flex">
                <img src={img2} alt="" />
                <h2>Compasion</h2>
                <p>we have keen interest in our
                customers’s need and want.</p>
            </div>
            <div className="flex">
                <img src={img3} alt="" />
                <h2>Excelence</h2>
                <p>We believe that anything worth
                doing, is worth doing well.</p>
            </div>
            <div className="flex">
                <img src={img4} alt="" />
                <h2>Deligience</h2>
                <p>Constant and ernest effort
                    to accomplish task for our
                    client with precision</p>
            </div>
         </div>
    </div>
  )
}

export default Core
