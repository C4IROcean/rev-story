var config = {
    style: 'mapbox://styles/oceandatafoundation/cku5gar6i283z18l6xsl9yge2',
    accessToken: 'pk.eyJ1Ijoib2NlYW5kYXRhZm91bmRhdGlvbiIsImEiOiJja3U1Z2Ezem80endhMm9tcHowZ2JqMGpiIn0.HHbtd4QIaBqfTzcZncxDYA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'HACON',
    subtitle: 'Hot Vents in an Ice-Covered Ocean',
    byline: 'led by UiT (CAGE) and NIVA',
    footer: 'Thank you to Marena Brinkhurst of the Mapbox Community Team for helping us build and update this story as the expedition continues.',
    chapters: [
        {
            id: 'story1',
            alignment: 'left',
            hidden: false,
            title: 'What is the cruise?',
            image: '',
            description: 'Stefan B&#252;nz from the University of Tromso: Centre for Arctic Gas Hydrate, Environment and Climate and Eva Ramirez-Llodra, from the Norwegian Institute for Water Research, last visited the Aurora Hydrothermal Vents in 2019.<br><br>These vents were discovered in 2014 during the German AURORA cruise led by Prof Antje Boetius (AWI) on board Polarstern and were visited for a second time during the HACON19 cruise (see the 2019 cruise <a href="https://haconfrinatek.com/blog/" target="_blank">blog</a> and <a href="https://haconfrinatek.com/2020/01/20/hacon-cruise-report/" target="_blank">report</a>). However, until today, no ROV has been able to dive successfully to the vent field, at 4000 m depth under permanent ice cover.',
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
              },
                {
                layer: 'start',
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
            description: 'B&#252;nz and Ramirez-Llodra are leading a <a href="https://haconfrinatek.com/hacon2021/" target="_blank">team</a> of 17 scientists 82.5 degrees north to the Arctic in search for the Aurora Hydrothermal Vents. The team of scientists represent 13 different nationalities: German, Italian, French, Norwegian, New Zealand, Irish, Portuguese, American, Finnish, British, Canadian, Spanish, and Indian.',
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
              },
                {
                layer: 'start',
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
            description: 'The team arrived on Friday, September 24th to start preparing the Remotely Operated Vehicle (ROV) and Tethered Management System (TMS) for its first expedition. Oil checks, cables connected, science skid and 4K camera installed.<br><br>(Image, from left) Patrick V&#229;genes, J&#246;rn Patrick from Havforskningsinstituttet, Stig V&#229;genes from University of Bergen, Leighton Rolley from REV Ocean.',
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
              },
                {
                layer: 'start',
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
            description: 'The team met in the early Monday morning at the University Center of Svalbard (UNIS) to learn safety culture onboard RV Kronprins Haakon. Rupert Krapp, our instructor from the Norwegian Polar Institute has participated in over 20 the Arctic and Antarctic research cruises over the past twenty years. Amazing to find out from him that sea ice can potentially be safe to walk on at a mere 10cm thickness, but you would need at least 30cm for snowmobiles or heavier equipment.<br><br><iframe width="100%" height="315" src="https://www.youtube.com/embed/R_2aTibd328" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
                layer: 'start',
                opacity: 0
              },
                {
                layer: 'sailing-half',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
      {
            id: 'story5',
            alignment: 'left',
            hidden: false,
            title: 'Tuesday, Sept 28: Onboarding and Mobilization',
            image: './images/ROVonland.jpg',
            description: 'Everyone starts to check-in and unpack their gear onboard Kronprins Haakon. We finally installed the new ROV. The main rig weighs 4,500 kilograms and carries an additional 6km of cables (adding 18,000 kilograms).<br><br><a href="https://www.instagram.com/p/CUaBlTXKWVC/" target="_blank">Watch video on our Instagram.</a>',
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
                layer: 'test-shallow',
                opacity: 0
              },
                {
                layer: 'test-deep',
                opacity: 0
              },
                {
                layer: 'start',
                opacity: 0
              },
                {
                layer: 'sailing-half',
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
            description: 'After one year of intense production work from Kystdesign and the REV Ocean operations team, the ROV is connected onboard and springs to life. There was tremendous excitement amongst the scientists, who all showed up with cameras and phones for the ROV naming ceremony. Using an ROV can be a once in a lifetime opportunity for many researchers at sea. The ROV Titan arm delicately picked up a bottle of Svalbard Prosecco and elegantly sliced the cork into the air with cheers and whistling all around!<br><br><iframe width="100%" height="315" src="https://www.youtube.com/embed/JJA9z0ghsBI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>The REV Ocean ROV has appropriately been named Aurora, and the corresponding TMS Borealis. Next up is a shallow water test to make sure all the basic systems are working properly.<br><br>19:30 We start with two shallow dives at a couple of hundred meters depth in Isfjorden, off the coast of Svalbard, finishing around 21:38. A few technical calibrations to work through the following day still keeps us close to Longyearbyen.',
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
                layer: 'test-shallow',
                opacity: 1
              },
                {
                layer: 'test-deep',
                opacity: 0
              },
                {
                layer: 'start',
                opacity: 1
              },
                {
                layer: 'sailing-half',
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
            description: '&#34;Aurora will descend into the Moll&#248;y Deep and be diving at approximately 3500 meters,&#34; Stefan B&#252;nz, cruise lead, informs the team the night before the test dive in Isfjorden.',
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
                layer: 'sailing-half',
                opacity: 1
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
            description: 'We reached our destination at 07:30, a few hours earlier than expected. The CTD was deployed first, taking our first samples for the cruise.<br><br>Around 11:22 the ROV started its first deep dive, the HACON team takes bets on the expected depth for touchdown ranging from 3507 to 3690. At 13:50 it hits the seabed, and the ROV team start calibrating the umbilical by unravelling the full 800 meters of TMS supporting cable. During this momentous dive, it exceeded all expectations reaching more than 3800 meters.<br><br>The highlight of the dive was seeing a cirrate octopus!',
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
                layer: 'sailing',
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
            description: 'The team wakes up for 07:30 breakfast and can see the ship is heading further North on the onboard tv screens. We are already 150 nautical miles from the Molloy Deep. Around 10:55 we cross over into Greenland territorial waters. The depth markers on the bathymetry charts start to become less detailed, suggesting the ocean is less surveyed in the area we´re headed. We arrive around 13:15 as the first very large ice flows start to drift into view. A perimeter of 2 nautical miles is the last visible open water.',
            location: {
                center: { lon: 4.13119, lat: 81.44665 },
                zoom: 5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'sailing',
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
            description: 'At 15:00 the ROV Team prepares Aurora and Borealis to make the second deep dive on the edge of the ice. The ROV hits the seabed at 1700 meters at 16:00 and takes its first sample at 16:12. They team brings the rig back on deck by 17:30 and in a short two hours the ice has drifted almost completely all around us.',
            location: {
                center: { lon: 4.13119, lat: 81.44665 },
                zoom: 5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'sailing',
                opacity: 1
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
            description: 'During our daily 18:30 science briefing we can hear the increasingly loud scraping and crunching sounds of bigger and bigger chunks of ice throughout the auditorium and lower decks. Our curiosity to see the expanse of frozen water draws people up to the observation lounge on deck 9 or outside and onto the front helicopter pad on deck 6.<br><br>Cruise co-lead, Eva Ramirez-Llorda, starts our nightly seminars with an introduction to the HACON Project for the team on board and the crew.<br><br>We are now 96 nautical miles to the Aurora vent field.',
            location: {
                center: { lon: 4.13119, lat: 81.84665 },
                zoom: 5,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'sailing',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story10a',
            alignment: 'left',
            hidden: false,
            title: 'Navigating Through Ice',
            image: './images/ice_nav.jpg',
            description: 'Waking up 76 nautical miles to Aurora.<br><br>At times the ice is extremely thick and noticeably slows down our ship to less than 1 nautical mile per hour. Our average top speed drops to 5 nautical miles, which is half of our normal open water velocity. The increasing decibels correlate with our speed against ice, causing deafening crashing sounds resounding throughout the ship. Those staying in the lower deck cabins start to feel the impact of less and less sleep from the constant ice crushing against the hull overnight. A handful of scientists from the 2019 cruise lay awake with excitement knowing that we are carving our path towards Aurora while the first ice cruise participants brace for loud impacts after each ice floe hits the vessel.<br><br>For every nautical mile closer to Aurora, we seem to go twice as far but the captains are patient.',
            location: {
                center: { lon: 5.32937, lat: 82.60040 },
                zoom: 6,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
                layer: 'sailing',
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
            description: 'Approaching a week onboard we find new ways to stay active on the 100m ship. An athletic scientist initiation has turned into a stair climbing challenge, cake&#8211;to&#8211;cake. We anchor 24 hours with a daily cake break at 15:00 and start tallying how many times we climb from deck 3 to deck 9, approximately 17meters.<br><br>We head to bed with around 34 nautical miles to the Aurora Vent Field.',
            location: {
                center: { lon: 5.32937, lat: 82.60040 },
                zoom: 6,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
                layer: 'sailing',
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
            description: 'We managed to travel about 10 nautical miles closer to the Aurora vents overnight. At breakfast only 24 nautical miles remained.<br><br>It is becoming comically normal to ignore the aggressive sound of the one-meter-thick ice being scrapped against the side of the steel ship and crushed underneath 9000 tons. Normal seafarer instinct to such a thunderous bow banging would be to evacuate ship. These reactions have subdued as we casually eat breakfast with a destruction soundtrack in the background and shout through meetings and presentations competing with the ice breaker.<br><br>We had our first polar bear sighting this morning. Everyone gathered on the bridge, sharing binoculars to catch a glimpse of the arctic´s top predator, less than a kilometer away.<br><br>&#34;Polar bear on port side&#34; an announcement from the bridge came at 19:30 as the ship slowed to a stop. Everyone suited up to go outdoors in -16 C to get a closer look at a Polar bear and her cub. The pair came within meters of the ship and were extremely curious.',
            location: {
                center: { lon: 3.92794, lat: 82.92023 },
                zoom: 6,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'sailing',
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
            description: 'We reach Aurora and search for an open pool in the thick ice that we can deploy the ROV from. The plan is to go north and drift south on the ice (ice floe speed currently around 0.3 knots). The ROV will deploy to the seabed going ahead of the ship in search for the Aurora Vent Field. The ship will drift south to catch up, then surpass the ROV. Before long the ROV must start catching up with the ship and rise to the surface. We are hoping to play this ice drift game multiple times to collect the samples the scientists need.',
            location: {
                center: { lon: 3.92794, lat: 82.92023 },
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
            description: 'After two false wake-up calls at 2:30 and 4:00, the ROV gets the green light to deploy at 06:47 and lands on the seabed 3844 meters at 8:28. Twenty minutes later we reach the Aurora Vents and get our first looks at the gorgeous black chimney. We manage to take a small sample of chimney before we must ascend around 9:12.',
            location: {
                center: { lon: 3.92794, lat: 82.92023 },
                zoom: 6,
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
            id: 'story12b',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/Biology_Sampling_1.jpg',
            description: 'Chemists get the first samples, rushing them to the freezer. Next come the biologists searching for microscopic fauna. Lastly the geologists take what is left of the rock to their lab to dry it for later processing and analysis on shore. Everyone is very considerate with their equipment, careful that their inspection does not compromise the next scientists down the line.',
            location: {
                center: { lon: 3.92794, lat: 82.92023 },
                zoom: 6,
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
            description: 'Diving to depths of nearly 4km in -1C is challenging and the oil from the ROV has been having a difficult time with the cold temperature, making the hydraulics slower. Outside of the Arctic deep sea water temperatures range from 2-4C, highlighting the risk involved with this particular deep sea expedition. The ROV team is quick to find a solution. The ship repositions North of the vent fields, and we prepare for our second dive of the day at 16:00.',
            location: {
                center: { lon: 3.92794, lat: 82.92023 },
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
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story13',
            alignment: 'left',
            hidden: false,
            title: 'Thursday, Oct 7: Shades of Mud',
            image: './images/shades_of_mud.jpg',
            description: 'The colour of mud can be surprisingly exciting, if you ask the right person. The Hacon 2021 expedition collected the first mud samples today and subsequently geologists aboard were particularly happy. Different spots in the ocean have different mud characteristics, including colour and consistency, which hint toward the processes in the area forming and depositing the mud. For example, many round quartz grains can indicate that the particles composing the mud have come a long way. Many settings have (subjectively) quite boring grey-ish mud so the orange-gold mud with black streaks we sampled from the seafloor around the Aurora vent field today elicited some serious excitement. Minerals transported from deep in the crust to the seafloor by hydrothermal circulation are clearly influencing the colours of our Aurora-mud. Understanding the mud at the Aurora vent field, including the exact cause for the colour and consistency will help us understand the history of venting at the site and also will help us understand the connection between the vents and fauna living nearby.',
            location: {
                center: { lon: 3.92794, lat: 82.92023 },
                zoom: 6,
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
