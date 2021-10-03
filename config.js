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
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story7',
            alignment: 'left',
            hidden: false,
            title: 'Thursday, Sept 30: Setting Sail towards Molloy Deep',
            image: '',
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
            image: '',
            description: 'We reached our destination at 07:30, a few hours earlier than expected. The CTD was deployed first, taking our first samples for the cruise.<br><br>Around 11:22 the ROV started its first deep dive, the HACON team takes bets on the expected depth for touchdown ranging from 3507 to 3690. At 13:50 it hits the seabed, and the ROV team start calibrating the umbilical by unravelling the full 800 meters of TMS supporting cable. During this momentous dive, it exceeded all expectations reaching more than 3800 meters.<br><br>To our great delight, we were also entertained with a very brief view of a Cirroteuthis Muelleri (Dumbo Octopus)!',
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
              }
            ],
            onChapterExit: []
        },
        {
            id: 'story9',
            alignment: 'left',
            hidden: false,
            title: 'Saturday, Oct 2: We Reach the Ice',
            image: './images/oct2arrival.jpg',
            description: 'The team wakes up moving North towards the ice, 150 nautical miles from Moll&#248;y Deep. Around 10:55 we cross the Greenland border. The depth markers on the charts fade, suggesting the ocean is less surveyed where we are headed. We arrive around 13:15 as the first ice drifts into view. A perimeter of 2 nautical miles is the last visible open water.<br><br>The ROV Team rigs up Aurora and Borealis to take their second deep dive on the edge of the ice at 15:00. Aurora hits seabed 1700 meters deep at 16:00 and takes its first sample at 16:12. They are back on deck by 17:30 and in a short two hours the ice has drifted to us.<br><br>The team hears and feels the first ice during our science meeting in the auditorium and people are quick to run to the observation deck 9 or outdoors onto the helicopter deck 6.<br><br>Eva Ramirez-Llorda starts our nightly seminars with an introduction to the HACON Project for the team on board and the crew.<br><br>96 nautical miles to Aurora.',
            location: {
                center: { lon: 4.13119, lat: 82.44665 },
                zoom: 4.15,
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
