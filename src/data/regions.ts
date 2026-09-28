import { SourcingRegion } from '../types';

export const SOURCING_REGIONS: SourcingRegion[] = [
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    ingredient: 'Lakadong Turmeric',
    productType: 'High-Curcumin Turmeric',
    farmerGroup: 'Jaintia Hills Women Organic Farmer Collective',
    elevation: '1,200m above sea level',
    soil: 'Sub-tropical Humic Red Soil',
    harvestMonth: 'January to March',
    description: 'Nurtured by the clean rainfall of Cherrapunji and the mineral-dense humic slopes of Jaintia Hills. The local landrace rhizome produces an unparalleled 7.5% - 8.2% natural curcumin content, without synthetic inputs or soil amendments.',
    curcuminOrKeyMetric: '7.8% Average Curcumin',
    svgCoordinates: { x: 740, y: 350 }, // Position on our 800x800 India SVG
    accentColor: '#D89B28'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    ingredient: 'Ancient Millets & Groundnut',
    productType: 'Foxtail Millet & Wood-Pressed Oil',
    farmerGroup: 'Deccan Agro-Ecology Farmer Guild (Solapur & Pune)',
    elevation: '560m above sea level',
    soil: 'Black Cotton (Regur) Basaltic Soil',
    harvestMonth: 'September to December',
    description: 'The rainfed black cotton soil of the Deccan plateau yields drought-hardy native millets and oilseeds rich in complex lipids. Sourced directly from 14 family-owned agro-ecological farms surrounding Pune and Solapur.',
    curcuminOrKeyMetric: '100% Heirloom Non-GMO Seed Bank',
    svgCoordinates: { x: 310, y: 520 },
    accentColor: '#B95F3B'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    ingredient: 'Virgin Coconut',
    productType: 'Extra Virgin Cold-Pressed Coconut Oil',
    farmerGroup: 'Malabar Coastal Palm Cooperative',
    elevation: 'Sea Level to 150m',
    soil: 'Coastal Alluvial Sandy Loam',
    harvestMonth: 'Continuous Coastal Harvest',
    description: 'Grown along the brackish coastal groves of the Malabar belt. Only fresh mature nuts harvested at peak ripeness are selected, cracked, wet-milled, and cold-centrifuged to retain natural lauric acid and crisp tropical aroma.',
    curcuminOrKeyMetric: '53.2% Natural Lauric Acid',
    svgCoordinates: { x: 320, y: 730 },
    accentColor: '#89977B'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    ingredient: 'Native Spices & Sesame',
    productType: 'Black Sesame & Desert Spices',
    farmerGroup: 'Marwar-Shekhawati Organic Cluster',
    elevation: '320m above sea level',
    soil: 'Arid Aerated Sandy Silt',
    harvestMonth: 'October to December',
    description: 'The extreme diurnal temperature swings and intense desert sunlight of Rajasthan concentrate essential volatile oils in native black sesame, cumin, and mustard seeds, delivering bold therapeutic punch and unmatched aroma.',
    curcuminOrKeyMetric: 'Zero Pesticide Residue Certified',
    svgCoordinates: { x: 260, y: 340 },
    accentColor: '#D89B28'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    ingredient: 'Forest Herbs & Ashwagandha',
    productType: 'Ashwagandha, Brahmi & Sacred Tulsi',
    farmerGroup: 'Western Ghats Agro-Forestry Consortium',
    elevation: '920m above sea level',
    soil: 'Rich Forest Humus & Laterite Soil',
    harvestMonth: 'November to February',
    description: 'Harvested from the biodiverse transitional forest margins of the Western Ghats UNESCO biosphere. The plants grow in polyculture alongside native shade trees, ensuring maximum withanolide and eugenol synthesis in holy basil and ashwagandha.',
    curcuminOrKeyMetric: '5.1% Total Withanolide Content',
    svgCoordinates: { x: 330, y: 640 },
    accentColor: '#16352B'
  }
];
