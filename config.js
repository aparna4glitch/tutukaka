var config = {
    style: 'mapbox://styles/aparnanz/ckf0fj7vo2x7a19qne2rvoq38',
    accessToken: 'pk.eyJ1IjoiYXBhcm5hbnoiLCJhIjoiY2tleXcyY3UxMGpsdjJ3cDNwaGs2c2V6OSJ9.9CZyf96dFqjaHRIpMxRTaA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Tutukaka Coast Tsunami: What Happens After We Run Up The Hill?',
    subtitle: 'Transparency of Tsunami Risk and Community Readiness',
    byline: '',
    footer: 'By: Aparna Narang (September 2020)',
    chapters: [
        {
            id: 'region-overview',
            title: 'Tutukaka Coast Overview',
            image: '',
            description: 'The Tutukaka Coast lies 25km northeast of Whangarei in Northland, Aotearoa New Zealand. The permanent'+
          ' population of over 2,000 people swells in the summertime as a popular destination for coastal holidays. One of the largest'+
          ' natural hazard risks for the area is tsunami. In preparation, tsunami sirens and signage have been installed to help educate'+
          ' people regarding high risk areas. Additionally, Civil Defence Community Centres have been identified (shown in purple) as part'+
          ' of the <span><a href="https://www.nrc.govt.nz/media/rrmdi2n3/tutukakacrp18.pdf" target"=_blank">Tutukaka Coast Emergency Response Plan</a></span>.',
            location: {
                center: [174.45795, -35.62328],
                zoom: 10.36,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 }
            ]
        },
        {
            id: 'tsunami-red',
            title: 'Distant Source: Lots of Warning, Lower Impact',
            image: '',
            description: '<span><a href="https://www.nrc.govt.nz/evacuationzones" target"=_blank">Evacuation zone maps</a></span> were developed for the region by GNS Science on behalf of the Northland Regional'+
          ' Council. The red line reflects the shore evacuation zone (which is the coastline) for a tsunami event originating from a distant source, such as South'+
          ' America, providing for a long lead time (more than 3 hours) to head inland if needed. The red zone has a relatively'+
          ' limited impact area. ',
            location: {
                center: [174.45795, -35.62328],
                zoom: 10.36,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: .9
                 }     
            ],
            onChapterExit: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: 0
                 }
              ]
          },
          {
            id: 'tsunami-orange-yellow',
            title: 'Regional/Local Source: Very Little Warning, Significant Impact',
            image: '',
            description: 'The orange and yellow zones highlight the evacuation areas for a tsunami event caused by a regional or local'+
            ' event. The yellow zone is considered a worst-case scenario. These types of events could result in tsunami travel times'+
            ' ranging from up to 3 hours to only a few minutes. While these are anticipated to happen with less frequency than red zone'+
            ' events, it is still just as important to prepare for these types of events. The severity of impact and limited warning'+
            ' time to evacuate actually lends itself to need greater preparation in order for the community to be able to'+
            ' react instinctively. ',
            location: {
                center: [174.45795, -35.62328],
                zoom: 10.36,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: .9
                
                 },
                 {
                      layer: 'whangarei-tsunami-orange-wgs8-adpbdf',
                      opacity: .36
                 },
                 {
                      layer: 'whangarei-yellow-zone-wgs84-4pa29w',
                      opacity: .4
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: 0 
                 },
                 {
                      layer: 'whangarei-tsunami-orange-wgs8-adpbdf',
                      opacity: 0
                 },
                 {    layer: 'whangarei-yellow-zone-wgs84-4pa29w',
                      opacity: 0
                 }     
            ]
        },
        {
          id: 'ngunguru-zoomin',
            title: 'A Closer Look',
            image: '',
            description: 'Under both the orange and yellow scenarios, there is the potential for significant impact to major roads out'+
          ' of the community. Additionally, almost all of the Civil Defense Community Centres, and emergency facilities (such as the'+
          ' local substation for electricity, fire brigade, medical clinic and dairies) are in the impact zone. The ability to get out of the area'+
          ' in time may be limited and people are left heading for high ground locally. ',
            location: {
                center: [174.49678, -35.62331],
                zoom: 13.01,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 { 
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: .9
                 },
                 {
                      layer: 'whangarei-tsunami-orange-wgs8-adpbdf',
                      opacity: .36
                 },
                 {
                      layer: 'whangarei-yellow-zone-wgs84-4pa29w',
                      opacity: .4
                 },
                 {
                      layer: 'mapbox-satellite',
                      opacity: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: .9  
                 },
                 {
                      layer: 'whangarei-tsunami-orange-wgs8-adpbdf',
                      opacity: .36
                 },
                 {    layer: 'whangarei-yellow-zone-wgs84-4pa29w',
                      opacity: .4
                 },
                 {
                      layer: 'mapbox-satellite',
                      opacity: 0
                 }
            ]
        },
        {
          id: 'matapouri-zoomin',
            title: 'A Closer Look',
            image: '',
            description: 'What happens after you\'ve reached high ground? The <span><a href="https://www.nrc.govt.nz/media/2lcfvyys/northlandcivildefenceemergencymanagementplan20162021.pdf" target"=_blank">Northland Civil Defence Emergency Plan</a></span> highlights that self-reliance and preparedness'+
          ' is vital for rural communities that can become quickly isolated in an emergency.  Critical facilities will be impacted,'+
          ' roads damaged and the ability for emergency services to access the area would be challenging. This could result in stranded'+
          ' populations of people who will need to be able to survive until they can be rescued or until basic services restored to the'+
          ' area. This means access to food, shelter, water and electricity in areas that are outside of tsunami zones that people can'+
          ' escape to. ',
            location: {
                center: [174.48471, -35.58343],
                zoom: 12.45,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: .9
                }, 
                 {
                      layer: 'whangarei-tsunami-orange-wgs8-adpbdf',
                      opacity: .36
                 },
                 {
                      layer: 'whangarei-yellow-zone-wgs84-4pa29w',
                      opacity: .4
                 },
                 {
                      layer: 'mapbox-satellite',
                      opacity: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: .9
                 },
                 {
                      layer: 'whangarei-tsunami-orange-wgs8-adpbdf',
                      opacity: .36
                 },
                 {    layer: 'whangarei-yellow-zone-wgs84-4pa29w',
                      opacity: .4
                 },
                 {
                      layer: 'mapbox-satellite',
                      opacity: 0
                   }
            ]
        },
        {
          id: 'resilience-zones',
            title: 'Where Do We Go From Here?',
            image: '',
            description: 'There is an opportunity for the Tutukaka Coast to further enhance its tsunami readiness. First, building greater'+
          ' community awareness through local sessions with experts will help people consider their escape route'+
          ' options (and know them intuitively) in respect to the hazard zones. Second, there is potential for'+
          ' greater local collaboration. This could include the creation of resilience zones within the community that can enable'+
          ' access to local electricity (through nanogrids or microgrids), food (community gardens), shelter and water outside of the'+
          ' tsunami impact areas. Examples of potential zones for the Tutukaka Coast are shown in green for illustrative purposes to'+
          ' help kick start the conversation. It behoves us to plan ahead. To visualize in greater detail how your specific location'+
          ' may be impacted visit the <span><a href="https://www.nrc.govt.nz/evacuationzones" target"=_blank">Northland Regional Council website</a></span>.',
            location: {
                center: [174.47166, -35.60498],
                zoom: 11.71,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: .9
                 },
                 {
                      layer: 'whangarei-tsunami-orange-wgs8-adpbdf',
                      opacity: .36
                 },
                 {
                      layer: 'whangarei-yellow-zone-wgs84-4pa29w',
                      opacity: .4
                 },
                 {
                      layer: 'tutukaka-resilience-zones-wgs-3tn50m',
                      opacity: .4
                 },
                 {    layer: 'resilience-zone-mamaki',
                      opacity: .4
                   
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'emergency-services-tutukaka-dot',
                     opacity: 1
                 },
                 {
                      layer: 'civil-defense-community-centers-dot',
                      opacity: 1
                 },
                 {
                      layer: 'whangarei-red-zone-shpline-86xav5',
                      opacity: 0
                 }, 
                 {
                      layer: 'whangarei-tsunami-orange-wgs8-adpbdf',
                      opacity: 0
                 },
                 {    layer: 'whangarei-yellow-zone-wgs84-4pa29w',
                      opacity: 0
                 },
                 {
                      layer: 'tutukaka-resilience-zones-wgs-3tn50m',
                      opacity: 0
                 },
                 {    layer: 'resilience-zone-mamaki',
                      opacity: 0 
                 }
            ]  
        }
    ]
};