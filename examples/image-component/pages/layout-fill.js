import Image from 'next/image'
import ViewSource from '../components/view-source'

const itemWidth = '20vh'

const Fill = () => (
  <div>
    <ViewSource pathname="pages/layout-fill.js" />
    <h1>Image Component With Layout Fill</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt="Mountains"
        src="/mountains.jpg"
        layout="fill"
        objectFit="cover"
        sizes="(max-width: 100vw) ${itemWidth}, ${itemWidth}"
      />
    </div> 
  </div>
)

export default Fill
