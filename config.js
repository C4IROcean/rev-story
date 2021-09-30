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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
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
            title: 'Prep + mobilization',
            image: '',
            description: 'The crew prepared with safety training about sea ice and polar bears.<br><br><iframe width="100%" height="315" src="https://www.youtube.com/embed/R_2aTibd328" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
              }
            ],
            onChapterExit: []
        },
      {
            id: 'story4',
            alignment: 'left',
            hidden: false,
            title: 'ROV onboarding + mobilization',
            image: './images/ROVonland.jpg',
            description: 'Now the crew is getting the ROV ready for its first expedition.',
            location: {
                center: { lon: 13.47772, lat: 78.32703 },
                zoom: 6.65,
                pitch: 24.00,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
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
