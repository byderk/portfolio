import cartdenu from '../assets/denu/cart.png'
import cpaneldenu from '../assets/denu/cpanel.png'
import homedenu from '../assets/denu/home.png'
import mockupdenu from '../assets/denu/mockup.png'
import qrdenu from '../assets/denu/qr.png'
import shopdenu from '../assets/denu/shop.png'
import dashboardtrai from '../assets/tr-ai/dashboard.png'
import hometrai from '../assets/tr-ai/home.png'
import mockuptrai from '../assets/tr-ai/mockup.png'
import optiontrai from '../assets/tr-ai/option.png'
import voicetrai from '../assets/tr-ai/voice.png'
import adobebatenya from '../assets/bantenya/adobe.png'
import homebatenya from '../assets/bantenya/home.png'
import mapbatenya from '../assets/bantenya/map.png'
import mockupbatenya from '../assets/bantenya/mockup.png'
import homemeiji from '../assets/meiji/home.png'
import mockupmeiji from '../assets/meiji/mockup.png'
import resumemeiji from '../assets/meiji/resume.png'
import staffmeiji from '../assets/meiji/staff.png'
import homecloudy from '../assets/cloudy/home.png'
import loadercloudy from '../assets/cloudy/loader.png'
import mockupcloudy from '../assets/cloudy/mockup.png'

const webProj = [
    { 
      id: 1, 
      name: 'Denu',
      url: 'https://denu.v3.veryapp.info/',
      description: 'A digital menu, also known as an electronic menu or e-menu, serves the same purpose as traditional paper menu but presented in digital format.',
      images: [
        { id: 1, src: cartdenu},
        { id: 2, src: mockupdenu},
        { id: 3, src: cpaneldenu},
        { id: 4, src: qrdenu},
        { id: 5, src: shopdenu},
        { id: 6, src: homedenu},
      ],
      tools: [
        { id: 1, name: 'React'},
        { id: 2, name: 'Redux'},
        { id: 3, name: 'Laravel'},
        { id: 4, name: 'GraphQl'},
      ],
    },
    { 
      id: 2, 
      name: 'TR-AI',
      description: '',
      images: [
        { id: 1, src: mockuptrai},
        { id: 2, src: hometrai},
        { id: 3, src: dashboardtrai},
        { id: 4, src: voicetrai},
        { id: 5, src: optiontrai},
      ],
      tools: [
        { id: 1, name: 'React'},
        { id: 2, name: 'Inertia'},
        { id: 3, name: 'Laravel'},
        { id: 4, name: 'Breeze'},
        { id: 5, name: 'Tailwind'},
      ],
    },
    { 
      id: 3, 
      name: 'MEIJI',
      url: 'https://meiji-pharmaceutical-university.veryapp.info/',
      description: 'Serves as a enrollment system and centralized hub for students and staff to stay informed.',
      images: [
        { id: 1, src: resumemeiji},
        { id: 2, src: mockupmeiji},
        { id: 3, src: homemeiji},
        { id: 4, src: resumemeiji},
        { id: 5, src: staffmeiji},
      ],
      tools: [
        { id: 1, name: 'React'},
        { id: 2, name: 'Inertia'},
        { id: 3, name: 'Laravel'},
        { id: 4, name: 'Breeze'},
        { id: 5, name: 'Tailwind'},
      ],
    },
    { 
      id: 4, 
      name: 'BANTENYA',
      url: '',
      description: 'Landing page for Bantenya ',
      images: [
        { id: 1, src: mockupbatenya},
        { id: 2, src: adobebatenya},
        { id: 3, src: homebatenya},
        { id: 4, src: mapbatenya},
      ],
      tools: [
        { id: 1, name: 'Html'},
        { id: 2, name: 'Css'},
        { id: 3, name: 'Javascript'},
      ],
    },
    { 
      id: 5, 
      name: 'CLOUDY',
      description: 'Weather application that provides current and forecasted weather from Api',
      images: [
        { id: 1, src: mockupcloudy},
        { id: 2, src: homecloudy},
        { id: 3, src: loadercloudy},
      ],
      tools: [
        { id: 1, name: 'React'},
        { id: 2, name: 'Api'},
        { id: 3, name: 'Tailwind'}, 
      ],
    },
  ]
  
  export default webProj;