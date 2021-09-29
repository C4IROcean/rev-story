var config = {
    style: 'mapbox://styles/oceandatafoundation/cku5gar6i283z18l6xsl9yge2',
    accessToken: 'pk.eyJ1Ijoib2NlYW5kYXRhZm91bmRhdGlvbiIsImEiOiJja3U1Z2Ezem80endhMm9tcHowZ2JqMGpiIn0.HHbtd4QIaBqfTzcZncxDYA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'REVOcean arctic ROV = HACON',
    subtitle: 'An Arctic expedition like no other = Hot Vents in an Ice-Covered Ocean',
    byline: 'By REV Ocean and C4IR Ocean = led by NIVA and CAGE',
    footer: 'Thank you to Marena Brinkhurst of the Mapbox Community Team for helping us build and update this story as the expedition continues.',
    chapters: [
        {
            id: 'story1',
            alignment: 'left',
            hidden: false,
            title: 'What is the cruise?',
            image: '',
            description: 'REV Ocean is building the world’s most advanced <a href="https://www.revocean.org/vessel/" target="_blank">research and expedition vessel</a>. Their first expedition will take the REV Ocean ROV (Remotely Operated Vehicle) on an expedition to the depths of the Arctic ice-shelf.<br><br><i>Scroll down to follow the ROV on its first expedition to the arctic depths.</i>',
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
            description: '',
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
            image: './images/_E5C5504.JPG',
            description: '',
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
