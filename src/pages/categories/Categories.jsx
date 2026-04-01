import "./categories.css"
const Categories = ({data}) => {
  return <div className='containerAll'>
    <div className="upperdata">
  <h3 className='title'>Categories</h3>
    <button className='routebtn'>Add Category</button>
</div>
    {
      data.map((item,index)=>{
        return(
          <div className="wrap">

          <div key={index} className="container">
          
          
            <img className='img' src={item.img} alt="img" />
            <h3>{item.text}</h3>
            <p>{item.undertext}</p> 
            
          
          </div>
            </div>
        )
      },
    )
    },
  </div>;
};

export default Categories;
