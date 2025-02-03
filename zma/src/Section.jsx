import img from './assets/img (1).png';
const Section = () => {
  return (
    <div className="vision">
      <div className="vision-text">
        <h2>Our vison</h2>
        <p>At Zen AMA Global Springs, we envision a world where local 
          communities are empowered to drive their own development, 
          leveraging global resources and expertise to create lasting 
          impact. Join us in unlocking the potential of individuals, 
          businesses, and communities worldwide</p>
      </div>
      <div className="vision-image">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Section
