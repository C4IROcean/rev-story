var config = {
    style: 'mapbox://styles/oceandatafoundation/cku5gar6i283z18l6xsl9yge2',
    accessToken: 'pk.eyJ1Ijoib2NlYW5kYXRhZm91bmRhdGlvbiIsImEiOiJja3U1Z2Ezem80endhMm9tcHowZ2JqMGpiIn0.HHbtd4QIaBqfTzcZncxDYA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'HACON',
    subtitle: 'Hot Vents in an Ice-Covered Ocean',
    byline: 'led by CAGE and NIVA',
    footer: 'Thank you to Marena Brinkhurst of the Mapbox Community Team for helping us build and update this story as the expedition continues.',
    chapters: [
        {
            id: 'story1',
            alignment: 'left',
            hidden: false,
            title: 'Why are we going to the Arctic?',
            image: '',
            description: 'Stefan B&#252;nz from the Centre for Arctic Gas Hydrate, Environment and Climate (UiT The Arctic University of Norway) and Eva Ramirez-Llodra, from the Norwegian Institute for Water Research, last visited the Aurora Hydrothermal Vents in 2019.<br><br>These vents were discovered in 2014 during the German AURORA cruise led by Prof Antje Boetius (AWI) on board Polarstern and were visited for a second time during the HACON19 cruise (see the 2019 cruise <a href="https://haconfrinatek.com/blog/" target="_blank">blog</a> and <a href="https://haconfrinatek.com/2020/01/20/hacon-cruise-report/" target="_blank">report</a>). However, until today, no ROV has been able to dive successfully to the vent field, at 4000 m depth under permanent ice cover.',
            location: {
                center: { lon: -18.44294, lat: 79.46374 },
                zoom: 2.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'start-point',
                opacity: 0
              },
                {
                layer: 'test-shallow',
                opacity: 0
              },
                {
                layer: 'test-deep',
                opacity: 0
              }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
      {
            id: 'story2',
            alignment: 'left',
            hidden: false,
            title: 'Who is going?',
            image: './images/teamondeck2.jpg',
            description: 'B&#252;nz and Ramirez-Llodra lead a <a href="https://haconfrinatek.com/hacon2021/" target="_blank">team</a> of 17 scientists 82.5 degrees north to the Arctic in search of the Aurora Hydrothermal Vents. The scientists represent 13 different nationalities: German, Italian, French, Norwegian, New Zealand, Irish, Portuguese, American, Finnish, British, Canadian, Spanish, and Indian.',
            location: {
                center: { lon: -5.18003, lat: 80.72944 },
                zoom: 3.53,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'start-point',
                opacity: 0
              },
                {
                layer: 'test-shallow',
                opacity: 0
              },
                {
                layer: 'test-deep',
                opacity: 0
              }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'story3',
            alignment: 'left',
            hidden: false,
            title: 'Friday, Sept 24: Meet the ROV Team',
            image: './images/story_3.jpg',
            description: 'On Friday, September 24th, the team arrived to start preparing the Remotely Operated Vehicle (ROV) and Tethered Management System (TMS) for its first expedition. Oil checks, cables connected, science skid and 4K camera installed.<br><br>(Image, from left) Patrick V&#229;genes, J&#246;rn Patrick from Havforskningsinstituttet, Stig V&#229;genes from University of Bergen, Leighton Rolley from REV Ocean.',
            location: {
                center: { lon: 13.47772, lat: 78.32703 },
                zoom: 6.65,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'start-point',
                opacity: 0
              },
                {
                layer: 'test-shallow',
                opacity: 0
              },
                {
                layer: 'test-deep',
                opacity: 0
              }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'story4',
            alignment: 'left',
            hidden: false,
            title: 'Monday, Sept 27: Sea Ice and Polar Bear Safety ',
            image: '',
            description: 'The team met early Monday morning at the University Center of Svalbard (UNIS) to learn safety culture on board RV Kronprins Haakon. Rupert Krapp, our instructor from the Norwegian Polar Institute, has participated in over 20 Arctic and Antarctic research cruises over the past twenty years. We learn that sea ice can be safe to walk on at a mere 10cm thickness, but 30cm is required for snowmobiles or heavier equipment.<br><br><iframe width="100%" height="315" src="https://www.youtube.com/embed/R_2aTibd328" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: { lon: 13.47772, lat: 78.32703 },
                zoom: 6.65,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'start-point',
                opacity: 1
              },
                {
                layer: 'test-shallow',
                opacity: 0
              },
                {
                layer: 'test-deep',
                opacity: 0
              },
                {
                layer: '928',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
      {
            id: 'story5',
            alignment: 'left',
            hidden: false,
            title: 'Tuesday, Sept 28: Mobilization',
            image: './images/ROVonland.jpg',
            description: 'Everyone starts to check in and unpack their gear on board Kronprins Haakon. We finally installed the new ROV. The main rig weighs 4,500 kilograms and carries an additional 6km of cables (adding 18,000 kilograms).<br><br><a href="https://www.instagram.com/p/CUaBlTXKWVC/" target="_blank">Watch video on our Instagram.</a>',
            location: {
                center: { lon: 13.47772, lat: 78.32703 },
                zoom: 6.65,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
                layer: '928',
                opacity: 1
              },
             {
                layer: 'test-shallow',
                opacity: 0
              },
                {
                layer: 'test-deep',
                opacity: 0
              },
              {
                layer: '929',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story6',
            alignment: 'left',
            hidden: false,
            title: 'Wednesday, Sept 29: Meet Aurora and Borealis',
            image: './images/baptism_photo.jpg',
            description: 'After one year of intense production work from Kystdesign and the REV Ocean operations team, the ROV is connected on board. Using an ROV can be a once in a lifetime opportunity for many researchers at sea. Hence the scientists showed up with cameras and phones for the ROV naming ceremony, where the massive 4500kg robot delicately picked up a bottle of Svalbard Prosecco and sliced the cork into the air.<br><br><iframe width="100%" height="315" src="https://www.youtube.com/embed/JJA9z0ghsBI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>The REV Ocean ROV has appropriately been named Aurora and the corresponding TMS Borealis. Next up is a shallow water test to make sure all the basic systems are working correctly.<br><br> 19:30 We start with two shallow dives at a couple of hundred meters depth in Isfjorden, off the coast of Svalbard, finishing around 21:38. A few technical calibrations to work through the following day still keep us close to Longyearbyen.',
            location: {
                center: { lon: 13.47772, lat: 78.32703 },
                zoom: 6.65,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: '929',
                opacity: 1
              },
            {
                layer: 'test-shallow',
                opacity: 1
              },
                {
                layer: 'test-deep',
                opacity: 0
              },
                {
                layer: '930',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story7a',
            alignment: 'left',
            hidden: false,
            title: 'Thursday, Sept 30: Setting Sail towards Molloy Deep',
            image: './images/Molloy3D.JPG',
            description: '&#34;Aurora will descend into Molloy Deep and be diving at approximately 3500 meters,&#34; Stefan B&#252;nz, cruise lead, informs the team the night before the test dive in Isfjorden.',
            location: {
                center: { lon: 3.14897, lat: 79.23795 },
                zoom: 4.38,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: '930',
                opacity: 1
              },
                {
                layer: '101',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story8',
            alignment: 'left',
            hidden: false,
            title: 'Friday, Oct 1: Aurora and Borealis take their first Deep Dive',
            image: './images/octopus.png',
            description: 'We reached our destination at 07:30, a few hours earlier than expected. The CTD (a conductivity, temperature, depth instrument) was deployed first to calibrate acoustic systems on board and take our first samples for the cruise.<br><br>Around 11:22, the ROV started its first deep dive; the HACON team takes bets on the expected depth for touchdown ranging from 3507 to 3690 meters. At 13:50, it hits the seabed, and the ROV team start calibrating the umbilical by unravelling the total 800 meters of TMS supporting cable. During this momentous dive, it exceeded the bets taken, reaching more than 3800 meters.<br><br>The highlight of the dive: a cirrate octopus',
            location: {
                center: { lon: 2.72746, lat: 79.63265 },
                zoom: 5.35,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'test-deep',
                opacity: 1
              },
                {
                layer: '101',
                opacity: 1
              },
                {
                layer: '102',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story9a',
            alignment: 'left',
            hidden: false,
            title: 'Saturday, Oct 2: We Reach the Ice',
            image: './images/greenland-border.jpg',
            description: 'The team wakes up for 07:30 breakfast and sees the ship heading further North on the navigation screens throughout the ship. We are already 150 nautical miles from Molloy Deep. Around 10:55, we cross Greenland waters. The depth markers on the charts become less detailed, suggesting the ocean is less surveyed in the area we´re headed. We arrive around 13:15 as the first substantial ice flows start to drift into view. A perimeter of 2 nautical miles is the last visible open water.',
            location: {
                center: { lon: 3.63119, lat: 81.44665 },
                zoom: 5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: '102',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story9b',
            alignment: 'left',
            hidden: false,
            title: 'Diving Below the Ice',
            image: './images/reaching_ice.jpg',
            description: 'At 15:00, the ROV Team prepares Aurora and Borealis to make the second deep dive on the ice edge. The ROV hits the seabed at 1700 meters at 16:00 and takes its first sample at 16:12. The team brings the rig back on deck by 17:30, and the ice has drifted to us in a short two hours.',
            location: {
                center: { lon: 3.63119, lat: 81.44665 },
                zoom: 5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: '102',
                opacity: 1
              },
                {
                layer: '103',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story9c',
            alignment: 'left',
            hidden: false,
            title: 'Listening to the Ice',
            image: './images/oct2arrival.jpg',
            description: 'During our daily 18:30 science briefing, we hear the first ice contact throughout the auditorium and lower decks. Our curiosity to see the expanse of frozen water draws people up to the observation lounge on deck nine or outside and onto the front helicopter pad on deck six.<br><br>Cruise co-lead, Eva Ramirez-Llorda, starts our nightly seminars introducing the HACON Project for the team on board and the RV Kronprins Haakon crew.<br><br>We are now 96 nautical miles to the Aurora vent field.',
            location: {
                center: { lon: 3.63119, lat: 81.84665 },
                zoom: 5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'story10a',
            alignment: 'left',
            hidden: false,
            title: 'Sunday, Oct 3: Navigating Through Ice',
            image: './images/ice_nav.jpg',
            description: 'Waking up 76 nautical miles to Aurora.<br><br>The ice is extremely thick and noticeably slows down our ship to less than 1 nautical mile per hour. Our average top speed drops to 5 nautical miles, half of our normal open water velocity. The increasing decibels correlate with our speed against ice, causing deafening crashing sounds resounding throughout the ship. Those staying in the lower deck cabins start to feel the impact of less and less sleep from the constant ice crushing against the hull overnight. A handful of scientists from the 2019 cruise lay awake with excitement, knowing that we are carving our path towards Aurora while the first ice cruise participants brace for loud impacts after each ice floe hits the vessel.<br><br>For every nautical mile closer to Aurora, we seem to go twice as far but the captains are patient.',
            location: {
                center: { lon: -2.058, lat: 82.60040 },
                zoom: 5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
                layer: '103',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story10b',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/deck_exercise.jpg',
            description: 'Approaching a week on board, we find new ways to stay active on the 100m ship. An athletic scientist initiates a stair climbing challenge called cake&#8211;to&#8211;cake. We anchor 24 hours with a daily cake break at 15:00 and start tallying how many times between cakes we climb from deck 3 to deck 9, approximately 17meters.<br><br>We head to bed with around 34 nautical miles to the Aurora Vent Field.',
            location: {
                center: { lon: -2.058, lat: 82.60040 },
                zoom: 5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: '104',
                opacity: 0
              },
                {
                layer: '103',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story11a',
            alignment: 'left',
            hidden: false,
            title: 'Monday, Oct 4: First Polar Bear Sighting',
            image: './images/bear_close.jpg',
            description: 'We managed to travel about 10 nautical miles closer to the Aurora vents overnight. At breakfast, only 24 nautical miles remained.<br><br>It is becoming comically normal to ignore the aggressive sound of the one-meter-thick ice being scraped against the side of the steel ship and crushed underneath 9000 tons. Normal seafarer instinct to such a thunderous bow banging would be to evacuate the ship. These reactions have subdued as we casually eat breakfast with a destruction soundtrack in the background and shout through meetings and presentations competing with the ice breaker.<br><br>We had our first polar bear sighting this morning. Everyone gathered on the bridge, sharing binoculars to catch a glimpse of the arctic´s top predator, less than a kilometer away.<br><br>&#34;Polar bear on port side&#34; an announcement from the bridge came at 19:30 as the ship slowed to a stop. Everyone suited up to go outdoors in -16 C to get a closer look at a Polar bear and her cub. The pair came within meters of the ship and were extremely curious.',
            location: {
                center: { lon: -5.62794, lat: 82.72023 },
                zoom: 6,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: '104',
                opacity: 1
              },
                {
                layer: 'aurora',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story11b',
            alignment: 'left',
            hidden: false,
            title: 'The Aurora Vent Field',
            image: './images/aurora3D.jpg',
            description: 'We reach Aurora and search for an open pool in the thick ice that we can deploy the ROV from. The plan is to go north and drift south on the ice (ice floe speed currently around 0.3 knots). The ROV will deploy to the seabed going ahead of the ship searching for the Aurora Vent Field. The ship will drift south to catch up, then surpass the ROV. Before long the ROV must start catching up with the ship and rise to the surface. We are hoping to play this ice drift game multiple times to collect the samples the scientists need.',
            location: {
                center: { lon: -5.62794, lat: 82.72023 },
                zoom: 6,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: '105',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story12a',
            alignment: 'left',
            hidden: false,
            title: 'Tuesday, Oct 5: The first ROV dive under ice in the Arctic',
            image: './images/ROV_Oct5.jpg',
            description: 'After two false wake-up calls at 2:30 and 4:00, the ROV gets the green light to deploy at 06:47 and lands on the seabed 3844 meters at 8:28. Twenty minutes later, we reach the Aurora Vents and get our first look at the black chimney. We manage to take a small sample of the chimney before we must ascend around 9:12.',
            location: {
                center: { lon: -6.693, lat: 82.92023 },
                zoom: 6.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: '105',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story12b',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/Biology_Sampling_1.jpg',
            description: 'Chemists get the first samples, rushing them to the freezer. Next, come the biologists searching for microscopic fauna. Lastly, the geologists take what is left of the rock to their lab to dry it for later processing and analysis on shore. Everyone is very considerate with their equipment, careful that their inspection does not compromise the next scientists down the line.',
            location: {
                center: { lon: -6.693, lat: 82.92023 },
                zoom: 6.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story12c',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/Carving_Ice.jpg',
            description: 'Diving to depths of nearly 4km in -1C is challenging, and the oil from the ROV has been having a difficult time with the cold temperature, making the hydraulics slower. Outside of the Arctic, deep sea water temperatures range from 2-4C, highlighting the risk involved with this particular deep sea expedition. The ROV team is quick to find a solution. The ship repositions North of the vent fields, and we prepare for our second dive of the day at 16:00.',
            location: {
                center: { lon: -6.693, lat: 82.92023 },
                zoom: 6.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: '106',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story13',
            alignment: 'left',
            hidden: false,
            title: 'Wednesday, Oct 6: Glass under pressure',
            image: './images/Glass_Sponges.jpg',
            description: 'Our scientific investigations on the Aurora seamount continue. I am searching for seafloor communities that live at the periphery of the vents.<br><br>Meters from a black smoker, glass sponges have chosen a home on exposed basalt rock, under pressure 400 times greater than that at sea level. Their bodies are made of silicon absorbed from the sea water which gives them a fiberglass feel.  They live off very little, grow slowly, and have a long life, possibly hundreds of years. Sponges are not vent species but maybe they are benefiting from increased food from the neighboring vents.<br><br>Deep-sea sponge communities are hotspots of biodiversity and biomass. They enhance nutrient cycles and provide habitat to bottom-dwelling fish and invertebrates.<br><br>Here you can see dead stalks, baby and adult glass sponges. The dead stalks can structurally support the next generation of sponges. But where do these baby sponges come from? We have not yet found glass sponge larvae at this depth. Do they reproduce asexually?<br><br>With the help of high-resolution video and sponge collection we can learn more about these communities. Working under the drifting ice is challenging. We can only remain at the seafloor for short periods of time. It will take several ROV dives until we are able to document all the fauna. Next on my list is the elusive carnivorous sponge.<br><br>Pedro A. Ribeiro, Associate Professor, Department of Biological Sciences, University of Bergen',
            location: {
                center: { lon: -6.693, lat: 82.92023 },
                zoom: 8.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: '106',
                opacity: 1
              },
                {
                layer: '107',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story14',
            alignment: 'left',
            hidden: false,
            title: 'Thursday, Oct 7: Shades of Mud',
            image: './images/shades_of_mud.jpg',
            description: 'The colour of mud can be surprisingly exciting, if you ask the right person. The Hacon 2021 expedition collected the first mud samples today and subsequently geologists aboard were particularly happy. Different spots in the ocean have different mud characteristics, including colour and consistency, which hint toward the processes in the area forming and depositing the mud. For example, many round quartz grains can indicate that the particles composing the mud have come a long way. Many settings have (subjectively) quite boring grey-ish mud so the orange-gold mud with black streaks we sampled from the seafloor around the Aurora vent field today elicited some serious excitement. Minerals transported from deep in the crust to the seafloor by hydrothermal circulation are clearly influencing the colours of our Aurora-mud. Understanding the mud at the Aurora vent field, including the exact cause for the colour and consistency will help us understand the history of venting at the site and also will help us understand the connection between the vents and fauna living nearby.<br><br>By Kate Waghorn and Claudio Argentino, Post Doctoral Fellows, Gas Hydrate and Free Gas Reservoirs research group, CAGE UiT The Arctic University of Norway: .',
            location: {
                center: { lon: -6.693, lat: 82.92023 },
                zoom: 7.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: '107',
                opacity: 1
              },
                {
                layer: '108',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story15',
            alignment: 'left',
            hidden: false,
            title: 'Friday, Oct 8: Polluted with Life',
            image: './images/Biology_Sampling_2.jpg',
            description: '&#34;Polluted with life&#34; the geologists claim as they look at the vents full of shrimp-like creatures and little snails. These incredible species thrive in ambient sea water next to vents with temperatures as high as 400 degrees Celsius, 4km deep under permanent Arctic ice.<br><br>After travelling across a stunning landscape of deep-sea sponges, we approach the active Aurora Vent Field. Fluids, resembling black smoke, rise from the earth’s crust in a forest of chimneys. Our objective on this dive is to retrieve animal samples. Once ROV Aurora is in position, the pilots use a suction sampler (read: hoover), to snatch those little beasties into a chamber at the back of the ROV. We sample over a thousand animals (less than two centimetres big) from three different active vents.  These samples will tell us who eats who in the vent field. How do these animals reproduce? Do they have ancestors from other vent fields?<br><br>Biologists will focus on understanding if these animal communities are unique from those found on the Arctic Mid-Ocean Ridge system, up to 1000 kilometres away, or other sites around the world. What geological events in the past might have allowed them to develop independently on the Aurora Vent Field below ice? These animals have the potential to reshape our knowledge on the biodiversity of vents.<br><br>As it now stands, ice is no longer the limit for deep-sea researchers.<br><br>By Lissette Victorero, Post-Doctoral Research Fellow, Norwegian Institute for Water Research, Norway and University of Aveiro, Portugal.',
            location: {
                center: { lon: -6.693, lat: 82.92023 },
                zoom: 7.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: '108',
                opacity: 1
              },
                {
                layer: '109',
                opacity: 0
              },
                {
                layer: '1010',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story17',
            alignment: 'left',
            hidden: false,
            title: 'Sunday, Oct 10: Big syringe, tiny bugs',
            image: '',
            description: 'For the past year I have been working with microbial sequence data from the deep sea without ever having collected it myself. At least not until this trip to the Arctic.<br><br>Today´s dive was a gleaming success with sample collection for chemistry, geology, and biology. ROV Aurora already had its hands full with fluid samplers and the suction sampler designed for animal collection. This dive, the ROV was juggling an additional tool: its left arm bore two &#34;biosyringes.&#34;  Capable of collecting volumes up to one liter each, these jumbo-sized syringes were deployed with the goal of collecting microbial mats off the side of the Hans Tore vent crater. Microbial mats are a unique environment, acting as both a scaffold and a haven for a large diversity and abundance of microbes. It can be tricky to sample these delicate mats effectively – the biosyringe’s snorkel is the perfect tool for the job.<br><br>When the ROV arrives back on deck with the deep-sea samples, the microbiology team heads to the environmental lab. Here I scrape chimney rocks and split up the material from the biosyringes into small vials to immediately freeze at -80 C. A single sample vial often contains hundreds of different microbial types. I am interested in discovering who they are and how their cells are powered in the vent environment by analyzing the microbial DNA. As a bioinformatician, this is where my specialty comes in.<br><br>This post-processing happens back on land. Joining this field mission on an icebreaker in the Arctic seems very far from the job description for a bioinformatician. Gaining an overview on how sampling works gives me a greater understanding and appreciation for the sampling challenges and variability of the final outcome &#8212; the DNA sequence data.<br><br>Transporting the samples we collect from under Arctic ice to the end of the data pipeline, discovering how the microbial world functions at this vent enables potential discoveries in places we have not been able to access before.<br><br>Emily Olesin Denny, MSc., Marine microbiologist &#38; bioinformatician, PhD candidate, University of Bergen, Norway',
            location: {
                center: { lon: -6.693, lat: 82.92023 },
                zoom: 7.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: '109',
                opacity: 1
              },
                {
                layer: '1010',
                opacity: 1
              },
                {
                layer: '1011',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story18',
            alignment: 'left',
            hidden: false,
            title: 'Monday, Oct 11: Sampling under Pressure!',
            image: './images/Story18.jpg',
            description: 'To imagine the crushing pressures at Aurora, a 4km high stack of water jugs sitting on your head comes to mind. Yet, at these extreme conditions, hot, high pressure liquid spewing from the seafloor is a veritable oasis for microbial life and a hotspot of seafloor mineral formation. Sampling the &#39;black smoker&#39; fluids venting here is therefore critical for us to make key predictions of the types of mineral deposits forming at the site, and the very nature of the chemical fuels feeding the ecosystem present here.<br><br>To understand exactly what life thrives on at Aurora and the types of mineral deposits, we first need to understand how these fluids are formed i.e. their chemical make-up. We use specialised samplers called &#39;IGTs&#39; (Isobaric Gas Tight samplers) to collect fluids (and measure their temperatures) directly from inside the hot chimney structures. These titanium devices preserve the fluid samples at 400 atmospheres (seafloor pressure), without any loss of gases &#8211; many of which are fuels for life. Fully characterizing the chemistry of the fluids on board involves analysing different compounds in these fluids, and preserving samples for back on land. Much like forensic scientists, we seek to understand the fluid’s history before it vented, and what the &#39;flavour&#39; of this fluid is. We do this by measuring various gas, element, and compound concentrations in the small samples we take, giving us a better understanding and helping to explain why life can thrive in this desolate crushing environment.<br><br>Samuel Pereira, PhD Candidate and Eoghan Reeves, Associate Professor, Aqueous Geochemistry, Department of Earth Science, University of Bergen',
            location: {
                center: { lon: -6.693, lat: 82.92023 },
                zoom: 7.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: '1011',
                opacity: 1
              },
                {
                layer: 'greenland',
                opacity: 0
              }                
            ],
            onChapterExit: []
        },
        {
            id: 'story19',
            alignment: 'left',
            hidden: false,
            title: 'Tuesday, Oct 12: Farewell Aurora, next stop Greenland',
            image: './images/haircut.jpg',
            description: 'Yesterday afternoon we left the Aurora Vent Field for NE Greenland. As ROV Aurora swam back towards the vessel and we saw, for the last time, the beautiful black smoker get smaller and smaller on our screens, a hundred emotions came flowing in: a great sense of achievement, teamwork, relief, happiness and even disbelief. This has been the most challenging cruise I have ever done, which makes the incredible results even more rewarding. For over 4 years, a team from multiple countries, with very different backgrounds have been working to make this happen. This team, the ROV team, the Captain, Officers and Crew of the RV Kronprins Haakon icebreaker have turned these efforts into reality. We exceeded all our expectations, managing 6 successful ROV dives on the Aurora Vent Field. We have samples for all the scientific teams, which will tell a great story of deep hydrothermal vents under Arctic ice.<br><br>How they are formed and how do they evolve?<br><br>Which animals live there? Are they linked (or not) to other deep-sea animals outside of the Arctic Ocean?<br><br>Early in the cruise, I accepted a challenge: if we have 5 successful dives on the vents, I will cut my long hair short. We had 6 successful dives… so yesterday, Maria took a pair of scissors and off went my hair, with the finishing touches of Carolina’s expert hands. The result is quite good, and the success of this first part of the cruise really worth the hair cut!<br><br>Eva Ramirez Llodra, Science Coordinator, REV Ocean, Marine Ecologist',
            location: {
                center: { lon: -2.99170, lat: 82.92023 },
                zoom: 4,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'aurora',
                opacity: 1
              },
                {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story20',
            alignment: 'left',
            hidden: false,
            title: 'Wednesday, Oct 13: Black Smokers discovered and named',
            image: './images/Ice_planets.jpg',
            description: 'As ROV AURORA&#39;s lights illuminated the previously unseen black smokers the team was faced with a challenge. What should we name them? Naming is an important process in scientific discovery for researchers to reference and differentiate locations on the explored site in their peer-reviewed papers.<br><br> Various themes were discussed, from arctic animals, to exploration vessels, to historical explorers.<br><br>We wanted the names to represent the magnitude of our work at Aurora. Assistance came from Patrick, a Scottish Primary School student, who suggested naming the vents after the icy moons on which hydrothermal activity has been observed or believed to occur. Some scientists hypothesise that life on Earth originated around hydrothermal vents. If vents exist on other planets or moons it would be the best place to start addressing a fundamental question: &#34;Does life exist elsewhere in the universe?&#34;<br><br>Looking across the Arctic expanse it is not hard to imagine it as an ice planet with life nestled around these warm vents. Perhaps the answers to the mysteries of life in the universe are to be found not in outer space, but in Earth’s inner space &#8212; the Ocean.<br><br>Named after one of Saturn&#39;s icy moons, the ENCELADUS black smoker was discovered at 82.89, -6.25. ENCELADUS is recognised as one of the most likely planets in our solar system to support life in its icy ocean, especially around vents. The second black smoker, discovered around 5 meters away, was named Ganymede after Jupiter&#39;s icy moon.<br><br>Leighton Rolley, Science Systems Manager, REV Ocean',
            location: {
                center: { lon: -6.25413, lat: 81.25154 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story21',
            alignment: 'left',
            hidden: false,
            title: 'Thursday, Oct 14: Ice break',
            image: './images/ice_break.jpg',
            description: 'We transit via Molloy Deep due to a need to unravel and reset the CTD winch at depths greater than 4000m. We use this opportunity to recalibrate the DVL (Doppler Velocity Log) with help of the water density measurement from the CTD.<br><br>While we work on refining these technical components, we log our longest ROV dive to date, eight hours. We sample a few sponges and rocks and reflect on how spoiled we´ve been viewing a hydrothermal vent dive after dive at Aurora. It has been a short 24 hours without ice and despite a restful night, most people look forward to meeting the ice edge again tomorrow.<br><br>Before we left the ice cover, we managed to let down the gangway and step onto the sea ice for some Arctic volleyball and soccer.',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story22',
            alignment: 'left',
            hidden: false,
            title: 'Friday, Oct 15: Back to Ice',
            image: './images/Nils_Bridge.jpg',
            description: 'At sea, the quickest route is normally the shortest route. Here in the Arctic Ice, it is different. I am on the HACON cruise to learn from the experienced ice breaker crew.<br><br>Traveling through the ice leads (small ice openings amongst two-meter-thick ice), is not easy. Predicting the time of arrival to the Aurora Vent Field requires both luck and skill. Often when we identify an ice lead, we end up going the wrong direction. Other times we have to transit the wrong direction to get to the site.<br><br>It is not easy to operate in these extreme conditions. The weather can shift very quick. During the day the risk of fog is imminent. At night it is hard to see where we should go.<br><br>We are at the mercy of the ice drift, as result of wind, currents and tides. Sometimes the ice opens in highways, other times it closes and seems like small Norwegian country roads, with the risk of a dead end ahead.<br><br>Some ice sheets are denser and thicker, and when the ice meets, it makes shelves that are hard to get through. The sound of the ship going through thick ice is not natural. It sounds like it is in pain, or someone using the fingernails on a chalkboard. The ship is shaking and moving around in irregular patterns. We get used to it and accept it, but it will never be normal.<br><br>The ship is technically very advanced with equipment resembling GPS. We have ice maps and ice radar but despite these navigation aids some aspects of ice operations you learn by experience.<br><br>Nils Baadnes, Captain, REV Ocean',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story23',
            alignment: 'left',
            hidden: false,
            title: 'Saturday, Oct 16: Meet our doctor at sea',
            image: './images/Pascal.jpg',
            description: 'A few months before the HACON21 Cruise, Eva asked me if I wanted to join as the medical doctor on board. The cruise would work in a remote location covered by sea ice in the High Arctic, away from helicopter range. A doctor was highly recommended, particularly as we were still in a covid 19 situation. Before departure, I had to organise my work and family commitments, investigate the medical equipment and logistics on board, and immerse myself in English conversations with a teacher.<br><br>Welcoming international participants to the cruise, Eva and I decided it was best for a mandatory PCR test before arriving in Longyearbyen in addition to the IMR requirement 24 hours before embarking on the vessel. The days before departure were worrying for me; I envisioned all the severe medical problems we may encounter while out of hospital range. Once we set sail, I had to find my role on board within a hard-working team. Before long I was hooked on all the scientific activities, integrating with the group, welcomed into the labs where samples were being processed, allowing me to contribute to the project and feel a part of the team. Experiencing the ROV dives with science commentary was exciting and interesting. I was actually surprised at how busy I have been. Between ROV dives, delicious meals, science talks, gym, reading, admiring the amazing ice environment, practising my English and chatting to people, my medical work was luckily not that difficult!<br><br>Pascal',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story24',
            alignment: 'left',
            hidden: false,
            title: 'Sunday, Oct 17: Birthdays on board',
            image: './images/birthday.jpg',
            description: 'Weeks with little to no connection to the news, work emails, and social media. Short days with indistinguishable sunrises from sunsets. Lack of land routines. Being in the Arctic on a vessel can feel like a time warp. The day of the week borders irrelevance until we have a birthday on board. During our cruise, we have celebrated five. Kristina, the head chef, and a few artistic scientists (Emily and Marie) help decorate personalized cakes, and we sing a competing chorus of Happy Birthday in nine or more languages.',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story25',
            alignment: 'center',
            hidden: false,
            title: 'Monday, Oct 18: Putting my name on the map',
            image: './images/ice_leads.jpeg',
            description: '&#34;What an easy target&#34; I thought naively, when I saw how sparsely mapped the Northeast Greenland shelf was. Why hasn’t anyone mapped this part of the ocean like we have mapped the Barents Sea?<br><br>To answer my question, in a weak moment, I decided to join the HACON21 cruise to put my name on the map. The cruise objectives:<br><br>1) test dive in the Molloy deep<br><br>2) document and sample the Aurora vent site<br><br>and last but also least<br><br>3) to map the NE Greenland shelf seafloor<br><br>On our way to NE Greenland shelf, it turns out, there IS a reason why people haven’t mapped this part of the world yet. We reached my target area after 30 hours and over 200 km of crushing through thick ice. Turns out that seafloor mapping while crushing ice isn’t easy either, ice pulled underneath the ship interfering, creating data noise that reduces the quality.<br><br>The only way to get good enough data was to go with the ice, not against it. The best way to do this was to use the leads, areas of open water or thin ice, to simply travel back and forth, collecting data. As the leads drifted south, we drifted with them mapping the seafloor beneath us.<br><br>The idea worked great, but it makes for some funny looking surveys. Just as I started writing my name in high-resolution bathymetry, our lead closed and forced us south, out of my study area.<br><br>Frank W. Jakobsen, PhD candidate, UiT The Arctic University of Norway',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story26',
            alignment: 'center',
            hidden: false,
            title: 'Tuesday, Oct 19: Tiny Arctic worms make their way to a lab in Portugal',
            image: './images/Sofia.jpg',
            description: 'Packing our Aurora samples made us reflect on this extraordinary expedition. At the end of the 2019 Aurora expedition, we left the ship with a metal box full of incredible sediment samples. These samples helped us study the tiny animals living between the sediment particles – so small they are usually only visible under a microscope. These small animals are called meiofauna. Marine sediments are home to many different meiofauna animals, but the most abundant group found are the nematodes – tiny worms less than 1mm long. Nematodes come in many shapes and sizes, but they are often forgotten among the larger animals of the sea. Our initial findings from Aurora showed that they can thrive at the Aurora, 4000 m below the ice, where food is extremely scarce. However, the tale of these tiny worms is incomplete.<br><br>New samples collected from the Aurora vent field during HACON 2021 expedition will help to complete the tale. Now we will go back to the lab and finish writing the story of the Aurora nematodes. Our studies will help us understand what species live at Aurora, whether they are close or distant relatives of other vent nematodes and finally, how these tiny worms survive the harsh conditions at Aurora.<br><br>Sofia Pinto Ramalho, Assistant researcher, CESAM, Universidade de Aveiro, Portugal',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story27',
            alignment: 'center',
            hidden: false,
            title: 'Wednesday, Oct 20: From Pole to Pole, then and now',
            image: './images/image003.png',
            description: 'The last time I set sail on a research vessel was over 20 years ago in the Antarctic. I was completing research exploring the connection between animals living on the deep seafloor and those in the upper water column. Over the years, I have been lucky enough to join a variety of teams exploring life in our deep ocean across the globe including the Gulf of Mexico, the East Pacific Rise, the North-East Atlantic, the Bahamas and the South China Sea. One of my most thrilling experiences was to dive in human occupied submersibles (HOVs) hundreds of meters below the surface to watch, record and sample the incredible life that is happening, mostly out of sight.<br><br>It was on these travels I met Eva and Ana…<br><br>Since then, we have been working at the interface of science and policy as co-lead for the Deep-Ocean Stewardship Initiative. Most recently we developed the UN Ocean Decade programme Challenger 150. In a few months the program has already begun hosting cruises, the HACON expedition being the fourth.<br><br>After 20 years of choosing to be land-based, am I happy to be back at the chilly, wobbly, noisy, and messy end of deep-sea science? ABSOLUTELY! I was thrilled to be invited to contribute to this &#34;high risk/high gain&#34; expedition that we had discussed many years previously as part of the Census of Marine Life programme. To undergo sea-ice safety and polar bear training, board a state-of-the-art Norwegian ice-breaker with all the comforts you can imagine, experience the immense clatter, thunderous roar, and high-pitched metal on metal scraping as the ship carved through the ice sheet (thank goodness I was warned!), help out with data logging and sample processing, feel the thrill of historic discovery, meet many fabulous people and learn so much from deep-sea scientists from disciplines other than my own&#8212;a renaissance of adventures at sea.<br><br>Maria Baker, University of Southampton, UK',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
             {
            id: 'story28',
            alignment: 'center',
            hidden: false,
            title: 'Thursday, Oct 21: The rocks tell a story…',
            image: './images/Rocks tell a story.jpg',
            description: 'When the hot hydrothermal fluids flow deep under the seafloor, they dissolve and transport minerals from the volcanic rocks. When the fluids reach the seafloor, they mix with cold seawater, which causes the dissolved minerals to precipitate. These minerals gradually accumulate at the vents, forming the chimneys and mounds that we see on the seafloor. The black smoke from the chimneys is also composed of tiny minerals that form when fluids mix with seawater. The accumulation of these minerals provides a record of the history of hydrothermal venting at Aurora.<br><br>The HACON 2021 expedition is the first to collect rock samples from the Aurora vent field using an ROV. We collected 15 samples of several different rock types, including pieces of chimney walls, pieces of old collapsed chimneys, and small iron-rich chimneys constructed by microbes that live near the hot vents.<br><br>With the samples collected during this expedition, we will analyze the age and composition of the vent deposits to understand: 1) the relationship between the composition of the chimneys and the composition of the fluids and underlying volcano; 2) for how long has hydrothermal activity been occurring at Aurora; 3) if and when the location of venting and the composition of the vent fluids changed over time. <br><br> John Jamieson Canada Research Chair in Marine Geology and an assistant professor in the Department of Earth Sciences, Memorial University,Canada.',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story29',
            alignment: 'right',
            hidden: false,
            title: 'Friday, Oct 22: My first research cruise',
            description: 'I received a phone call on August 30th at 13:00<br><br>"Do you want to go to the Arctic?"<br><br>"YES!"<br><br>I have wanted to be a marine biologist since I was six years old. Having the chance to go to the Arctic on my first cruise is a privilege. The weeks before joining the cruise were a rush, with many documents to prepare, medical certificate, passport, but I was super excited to join the ship. Unfortunately, my first days on board were not very good. It took me three days to adjust to the ship movement. Ginger crystals, crackers, advice from other colleagues and a few extra hours of sleep made the difference.<br><br>Most of our work was dependent on the ice conditions, so we had to be prepared for an ROV dive, a CTD, or a push core at any time. However, this cruise had the right balance between work and play. During our time off, we had a lot of activities, including volleyball (one of my favourite sports), karaoke, movies and card games.<br><br>I also managed to work on my master thesis on collecting species for a new database from the latest discoveries on cold seeps. The last database on cold seeps was created in 2006 by the ChessBase project, where Maria Baker and Eva Ramirez Llodra were part of the leading group. It was a privilege to meet them in person during this cruise and get to know them beyond the science.<br><br>It was great to meet other scientists with different backgrounds, learn about their work, and relate those concepts with my own. An incredible experience that I´ll never forget…and that I hope to repeat.<br><br>Carolina Ventura Costa<br><br>Universidade de Averio, Portugal<br><br><iframe width="100%" height="315" src="https://www.youtube.com/embed/a4NGA3XMqcs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story30',
            alignment: 'right',
            hidden: false,
            title: 'Saturday, Oct 23: Some of your finest bottle, please.',
            image: './images/Marie.jpg',
            description: 'When I filled out paperwork to get my precious samples shipped back from the harbor of Longyearbyen to Tromsø, I had to give an estimate of their value.<br><br>“Invaluable!” was my first thought.<br><br> I wrote some steep numbers down and thought of the border officer’s surprise when they read that the shipment contained merely vials of… seawater.<br><br>This water is more special than the finest of Bordeauxs: coming from directly above the Aurora vents, under the ice.<br><br> My CAGE (UiT) team aim to understand how nutrients and carbon compounds necessary for microbial life are distributed in the water column and how hydrothermal fluid affects this distribution. For this, we need special sampling bottles, called Niskin bottles, mounted on a frame with a Conductivity (for salinity)-Temperature-Depth sensor. Together, these apparatuses form the CTD rosette, which gives us both the physical properties of the water column and the ability to sample water at various depths.<br><br>Special situations, such as ice cover, require special means. In this case, ROV Aurora lent me a hand underwater to sample the dark hydrothermal plume into a Niskin bottle a couple of meters above the vent, at 3800m depth. This bottle turned out to be one of my finest!<br><br>Marie Stetzler, PhD candidate, UiT The Arctic University of Norway',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story31',
            alignment: 'right',
            hidden: false,
            title: 'Sunday, Oct 24: A tribute to a team',
            image: './images/team photo on ice.jpg',
            description: 'This expedition started two years ago after the first HACON cruise in 2019. We recognized what we could do on the Aurora Vent site, but technical challenges resulted in unfulfilled sampling needs. What followed were two years of great uncertainty and numerous challenges. Yet here we are, a team bonded by that experience and with great mutual support. A group of intelligent, skilled, passionate and motivated people worked together to achieve something nobody had done before.<br><br>When we sailed out on 30th September, everyone was well aware of the challenges that lay ahead. Accessing and sampling an area the size of a few ping pong tables in the vastness of the Arctic Ocean at 4000 m water depth under the ice is no small feat. The ethereal beauty of the ice in the Arctic Ocean is breathtaking, yet it influenced and dictated our every move on an hourly basis. Getting the vessel back in a good position required patience and persistence. The officers on the bridge were tirelessly working the ice. Their endurance and perseverance cannot be understated.<br><br>It took great patience, understanding and flexibility from a team of ROV pilots who were of utmost crucial to the success of this expedition. Adept and skilful in collecting samples at the bottom of the Arctic Ocean, they also were calm as the sea ice, in which they were locked in. It appeared like our results were never in doubt.<br><br>Every member on board this expedition is excellent on their own; together, they are exceptional. It was truly an honor to lead a team of individuals greater than the sum of their parts and work well together to accomplish something remarkable.<br><br>This voyage is a historic achievement that will last in our memory forever, especially for the outstanding teamwork and fantastic atmosphere. Collaborations and friendships are ongoing or just beginning, and we’ve learned a lot about ourselves and others while on this journey. Looking at the wonderful photos from our expedition will always put a smile on our faces.<br><br>Stefan Bünz, Chief Scientist',
            location: {
                center: { lon: -0.46579, lat: 79.42825 },
                zoom: 4.5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'greenland',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
      {
            id: 'full-route-close',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<b>Stay tuned for more updates from REV Ocean as the expedition continues...</b>',
            location: {
                center: { lon: -5.18003, lat: 80.72944 },
                zoom: 3.53,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
