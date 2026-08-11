import { Service, Testimonial, PortfolioItem } from './types';

export const PILLARS = [
  {
    id: 'professionalism',
    title: 'Profissionalismo',
    titleEn: 'Professionalism',
    description: 'Cada projeto é executado por uma equipa experiente, garantindo solidez e excelência em cada detalhe.',
    descriptionEn: 'Each project is executed by an experienced team, ensuring solidity and excellence in every detail.',
    iconName: 'UserCheck',
  },
  {
    id: 'quality',
    title: 'Qualidade Garantida',
    titleEn: 'Guaranteed Quality',
    description: 'Utilizamos materiais de confiança e seguimos padrões rigorosos para garantir resultados duradouros e seguros.',
    descriptionEn: 'We use trusted materials and follow strict standards to ensure durable and safe results.',
    iconName: 'Gem',
  },
  {
    id: 'efficiency',
    title: 'Eficiência e Rapidez',
    titleEn: 'Efficiency and Speed',
    description: 'Respondemos com agilidade e cumprimos prazos, mantendo sempre a qualidade e o foco na satisfação do cliente.',
    descriptionEn: 'We respond with agility and meet deadlines, always maintaining quality and focusing on customer satisfaction.',
    iconName: 'Zap',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'construcao-civil',
    title: 'Construção Civil',
    titleEn: 'Civil Construction',
    description: 'Realizamos obras com qualidade e segurança, garantindo soluções sólidas e duradouras para cada projeto, do início à entrega final.',
    descriptionEn: 'We perform works with quality and safety, guaranteeing solid and durable solutions for each project, from inception to final delivery.',
    iconName: 'HardHat',
    detailedDescription: 'Desde fundações a acabamentos residenciais e comerciais, a nossa equipa lida com todas as etapas do processo de construção. Oferecemos planeamento completo, gestão de obra e cumprimento rigoroso das normas técnicas angolanas.',
    detailedDescriptionEn: 'From foundations to residential and commercial finishes, our team handles all stages of the construction process. We offer complete planning, site management, and strict compliance with Angolan technical standards.',
    estimatedCostRange: '500,000 - 15,000,000 AOA'
  },
  {
    id: 'fornecimento-materiais',
    title: 'Fornecimento de Materiais',
    titleEn: 'Material Supply',
    description: 'Dispomos de uma ampla linha de materiais de construção e ferragens, com marcas de confiança e atendimento especializado.',
    descriptionEn: 'We have a wide range of construction materials and hardware, with trusted brands and specialized service.',
    iconName: 'Truck',
    detailedDescription: 'Fornecemos cimento, varões de aço, tintas, ferragens, gesso, areia, brita e materiais elétricos de primeira qualidade diretamente no seu estaleiro ou habitação, com entrega rápida e condições de pagamento flexíveis.',
    detailedDescriptionEn: 'We supply cement, steel rebar, paint, hardware, plaster, sand, gravel, and top-quality electrical materials directly to your site or home, with fast delivery and flexible payment terms.',
    estimatedCostRange: 'Varia consoante pedido'
  },
  {
    id: 'projetos-urbanizacoes',
    title: 'Projetos em Urbanizações',
    titleEn: 'Urbanization Projects',
    description: 'Desenvolvemos soluções técnicas e sustentáveis que valorizam os empreendimentos e promovem o bem-estar das comunidades.',
    descriptionEn: 'We develop technical and sustainable solutions that value real estate developments and promote community well-being.',
    iconName: 'Building2',
    detailedDescription: 'Planeamento urbano, infraestrutura de vias públicas, saneamento básico, eletrificação e iluminação para novos loteamentos residenciais e condomínios fechados em Luanda e arredores.',
    detailedDescriptionEn: 'Urban planning, public road infrastructure, basic sanitation, electrification, and lighting for new residential subdivisions and gated communities in Luanda and surrounding areas.',
    estimatedCostRange: '2,500,000 - 30,000,000 AOA'
  },
  {
    id: 'comercio-tintas',
    title: 'Comércio de Tintas',
    titleEn: 'Paint Trade',
    description: 'Oferecemos tintas de alta performance para interiores e exteriores, com cores vibrantes e acabamento profissional.',
    descriptionEn: 'We offer high-performance paints for interiors and exteriors, with vibrant colors and professional finish.',
    iconName: 'Paintbrush',
    detailedDescription: 'Distribuidores de marcas líderes com consultoria em cores e misturas personalizadas. Tintas acrílicas, plásticas, esmaltes e primários anti-fungos ideais para o clima de Angola.',
    detailedDescriptionEn: 'Distributors of leading brands with color consulting and custom mixing. Acrylic, plastic, enamel, and anti-fungal primers ideal for the Angolan climate.',
    estimatedCostRange: '12,000 - 150,000 AOA por lata'
  },
  {
    id: 'manutencao-condominios',
    title: 'Manutenção em Condomínios',
    titleEn: 'Condominium Maintenance',
    description: 'Cuidamos da infraestrutura e dos sistemas comuns, assegurando funcionalidade, conforto e segurança em cada espaço.',
    descriptionEn: 'We take care of common infrastructure and systems, ensuring functionality, comfort, and safety in every space.',
    iconName: 'Wrench',
    detailedDescription: 'Serviços preventivos e corretivos em geradores, bombas de água, elevadores, sistemas de combate a incêndio, pintura de fachadas, limpeza de áreas comuns e segurança técnica integrada.',
    detailedDescriptionEn: 'Preventative and corrective services on generators, water pumps, elevators, fire suppression systems, facade painting, common area cleaning, and integrated technical safety.',
    estimatedCostRange: '150,000 - 1,200,000 AOA / mensal'
  },
  {
    id: 'hidraulica-mecanica',
    title: 'Soluções de Hidráulica e Mecânica',
    titleEn: 'Hydraulics & Mechanics',
    description: 'Oferecemos soluções completas em hidráulica e mecânica, garantindo sistemas eficientes, seguros e duradouros para residências, condomínios e empreendimentos comerciais.',
    descriptionEn: 'We offer complete solutions in hydraulics and mechanics, ensuring efficient, safe, and durable systems for residences, condominiums, and commercial ventures.',
    iconName: 'Droplet',
    detailedDescription: 'Instalação de tubagens, reparações de roturas de água, manutenção de reservatórios de água (tanques), fossas sépticas, sistemas de drenagem e soluções eletromecânicas para bombagem de águas residuais.',
    detailedDescriptionEn: 'Installation of pipes, repair of water leaks, maintenance of water reservoirs (tanks), septic tanks, drainage systems, and electromechanical solutions for pumping wastewater.',
    estimatedCostRange: '45,000 - 850,000 AOA'
  },
  {
    id: 'reparacao-eletrodomesticos',
    title: 'Reparação e Assistência de Eletrodomésticos',
    titleEn: 'Appliance Repair',
    description: 'Prestamos serviços de reparação e assistência técnica de eletrodomésticos com rapidez, confiança e qualidade, devolvendo o bom funcionamento dos seus equipamentos.',
    descriptionEn: 'We provide appliance repair and technical support services with speed, reliability, and quality, restoring proper operation of your devices.',
    iconName: 'Cpu',
    detailedDescription: 'Assistência técnica especializada a aparelhos de ar condicionado (limpeza, recarga de gás, reparação), frigoríficos, máquinas de lavar roupa, fornos industriais e equipamentos de cozinhas comerciais.',
    detailedDescriptionEn: 'Specialized technical assistance for air conditioning units (cleaning, gas recharge, repair), refrigerators, washing machines, industrial ovens, and commercial kitchen equipment.',
    estimatedCostRange: '15,000 - 120,000 AOA'
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Gestão Técnica Integrada',
    titleEn: 'Integrated Technical Management',
    category: 'Manutenção',
    categoryEn: 'Maintenance',
    imageUrl: '/assets/images/portfolio_teamwork_1786349171155.jpg',
    description: 'Planeamento e supervisão de infraestruturas comuns em condomínio de luxo em Luanda.',
    descriptionEn: 'Planning and supervision of common infrastructures in a luxury condominium in Luanda.',
  },
  {
    id: 'p2',
    title: 'Construção e Alvenaria de Precisão',
    titleEn: 'Precision Construction & Masonry',
    category: 'Construção',
    categoryEn: 'Construction',
    imageUrl: '/assets/images/portfolio_worker_1786349120052.jpg',
    description: 'Equipa técnica especializada a realizar ampliação estrutural segura com acabamentos premium.',
    descriptionEn: 'Specialized technical team carrying out safe structural expansion with premium finishes.',
  },
  {
    id: 'p3',
    title: 'Instalação Hidráulica Complexa',
    titleEn: 'Complex Hydraulic Installation',
    category: 'Hidráulica',
    categoryEn: 'Hydraulics',
    imageUrl: '/assets/images/portfolio_technician_1786349153777.jpg',
    description: 'Montagem de sistema moderno de pressurização e distribuição de água potável.',
    descriptionEn: 'Installation of a modern pressurization and drinking water distribution system.',
  },
  {
    id: 'p4',
    title: 'Manutenção Fachadas de Edifício',
    titleEn: 'Building Facade Maintenance',
    category: 'Urbanizações',
    categoryEn: 'Urbanizations',
    imageUrl: '/assets/images/portfolio_building_1786349135979.jpg',
    description: 'Aplicação de tintas de alta resistência a intempéries em fachada de condomínio residencial.',
    descriptionEn: 'Application of high-weather-resistance paints on the facade of a residential condominium.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: 'Serviço excelente! A equipa foi muito profissional e cumpriu todos os prazos. Fiquei bastante satisfeito com o resultado final.',
    textEn: 'Excellent service! The team was highly professional and met all deadlines. I was very satisfied with the final result.',
    author: 'Carlos Domingos',
    role: 'Gestor de Condomínio',
    roleEn: 'Condominium Manager',
    location: 'Luanda',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150&q=80',
    rating: 5,
  },
  {
    id: 't2',
    text: 'Empresa séria e organizada. A qualidade dos materiais e o cuidado com cada detalhe fizeram toda a diferença na nossa reforma.',
    textEn: 'Serious and organized company. The quality of materials and attention to every detail made a complete difference in our renovation.',
    author: 'Joaquim Kiala',
    role: 'Proprietário Residencial',
    roleEn: 'Home Owner',
    location: 'Cacuaco',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150&q=80',
    rating: 5,
  },
  {
    id: 't3',
    text: 'Gostei muito do acompanhamento técnico. Deram-me todo o suporte necessário e mostraram grande competência e flexibilidade.',
    textEn: 'I really appreciated the technical follow-up. They gave me all the support needed and showed great competence and flexibility.',
    author: 'Manuel Pires',
    role: 'Diretor de Operações',
    roleEn: 'Operations Director',
    location: 'Viana',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150&q=80',
    rating: 5,
  },
];

export const BRANDS = [
  {
    name: 'BCA (Banco Comercial Angolano)',
    logoType: 'BCA',
    subtitle: 'Banco Comercial Angolano',
    colorClass: 'bg-[#0E5135]', // BCA deep green
    textClass: 'text-white'
  },
  {
    name: 'BFA (Banco de Fomento Angola)',
    logoType: 'BFA',
    subtitle: 'Banco de Fomento Angola',
    colorClass: 'bg-white',
    textClass: 'text-[#E30613]' // BFA Red/orange brand
  },
  {
    name: 'Grupo Boavida',
    logoType: 'BOAVIDA',
    subtitle: 'Grupo Boavida',
    colorClass: 'bg-[#1D2B53]', // Boavida deep blue/indigo
    textClass: 'text-white'
  }
];
