import React, { useCallback, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPinIcon } from "lucide-react";
import { geoContains, geoGraticule10, geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { FeatureCollection, Geometry } from "geojson";
import worldData from "world-atlas/countries-110m.json";
const mapWidth = 1000;
const mapHeight = 500;
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
  {
    name: "Vancouver",
    lat: 49.28,
    lon: -123.12,
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
    name: "Shanghai",
    lat: 31.23,
    lon: 121.47,
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
  {
    name: "Seoul",
    lat: 37.57,
    lon: 126.98,
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
// Natural Earth 1:110m countries, projected once when this lazy chunk loads.
const world = worldData as unknown as Topology<{
  countries: GeometryCollection<{ name: string }>;
}>;
const countryFeatures = (
  feature(world, world.objects.countries) as FeatureCollection<
    Geometry,
    { name: string }
  >
).features.filter((f) => f.properties.name !== "Antarctica");
const projection = geoNaturalEarth1().fitExtent(
  [
    [8, 8],
    [mapWidth - 8, mapHeight - 8],
  ],
  { type: "FeatureCollection", features: countryFeatures },
);
const pathGenerator = geoPath(projection).digits(1);
function project(lat: number, lon: number) {
  const [x, y] = projection([lon, lat]) ?? [0, 0];
  return {
    x,
    y,
  };
}
const graticulePath = pathGenerator(geoGraticule10()) ?? "";
const countryShapes = countryFeatures.map((f, i) => ({
  id: String(f.id ?? i),
  d: pathGenerator(f) ?? "",
  regions: [
    ...new Set(
      cities
        .filter((c) => geoContains(f, [c.lon, c.lat]))
        .map((c) => c.region),
    ),
  ],
}));
const CountryLayer = React.memo(function CountryLayer({
  activeRegion,
}: {
  activeRegion: string | null;
}) {
  return (
    <g strokeWidth="0.5" strokeLinejoin="round">
      {countryShapes.map((country) => {
        const isVisited = country.regions.length > 0;
        const isActive =
          activeRegion !== null && country.regions.includes(activeRegion);
        const fill = isActive
          ? "fill-indigo-500/80 dark:fill-violet-400/70"
          : isVisited
            ? "fill-indigo-400/45 dark:fill-violet-400/30"
            : "fill-slate-400/55 dark:fill-slate-600/45";
        return (
          <path
            key={country.id}
            d={country.d}
            className={`${fill} stroke-white/80 transition-[fill] duration-300 dark:stroke-[#100819]`}
          />
        );
      })}
    </g>
  );
});
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
function getRegionStats(allCities: City[]) {
  const counts = new Map<string, number>();
  allCities.forEach((c) => counts.set(c.region, (counts.get(c.region) ?? 0) + 1));
  return {
    cities: allCities.length,
    regions: [...counts]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count),
  };
}
const formatCoord = (value: number, positive: string, negative: string) =>
  `${Math.abs(value).toFixed(2)}°${value >= 0 ? positive : negative}`;
const TravelMap: React.FC = () => {
  const [hoveredCluster, setHoveredCluster] = useState<City[] | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
  });
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const clusters = useMemo(() => clusterCities(cities, 10), []);
  const stats = useMemo(() => getRegionStats(cities), []);
  const activeRegion = hoveredRegion ?? selectedRegion;
  const activeCities = useMemo(
    () =>
      activeRegion ? cities.filter((c) => c.region === activeRegion) : [],
    [activeRegion],
  );
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
  const readoutCity = hoveredCluster?.[0];
  return (
    <section className="w-full py-16 px-5 sm:px-10 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="mb-2 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-4xl">
            Places I've Visited
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {stats.regions.length} regions · {stats.cities} cities across the
            globe
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-2/1 overflow-hidden py-3 md:py-6"
        >
          {/* Viewfinder corner marks */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-indigo-500 dark:border-violet-400"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-indigo-500 dark:border-violet-400"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-indigo-500 dark:border-violet-400"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-indigo-500 dark:border-violet-400"
          />

          <svg
            ref={svgRef}
            viewBox={`0 0 ${mapWidth} ${mapHeight}`}
            className="w-full h-full relative z-10"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Latitude/longitude graticule every 10° */}
            <path
              d={graticulePath}
              fill="none"
              strokeWidth="0.5"
              className="stroke-indigo-400/25 dark:stroke-violet-300/10"
            />

            {/* Countries: visited ones tinted, active region highlighted */}
            <CountryLayer activeRegion={activeRegion} />

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
                const pinR = isMulti ? 5.5 : 4;
                const region = cluster[0].region;
                const isDimmed = activeRegion !== null && region !== activeRegion;
                const isHighlighted = activeRegion === region;
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
                    <g
                      className={`group transition-opacity duration-300 ${isDimmed ? "opacity-20" : ""}`}
                    >
                      {/* Hit area */}
                      <circle cx={x} cy={y} r={pinR + 8} fill="transparent" />
                      {/* Outline ring, expands on hover or region highlight */}
                      <circle
                        cx={x}
                        cy={y}
                        r={pinR + 4}
                        strokeWidth="1"
                        className={`fill-indigo-500/10 stroke-indigo-500/50 [transform-box:fill-box] origin-center transition-transform duration-300 group-hover:scale-150 dark:fill-violet-400/10 dark:stroke-violet-300/50 ${isHighlighted ? "scale-150" : ""}`}
                      />
                      {/* Pin dot */}
                      <circle
                        cx={x}
                        cy={y}
                        r={pinR}
                        className="fill-indigo-500 dark:fill-violet-400 stroke-white dark:stroke-slate-900 transition-colors duration-200"
                        strokeWidth="1.5"
                      />
                      {/* Count badge for clusters */}
                      {isMulti && (
                        <g>
                          <rect
                            x={x + 2}
                            y={y - 14}
                            width="11"
                            height="11"
                            className="fill-indigo-600 dark:fill-violet-300 stroke-white dark:stroke-slate-900"
                            strokeWidth="1"
                          />
                          <text
                            x={x + 7.5}
                            y={y - 8.5}
                            textAnchor="middle"
                            dominantBaseline="central"
                            className="fill-white dark:fill-slate-900 text-[7px] font-bold select-none"
                          >
                            {cluster.length}
                          </text>
                        </g>
                      )}
                    </g>
                  </motion.g>
                );
              })}
            </motion.g>
          </svg>

          {/* Coordinate readout */}
          <p
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 left-5 z-20 hidden font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 dark:text-violet-200/50 sm:block"
          >
            {readoutCity
              ? `${formatCoord(readoutCity.lat, "N", "S")} ${formatCoord(readoutCity.lon, "E", "W")} · ${readoutCity.name}`
              : "Hover a pin"}
          </p>

          {/* Tooltip */}
          <AnimatePresence>
            {hoveredCluster && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 4,
                }}
                transition={{
                  duration: 0.12,
                }}
                className="absolute z-20 pointer-events-none"
                style={{
                  left: tooltipPos.x,
                  top: tooltipPos.y,
                  transform: "translate(-50%, -100%)",
                  marginTop: "-16px",
                }}
              >
                <div className="whitespace-nowrap border-l-2 border-indigo-500 bg-slate-50/95 px-3 py-2.5 text-slate-800 shadow-lg shadow-black/10 dark:border-violet-400 dark:bg-[#160c23]/95 dark:text-white dark:shadow-black/30">
                  <div className="mb-1 flex items-center gap-1.5">
                    <MapPinIcon className="h-3 w-3 text-indigo-500 dark:text-violet-300" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-500 dark:text-violet-300">
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

        {/* Region legend: hover (mouse) or tap to highlight */}
        <ul className="mt-6 grid grid-cols-2 border-t border-indigo-300/60 dark:border-violet-300/15 sm:grid-cols-4 lg:grid-cols-7">
          {stats.regions.map(({ name, count }) => {
            const isActive = activeRegion === name;
            return (
              <li key={name}>
                <button
                  type="button"
                  aria-pressed={selectedRegion === name}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setHoveredRegion(name);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") setHoveredRegion(null);
                  }}
                  onClick={() =>
                    setSelectedRegion((current) =>
                      current === name ? null : name,
                    )
                  }
                  className="group relative flex w-full cursor-pointer items-baseline justify-between gap-3 border-b border-indigo-300/60 py-3 pr-4 text-left dark:border-violet-300/15"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-indigo-600 dark:text-violet-300"
                        : "text-slate-700 group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-violet-300"
                    }`}
                  >
                    {name}
                  </span>
                  <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-violet-200/50">
                    {String(count).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-px left-0 h-px w-full origin-left bg-linear-to-r from-indigo-500 to-violet-500 transition-transform duration-500 ease-out dark:from-violet-400 dark:to-fuchsia-400 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <p
          aria-live="polite"
          className="mt-4 min-h-6 text-sm text-slate-600 dark:text-slate-300"
        >
          {activeRegion ? (
            <>
              <span className="mr-3 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-600 dark:text-violet-300">
                {activeRegion}
              </span>
              {activeCities.map((c) => c.name).join(" · ")}
            </>
          ) : (
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-violet-200/50">
              Select a region to highlight it on the map
            </span>
          )}
        </p>
      </div>
    </section>
  );
};

export default TravelMap;
