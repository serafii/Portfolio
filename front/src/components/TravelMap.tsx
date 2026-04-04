import React, { useCallback, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPinIcon } from "lucide-react";
const mapWidth = 1000;
const mapHeight = 500;
function project(lat: number, lon: number) {
  const x = ((lon + 180) / 360) * mapWidth;
  const y = ((90 - lat) / 180) * mapHeight;
  return {
    x,
    y,
  };
}
type City = {
  name: string;
  lat: number;
  lon: number;
  region: string;
};
const cities: City[] = [
  // Canada
  {
    name: "Montreal",
    lat: 45.5,
    lon: -73.57,
    region: "Canada",
  },
  {
    name: "Quebec City",
    lat: 46.81,
    lon: -71.21,
    region: "Canada",
  },
  {
    name: "Toronto",
    lat: 43.65,
    lon: -79.38,
    region: "Canada",
  },
  {
    name: "Ottawa",
    lat: 45.42,
    lon: -75.7,
    region: "Canada",
  },
  // USA
  {
    name: "Miami",
    lat: 25.76,
    lon: -80.19,
    region: "USA",
  },
  {
    name: "New York",
    lat: 40.71,
    lon: -74.01,
    region: "USA",
  },
  {
    name: "Boston",
    lat: 42.36,
    lon: -71.06,
    region: "USA",
  },
  {
    name: "Myrtle Beach",
    lat: 33.69,
    lon: -78.89,
    region: "USA",
  },
  // Caribbean
  {
    name: "Varadero / Havana",
    lat: 23.11,
    lon: -82.37,
    region: "Caribbean",
  },
  {
    name: "Punta Cana",
    lat: 18.58,
    lon: -68.41,
    region: "Caribbean",
  },
  // Europe
  {
    name: "Madrid",
    lat: 40.42,
    lon: -3.7,
    region: "Europe",
  },
  {
    name: "Barcelona",
    lat: 41.39,
    lon: 2.17,
    region: "Europe",
  },
  {
    name: "Paris",
    lat: 48.86,
    lon: 2.35,
    region: "Europe",
  },
  // Morocco
  {
    name: "Casablanca",
    lat: 33.57,
    lon: -7.59,
    region: "Morocco",
  },
  {
    name: "Rabat",
    lat: 34.02,
    lon: -6.84,
    region: "Morocco",
  },
  {
    name: "Tangier",
    lat: 35.76,
    lon: -5.83,
    region: "Morocco",
  },
  // East Asia (Japan - grouped together)
  {
    name: "Osaka",
    lat: 34.69,
    lon: 135.5,
    region: "East Asia",
  },
  {
    name: "Kyoto",
    lat: 35.01,
    lon: 135.77,
    region: "East Asia",
  },
  {
    name: "Tokyo",
    lat: 35.68,
    lon: 139.65,
    region: "East Asia",
  },
  {
    name: "Hong Kong",
    lat: 22.32,
    lon: 114.17,
    region: "East Asia",
  },
  {
    name: "Shenzhen",
    lat: 22.54,
    lon: 114.06,
    region: "East Asia",
  },
  {
    name: "Guangzhou",
    lat: 23.13,
    lon: 113.26,
    region: "East Asia",
  },
  {
    name: "Zhangjiajie",
    lat: 29.12,
    lon: 110.48,
    region: "East Asia",
  },
  {
    name: "Chongqing",
    lat: 29.53,
    lon: 106.51,
    region: "East Asia",
  },
  {
    name: "Beijing",
    lat: 39.9,
    lon: 116.41,
    region: "East Asia",
  },
  {
    name: "Tianjin",
    lat: 39.08,
    lon: 117.2,
    region: "East Asia",
  },
  {
    name: "Macao",
    lat: 22.2,
    lon: 113.54,
    region: "East Asia",
  },
  {
    name: "Taipei",
    lat: 25.03,
    lon: 121.57,
    region: "East Asia",
  },
  // Southeast Asia
  {
    name: "Kuala Lumpur",
    lat: 3.14,
    lon: 101.69,
    region: "Southeast Asia",
  },
  {
    name: "Singapore",
    lat: 1.35,
    lon: 103.82,
    region: "Southeast Asia",
  },
];
function clusterCities(allCities: City[], threshold: number = 14) {
  const clusters: City[][] = [];
  const used = new Set<number>();
  for (let i = 0; i < allCities.length; i++) {
    if (used.has(i)) continue;
    const cluster = [allCities[i]];
    used.add(i);
    const p1 = project(allCities[i].lat, allCities[i].lon);
    for (let j = i + 1; j < allCities.length; j++) {
      if (used.has(j)) continue;
      const p2 = project(allCities[j].lat, allCities[j].lon);
      const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
      if (dist < threshold) {
        cluster.push(allCities[j]);
        used.add(j);
      }
    }
    clusters.push(cluster);
  }
  return clusters;
}
function WorldMapPaths({ className }: { className: string }) {
  const coordsToPath = (coords: [number, number][]) => {
    return (
      coords
        .map(([lat, lon], i) => {
          const { x, y } = project(lat, lon);
          return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ") + " Z"
    );
  };
  // ── North America ──
  const northAmerica: [number, number][] = [
    [72, -168],
    [71, -156],
    [70, -145],
    [68, -138],
    [65, -140],
    [62, -142],
    [60, -140],
    [58, -136],
    [56, -132],
    [54, -130],
    [52, -128],
    [50, -127],
    [48, -124],
    [46, -124],
    [44, -124],
    [42, -124],
    [40, -122],
    [38, -122],
    [36, -121],
    [34, -120],
    [32, -117],
    [30, -115],
    [28, -112],
    [26, -110],
    [24, -110],
    [22, -105],
    [20, -105],
    [18, -103],
    [17, -100],
    [18, -97],
    [20, -97],
    [22, -97],
    [25, -97],
    [26, -93],
    [28, -90],
    [29, -89],
    [30, -88],
    [30, -85],
    [28, -82],
    [26, -82],
    [25, -80],
    [26, -80],
    [27, -80],
    [28, -81],
    [30, -82],
    [30, -84],
    [31, -85],
    [30, -87],
    [30, -89],
    [32, -90],
    [34, -90],
    [35, -88],
    [36, -86],
    [35, -82],
    [34, -78],
    [35, -76],
    [37, -76],
    [38, -75],
    [39, -74],
    [40, -74],
    [41, -72],
    [42, -71],
    [43, -70],
    [44, -68],
    [45, -67],
    [46, -67],
    [47, -65],
    [48, -64],
    [47, -62],
    [46, -60],
    [47, -58],
    [48, -56],
    [49, -55],
    [50, -56],
    [51, -57],
    [52, -56],
    [53, -56],
    [55, -60],
    [57, -62],
    [58, -65],
    [60, -65],
    [62, -68],
    [63, -70],
    [62, -75],
    [60, -78],
    [58, -80],
    [56, -82],
    [55, -85],
    [56, -88],
    [58, -92],
    [60, -95],
    [62, -95],
    [63, -92],
    [65, -90],
    [67, -88],
    [68, -92],
    [68, -98],
    [68, -105],
    [68, -110],
    [69, -118],
    [69, -128],
    [70, -138],
    [71, -148],
    [72, -158],
  ];
  // Alaska
  const alaska: [number, number][] = [
    [70, -162],
    [68, -165],
    [65, -168],
    [62, -166],
    [60, -162],
    [58, -157],
    [56, -155],
    [55, -160],
    [56, -162],
    [58, -165],
    [60, -168],
    [62, -170],
    [64, -170],
    [66, -168],
    [68, -168],
    [70, -165],
  ];
  // Greenland
  const greenland: [number, number][] = [
    [83, -35],
    [82, -22],
    [80, -18],
    [78, -18],
    [76, -20],
    [74, -20],
    [72, -22],
    [70, -24],
    [68, -28],
    [66, -35],
    [65, -40],
    [64, -44],
    [65, -50],
    [67, -53],
    [70, -55],
    [72, -56],
    [75, -58],
    [78, -60],
    [80, -55],
    [82, -45],
  ];
  // Central America
  const centralAmerica: [number, number][] = [
    [18, -97],
    [16, -95],
    [15, -92],
    [14, -90],
    [13, -88],
    [12, -86],
    [10, -84],
    [9, -82],
    [8, -80],
    [8, -78],
    [9, -78],
    [10, -80],
    [11, -83],
    [12, -85],
    [13, -87],
    [14, -88],
    [15, -88],
    [16, -90],
    [17, -92],
    [18, -95],
  ];
  // Cuba
  const cuba: [number, number][] = [
    [23, -84],
    [22, -82],
    [22, -80],
    [21, -78],
    [20, -76],
    [21, -75],
    [22, -78],
    [23, -80],
    [23, -82],
  ];
  // Hispaniola
  const hispaniola: [number, number][] = [
    [20, -74],
    [19, -72],
    [18, -69],
    [19, -68],
    [20, -70],
    [20, -72],
  ];
  // ── South America ──
  const southAmerica: [number, number][] = [
    [12, -72],
    [10, -68],
    [8, -63],
    [6, -58],
    [4, -52],
    [2, -50],
    [0, -50],
    [-2, -44],
    [-5, -35],
    [-8, -35],
    [-10, -37],
    [-13, -39],
    [-15, -40],
    [-18, -40],
    [-20, -42],
    [-23, -43],
    [-25, -48],
    [-28, -49],
    [-30, -51],
    [-33, -52],
    [-35, -55],
    [-38, -57],
    [-40, -62],
    [-42, -64],
    [-45, -66],
    [-48, -68],
    [-50, -70],
    [-52, -72],
    [-54, -70],
    [-55, -68],
    [-53, -68],
    [-50, -74],
    [-48, -76],
    [-45, -75],
    [-42, -73],
    [-40, -72],
    [-38, -72],
    [-35, -72],
    [-30, -72],
    [-27, -71],
    [-24, -70],
    [-20, -70],
    [-18, -72],
    [-15, -75],
    [-12, -77],
    [-10, -78],
    [-8, -80],
    [-5, -81],
    [-2, -80],
    [0, -80],
    [2, -78],
    [4, -77],
    [6, -76],
    [8, -76],
    [10, -75],
  ];
  // ── Europe ──
  const europe: [number, number][] = [
    [71, 28],
    [70, 32],
    [68, 30],
    [65, 28],
    [62, 25],
    [60, 22],
    [58, 18],
    [56, 14],
    [55, 12],
    [54, 10],
    [53, 8],
    [52, 5],
    [51, 4],
    [50, 2],
    [49, 0],
    [48, -2],
    [47, -3],
    [46, -2],
    [44, -1],
    [43, 0],
    [42, -1],
    [40, -2],
    [38, -4],
    [36, -5],
    [36, -8],
    [37, -9],
    [39, -9],
    [40, -8],
    [42, -8],
    [43, -5],
    [44, -2],
    [45, 0],
    [46, 2],
    [47, 5],
    [48, 7],
    [49, 8],
    [50, 8],
    [51, 7],
    [52, 8],
    [53, 10],
    [54, 12],
    [55, 14],
    [56, 16],
    [57, 18],
    [58, 20],
    [60, 22],
    [62, 24],
    [64, 26],
    [66, 28],
    [68, 30],
    [70, 30],
  ];
  // Iberian Peninsula
  const iberia: [number, number][] = [
    [43, -9],
    [44, -8],
    [43, -3],
    [43, 0],
    [42, 3],
    [41, 3],
    [40, 4],
    [39, 3],
    [38, 0],
    [37, -2],
    [36, -5],
    [37, -7],
    [38, -9],
    [39, -9],
    [40, -9],
    [42, -9],
  ];
  // Italy
  const italy: [number, number][] = [
    [46, 7],
    [46, 10],
    [45, 12],
    [44, 12],
    [43, 13],
    [42, 14],
    [41, 15],
    [40, 16],
    [39, 16],
    [38, 16],
    [37, 15],
    [38, 13],
    [39, 12],
    [40, 12],
    [41, 13],
    [42, 12],
    [43, 11],
    [44, 10],
    [45, 8],
  ];
  // Scandinavia
  const scandinavia: [number, number][] = [
    [71, 26],
    [70, 22],
    [68, 18],
    [66, 14],
    [64, 12],
    [62, 10],
    [60, 8],
    [58, 8],
    [56, 8],
    [56, 12],
    [58, 14],
    [60, 16],
    [62, 18],
    [64, 20],
    [66, 22],
    [68, 24],
    [70, 26],
  ];
  // UK
  const uk: [number, number][] = [
    [58, -5],
    [57, -2],
    [56, -3],
    [55, -1],
    [54, 0],
    [53, 1],
    [52, 2],
    [51, 1],
    [50, 0],
    [50, -2],
    [50, -5],
    [51, -5],
    [52, -4],
    [53, -3],
    [54, -4],
    [55, -5],
    [56, -5],
    [57, -5],
  ];
  // Ireland
  const ireland: [number, number][] = [
    [55, -8],
    [54, -6],
    [53, -6],
    [52, -7],
    [51, -10],
    [52, -10],
    [53, -10],
    [54, -10],
  ];
  // Iceland
  const iceland: [number, number][] = [
    [66, -18],
    [65, -14],
    [64, -14],
    [63, -18],
    [63, -22],
    [64, -24],
    [65, -22],
    [66, -20],
  ];
  // ── Africa ──
  const africa: [number, number][] = [
    // North coast (west to east)
    [35, -6],
    [36, -2],
    [37, 0],
    [37, 5],
    [37, 10],
    [33, 12],
    [32, 15],
    [31, 25],
    [31, 30],
    [30, 33],
    // East coast (north to south)
    [28, 34],
    [25, 35],
    [22, 37],
    [18, 40],
    [15, 42],
    [12, 44],
    [10, 45],
    [8, 48],
    [5, 48],
    [2, 42],
    [0, 42],
    [-2, 41],
    [-5, 40],
    [-8, 38],
    [-10, 40],
    [-15, 40],
    [-18, 36],
    [-22, 35],
    [-25, 33],
    [-28, 32],
    // South
    [-30, 31],
    [-33, 28],
    [-34, 26],
    [-35, 20],
    // West coast (south to north)
    [-34, 18],
    [-30, 17],
    [-25, 15],
    [-20, 12],
    [-15, 12],
    [-10, 14],
    [-8, 13],
    [-5, 10],
    [-4, 8],
    [0, 8],
    [2, 10],
    [5, 10],
    [5, 2],
    [6, -2],
    [5, -5],
    [5, -8],
    [8, -10],
    [10, -14],
    [12, -17],
    [15, -17],
    [18, -16],
    [20, -17],
    [22, -17],
    [25, -16],
    [28, -14],
    [30, -10],
    [32, -8],
    [33, -6],
    [34, -2],
  ];
  // Madagascar
  const madagascar: [number, number][] = [
    [-12, 49],
    [-14, 48],
    [-16, 47],
    [-18, 45],
    [-20, 44],
    [-22, 44],
    [-24, 45],
    [-25, 47],
    [-23, 48],
    [-20, 49],
    [-17, 50],
    [-14, 50],
  ];
  // ── Middle East & Arabian Peninsula ──
  const arabianPeninsula: [number, number][] = [
    [32, 35],
    [30, 35],
    [28, 35],
    [25, 37],
    [22, 39],
    [18, 42],
    [15, 44],
    [13, 45],
    [12, 44],
    [14, 48],
    [16, 52],
    [20, 56],
    [22, 58],
    [24, 56],
    [25, 55],
    [26, 50],
    [28, 48],
    [30, 48],
    [32, 46],
    [34, 36],
  ];
  // ── India ──
  const india: [number, number][] = [
    [35, 72],
    [33, 72],
    [30, 70],
    [28, 68],
    [26, 68],
    [24, 70],
    [22, 72],
    [20, 73],
    [18, 73],
    [16, 74],
    [14, 75],
    [12, 76],
    [10, 78],
    [8, 77],
    [8, 78],
    [10, 80],
    [12, 80],
    [14, 80],
    [16, 82],
    [18, 84],
    [20, 88],
    [22, 90],
    [24, 92],
    [26, 92],
    [28, 90],
    [30, 88],
    [32, 80],
    [34, 76],
    [35, 74],
  ];
  // Sri Lanka
  const sriLanka: [number, number][] = [
    [10, 80],
    [8, 80],
    [6, 80],
    [6, 81],
    [8, 82],
    [10, 81],
  ];
  // ── China (detailed coastline) ──
  const china: [number, number][] = [
    [53, 120],
    [50, 118],
    [48, 116],
    [46, 118],
    [44, 120],
    [42, 122],
    [40, 124],
    [39, 122],
    [40, 120],
    [41, 118],
    [40, 117],
    [39, 118],
    [38, 118],
    [37, 118],
    [36, 120],
    [35, 120],
    [34, 119],
    [33, 121],
    [31, 122],
    [30, 122],
    [29, 120],
    [28, 120],
    [27, 120],
    [26, 118],
    [25, 118],
    [24, 116],
    [23, 115],
    [22, 114],
    [21, 110],
    [20, 108],
    [22, 106],
    [22, 104],
    [21, 102],
    [22, 100],
    [24, 98],
    [26, 98],
    [28, 97],
    [30, 96],
    [32, 92],
    [34, 80],
    [36, 76],
    [38, 74],
    [40, 72],
    [42, 76],
    [44, 80],
    [46, 82],
    [48, 86],
    [50, 88],
    [52, 90],
    [50, 96],
    [48, 100],
    [46, 102],
    [48, 108],
    [50, 110],
    [52, 114],
    [53, 118],
  ];
  // Korean Peninsula
  const korea: [number, number][] = [
    [43, 128],
    [42, 130],
    [40, 129],
    [38, 128],
    [37, 127],
    [36, 126],
    [35, 126],
    [34, 127],
    [35, 129],
    [36, 130],
    [38, 130],
    [39, 128],
    [40, 128],
    [41, 129],
    [42, 128],
  ];
  // Japan - Hokkaido
  const hokkaido: [number, number][] = [
    [45, 142],
    [44, 145],
    [43, 145],
    [42, 143],
    [42, 140],
    [43, 140],
    [44, 141],
  ];
  // Japan - Honshu (main island, detailed)
  const honshu: [number, number][] = [
    [41, 140],
    [40, 140],
    [39, 140],
    [38, 139],
    [37, 138],
    [36, 137],
    [35, 137],
    [34, 136],
    [34, 134],
    [33, 132],
    [34, 131],
    [35, 132],
    [35, 134],
    [36, 135],
    [37, 136],
    [36, 137],
    [35, 138],
    [35, 140],
    [36, 140],
    [37, 140],
    [38, 140],
    [39, 140],
    [40, 140],
    [41, 141],
  ];
  // Japan - Kyushu & Shikoku
  const kyushu: [number, number][] = [
    [34, 131],
    [33, 131],
    [32, 130],
    [31, 131],
    [32, 132],
    [33, 132],
  ];
  const shikoku: [number, number][] = [
    [34, 133],
    [33, 133],
    [33, 134],
    [34, 134],
  ];
  // Taiwan (more visible)
  const taiwan: [number, number][] = [
    [25, 121],
    [24, 122],
    [23, 121],
    [22, 121],
    [22, 120],
    [23, 120],
    [24, 120],
    [25, 121],
  ];
  // ── Southeast Asia ──
  const indochina: [number, number][] = [
    [22, 100],
    [20, 100],
    [18, 102],
    [16, 104],
    [14, 105],
    [12, 106],
    [10, 106],
    [8, 105],
    [6, 104],
    [4, 104],
    [2, 104],
    [1, 104],
    [2, 102],
    [4, 100],
    [6, 100],
    [8, 98],
    [10, 98],
    [12, 100],
    [14, 100],
    [16, 100],
    [18, 100],
    [20, 102],
  ];
  // Malay Peninsula
  const malay: [number, number][] = [
    [8, 98],
    [6, 100],
    [4, 102],
    [2, 103],
    [1, 104],
    [2, 104],
    [4, 104],
    [6, 103],
    [7, 102],
    [8, 100],
  ];
  // Sumatra
  const sumatra: [number, number][] = [
    [5, 95],
    [3, 98],
    [1, 100],
    [-1, 102],
    [-3, 104],
    [-5, 106],
    [-5, 104],
    [-3, 102],
    [-1, 100],
    [1, 98],
    [3, 96],
  ];
  // Borneo
  const borneo: [number, number][] = [
    [7, 116],
    [5, 118],
    [3, 118],
    [1, 118],
    [0, 116],
    [-1, 114],
    [-2, 112],
    [-1, 110],
    [1, 109],
    [3, 109],
    [5, 110],
    [6, 112],
    [7, 114],
  ];
  // Java
  const java: [number, number][] = [
    [-6, 106],
    [-7, 108],
    [-7, 110],
    [-8, 112],
    [-8, 114],
    [-7, 114],
    [-6, 112],
    [-6, 110],
    [-6, 108],
  ];
  // Philippines
  const philippines: [number, number][] = [
    [18, 121],
    [16, 120],
    [14, 121],
    [12, 122],
    [10, 124],
    [8, 126],
    [10, 126],
    [12, 124],
    [14, 123],
    [16, 122],
    [18, 122],
  ];
  // Papua New Guinea
  const papua: [number, number][] = [
    [-1, 132],
    [-2, 135],
    [-4, 138],
    [-6, 142],
    [-8, 146],
    [-10, 148],
    [-8, 150],
    [-6, 148],
    [-4, 144],
    [-2, 140],
    [-1, 136],
  ];
  // ── Australia ──
  const australia: [number, number][] = [
    [-12, 130],
    [-14, 132],
    [-12, 136],
    [-12, 140],
    [-14, 142],
    [-16, 146],
    [-18, 148],
    [-20, 150],
    [-24, 152],
    [-28, 153],
    [-30, 153],
    [-33, 152],
    [-35, 150],
    [-38, 146],
    [-38, 144],
    [-36, 138],
    [-35, 136],
    [-34, 134],
    [-35, 130],
    [-34, 124],
    [-32, 120],
    [-30, 116],
    [-28, 114],
    [-26, 114],
    [-24, 114],
    [-22, 114],
    [-20, 116],
    [-18, 120],
    [-16, 124],
    [-14, 128],
  ];
  // New Zealand
  const nzNorth: [number, number][] = [
    [-35, 174],
    [-37, 175],
    [-39, 176],
    [-41, 175],
    [-39, 174],
    [-37, 173],
    [-35, 173],
  ];
  const nzSouth: [number, number][] = [
    [-41, 172],
    [-43, 170],
    [-45, 168],
    [-46, 167],
    [-46, 170],
    [-44, 172],
    [-42, 172],
  ];
  // ── Russia / Central Asia (fills gap between Europe and China) ──
  const russia: [number, number][] = [
    // Northern coast
    [70, 30],
    [72, 40],
    [73, 50],
    [72, 60],
    [73, 70],
    [74, 80],
    [75, 90],
    [74, 100],
    [73, 110],
    [72, 120],
    [70, 130],
    [68, 140],
    [65, 145],
    [62, 140],
    [60, 135],
    [55, 135],
    [50, 130],
    [48, 120],
    [50, 115],
    [52, 110],
    [50, 105],
    [48, 100],
    [46, 95],
    [45, 90],
    [42, 85],
    [40, 80],
    [38, 75],
    [35, 72],
    // Southern border (Central Asia)
    [38, 68],
    [40, 60],
    [42, 55],
    [45, 50],
    [48, 45],
    [50, 40],
    [52, 35],
    [55, 30],
    [58, 28],
    [60, 30],
    [62, 28],
    [65, 30],
    [68, 30],
  ];
  // ── Russia far east ──
  const kamchatka: [number, number][] = [
    [62, 160],
    [60, 163],
    [58, 163],
    [56, 161],
    [54, 158],
    [52, 156],
    [54, 155],
    [56, 157],
    [58, 160],
    [60, 160],
  ];
  return (
    <g>
      {/* North America & Caribbean */}
      <path className={className} d={coordsToPath(northAmerica)} />
      <path className={className} d={coordsToPath(alaska)} />
      <path className={className} d={coordsToPath(centralAmerica)} />
      <path className={className} d={coordsToPath(cuba)} />
      <path className={className} d={coordsToPath(hispaniola)} />
      <path className={className} d={coordsToPath(greenland)} />

      {/* South America */}
      <path className={className} d={coordsToPath(southAmerica)} />

      {/* Europe */}
      <path className={className} d={coordsToPath(europe)} />
      <path className={className} d={coordsToPath(iberia)} />
      <path className={className} d={coordsToPath(italy)} />
      <path className={className} d={coordsToPath(scandinavia)} />
      <path className={className} d={coordsToPath(uk)} />
      <path className={className} d={coordsToPath(ireland)} />
      <path className={className} d={coordsToPath(iceland)} />

      {/* Africa */}
      <path className={className} d={coordsToPath(africa)} />
      <path className={className} d={coordsToPath(madagascar)} />

      {/* Middle East & South Asia */}
      <path className={className} d={coordsToPath(arabianPeninsula)} />
      <path className={className} d={coordsToPath(india)} />
      <path className={className} d={coordsToPath(sriLanka)} />

      {/* Russia / Central Asia */}
      <path className={className} d={coordsToPath(russia)} />

      {/* East Asia (detailed) */}
      <path className={className} d={coordsToPath(china)} />
      <path className={className} d={coordsToPath(korea)} />
      <path className={className} d={coordsToPath(hokkaido)} />
      <path className={className} d={coordsToPath(honshu)} />
      <path className={className} d={coordsToPath(kyushu)} />
      <path className={className} d={coordsToPath(shikoku)} />
      <path className={className} d={coordsToPath(taiwan)} />
      <path className={className} d={coordsToPath(kamchatka)} />

      {/* Southeast Asia & Oceania */}
      <path className={className} d={coordsToPath(indochina)} />
      <path className={className} d={coordsToPath(malay)} />
      <path className={className} d={coordsToPath(sumatra)} />
      <path className={className} d={coordsToPath(borneo)} />
      <path className={className} d={coordsToPath(java)} />
      <path className={className} d={coordsToPath(philippines)} />
      <path className={className} d={coordsToPath(papua)} />

      {/* Australia & NZ */}
      <path className={className} d={coordsToPath(australia)} />
      <path className={className} d={coordsToPath(nzNorth)} />
      <path className={className} d={coordsToPath(nzSouth)} />
    </g>
  );
}
function getRegionStats(allCities: City[]) {
  const regions = new Set(allCities.map((c) => c.region));
  return {
    cities: allCities.length,
    regions: regions.size,
  };
}
const TravelMap: React.FC = () => {
  const [hoveredCluster, setHoveredCluster] = useState<City[] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
  });
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const clusters = useMemo(() => clusterCities(cities, 10), []);
  const stats = useMemo(() => getRegionStats(cities), []);
  const handleMouseEnter = useCallback(
    (cluster: City[], x: number, y: number) => {
      setHoveredCluster(cluster);
      if (svgRef.current && containerRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const scaleX = svgRect.width / mapWidth;
        const scaleY = svgRect.height / mapHeight;
        const px = svgRect.left - containerRect.left + x * scaleX;
        const py = svgRect.top - containerRect.top + y * scaleY;
        setTooltipPos({
          x: px,
          y: py,
        });
      }
    },
    [],
  );
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };
  const pinVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
      },
    },
  };
  return (
    <section className="w-full py-16 px-4 md:px-8 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Places I've Visited
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            {stats.regions} regions · {stats.cities} cities across the globe
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-2/1 bg-slate-200 dark:bg-slate-900/35 rounded-2xl border border-indigo-300/70 dark:border-indigo-500/20 overflow-hidden p-3 md:p-6"
        >
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-indigo-900 dark:text-indigo-100"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <svg
            ref={svgRef}
            viewBox={`0 0 ${mapWidth} ${mapHeight}`}
            className="w-full h-full relative z-10"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Ocean/water subtle lines */}
            <defs>
              <pattern
                id="waterLines"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="10"
                  x2="20"
                  y2="10"
                  className="stroke-indigo-400/35 dark:stroke-indigo-300/15"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width={mapWidth}
              height={mapHeight}
              fill="url(#waterLines)"
              opacity="0.5"
            />

            {/* Continent outlines */}
            <WorldMapPaths className="fill-slate-400/90 dark:fill-slate-700/75 stroke-indigo-300/90 dark:stroke-indigo-300/25 stroke-[0.5] transition-colors duration-300" />

            {/* Connection lines between clusters in same region (subtle) */}
            {clusters.map((cluster, i) => {
              const p = project(cluster[0].lat, cluster[0].lon);
              // Find next cluster in same region
              for (let j = i + 1; j < clusters.length; j++) {
                if (clusters[j][0].region === cluster[0].region) {
                  const p2 = project(clusters[j][0].lat, clusters[j][0].lon);
                  const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                  if (dist < 80) {
                    return (
                      <line
                        key={`line-${i}-${j}`}
                        x1={p.x}
                        y1={p.y}
                        x2={p2.x}
                        y2={p2.y}
                        className="stroke-indigo-400/20 dark:stroke-indigo-300/20"
                        strokeWidth="0.5"
                        strokeDasharray="3,3"
                      />
                    );
                  }
                }
              }
              return null;
            })}

            {/* Pins */}
            <motion.g
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {clusters.map((cluster, i) => {
                const { x, y } = project(cluster[0].lat, cluster[0].lon);
                const isMulti = cluster.length > 1;
                const pinR = isMulti ? 6 : 4.5;
                return (
                  <motion.g
                    key={i}
                    variants={pinVariants}
                    className="cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(cluster, x, y)}
                    onMouseLeave={() => setHoveredCluster(null)}
                    style={{
                      transformOrigin: `${x}px ${y}px`,
                    }}
                  >
                    {/* Outer glow ring */}
                    <circle
                      cx={x}
                      cy={y}
                      r={pinR + 6}
                      className="fill-indigo-500/9 dark:fill-indigo-400/14"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r={pinR + 3}
                      className="fill-indigo-500/18 dark:fill-indigo-400/22"
                    />
                    {/* Pin dot */}
                    <circle
                      cx={x}
                      cy={y}
                      r={pinR}
                      className="fill-indigo-500 dark:fill-indigo-400 stroke-white dark:stroke-slate-900 transition-colors duration-200"
                      strokeWidth="2"
                    />
                    {/* Inner highlight */}
                    <circle
                      cx={x - 1}
                      cy={y - 1}
                      r={pinR * 0.35}
                      className="fill-white/40"
                    />
                    {/* Count badge for clusters */}
                    {isMulti && (
                      <g>
                        <circle
                          cx={x + 7}
                          cy={y - 7}
                          r="6.5"
                          className="fill-indigo-600 dark:fill-indigo-300 stroke-white dark:stroke-slate-900"
                          strokeWidth="1.5"
                        />
                        <text
                          x={x + 7}
                          y={y - 7}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="fill-white dark:fill-slate-900 text-[7px] font-bold select-none"
                        >
                          {cluster.length}
                        </text>
                      </g>
                    )}
                  </motion.g>
                );
              })}
            </motion.g>
          </svg>

          {/* Tooltip */}
          <AnimatePresence>
            {hoveredCluster && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 4,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.12,
                }}
                className="absolute z-20 pointer-events-none"
                style={{
                  left: tooltipPos.x,
                  top: tooltipPos.y,
                  transform: "translate(-50%, -100%)",
                  marginTop: "-14px",
                }}
              >
                <div className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white px-3 py-2.5 rounded-xl shadow-lg shadow-black/10 dark:shadow-black/30 border border-indigo-100/80 dark:border-indigo-500/20 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPinIcon className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-[10px] font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
                      {hoveredCluster[0].region}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    {hoveredCluster.map((city, idx) => (
                      <span
                        key={idx}
                        className="font-medium text-sm leading-snug"
                      >
                        {city.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Region legend */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
          {[
            "Canada",
            "USA",
            "Caribbean",
            "Europe",
            "Morocco",
            "East Asia",
            "Southeast Asia",
          ].map((region) => (
            <span
              key={region}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100/80 dark:bg-slate-800/65 text-slate-600 dark:text-slate-300 border border-indigo-100/70 dark:border-indigo-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelMap;
