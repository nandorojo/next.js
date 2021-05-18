import Image from 'next/image'
import ViewSource from '../components/view-source'

const itemWidth = '20vh'

const Fill = () => (
  <div>
    <ViewSource pathname="pages/layout-fill.js" />
    <h1>Here's the bug:</h1> 
    
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt="Mountains"
        src="https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_768/v1/beatgig-prod/xnenf58owsxlkmmek8zr"
        layout="fill"
        unoptimized
        objectFit="cover"
        sizes={`(max-width: 100vw) ${itemWidth}, ${itemWidth}`}
      />
    </div> 
  </div>
)

export default Fill
