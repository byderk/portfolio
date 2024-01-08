import illusus from '../assets/illus/us.webp'
import illuskon from '../assets/illus/kon.png'
import illusreign from '../assets/illus/reign.png'
import illussunkissed from '../assets/illus/sunkissed.png'
import illusvictor from '../assets/illus/victor.png'
import illusvinland from '../assets/illus/vinland.png'
import pshoplebron from '../assets/pshop/lebron.webp'
import pshopcrocs from '../assets/pshop/crocs.png'
import pshopgotg from '../assets/pshop/gotg.png'
import pshopjokic from '../assets/pshop/jokic.png'
import pshoplamelo from '../assets/pshop/lamelo.png'
import pshopwish from '../assets/pshop/wish.png'
import logosjg from '../assets/logo/sjg.webp'
import logoallbasketball from '../assets/logo/allbasketball.png'
import logomylogo from '../assets/logo/mylogo.png'
import logothy from '../assets/logo/thy.png'

const graphicProj = [
    { 
      id: 1, 
      name: 'Photoshop',
      images: [
        { id: 1, src: pshoplebron},
        { id: 2, src: pshopcrocs},
        { id: 3, src: pshopgotg},
        { id: 4, src: pshopjokic},
        { id: 5, src: pshopwish},
        { id: 6, src: pshoplamelo},
      ],
      tools: [
        { id: 1, name: 'Adobe Photoshop'}
      ],
    },
    { 
      id: 2, 
      name: 'Illustration',
      images: [
        { id: 1, src: illusus},
        { id: 2, src: illuskon},
        { id: 3, src: illusreign},
        { id: 4, src: illussunkissed},
        { id: 5, src: illusvictor},
        { id: 6, src: illusvinland},
      ],
      tools: [
        { id: 1, name: 'Adobe Illustrator'},
      ],
    },
    { 
      id: 3, 
      name: 'Logo',
      images: [
        { id: 1, src: logosjg},
        { id: 2, src: logoallbasketball},
        { id: 2, src: logomylogo},
        { id: 2, src: logothy},
      ],
      tools: [
        { id: 1, name: 'Adobe Illustrator'},
        { id: 2, name: 'Canva'},
      ],
    },
  ]

  export default graphicProj;