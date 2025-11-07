import { Artifact } from './types';

export const mockArtifacts: Artifact[] = [
  {
    id: '1',
    name: 'Rosetta Stone',
    image: 'https://images.unsplash.com/photo-1588420914913-51f1d4f8f5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NldHRhJTIwc3RvbmUlMjBoaXN0b3J5fGVufDF8fHx8MTc2MjUwMzk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Documents',
    historicalContext: 'A granodiorite stele inscribed with three versions of a decree issued in Memphis, Egypt in 196 BC. It was crucial in deciphering Egyptian hieroglyphs.',
    createdAt: '196 BC',
    discoveredAt: '1799',
    discoveredBy: 'Pierre-François Bouchard',
    presentLocation: 'British Museum, London',
    addedBy: {
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@example.com'
    },
    likeCount: 1247,
    likedBy: [],
    shortDescription: 'Ancient Egyptian stele key to deciphering hieroglyphs'
  },
  {
    id: '2',
    name: 'Antikythera Mechanism',
    image: 'https://images.unsplash.com/photo-1731246164682-867af4a1a2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdG9vbHMlMjBicm9uemV8ZW58MXx8fHwxNzYyNTAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Tools',
    historicalContext: 'An ancient Greek hand-powered orrery, described as the first known analogue computer. It was used to predict astronomical positions and eclipses.',
    createdAt: '100 BC',
    discoveredAt: '1901',
    discoveredBy: 'Valerios Stais',
    presentLocation: 'National Archaeological Museum, Athens',
    addedBy: {
      name: 'Prof. Michael Chen',
      email: 'michael.chen@example.com'
    },
    likeCount: 982,
    likedBy: [],
    shortDescription: 'Ancient Greek astronomical calculator and first computer'
  },
  {
    id: '3',
    name: 'Dead Sea Scrolls',
    image: 'https://images.unsplash.com/photo-1676115388797-5f448ad78e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwc2Nyb2xsJTIwbWFudXNjcmlwdHxlbnwxfHx8fDE3NjI1MDM5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Writings',
    historicalContext: 'Ancient Jewish religious manuscripts found in the Qumran Caves, including the oldest known surviving manuscripts of works later included in the Hebrew Bible canon.',
    createdAt: '300 BC - 100 AD',
    discoveredAt: '1947',
    discoveredBy: 'Bedouin shepherds',
    presentLocation: 'Israel Museum, Jerusalem',
    addedBy: {
      name: 'Dr. Rebecca Martinez',
      email: 'rebecca.martinez@example.com'
    },
    likeCount: 856,
    likedBy: [],
    shortDescription: 'Ancient Jewish manuscripts of immense religious significance'
  },
  {
    id: '4',
    name: 'Terracotta Army',
    image: 'https://images.unsplash.com/photo-1644176041496-393d63975fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcG90dGVyeSUyMGFyY2hhZW9sb2dpY2FsfGVufDF8fHx8MTc2MjUwMzk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Pottery',
    historicalContext: 'A collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor.',
    createdAt: '210-209 BC',
    discoveredAt: '1974',
    discoveredBy: 'Local farmers',
    presentLocation: "Emperor Qinshihuang's Mausoleum Site Museum, Xi'an, China",
    addedBy: {
      name: 'Li Wei',
      email: 'li.wei@example.com'
    },
    likeCount: 1523,
    likedBy: [],
    shortDescription: 'Thousands of life-sized terracotta warriors guarding an emperor'
  },
  {
    id: '5',
    name: 'Excalibur Sword',
    image: 'https://images.unsplash.com/photo-1758413265956-1c2747d1da46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwd2VhcG9uJTIwc3dvcmR8ZW58MXx8fHwxNzYyNTAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Weapons',
    historicalContext: 'Legendary sword of King Arthur, sometimes attributed with magical powers. While its historical existence is debated, similar medieval swords have been found across Europe.',
    createdAt: '5th-6th century AD (legendary)',
    discoveredAt: 'Various medieval period',
    discoveredBy: 'Multiple archaeological finds',
    presentLocation: 'Various European museums',
    addedBy: {
      name: 'Dr. James Anderson',
      email: 'james.anderson@example.com'
    },
    likeCount: 734,
    likedBy: [],
    shortDescription: 'Legendary medieval sword from Arthurian legend'
  },
  {
    id: '6',
    name: 'Sutton Hoo Helmet',
    image: 'https://images.unsplash.com/photo-1707068226685-27a15039f19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYXJ0aWZhY3RzJTIwbXVzZXVtfGVufDF8fHx8MTc2MjQ4MzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Weapons',
    historicalContext: 'An ornate Anglo-Saxon helmet from the Sutton Hoo ship-burial. It is one of the most significant artifacts from early medieval England.',
    createdAt: '6th-7th century AD',
    discoveredAt: '1939',
    discoveredBy: 'Basil Brown',
    presentLocation: 'British Museum, London',
    addedBy: {
      name: 'Emma Thompson',
      email: 'emma.thompson@example.com'
    },
    likeCount: 645,
    likedBy: [],
    shortDescription: 'Ornate Anglo-Saxon ceremonial helmet from royal burial'
  },
  {
    id: '7',
    name: 'Nebra Sky Disk',
    image: 'https://images.unsplash.com/photo-1731246164682-867af4a1a2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdG9vbHMlMjBicm9uemV8ZW58MXx8fHwxNzYyNTAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Tools',
    historicalContext: 'A bronze disk of approximately 30 cm diameter with a blue-green patina and inlaid gold symbols. It is the oldest known concrete depiction of the cosmos.',
    createdAt: '1600 BC',
    discoveredAt: '1999',
    discoveredBy: 'Henry Westphal and Mario Renner',
    presentLocation: 'State Museum of Prehistory, Halle, Germany',
    addedBy: {
      name: 'Dr. Hans Mueller',
      email: 'hans.mueller@example.com'
    },
    likeCount: 521,
    likedBy: [],
    shortDescription: 'Bronze Age astronomical disk showing earliest cosmos depiction'
  },
  {
    id: '8',
    name: 'Voynich Manuscript',
    image: 'https://images.unsplash.com/photo-1676115388797-5f448ad78e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwc2Nyb2xsJTIwbWFudXNjcmlwdHxlbnwxfHx8fDE3NjI1MDM5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Writings',
    historicalContext: 'An illustrated codex hand-written in an unknown writing system. The vellum on which it is written has been carbon-dated to the early 15th century.',
    createdAt: '15th century',
    discoveredAt: '1912',
    discoveredBy: 'Wilfrid Voynich',
    presentLocation: 'Beinecke Rare Book Library, Yale University',
    addedBy: {
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@example.com'
    },
    likeCount: 892,
    likedBy: [],
    shortDescription: 'Mysterious illustrated manuscript in unknown language'
  },
  {
    id: '9',
    name: 'Mask of Tutankhamun',
    image: 'https://images.unsplash.com/photo-1707068226685-27a15039f19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYXJ0aWZhY3RzJTIwbXVzZXVtfGVufDF8fHx8MTc2MjQ4MzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Other',
    historicalContext: 'The gold funeral mask of the Egyptian pharaoh Tutankhamun. It covered the face of the pharaoh\'s mummy and is considered one of the most famous artifacts from ancient Egypt.',
    createdAt: '1323 BC',
    discoveredAt: '1925',
    discoveredBy: 'Howard Carter',
    presentLocation: 'Egyptian Museum, Cairo',
    addedBy: {
      name: 'Dr. Rebecca Martinez',
      email: 'rebecca.martinez@example.com'
    },
    likeCount: 1678,
    likedBy: [],
    shortDescription: 'Golden death mask of the boy pharaoh Tutankhamun'
  },
  {
    id: '10',
    name: 'Viking Ulfberht Sword',
    image: 'https://images.unsplash.com/photo-1758413265956-1c2747d1da46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwd2VhcG9uJTIwc3dvcmR8ZW58MXx8fHwxNzYyNTAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Weapons',
    historicalContext: 'High-quality Viking swords made with advanced metallurgical techniques. The steel used was of remarkably high purity and showed technology ahead of its time.',
    createdAt: '9th-11th century AD',
    discoveredAt: 'Various 19th-20th century',
    discoveredBy: 'Multiple archaeological finds',
    presentLocation: 'Various European museums',
    addedBy: {
      name: 'Prof. Michael Chen',
      email: 'michael.chen@example.com'
    },
    likeCount: 456,
    likedBy: [],
    shortDescription: 'Advanced Viking sword showing remarkable metallurgy'
  },
  {
    id: '11',
    name: 'Code of Hammurabi',
    image: 'https://images.unsplash.com/photo-1588420914913-51f1d4f8f5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NldHRhJTIwc3RvbmUlMjBoaXN0b3J5fGVufDF8fHx8MTc2MjUwMzk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Documents',
    historicalContext: 'A Babylonian legal text composed during the reign of Hammurabi. It is one of the oldest deciphered writings of significant length in the world.',
    createdAt: '1754 BC',
    discoveredAt: '1901',
    discoveredBy: 'Jean-Vincent Scheil',
    presentLocation: 'Louvre Museum, Paris',
    addedBy: {
      name: 'Li Wei',
      email: 'li.wei@example.com'
    },
    likeCount: 723,
    likedBy: [],
    shortDescription: 'Ancient Babylonian law code carved on stone stele'
  },
  {
    id: '12',
    name: 'Portland Vase',
    image: 'https://images.unsplash.com/photo-1644176041496-393d63975fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcG90dGVyeSUyMGFyY2hhZW9sb2dpY2FsfGVufDF8fHx8MTc2MjUwMzk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Pottery',
    historicalContext: 'A Roman cameo glass vase dating to between 1-25 AD. It is the most famous example of Roman cameo glass and has inspired many replicas.',
    createdAt: '1-25 AD',
    discoveredAt: '16th century',
    discoveredBy: 'Unknown',
    presentLocation: 'British Museum, London',
    addedBy: {
      name: 'Emma Thompson',
      email: 'emma.thompson@example.com'
    },
    likeCount: 389,
    likedBy: [],
    shortDescription: 'Exquisite Roman cameo glass vase with mythological scenes'
  },
  {
    id: '13',
    name: 'Aztec Sun Stone',
    image: 'https://images.unsplash.com/photo-1707068226685-27a15039f19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYXJ0aWZhY3RzJTIwbXVzZXVtfGVufDF8fHx8MTc2MjQ4MzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Other',
    historicalContext: 'A massive monolithic sculpture that served as a calendar and religious monument in the Aztec capital of Tenochtitlan. It depicts the Aztec cosmos and calendar.',
    createdAt: '1427-1479 AD',
    discoveredAt: '1790',
    discoveredBy: 'Workers during Mexico City construction',
    presentLocation: 'National Museum of Anthropology, Mexico City',
    addedBy: {
      name: 'Dr. James Anderson',
      email: 'james.anderson@example.com'
    },
    likeCount: 945,
    likedBy: [],
    shortDescription: 'Massive Aztec calendar stone depicting cosmology'
  },
  {
    id: '14',
    name: 'Vindolanda Tablets',
    image: 'https://images.unsplash.com/photo-1676115388797-5f448ad78e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwc2Nyb2xsJTIwbWFudXNjcmlwdHxlbnwxfHx8fDE3NjI1MDM5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Writings',
    historicalContext: 'Thin, postcard-sized wooden leaf-tablets discovered at the Roman fort of Vindolanda in northern England. They are some of the oldest surviving handwritten documents in Britain.',
    createdAt: '85-130 AD',
    discoveredAt: '1973',
    discoveredBy: 'Robin Birley',
    presentLocation: 'British Museum and Vindolanda Museum',
    addedBy: {
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@example.com'
    },
    likeCount: 412,
    likedBy: [],
    shortDescription: 'Roman wooden tablets with everyday correspondence'
  },
  {
    id: '15',
    name: 'Ötzi\'s Copper Axe',
    image: 'https://images.unsplash.com/photo-1731246164682-867af4a1a2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdG9vbHMlMjBicm9uemV8ZW58MXx8fHwxNzYyNTAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Tools',
    historicalContext: 'A copper axe blade with a yew handle, found with the mummified remains of Ötzi the Iceman. It demonstrates advanced metallurgical knowledge in the Copper Age.',
    createdAt: '3300 BC',
    discoveredAt: '1991',
    discoveredBy: 'Helmut and Erika Simon',
    presentLocation: 'South Tyrol Museum of Archaeology, Bolzano, Italy',
    addedBy: {
      name: 'Dr. Hans Mueller',
      email: 'hans.mueller@example.com'
    },
    likeCount: 567,
    likedBy: [],
    shortDescription: 'Copper Age axe from famous Iceman mummy'
  }
];
