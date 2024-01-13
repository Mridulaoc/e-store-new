import Product from './Product'



const GridView = ({products,page}) => {

 

  return (     
    <>
     <div className='grid grid-cols-2 md:grid-cols-3 gap-10  p-5'>
      {
        products.slice(page*12-12,page*12).map((product) =>{
         return <Product key={product.id} {...product}/>
        })
      }
     </div>
    
    </>
  )
   
  }

export default GridView
