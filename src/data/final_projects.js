const rawProjects = [
  {
    district: "Altona",
    title: {
      de: "bahn_hoefe, Umbau, Erweiterung und Nutzungs änderung der ehemaligen Reichsbahndirektion",
      en: "'bahn_hoefe'. Conversion, expansion and change of use of the former Reichsbahn directorate",
    },
    description: {
      de: "Der historische Gebäudekomplex der ehemaligen Bahndirek tion am Bahnhof Altona wurde vollständig saniert und zueinem vitalen, offenen Hofkonzept erweitert und umgebaut:die „bahn _hoefe“. Neben Apartments für Studenten, einerMusicalschule, Büroflächen für die Kreativwirtschaft und einerHochschule für Gestaltung werden im Erdgeschoss Laden geschäfte und gastronomische Betriebe einziehen. Ein Neubaufür eine Kita und einige Wohnungen vervollständigen dieBlockrandstruktur im Süden des Ensembles.",
      en: "The historic building complex of the former railway headquarters at Altona station has been completely renovated and extended and converted into a lively, open courtyard concept: the 'bahn _hoefe'. In addition to flats for students, a musical school, office space for the creative industries and a design college, shops and catering outlets will move into the ground floor. A new building for a daycare centre and some flats complete the perimeter block structure in the south of the ensemble.",
    },
    architect: "Jo Landwehr und Daisy Dewanto, LH Architekten",
    address: "Am Felde 58, 22765 Hamburg, Hamburg",
    id: 1,
    lat: 53.5511834,
    lng: 9.9327747,
  },
  {
    district: "Altstadt",
    title: {
      de: "Handelskammer InnovationsCampus (HKIC)",
      en: "Chamber of Commerce Innovation Campus (HKIC)",
    },
    description: {
      de: "Zunächst erschien es fast unmöglich an diesem Ort über den Gleisanlagen und ohne ausgewiesenes Grundstück zu bauen. Dies dennoch zu ermöglichen, setzte innovative Architekten- und Ingenieurleistungen sowie eine beispiel hafte Kooperation von Bauherrenschaft, Stadt, Hochbahn,Nachbarn und Projektbeteiligten voraus. Genutzt werden die Büros, Seminar- und Konferenzräume sowie der großeSaal des InnovationsCampus von der Handelskammer, deren Bildungseinrichtungen (HSBA und HKBIS) sowie Mit gliedsunternehmen der Handelskammer.",
      en: "At first, it seemed almost impossible to build on this site above the railway tracks and without a designated plot of land. However, making this possible required innovative architectural and engineering services as well as exemplary cooperation between the client, the city, the elevated railway, neighbours and project participants. The offices, seminar and conference rooms as well as the large hall of the Innovation Campus are used by the Chamber of Commerce, its educational institutions (HSBA and HKBIS) and member companies of the Chamber of Commerce.",
    },
    architect: "Markus Trautmann, Hörter + Trautmann Architekten",
    address:
      "Café-Terrasse vor dem Haupteingang, Adolphsplatz 6,20457 Hamburg, Hamburg",
    id: 2,
    lat: 53.54937830000001,
    lng: 9.9904061,
  },
  {
    district: "Altstadt",
    title: { de: "Katharinenquartier", en: "Katharinenquartier" },
    description: {
      de: "Das neue Wohnquartier mit 131 Mietwohnungen und kleineren Gewerbeeinheiten an der Achse zwischen Rathaus und HafenCity, dem sogenannten Katharinenweg, trägt zur Belebungder Altstadt bei. Der Abschirmung gegenüber dem Auto verkehr auf der Willy-Brandt-Straße dient das nördliche Büro und Geschäftsgebäude. So bildet ein Ensemble aus drei Gebäuden das Quartier um einen begrünten, gemeinschaftlichgenutzten Innenhof. Die Fassaden sind von dem für die Altstadt typischen Material Backstein geprägt.",
      en: "The new residential quarter with 131 rental flats and smaller commercial units on the axis between the town hall and HafenCity, the so-called Katharinenweg, contributes to the revitalisation of the old town. The northern office and commercial building serves to shield the area from car traffic on Willy-Brandt-Strasse. An ensemble of three buildings forms the neighbourhood around a green, communal inner courtyard. The façades are characterised by the brick material typical of the old town.",
    },
    architect: "Finn Warncke und Niels Vagt, KPW Architekten",
    address:
      "vor dem Gebäudeeingang Grimm 17 (Nähe Hauptportal Katharinenkirche), 20457 Hamburg , Hamburg",
    id: 3,
    lat: 53.5458815,
    lng: 9.9944468,
  },
  {
    district: "Bahrenfeld",
    title: { de: "Pförtnergebäude DESY", en: "DESY gatehouse building" },
    description: {
      de: "Das vorhandene Pförtnergebäude am Haupteingang Notkestraße wurde durch einen markanten Neubau ersetzt. Entstanden ist ein Gebäude mit einem weit auskragenden, geneigten Dach aus Stahlbeton. In seiner skulpturalen Ausprägung formuliert es mit einer einladenden Geste deutlichden Eingang zum DESY-Gelände. Die dynamische Konstruk tion steht für die innovativen Forschungsinhalte von DESY.",
      en: "The existing gatehouse at the main entrance on Notkestraße was replaced by a striking new building. The result is a building with a widely projecting, sloping roof made of reinforced concrete. In its sculptural form, it clearly formulates the entrance to the DESY site with an inviting gesture. The dynamic construction symbolises the innovative research content of DESY.",
    },
    architect: "Esther Steinbrinck, Hartfil-Steinbrinck Architekten",
    address: "Pförtnergebäude, Eingang Notkestraße 85, 22607 Hamburg, Hamburg",
    id: 4,
    lat: 53.573014,
    lng: 9.8808017,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "Center for Free-Electron Laser Science CFEL",
      en: "Center for Free-Electron Laser Science CFEL",
    },
    description: {
      de: "Mit dem Center for Free-Electron Laser Science entsteht in Hamburg ein internationales Zentrum für die Grundlagen forschung an und mit Röntgenlasern. Es ist eine Koopera tion der drei unabhängigen Forschungseinrichtungen Univer sität Hamburg, Max-Planck-Gesellschaft und Deutsches Elektronen-Synchrotron. Um ein hohes Maß an Synergien zwischen den unterschiedlichen Forschergruppen zu erzeugen, stehen offene Raumgefüge im Vordergrund, die die Kommunikationsprozesse der Wissenschaftler fördern.",
      en: "With the Center for Free-Electron Laser Science, an international centre for basic research on and with X-ray lasers is being established in Hamburg. It is a co-operation between the three independent research institutions of the University of Hamburg, the Max Planck Society and the German Electron Synchrotron. In order to generate a high degree of synergy between the different research groups, the centre focuses on open spatial structures that promote communication processes between the scientists.",
    },
    architect: "Markus Hammes, Hammeskrause Architekten",
    address:
      "Pförtnerloge / Eingangsgebäude DESY, Notkestraße 85, 22607 Hamburg, Hamburg",
    id: 5,
    lat: 53.573032,
    lng: 9.880975,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "FLASH II - Linearer Teilchenbeschleuniger und Experimentierhalle der Grundlagenphysik",
      en: "FLASH II - linear particle accelerator and experimental hall for fundamental physics",
    },
    description: {
      de: "Der „Freie-Elektronen-Laser FLASH“ ist ein Linearbeschleu niger für Strahlung im weichen Röntgenbereich. Mit FLASH IIwurde dieser um eine Experimentierhalle mit Bürotrakt und einen Beschleunigungstunnel mit Technikräumen und Laborenerweitert. Die Fassade von FLASH II ist in ihrer Plastizität zurückhaltend und glatt. Lediglich zur Luruper Chaussee drücktsich das DESY-Logo als Relief in die horizontale Blechfassade.  Hier öffnet sich FLASH II mit einem großen, dynamischenSchaufenster in Richtung Stadt.",
      en: "The FLASH free-electron laser is a linear accelerator for radiation in the soft X-ray range. With FLASH II, it has been extended to include an experimental hall with an office wing and an acceleration tunnel with technical rooms and laboratories. The façade of FLASH II is restrained and smooth in its plasticity. Only towards Luruper Chaussee does the DESY logo appear as a relief in the horizontal sheet metal façade.  Here, FLASH II opens up towards the city with a large, dynamic shop window.",
    },
    architect: "Stefan Wirth, Renner Hainke Wirth Architekten",
    address: "Empfangsgebäude der DESY, Notkestraße 85, 22607 Hamburg, Hamburg",
    id: 6,
    lat: 53.573032,
    lng: 9.880975,
  },
  {
    district: "Barmbek",
    title: {
      de: "U-/S-Bahnhof und Busanlage BarmbekNeubau und Umbau",
      en: "Barmbek U-/S-Bahn station and bus system, new construction and conversion",
    },
    description: {
      de: "Das Projekt beinhaltet den Neubau der Überdachung der Bus anlage und der Bahnhofszugänge, den Umbau der Bahnhofs schalterhallen, die Sanierung des historischen Eingangsportalsund der bestehenden Klinkerstützwände. Die dynamische Geometrie der Zugangsbauwerke der Schalterhallen und diemarkante Überdachung der Busanlage verknüpfen die nörd lichen und südlichen Stadtquartiere miteinander. Beidseitsdes Bahnhofs wurden filigrane Stahlkonstruktionen mit trans luzenten, pneumatischen Foliendächern konzipiert.",
      en: "The project includes the construction of a new roof over the bus facility and the station entrances, the remodelling of the station ticket halls, the renovation of the historic entrance portal and the existing brick retaining walls. The dynamic geometry of the entrance structures of the ticket halls and the striking roofing of the bus facility link the northern and southern city districts. Filigree steel structures with translucent, pneumatic foil roofs were designed on both sides of the station.",
    },
    architect: "Julian Vielmo und Michael Glowasz, ap plan",
    address:
      "am Rundbunker, Wiesendamm 7,    Ecke Poppenhusenstraße, 22305 Hamburg, Hamburg",
    id: 7,
    lat: 53.5865289,
    lng: 10.0448496,
  },
  {
    district: "Barmbek-Süd",
    title: {
      de: "Inklusionskita - Naturerfahrung in der Stadt",
      en: "Inclusion daycare - experiencing nature in the city",
    },
    description: {
      de: "Ein Stück Natur inmitten von Barmbek-Süd für 140 Kinder bis sechs Jahren. Der in warmen Farbtönen gestaltete Holzrahmenbau gliedert das Außengelände und setzt die prägenden Bestandsbäume angemessen in Szene. Die pädagogischen Themen „Bewegung“ und „Naturerfahrung in der Stadt“ bildeten die Leitgedanken für die innere Organisation und die äußere Gestaltung. Die Erschließung aus offener zentraler Halle und langen Balkonen ermöglicht vielfältige Blick- und direkte Wegebeziehungen in das naturnahe Spielgelände.",
      en: "A piece of nature in the centre of Barmbek-Süd for 140 children up to the age of six. The timber frame construction, designed in warm colours, structures the outdoor area and appropriately highlights the characteristic existing trees. The educational themes of 'movement' and 'experiencing nature in the city' formed the guiding principles for the internal organisation and external design. The development of the open central hall and long balconies allows a variety of views and direct pathways into the natural play area.",
    },
    architect:
      "Petra Diesing und Horst Stapelfeldt, NeuStadtArchitekten, Andrea Goller, lup architekten",
    address:
      "Eingang von der Bachstraße, Bachstraße 80, 22083 Hamburg  , Hamburg",
    id: 8,
    lat: 53.5773981,
    lng: 10.0247525,
  },
  {
    district: "Barmbek-Süd",
    title: {
      de: "Mensa Adolph-Schönfelder Schule",
      en: "Canteen Adolph-Schönfelder School",
    },
    description: {
      de: "Der eingeschossige Neubau interpretiert die Pavillon architektur aus den sechziger Jahren durch einen umlaufen den Gebäudeunterschnitt, Sockellinie, Dachlinie und durch dazwischen bündig eingefügte, großflächig asymmetrisch gesetzte Fassadenelemente aus rahmenlosem Glas und hellemKlinker. Detailreduktion und Flächenkomposition sind die prägenden Gestaltungsmittel.",
      en: "The new single-storey building interprets the pavilion architecture from the 1960s with a circumferential building undercut, plinth line, roof line and large, asymmetrically placed façade elements made of frameless glass and light-coloured clinker brick inserted flush in between. Detail reduction and surface composition are the defining design elements.",
    },
    architect: "Henning Scheid und Sarah Sauler, BKS Architekten",
    address: "Zeisigstraße 3, Haupteingang, 22081 Hamburg, Hamburg",
    id: 9,
    lat: 53.5777009,
    lng: 10.0474282,
  },
  {
    district: "Blankenese",
    title: {
      de: "Falkensteiner Hof, Umbau und Sanierung",
      en: "Falkensteiner Hof, conversion and renovation",
    },
    description: {
      de: "Der Falkensteiner Hof wurde 1895 als historisch bedeutsames Wirtschaftsgebäude mit Stallungen und Wohnungen errich tet. Die Sanierung des Ensembles umfasste die denkmal gerechte Restaurierung des Hauptgebäudes, den Umbau derReithalle aus den 1950er Jahren, die Neubauten Longierhalleund Heulager sowie die Neufassung der Außenanlagen.",
      en: "The Falkensteiner Hof was built in 1895 as a historically significant farm building with stables and flats. The renovation of the ensemble included the restoration of the main building in accordance with the preservation order, the remodelling of the riding hall from the 1950s, the construction of the new lunging hall and hay store as well as the redesign of the outdoor facilities.",
    },
    architect: "Alexander Guth, Büro Alex Guth Architekt",
    address:
      "Haupteingang Hauptgebäude, In de Bargen 31, 22587 HamburgDer Bus Linie 286 fährt alle 30 Minuten vom Bahnhof Blankenese bis Haltestelle Falkenstein. Von dort sind es ca. 6 Minuten Fußweg., Hamburg",
    id: 10,
    lat: 53.5694785,
    lng: 9.7753725,
  },
  {
    district: "Bramfeld",
    title: {
      de: "Gemeindezentrum und Kita der Oster-Kirchengemeinde",
      en: "Community center and daycare center of the Easter parish",
    },
    description: {
      de: "Die neue Kindertagesstätte, das denkmalgerecht sanierte alte Pastorat und das neue Gemeindezentrum umschließen den neu gestalteten Kirchplatz mit dem historischen Lindenring.Der zentrale, flexibel nutzbare Außenraum verbindet über kurzeWege Kirche, Gemeindehaus und Kita. Die neuen Gebäude bilden ein Ensemble aus analog gestalteten Baukörpern mitbegrünten Flach- und ansteigenden Pultdächern. Die Fassadensind im Wechsel von hellem Putz und naturbelassenen Zedernholzschindeln gestaltet.",
      en: "The new day nursery, the old pastorate, which has been renovated in accordance with the preservation order, and the new community centre surround the newly designed church square with the historic Lindenring, and the central, flexibly usable outdoor space connects the church, community centre and day nursery via short paths. The new buildings form an ensemble of analogue structures with green flat roofs and rising monopitch roofs. The façades alternate between light-coloured render and natural cedar wood shingles.",
    },
    architect: "Mathias Hein, Mathias Hein Architekten",
    address:
      "vor dem Kirchenportal, Bramfelder Chaussee 202, 22177 Hamburg, Hamburg",
    id: 11,
    lat: 53.6096511,
    lng: 10.074489,
  },
  {
    district: "Fuhlsbüttel",
    title: {
      de: "Parkhaus P1 am Flughafen Hamburg",
      en: "Parking garage P1 at Hamburg Airport",
    },
    description: {
      de: "Das Parkhaus ist im Grundriss auf ein an den Ecken abgerun detes Dreieck aufgebaut und umschreibt Außenabmessungenvon ca. 164 m x 124 m. Die sechs Parkebenen verteilen sichdabei auf eine Gebäudehöhe von ca. 20 Meter. Die ringförmigeStruktur des Gebäudes führt zu einem Querschnittsprinzipvon ca. 34 Meter Breite. Im Gebäude sind ca. 2.800 Parkplätzevorgesehen. Die Fassade besteht aus L-förmigen, eingefärbtenStahlbetonfertigteilen. Die Innengestaltung des Gebäudes wird durch den Charakter der Konstruktion geprägt.",
      en: "The car park is based on a triangle with rounded corners and has external dimensions of approx. 164 m x 124 m. The six parking levels are distributed over a building height of approx. 20 metres. The ring-shaped structure of the building results in a cross-sectional principle of approx. 34 metres in width. Around 2,800 parking spaces are planned in the building. The façade consists of L-shaped, coloured prefabricated reinforced concrete elements. The interior design of the building is characterised by the character of the structure.",
    },
    architect: "Roger Riewe, Riegler Riewe Architekten",
    address:
      "Flughafen Hamburg, Terminal Tango, am Kreisel gegenüber dem Baustellenzugang, Flughafenstraße 1-3, 22335 Hamburg, Hamburg",
    id: 12,
    lat: 53.6342105,
    lng: 10.0043933,
  },
  {
    district: "HafenCity",
    title: {
      de: "KLU Kühne Logistics University",
      en: "KLU Kühne Logistics University",
    },
    description: {
      de: "Durch den Umbau des ehemaligen SAP Büro- und Schulungs gebäudes zur Kühne Logistics University entstanden Vor lesungs- und Seminarräume sowie Räume für Fakultät undVerwaltung, verschiedene Lounges, eine Bibliothek und ein kleines Fitnesscenter. Im alle Geschosse übergreifendenAtrium wurde ein Auditorium mit 299 Sitzplätzen in Form eines goldenen Eis eingebaut. Das ansteigende Gestühl verbindet das Erdgeschoss mit dem 1.   Obergeschoss, so dass der Zugang von unten im Foyer, wie von oben über eine Empore möglich ist.",
      en: "The conversion of the former SAP office and training building into the Kühne Logistics University created lecture and seminar rooms as well as rooms for faculty and administration, various lounges, a library and a small fitness centre. An auditorium with 299 seats in the shape of a golden egg was built into the atrium, which spans all floors. The rising structure connects the ground floor with the first floor, so that access is possible from below in the foyer as well as from above via a gallery.",
    },
    architect: "Anja Meding und Jan-Oliver Meding, MPP",
    address: "Brooktorkai 20, 20457 Hamburg, Hamburg",
    id: 13,
    lat: 53.5448978,
    lng: 10.0020985,
  },
  {
    district: "Harburg",
    title: {
      de: "Speicher am KaufhauskanalUmbau zur Konzert- und Tagungsstätte",
      en: "Warehouse on the KaufhauskanalConversion into a concert and conference venue",
    },
    description: {
      de: "Das „Neue Kaufhaus“ wurde 1826 /27 am Ende des HarburgerKaufhauskanals errichtet. 1880 musste das Gebäude dem Bau der Niederelbebahntrasse weichen. Es wurde an den Stand ort Blohmstraße 22 als Lager für die Kolonialwarengroßhand lung Bode & Kroos transloziert und dort 1888 um ein Comptoirerweitert. Um Hamburgs ältesten Großspeicher historisch rekonstruiert der Öffentlichkeit zugänglich zu machen, ist ab2015 eine Nutzung mit Vortrags- und Konzertveranstaltungenfür die Monate Mai bis Oktober geplant.",
      en: "The 'New Department Store' was built in 1826/27 at the end of the Harburg department store canal. In 1880, the building had to make way for the construction of the Lower Elbe railway line. It was relocated to Blohmstraße 22 as a warehouse for the colonial goods wholesaler Bode & Kroos, where it was extended by a comptoir in 1888. In order to make Hamburg's oldest large warehouse historically reconstructed and accessible to the public, it is planned to use it for lectures and concerts from May to October from2015.",
    },
    architect: "Ulrich Garbe, Garbe-Architekten",
    address:
      "im Hof, Blohmstraße 22, 21079 HamburgBaustellenführung! Bitte festes Schuhwerk und robuste Kleidung mitbringen., Hamburg",
    id: 14,
    lat: 53.466501,
    lng: 9.9812149,
  },
  {
    district: "Harvestehude",
    title: {
      de: "Bürohaus Ensemble Sophienterrassen",
      en: "Office building ensemble Sophienterrassen",
    },
    description: {
      de: "Den Auftakt und Hauptzugang zu den Sophienterrassen bildet der neue Platz am Mittelweg, der von einer Villa und drei zu einem Geviert stehenden Bürogebäuden gebildet wird:dem Bürohaus Ensemble Sophienterrassen. Die Gebäude sind in den Hauptansichten schlicht und vornehm, in den demPlatz zugewandten Seiten offen und spielerisch ausgeführt.Die drei Gebäude sind mit einer einzigartigen Metallfassademit floral anmutenden Strukturen verkleidet. Bäume aus demdirekten Umfeld standen für diesen Entwurf Pate.",
      en: "The prelude and main entrance to the Sophienterrassen is the new square on Mittelweg, which is formed by a villa and three office buildings standing in a square: the Sophienterrassen office building ensemble. The main elevations of the buildings are simple and elegant, while the sides facing the square are open and playful, and the three buildings are clad in a unique metal façade with floral structures. Trees from the immediate surroundings were the inspiration for this design.",
    },
    architect: "Carsten Roth und Jürgen Feyrer, Carsten Roth Architekt",
    address:
      "auf dem Platz zwischen den Gebäuden, Mittelweg 110, 20149  Hamburg, Hamburg",
    id: 15,
    lat: 53.57531609999999,
    lng: 9.9934976,
  },
  {
    district: "Niendorf",
    title: {
      de: "Sankt Ansgar Kirche in Niendorf, Sanierung und Erweiterung",
      en: "Saint Ansgar Church in Niendorf, renovation and expansion",
    },
    description: {
      de: "Die von Karlheinz Bargholz entworfene katholische Kirche (Bj. 1962) wurde nach der Zusammenlegung dreier Gemeinden Pfarrkirche. Im Zuge der Sanierung wurde sie nach den Anforderungen des 2. Vatikanischen Konzils umgestaltet. Die behutsame Sanierung und Umgestaltung erfolgte in engem Kontakt zum Architekten Karlheinz Bargholz. Das Gebäude ist inzwischen auf Antrag der Gemeinde ein Denkmal.",
      en: "The Catholic church designed by Karlheinz Bargholz (built in 1962) became a parish church after the amalgamation of three parishes. In the course of the renovation, it was remodelled in accordance with the requirements of the Second Vatican Council. The careful renovation and remodelling was carried out in close contact with the architect Karlheinz Bargholz. The building is now a listed building at the request of the parish.",
    },
    architect: "Andreas Rowold, Andreas Rowold Architekt ",
    address: "Kirchvorplatz, Niendorfer Kirchenweg 18, 22459 Hamburg, Hamburg",
    id: 16,
    lat: 53.62044119999999,
    lng: 9.949804499999999,
  },
  {
    district: "Ohlsdorf",
    title: {
      de: "Fuhlsbüttler Schleuse, Neubau des Betriebsgebäudes,übergeordnetes Gestaltungskonzept und Außenanlagen",
      en: "Fuhlsbüttler lock, new construction of the operations building, overarching design concept and outdoor facilities",
    },
    description: {
      de: "Die Schleusenanlage wurde im Zuge des Neubaus zu einerWehranlage mit integriertem Betriebsgebäude vollständigumgestaltet. Dabei waren neben architektonischen, städtebau lichen und landschaftsplanerischen Aspekten auch Anforderun gen des Denkmalschutzes zu berücksichtigen. Das neue Wehrdient dem Schutz vor Binnenhochwasser am Alsterlauf und der  Wasserstandhaltung. Ein „Mäander-Fischpass“ wurde  inte griert und der östliche Uferbereich durch Sitzstufen terrassiert.",
      en: "The lock system was completely redesigned as part of the new construction of a weir system with an integrated operations building. In addition to architectural, urban development and landscape planning aspects, the requirements of monument protection also had to be taken into account. The new weir serves to protect against inland flooding on the Alster river and to maintain the water level. A 'meander fish pass' was integrated and the eastern bank area was terraced with seating steps.",
    },
    architect:
      "Tillmann Wagenknecht, Wagenknecht Architekten, SörenSchnarre, KED Ingenieure und Doris Föllmer, Landesbetrieb Straßen, Brücken und Gewässer",
    address:
      "Eingang Ecke Justus-Strandes-Weg / Hasenbergbrücke (Straße Am Hasenberge), 22335 Hamburg, Hamburg",
    id: 17,
    lat: 53.6226733,
    lng: 10.0280553,
  },
  {
    district: "Osdorf",
    title: {
      de: "Bürgerhaus Bornheide, Umbau Grundschule Barlsheidezum Bürgerhaus Bornheide",
      en: "Bornheide community center, conversion of Barlsheide elementary school to Bornheide community center",
    },
    description: {
      de: "Leitbild Dorf: Der Bürgerpark ist das verbindende Element. Hier finden Aktionen statt, hier wird geskatet, man sitzt im Café und hier spielt der Zirkus. Ähnlich gestaltete Häuser gruppieren sich um einen Platz, auf dem das Haupthaus steht. Die vorhandenen Pavillons wurden freigestellt, der Außen raum neu geordnet, die Gebäude energetisch ertüchtigt und an die Bedürfnisse der neuen Nutzer angepasst. Die Farb gestaltung der Häuser dient der Orientierung.",
      en: "Village model: The Bürgerpark is the connecting element. This is where events take place, people skate, sit in the café and the circus plays here. Similarly designed houses are grouped around a square on which the main house stands. The existing pavilions were removed, the outdoor space was reorganised, the buildings were made more energy-efficient and adapted to the needs of the new users. The colour design of the buildings serves as orientation.",
    },
    architect: "Philipp Dau, KBNK Architekten",
    address:
      "vor dem BürgerCafé (rotes Haus), Bornheide 76, 22549 Hamburg, Hamburg",
    id: 18,
    lat: 53.58878360000001,
    lng: 9.8556032,
  },
  {
    district: "Ottensen",
    title: {
      de: "Fette-Höfe, Modernisierung eines Wohn- und Gewerbehofs",
      en: "Fette farms, modernization of a residential and commercial yard",
    },
    description: {
      de: "Der Wohn- und Gewerbehof „Fette-Höfe“ bietet mit 23 Wohnungen und 13 Gewerbeeinheiten einen urbanen Nutzungsmix und orientiert sich mit seiner städtebau lichen Verdichtung am Quartierscharakter Ottensen. Die autofreien Innenhöfe und die intensiv begrünten Dach terrassen sollen das Mikroklima im dichten städtischen Umfeld verbessern. Die Anordnung der Gebäude und ihre Fassadengestaltung orientieren sich an der ursprüng lichen Fabrikarchitektur.",
      en: "With 23 flats and 13 commercial units, the 'Fette-Höfe' residential and commercial complex offers an urban mix of uses and its urban densification is based on the character of the Ottensen neighbourhood. The car-free inner courtyards and the intensively greened roof terraces are intended to improve the microclimate in the dense urban environment. The arrangement of the buildings and their façade design are based on the original factory architecture.",
    },
    architect: "Kirstin Pugnat, Architekturbüro AG Horizont",
    address:
      "vor der Hofdurchfahrt, Spritzenplatz 5 -10, 22765 Hamburg, Hamburg",
    id: 19,
    lat: 53.5512065,
    lng: 9.9308158,
  },
  {
    district: "Ottensen",
    title: {
      de: "Wohnquartier Gaußstraße",
      en: "Gaußstrasse residential area",
    },
    description: {
      de: "In Hamburg-Ottensen ist eine Wohnanlage mit 202 Wohnein heiten für Miet- und Eigentumswohnungen entstanden. Durchvariierende Gebäudehöhen, Staffelgeschosse und brücken förmige Überbauungen ist der Baukörper horizontal gegliedert.Die meisten der familiengerechten Wohnungsgrundrisse wur den nach dem Prinzip „Durchwohnen“ konzipiert. Das Projektzählt aktuell zu den größten energieeffizienten Baumaßnahmenin Norddeutschland.",
      en: "In Hamburg-Ottensen, a residential complex with 202 residential units for rent and ownership has been built. The building is horizontally structured with varying building heights, staggered storeys and bridge-shaped superstructures, and most of the family-friendly flat layouts were designed according to the 'living through' principle. The project is currently one of the largest energy-efficient construction projects in northern Germany.",
    },
    architect: "Johann Zurl, DFZ Architekten",
    address:
      "Hofdurchfahrt Gaußstraße 194 (neben der Tiefgarageneinfahrt),22765 Hamburg, Hamburg",
    id: 20,
    lat: 53.55871579999999,
    lng: 9.924337699999999,
  },
  {
    district: "Rotherbaum",
    title: {
      de: "Fachbibliothek Sozialwissenschaften der UniversitätHamburg, Erweiterung und Modernisierung",
      en: "Social Sciences Library at the University of Hamburg, expansion and modernization",
    },
    description: {
      de: "Die Fachbibliothek Sozialwissenschaften der UniversitätHamburg befindet sich im 3. OG des sogenannten „Pferde stalls.“ Sie stellt Literatur für die Fächer Soziologie, Politik wissenschaft, Journalistik und Kriminologische Sozialforschungbereit. Die Umstellung von einer reinen Freihand- zu einer Magazinbibliothek ermöglichte eine räumliche Neuorganisation der Bibliothek. Eine offene Studierlandschaft mit individuellen Arbeitsplätzen für unterschiedliche Lerntypen ersetzt die ehemals kleinteiligen Raumstrukturen.",
      en: "The Social Sciences Library of the University of Hamburg is located on the 3rd floor of the so-called 'horse stable'. It provides literature for the subjects of sociology, political science, journalism and criminological social research. The conversion from a purely open access library to a stacks library enabled a spatial reorganisation of the library. An open study environment with individual workstations for different types of learners replaces the former small-scale room structures.",
    },
    architect: "Gesine Beyer und Christina Radtke, Trapez Architektur",
    address: "Foyer, Allende-Platz 1, 20146 Hamburg, Hamburg",
    id: 21,
    lat: 53.5673346,
    lng: 9.982259599999999,
  },
  {
    district: "Rotherbaum",
    title: {
      de: "Studienbüro Wirtschaftswissenschaften der UniversitätHamburg, Umbau und Neustrukturierung",
      en: "Economics Study Office at the University of Hamburg, conversion and restructuring",
    },
    description: {
      de: "Die Verlegung des Hauptzugangs in die Kernzone des Gebäudeshat dazu geführt, dass Besucher heute direkt zum neuen Infotresen geführt werden. Die geschwungenen Wände „spülen“sie förmlich dorthin. Am Tresen vorbei gelangt man zu den Büros im kontrollierten Innenbereich. Dieser wird durch eine eingestellte, ovale Großform räumlich definiert. Durch gläserneBürotüren fällt Tageslicht, das zu einer angenehmen Arbeits atmosphäre beiträgt. Die Oberlichte über den Bürotüren könnenzur Querlüftung individuell geöffnet werden.",
      en: "The relocation of the main entrance to the centre of the building has meant that visitors are now led directly to the new information desk. The curved walls literally 'wash' them there. Passing the counter, visitors reach the offices in the controlled interior area. This is spatially defined by a set, large oval shape. Daylight shines through glass office doors, contributing to a pleasant working atmosphere. The skylights above the office doors can be opened individually for cross-ventilation.",
    },
    architect: "Klaus Roloff, me di um Architekten",
    address:
      "Eingangsbereich Gebäude Von-Melle-Park 5,    Eingang „C“ im Erdgeschoss, 20146 Hamburg, Hamburg",
    id: 22,
    lat: 53.56539189999999,
    lng: 9.9845291,
  },
  {
    district: "St. Pauli",
    title: {
      de: "Entertainmenthaus  St. Pauli",
      en: "Entertainment house St. Pauli",
    },
    description: {
      de: "Das Entertainmenthaus mit Gründerzentrum beherbergt auf 5500 m² vier Probebühnen, Textilwerkstätten und Musikproberäume. Das Gebäude verweist mit übereinanderschwingenden und auskragenden Kuben auf seine kreativen und tanzenden Nutzer. Der Gebäudekopf mit großem Schaufenster ermöglicht tiefe Einblicke in die zehn Meter hohe Artistenbühne. Die Fassade wurde analog zu einem Stoffgewebe entwickelt. Die feingliedrig strukturierte Stadt fassade bietet dem Auge ein subtiles Farbspiel.",
      en: "The entertainment house with start-up centre accommodates four rehearsal stages, textile workshops and music rehearsal rooms on 5500 m². The building refers to its creative and dancing users with cantilevered and overhanging cubes. The head of the building with its large shop window allows deep insights into the ten metre high artists' stage. The façade was designed to resemble a woven fabric. The finely structured urban façade offers the eye a subtle play of colours.",
    },
    architect: "Karin Renner und Melanie Zirn, Renner Hainke Wirth Architekten",
    address:
      "vor dem Eingang, Simon von Utrecht Straße 1,    Ecke Große Freiheit, 22767 Hamburg, Hamburg",
    id: 23,
    lat: 53.5518091,
    lng: 9.957163699999999,
  },
  {
    district: "St. Pauli",
    title: {
      de: "Eingang Neue Messe, Planten un Blomen Hamburg",
      en: "Entrance New Trade Fair, Planten un Blomen Hamburg",
    },
    description: {
      de: "Wie eine Schärpe legt sich der neue Zaun am ParkeingangNeue Messe um das Gartengelände. Er besteht aus Lamellen,die mit Licht und Schatten spielen, abgrenzen und schützen,gleichzeitig Einblick gewähren und neugierig machen, denn siesind nach außen hin verformt, als würde die Natur gegen ihre Begrenzung aufbegehren. Thematisiert wird die Ambivalenzvon Schutz des kostbaren Gartens und nachdrücklicher Ein ladung zum Besuch durch eine Rampe, die den neuen Zugangals Einschnitt durch die dichte grüne Fassade inszeniert.",
      en: "The new fence at the entrance to the Neue Messe park wraps around the garden grounds like a sash. It consists of slats that play with light and shadow, demarcate and protect, while at the same time providing insight and arousing curiosity, because they are deformed outwards, as if nature were rebelling against their boundaries. The ambivalence of protecting the precious garden and emphatically inviting visitors is thematised by a ramp that stages the new access as an incision through the dense green façade.",
    },
    architect: "Lola Meyer, A24 Landschaft",
    address:
      "Eingangsplatz Nord, Rentzelstraße / Ecke Tiergartenstraße (gegenüber dem Fernsehturm), 20357 Hamburg, Hamburg",
    id: 24,
    lat: 53.5631192,
    lng: 9.9758418,
  },
  {
    district: "St. Pauli",
    title: {
      de: "Talschmuck, Neubau einer Wohnanlage",
      en: "Valley decoration, new construction of a residential complex",
    },
    description: {
      de: "Neubau einer Wohnanlage mit 85 Mietwohnungen. Sanierung, Erweiterung eines denkmalgeschützten Hauses im Herzen von St. Pauli. Baulückenschließung mit Nach verdichtung im Blockinnenbereich. Anteil von 30% öffentlich gefördertem Wohnraum.",
      en: "New construction of a residential complex with 85 rental flats. Refurbishment and extension of a listed building in the heart of St. Pauli. Building gap closure with redensification in the inner block area. Share of 30% publicly subsidised housing.",
    },
    architect:
      "Axel Farnschläder und Michael Thüs, Thüs Farnschläder Architekten ",
    address: "Talstraße 47, 20359 Hamburg, Hamburg",
    id: 25,
    lat: 53.55117,
    lng: 9.95981,
  },
  {
    district: "Wilhelmsburg",
    title: {
      de: "Schwimmhalle Inselpark",
      en: "Inselpark swimming pool",
    },
    description: {
      de: "Die Schwimmhalle Inselpark wurde als Projekt der Internatio nalen Bauausstellung im April 2013 eröffnet. Die hierausresultierenden architektonischen Besonderheiten und energe tischen Vorgaben wurden durch die Architekturbüros ASWfür den Fassadenentwurf und bs2 für die Generalplanung undInnenarchitektur umgesetzt. Vier unterschiedliche Fassaden,darunter eine 40 m x 8 m große, zu öffnende Glasfassade undeine farblich codierte und akzentuierte Innenraumgestal tung unterstreichen den Sportbadcharakter.",
      en: "The Inselpark indoor swimming pool was opened in April 2013 as a project of the International Building Exhibition. The resulting architectural features and energy specifications were realised by the architectural firms ASW for the façade design and bs2 for the general planning and interior architecture. Four different façades, including a 40 m x 8 m glass façade that can be opened, and a colour-coded and accentuated interior design underline the character of the sports pool.",
    },
    architect: "Elmar Männer, bs2architekten",
    address:
      "Schwimmhalle Inselpark, Kurt-Emmerich-Platz 12, 21109 Hamburg, Hamburg",
    id: 26,
    lat: 53.4954928,
    lng: 10.001742,
  },
  {
    district: "Alsterdorf",
    title: {
      de: "Aufstockung der Orchideenterrassen",
      en: "Expanding the orchid terraces",
    },
    description: {
      de: "Für vier mehrgeschossige Wohnbauten aus den 50er Jahrengalt es eine Lösung für eine höhere Ausnutzung durch Auf stockung der bestehenden Gebäude zu erarbeiten. Es wurdensechs eingeschossige Wohnungen und zwölf zweigeschossigeMaisonette-Wohnungen geschaffen. Die Durchführung durftedas Sondereigentum des Bestandes nicht berühren und mussteeigenständig gegründet werden. Die Gebäude wurden miteiner Stahlbetonkonstruktion tischartig überbaut. Die Aufsto ckung erfolgte in Leichtbauweise aus vorgefertigten Modulen.",
      en: "For four multi-storey residential buildings from the 1950s, the aim was to develop a solution for higher utilisation by adding storeys to the existing buildings. Six single-storey flats and twelve two-storey maisonette flats were created. The realisation was not allowed to affect the special property of the existing building and had to be founded independently. The buildings were topped with a reinforced concrete structure in the form of a table. The superstructure was a lightweight construction made from prefabricated modules.",
    },
    architect: "Bauatelier Dipl.-Ing. Architekt Torsten Pilch",
    address: "Orchideenstieg 8, vor dem Treppenhaus, Hamburg",
    id: 27,
    lat: 53.6040945,
    lng: 9.9912309,
  },
  {
    district: "Altona",
    title: {
      de: "AKK Altonaer Kinderkrankenhaus: Erweiterungsbauten, Sanierung, Um- und Ausbau",
      en: "AKK Altona Children's Hospital: extensions, renovation, conversion and expansion",
    },
    description: {
      de: "Das AKK wurde 1859 gegründet und gehört zu den größtenKinderkliniken Deutschlands. Die seit 2004 betreute Sanierungund der Aus- und Erweiterungsbau des teilweise historischenEnsembles umfasst u.a. den Bau des „Lufthafens“, der Cafe teria, die Sanierung des „S-Hauses“ zum ambulanten Versor gungszentrum und aktuell die Erweiterung der OPs. Es galtfunktionale Anforderungen eines modernen Krankenhausbe triebes in denkmalgeschützter Bausubstanz umzusetzen.",
      en: "The AKK was founded in 1859 and is one of the largest paediatric clinics in Germany. The renovation and extension of the partly historical ensemble, which has been underway since 2004, includes the construction of the 'Lufthafen', the cafeteria, the renovation of the 'S-Haus' into an outpatient care centre and currently the extension of the operating theatres. The aim is to realise the functional requirements of a modern hospital operation in a listed building.",
    },
    architect: "euroterra Ingenieurgesellschaft mbH & Co. KG",
    address:
      "Cafeteria des AKK, Eingang Bleickenallee 38 oder Grünebergstraße , Hamburg",
    id: 28,
    lat: 53.5520562,
    lng: 9.9130905,
  },
  {
    district: "Altona",
    title: { de: "Elbdeck Hamburg", en: "Elbe deck Hamburg" },
    description: {
      de: "Neubau des Wohn- und Geschäftsgebäudes Elbdeck mitrund 100 hochwertig ausgestatteten Wohnungen am Elbufer.Eine Tiefgarage mit rund 280 Stellplätzen bildet den Sockel,der gleichzeitig als Flutschutzpolder dient, zuzüglich Büros,Gastronomie- und Ladenflächen in den Erdgeschossen und teilweise dem 1./2.OG. Die gewählte hellrote Farbigkeitdes Ziegels, die im freundlichen Kontrast zu den weißen Putzflächen steht, verleiht dem Elbdeck Hamburg ein medi terranes Flair und wirkt stets heiter - selbst an trüben Tagen.",
      en: "New construction of the Elbdeck residential and commercial building with around 100 high-quality flats on the banks of the Elbe, an underground car park with around 280 parking spaces forms the base, which also serves as a flood protection buffer, plus offices, restaurants and retail space on the ground floors and partly on the first and second floors. The chosen light red colour of the brick, which stands in friendly contrast to the white plaster surfaces, gives the Elbdeck Hamburg a Mediterranean flair and always appears cheerful - even on dull days.",
    },
    architect: "Carsten Roth Architekt",
    address: "Neumühlen 1, Ecke Kaispeicher , Hamburg",
    id: 29,
    lat: 53.54470019999999,
    lng: 9.9270263,
  },
  {
    district: "Altona",
    title: { de: "Ikea Altona Hamburg", en: "Ikea Altona Hamburg" },
    description: {
      de: "Über drei Geschosse präsentiert sich der erste innerstäd tische Ikea Fachmarkt. Im Vordergrund der Bauaufgabe standdie Entwicklung eines Fassadensystems, das die Bedürfnisseder Kunden und Anwohner gleichermaßen berücksichtigt.Das Grundthema bildet hierfür ein Strichcode, definiert durchschuppenartig aneinandergefügte, gekantete Metallpaneele.Je nach Standpunkt zeigt sich das Gebäude farbig oder neutralund vereint so die zwei konträren Ziele in einer Fassade.",
      en: "The first city centre Ikea specialist store is spread over three storeys. The focus of the construction task was to develop a façade system that takes into account the needs of customers and residents alike.the basic theme for this is a barcode, defined by folded metal panels joined together like scales.depending on the point of view, the building appears colourful or neutral and thus combines the two contrasting objectives in one façade",
    },
    architect:
      "nps tchoban voss GmbH & Co KG (hochbauliche Planung);DFZ Architekten GmbH (Fassadengestaltung, Kubatur)",
    address: "Haupteingang Ikea, Große Bergstraße 164, Hamburg",
    id: 30,
    lat: 53.5515976,
    lng: 9.9416207,
  },
  {
    district: "Altona",
    title: {
      de: "Wohnungsbau Palmaille 92",
      en: "Housing construction Palmaille 92",
    },
    description: {
      de: "Die Interpretation klassischer Elemente der historischenBebauung der Palmaille, in einem dennoch deutlich modernwirkenden Wohngebäude, war die gestalterische Zielsetzungdieses Projektes. Durch die ausgeprägte Körperhaftigkeit mit ihren klar eingeschnittenen Öffnungen, der stringentenFassadenteilung und der variierenden Tiefe wurde eine plastische Betonung analog zu den historischen Nachbar gebäuden erreicht. Die weiß gefärbte Fassade, die sich bis über die geneigte Dachfläche zieht, ist ein prägnantes Gestaltungselement.",
      en: "The design objective of this project was to interpret classic elements of the historic Palmaille development in a residential building with a distinctly modern feel. The pronounced physicality with its clearly incised openings, the stringent division of the façade and the varying depth achieved a sculptural emphasis analogous to the historic neighbouring buildings. The white-coloured façade, which extends over the sloping roof surface, is a striking design element.",
    },
    architect: "La`ket Architekten GmbH",
    address: "Palmaille 92, Hamburg",
    id: 31,
    lat: 53.54647629999999,
    lng: 9.940574699999999,
  },
  {
    district: "Altstadt",
    title: {
      de: "Deichtorhallen Hamburg: Sanierung der Halle für Aktuelle Kunst",
      en: "Deichtorhallen Hamburg: renovation of the hall for contemporary art",
    },
    description: {
      de: "Die 1912 errichtete und 1989 von Josef Paul Kleihues zur„Halle für Aktuelle Kunst“ umgebaute nördliche Deichtorhallewurde grundhaft saniert und neugeordnet. Städtebaulichöffnet sich die Halle nunmehr auch nach Westen mit neuemCafé, Bookshop und den Räumen der kulturellen Bildung.Denkmalpflegerisch konnte trotz neuer Klima- und Bauphysik anforderungen der einzigartige Charakter der gesamten Halledurch differenzierte Pufferzonenbildung erhalten bleiben.",
      en: "The northern Deichtorhalle, which was built in 1912 and converted into the 'Halle für Aktuelle Kunst' by Josef Paul Kleihues in 1989, was completely renovated and reorganised. In terms of urban planning, the hall is now also open to the west with a new café, bookshop and cultural education rooms, and despite new climate and building physics requirements, the unique character of the entire hall has been preserved by creating differentiated buffer zones",
    },
    architect: "Gregor Sunder-Plassmann Architekten BDA mit Stephanie Kaindl",
    address: "Eingang nördliche Deichtorhalle, Deichtorstraße 1+2, Hamburg",
    id: 32,
    lat: 53.5470705,
    lng: 10.006862,
  },
  {
    district: "Barmbek-Nord",
    title: {
      de: "Neu- und Anbau Bürgerhaus Barmbek",
      en: "New construction and extension of the Barmbek community center",
    },
    description: {
      de: "Dem Entwurf für die Erweiterung des Bürgerhauses lag als wesentlicher Gedanke der Respekt vor dem denkmal geschützten Gebäude von Fritz Schumacher zugrunde. Der Neubau wird als Ergänzung der Schumacherschen Architektur verstanden. Er fügt sich zurückhaltend an den historischen Bestand an, besticht aber durch seine architektonische Eigenständigkeit. Entwurfsmotive des Bestands wurden neu interpretiert und finden in der klaren und sachlichen Klinkerfassade ihren Ausdruck.",
      en: "The main idea behind the design for the extension of the community centre was respect for Fritz Schumacher's listed building. The new building is seen as a complement to Schumacher's architecture. It blends in discreetly with the existing historical building, but is characterised by its architectural independence. Design motifs from the existing building have been reinterpreted and are expressed in the clear and functional clinker brick façade.",
    },
    architect: "KBNK Architekten GmbH",
    address: "Lorichstraße 28A, vor dem Haupteingang, Hamburg",
    id: 33,
    lat: 53.6024045,
    lng: 10.0440227,
  },
  {
    district: "Barmbek-Nord",
    title: {
      de: "Umbau und Erweiterung der Kultureinrichtung Zinnschmelze",
      en: "Reconstruction and expansion of the Zinnmelte cultural facility",
    },
    description: {
      de: "Das Gebäude auf dem Museumshof wurde grundlegend umgebaut und räumlich neu geordnet sowie um einen Neubau erweitert. Alt- und Neubau wurden durch einen gläser nen Verbindungsbau verknüpft. Der Erweiterungsbau folgt der Kubatur des Altbaus, interpretiert diesen aber neu. Dunkel braunes Kupfer zieht sich als Hülle über Dach und Fassadedes Neubaus und gliedert sich in den industriellen Charakterdes ehemaligen Fabrikgeländes ein.Architekten: LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
      en: "The building on the museum courtyard was fundamentally remodelled and spatially reorganised, and a new building was added. The old and new buildings were linked by a glass connecting structure. The extension follows the cubature of the old building, but reinterprets it. Dark brown copper covers the roof and façade of the new building and blends in with the industrial character of the former factory site: LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
    },
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
    address: "Haupteingang Zinnschmelze, Maurienstraße 19, Hamburg",
    id: 34,
    lat: 53.5858943,
    lng: 10.0446922,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Wohn- und Geschäftshaus Isebekdomizil",
      en: "Residential and commercial building Isebekdomizil",
    },
    description: {
      de: "Das Haus zwischen U-Bahnhaltestelle Hoheluftbrücke und der Isebek hat eine bewegte Planungsgeschichte. DerSiegerentwurf von 2007 für das Bürogebäude Hoheluft kontor wurde in einem Bürgerbegehren abgelehnt. Das nunrealisierte gemischte Gebäudekonzept umfasst 30 Studen tenwohnungen, 40 Mietwohnungen, einen Supermarkt sowie eine gemeinschaftlich genutzte Spielfläche. Das Gebäude orientiert sich mit seiner Klinkerfassade an der angrenzen den Bebauung der 1920er Jahre.",
      en: "The building between the Hoheluftbrücke underground station and the Isebek has an eventful planning history. The winning design from 2007 for the Hoheluft kontor office building was rejected in a referendum. The mixed building concept that has now been realised comprises 30 student flats, 40 rental flats, a supermarket and a communal play area. With its clinker brick façade, the building is modelled on the neighbouring buildings from the 1920",
    },
    architect: "APB. Architekten BDA (LP 1-5, tlw. 8)",
    address: "Kaiser-Friedrich-Ufer 30, vor dem Supermarkt, Hamburg",
    id: 35,
    lat: 53.57781749999999,
    lng: 9.9759212,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Haus Winter - Passivhaus im gründerzeitlichen Gewand",
      en: "Haus Winter - passive house in Wilhelminian style",
    },
    description: {
      de: "Der Passivhausneubau „Haus Winter“ schließt eine lang jährige Baulücke in einer durch gründerzeitliche Architekturgeprägten Nachbarschaft und vereint dabei zwei zentrale Anforderungen, die sich auf den ersten Blick auszuschlie ßen scheinen: Zum einen sollte das historische Stadtbild durch einen sich optisch ohne Bruch einfügenden „grün derzeitlichen“ Neubau ergänzt werden, zum anderen sollte ein nachhaltiges Gebäude geschaffen werden, das den modernen Ansprüchen an Energieeffizienz und Ökologie mehr als gerecht wird.",
      en: "The new passive house building 'Haus Winter' closes a long-standing gap in a neighbourhood characterised by Wilhelminian architecture and combines two central requirements that at first glance appear to be mutually exclusive: On the one hand, the historic cityscape was to be complemented by a new building that blends in visually without a break and, on the other, a sustainable building was to be created that more than fulfils modern demands for energy efficiency and ecology",
    },
    architect: "Architekturbüro Jakob Siemonsen",
    address: "Wiesenstraße 7, vor dem Haus, Hamburg",
    id: 36,
    lat: 53.5758202,
    lng: 9.9572366,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Witwenball - Küche & Wein",
      en: "Widow's Ball - Kitchen & Wine",
    },
    description: {
      de: "Der Witwenball ist ein stilvolles, gemütliches Weinrestaurantim Schanzenviertel. Der Name des Restaurants hat Tradition.Bis in die 1980er Jahre existierte an dieser Stelle das beliebteTanzlokal „Elfriedes Witwenball“. Die Idee des Projektes ist „ein Tisch für Freunde und Freundes Freunde“. Der Restau rantbesucher wird von einem imposanten Tresen aus Carrara Marmor, Tischflächen aus Emperado-Marmor, türkisfarbenen,glamourösen Polsterstoffen, der Antikspiegelwand und durch die edlen Tapeten mit zarten Wolkenmustern aus demAlltag entführt.Architekten: Giorgio Gullotta Architekten",
      en: "Der Witwenball' is a stylish, cosy wine restaurant in the Schanzenviertel district. The name of the restaurant has a long tradition: until the 1980s, the popular dance hall 'Elfriedes Witwenball' existed on this site. The idea behind the project is 'a table for friends and friends of friends'. Visitors to the restaurant are whisked away from everyday life by an imposing Carrara marble counter, Emperado marble table surfaces, glamorous turquoise-coloured upholstery fabrics, the antique mirror wall and the elegant wallpaper with delicate cloud patterns: Giorgio Gullotta Architects",
    },
    architect: "Giorgio Gullotta Architekten",
    address: "Weidenallee 20, Hamburg",
    id: 37,
    lat: 53.56716240000001,
    lng: 9.965251499999999,
  },
  {
    district: "Hamm",
    title: {
      de: "Mehrfamilienhaus  Sievekingdamm 72",
      en: "Apartment building Sievekingdamm 72",
    },
    description: {
      de: "Ziel des vorgeschlagenen Bebauungskonzeptes ist es, mit tels eines lagerhaften, fünfgeschossigen Baukörpers ohnewesentliche Höhenakzente die Kontinuität des „Boulevards“Sievekingdamm zu stärken, nicht zu unterbrechen und deutlich räumlich zu fassen. Gleichzeitig wird ein weitererkleinerer Baukörper kompositorisch so positioniert, dass erdem Kontext der Blockrandschließung folgt, sich aber zur Nachbarschaft hin öffnet und diese mittels Durchwegung vom„Fuchsloch“ zum „Hofquartier“ einbindet und bereichert.",
      en: "The aim of the proposed development concept is to strengthen the continuity of the Sievekingdamm 'boulevard' by means of a stock-like, five-storey structure without any significant height accents, without interrupting it and clearly defining it spatially. At the same time, a smaller building is positioned compositionally in such a way that it follows the context of the block edge closure, but opens up to the neighbourhood and integrates and enriches it by means of a passageway from the 'Fuchsloch' to the 'Hofquartier'.",
    },
    architect: "APB. Architekten BDA (LP 1-5, tlw. 8)",
    address: "Sievekingdamm 72 , Hamburg",
    id: 38,
    lat: 53.5600395,
    lng: 10.0513554,
  },
  {
    district: "Hammerbrook",
    title: { de: "Hausboot „Schwan“", en: "Houseboat “Swan”" },
    description: {
      de: "In diesem Hausbootentwurf verbindet sich das indi viduelle Leben auf dem Wasser mit der nachhaltigen Nutzung möglichst weniger fossiler Ressourcen. Zur funktionalen Zonierung des Grundrisses ist der Baukörper in Scheiben unterteilt. Das Hausboot wurde als klassischer Holzrahmenbau auf einem Stahlbeton-Ponton ausgeführt. Neben der Dämmung der Hülle wurden aktive Systeme integriert und die Speicherung von Warmwasser und Strom durch Sonnenenergie einbezogen.",
      en: "This houseboat design combines individual living on the water with the sustainable use of as few fossil resources as possible. The structure is divided into slices for functional zoning of the floor plan. The houseboat was designed as a classic timber frame construction on a reinforced concrete pontoon. In addition to the insulation of the shell, active systems were integrated and the storage of hot water and electricity through solar energy was included.",
    },
    architect: "Daniel Wickersheim Architekt",
    address:
      "Norderkai-Ufer 1, am Mittelkanal zwischen Hammerbrookbrücke und Nagelswegbrücke, Hamburg",
    id: 39,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Hammerbrook",
    title: { de: "Hausboot „Sonn  Dusel“", en: "Houseboat “Sonn Dusel”" },
    description: {
      de: "In den Räumen des Hausbootes soll sich das Gefühl vermitteln, auf einem Boot zu sein. Daher wurde der Schlaf bereich tiefer gelegt. Die Bewohner „tauchen“ so zu den „Kojen“ ab. Der Wohnbereich liegt dagegen auf Wasser niveau und kann über eine Schiebetüre großflächig zum Wasser hin geöffnet werden. Durch die Verteilung der Räumeauf zwei Niveaus ist die Trennung in einen öffentlicheren und einen privaten Bereich und die Brückengängigkeit fürden Standort gewährleistet worden.",
      en: "In the rooms of the houseboat, you should have the feeling of being on a boat. The sleeping area has therefore been lowered. The occupants 'dive' down to the 'bunks'. The living area, on the other hand, is at water level and can be opened up to the water via a large sliding door. By dividing the rooms into two levels, the separation into a more public and a private area and the accessibility of the site by bridge has been ensured.",
    },
    architect: "Rost.Niderehe Architekten I Ingenieure",
    address:
      "Norderkai-Ufer 3, am Mittelkanal zwischen Hammerbrookbrücke und Nagelswegbrücke, Hamburg",
    id: 40,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Langenhorn",
    title: {
      de: "Joachim Herz Stiftung - Bürogebäude mit Lehr- und Veranstaltungsräumen",
      en: "Joachim Herz Foundation - office building with teaching and event rooms",
    },
    description: {
      de: "Der Neubau wurde auf dem Areal einer ehemaligen Kaffee rösterei errichtet. Ein markanter 25 Meter hoher Röstturmblieb erhalten und wurde gestalterisch und funktional indas neue Gesamtensemble integriert. Das dreigeschossigeGebäude umspielt den Röstturm mit einem mäandrierendenGrundriss und bildet zwei eigenständige Innenhöfe, um die sich lichtdurflutete Büros, Lehr- und Veranstaltungsräumesowie eine großzügige Cafeteria mit Seeterrasse anordnen.",
      en: "The new building was constructed on the site of a former coffee roasting plant. A striking 25 metre high roasting tower was retained and integrated into the new overall ensemble in terms of design and function. The three-storey building surrounds the roasting tower with a meandering floor plan and forms two independent inner courtyards, around which light-flooded offices, teaching and event rooms and a spacious cafeteria with a lakeside terrace are arranged",
    },
    architect:
      "Kitzmann ArchitektenFührung: Michael Kitzmann, Kitzmann Architekten",
    address:
      "Langenhorner Chaussee 384, Zugang über Oehleckerring, auf dem Vorplatz der Stiftung, Hamburg",
    id: 41,
    lat: 53.66080119999999,
    lng: 10.0038733,
  },
  {
    district: "Neustadt",
    title: {
      de: "Umgestaltung Katholische Kirche St. Ansgar - Kleiner Michel",
      en: "Redesign of the Catholic Church of St. Ansgar - Kleiner Michel",
    },
    description: {
      de: "Umgestaltung des Innenraumes und der wieder freigelegten Südfassade der im Jahre 1953-1955 erbauten neoklassizistischen Saalkirche an dem historischen Standort der ursprünglichen Michaeliskirche.Architekten: Architektur + Stadtplanung, Ewers Dörnen + Partner GmbH Führungen: Klaus Dörnen, Architektur + Stadtplanung, Ewers Dörnen + Partner GmbH",
      en: "Redesign of the interior and the re-exposed south façade of the neoclassical hall church built in 1953-1955 on the historic site of the original St Michael's Church.' Architects: Architektur + Stadtplanung, Ewers Dörnen + Partner GmbH Guided tour: Klaus Dörnen, Architecture + Urban Planning, Ewers Dörnen + Partner GmbH",
    },
    architect: "Architektur + Stadtplanung, Ewers Dörnen + Partner GmbH ",
    address: "Michaelisstraße 5, Kirchenvorplatz  , Hamburg",
    id: 42,
    lat: 53.5491233,
    lng: 9.9830358,
  },
  {
    district: "Nienstedten",
    title: {
      de: "Neubau eines Mehrfamilienhauses mit Tiefgarage",
      en: "New construction of an apartment building with underground parking",
    },
    description: {
      de: "Ein unbebautes Grundstück in einem gewachsenen Villen gebiet wird um drei Wohnungen in einem villenähnlichenStadthaus arrondiert. Das Haus ist einem klaren kubischenFormenkanon verpflichtet, der mit wenigen Formaten undMaterialien auskommt. Die traditionelle dunkle Klinker fassade korrespondiert mit den dunklen Bronzetönen der Metallfenster und Faschen sowie der Brüstungselemente. Im Innern des Hauses zeigen loftähnliche Grundrisse, dass auch diese Bauaufgabe überraschend andersartige Lösungen aufzeigen kann.",
      en: "An undeveloped plot in a mature villa area is rounded off with three flats in a villa-like townhouse. The house is committed to a clear cubic form canon that makes do with few formats and materials. The traditional dark clinker brick façade corresponds with the dark bronze tones of the metal windows and frames as well as the parapet elements. Inside the building, loft-like floor plans show that this construction task can also reveal surprisingly different solutions.",
    },
    architect: "Spengler · Wiescholek Architekten Stadtplaner",
    address: "Christian August Weg 22, Hamburg",
    id: 43,
    lat: 53.5606144,
    lng: 9.828676,
  },
  {
    district: "Öjendorf",
    title: {
      de: "Modernisierung der Feierhallen auf dem Friedhof Öjendorf",
      en: "Modernization of the celebration halls at the Öjendorf cemetery",
    },
    description: {
      de: "Der Friedhof Öjendorf ist der dritte Hauptfriedhof Hamburgs, mit dessen Planung Baudirektor Gropp bereits 1930 be gonnen hatte. Die drei Feierhallen aus den 1960er Jahren ent sprachen nicht mehr den heutigen Anforderungen und warendringend sanierungsbedürftig. Im Spannungsfeld zwischenDenkmalschutz und Erhöhung der Attraktivität für Be stattungsfeiern setzten die Architekten B8 auf eine behut same Sanierung und erhielten die Hallen weitestgehend in ihrem äußeren Erscheinungsbild.",
      en: "The Öjendorf cemetery is Hamburg's third main cemetery, the planning of which was begun by building director Gropp as early as 1930. The three cemetery halls from the 1960s no longer met today's requirements and were in urgent need of renovation. In the area of conflict between monument protection and increasing the attractiveness for funeral ceremonies, the architects B8 focussed on a careful renovation and preserved the halls as far as possible in their external appearance.",
    },
    architect: "Architekten B8 Ingwersen I Rapp GmbH",
    address:
      "Friedhof Öjendorf, Platz vor der mittleren Halle (Halle 2)  , Hamburg",
    id: 44,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Othmarschen",
    title: {
      de: "Wohnen in den Othmarscher Höfen",
      en: "Living in the Othmarscher Höfe",
    },
    description: {
      de: "Im Eingangsbereich des neuen Wohnquartiers „OthmarscherHöfe“ bilden die zwei Wohnhäuser der Wohnungsbaugenossen schaft ALTOBA den Auftakt der neuen „Grünen Mitte“ mit 43 familiengerechten Wohneinheiten. Hervorzuheben ist dasKonzept einer wandelbaren Grundrissgestaltung für sich ändernde Wohnbedürfnisse. Die ALTOBA hat als erstes Ham burger Wohnungsunternehmen für dieses Projekt das Zer tifikat „Nachhaltiger Wohnungsbau“ vom NaWoh (Verein zurFörderung der Nachhaltigkeit im Wohnungsbau) erhalten.",
      en: "In the entrance area of the new residential quarter 'OthmarscherHöfe', the two residential buildings of the ALTOBA housing cooperative form the prelude to the new 'green centre' with 43 family-friendly residential units. The concept of a changeable floor plan design for changing living requirements is worth emphasising. ALTOBA was the first housing company in Hamburg to receive the 'Sustainable Housing' certificate from NaWoh (Association for the Promotion of Sustainability in Housing Construction) for this project.",
    },
    architect:
      "LRW Architekten und Stadtplaner, Loosen, Rüschoff + Winkler PartG mbB",
    address: "Jürgen Töpfer Straße 51-57, Hamburg",
    id: 45,
    lat: 53.5576466,
    lng: 9.9034622,
  },
  {
    district: "Ottensen",
    title: {
      de: "Ice-Loft, Wohn- und Geschäftshaus",
      en: "Ice loft, residential and commercial building",
    },
    description: {
      de: "Fließende Formen wie zu Eis erstarrt; ein Erdgeschoss, des sen Rankpflanzen den amorphen Linien folgen; ein gerundetesDach, dessen Gauben wie kleine Wellen die Bewegungeinleiten: als erstes Bauwerk mit einer Fassade aus Mineral werkstoff in Norddeutschland steht dieses ungewöhnlicheStadthaus neben den Altbauten der denkmalgeschützten Zeiß straße. Und doch fügt es sich mit seiner klassischen Gliede rung überraschend harmonisch in das historische Ensemble ein.",
      en: "Flowing forms as if frozen into ice; a ground floor whose climbing plants follow the amorphous lines; a rounded roof whose dormers introduce the movement like small waves: this unusual townhouse is the first building with a façade made of mineral material in northern Germany to stand next to the old buildings on the listed Zeißstrasse. And yet, with its classic structure, it blends in surprisingly harmoniously with the historic ensemble.",
    },
    architect: "Planungsbüro Köhler",
    address: "Abbestraße 50 / Ecke Zeißstraße, Hamburg",
    id: 46,
    lat: 53.5549881,
    lng: 9.930684399999999,
  },
  {
    district: "Steinwerder",
    title: { de: "Theater an der Elbe", en: "Theater on the Elbe" },
    description: {
      de: "Das im letzten Jahr von Stage Entertainment neu er öffnete Musical-Theater prägt v.a. durch seine glänzende Edelstahlfassade die Ansicht auf die Hafenkante gegenüber den Landungsbrücken. Dahinter verbirgt sich ein Theater gebäude mit bis zu 1.900 Sitzplätzen, mit einem vollflächig verglasten Foyer, ein Betriebsgebäude mit Künstlergarde roben, Probenräumen, Büros, Werkstätten, Mitarbeiterkantinesowie der 26 Meter hohe Bühnenturm mit Schnürboden und Eisernem Vorhang.",
      en: "The musical theatre, newly opened last year by Stage Entertainment, dominates the view of the harbour edge opposite the Landungsbrücken bridges with its gleaming stainless steel façade. Behind it is a theatre building with up to 1,900 seats, a fully glazed foyer, an operations building with artists' dressing rooms, rehearsal rooms, offices, workshops, staff canteens and the 26-metre-high stage tower with a laced floor and iron curtain",
    },
    architect:
      "AMA Group Associates Architects BV (Entwurf) und Schenk +Waiblinger Architekten (Genehmigungs- und Ausführungsplanung)",
    address:
      "Bühneneingang, Zugang über Norderelbstraße 8, Anfahrt überHafen bzw. Alten Elbtunnel (Fahrrad). Die Fähre 73 fährt nicht., Hamburg",
    id: 47,
    lat: 53.5396469,
    lng: 9.9744016,
  },
  {
    district: "St. Georg",
    title: {
      de: "Wohnbebauung Rosenallee 1, Ecke Repsoldstraße",
      en: "Residential development at Rosenallee 1, corner of Repsoldstrasse",
    },
    description: {
      de: "Bei dem Neubau handelt es sich um ein Wohngebäude mit 14 öffentlich geförderten Wohneinheiten. Das Bauvorhabenschließt die im Zweiten Weltkrieg zerstörte Gebäudeecke der unter Denkmalschutz stehenden Münzburg. Der neu ent standene Baukörper wurde in enger Abstimmung mit demDenkmalschutz entwickelt. Eine besondere Herausforderungbei der Umsetzung war die hohe Lärmbelastung zwischenFernbahntrasse und stark befahrener Spaldingstraße, die zu hohen Schallschutzanforderungen führte.",
      en: "The new building is a residential building with 14 publicly subsidised residential units. The building project closes the corner of the Münzburg, which was destroyed in the Second World War and is a listed building. The new building was developed in close consultation with the listed building authorities. A particular challenge during realisation was the high noise pollution between the mainline railway and the busy Spaldingstrasse, which led to high noise protection requirements.",
    },
    architect: "BDS Bechtloff.Steffen.Architekten BDA",
    address: "Rosenallee 1, Ecke Repsoldstraße, Hamburg",
    id: 48,
    lat: 53.5490023,
    lng: 10.0134131,
  },
  {
    district: "St. Georg Süd / Hammerbrook",
    title: { de: "Mehr! Theater Hamburg", en: "More! Theater Hamburg" },
    description: {
      de: "Auf dem Gelände des Hamburger Großmarktes ist, in denBestand integriert, ein Musiktheater entstanden. Ein Teil desbestehenden Industriebaus aus dem Jahre 1962 ist hier zurVersammlungsstätte (Musiktheater mit Nutzungsmöglichkeitals Mehrzweckhalle) umgenutzt worden. Die unter Denkmal schutz stehende Halle (Architekt: Bernhard Hermkes) ist alseine baulich ungeteilte Fläche ausgeführt. Die Anforderungenan Gründung und statische Gegebenheiten stellten somitgroße Herausforderungen dar.",
      en: "A music theatre has been built on the site of the Hamburg wholesale market, integrated into the existing building. Part of the existing industrial building from 1962 has been converted into a venue (music theatre with the possibility of use as a multi-purpose hall). The listed hall (architect: Bernhard Hermkes) is designed as a structurally undivided area. The foundation and structural requirements therefore posed major challenges.",
    },
    architect: "Frans Dikmans, F101 Architekten (LP 1-5)",
    address:
      "Lippeltstraße/Ecke Banksstraße, vor dem Hochhaus Lippeltstraße 1, Hamburg",
    id: 49,
    lat: 53.5442601,
    lng: 10.0154184,
  },
  {
    district: "St. Pauli",
    title: {
      de: "Modernisierung der ehemaligen Rindermarkthalle",
      en: "Modernization of the former cattle market hall",
    },
    description: {
      de: "Die denkmalgeschützte Rindermarkthalle wurde aufwen dig, in Anlehnung an ihr altes und historisch bedeutendes Er scheinungsbild, modernisiert. Unter anderem wurden dieursprünglichen Fassaden wieder freigelegt und das Dach derehemals größten freitragenden Stahlbauhalle Europas instandgesetzt. Im Inneren wurde die große Marktfläche von ihrenzwischenzeitlichen Einbauten befreit und neu strukturiert, sodass sie heute neben Einzelhändlern auch Büroflächen, einerMoschee sowie örtlichen Vereinen und Künstlern Platz bietet.",
      en: "The listed Rindermarkthalle was extensively modernised in keeping with its old and historically significant appearance. Among other things, the original façades were uncovered and the roof of what was once the largest self-supporting steel construction hall in Europe was repaired. Inside, the large market area has been freed from its former installations and restructured so that it now offers space for retailers, offices, a mosque and local clubs and artists.",
    },
    architect:
      "ABJ.Planungsgesellschaft mbH (LP 1-4) und pbr Planungsbüro Rohling AG (LP 5-8)",
    address: "Neuer Kamp 31, vor dem Eingang an der Tankstelle, Hamburg",
    id: 50,
    lat: 53.5571275,
    lng: 9.9678068,
  },
  {
    district: "St. Pauli",
    title: { de: "Budapester Lofts", en: "Budapest lofts" },
    description: {
      de: "Von 2011 an wuchsen an der Budapester Straße zwei Loftgebäude von insgesamt 5.800 m² für kreative Dienst leister. Planungsziel war es, charakterstarke Gebäude und Flächen zu entwickeln, die den Nutzern Inspiration und Flexibilität bieten. Kleine Unterschiede wie Erker, Terrassen oder schmale Balkone geben den Flächen in jedem Geschoss einen individuellen Charakter. Das puristische Innenleben war als Arbeitsumfeld sofort gefragt: Binnen kurzer Zeit füllten Mieter das Ensemble mit Leben.",
      en: "From 2011 onwards, two loft buildings totalling 5,800 m² for creative service providers grew on Budapester Strasse. The planning objective was to develop buildings and spaces with a strong character that offer users inspiration and flexibility. Small differences such as bay windows, terraces or narrow balconies give the spaces on each floor an individual character. The purist interior was immediately in demand as a working environment: tenants quickly filled the ensemble with life.",
    },
    architect:
      "hda Henrik Diemann Architekten (LP 1-6) und GHP Landschaftsarchitekten (Innenhofgestaltung)",
    address: "Eingang Budapester Straße 45/46, Hamburg",
    id: 51,
    lat: 53.55533,
    lng: 9.96411,
  },
  {
    district: "St. Pauli",
    title: {
      de: "Resonanzraum Hamburg - Konzert- und Probesaal für das Emsemble Resonanz im Hochbunker",
      en: "Resonance room Hamburg - concert and rehearsal hall for the Emsemble Resonance in the high bunker",
    },
    description: {
      de: "Das selbstverwaltete Orchester Ensemble Resonanz hat in derzu einem Konzert- und Probesaal umgebauten Bunkeretageeine neue Spielstätte gefunden, den „Resonanzraum Hamburg“.Der Umgang mit der denkmalgeschützten Substanz des Hoch bunkers, die Erfordernis höchster akustischer Anforderungenwie auch das knappe Budget haben zu einer Reduktion derarchitektonischen Eingriffe und Einbauten auf das Wesentlichegeführt und einen neuen kulturellen Ort für die Verbindung zeit genössischer und klassischer Musikaufführungen geschaffen.",
      en: "The self-governing orchestra Ensemble Resonanz has found a new venue, the 'Resonanzraum Hamburg', in the bunker floor, which has been converted into a concert and rehearsal hall. the handling of the listed substance of the bunker, the need for the highest acoustic requirements and the tight budget have led to a reduction of the architectural interventions and installations to the essentials and created a new cultural venue for the combination of contemporary and classical music performances",
    },
    architect: "Prof. Jörg Friedrich PFP Planungs GmbH",
    address:
      "Hochbunker St. Pauli Heiliggeistfeld, 1.OG (Zugang überHaupteingang), Feldstraße 66, Hamburg",
    id: 52,
    lat: 53.554969,
    lng: 9.9696637,
  },
  {
    district: "Uhlenhorst",
    title: {
      de: "Kunst- und Mediencampus Hamburg Finkenau",
      en: "Art and Media Campus Hamburg Finkenau",
    },
    description: {
      de: "Der skulpturale Neubau ist eine Ergänzung zur ehemaligenFrauenklinik, die von Fritz Schumacher erbaut wurde undheute den Hauptteil des Kunst- und Mediencampus der Hoch schule für Angewandte Wissenschaften darstellt. Mit deut lichem Abstand zur Hauptbaumasse und Respekt zum Bau meister Fritz Schumacher, aber auch in Fortführung, als engeAnbindung des neuen Sockelbaus an den Altbau, sollen so Alt und Neu auch über das Material Ziegel ein städtebaulichharmonisches Ensemble um dem Campushof bilden.",
      en: "The new sculptural building is an addition to the former women's clinic, which was built by Fritz Schumacher and now forms the main part of the art and media campus of the University of Applied Sciences. With a clear distance to the main building mass and respect for the master builder Fritz Schumacher, but also in continuation, as a close connection of the new plinth building to the old building, old and new are to form a harmonious urban ensemble around the campus courtyard, also using brick as a material.",
    },
    architect: "Gerber Architekten",
    address: "Finkenau 35, Atrium Erdgeschoss, Hamburg",
    id: 53,
    lat: 53.5689453,
    lng: 10.0330673,
  },
  {
    district: "Uhlenhorst",
    title: {
      de: "Clubhaus Norddeutscher Regatta Verein",
      en: "Clubhouse North German Regatta Association",
    },
    description: {
      de: "Nach dem Brand im Clubhaus 2010 entschied man sich gegeneine Sanierung und, da der Jugendbereich ohnehin ver größert werden sollte, für einen Neubau an selber Stelle. Für das Untergeschoss unterhalb des Wasserspiegels war eine Spezialgründung notwendig. Es wurden Spundwände gestellt, um eine Sohle aus Unterwasserbeton zu gießen und damit das Gebäude gegen Aufschwimmen zu sichern. Vor eindringen dem Wasser schützt eine wasserundurchlässige Konstruktion.",
      en: "After the fire in the clubhouse in 2010, the decision was made not to renovate and, as the youth area was to be enlarged anyway, to build a new one on the same site. A special foundation was required for the basement below the water level. Sheet piling was used to pour a base of underwater concrete to prevent the building from floating. A watertight construction protects against water ingress.",
    },
    architect:
      "Planungsgemeinschaft RFP-BDS: Roschke Franzen und Partner / Beratende Ingenieure VBI und BDS Bechtloff Steffen Architekten BDA; Hennings-Börn Interiors (Innenarchitektur)",
    address: "Schöne Aussicht 36, Hamburg",
    id: 54,
    lat: 53.5746397,
    lng: 10.0086,
  },
  {
    district: "Wilhelmsburg",
    title: {
      de: "Kopfbauten des Weltquartiers Wilhelmsburg",
      en: "Head buildings of the Weltquartier Wilhelmsburg",
    },
    description: {
      de: "Die Arbeitersiedlung in dreigeschossiger Zeilenbauweise mit Satteldächern wurde durch zwei Neubauten ergänzt, die die baulichen Grundelemente des Bestandes auf genommen, in den skulpturalen Kopfbaukörpern neu inter pretiert und mit den Anforderungen an ein energetisch hocheffizientes Passivhaus verknüpft haben. Insgesamt 75 Wohneinheiten, unterschiedlicher Größe und Wohn form, sorgen für einen Wohnmix als Angebot an Singles, Paare und Familien und fördern dadurch die soziale Durchmischung des Weltquartiers.",
      en: "The workers' housing estate in three-storey terraced construction with pitched roofs was supplemented by two new buildings, which took up the basic structural elements of the existing building, reinterpreted them in the sculptural head structures and combined them with the requirements of a highly energy-efficient passive house. A total of 75 residential units of different sizes and living arrangements provide a residential mix for singles, couples and families, thereby promoting the social mix of the Weltquartier.",
    },
    architect: "Gerber Architekten",
    address: "Neuhöfer Straße 7, Eingang Energiebunker, Hamburg",
    id: 55,
    lat: 53.5102504,
    lng: 9.989579299999999,
  },
  {
    district: "Winterhude",
    title: {
      de: "Wohnen im Solitär - Neubau an der Barmbeker Straße",
      en: "Living in a solitaire - new building on Barmbeker Straße",
    },
    description: {
      de: "In der Nähe des Hamburger Stadtparks, an der Kreu zung Barmbeker Straße/Ecke Wiesendamm, entstand ein prägnantes Wohngebäude mit 20 Wohneinheiten. Der kompakte Baukörper bildet eine kräftige Geste zur stark befahrenen Straßenkreuzung. Zum Wiesendamm springt die doppelgeschossige Staffel leicht zurück, um auf die etwas niedrigere nachbarliche Bebauungsstruktur ein zugehen. Durch die prägnante Form des Neubaus und die Wahl des roten Backsteins ist ein zusammenhängen des städtebauliches Bild entstanden.",
      en: "A striking residential building with 20 residential units was built near Hamburg's Stadtpark, at the intersection of Barmbeker Strasse and Wiesendamm. The compact structure makes a bold gesture towards the busy road junction. Towards Wiesendamm, the two-storey staggered structure steps back slightly to respond to the slightly lower neighbouring building structure. The striking shape of the new building and the choice of red brick create a coherent urban image.",
    },
    architect: "coido architects Cordsen Ipach + Döll GmbH",
    address: "Wiesendamm 155, Haupteingang, Hamburg",
    id: 56,
    lat: 53.5897807,
    lng: 10.014431,
  },
  {
    district: "Winterhude",
    title: {
      de: "Sanierung und Umbau eines historischen Stadthauses",
      en: "Renovation and conversion of a historic town house",
    },
    description: {
      de: "Das im Jahr 1898 als dreigeschossiges Stadthaus errichteteEinfamilienhaus wurde komplett saniert. Dabei wurden diverseUmbauten entfernt: Fassade, Grundriss, Geschosshöhe sowieInnenausbau (Türen, Deckenstuck, Holzböden etc.) freigelegtund in Anlehnung an den historischen Entwurf rekonstruiert.Im Kontrast dazu wurde die Stahlkonstruktion des im Jahr 2000 aufgestockten Dachgeschosses teilweise zurückgebaut und mit einer zeitgemäßen Ganzglasfassade versehen und damit ein neuer Freiraum im Dach geschaffen.",
      en: "Built in 1898 as a three-storey townhouse, the detached house was completely renovated. Various alterations were removed: the façade, floor plan, storey height and interior fittings (doors, ceiling stucco, wooden floors, etc.) were uncovered and reconstructed in line with the historical design, while the steel structure of the top floor, which was added in 2000, was partially dismantled and fitted with a contemporary all-glass façade, creating a new open space in the roof",
    },
    architect:
      "ARGE Architektinnen Heide Dittmer & Susanne Lehmann-Reupert GbR",
    address: "Scheffelstraße 8, vor dem Eingangstor, Hamburg",
    id: 57,
    lat: 53.5794746,
    lng: 10.0072298,
  },
  {
    district: "Alsterdorf",
    title: {
      de: "Cafeteria Heilwig-Gymnasium",
      en: "Cafeteria Heilwig-Gymnasium",
    },
    description: {
      de: "Der Erweiterungsbau der Cafeteria grenzt an ein denk mal geschütztes Ensemble der Nachkriegsmoderne aus den 1960er Jahren, entworfen von Paul Seitz. Der Neubau ordnet sich in Kubatur und Fassade diesem Ensemble unter und ist dabei so eigenständig, dass der Bestand wei ter hin erkennbar bleibt. Ein Teil des Neubaus schiebt sich in den Bestand der Pausenhalle und bleibt auch dort ablesbar. Der Innenraum des dunklen Kubus überrascht mit weißen Oberflächen und einem lichtdurchfluteten,freundlichen Raumeindruck.",
      en: "The extension to the cafeteria is adjacent to a listed ensemble of post-war modernist buildings from the 1960s, designed by Paul Seitz. The new building is subordinate to this ensemble in terms of cubature and façade, yet is so independent that the existing building remains recognisable. Part of the new building slides into the existing break hall and remains recognisable there too. The interior of the dark cube surprises with white surfaces and a light-flooded, friendly spatial impression.",
    },
    architect:
      "tun-architektur Tommy Müller / Nathalie Dudda Partnerschaftsgesellschaft mbB",
    address: "Haupteingang Heilwig-Gymnasium, Wilhelm-Metzger-Str. 4, Hamburg",
    id: 58,
    lat: 53.6054197,
    lng: 9.9986397,
  },
  {
    district: "Altona",
    title: { de: "Stadthaus Palmaille 98", en: "Townhouse Palmaille 98" },
    description: {
      de: "Als Referenz für diese Interpretation großbürger lichen Wohnens dient das schönste Haus der Palmaille, das „Einfensterhaus“ von Christian Frederik Hansen. Herausfor derungen waren die Lage im Geltungsbereich eines über holten Durchführungsplans, einer Gestaltungs satzung, einersozialen Erhaltensverordnung, über einem S-Bahntunnel, in geschlossener Bebauung mit nicht unterkel lerten Baudenk malen, an einer lärmintensiven Straße sowie die Überschrei tung der festgesetzten Bruttogrundfläche um 140 Prozent.",
      en: "The most beautiful house on Palmaille, the 'Einfensterhaus' by Christian Frederik Hansen, serves as a reference for this interpretation of upper middle-class living. The challenges were the location in the area of application of a superseded implementation plan, a design statute, a social conservation ordinance, above a suburban railway tunnel, in a closed development with unrestricted building concepts, on a noisy street and exceeding the specified gross floor area by 140 per cent.",
    },
    architect:
      "Walter Gebhardt | Architekt, Y-LA Ando Yoo Land schaftsarchitektur, Ulrike Stammer Innenarchitektin (Bad LP 1-3)",
    address:
      "Palmaille 98, vor dem EingangHinweis: Teilnahme nur nach Vorlage eines gültigen Personalausweises, Hamburg",
    id: 59,
    lat: 53.5464875,
    lng: 9.9399312,
  },
  {
    district: "Altona",
    title: { de: "Die Neue Mitte Altona", en: "The New Center Altona" },
    description: {
      de: "Die „Neue Mitte Altona“ behandelt ein ca. 30 Hektar großesPlanungsgebiet, das sich unmittelbar nördlich des Bahn  hofs Altona im Bezirk Altona befindet und sich im Nordenbis zum Gleisbogen an der Stresemannstraße erstrecktund die Gleisanlagen des Bahnhofs und den ehemaligen Güterbahnhof Altona umfasst. Hier entstehen ca. 3.600 Woh  nungen, Geschäfte, Grünanlagen und öffentliche Einrich tungen. Ein Quartier zu schaffen und Ottensen und Altona Nord zu verbinden, ist die vorliegende Herausforderungdieses Projekts.",
      en: "Neue Mitte Altona' covers a planning area of around 30 hectares, which is located directly north of Altona railway station in the district of Altona and extends northwards to the railway bend on Stresemannstrasse, encompassing the railway station tracks and the former Altona goods station. Around 3,600 flats, shops, green spaces and public facilities are being built here. The challenge of this project is to create a neighbourhood and connect Ottensen and Altona Nord.",
    },
    architect:
      "André Poitiers Architekt Stadtplaner RIBA und arbos Freiraumplanung GmbH & Co. KG",
    address: "Harkortstraße 79, Hamburg",
    id: 60,
    lat: 53.5567857,
    lng: 9.936494999999999,
  },
  {
    district: "Altona",
    title: {
      de: "Sanierung Gewerbeschule G10 und Altonaer Theater",
      en: "Renovation of the G10 trade school and Altona Theater",
    },
    description: {
      de: "Das Gebäude wurde 1928 unter der Bezeichnung „Haus der Jugend“ als Staatliche Gewerbeschule von Gustav Oelsner geplant und bis 1930 gebaut - ein klar strukturierterStahlbetonskelettbau mit markanten Kupferverkleidungen. Nach dem Krieg wurde die Aula für das Altonaer Theater umgebaut. Die Herausforderung bestand in der Bestandsauf   nahme und Planung während der laufenden tiefgreifendenSanierung, der Sicherung erhaltener Bauteile und der Gestal tung neuer Einbauten im Sinne des historischen Entwurfs.",
      en: "The building was planned in 1928 under the name 'Haus der Jugend' as a state trade school by Gustav Oelsner and built until 1930 - a clearly structured reinforced concrete skeleton building with striking copper panelling. After the war, the auditorium was converted for the Altona Theatre. The challenge consisted of recording and planning the existing structure during the ongoing extensive refurbishment, securing the preserved components and designing new fixtures in line with the historical design.",
    },
    architect: "Spengler · Wiescholek",
    address: "Haupteingang Schule, Museumstraße 19, Hamburg",
    id: 61,
    lat: 53.5485872,
    lng: 9.9341247,
  },
  {
    district: "Altstadt",
    title: {
      de: "Patriotische Gesellschaft von 1765",
      en: "Patriotic Society of 1765",
    },
    description: {
      de: "Das denkmalgeschützte Backsteingebäude (1847, TheodorBülau) der Patriotischen Gesellschaft wurde 2012 bis 2016 durch Joachim Reinig revitalisiert: Im Mittelpunkt desEntwicklungskonzeptes standen die Wiedereröffnung desRestaurants „Zum alten Rathaus“, die dringend notwendigekonstruktive Sicherung, die Freilegung des neogoti  schen Säulenzimmers, die Restaurierung der 1950er-Jahre- Innenarchitektur, aber auch neue Beleuchtungskonzepte.",
      en: "The listed brick building (1847, Theodor Bülau) of the Patriotic Society was revitalised by Joachim Reinig between 2012 and 2016: The development concept centred on the reopening of the 'Zum alten Rathaus' restaurant, the urgently needed structural protection, the uncovering of the neo-Gothic pillared room, the restoration of the 1950s interior design and new lighting concepts",
    },
    architect: "Plan -R- Architektenbüro Joachim Reinig",
    address: "Trostbrücke 4, auf der Brücke, Hamburg",
    id: 62,
    lat: 53.5483579,
    lng: 9.9923121,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "Innenausbau Kita Alte Druckerei",
      en: "Interior design of the old print shop daycare center",
    },
    description: {
      de: "Ein pädagogischer Leitgedanke dieser siebengruppigen Kita ist die frühzeitige ästhetische Bildung, der in eine für Kinder und Erwachsene gleichermaßen erlebbare archi tektonische Sprache übersetzt wurde. Ein speziell ent  wickeltes modulares Möbel-System dient als thematischerWegweiser durch 1.000 Quadratmeter Fläche. Mit Anleihenan eine klassische Industriearchitektur wurden vom Kinderstuhl bis zum raumgreifenden Spielpodest alle Ein bauten eigens entworfen. Kernstück ist das Kinder-Ateliermit einer historischen Druckmaschine.",
      en: "One of the guiding pedagogical principles of this seven-group daycare centre is early aesthetic education, which has been translated into an architectural language that can be experienced by children and adults alike. A specially developed modular furniture system serves as a thematic guide through 1,000 square metres of space. Borrowing from classic industrial architecture, everything from the children's chair to the expansive play platform has been specially designed. The centrepiece is the children's studio with a historical printing press.",
    },
    architect: "D O C K Architekten Kurz, Knott & Scheltz PartGmbB",
    address:
      "Luruper Chaussee 125 (Gewerbehof Wichmannstr. 4), Haus 8A, Haupteingang, Hamburg",
    id: 63,
    lat: 53.57089269999999,
    lng: 9.891899,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "DESY Petra III Extension und weitere Gebäude",
      en: "DESY Petra III Extension and other buildings",
    },
    description: {
      de: "Die Experimentierhallen „PETRA-III Extension North & East“sind als Erweiterung der ausgelasteten, benachbartenPETRA-III-Halle entstanden. Sie sind in einem technischenUmfeld, welches sich seit den 1960er Jahren ständig ver ändert und schnell den Erfordernissen der physikalischenExperimente anpasst, entwickelt worden und erfüllenvielschichtige Anforderungen an die Physik, z. B. an Maßge nauigkeit, Schwingungsentkopplung und Strahlensicherheit.",
      en: "The 'PETRA-III Extension North & East' experimental halls were built as an extension to the neighbouring PETRA-III hall, which was already at full capacity. They were developed in a technical environment that has been constantly changing and rapidly adapting to the requirements of physics experiments since the 1960s and fulfil a wide range of physics requirements, such as dimensional accuracy, vibration decoupling and radiation safety.",
    },
    architect: "Renner Hainke Wirth Architekten GmbH",
    address: "DESY, Notkestraße 85, Haupteingang Notkestraße, Hamburg",
    id: 64,
    lat: 53.573032,
    lng: 9.880975,
  },
  {
    district: "Barmbek-Nord",
    title: {
      de: "Osterbekstraße 107, Umbau des ehemaligen „GUB“ zu Wohnraum für eine Baugemeinschaft",
      en: "Osterbekstraße 107, conversion of the former “GUB” into living space for a building community",
    },
    description: {
      de: "Im ehemaligen Schulgebäude des Gymnasium Uhlenhorst Barmbek - kurz GUB genannt - wurden für die Bauge nossenschaft FLUWOG-NORDMARK eG und die Bauge meinschaft „Kekse“ vierzig Wohnungen realisiert - alle individuell für die Bewohner geplant. Dafür wurde das Ge bäu de grundsaniert und zu einem Passivhaus umge baut. Heute zeigt sich das Gebäude als ein Wohngebäude, dem die Geschichte als Schulbau noch anzusehen ist.",
      en: "In the former school building of the Uhlenhorst Barmbek grammar school - known as GUB for short - forty flats were realised for the building cooperative FLUWOG-NORDMARK eG and the building cooperative 'Kekse' - all individually planned for the residents. The building was completely renovated and converted into a passive house. Today, the building is a residential building that still shows its history as a school building.",
    },
    architect:
      "Huke-Schubert Berge Architekten (Hochbau), Hunck + Lorenz Freiraumplanung (Freiraumplanung)",
    address: "Osterbekstraße 107, auf der Auffahrt , Hamburg",
    id: 65,
    lat: 53.5846404,
    lng: 10.0391451,
  },
  {
    district: "Blankenese",
    title: { de: "Villa Baurs Park", en: "Villa Baurs Park" },
    description: {
      de: "Die denkmalgeschützte Villa von 1924, am Elb hang in Blan kenese gelegen, wurde grundlegend überar  beitet und durch einen Neubauteil erweitert. Mit den vorgelager ten,sich dem Hang angepasst staffelnden Terrassen gehen Innen- und Außenraum wie nahtlos ineinander über. Aufallen Ebenen bieten sich Blicke auf die Elbe. Dies erfor derte eine intensive architektonische und handwerkli cheDurcharbeitung und besondere Detaillösungen.",
      en: "The listed villa from 1924, located on the banks of the Elbe in Blan kenese, has been completely renovated and extended with a new section. With the terraces in front, which are staggered to match the slope, the interior and exterior spaces merge seamlessly into one another. All levels offer views of the Elbe. This required intensive architectural and technical elaboration and special detailed solutions.",
    },
    architect:
      "ARTANDARCHITECTURE BUILDINGS URBAN SPACEEXHIBITIONS KIRSCH BREMER ARCHITEKTEN PARTG mbB, Innengestaltung in Zusammenarbeit mit FREIRAUM UG",
    address:
      "Baurs Weg 10,Hinweis: Teilnehmerzahl max. 15 Personen pro Führung, Hamburg",
    id: 66,
    lat: 53.5564909,
    lng: 9.811483899999999,
  },
  {
    district: "Finkenwerder",
    title: {
      de: "ZAL Zentrum für Angewandte Luftfahrtforschung",
      en: "ZAL Center for Applied Aviation Research",
    },
    description: {
      de: "Der Neubau des Zentrums für Angewandte Luftfahrtfor schung liegt am Steendiek-Kanal in Finkenwerder. Als technologisches Forschungs- und Entwicklungszentrum für die zivile Luftfahrtindustrie bildet das ZAL die Schnitt  stelle zwischen Wissenschaft und Wirtschaft. Mehr als25.000 Quadratmeter Nutzfläche bieten Raum für ca. 600Arbeitsplätze: Büro- und Laborflächen, Werkstätten, Audi torium, Kantine und ein Foyer mit Innovationsmarktplatz.Architekten: PSP Architekten Ingenieure Landschaftsarchitekten: Mertins | Hamburg | LandschaftsarchitekturTragwerksplanung: Weber · Poll Ingenieurbüro für Bauwesen GbR                    Führungen: Michael Krämer und Ulrich Joachim, PSP Architekten Ingenieure; Hermann Poll, Ingenieurbüro Weber · Poll",
      en: "The new building of the Centre for Applied Aeronautical Research is located on the Steendiek Canal in Finkenwerder. As a technological research and development centre for the civil aviation industry, the ZAL forms the interface between science and industry. More than 25,000 square metres of floor space provide room for around 600 workplaces: Office and laboratory space, workshops, auditorium, canteen and a foyer with an innovation marketplace.Architects: PSP Architekten Ingenieure Landscape architects: Mertins | Hamburg | LandschaftsarchitekturStructural planning: Weber - Poll Ingenieurbüro für Bauwesen GbR Guided tours: Michael Krämer and Ulrich Joachim, PSP Architekten Ingenieure; Hermann Poll, Ingenieurbüro Weber - Poll",
    },
    architect:
      "PSP Architekten Ingenieure Landschaftsarchitekten: Mertins | Hamburg | LandschaftsarchitekturTragwerksplanung: Weber · Poll Ingenieurbüro für Bauwesen GbR                    ",
    address: "Hein-Saß-Weg 22, vor dem Haupteingang, Hamburg",
    id: 67,
    lat: 53.5362132,
    lng: 9.868445,
  },
  {
    district: "Groß-Borstel",
    title: {
      de: "Schule Lokstedter Damm - Ersatzneubau Haus 2",
      en: "Lokstedter Damm School - replacement building house 2",
    },
    description: {
      de: "Die Ganztagsschule Lokstedter Damm hat einen Förder schwerpunkt für geistig und körperlich beeinträchtigte Kinder.Die Schule besteht aus einem Gebäudekomplex von vierSchulgebäuden mit Turnhalle und großzügigen Spiel- undSportplätzen. Im zweigeschossigen Neubau wurden vier Klassenräume mit jeweils angeschlossenen Differen zierungsräumen und Nebenräume untergebracht. Die Klassenräume orientieren sich entlang der südlichen Grund stücksgrenze, der Eingangsbereich im Westen öffnetsich zu den umliegenden Schulgebäuden.",
      en: "The Lokstedter Damm all-day school has a special focus on mentally and physically impaired children and consists of a complex of four school buildings with a gymnasium and spacious playgrounds and sports grounds. The new two-storey building houses four classrooms, each with adjoining differentiation rooms and ancillary rooms. The classrooms are orientated along the southern boundary of the site, while the entrance area in the west opens up to the surrounding school buildings.",
    },
    architect: "HS-Architekten PartGmbB SCHMIDT LIMMROTH FUNCK",
    address: "Eingangstor Schule, Lokstedter Damm 38 , Hamburg",
    id: 68,
    lat: 53.6075336,
    lng: 9.971073400000002,
  },
  {
    district: "HafenCity",
    title: {
      de: "Wohn- und Geschäftshaus Shanghaialle 13-17",
      en: "Residential and commercial building Shanghaialle 13-17",
    },
    description: {
      de: "Das Gebäude ist als vielschichtiger Stadtbaustein konzipiertund vereint Leben und Arbeiten für besondere Nutzer unter einem Dach. Gut geschnittene Einzelhandelsflächen im Erdgeschoss bieten mit ihren Galerien flexible Mög lichkeiten der Nutzung. Büroflächen liegen im 1. und 2. Ober geschoss. Darüber sind auf drei Geschossen inklusive Hausgemeinschaften um jeweils eigene Gemeinschafts bereiche organisiert. Im Dachgeschoss befinden sichattraktive Penthäuser mit Dachterrassen.",
      en: "The building is designed as a multi-layered urban building block and combines living and working for special users under one roof. Well-designed retail spaces on the ground floor with their galleries offer flexible utilisation options. Office space is located on the 1st and 2nd floors. Above this, three storeys including building communities are organised around their own communal areas. Attractive penthouses with roof terraces are located on the top floor.",
    },
    architect: "APB. Architekten BDA Grossmann-Hensel, Schneider, Andresen",
    address: "Shanghaiallee 15, Hamburg",
    id: 69,
    lat: 53.5425312,
    lng: 10.0030825,
  },
  {
    district: "HafenCity",
    title: {
      de: "Ensemble am Alten Hafenamt im Überseequartier",
      en: "Ensemble at the Old Harbor Office in the Überseequartier",
    },
    description: {
      de: "Der Cinnamon Turm wurde als freistehender Campanile erdacht - ein Pin auf einer Piazza war die Vision vonBOLLES+WILSON im Wettbewerb für das Areal „AltesHafenamt“ im Jahr 2006. Ein Turm war nicht Teil des Wett bewerbsprogramms, aber die Jury erkannte, dass er dieöffentlichen Funktionen um das einzige zwischen denMegablocks des Überseequartiers verbliebene historischeGebäude verankerte und sichtbar machte. Das denkmal geschützte Alte Hafenamt wurde zu einem Hotel umgebaut.",
      en: "The Cinnamon Tower was conceived as a free-standing campanile - a pin on a piazza was the vision of BOLLES+WILSON in the competition for the 'AltesHafenamt' site in 2006. A tower was not part of the competition programme, but the jury recognised that it anchored and made visible the public functions around the only remaining historic building between the megablocks of the Überseequartier. The listed Old Harbour Office was converted into a hotel.",
    },
    architect:
      "BOLLES+WILSON (LP 1-5 + künstlerische OL); SPINE ARCHI TECTS (LP 5 + künstlerische OL Altes Hafenamt); LV Baumanag. AG (LP 6-8)",
    address: "Osakaallee 14, vor dem InfoPavillon Überseequartier, Hamburg",
    id: 70,
    lat: 53.5420971,
    lng: 9.998797999999999,
  },
  {
    district: "HafenCity",
    title: {
      de: "Restaurant The Table Kevin Fehling",
      en: "Restaurant The Table Kevin Fehling",
    },
    description: {
      de: "The Table - der Name des Restaurants ist Programm. Herz stück des beeindruckenden, hohen Raums ist der orga nisch geschwungene Chef‘s Table aus dunklem Kirschholz.Durch seine geschwungene Form gewährt er von jedemPlatz aus Einblick in die Küche und ermöglicht sowohl einanregendes Tischgespräch als auch stillen Genuss. Farb-,Material- und Lichtkonzept ergänzen die einladende Wir kung des „Tables“, und eigens entworfene Akustikelementeaus Filz, die „Wings“, sorgen für eine perfekte Akustik.",
      en: "The Table - the restaurant's name says it all. The centrepiece of the impressive, high-ceilinged room is the orga nically curved Chef's Table made of dark cherry wood, whose curved shape provides a view of the kitchen from every seat and enables both stimulating table talk and quiet enjoyment. The colour, material and lighting concept complement the inviting effect of the 'table', and specially designed acoustic elements made of felt, the 'wings', ensure perfect acoustics.",
    },
    architect: "Heyroth & Kürbitz freie Architekten BDA",
    address: "Shanghaiallee 15, Hamburg",
    id: 71,
    lat: 53.5425312,
    lng: 10.0030825,
  },
  {
    district: "HafenCity",
    title: {
      de: "Wohnen am Lohsepark | Wohnungsbau mit Kindertagesstätte und Gewerbeflächen",
      en: "Living at Lohsepark | Housing construction with daycare center and commercial space",
    },
    description: {
      de: "Die städtebauliche Vorgabe der Blockbebauung ist durcheine differenzierte Reihung von fünf Einzelhäusern der Bau genossenschaft Bergedorf Bille variiert. In Analogie zurZiegelarchitektur der Speicherstadt schaffen die Fassadenein ebenso anspruchsvolles wie wohnliches Ambiente. Sieinterpretieren zeitgemäß den konstruktiven und dekorativenCharakter dieser Bauweise. Eine im Erdgeschoss befind liche Kita macht das Wohnen für Familien attraktiv. 15 Woh nungen wurden als WK-Effizienzhaus 40 ausgeführt.",
      en: "The urban planning specification of the block development is varied by a differentiated row of five individual houses from the Bergedorf Bille building co-operative. In analogy to the brick architecture of the Speicherstadt, the façades create an ambience that is both sophisticated and cosy. They interpret the constructive and decorative character of this building style in a contemporary way. A daycare centre on the ground floor makes living here attractive for families. 15 apartments were built as WK Efficiency House 40.",
    },
    architect:
      "BLK2 Böge Lindner K2 Architekten (LP 1-4, Leitdetail planung LP 5); Neumann + Partner Architekten und Ingenieure (LP 5-9)",
    address: "Hofdurchgang Steinschanze 2-4, Hamburg",
    id: 72,
    lat: 53.5427249,
    lng: 10.0032836,
  },
  {
    district: "Hamm",
    title: { de: "Hansaterrassen", en: "Hansa terraces" },
    description: {
      de: "Das Wohnquartier Hansaterrassen befindet sich in direkterNähe zur historischen Hansaburg (1913-1915), die früher als Papierfabrik genutzt wurde und heute in Teilen unterDenkmalschutz steht. Das Quartier orientiert sich an denstädtebaulichen Gegebenheiten. Durch Aufnahme der typischen hamburgischen Kanalkantenbebauung wurde ein einheitliches Gesamtensemble mit der Hansaburg geschaffen. Durch die Einzelgebäudeausbildung und derenzueinander verschobene Positionierung haben alle Bewohner einen freien Blick auf das Wasser erhalten.",
      en: "The Hansaterrassen residential neighbourhood is located in the immediate vicinity of the historic Hansaburg (1913-1915), which was formerly used as a paper factory and is now partly a listed building. The neighbourhood is based on the urban planning conditions. By incorporating the typical Hamburg canal-side buildings, a uniform overall ensemble with the Hansaburg was created. The individual buildings and their staggered positioning have given all residents a clear view of the water.",
    },
    architect: "blauraum Architekten GmbH",
    address: "Wendenstraße 493/499, vor der Hansaburg, Hamburg",
    id: 73,
    lat: 53.5496907,
    lng: 10.0602378,
  },
  {
    district: "Hammerbrook",
    title: { de: "BüroBoot LORE", en: "Office boat LORE" },
    description: {
      de: "Die Bauform des schwimmenden Büros erinnert an alte Hafenlieger, welche in Hamburg früher für Werkstätten undBüros im Hafengebiet genutzt wurden. Darüber hinaussind die Gegensätze der Umgebung in den Entwurf einge gangen und in der Materialwahl widergespiegelt. Dasgebrauchte Holz steht für den rauen Charme der angren zenden Werkstätten und Hinterhöfe, die metallene Fassade in Goldoptik für die benachbarte GeschäftsweltHammerbrooks mit ihren hochwertigen Büros.",
      en: "The design of the floating office is reminiscent of old harbour berths, which used to be used for workshops and offices in Hamburg's port area. In addition, the contrasts of the surroundings have been incorporated into the design and reflected in the choice of materials. The used wood stands for the rough charm of the neighbouring workshops and backyards, the metal façade in gold look for the neighbouring business world of Hammerbrook with its high-quality offices.",
    },
    architect: "Rost.Niderehe Architekten I Ingenieure",
    address:
      "an Bord, Victoriakai-Ufer 4d, Zuwegung gegenüber Süderstraße 112, Hamburg",
    id: 74,
    lat: 53.5460279,
    lng: 10.0321247,
  },
  {
    district: "Harburg",
    title: {
      de: "Studentisches Wohnen am Schellerdamm",
      en: "Student accommodation on Schellerdamm",
    },
    description: {
      de: "Das Studentenwohnhaus am Schellerdamm stärkt die Entwicklung des Harburger Binnenhafens hin zu einem lebendigen urbanen Quartier. Die Auftrennung der Großstruktur in einzelne Baukörper gliedert die Straßenflucht analog zum vis-à-vis gelegenen Fleethaus. Das offene Erschließungssystem dient als kommuni kative Struktur über alle Ebenen. Die Küchen der Woh nungen sind hier aus dem Außenraum zu betreten. Es entsteht ein großzügiges gemeinschaftliches Ambiente, das den typischen Wohnheimcharakter vermeidet.",
      en: "The student accommodation building on Schellerdamm strengthens the development of Harburg's inland harbour into a lively urban quarter. The division of the large structure into individual buildings structures the street line analogue to the Fleethaus opposite. The open access system serves as a communicative structure across all levels. The kitchens of the apartments can be accessed from the outside. The result is a spacious communal ambience that avoids the typical dormitory character.",
    },
    architect: "Limbrock Tubbesing Architekten und Stadtplaner",
    address: "Schellerdamm / Ecke Veritaskai, Hamburg",
    id: 75,
    lat: 53.4661155,
    lng: 9.9869077,
  },
  {
    district: "Harburg",
    title: {
      de: "Speicher am Kaufhauskanal",
      en: "Store on the department store canal",
    },
    description: {
      de: "„Das Gebäude ist ein zweifach verriegelter Fachwerkbaumit drei Böden und Doppelständer-Innengerüst. An seinemvormaligen Standort repräsentierte der Bau (...) den Typusdes traufständigen Speichers, der im seltenen Gegensatzzu den gängigen, giebelständigen Speichern in Hamburgstand.“ (Gutachten zum Denkmalwert, Dr. Christine Onnen8/2008) An seiner Konstruktion sind die Geschichte vonBau, Translozierung und Sanierung sowie die wechselndenNutzungen abzulesen.",
      en: "'The building is a double-locked half-timbered structure with three floors and a double-stud inner frame. At its original location, the building (...) represented the type of eaves-standing granary, which was in rare contrast to the common gable-standing granaries in Hamburg.' (Expert opinion on the monument value, Dr Christine Onnen8/2008) The history of construction, relocation and renovation as well as the changing uses can be read from its construction.",
    },
    architect: "Ulrich Garbe Dipl.-Ing. Architekt",
    address: "Blohmstraße 22, im Innenhof, Hamburg",
    id: 76,
    lat: 53.466501,
    lng: 9.9812149,
  },
  {
    district: "Hohenfelde",
    title: {
      de: "Wohnhaus Ifflandstraße in der grünen Mitte Hohenfelde",
      en: "Residential building Ifflandstrasse in the green center of Hohenfelde",
    },
    description: {
      de: "Das Punkthaus in der Ifflandstraße, unweit der Alster schwimmhalle, beherbergt 39 überwiegend 2- oder 3-Zimmer Wohnungen und zeichnet sich durch seine Hochwertig keit in Hinblick auf Materialität und Ausführung aus. Das kubische Gebäude, gelegen innerhalb eines Parks, verfügtüber sechs Vollgeschosse und ein Staffelgeschoss. Die bodentiefen Fenster in den Wohnungen sorgen für Weitblickund bieten eine ansprechende Wohnqualität. Die hohe Aus führungsqualität zeigt sich auch im Detail des Innenausbaus.",
      en: "The point block in Ifflandstrasse, not far from the Alster swimming pool, houses 39 predominantly 2- or 3-room flats and is characterised by its high quality in terms of materials and design. The cubic building, located within a park, has six full storeys and a staggered storey. The floor-to-ceiling windows in the flats provide far-reaching views and offer an appealing quality of living. The high quality of workmanship is also evident in the detail of the interior fittings.",
    },
    architect: "KBNK Architekten GmbH",
    address: "Ifflandstraße 5021, Hamburg",
    id: 77,
    lat: 53.5611211,
    lng: 10.022236,
  },
  {
    district: "Mümmelmannsberg",
    title: {
      de: "Fassadengestaltung und energetische SanierungGroßwohnsiedlung Mümmelmannsberg",
      en: "Façade design and energy-saving renovation of a large housing estate in Mümmelmannsberg",
    },
    description: {
      de: "Die energetische Fassadensanierung der Gebäude derBaugenossenschaft Fluwog Nordmark eG bekennt sich mitRespekt zu den Fertigteilkonstruktionen mit ihren klarenLinien, den abwechslungsreich gestalteten Bauabschnittenund den exzellent proportionierten Großformen. Klare, geordnete Strukturen, eingewachsen in üppiges Grün, lassenden Menschen viel Platz, Licht und Außenraum.Architekten: CARSTEN ROTH ARCHITEKT",
      en: "The energy-efficient façade renovation of the buildings of the Fluwog Nordmark eG building co-operative pays tribute to the prefabricated structures with their clear lines, the varied design of the building sections and the excellently proportioned large forms. Clear, organised structures, surrounded by lush greenery, provide people with plenty of space, light and outdoor space: CARSTEN ROTH ARCHITEKT",
    },
    architect: "CARSTEN ROTH ARCHITEKT",
    address:
      "am Durchgang vor dem Gebäude Steinbecker Grenzdamm /Ecke Heideblöck, Hamburg",
    id: 78,
    lat: 53.5232042,
    lng: 10.1527822,
  },
  {
    district: "Neugraben Fischbek",
    title: {
      de: "ModernArt D designed by Prof. B. Hirche, Architekt",
      en: "ModernArt D designed by Prof. B. Hirche, architect",
    },
    description: {
      de: "Mit dem Doppelhaus KfW 40 plus wird das Ziel kosten günstigen Bauens qualitätsvoller Alltagsarchitektur, entsprechend dem IBA Konzept „Naturverbundenes Woh nen\", umgesetzt. Der Entwurf lässt verschiedene Wohn formen vom konventionellen Grundriss mit additivem Raum gefüge bis hin zum offenen Grundriss mit Luftraum undSichtverbindungen zu. Der kompakte Baukörper hat mit dunk lem Klinker und flächigem Dach ohne Überstand eine „monolithische Wirkung\" mit subtiler Gliederung der Loch fassadenflächen durch Relief-Zierverbände.",
      en: "With the KfW 40 plus semi-detached house, the goal of cost-effective construction of high-quality everyday architecture is realised in accordance with the IBA concept of 'living close to nature'. The design allows for a variety of living forms, from conventional floor plans with an additive spatial structure to open floor plans with air space and visual connections. The compact structure has a 'monolithic effect' with dark clinker brick and a flat roof without overhang, with subtle structuring of the perforated façade surfaces by means of ornamental relief band",
    },
    architect: "Architekt Prof. B. Hirche (LP1-4), Viebrockhaus AG (LP 5-9)",
    address: "Randweide 1/3, Hamburg",
    id: 79,
    lat: 53.4769309,
    lng: 9.853118499999999,
  },
  {
    district: "Rahlstedt-Hohenhorst",
    title: {
      de: "Quartierspark Hohenhorst Park",
      en: "Hohenhorst Park district park",
    },
    description: {
      de: "Die Großsiedlung Hohenhorst entstand in den 1960er Jahren.Zahlreiche im zugehörigen Park einst aufwendig ange legte Bereiche wie z.B. großzügige Wasseranlagen wurdenim Laufe der Jahrzehnte rückgebaut. Der inzwischen erwachsene Baumbestand bildet ein dichtes Grüngerüst,das jedoch kaum mehr Blickbezüge zwischen den Parkarealen zuließ. Im Rahmen des Städtebauförderungs programmes „soziale Stadt“ gelang es, alte und neue Qualitäten zu entdecken und die Parkanlage wieder zumgrünen Mittelpunkt des Quartiers zu entwickeln.",
      en: "The large Hohenhorst housing estate was built in the 1960s, and many of the areas in the associated park that were once elaborately designed, such as large water features, have been dismantled over the decades. The trees that have grown up in the meantime form a dense green framework which, however, hardly allows any visual connections between the park areas. As part of the 'social city' urban development programme, it was possible to rediscover old and new qualities and develop the park back into the green centre of the neighbourhood.",
    },
    architect: "kfp Kontor Freiraumplanung Thomas Tradowsky",
    address:
      "Schöneberger Straße 44, Vorplatz Community Centre „Haus am See“, Uferterrasse bei der Ankerskulptur, Hamburg",
    id: 80,
    lat: 53.5840135,
    lng: 10.1456792,
  },
  {
    district: "Rissen",
    title: {
      de: "Einfamilienhaus mit Atelier von 1960",
      en: "Single-family house with studio from 1960",
    },
    description: {
      de: "Das Einfamilienhaus mit großem Atelier und vier verschie denen Gartenhöfen, 1960 vom Architekten für seine Familierealisiert, steht zwischen Elbe und oberem Leuchtturm inTinsdal. Die Innenräume des Holzskelettbaus gehen in Teilenüber zwei Geschosse, unten sind sie hell und zum Gartenoffen, oben befinden sich über Wendeltreppen und eine Brückeerreichbare Rückzugs-Arbeits-Lese-Schlafräume. NachDraußen laufende Wände lassen großzügige, weite oder intime Innen-Außenräume entstehen.",
      en: "The detached house with a large studio and four separate garden courtyards, realised by the architect for his family in 1960, stands between the Elbe and the upper lighthouse in Tinsdal. The interior of the timber-framed building extends over two storeys in parts; downstairs they are bright and open to the garden, while upstairs there are retreats, reading rooms and bedrooms accessible via spiral staircases and a bridge. Walls running to the outside create generous, wide or intimate indoor-outdoor spaces.",
    },
    architect:
      "Timm Ohrt, Landschaftsarchitekt: Günther Schulze, Umbau 1995: Timm Ohrt & Hille von Seggern",
    address: "Am Leuchtturm 13, Rissen (Tinsdal), Hamburg",
    id: 81,
    lat: 53.5663504,
    lng: 9.740978300000002,
  },
  {
    district: "Rissen",
    title: {
      de: "DLRG Wasserrettungsdienststation",
      en: "DLRG water rescue service station",
    },
    description: {
      de: "Die Station am Rissener Ufer, direkt auf dem Elbstrand, ersetzt die seit den 1970er Jahren existierende kleine Stationohne Sanitäranlagen. Neben der besonderen, exponier ten Lage waren bei Projektkonzeption und Planung folgendeBesonderheiten zu berücksichtigen: Baustellenbetrieb im Flutbereich der Elbe mit erschwerter Zuwegung (sandi ger Grund, Naturschutzgebiet), Pfahlgründung, modulareContainerbauweise, Medienversorgung (Wasser, Strom, etc.)und umfangreiche Nutzeranforderungen.",
      en: "The station on Rissener Ufer, directly on the Elbe beach, replaces the small station without sanitary facilities that has existed since the 1970s. In addition to the special, exposed location, the following special features had to be taken into account when designing and planning the project: Construction site operation in the flood zone of the Elbe with difficult access (sandy ground, nature reserve), pile foundations, modular container construction, media supply (water, electricity, etc.) and extensive user requirements.",
    },
    architect: "SKA Sibylle Kramer Architekten",
    address:
      "Rissener Ufer (Straße bis zum Ende fahren), am Übergangvom öffentlichen Parkplatz zum Anlegersteg, Hamburg",
    id: 82,
    lat: 53.5649996,
    lng: 9.7564783,
  },
  {
    district: "Rotherbaum",
    title: { de: "Apartimentum", en: "apartment" },
    description: {
      de: "Das „Apartimentum“ ist ein neu errichtetes Wohn- und Geschäftshaus unter Erhalt der gründerzeitlichen Fassadeam Mittelweg in Hamburg-Rotherbaum. Die Bestands fassade wurde um einen zweigeschossigen Dachkörper ergänzt, dessen Fensterbänder aus dem Prinzip eines Barcodes abgeleitet wurden. Zum Innenhof zeigt sich derNeubau mit moderner Fassade. Der Bauherr hat das Gebäude konsequent als Smart-Home entwickeln lassen -von der Eingangstür bis zur Wohnungsausstattung lässt sich das Haus digital bedienen.",
      en: "Apartimentum' is a newly constructed residential and commercial building on Mittelweg in Hamburg-Rotherbaum that has retained its Wilhelminian-style façade. The existing façade was supplemented by a two-storey roof structure, the window bands of which were derived from the principle of a barcode. The new building faces the inner courtyard with a modern façade. The client had the building consistently developed as a smart home - the house can be operated digitally from the entrance door to the flat fittings.",
    },
    architect: "KPW Papay Warncke und Partner Architekten mbB",
    address: "Mittelweg 169, Haupteingang, Hamburg",
    id: 83,
    lat: 53.5656669,
    lng: 9.9954591,
  },
  {
    district: "St. Georg",
    title: {
      de: "Freiraumplanung Hamburger Kunsthalle",
      en: "Open space planning for the Hamburg Kunsthalle",
    },
    description: {
      de: "Im Rahmen der Modernisierung der Hamburger Kunsthallewurde WES LandschaftsArchitektur mit der Umgestaltungund Aufwertung des Außenbereichs beauftragt. Auf demNiveau des Kunsthallengebäudes ist eine neue Flaniermeileals Fußweg entstanden. Diese wurde mit Sitzgelegenheiten,Anpflanzungen und einer barrierefreien Anbindung an dieAlster ausgestattet. Um die Kunsthalle letztlich auf ihren his torischen, grünen Sockel zu stellen, wurden die Stütz mauern entlang des Glockengießerwalls mit Efeu berankt.",
      en: "As part of the modernisation of the Hamburger Kunsthalle, WES LandschaftsArchitektur was commissioned to redesign and upgrade the outdoor area. A new promenade was created as a footpath at the level of the Kunsthalle building. This was equipped with seating, planting and a barrier-free connection to the Alster. The retaining walls along the Glockengießerwall were planted with ivy to give the Kunsthalle its historic, green base.",
    },
    architect:
      "WES LandschaftsArchitektur (Freiraumplanung), LH Architekten Landwehr Henke + Partner mbB (Hochbau)",
    address:
      "Glockengießerwall / Ecke Ernst-Merck-Straße, unter den Platanen an der Rotunde gegenüber dem Hamburger Hauptbahnhof, Hamburg",
    id: 84,
    lat: 53.552993,
    lng: 10.0066369,
  },
  {
    district: "St. Georg",
    title: {
      de: "Museum für Kunst und GewerbeRevitalisierung der historischen Turnhalle",
      en: "Museum of Arts and CraftsRevitalization of the historic gymnasium",
    },
    description: {
      de: "Die historische Turnhalle war einst der größte und höchsteRaum im ganzen Gebäude und wurde als zentrale Aus stellungs- bzw. Sonderfläche revitalisiert. Die Maßnahme bildet den zentralen Baustein zur Neukonzeption des Museums aus dem von den Architekten erstellten Master plan und besteht aus dem Rückbau der Einbauten der 1950erJahre, der Wiederherstellung der bauzeitlichen Raum zusammenhänge, der Neuherstellung der Fenster in der Ursprungsgröße und der Entwicklung eines Nutzungs- und Beleuchtungskonzeptes.",
      en: "The historic gymnasium was once the largest and highest room in the entire building and has been revitalised as a central exhibition and special area. The measure forms the central building block for the new conception of the museum from the master plan drawn up by the architects and consists of the dismantling of the 1950s fixtures, the restoration of the room connections from the time of construction, the recreation of the windows in their original size and the development of a utilisation and lighting concept",
    },
    architect: "KPW Papay Warncke und Partner Architekten mbB",
    address: "Foyer Museum für Kunst und Gewerbe, Steintorplatz, Hamburg",
    id: 85,
    lat: 53.5512167,
    lng: 10.0097694,
  },
  {
    district: "St. Georg",
    title: {
      de: "Renovierung und Modernisierung des Hotel ReichshofHamburg CURIO Collection by Hilton",
      en: "Renovation and modernization of the Hotel ReichshofHamburg CURIO Collection by Hilton",
    },
    description: {
      de: "Das denkmalgeschützte Gebäude wurde nach aufwendigerSanierung im Juli 2015 als Reichshof Hamburg CURIO byHilton wiedereröffnet. Es galt, die historischen Stilelementeunter Berücksichtigung des Denkmalschutzes wieder zubeleben und gleichzeitig die Technik an den neuestenStandard anzupassen. Es fand eine Umstrukturierung der public areas und der Zimmer statt. Die Fassadenele mente und das Vordach erfuhren eine Erneuerung und auch die Büroempore wurde zurückgebaut, um den Origi nalzustand wiederherzustellen.",
      en: "The listed building was reopened as the Reichshof Hamburg CURIO by Hilton in July 2015 after extensive refurbishment. The aim was to revitalise the historical style elements, taking into account the listed building status, while at the same time adapting the technology to the latest standards. The public areas and rooms were restructured. The façade elements and the canopy were renovated and the office gallery was also dismantled to restore it to its original state.",
    },
    architect: "JOI-Design GmbH",
    address: "Kirchenallee 34-36, in der Lobby, Hamburg",
    id: 86,
    lat: 53.5548461,
    lng: 10.008553,
  },
  {
    district: "St. Pauli Pestalozzi Quartier",
    title: {
      de: "Wohnbebauung Hamburg St. Pauli - Große Freiheit",
      en: "Residential development in Hamburg St. Pauli - great freedom",
    },
    description: {
      de: "Familiengerechter Wohnungsbau mit wohnverträgli chem Gewerbe im städtischen Kernbereich, Umnutzung vorhandener Schulgebäude und Nachverdichtung durchtypologisch gemischte Neubauten an der Schnittstelle vom bürgerlichen Wohnquartier zum Vergnügungsviertel.",
      en: "Family-friendly housing construction with residential-compatible commerce in the urban core area, conversion of existing school buildings and redensification through typologically mixed new buildings at the interface between the middle-class residential neighbourhood and the entertainment district",
    },
    architect:
      "Renner Hainke Wirth Architekten (LP 1-4), Schaub und Partner Architekten Partnerschaftsgesellschaft (LP 5)",
    address: "Große Freiheit 58, vor dem Grünspan, Hamburg",
    id: 87,
    lat: 53.55188339999999,
    lng: 9.9580558,
  },
  {
    district: "St. Pauli",
    title: { de: "Klubhaus St. Pauli", en: "St. Pauli clubhouse" },
    description: {
      de: "Das Klubhaus St. Pauli verfolgt das Ziel, das Livemusik angebot auf der Reeperbahn zu ergänzen und mit seinenvielfältigen kulturellen Nutzungen die Ausgehmeile für deren Besucher noch attraktiver zu gestalten. Die Fassadedes Klubhauses wurde entworfen unter der Prämisse, die Integration von Medien in die Architektur neu zu denken. Eigens konzipierte Metallgittermodule, mit LED-Technikbestückt, sind in unterschiedlichen Ebenen vor der eigent lichen Gebäudehaut angeordnet und generieren eine dreidimensionale Topografie.",
      en: "The aim of the Klubhaus St. Pauli is to complement the live music offerings on the Reeperbahn and to make the nightlife area even more attractive for visitors with its diverse cultural uses. The facade of the clubhouse was designed under the premise of rethinking the integration of media into the architecture. Specially designed metal grid modules, equipped with LED technology, are arranged on different levels in front of the actual building skin and generate a three-dimensional topography.",
    },
    address: "Spielbudenplatz 20-24, direkt am Eingang des Klubhauses, Hamburg",
    id: 88,
    lat: 53.5492357,
    lng: 9.9643979,
  },
  {
    district: "Allermöhe",
    title: {
      de: "Kindercampus Anton-Rée-Schule",
      en: "Children's Campus Anton Rée School",
    },
    description: {
      de: "Für die Grundschule Anton-Rée-Schule in Allermöhe (Ursprungsbau Hensel + Bechtloff Architekten) wurde einErweiterungsbau mit Mensa/Multifunktionsraum, Unter richtsräumen und Flächen für die Ganztagsbetreuung geplant, um die ehemals zwei Standorte der Schule zusam menzulegen. Eine weit spannende Holzbinderkonstruktion,die das Dach der Mensa trägt, großflächige Verglasungensowie ein aufgeständerter Klassentrakt prägen das Gebäudeund bilden ein offenes und transparentes Erdgeschoss aus.",
      en: "An extension was planned for the Anton-Rée-Schule primary school in Allermöhe (original building by Hensel + Bechtloff Architekten) with a canteen/multifunctional room, classrooms and areas for all-day supervision in order to merge the school's two former locations. The building is characterised by a wide-span timber truss construction that supports the roof of the canteen, large areas of glazing and an elevated classroom wing, creating an open and transparent ground floor.",
    },
    architect:
      "acollage. architektur urbanistik; hunck+lorenz freiraumplanung Landschaftsarchitekten BDLA",
    address:
      "Anton-Rée-Schule, Parkplatz vor dem Schulhof, neben der Turnhalle, am Henriette-Herz-Ring, Hamburg",
    id: 89,
    lat: 53.4838546,
    lng: 10.1780797,
  },
  {
    district: "Altona-Nord",
    title: {
      de: "Viktoria-Kaserne: Umnutzung einer ehemaligen Kaserne in Nutzflächen für Künstler und kunstnahesGewerbe im Rahmen einer Genossenschaft",
      en: "Viktoria barracks: Conversion of a former barracks into usable space for artists and art-related businesses as part of a cooperative",
    },
    description: {
      de: "Block III der ehemaligen Viktoria-Kaserne ist der verblei bende Teil einer ehemaligen blockrandbildenden preu ßischen Anlage, die zwischen 1878 und 1883 erbaut wurde.Nach vielen unterschiedlichen Nutzungen in den vergan genen Jahrzehnten, die zum Abriss großer Teile des Ensem bles und vielgestaltiger Überformung des Restbestandsführten, erfolgt seit 2016 die Sanierung, der Umbau unddie Erweiterung des Gebäudes mit dem Ziel, Raum für viel fältige künstlerische und kulturelle Aktivitäten zu schaffen.",
      en: "Block III of the former Viktoria barracks is the remaining part of a former block-forming Prussian complex, which was built between 1878 and 1883.' After many different uses in the past decades, which led to the demolition of large parts of the ensemble and the diverse reshaping of the remaining building, the building has been renovated, converted and extended since 2016 with the aim of creating space for a wide range of artistic and cultural activitie",
    },
    architect: "KSRK architekt & ingenieur",
    address: "Hofeinfahrt Bodenstedtstraße 16, Hamburg",
    id: 90,
    lat: 53.55832179999999,
    lng: 9.9440812,
  },
  {
    district: "Altstadt",
    title: { de: "Hamburg Süd", en: "Hamburg South" },
    description: {
      de: "Der Sitz der traditionsreichen Reederei Hamburg Süd wurde grundlegend saniert und um einen 7-geschossigenBüroneubau und eine 2-geschossige Tiefgarage erwei tert. Die Sanierungsmaßnahmen des denkmalgeschützten Gebäudeensembles (1958 bis 1964), ein Entwurf des Architekten Cäsar Pinnau, umfassen u.a. eine energetischeSanierung und die Erneuerung der Fassaden. In Abstim mung mit dem Denkmalschutz wurden alle Fassaden entfernt und die Gebäude bis auf die tragende Teile entkernt.",
      en: "The headquarters of the long-established Hamburg Süd shipping company has been thoroughly renovated and extended by a new 7-storey office building and a 2-storey underground car park. The refurbishment measures for the listed building ensemble (1958 to 1964), designed by architect Caesar Pinnau, include an energy-efficient refurbishment and the renovation of the façades. In consultation with the conservation authorities, all façades were removed and the buildings were gutted down to the load-bearing parts.",
    },
    architect:
      "KSP Jürgen Engel Architekten (LP 1-5) und KSP Consultgp(Generalplanung)",
    address: "Willy-Brandt-Straße 59-65, Hamburg",
    id: 91,
    lat: 53.5469035,
    lng: 9.9919589,
  },
  {
    district: "Altstadt",
    title: {
      de: "Denkmalpflegerische Sanierung des ehemaligen Spiegel-Verlagshauses",
      en: "Monument preservation renovation of the former Spiegel publishing house",
    },
    description: {
      de: "Die prägnanten Gebäude Spiegel-Verlagshaus und IBM-Hochhaus wurden durch Werner Kallmorgen zwischen 1965 und 1969 als Ausdruck des neuen städtischen Selbstbewusstseins der Nachkriegszeit, dem Ideal des „fließenden Raumes“ folgend, als optischer Endpunkt der Ost-West-Straße errichtet. Die Innenausstattung des Spiegel-Verlagshauses wurde durch den dänischen Designer Verner Panton gestaltet. Nach dem Auszug der Spiegel-Verlags gruppe wurde das Gebäude denkmalpflegerisch saniert.",
      en: "The striking Spiegel-Verlagshaus and IBM-Hochhaus buildings were erected by Werner Kallmorgen between 1965 and 1969 as an expression of the new urban self-confidence of the post-war period, following the ideal of 'flowing space', as the visual end point of the east-west street. The interior of the Spiegel publishing house was designed by the Danish designer Verner Panton. After the Spiegel publishing group moved out, the building was refurbished as a listed building.",
    },
    architect: "Winking · Froh Architekten GmbH",
    address: "Haupteingang, Brandtstwiete 3, Hamburg",
    id: 92,
    lat: 53.5469423,
    lng: 9.9977865,
  },
  {
    district: "Barmbek-Süd",
    title: {
      de: "FSP1 Berufsschule für Sozialpädagogik",
      en: "FSP1 vocational school for social education",
    },
    description: {
      de: "Der Neubau der Gewerbeschule liegt in unmittelbarer Nach barschaft eines denkmalgeschützten Schulbaus von FritzSchumacher. Die Planung durch Spengler · Wiescholek erfolg te auf der Basis eines Wettbewerbsentwurfs von RennerHainke Wirth. Entstanden ist ein großzügiges, lichtdurch flutetes Haus, dessen Räume sich um eine zentrale, mehrgeschossige Halle mit angeschlossener Mensa und Aula entwickeln. Über eine Freitreppe werden alle Ebenen ein schließlich einer in den Luftraum integrierten Lounge erreicht.",
      en: "The new trade school is located in the immediate neighbourhood of a listed school building by Fritz Schumacher. The planning by Spengler - Wiescholek was based on a competition design by Renner-Hainke Wirth. The result is a spacious, light-flooded building with rooms centred around a central, multi-storey hall with adjoining canteen and assembly hall. All levels are reached via an open staircase and finally a lounge integrated into the air space.",
    },
    architect:
      "Renner Hainke Wirth Architekten (LP 1-2), Spengler · Wiescholek Architekten Stadtplaner (LP 2-6)",
    address: "Wagnerstraße 60, Hamburg",
    id: 93,
    lat: 53.57145300000001,
    lng: 10.0387493,
  },
  {
    district: "Blankenese",
    title: {
      de: "Friedhof Blankenese Friedhofskapelle, Flügelbauten und Abschiedsräume",
      en: "Blankenese cemetery, cemetery chapel, wings and farewell rooms",
    },
    description: {
      de: "In einem dritten Bauabschnitt wurden die Warte- undKondolenzräume, die Flügelbauten des Kapellenvorplatzes,umgebaut und gestalterisch aufgewertet. Zuvor waren es die im expressionistischen Stil gebaute Kapelle (1927, Architekt Winkelmann) und die Abschiedsräume (1962, Architekten Grundmann + Sandtmann), welche von StölkenSchmidt Architekten denkmalgerecht saniert wurden. Ein ungewöhnliches Ensemble unterschiedlicher Baustile prägt die weitläufige Erinnerungslandschaft auf dem Blankeneser Friedhof.",
      en: "In a third construction phase, the waiting and condolence rooms, the wings of the chapel forecourt, were remodelled and upgraded in terms of design. Previously, the chapel built in the Expressionist style (1927, architect Winkelmann) and the farewell rooms (1962, architects Grundmann + Sandtmann) were renovated by Stölken-Schmidt Architekten in line with the preservation order. An unusual ensemble of different architectural styles characterises the extensive memorial landscape at the Blankenes cemetery.",
    },
    architect: "Stölken Schmidt Architekten BDA",
    address: "Friedhofskapelle, Sülldorfer Kirchenweg 151, Hamburg",
    id: 94,
    lat: 53.57634239999999,
    lng: 9.8021506,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Oberstufenhaus Eimsbütteler Modell Innere und äußere Grundinstandsetzung",
      en: "Upper stage house Eimsbüttel model interior and exterior basic repairs",
    },
    description: {
      de: "Das denkmalgeschützte Backsteingebäude von 1911 wurdevon Albert Erbe geplant. Mit der Sanierung sollte die Charakteristik der historischen Fassade mit Verzierungenaus Ziegeln und Muschelkalk originalgetreu erhalten bleiben. Ausgangspunkt für die Gestaltung der Innenräumebildete der denkmalpflegerische Farbbefund. Dieser wurde in der Eingangshalle nachgebildet und in den übrigenBereichen in ein modernes Farbkonzept übersetzt.",
      en: "The listed brick building from 1911 was planned by Albert Erbe. The refurbishment was intended to preserve the characteristics of the historic façade with its brick and shell limestone decorations true to the original. The starting point for the design of the interior was the colour scheme of the listed building. This was reproduced in the entrance hall and translated into a modern colour concept in the other areas.",
    },
    architect: "andreas schneider architekten GmbH & Co. KG",
    address: "Haupteingang Schule, Bogenstraße 59, Hamburg",
    id: 95,
    lat: 53.5754649,
    lng: 9.9704579,
  },
  {
    district: "Eppendorf",
    title: { de: "The Quality Street", en: "The Quality Street" },
    description: {
      de: "In einer versteckten Hoflage am Eppendorfer Marktplatzsind auf dem Gelände einer ehemaligen Bonbonpapier fabrik neue Wohngebäude in Ergänzung zu bestehendenAltbauten entwickelt worden. Ehemals war das Geländefast vollständig überbaut, nun bilden individuelle Häuser einvielschichtiges, innerstädtisches Ensemble, das durch seine Lage der städtischen Hektik vollkommen entrückt zusein scheint.",
      en: "In a hidden courtyard location on the Eppendorf market square, new residential buildings have been developed on the site of a former sweet wrapper factory to complement the existing old buildings. In the past, the site was almost completely built over, but now individual houses form a multi-layered, inner-city ensemble that seems to be completely removed from the hustle and bustle of the city due to its location.",
    },
    architect: "KBNK Architekten GmbH",
    address: "Eppendorfer Landstraße 104, neben der Papeterie, Hamburg",
    id: 96,
    lat: 53.5922501,
    lng: 9.988769999999999,
  },
  {
    district: "Fuhlsbüttel",
    title: {
      de: "Gymnasium Alstertal: denkmalgerechte Grundsanierung, Erweiterungsbau mit Sporthalle und Anbau einer Cafeteria",
      en: "Alstertal High School: basic renovation, extension with sports hall and addition of a cafeteria",
    },
    description: {
      de: "Der Altbau wurde 1929 von Oberbaudirektor Fritz Schumacherin moderner Bauweise mit Flachdach und horizontalen Fensterbändern errichtet. 2006 erhielt er eine Erweiterungum eine Cafeteria. Es folgten die Grundsanierung des Altbaus und ein Neubau mit Lernzonen (Kompartments) undSporthalle. Besonderheiten der Altbausanierung sind diedenkmalgerechte Wiederherstellung des Farbkonzeptes inden Fluren, dem Musiksaal und der Aula mit moderner Deckendekoration sowie die Aktivierung von Kellerflächen.",
      en: "The old building was built in 1929 by senior building director Fritz Schumach in a modern design with a flat roof and horizontal ribbon windows. In 2006, it was extended to include a cafeteria. This was followed by a complete refurbishment of the old building and a new building with learning zones (compartments) and a sports hall. Special features of the renovation of the old building are the restoration of the colour concept in the corridors, the music hall and the assembly hall in keeping with the historic style, with modern ceiling decoration and the activation of basement areas.",
    },
    architect: "Dohse Architekten",
    address: "Haupteingang Gymnasium Alstertal, Erdkampsweg 89, Hamburg",
    id: 97,
    lat: 53.6328493,
    lng: 10.0172715,
  },
  {
    district: "HafenCity",
    title: { de: "Elbphilharmonie", en: "Elbphilharmonie" },
    description: {
      de: "Die Elbphilharmonie ist nicht nur ein Haus für die Musik mit einer Konzerthalle für 2100 und einem Kammermusik saal für 550 Besucher. Die beiden übereinander gesta pelten Architekturen des Kaispeichers und der Philharmonie beherbergen außerdem eine dichte Mischung urbaner Nutzungen: Übungsräume, Wohnungen, Bars, ein Restau rant, ein Hotel, einen Shop sowie Parkplätze. Die Plaza, eine Terrasse mit Blick über Hamburg und den Hafen, stehtallen Menschen offen - als neues Angebot im kulturellenund alltäglichen Leben der Stadt.",
      en: "The Elbphilharmonie is not just a house for music with a concert hall for 2100 and a chamber music hall for 550 visitors. The two superimposed buildings of the Kaispeicher and the Philharmonie also house a dense mix of urban uses: rehearsal rooms, flats, bars, a restaurant, a hotel, a shop and car parks. The plaza, a terrace with a view over Hamburg and the harbour, is open to everyone - as a new addition to the city's cultural and everyday life",
    },
    architect: "Herzog & de Meuron Ltd.",
    address: "Platz der Deutschen Einheit 1, 20457 Hamburg, Hamburg",
    id: 98,
    lat: 53.54112869999999,
    lng: 9.9848694,
  },
  {
    district: "HafenCity",
    title: {
      de: "Erweiterung Unternehmenszentrale Gebr. Heinemann 2014 wurde mit den Baumaßnahmen zum Erweiterungs neubau der Unternehmenszentrale Gebr. Heinemann imBereich des Magdeburger Hafens begonnen. Als Ergänzungder bestehenden Gebäude vervollständigt der Neubau als dritter markanter Baukörper das Ensemble harmonisch.So werden das Material des Bestandsziegels und die Höhenentwicklung der Nachbarbebauung aufgenommen.Andere historische Elemente wurden neu interpretiert. Der Neubau wurde nach Anforderungen des Gold-Standards„Nachhaltiges Bauen in der HafenCity“ realisiert.",
      en: "Expansion of the Gebr. Heinemann headquarters In 2014, construction work began on the new expansion of the Gebr. Heinemann headquarters in the Magdeburg harbor area. As a complement to the existing buildings, the new building harmoniously completes the ensemble as a third striking structure. The material of the existing brick and the height development of the neighboring buildings are incorporated. Other historical elements have been reinterpreted. The new building was built in accordance with the requirements of the gold standard “Sustainable Building in HafenCity”",
    },
    description: {
      de: "Architekten: gmp International GmbH",
      en: "In 2014, construction work began on the new extension to the Heinemann Bros. headquarters in the Magdeburg harbour area. As an addition to the existing buildings, the new building harmoniously completes the ensemble as a third striking structure, incorporating the material of the existing brick and the height development of the neighbouring buildings, while other historical elements were reinterpreted. The new building was realised in accordance with the requirements of the 'Sustainable Building in HafenCity' gold standard",
    },
    architect: "gmp International GmbH",
    address: "Haupteingang Koreastraße 5, Hamburg",
    id: 99,
    lat: 53.5436756,
    lng: 10.0017224,
  },
  {
    district: "HafenCity",
    title: {
      de: "Lohsepark mit denk.mal Hannoverscher Bahnhof",
      en: "Lohsepark with memorial Hanover train station",
    },
    description: {
      de: "Als zentrale Grünfläche der HafenCity erfüllt der Lohseparkmit seinen offenen Rasenflächen und über 530 Bäumenwichtige stadträumliche, soziale und ökologische Funkti onen. 550 m lang, zwischen zwei Wasserflächen einge spannt, beinhaltet das Freiraumkonzept zwei grundlegendeIdeen: eine Blickachse von Wasser zu Wasser und eineräumliche Staffelung in drei Höhenstufen. Der in den Parkintegrierte Gedenkort „denk.mal Hannoverscher Bahnhof“erinnert an die Deportation von 8071 Juden, Sinti und Romain den Jahren 1940 bis 1945.",
      en: "As the central green space in HafenCity, Lohsepark, with its open lawns and over 530 trees, fulfils important urban, social and ecological functions. 550 metres long, stretched between two water areas, the open space concept includes two basic ideas: a visual axis from water to water and a spatial gradation in three height levels. The 'denk.mal Hannoverscher Bahnhof' memorial integrated into the park commemorates the deportation of 8071 Jews, Sinti and Roma between 1940 and 194",
    },
    architect: "VOGT Landschaft GmbH",
    address:
      "Überseeallee 16, Östlicher Vorplatz HafenCity Universität, U-Bahn Ausgang HafenCity Universität, Hamburg",
    id: 100,
    lat: 53.5406103,
    lng: 10.0069912,
  },
  {
    district: "Hammerbrook",
    title: {
      de: "Sonninstraße, Haus 1, Neubau eines Wohngebäudes mit Tiefgarage und einer Gewerbeeinheit",
      en: "Sonninstraße, House 1, new construction of a residential building with underground parking and a commercial unit",
    },
    description: {
      de: "Neubau eines Wohngebäudes mit 114 Wohneinheiten als öffentlich geförderter Wohnungsbau. Die Fassade zur Sonninstraße weist einen klassischen Fassadenaufbauauf und ist durch plastisch, körperhafte Auskragungen in fünf rhythmisierte Einheiten gegliedert, die ein subtilesSpiel großer Kubaturen ergeben. Neben den großzügigverglasten Zugängen erhält jede der fünf Gebäudeeinheiteneine differenzierte Betonung des Eingangsbereichs, diedurch ihre Varianz fünf eigenständige Adressen markieren.",
      en: "New construction of a residential building with 114 residential units as publicly subsidised housing. The façade facing Sonninstrasse has a classic façade structure and is divided into five rhythmic units by sculptural, physical projections, which create a subtle interplay of large cubatures. In addition to the generously glazed entrances, each of the five building units has a differentiated accentuation of the entrance area, which mark five independent addresses through their variance.",
    },
    architect: "KPW Papay Warncke und Partner Architekten mbB (LP 1-5)",
    address: "am Eingangsplatz zum Quartier, Sonninstraße 10 , Hamburg",
    id: 101,
    lat: 53.54725730000001,
    lng: 10.016861,
  },
  {
    district: "Hammerbrook",
    title: {
      de: "Wohnen am Sonninkanal, Haus 2, Mehrfamilienhaus mit zwei Gewerbeeinheiten",
      en: "Living on the Sonnin Canal, House 2, apartment building with two commercial units",
    },
    description: {
      de: "Das 9-geschossige Hybridgebäude steht bei der ehema ligen Schokoladenfabrik des historischen Sonninhofs. Die Nutzungsmischung aus Wohnen, Gewerbe und Parkenspiegelt sich in der Fassade wider. Eine Besonderheit bildet hierbei das rote Klinkermauerwerk, welches vor den4- bis 5-geschossigen Parkbereichen als Filtermauer werk ausgebildet wurde. Hinter dem U-förmigen Baukörperverbirgt sich auf Höhe des 4. OG ein grüner Innenhof.",
      en: "The 9-storey hybrid building is located next to the former chocolate factory of the historic Sonninhof. The mix of residential, commercial and car park uses is reflected in the façade. A special feature here is the red clinker brickwork, which was designed as a filter wall in front of the 4 to 5-storey car park areas. A green inner courtyard is concealed behind the U-shaped structure at 4th floor level.",
    },
    architect: "Schenk Waiblinger Architekten",
    address:
      "Haupteingang Sonninhof 3, Sonninstraße 24Hinweis: festes Schuhwerk erforderlich, Sicherheitsschuhe empfohlen, Hamburg",
    id: 102,
    lat: 53.5476486,
    lng: 10.0169265,
  },
  {
    district: "Hammerbrook",
    title: {
      de: "Wohnanlage am Sonninkanal",
      en: "Residential complex on the Sonnin Canal",
    },
    description: {
      de: "Neubau einer Wohnanlage im innerstädtischen Kontext.Das Projekt verteilt sich auf drei Baukörper, die von drei Hamburger Architekturbüros geplant wurden. ThüsFarnschläder Architekten haben das Haus 3 mit 129 Wohneinheiten in direkter Wasserlage sowie das gesamteSockelgeschoss für Haus 1 und 3 mit Tiefgarage und Nebenflächen geplant. Das Projekt ist in Massivbauweiseund mit erhöhtem Gründungsaufwand errichtet worden.",
      en: "New construction of a residential complex in an inner-city context The project is divided into three buildings, which were planned by three Hamburg architectural firms. ThüsFarnschläder Architekten planned House 3 with 129 residential units in a direct waterside location as well as the entire basement for Houses 1 and 3 with underground car park and ancillary areas. The project was built in solid construction and with increased foundation costs.",
    },
    architect: "Thüs Farnschläder Architekten PartmbB (LP 1-5)",
    address: "Südlicher Quartiersplatz, Sonninstraße 20, Hamburg",
    id: 103,
    lat: 53.5471768,
    lng: 10.0169241,
  },
  {
    district: "Hammerbrook",
    title: {
      de: "Leser Kontor - Neubau eines Firmensitzes mit technischem Prüfstand am Mittelkanal",
      en: "Leser Kontor - new building of a company headquarters with a technical test stand on the central canal",
    },
    description: {
      de: "Die Leser KG ist der größte Hersteller von Sicherheits ventilen in Europa und eines der führenden Unternehmenseiner Branche weltweit. Auf dem angestammten Firmen gelände in der Wendenstraße wurde nach Abbruch allerBestandsgebäude ein neues Hauptquartier in zwei Bauab schnitten errichtet. Der Innenhof zwischen Bürogebäudeund technischem Prüfstand bildet den neuen Firmencam pus zum Mittelkanal hin mit anspruchsvoll gestaltetemWasserbezug. Die offene Gestaltung des Gebäudes soll eineoffene Unternehmenskultur unterstützen.",
      en: "Leser KG is the largest manufacturer of safety valves in Europe and one of the leading companies in its sector worldwide. After demolishing all the existing buildings, a new headquarters was built in two sections on the company's original site in Wendenstrasse. The inner courtyard between the office building and the technical test stand forms the new company campus facing the central canal with a sophisticated waterfront design. The open design of the building is intended to support an open corporate culture.",
    },
    architect: "GRS REIMER ARCHITEKTEN GmbH",
    address: "Wendenstraße 133, Eingang Bürogebäude, Hamburg",
    id: 104,
    lat: 53.5490175,
    lng: 10.0324571,
  },
  {
    district: "Harburg",
    title: {
      de: "Maritimes Wohnen am Kaufhauskanal",
      en: "Maritime living on the department store canal",
    },
    description: {
      de: "Maßgeblich für die städtebauliche Struktur der Wohnan lage ist die schachbrettartige Anordnung der Gebäude. Die Form der einzelnen Baukörper wird vor allem durch die Anordnung des Dachfirsts über die Gebäudediagonale hinweg bestimmt. Dadurch ergeben sich an allen vier Seitender Gebäude fallende Traufkanten als gestaltprägendes Element. Die geometrische Besonderheit der Gebäude ist auchim Inneren in Form von offenen und räumlich höchst indi viduellen Galeriewohnungen erlebbar.",
      en: "The chessboard-like arrangement of the buildings is decisive for the urban structure of the residential area. The shape of the individual buildings is primarily determined by the arrangement of the roof ridge across the diagonal of the building. This results in sloping eaves on all four sides of the buildings as a design-defining element. The geometric peculiarity of the buildings can also be experienced inside in the form of open and spatially highly individualised gallery flats.",
    },
    architect:
      "Windels Architekten (LP 2 bis 5), BIG Bjarke Ingels Group (Entwurf)",
    address:
      "Harburger Schlossstraße 39, vor den Schaufenstern des Archäologischen Museums, Hamburg",
    id: 105,
    lat: 53.466081,
    lng: 9.9835514,
  },
  {
    district: "Harvestehude",
    title: {
      de: "Büro und Geschäftshaus, Am Alsterufer 1- 3",
      en: "Office and commercial building, Am Alsterufer 1-3",
    },
    description: {
      de: "Der Büroblock bildet den südlichen Abschluss der ehemaligen Dammvorstadt im Schnittpunkt von Außen alster und Wallring. Der Wettbewerbsentwurf des BürosAPB. Architekten wurde durch den Entwurf des Büros Riemann ergänzt. Das Kontorhaus-Ensemble mit zwei Höfenbildet einen urbanen Stadtblock mit Büroflächen auf sieben Geschossen sowie Restaurant- und Einzelhandels flächen. Die Tiefgarage ist viergeschossig.",
      en: "The office block forms the southern end of the former embankment suburb at the intersection of Außen alster and Wallring. The competition design byAPB. Architekten was supplemented by the design of Büro Riemann. The Kontorhaus ensemble with two courtyards forms an urban city block with seven storeys of office space as well as restaurant and retail areas. The underground car park is four storeys high.",
    },
    architect:
      "APB. Architekten BDA und Riemann Gesellschaft von Architekten mbH",
    address: "Am Alsterufer 1, vor dem Haupteingang, Hamburg",
    id: 106,
    lat: 53.5591668,
    lng: 9.9946697,
  },
  {
    district: "Harvestehude",
    title: { de: "Sophienpalais", en: "Sophienpalais" },
    description: {
      de: "Das Sophienpalais entstand 1935 und diente als militäri sches Verwaltungsgebäude. Das Gebäude, das durchseinen reduzierten, neoklassizistischen Habitus und seineSymmetrie beeindruckt, wurde in hochwertigen Wohn raum umgestaltet. In enger Abstimmung mit dem Denkmal schutz entkernten und modernisierten ksg architekten und stadtplaner das Sophienpalais. Die umlaufenden Fas saden blieben erhalten. Nur die Südfassade wurde erneuertund erhielt im Bereich der Wohnungen eine moderne Glasfassade, ergänzt durch Loggien sowie gestalterischeFassadenelemente mit ornamentalem Charakter.",
      en: "The Sophienpalais was built in 1935 and served as a military administration building. The building, which impresses with its reduced, neoclassical style and symmetry, was converted into high-quality living space. ksg architekten and stadtplaner gutted and modernised the Sophienpalais in close consultation with the conservation authorities. The surrounding façades were retained. Only the south façade was renovated and given a modern glass façade in the area of the flats, supplemented by loggias and design façade elements with an ornamental character.",
    },
    architect: "kister scheithauer gross architekten und stadtplaner GmbH",
    address: "Sophienterrasse 14, Haupteingang, Hamburg",
    id: 107,
    lat: 53.5762634,
    lng: 9.996062499999999,
  },
  {
    district: "Hoheluft-West",
    title: {
      de: "Neubau/Erweiterung Gymnasium Hoheluft",
      en: "New building/expansion Hoheluft high school",
    },
    description: {
      de: "Am Standort der ehemaligen Grundschule Christian Förster-Straße ist aus dem alten Schulgebäude und dem Erweiterungsbau das neu gegründete Gymnasium Hoheluft entstanden. Der Neubau nimmt in seiner archi tektonischen Gestaltung und Anordnung Bezug auf dasAltgebäude und ergänzt es inhaltlich um Unterrichtsräume,Fachklassen, Aula, Ganztagesbereich mit Küche sowie zwei Doppelsporthallen in gestapelter Bauweise. Ein innovativer Grundriss ermöglicht den flexiblen Zusammen schluss von Räumen und multifunktionale Nutzungen.",
      en: "On the site of the former Christian Förster-Straße primary school, the newly founded Hoheluft secondary school has been created from the old school building and the extension. In its architectural design and layout, the new building makes reference to the old building and adds classrooms, specialised classes, an assembly hall, an all-day area with a kitchen and two double sports halls in a stacked design. An innovative floor plan enables the flexible combination of rooms and multifunctional uses.",
    },
    architect:
      "BIWERMAU Architekten BDA (LP 1-5), in Arbeits gemeinschaft mit H&P Bauingenieure GmbH & Co. KG (LP 6-8)",
    address:
      "Gymnasium Hoheluft, Christian-Förster-Straße 21, Schulhof, Hamburg",
    id: 108,
    lat: 53.5836285,
    lng: 9.9627106,
  },
  {
    district: "Hohenfelde",
    title: {
      de: "Grüne Mitte Hohenfelde",
      en: "Green center Hohenfelde",
    },
    description: {
      de: "In Hohenfelde, nahe der Alsterschwimmhalle, wurden auf einem ehemaligen Schulgelände 160 neue Wohnungen errichtet. Insgesamt fünf Gebäude, geplant von vier ver schiedenen Architekturbüros, sind um einen zentralen Stadt teilpark gruppiert, in dem wertvoller Baumbestand erhal ten werden konnte. Zum verkehrsreichen Mühlendamm hinist das Quartier weitgehend geschlossen und so lärm geschützt. Die städtebauliche Gesamtplanung basiert aufeinem Wettbewerb aus dem Jahr 2010.",
      en: "In Hohenfelde, close to the Alster swimming pool, 160 new flats have been built on a former school site. A total of five buildings, planned by four different architectural firms, are grouped around a central urban park in which valuable trees have been preserved. The neighbourhood is largely closed off from the busy Mühlendamm and thus protected from noise. The overall urban planning is based on a competition held in 2010.",
    },
    architect: "coido architects und Bruun & MöllersLandschaftsarchitektur",
    address: "Mühlendamm 19, vor dem Eingang, Hamburg",
    id: 109,
    lat: 53.5611136,
    lng: 10.0249666,
  },
  {
    district: "Hummelsbüttel",
    title: { de: "Haus für eine Pianistin", en: "House for a pianist" },
    description: {
      de: "Dem Wohnhaus gaben zwei Aspekte seine besondere Gestalt: Das Grundstück ist von einem alten Baumbestandgeprägt. Es galt, das Gebäude schonend zwischen den Bäumen einzufügen. Die Bauherrin ist Konzertpianistin japanischer Herkunft. Der Aufstellungsort des Flügels, seine Sicht- und Hörbarkeit während der Proben und Auf führungen, bildete daher den Ausgangspunkt aller innenräumlichen Überlegungen. Neben diesen besonderenAnforderungen dient das Haus als Zuhause für eine fünfköpfige Familie.",
      en: "Two aspects gave the house its special shape: the plot is characterised by an old stock of trees. The aim was to integrate the building gently between the trees. The client is a concert pianist of Japanese origin. The location of the grand piano, its visibility and audibility during rehearsals and performances, therefore formed the starting point for all interior design considerations. In addition to these special requirements, the house serves as a home for a family of five.",
    },
    architect: "eins:eins architekten",
    address: "Distelweg 21, Hamburg",
    id: 110,
    lat: 53.6399554,
    lng: 10.0408541,
  },
  {
    district: "Langenhorn",
    title: {
      de: "Wohnquartier „Unter den Linden“",
      en: "Residential area “Unter den Linden”",
    },
    description: {
      de: "Mit dem Projekt „Unter den Linden“ entsteht ein neuesWohnquartier mit mehr als 450 Wohneinheiten auf dem parkartigen Gelände der ehemaligen Klinik Ochsenzoll.Die historischen Krankenhausbauten werden vollstän dig entkernt, saniert, mit großzügigen Balkon- und Terras senanlagen versehen und in hochwertige Eigentums wohnungen umgewandelt. Mehrere Neubauten fügen sichharmonisch in das Denkmal-Ensemble ein, zum Teil von Störmer Murphy and Partners geplant. Drei weitere Architekturbüros sind am Quartier beteiligt.",
      en: "The 'Unter den Linden' project is creating a new residential quarter with more than 450 residential units on the park-like grounds of the former Ochsenzoll Clinic. The historic hospital buildings are being completely gutted, refurbished, provided with spacious balconies and terraces and converted into high-quality condominiums. Several new buildings, some of them designed by Störmer Murphy and Partners, blend harmoniously into the ensemble of listed buildings. Three other architectural firms are involved in the neighbourhood.",
    },
    architect: "Störmer Murphy and Partners (LP 1-5)",
    address:
      "Wasserturm am Jütlandring/FassbinderwegHinweis: festes Schuhwerk erforderlich, da zum Teil noch Baustelle, Hamburg",
    id: 111,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Langenhorn",
    title: {
      de: "Unter den Linden/Ox-Park",
      en: "Unter den Linden/Ox Park",
    },
    description: {
      de: "Mit dem Projekt „Unter den Linden“ entsteht auf 11 ha ein neues Wohnquartier auf dem Gelände des ehemaligenKrankenhauses Ochsenzoll von 1891. Das Denkmal Ensemble aus Krankenhausbauten und Pavillons in dergroßzügigen Parkanlage wurde umgenutzt und nach verdichtet. Ehemalige Patientengärten wurden zu privatenGärten, wobei parkartige Strukturen, wie beeindruckendeGroßbäume, Lindenalleen und eine vielfältige Bepflanzung,erhalten bzw. ergänzt und der Öffentlichkeit zugänglich gemacht wurden.",
      en: "With the 'Unter den Linden' project, a new residential neighbourhood is being created on 11 hectares on the site of the former Ochsenzoll hospital dating from 1891. The listed ensemble of hospital buildings and pavilions in the spacious park was repurposed and densified. Former patient gardens were turned into private gardens, with park-like structures such as impressive large trees, avenues of lime trees and diverse planting being preserved or added to and made accessible to the public.",
    },
    architect: "GHP Landschaftsarchitekten",
    address:
      "Wasserturm am Jütlandring/FassbinderwegHinweis: festes Schuhwerk empfohlen, da zum Teil noch Baustelle, Hamburg",
    id: 112,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Neustadt",
    title: {
      de: "Denkmalgerechte Sanierung der ersten drei Gebäude im Gängeviertel",
      en: "Renovation of the first three buildings in the Brückenviertel in keeping with historic monuments",
    },
    description: {
      de: "Das Gängeviertel wurde im August 2009 von der Initiative„Komm in die Gänge“ durch etwa 200 Künstler und Kreative besetzt, um die Gebäude vor dem Zerfall und dem Abriss zu retten. Vorgestellt werden die ersten drei sanierten Gebäude Caffamacherreihe 37-39, 43-49und das soziokulturelle Zentrum „Fabrique“ am Valen tinskamp 34a, der bewohnerorientierte Planungs- und Umsetzungsprozess, die Geschichte des Gängeviertels sowieder Umgang mit der denkmalgeschützten Bausubstanz.",
      en: "The Gängeviertel was occupied in August 2009 by the 'Komm in die Gänge' initiative by around 200 artists and creative people in order to save the buildings from decay and demolition. The first three renovated buildings Caffamacherreihe 37-39, 43-49 and the socio-cultural centre 'Fabrique' at Valen tinskamp 34a, the resident-oriented planning and implementation process, the history of the Gängeviertel and the handling of the listed buildings are presented.",
    },
    architect: "Plan-R- Architektenbüro Joachim Reinig",
    address:
      "Ecke Caffamacherreihe 37-39/Speckstraße, vor der Jupi-Bar, Hamburg",
    id: 113,
    lat: 53.5550297,
    lng: 9.982987099999999,
  },
  {
    district: "Neustadt",
    title: {
      de: "Neubau eines Büro-Hochhauses zwischen BAT-Hochhaus und Finnland-Hochhaus",
      en: "New construction of a high-rise office building between the BAT high-rise and the Finland high-rise",
    },
    description: {
      de: "Der Grundgedanke des ehemaligen Oberbaudirektors Hebebrandt, einen Kranz von Hochhäusern um die innereStadt zu legen, wurde an der Esplanade in den 1960er Jahren mit zwei Hochhäusern umgesetzt. Das neue Hoch haus ergänzt dieses Ensemble, nimmt die Kubatur desehemaligen BAT-Hochhauses auf und erreicht die Höhe desFinnland-Hochhauses. Ein besonderes Augenmerk lag auf der Gestaltung der Schmalseiten, die die Fassadengestal tung des BAT-Hochhauses aufnehmen und transformieren.",
      en: "The basic idea of the former senior building director Hebebrandt to create a ring of high-rise buildings around the inner city was realised on the Esplanade in the 1960s with two high-rise buildings. The new high-rise complements this ensemble, taking up the cubature of the former BAT high-rise and reaching the height of the Finland high-rise. Particular attention was paid to the design of the narrow sides, which take up and transform the façade design of the BAT tower block.",
    },
    architect:
      "Winking · Froh Architekten GmbH (LP 1-5 + künstlerische Oberleitung)",
    address: "Haupteingang, Esplanade 40, Hamburg",
    id: 114,
    lat: 53.5581641,
    lng: 9.992253999999999,
  },
  {
    district: "Neustadt",
    title: {
      de: "Sanierung des denkmalgeschützten Ensembles von Godber Nissen Neuer Wall 41 und 43/Alsterarkaden 27",
      en: "Renovation of the listed ensemble of Godber Nissen Neuer Wall 41 and 43/Alsterarkaden 27",
    },
    description: {
      de: "Die Gebäude Alsterarkaden 27, Neuer Wall 43 und NeuerWall 41 wurden in den 1950er Jahren von dem Archi tekten Godber Nissen geplant und gelten als typisches Ensemble dieser Zeit. Beide Gebäude wurden in den letzten Jahren in Abstimmung mit dem Denkmalschutz amt umfänglich saniert.",
      en: "The Alsterarkaden 27, Neuer Wall 43 and Neuer Wall 41 buildings were designed in the 1950s by the architect Godber Nissen and are considered a typical ensemble of the period. Both buildings have been extensively refurbished in recent years in consultation with the monument protection authorities",
    },
    architect: "akyol kamps : bbp architekten gmbh",
    address: "Neuer Wall 41, Hamburg",
    id: 115,
    lat: 53.55124439999999,
    lng: 9.990298500000002,
  },
  {
    district: "Ohlstedt",
    title: { de: "Kinderkreisel", en: "children's top" },
    description: {
      de: "Die preisgekrönte Kinderkrippe (BDA Preis Hamburg 2017und Shortlist Architekturpreis 2017 des Deutschen Archi tekturmuseums) liegt in die Natur eingebettet am Waldrand.Das Gebäude bietet vielfältige Sichtbezüge im Innen- undAußenbereich. Durch eine durchlässige Wand sind die unterschiedlichen Funktionen über den gemeinschaftlichen Innenraum verbunden. Der Holzrahmenbau ist mit einernaturbelassenen Lärchenschalung und großzügigen Glas flächen verkleidet. Diese ermöglichen überraschende Einblicke in das Haus.",
      en: "The award-winning crèche (BDA Prize Hamburg 2017 and Shortlist Architecture Prize 2017 of the German Architecture Museum) is embedded in nature at the edge of the forest and the building offers a variety of visual references both inside and outside. A permeable wall connects the different functions via the communal interior space. The timber frame construction is clad with natural larch panelling and generous areas of glass. These allow surprising insights into the house.",
    },
    architect: "Kraus Schönberg Architekten",
    address: "KITA Kinderkreisel, Bredenbekkamp 20 a            , Hamburg",
    id: 116,
    lat: 53.6853054,
    lng: 10.1445914,
  },
  {
    district: "Rissen",
    title: { de: "Campus Rissen", en: "campus cracks" },
    description: {
      de: "Die Stadtteilschule Rissen erhielt am Standort des Gymnasiums Rissen ein neues Schulgebäude. Beide Schulenteilen sich den Campus und wurden um ein gemeinsa mes Aula- und Mensagebäude ergänzt. Zwei Schulen aneinem Standort führen zu Synergieeffekten in räumlicher und pädagogischer Hinsicht. Den grauen und erdfarbenenBetonplatten der Bestandsschulbauten wurden farbige Fassaden mit gepixelten Farbflächen gegenübergestellt.",
      en: "The Rissen district school was given a new school building on the site of the Rissen grammar school. Both schools share the campus and have been supplemented by a joint assembly hall and canteen building. Two schools at one location lead to synergy effects in terms of space and pedagogy. The grey and earth-coloured concrete slabs of the existing school buildings were contrasted with coloured façades with pixelated colour surfaces.",
    },
    architect:
      "Zweitraum - Büro für Architektur Götz Schünemann/Kristina Sträter",
    address:
      "Neubau der Stadtteilschule, überdachter Eingangsbereich, Voßhagen 15, Hamburg",
    id: 117,
    lat: 53.5798482,
    lng: 9.7517401,
  },
  {
    district: "Rotherbaum",
    title: {
      de: "Grandhotel The Fontenay",
      en: "Grand Hotel The Fontenay",
    },
    description: {
      de: "Auf dem Areal des früheren Hotels InterContinental an der Außenalster entsteht ein neues Fünf-Sterne Superior-Hotel. Der in einem internationalen Wettbewerberstplatzierte Entwurf von Störmer, Murphy and Part ners (Innenarchitektur in Zusammenarbeit mit dem Designer Mattheo Thun, Mailand) ist seit 2014 in Bau, im Herbst 2017 wird „The Fontenay“ eröffnen und soll an der Spitze der deutschen Luxushotellerie stehen. Der sechsgeschossige Solitärbau fügt sich mit flie ßenden Linien harmonisch in das parkartige Gelände ein.",
      en: "A new five-star superior hotel is being built on the site of the former InterContinental Hotel on the Outer Alster. The design by Störmer, Murphy and Part ners (interior design in collaboration with designer Mattheo Thun, Milan), which came first in an international competition, has been under construction since 2014 and 'The Fontenay' will open in autumn 2017 and is set to be at the forefront of the German luxury hotel industry. The six-storey solitary building blends harmoniously into the park-like grounds with its flowing lines.",
    },
    architect: "Störmer Murphy and Partners",
    address:
      "Baustelleneingang, Fontenay 10Hinweis: max. 15 Teilnehmer pro Führung, festes Schuhwerk erforderlich, Hamburg",
    id: 118,
    lat: 53.5648549,
    lng: 9.9968526,
  },
  {
    district: "Rotherbaum",
    title: {
      de: "Haus der Betriebswirtschaft",
      en: "House of Business Administration",
    },
    description: {
      de: "Das ehemalige Wohnpalais wurde 1896 nach den Plänendes Architekten Semmy Engel im Universitätsviertel Rotherbaum errichtet. Die für die Bauzeit typische Raum gliederung blieb durch alle Phasen des Nutzungswan dels erhalten. Seit 1948 wurde das Haus durch die Rechts wissenschaft und Kunstgeschichte, später durch die Universitätsverwaltung genutzt. Nach der Sanierung, Restaurierung und gestalterischen Überarbeitung steht das Haus der Betriebswirtschaft seit 2016 seinen neuen Nutzern zur Verfügung.",
      en: "The former residential palace was built in 1896 according to the plans of architect Semmy Engel in the university district of Rotherbaum. The room layout typical of the construction period was retained through all phases of the change in use. Since 1948, the building has been used by the Law and Art History departments and later by the university administration. Following refurbishment, restoration and redesign, the House of Business Administration has been available to its new users since 2016.",
    },
    architect: "Stölken Schmidt Architekten BDA",
    address: "vor dem Haus, Moorweidenstrasse 18, Hamburg",
    id: 119,
    lat: 53.5641179,
    lng: 9.9900153,
  },
  {
    district: "Stellingen",
    title: {
      de: "Kolumbarium St. Thomas Morus",
      en: "Columbarium of St. Thomas More",
    },
    description: {
      de: "In der 1979 von Jörn Rau erbauten Kirche und im Innenhof wurde ein Kolumbarium geschaffen, während die Kirche weiterhin auch für Gemeindegottesdienste genutzt wird. Die Urnengräber wurden zu Blöcken zusam mengefasst, deren Ausmaße die Wirkung des großenKirchenraumes auch aus der Sitzposition der Gläubigen heraus nicht stören. Im Außenbereich, dem „Paradies“, gruppieren sich weitere Urnenblöcke und begrünte Bank blöcke um die „ewige Asche“.",
      en: "A columbarium was created in the church built by Jörn Rau in 1979 and in the inner courtyard, while the church continues to be used for parish services. The urn graves were grouped together in blocks, the dimensions of which do not disturb the effect of the large church interior, even from the seating position of the faithful. In the outdoor area, the 'paradise', further urn blocks and planted bench blocks are grouped around the 'eternal ashes'.",
    },
    architect:
      "Andreas Rowold Architekt und Munder und Erzepky Landschaftsarchitekten",
    address: "Koppelstraße 16, im Foyer, Hamburg",
    id: 120,
    lat: 53.5926897,
    lng: 9.936755999999999,
  },
  {
    district: "St. Georg",
    title: {
      de: "Umbau und Erweiterung der Hamburger Kunsthalle",
      en: "Reconstruction and expansion of the Hamburger Kunsthalle",
    },
    description: {
      de: "Durch umfangreiche Umbau- und Erweiterungsmaßnahmendes Museums wurde ein zentrales Entrée aus der „Mitte des Ensembles“ entwickelt. Dazu wurde der ursprünglicheHaupteingang des Gründungsbaus reaktiviert und ange passt. Die Integration eines Auditoriums sowie Ticketing-,Garderobenräume und ein Museumsshop waren neben der Modernisierung der Depoträume und der Neugestaltungder Sammlungsräume Teil des Planungsauftrags.",
      en: "A central entrance from the 'centre of the ensemble' was developed through extensive renovation and extension measures at the museum. To this end, the original main entrance of the original building was reactivated and adapted. The integration of an auditorium as well as ticketing, cloakrooms and a museum shop were part of the planning brief, alongside the modernisation of the depot rooms and the redesign of the collection rooms",
    },
    architect:
      "LH Architekten Landwehr Henke + Partner mbB (LP 2-5 +Künstlerische Oberleitung), ECE Projektmanagement G.m.b.H. & Co. KG(LP 1 und 6-8):",
    address:
      "Plateau zwischen Galerie der Gegenwart und dem neuenHaupteingang, Glockengießerwall, Hamburg",
    id: 121,
    lat: 53.55583550000001,
    lng: 10.0018743,
  },
  {
    district: "Sülldorf",
    title: {
      de: "Klimamodellquartier „Op‘n Hainholt“",
      en: "Climate model district “Op'n Hainholt”",
    },
    description: {
      de: "Mit dem Klimamodellquartier sind 14 Eigentumswoh nungen, 27 Reihenhäuser und 8 Doppelhäuser entstanden.Satteldächer und Fassaden mit Backstein und Holz verschalungen fügen die Gebäude in die ländlich geprägteUmgebung der Stadtrandlage ein. Die Ökobilanz für diese Wohnanlage zeigt, dass mit dem Einsatz recycelterund nachhaltiger Baustoffe über 40 % Energie eingespartwerden. Herz des innovativen Energiekonzepts ist ein Solar Eis-Speicher.",
      en: "The climate model neighbourhood comprises 14 owner-occupied apartments, 27 terraced houses and 8 semi-detached houses, with pitched roofs and brick and timber cladding on the façades that blend in with the rural surroundings of the suburban location. The life cycle assessment for this residential complex shows that the use of recycled and sustainable building materials saves over 40 % energy. The centrepiece of the innovative energy concept is a solar ice storage system.",
    },
    architect: "eins:eins architekten",
    address: "Osterfeld 1, Hamburg",
    id: 122,
    lat: 53.5816339,
    lng: 9.800671099999999,
  },
  {
    district: "Winterhude",
    title: {
      de: "Klassenhaus für die Gelehrtenschule des Johanneums",
      en: "Class house for the Johanneum School of Scholars",
    },
    description: {
      de: "Zwischen der denkmalgeschützten Gelehrtenschule des Johanneums von Fritz Schumacher und dem Forum von2007 fügt sich das neue Klassenhaus an der Opitzstraße ein.Mit einer Terrassierung nach Norden bleibt ein respekt voller Abstand zu dem Altbau gewahrt und ein Teil der bebauten Pausenhoffläche bleibt über Freitreppen weiterfür die Schüler nutzbar. Auch im Inneren gibt es enge Verzahnungen von den notwendigen Treppen mit den Flur flächen vor den Klassen, wodurch besondere räumlicheQualitäten ausgebildet wurden.",
      en: "The new classroom building on Opitzstraße fits in between the listed Johanneum School of Scholars by Fritz Schumacher and the Forum from 2007, with terracing to the north maintaining a respectful distance from the old building and part of the built-up break area remaining usable for pupils via open staircases. Inside, too, there are close links between the necessary staircases and the corridors in front of the classes, creating special spatial qualities",
    },
    architect: "Winking · Froh Architekten GmbH",
    address: "Maria-Louisen-Straße, Ecke Opitzstraße, Hamburg",
    id: 123,
    lat: 53.5893705,
    lng: 10.0052716,
  },
  {
    district: "Altstadt",
    title: {
      de: "Gerhart-Hauptmann-Platz (1975)",
      en: "Gerhart-Hauptmann-Platz (1975)",
    },
    description: {
      de: "In den 1970er Jahren als poetischer Ort der Ruhe konzipiert,entschleunigt die „topografische Landschaft“ des Gerhart-Hauptmann-Platzes noch heute den Großstadt betrieb. Das Gestaltungsziel, den ersten Hamburger Platz mit lichten Bäumen zu schaffen, erfüllten Platanen Inseln, die sich mangels Beschnitt in einen „Wald“ verwandelt haben. Zur Förderung der Nutzer-Interaktiondienten für die Zeit innovative, bewegliche Sitzelemente,Rundbänke und Wasser-Reliefs, die zum Teil, wie der Pavillon, rückgebaut wurden.",
      en: "Conceived in the 1970s as a poetic place of tranquillity, the 'topographical landscape' of Gerhart-Hauptmann-Platz still decelerates city life today. The design goal of creating Hamburg's first square with light trees was fulfilled by islands of plane trees, which have turned into a 'forest' due to a lack of trimming. Innovative, movable seating elements, round benches and water reliefs, some of which, like the pavilion, have been dismantled, served to promote user interaction for the time.",
    },
    architect:
      "WES LandschaftsArchitektur (ehemals WES & Partner)Führung: Hinnerk Wehberg",
    address: "Gerhart-Hauptmann-Platz, Ecke Alstertor/Rosenstraße, Hamburg",
    id: 124,
    lat: 53.550953,
    lng: 9.998699499999999,
  },
  {
    district: "Altstadt",
    title: {
      de: "Rathausmarkt Hamburg (1982)",
      en: "Hamburg Town Hall Market (1982)",
    },
    description: {
      de: "Der Rathausmarkt ist aus dem Siegerentwurf eines bundesoffenen Wettbewerbs entstanden. Die noch im 19. Jahrhundert geschaffene Raumfolge Binnenalster,Kleine Alster, Rathausmarkt wurde durch die neue Treppeentlang der kleinen Alster betont und mit erhöhter Auf enthaltsqualität ausgestattet. Der Platz lebt von der großenfreien Fläche vor dem Rathaus und den Arkaden gegen über. Der Rathausmarkt ist ein Platz zum Verweilen, zumalltäglichen Gebrauch, für Demonstrationen und ebenso einOrt der Repräsentation.",
      en: "The Rathausmarkt was created from the winning design of an open national competition. The sequence of spaces created in the 19th century - Binnenalster, Kleine Alster, Rathausmarkt - was emphasised by the new staircase along the Kleine Alster and given a higher quality of stay. The square is characterised by the large open space in front of the town hall and the arcades opposite. The Rathausmarkt is a place to linger, for everyday use, for demonstrations and also a place of representation.",
    },
    architect:
      "Timm Ohrt & Hille von Seggern; Wettbewerbsentwurf: FNO Planungsgruppe",
    address:
      "Viertelkreistreppe bei der Barlach-Stele an der Kleinen Alster, Hamburg",
    id: 125,
    lat: 53.55185315714212,
    lng: 9.99275643269595,
  },
  {
    district: "Klein Flottbek",
    title: {
      de: "Biozentrum Klein Flottbek (1982)",
      en: "Klein Flottbek Biocenter (1982)",
    },
    description: {
      de: "Die Anforderungen des Lehr- und Forschungsbetriebes waren mit dem Maßstab der Umgebung, vornehmlichVillenbebauung, in Einklang zu bringen. Neben dem Verfü gungsgebäude für Lehre und Forschung mit Hörsälen, Bibliothek und Kurslaboren, den Anzuchtgewächshäusernund dem „Herbarium Hamburgense“ entstand ein Ver sorgungsgebäude für den botanischen Garten. Die beidenunteren Geschosse der Gebäude wurden in einer rotenZiegelfassade ausgeführt. Die Obergeschosse in Stahl undGlas treten diesen gegenüber zurück.",
      en: "The requirements of the teaching and research operations had to be harmonised with the scale of the surrounding area, primarily villa buildings. In addition to the administration building for teaching and research with lecture theatres, library and course laboratories, the cultivation greenhouses and the 'Herbarium Hamburgense', a supply building for the botanical garden was built. The two lower storeys of the building were clad in red brick. The upper storeys in steel and glass recede into the background.",
    },
    architect:
      "Arbeitsgemeinschaft Biozentrum Hamburg-Flottbek Nissen-Patschan Werner WinkingFührung: Prof. Bernhard Winking",
    address: "am Haupteingang, Ohnhorststraße 18, Hamburg",
    id: 126,
    lat: 53.5596717,
    lng: 9.859782599999999,
  },
  {
    district: "Steilshoop",
    title: {
      de: "Gemeindezentrum der Ev. Luth Martin-Luther-King-Kirche (1974)",
      en: "Ev. Community Center Luth Martin Luther King Church (1974)",
    },
    description: {
      de: "Das Gemeindezentrum war das erste Bauwerk im Zentrumdes neuen Stadtteils Steilshoop. Um den zentralen Andachtsraum legen sich wie ein Kreuz das Gemeindehaus,Jugendhaus, Wohnungen und ein „hortus conclusus“. Die Architektur folgt skandinavischen Einflüssen in der Ver wendung von blauer Baukeramik und Holz sowie in derInnenraumgestaltung. Altar, Kreuz und Leuchten, Lesepultund Opferstöcke sind eine Gemeinschaftsarbeit des Architekten und des Gold- und Silberschmieds Alfons Werner.",
      en: "The community centre was the first building in the centre of the new district of Steilshoop. The parish hall, youth centre, flats and a 'hortus conclusus' are arranged around the central prayer room like a cross. The architecture follows Scandinavian influences in the use of blue architectural ceramics and wood as well as in the interior design. The altar, cross and lights, lectern and offering sticks are the joint work of the architect and the goldsmith and silversmith Alfons Werner.",
    },
    architect:
      "Patschan Werner Winking Architekten, Landschaftsarchitekten: Wehberg · Lange + PartnerFührung: Prof. Asmus Werner",
    address: "Foyer Erdgeschoss Gemeindehaus, Gründgensstraße 28, Hamburg",
    id: 127,
    lat: 53.609964,
    lng: 10.0594985,
  },
  {
    district: "St. Georg",
    title: {
      de: "Stadterneuerung in St. Georg zwischen 1978 und 2017",
      en: "Urban renewal in St. Georg between 1978 and 2017",
    },
    description: {
      de: "Die Veranstaltung besteht aus einem Einleitungsvortrag im Stadtteilbüro zur historischen Entwicklung von St. Georgund der Geschichte der Stadterneuerung von 1978 bis heute und einer Führung durch den Stadtteil, die die unter schiedlichen Welten des Stadtteils - Lange Reihe - Hansaplatz - Steindamm den Besuchern vor Augen führt.Dabei werden einzelne Projekte der Sanierung (Altbau sanierung, Wohnungsneubau, Straßen - und Platzgestaltung)und u.a. das Thema Bürgerbeteiligung erläutert.",
      en: "The event consists of an introductory lecture in the district office on the historical development of St. Georg and the history of urban renewal from 1978 to the present day and a guided tour through the district, which shows visitors the different worlds of the district - Lange Reihe - Hansaplatz - Steindamm - and explains individual redevelopment projects (renovation of old buildings, new housing construction, street and square design) and, among other things, the topic of citizen participation",
    },
    architect: "ASK GmbH - Stadtplaner und Sanierungsträger",
    address:
      "Stadtteilbüro am Hansaplatz/Ecke Zimmerpforte, Zimmerpforte 8, Hamburg",
    id: 128,
    lat: 53.5552277,
    lng: 10.0122972,
  },
  {
    district: "Allermöhe",
    title: {
      de: "Studierendenwohnanlage Sophie-Schoop-Weg",
      en: "Sophie-Schoop-Weg student housing complex",
    },
    description: {
      de: "Der Mangel an bezahlbarem Wohnraum in Hamburg istbesonders für Studierende ein Problem. Um bezahlbarenWohnraum zu realisieren, müssen problematische und dadurch kostengünstige Grundstücke, wie hier z.B. in lärmintensiver Lage, durch kluge städtebauliche und archi tektonische Konzepte qualifiziert werden. Der Neubau des Studierendenwerks Hamburg mit 266 Plätzen in verschiedensten individuellen Wohnformen ist ein Pionier projekt am Tor zum neuen Stadtteil Oberbillwerder.",
      en: "The lack of affordable housing in Hamburg is a particular problem for students. In order to realise affordable housing, problematic and therefore inexpensive plots of land, such as the one here in a noisy location, must be qualified through clever urban planning and architectural concepts. The new Studierendenwerk Hamburg building with 266 places in a wide variety of individual housing forms is a pioneering project at the gateway to the new Oberbillwerder district.",
    },
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB (LP 1 bis 5), SWP-Architekten Göttsche-Hoffmann-Partner GbR (LP 6 bis 8)",
    address: "Sophie Schoop Weg 2, Haupteingang, Hamburg",
    id: 129,
    lat: 53.4893489,
    lng: 10.1607664,
  },
  {
    district: "Altona-Altstadt",
    title: {
      de: "Stadthaus Schmarjestraße",
      en: "Townhouse Schmarjestraße",
    },
    description: {
      de: "Eine alte Buche und die St. Petri-Kirche prägen das kleineGrundstück in der Schmarjestraße in Altona, das sich zu einem Ort für eine Baugemeinschaft mit sehr diversenWohnvorstellungen entwickelte: Studiowohnen, Loft mit Dachterrasse, vertikale Bibliotheken und ein Patio im Untergeschoss. Die fünf Wohnungen sind nach dem Prinzip des Stadthauses entwickelt, so besitzen sie jeweilseinen eigenen, individuellen Wohnungseingang auf Erdgeschossniveau und sind vornehmlich über mehrere Geschosse organisiert.",
      en: "An old beech tree and St. Peter's Church characterise the small plot in Schmarjestraße in Altona, which has become a place for a building community with very diverse living concepts: studio apartments, lofts with roof terraces, vertical libraries and a patio in the basement. The five flats are designed according to the townhouse principle, so they each have their own individual entrance at ground floor level and are primarily organised over several storeys.",
    },
    architect: "coido architects | Cordsen Ipach + Döll GmbH",
    address: "Schmarjestraße 24, Hamburg",
    id: 130,
    lat: 53.5490355,
    lng: 9.9390061,
  },
  {
    district: "Altstadt",
    title: {
      de: "Revitalisierung Büro- und Geschäftshaus Neuer Wall 50",
      en: "Revitalization of the Neuer Wall 50 office and commercial building",
    },
    description: {
      de: "Das sich zu drei Seiten orientierende Gebäude befindet sich im historischen Kerngebiet von Hamburg. Stark in die Jahre gekommen, hat das Bestandsgebäude aus den1980er Jahren durch die Umbaumaßnahme einen frischenund modernen Ausdruck erhalten, ohne dass die Grund struktur des Gebäudes im Wesentlichen verändert wordenist. Die prägende Erkerstruktur wurde beibehalten. Dieschrägen Dachformen wurden durch nutzbare Terrassenersetzt. Das Gebäude erhielt zusätzlich eine Aufstockung inForm von zwei Penthouse-Wohnungen.",
      en: "The building, which faces onto three sides, is located in the historic centre of Hamburg. The existing building from the 1980s, which was getting on in years, has been given a fresh and modern look thanks to the remodelling work, without the basic structure of the building being essentially changed. The characteristic bay window structure was retained. The sloping roof shapes were replaced by usable terraces. The building was also given an additional storey in the form of two penthouse flats.",
    },
    architect: "Florian Fischötter Architekt GmbH",
    address: "auf der Bleichenbrücke, Hamburg",
    id: 131,
    lat: 53.5516681,
    lng: 9.9884753,
  },
  {
    district: "Altstadt",
    title: {
      de: "„Prospekt“ Kunst am Bau - Mahnmal St. Nikolai",
      en: "“Prospectus” Art in Architecture - St. Nikolai Memorial",
    },
    description: {
      de: "Der am Mahnmal St. Nikolai realisierte Kunst am Bau Wettbewerbsbeitrag „Prospekt“ ist eine Installation, die die Skulpturen von St. Nikolai in Szene setzt. Durch zwei Präsentationsformen, bei Tag und bei Nacht, werden dem Besucher Einblicke und Aussichten auf den Figurenschmuck des Turmes ermöglicht.",
      en: "The Kunst am Bau competition entry 'Prospekt' realised at the St. Nikolai memorial is an installation that stages the sculptures of St. Nikolai. Through two forms of presentation, by day and by night, the visitor is given insights and views of the sculptural decoration of the tower",
    },
    architect: "acollage. architektur urbanstik und Nic Fey",
    address:
      "Mahnmal St. Nikolai, Hauptportal, Willy-Brandt-Straße 60, Hamburg",
    id: 132,
    lat: 53.5474603,
    lng: 9.9906708,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "Praxislandschaft mit smarter Hotelatmosphäre",
      en: "Practice landscape with a smart hotel atmosphere",
    },
    description: {
      de: "Zahnarztpraxen suchen mehr denn je nach Wegen, den Patienten als Kunden zu gewinnen. Die dreifache Praxis, LS smart LS kids LS kieferorthopädie, erforderte die Zusammenfügung von einem funktionalen Raumkonzept,hochwertiger Gestaltung und Technik. In einer vier monatigen Planungs- und Bauzeit konnte der geforderteRaumbedarf durch geschickte Möbelgestaltung redu ziert werden. Die Kunden werden auf Augenhöhe empfangen.In Anlehnung an eine Hotelatmosphäre sind Material und Beleuchtung konzipiert worden.",
      en: "More than ever, dental practices are looking for ways to attract patients as customers. The threefold practice, LS smart LS kids LS kieferorthopädie, required the combination of a functional room concept, high-quality design and technology. In a four-month planning and construction period, the required space was reduced through skilful furniture design. Customers are welcomed at eye level and the materials and lighting have been designed with a hotel atmosphere in mind.",
    },
    architect: "Kamleitner Architekten",
    address:
      "Friesenweg 2a (kleine Stichstraße), erster Eingang, Erdgeschoss, Hamburg",
    id: 133,
    lat: 53.5587702,
    lng: 9.9085998,
  },
  {
    district: "Billstedt",
    title: {
      de: "Erweiterung Katholische Schule St. Paulus",
      en: "Expansion of St. Paul's Catholic School",
    },
    description: {
      de: "Anforderungen wie Inklusion und Ganztagesbetrieb machtenfür die bestehende Schule eine Erweiterung für Unter richtsräume, Caféteria und Verwaltung erforderlich. Dasdidaktische Transparenzkonzept der Schule fand dabei seine bauliche Entsprechung in einem bewusst offen gehal tenen Gebäude mit zahlreichen Durch-, Ein- und Ausbli cken. Die lichtdurchflutete Halle mit transparentem Folien kissendach dient als neuer zentraler Versammlungs- undBegegnungsort, ergänzt um diverse Kommunikations- undRückzugsbereiche wie der Bibliothek mit Dachterrasse.",
      en: "Requirements such as inclusion and all-day operation made it necessary to extend the existing school for classrooms, cafeteria and administration. The school's didactic transparency concept found its structural equivalent in a deliberately open-plan building with numerous passages, entrances and exits. The light-flooded hall with a transparent foil cushion roof serves as a new central meeting place, supplemented by various communication and retreat areas such as the library with roof terrace.",
    },
    architect: "APB. Grossmann-Hensel Schneider Andresen Architekten BDA",
    address: "Katholische Schule St. Paulus, Öjendorfer Weg 14, Hamburg",
    id: 134,
    lat: 53.5406045,
    lng: 10.1091166,
  },
  {
    district: "Blankenese",
    title: {
      de: "Erweiterungsbau Stadtteilschule Blankenese",
      en: "Blankenese district school extension",
    },
    description: {
      de: "Flexible Nutzung, Heimatbildung und individuelle Lernortesind die Kernthemen der Stadtteilschule Blankenese. Das neu gestaltete Foyer mit Mensa, Räumen für Musik,Kunst und Darstellendes Spiel sowie mit Bibliothek sinddas neue Herzstück des Zubaus. Offen gestaltete Bereiche,mobile Trennwände, individuelle Einbauten und Mobiliarverleihen diesem eine atelierartige Atmosphäre. Die neuenHeimaten für die Unterstufe sind jahrgangsweise im drei geschossigen Klassenhaus untergebracht und ebenfallsvom Foyer aus erreichbar.",
      en: "Flexible utilisation, home education and individual learning spaces are the core themes of the Blankenese district school. The newly designed foyer with canteen, rooms for music, art and drama as well as a library are the new centrepiece of the extension. Open-plan areas, mobile partition walls, customised fixtures and furniture give it a studio-like atmosphere. The new classrooms for the lower school are housed in the three-storey classroom block and are also accessible from the foyer.",
    },
    architect:
      "Trapez Architektur GmbH (LP 1 bis 9), Architekturbüro Herzer (LP 8, teilweise)",
    address: "Foyer, Zugang über Frahmstraße 15, Hamburg",
    id: 135,
    lat: 53.5638303,
    lng: 9.822298199999999,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Berufsschule Eimsbüttel - Neubau Klassenhaus",
      en: "Eimsbüttel vocational school - new classroom building",
    },
    description: {
      de: "Beim Neubau der Berufsschule Eimsbüttel handelt es sich um die Erweiterung eines denkmalgeschützten Gebäu des von Fritz Schumacher (1910). Das neue Klassenhausschließt sich an den Risalit des historischen Bauwerks anund setzt sich durch eine dezente Glasfuge ab. Die Fas sade zitiert die historische Klinkerarchitektur in Materialitätund Format. Die Cafeteria stellt mit ihrer Raumhöhe eineBesonderheit im Hamburger Schulbau dar. Die Unterrichts räume sind als neue Lernwelten gestaltet.",
      en: "The new building for the Eimsbüttel vocational school is an extension to a listed building by Fritz Schumacher (1910). The new classroom block adjoins the risalit of the historic building and is set apart by a discreet glass joint. The façade quotes the historic clinker brick architecture in terms of materiality and format. With its room height, the cafeteria is a special feature in Hamburg school buildings. The classrooms are designed as new learning environments.",
    },
    architect: "ABJ. Planungsgesellschaft mbH",
    address: "Haupteingang Lutterothstraße 80 (Elsa-Rauch-Platz), Hamburg",
    id: 136,
    lat: 53.5822227,
    lng: 9.9469605,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Stadtraumerneuerung in der Osterstraße",
      en: "Urban space renewal in Osterstrasse",
    },
    description: {
      de: "Die Osterstraße ist das quirlige Zentrum Eimsbüttels - ein bunter Mix aus Einzelhandel und Gastronomie. In die Jahre gekommen war sie dennoch, stammten dieGrundzüge der Straßenraumgestaltung noch aus den1950 /1960er Jahren. Ein Bedürfnis nach einem urbanenStraßenraumflair war in den Bürgerbeteiligungen über deutlich geworden. Es ergab sich die Chance zur vollständi gen Neuordnung, wobei das in der Verkehrsplanung ge wohnte Denkmuster, die Fahrbahn als Hauptfläche und derBürgersteig als Nebenfläche, hier invers entwickelt ist.",
      en: "Osterstraße is the lively centre of Eimsbüttel - a colourful mix of retail and restaurants. Nevertheless, it was getting on in years, with the basic features of the street design dating back to the 1950s/1960s. A need for an urban street flair had become clear in the public consultations. The opportunity arose for a complete reorganisation, whereby the familiar traffic planning pattern of the carriageway as the main surface and the pavement as a secondary surface was developed in reverse here.",
    },
    architect:
      "Kontor Freiraumplanung, ARGUS Stadt undVerkehr, SBI Beratende Ingenieure, Steg Hamburg mbH",
    address:
      "Fanny-Mendelssohn-Platz, am Eingang zur U-Bahnhaltestelle, Hamburg",
    id: 137,
    lat: 53.5762844,
    lng: 9.9519556,
  },
  {
    district: "Eppendorf",
    title: {
      de: "Neubau Kinder-UKEWerner und Michael Otto Universitätskinderklinik",
      en: "New building children's UKEWerner and Michael Otto University Children's Clinic",
    },
    description: {
      de: "Der Entwurf wird von der im Eingangsbereich stehenden126 jährigen Hainbuche geprägt. Sie bildet das Leitmotiv für den gesamten Entwurf „dem Baumprojekt“ und ist die Seele des neuen Hauses. Um sie herum fügt sich das Gebäude offen, lichtdurchflutet und großzügig. Neben denhochtechnischen Bereichen hält es immer wieder Nischenbereit, die den „kleinen Patienten“ und Besuchern Geborgen heit bieten und Vertrauen stiften sollen.",
      en: "The design is characterised by the 126-year-old hornbeam standing in the entrance area. It forms the leitmotif for the entire design 'the tree project' and is the soul of the new building. The building is centred around it and is open, light-flooded and spacious. In addition to the high-tech areas, there are always niches ready to offer the 'little patients' and visitors a sense of security and trust.",
    },
    architect:
      "tsj tönies + schroeter + jansen freie architekten gmbh (LP 2 bis 4 und Teilleistungen LP 5 bis 8)",
    address:
      "Martinistraße 52, Gebäude O47, im Innenhof an der Hainbuche, Hamburg",
    id: 138,
    lat: 53.590319,
    lng: 9.9784341,
  },
  {
    district: "Farmsen-Berne",
    title: {
      de: "Neubau Gymnasium Farmsen",
      en: "New construction of Farmsen high school",
    },
    description: {
      de: "Das Gymnasium Farmsen wird seit jeher als „Schule im Grünen“ wahrgenommen. Die Aufgabe bestand darin, trotz Teilabbruchs des Bestands und Errichtung des drei geschossigen Neubaus diese Qualität zu erhalten. Der Neubau hat die Form eines rechtwinkligen Z. Während inden kurzen Schenkeln des Baus die Jahrgangsbereicheuntergebracht sind, nimmt der mittlere Teil Ganztags- undGemeinschaftsflächen sowie nahezu alle Fachbereiche auf. Große verglaste Schächte bringen Tageslicht vom Dachin die Gemeinschaftsräume in den Obergeschossen und bis in die Aula und die Mensa im Erdgeschoss.",
      en: "Farmsen Grammar School has always been perceived as a 'school in the countryside'. The task was to maintain this quality despite the partial demolition of the existing building and the construction of the new three-storey building. The new building has the shape of a right-angled Z. While the short sides of the building house the year groups, the centre section accommodates all-day and communal areas as well as almost all subject areas. Large glazed shafts bring daylight from the roof into the common rooms on the upper floors and into the assembly hall and canteen on the ground floor.",
    },
    architect: "Haslob, Kruse + Partner Architekten mbB",
    address: "Treffpunkt vor dem Haupteingang, Swebenhöhe 50, Hamburg",
    id: 139,
    lat: 53.61224370000001,
    lng: 10.1096947,
  },
  {
    district: "HafenCity",
    title: {
      de: "Öffentliche Freianlagen Westliche HafenCity",
      en: "Public open spaces in Western HafenCity",
    },
    description: {
      de: "Die ehemaligen Hafenflächen werden in einen neuen, maritimen Stadtraum transformiert - das größte innerstädt ische Stadtentwicklungsprojekt Europas. Es entsteht ein gemischt genutzter, urbaner Raum, der Menschen näheran das Wasser heranbringt. Viel Grün und Wasser bildendie Identität der vielfältigen Orte, das mediterrane Designstellt unmittelbare Bezüge zwischen Promenaden, Straßen,Plätze, Parks und dem Wasser her - wie eine wechselndeLandschaft entlang der Kais, die von Menschen statt vonSchiffen geprägt werden.",
      en: "The former harbour areas are being transformed into a new, maritime urban space - the largest inner-city urban development project in Europe. The result is a mixed-use urban space that brings people closer to the water. Lots of greenery and water form the identity of the diverse locations, the Mediterranean design creates direct links between promenades, streets, squares, parks and the water - like a changing landscape along the quays, which are characterised by people instead of ships.",
    },
    architect:
      "Miralles Tagliabue EMBT (LP 1 bis 4), WES GmbH LandschaftsArchitektur (LP 5 bis 8)",
    address: "Magellan-Terrassen / Großer Grasbrook, Hamburg",
    id: 140,
    lat: 53.5425675,
    lng: 9.9933046,
  },
  {
    district: "HafenCity",
    title: { de: "Campus Futura", en: "Campus Futura" },
    description: {
      de: "Neubau eines Hotels mit Wohnungsteil Im Fokus der Planung des Jugend- und Familienhotels im Baakenhafen steht ein beeindruckendes Raumerlebnis für die Gäste. Unterschiedliche Ebenen, vielfältige Blick beziehungen und Durchblicke bis zum Wasser prägen die Räume des umweltzertifizierten Hotels. Die fantastischeLage am Hafen brachte eine anspruchsvolle technische Planung mit sich. Flutschutztore zur Hafenseite und ein hoherSchallschutz, bedingt durch die Anbindung der U-Bahn und die Versmannstraße, mussten berücksichtigt werden.",
      en: "The design of the youth and family hotel in Baakenhafen harbour focuses on an impressive spatial experience for guests. The rooms of the environmentally certified hotel are characterised by different levels, diverse views and vistas down to the water. The fantastic location on the harbour required sophisticated technical planning. Flood protection gates on the harbour side and a high level of soundproofing due to the connection to the underground and Versmannstraße had to be taken into account.",
    },
    architect:
      "KBNK Architekten GmbH (LP 2 bis 4, Erstellung Leitdetails, Künstlerische Oberbauleitung)",
    address: "Versmannstraße 12, Ausgang U-Bahnhof, Hamburg",
    id: 141,
    lat: 53.5400919,
    lng: 10.0091643,
  },
  {
    district: "Langenhorn",
    title: {
      de: "Wohnen am Kiwittsmoor-Park",
      en: "Living at Kiwittsmoor Park",
    },
    description: {
      de: "Der Neubau nimmt mit seiner geknickten Form zum einendie Ausrichtung der bestehenden Häuserzeilen auf, zumanderen orientiert er sich am Straßenverlauf. Am Übergangder „Fritz-Schumacher-Siedlung“ zur nördlichen „Garten stadt Langenhorn-Heidberg“ - entstanden im Zeichen dervom damaligen Oberbaudirektor Hebebrand proklamierten„aufgelockerten und gegliederten Stadt“ - setzt er einenAkzent, der sowohl auf die aktuelle Entwicklung der Stadtals auch auf die städtebauliche Historie verweist.",
      en: "With its angled shape, the new building takes up the alignment of the existing rows of houses on the one hand, while on the other hand it is orientated towards the course of the street. At the transition from the 'Fritz-Schumacher-Siedlung' to the northern 'Gartenstadt Langenhorn-Heidberg' - which was created in the spirit of the 'loosened and structured city' proclaimed by the then Chief Building Director Hebebrand - it sets an accent that refers both to the current development of the city and to its urban planning history.",
    },
    architect:
      "tun-architektur, T. Müller / N. Dudda Partnerschafts gesellschaft mbB (LP 1 bis 7, teilweise 8), architekturbüro j. h. haase (LP 1 bis 5, teilweise 8)",
    address: "Tangstedter Landstraße 381, Hamburg",
    id: 142,
    lat: 53.6700236,
    lng: 10.025704,
  },
  {
    district: "Neustadt-Nord",
    title: { de: "WLC - Work Life Center", en: "WLC - Work Life Center" },
    description: {
      de: "Die Oberpostdirektion wurde 1883-1887 erbaut und 1997in die Denkmalliste aufgenommen. Die Neuplanung hat die historischen Fassaden und Treppenhäuser sowie dieEisenhalle erhalten. Auf einer neuen Tiefgarage ist die Halleals neue Verbindung zum Ostbau inszeniert. Der Baukör per am Gorch-Fock-Wall ist um eine gläserne Aufstockungergänzt, wie sie bereits am Ostbau ausgeführt wurde. ZumDammtorwall wurde das Haus um einen fünfgeschossigenBüroaufbau erweitert, der die Halle zur Hälfte überkragt.",
      en: "The Oberpostdirektion was built between 1883 and 1887 and was added to the list of monuments in 1997. The new design has retained the historic façades and stairwells as well as the iron hall. On a new underground car park, the hall is staged as a new connection to the east building. The structure on Gorch-Fock-Wall is supplemented by a glass extension, as was already realised on the Ostbau. Towards the Dam Gate Wall, the building was extended by a five-storey office structure, half of which cantilevers over the hall.",
    },
    architect:
      "LH Architekten, Landwehr Henke + Partner mbB (LP 1 bis 5 und Innenausbau 6. OG), GRS Reimer Architekten (LP 5 bis 8)",
    address:
      "Eingang Stephansplatz zu Planten un Blomen, Ecke Gorch-Fock-Wall / Dammtordamm, Hamburg",
    id: 143,
    lat: 53.5579765,
    lng: 9.9894695,
  },
  {
    district: "Othmarschen",
    title: {
      de: "Gymnasium ChristianeumNeubau Bibliothek und Grundinstandsetzung",
      en: "Christianeum high school, new library building and basic repairs",
    },
    description: {
      de: "Das Christianeum wurde 1968 bis 1971 nach Plänen der dänischen Architekten Arne Jacobsen und Otto Weitling errichtet. Das Gebäude steht außen und innen einschließlichder Ausstattung unter Denkmalschutz. Für den wertvollenBuchbestand, basierend auf einer Schenkung des Schulgrün ders, Christian VI, König von Dänemark, wurde durch denAusbau eines Hochkellers und durch die Umstrukturierungvon Räumlichkeiten eine neue Bibliothek geschaffen. Zeit gleich fand die innere Grundinstandsetzung der Schule statt.",
      en: "The Christianeum was built between 1968 and 1971 according to plans by Danish architects Arne Jacobsen and Otto Weitling. The exterior and interior of the building, including the furnishings, are listed buildings. A new library was created for the valuable book collection, based on a donation from the school's founder, Christian VI, King of Denmark, by extending a high basement and reorganising the rooms. At the same time, the interior of the school was completely refurbished.",
    },
    architect: "lup-architekten, Inhaber Stefan Mathey",
    address: "Otto-Ernst-Straße 34, Haupteingang, Hamburg",
    id: 144,
    lat: 53.55804,
    lng: 9.874189999999999,
  },
  {
    district: "Rotherbaum",
    title: {
      de: "Wohnen an der MagistraleDurchschnitt / An der Verbindungsbahn",
      en: "Living on the main roadAverage / On the connecting railway",
    },
    description: {
      de: "Das Gebäude liegt an einer Magistrale mit angrenzenderBahntrasse und ist durch erhebliche Lärmemissionen belastet. Vor dem Hintergrund der Grundstücksknappheit inden Städten zeigt das Projekt, dass das Thema „Schall schutz im Wohnungsbau“ wohnlich und hochwertig um setzbar ist. Das bestehende Quartier wurde durch dieSchließung des Blockes deutlich aufgewertet und ein ruhigerInnenhof gewonnen. Die Nachverdichtung hat so auch für die Nachbarschaft einen großen Mehrwert geschaffen.",
      en: "The building is located on a main road with an adjacent railway line and is subject to considerable noise emissions. Against the background of the scarcity of land in cities, the project shows that the topic of 'noise protection in residential construction' can be implemented in a cosy and high-quality way. The existing neighbourhood was significantly upgraded by closing the block and a quiet inner courtyard was created. The redensification has thus also created great added value for the neighbourhood.",
    },
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
    address: "An der Verbindungsbahn 3, vor dem Hauseingang, Hamburg",
    id: 145,
    lat: 53.5644005,
    lng: 9.979468599999999,
  },
  {
    district: "Uhlenhorst",
    title: {
      de: "Umbau der Bibliothek der Hochschule für bildende Künste",
      en: "Renovation of the library of the University of Fine Arts",
    },
    description: {
      de: "Ziel des Umbaus der Bibliothek der denkmalgeschütztenHochschule für bildende Künste war die Erweiterung desinhaltlichen und räumlichen Angebots. Durch das Addierenvon zusätzlichen Funktionen per Einbauten und Möbel, die sich in Form und Materialität an dem Entwurf Fritz Schu machers orientieren, wurde der Bestand sensibel fortge schrieben. Im großen Lesesaal und im ehemaligen Magazinwurden zwei sehr unterschiedliche Arbeitswelten mit einer Vielzahl an neuen Nutzungsmöglichkeiten geschaffen.",
      en: "The aim of the remodelling of the library of the listed University of Fine Arts was to expand the content and space on offer. By adding additional functions through fixtures and furniture, which are based on Fritz Schumacher's design in terms of form and materials, the existing building was sensitively continued. In the large reading room and the former stacks, two very different working environments were created with a variety of new utilisation options.",
    },
    architect:
      "asdfg Architekten in Kooperation mit den Professoren Jesko Fezer und Glen Oliver Löw",
    address: "Lerchenfeld 2, vor der Bibliothek im 2. Obergeschoss, Hamburg",
    id: 146,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Wilhelmsburg",
    title: {
      de: "Betriebshof Alte Gärtnerei - Inselpark",
      en: "Alte Gärtnerei depot - Inselpark",
    },
    description: {
      de: "Auf dem Gelände der „Internationalen Gartenschau 2013“ist ein neuer Betriebshof für 32 Büro- und Außendienst mitarbeiter entstanden. Für die zukünftige Parkbewirtschaf tung stehen in dem 2017 fertig gestellten Gebäudeen semble ein Verwaltungsbau und Remisen zur Verfügung. Die Gebäude wurden vollständig in einer Holzrahmen konstruktion errichtet. Die handwerklichen Details der außen- und innenräumlichen Fassaden sowie die der Möbel- und Arbeitsplatzeinrichtungen können als vorbild haft bezeichnet werden.",
      en: "A new depot for 32 office and field staff has been built on the site of the 'International Garden Show 2013'. An administration building and sheds are available for future park management in the building complex, which was completed in 2017. The buildings were constructed entirely using a timber frame construction. The craftsmanship details of the exterior and interior façades as well as the furniture and workplace fittings can be described as exemplary.",
    },
    architect: "Stölken Schmidt Architekten BDA",
    address: "Hauland 83, Hamburg",
    id: 147,
    lat: 53.4867095,
    lng: 9.997579799999999,
  },
  {
    district: "Wilhelmsburg",
    title: {
      de: "Woodie (Universal Design Quarter)",
      en: "Woodie (Universal Design Quarter)",
    },
    description: {
      de: "Woodie ist das derzeit weltweit größte Wohnbauprojekt in Holz-Modulbauweise und bietet Micro-Apartments für 371 Studierende. Als Teil eines neuen Wohnquartiers in Hamburg-Wilhelmsburg knüpft es an den experi mentellen Charakter der IBA 2013 an. Die 20 Quadratmetergroßen Apartments wurden inklusive ihrer Einbauten in Österreich vollständig aus Vollholz vorgefertigt und inner halb von wenigen Monaten in Hamburg montiert.",
      en: "Woodie is currently the world's largest residential project in modular timber construction and offers micro-apartments for 371 students. As part of a new residential neighbourhood in Hamburg-Wilhelmsburg, it builds on the experimental character of the IBA 2013. The 20 square metre flats, including their fixtures and fittings, were prefabricated entirely from solid wood in Austria and assembled in Hamburg within a few months.",
    },
    architect: "Sauerbruch Hutton",
    address: "Haupteingang Woodie, Dratelnstraße 32, Hamburg",
    id: 148,
    lat: 53.4993902,
    lng: 10.0004752,
  },
  {
    district: "Altona-Nord",
    title: {
      de: "Freiraumplanung Paketpostamt Altona (1974)",
      en: "Open space planning Altona parcel post office (1974)",
    },
    description: {
      de: "Das Paketpostamt Altona wurde in den 1970er Jahren auf dem Gelände des ehemaligen Kaltenkirchener Bahnhofsgebaut. Die künstlerische Perspektive des Büros WES &Partner prägte maßgeblich die Freiraumgestaltung mit dergeschwungenen Topografie, dem mäandernden Backsteinsowie einzelnen, expressiven Kunstobjekten. Das Projekterhielt 1972 den „Preis des Bundesbauministeriums fürIndustrie im Städtebau und Auszeichnung als vorbildlicheLeistung für Kunst und Architektur 1972“.",
      en: "The Altona parcel post office was built in the 1970s on the site of the former Kaltenkirchen railway station. The artistic perspective of WES & Partner significantly characterised the open space design with its curved topography, meandering bricks and individual, expressive art objects. In 1972, the project was awarded the 'Prize of the Federal Ministry of Construction for Industry in Urban Development and Honourable Mention for Exemplary Achievement in Art and Architecture 1972",
    },
    architect: "WES & Partner (heute WES LandschaftsArchitektur)",
    address:
      "Haupteingang Paketpostamt Altona, Kaltenkirchener Straße 1-3, Hamburg",
    id: 149,
    lat: 53.566224,
    lng: 9.9405901,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Wiederauf- und Umbau der ev.-luth. Apostelkirche (1982)",
      en: "Reconstruction and reconstruction of the Evangelical Lutheran Church. Apostle Church (1982)",
    },
    description: {
      de: "Die Kirche wurde von den Architekten Jürgensen / v. Melle1893 / 94 als erster „Baustein” der Stadterweiterung Eims büttel erbaut. Nach einem Brand 1977 wurde sie 1980 -1982mit Büro, Forum, Gemeinderäumen im Erdgeschoss undKirchraum im Obergeschoss sowie neuem Eingangshof undPortal wiederaufgebaut. Grundlage war das Prinzip des gebundenen Kontrastes zwischen historischer Substanz und neuen Elementen. Die Ausstattung, Orgel, Chorfenster,Taufe, Kanzel und Kreuz waren Teil des Gesamtkonzeptes.",
      en: "The church was built by the architects Jürgensen / v. Melle in 1893 / 94 as the first 'building block' of the town expansion of Eimsbüttel. After a fire in 1977, it was rebuilt between 1980 and 1982 with offices, a forum, community rooms on the ground floor and a church hall on the upper floor, as well as a new entrance courtyard and portal. The basis was the principle of the bound contrast between historical substance and new elements. The furnishings, organ, choir windows, baptismal font, pulpit and cross were part of the overall concept.",
    },
    architect:
      "Prof. Bernhard Hirche (Wettbewerb, Entwurf); Arbeitsgemeinschaft Apostelkirche: Prof. Bernhard Hirche und Architekten Grundmann / Rehder (Ausführung)",
    address: "Bei der Apostelkirche 1, Eingangshof, Hamburg",
    id: 150,
    lat: 53.57558539999999,
    lng: 9.9455575,
  },
  {
    district: "St. Georg",
    title: {
      de: "Drachenbau  St. Georg Wohnungsbaugenossenschaft eG (1987)",
      en: "Drachenbau St. Georg Wohnungsbaugenossenschaft eG (1987)",
    },
    description: {
      de: "Drachenbau ist eines der Pionierprojekte gemeinschaft licher Wohnformen. Als Kleingenossenschaft baute sie eine ehemalige Poststation zu Wohngemeinschafts wohnungen um und errichtete zwei Neubauten im sozialen Wohnungsbau für junge und alte Haushalte. Es wurden mit neuen Förderbedingungen koppelbare Wohnungenentwickelt und Gemeinschaftsräume integriert. Drachen bau war auch ein erstes Projekt des von den Architekten initiierten alternativen Stadtentwicklungsträgers Stattbau.",
      en: "Drachenbau is one of the pioneering projects for communal forms of housing. As a small cooperative, it converted a former post office into shared flats and erected two new social housing buildings for young and old households. Flats that could be combined with new subsidy conditions were developed and communal areas were integrated. Drachen bau was also the first project of the alternative urban development organisation Stattbau, initiated by the architects.",
    },
    architect: "Planerkollektiv",
    address: "Schmilinskystraße 6 a, Tordurchfahrt, Hamburg",
    id: 151,
    lat: 53.5592905,
    lng: 10.0110978,
  },
  {
    district: "Altona",
    title: { de: "Klopstock Höfe", en: "Klopstock farms" },
    description: {
      de: "Eine Nachverdichtung unter extremen räumlichen Bedin gungen. Das Grundstück befindet sich in einem hoch umbauten schmalen Hinterhof, dessen südliche Seite voneiner viergeschossigen Brandwand abgeschlossen wird. Ist an einem solchen Ort der Bau von 23 neuen Wohnungenmit einem Drittel öffentlich geförderten Wohnungsbauüberhaupt möglich? Dank einer raffinierten Raumorganisa tion ist es gelungen, den besonderen Herausforderungender Bauaufgabe gerecht zu werden.",
      en: "A redensification under extreme spatial conditions. The plot is located in a narrow rear courtyard with high buildings, the southern side of which is closed off by a four-storey firewall. Is it even possible to build 23 new flats with one third publicly subsidised housing in such a location? Thanks to an ingenious spatial organisation, it was possible to meet the special challenges of the construction task.",
    },
    architect:
      "Limbrock Tubbesing Architekten und Stadtplaner (LP 1 bis 5), Lichtenstein Landschaftsarchitekten (Freiraumplanung)",
    address: "Klopstockplatz 9, Hofdurchfahrt, Hamburg",
    id: 152,
    lat: 53.547434,
    lng: 9.9316842,
  },
  {
    district: "Altstadt",
    title: {
      de: "Restaurierung und Aufstockung eines Kontorhauses",
      en: "Restoration and extension of an office building",
    },
    description: {
      de: "Das nach starken Kriegsschäden veränderte Kontorhauswurde 2016 /2017 restauriert und aufgestockt. Insbesonde re im Windfang und Treppenhaus sind z.B. die Jugendstil fliesen und -Jugendstilgeländer detailgetreu ergänzt worden.Die zurückhaltende Aufstockung wurde unter Nutzung der baulichen Gegebenheiten stilistisch und konstruktiveingepasst und erhielt eine Dachterrasse. Das Ladenlokal(Barbier) ist in derselben Art gestaltet.",
      en: "The Kontorhaus, which was altered following severe war damage, was restored and extended in 2016/2017. The Art Nouveau tiles and Art Nouveau railings in the porch and staircase in particular have been added in great detail, and the restrained extension has been stylistically and structurally adapted using the structural conditions and given a roof terrace. The shop (barber's) is designed in the same style.",
    },
    architect: "Alk Friedrichsen  -  Architekten und Denkmalpfleger",
    address: "vor dem Gebäude Hopfensack 6, Hamburg",
    id: 153,
    lat: 53.5483313,
    lng: 10.0001029,
  },
  {
    district: "Altstadt",
    title: {
      de: "Sanierung und Instandsetzung des Mahnmals St. Nikolai",
      en: "Renovation and repair of the St. Nikolai memorial",
    },
    description: {
      de: "Die Überreste der im 2. Weltkrieg zerstörten St. Nikolai-Kirchewurden in den Jahren 2014 bis 2018 umfangreich saniert.Hauptaufgabe war die Sicherung der Bausubstanz des 147 m hohen Turmes, der die Kirche bei Fertigstellung 1874zum höchsten Gebäude der Welt machte. Bei teils schwie rigen Witterungsverhältnissen wurden das Fugennetz sowiedas Ziegel- und Sandsteinmauerwerk instandgesetzt.",
      en: "The remains of St. Nikolai Church, which was destroyed in World War II, were extensively renovated between 2014 and 2018, with the main task being to secure the structure of the 147-metre-high tower, which made the church the tallest building in the world when it was completed in 1874. The joint network and the brick and sandstone masonry were repaired in sometimes difficult weather conditions.",
    },
    architect:
      "Arbeitsgemeinschaft Historisches Bauen am Mahnmal St. Nikolai: Architekturbüro Bernhard Brüggemann und ArchitekturbüroAlk Arwed Friedrichsen GmbH",
    address: "Willy-Brandt-Straße 60, Westportal des Turmes, Hamburg",
    id: 154,
    lat: 53.5474814,
    lng: 9.9906472,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "Phoenixhof Areal mit Landmark 7",
      en: "Phoenixhof area with Landmark 7",
    },
    description: {
      de: "Der Phoenixhof ist der ehemalige Sitz der „Ottensener Eisenwerke“. Seit den 1990er Jahren wird das Quartier unter Erhalt der historischen Bauten saniert und entwickelt.Neben Büros für kreative Unternehmen finden sich Show rooms, Fernseh- und Kochstudios sowie ein Restaurant undein Café. Als „Quartierskrone“ und visueller Angelpunkt im Herzen des Areals stärkt das neue „Landmark“-Gebäudeden urbanen Charakter des Viertels.",
      en: "The Phoenixhof is the former headquarters of the 'Ottensener Eisenwerke'. Since the 1990s, the neighbourhood has been renovated and developed while preserving the historic buildings, and in addition to offices for creative companies, there are showrooms, TV and cooking studios, a restaurant and a café. The new 'landmark' building strengthens the urban character of the neighbourhood as the 'district crown' and visual focal point at the heart of the area.",
    },
    architect:
      "hmarchitekten (Planung), Törber, Architektur und Controlling (Bauleitung)",
    address:
      "Parkplatz Phoenixhof, vor dem Restaurant Atlas, über Schützenstraße 21 oder Ruhrstraße 11, Hamburg",
    id: 155,
    lat: 53.5612436,
    lng: 9.9281245,
  },
  {
    district: "Bergstedt",
    title: {
      de: "Wohnhaus und Architekturbüroim Naturschutzgebiet Hainesch-Iland",
      en: "Residential house and architectural office in the Hainesch-Iland nature reserve",
    },
    description: {
      de: "Das Wohnhaus mit Scheune wurde als Landsitz eines Hamburger Industriellen 1906 im Waldgebiet von Hainesch Iland errichtet. In den vergangenen Jahrzehnten mehr fach um- und angebaut, wurde das Ensemble aktuell noch mals umgestaltet: Die Kubatur des Wohnhauses wurde bereinigt, das innere Raumgefüge entkernt und modernisiert.Die Scheune ist heute Architekturbüro, die Pferdeboxen Besprechungsraum, der sich unter Einbeziehung des ehemaligen Heubodens als großzügiger, offener Raum präsentiert.",
      en: "The house and barn were built in 1906 as the country residence of a Hamburg industrialist in the wooded area of Hainesch Iland. Having been remodelled and extended several times over the past decades, the ensemble has now been remodelled once again: The cubature of the house has been cleaned up, the internal spatial structure has been gutted and modernised, and the barn is now an architect's office, while the horse stalls are a meeting room that presents itself as a spacious, open room by incorporating the former hayloft.",
    },
    architect: "Laura Jahnke Architekten",
    address: "Iland 33, am Wasserbecken vor dem Wohnhaus, Hamburg",
    id: 156,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Billstedt",
    title: {
      de: "Neubau Grundschule Rahewinkel",
      en: "New Rahewinkel primary school building",
    },
    description: {
      de: "Der kreuzartig angelegte Neubau besteht aus vier Gebäude flügeln, die um ein Forum mit Glasdach gruppiert sind.Jeder Flügel erhielt im Innenraum eine individuelle Farbge bung, so dass Schülern die Orientierung erleichtert wird.Die äußere Erscheinung der Grundschule wurde aus demGenius Loci des parkähnlichen Umfeldes entwickelt und ist geprägt durch Lärchenvollholzstäbe auf einer Holzfassa denkonstruktion. Im Innenraum ist das Gestaltungskon zept fortgeschrieben, mit der Intention spielerisch die Sinneder Kinder anzuregen.",
      en: "The new cross-shaped building consists of four wings, which are grouped around a forum with a glass roof.each wing has been given an individual colour scheme in the interior, making it easier for pupils to find their way around.the exterior appearance of the primary school was developed from theGenius Loci of the park-like surroundings and is characterised by solid larch beams on a wooden façade construction. The design concept is continued in the interior, with the intention of playfully stimulating the children's senses.",
    },
    architect:
      "pbr Planungsbüro Rohling AG, Große + Baldauf Landschaftsarchitekten",
    address: "Rahewinkel 9, im Eingangsbereich auf dem Schulhof, Hamburg",
    id: 157,
    lat: 53.5268414,
    lng: 10.1555275,
  },
  {
    district: "Borgfelde",
    title: {
      de: "Neubau eines Berufsschulzentrums für zwei Schulen",
      en: "New construction of a vocational school center for two schools",
    },
    description: {
      de: "Im Zuge der Neustrukturierung der hamburgischen Berufs schulen wurden 13 Schulen auf acht Standorte konzentriert.Am Standort Anckelmannstraße 10 entstand ein Zentrumfür kaufmännische Berufe. Die BS 01 und BS 02 sind organi satorisch getrennt, kooperieren aber eng miteinander. Diebeiden Schulen sind jeweils in einem eigenen Gebäude veror tet, gleichwohl gibt es gemeinsame Nutzungen wie Pausen mehrzweckhalle, Cafeteria, Mediothek und Sporthalle. Dasdritte Gebäude wird von beiden Schulen gemeinsam genutzt.",
      en: "As part of the restructuring of Hamburg's vocational schools, 13 schools were concentrated at eight locations and a centre for commercial professions was established at Anckelmannstraße 10. BS 01 and BS 02 are organisationally separate, but cooperate closely with each other. The two schools are each located in their own building, although there are shared facilities such as a multi-purpose hall, cafeteria, media centre and sports hall. The third building is used jointly by both schools.",
    },
    architect:
      "Lorenzen Mayer Architekten GmbH (Wettbewerbssieger 2010), APB. Architekten BDA (LP 2 bis 5)",
    address: "Anckelmannstraße 10, am „Weltenbaum“ auf der Piazza , Hamburg",
    id: 158,
    lat: 53.5533148,
    lng: 10.0325626,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Katholische KITA St. Bonifatius und Wohnungsbau",
      en: "Catholic KITA St. Bonifatius and housing construction",
    },
    description: {
      de: "Der Neubau komplettiert das backsteinerne Ensemble St. Bonifatius mit Kirche, Grundschule, Pfarrhaus inmittendes „weißen“ Gründerzeitviertels. Der Entwurf ist geprägtdurch die Nähe zum Kirchturm, die funktionale Gliederungund ganz wesentlich die Materialität „Roter Ziegel“. Das Gebäude schließt platzsparend mittels einer Baufuge an die Gründerzeitbebauung an. Darin integriert ist eineSchachteltreppe zur Erschließung der vier Wohnungen und der viergeschossigen KITA.",
      en: "The new building completes the brick ensemble of St Bonifatius with the church, primary school and vicarage in the middle of the 'white' Wilhelminian style neighbourhood. The design is characterised by its proximity to the church tower, the functional structure and, most importantly, the 'red brick' material. The building is connected to the Wilhelminian style neighbourhood by means of a space-saving construction joint. A nested staircase is integrated into this to provide access to the four flats and the four-storey daycare centre",
    },
    architect:
      "BLK2 Böge Lindner K2 Architekten (Planung, LP 1 bis 9),mo Architekten Ingenieure (Objektüberwachung, LP 6 bis 9), Schoppe + Partner (Freiraumplanung)",
    address: "Eingang KITA, Am Weiher 29, Hamburg",
    id: 159,
    lat: 53.5779204,
    lng: 9.957654699999999,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Erweiterung und Sanierung Grundschule Kielortallee",
      en: "Expansion and renovation of Kielortallee primary school",
    },
    description: {
      de: "Das Schulgebäude an der Kielortallee stammt aus der Kaiserzeit und ist für die heutigen Bedürfnisse an einenmodernen Grundschulunterricht umgebaut und saniertworden. Ein Turnhallenbau von 1958 wurde abgerissen unddurch einen Erweiterungsbau mit Pausenhalle, Sporthalleund Unterrichtsräumen ersetzt. Die neue Pausenhalle stellteine Verbindung zwischen Schule und Stadtteil her. DerNeubau fügt sich durch seine Form, seine Gliederung sowiedurch seine Farbe und Materialität in das gründerzeitlicheStraßenbild ein.",
      en: "The school building on Kielortallee dates back to the imperial era and has been remodelled and renovated to meet today's requirements for modern primary school teaching. A gymnasium from 1958 was demolished and replaced by an extension with a break hall, sports hall and classrooms. The new break hall created a link between the school and the neighbourhood. The new building blends into the Wilhelminian street scene with its shape, structure, colour and materials.",
    },
    architect: "ppp architekten + stadtplaner",
    address: "Haupteingang Schulgebäude, Kielortallee 18, Hamburg",
    id: 160,
    lat: 53.5719842,
    lng: 9.974243399999999,
  },
  {
    district: "Eppendorf",
    title: {
      de: "Neubau Oberstufenhaus Gymnasium Eppendorf",
      en: "New construction of the upper level building at the Eppendorf high school",
    },
    description: {
      de: "Das Oberstufenhaus wurde auf insgesamt 12 Klassenräumeerweitert. Der bestehende Klassentrakt wurde um einen L-förmigen zweigeschossigen Baukörper nach Süden ergänzt.Zubau und Bestand bilden einen intimen Innenhof aus, welcher als neuer Nukleus für das Oberstufenzentrum fun giert. In ihrer ebenso zurückhaltenden wie selbstbewusstenGestaltung schließt die Fassade des Neubaus an den Bestand an und fügt sich in den städtebaulichen Kontext ein.",
      en: "The sixth form centre was extended to a total of 12 classrooms. The existing classroom wing was supplemented by an L-shaped two-storey structure to the south, with the extension and existing building forming an intimate inner courtyard that functions as a new nucleus for the sixth form centre. With a design that is both restrained and self-confident, the façade of the new building connects to the existing building and blends into the urban context.",
    },
    architect: "akyol kamps : bbp architekten gmbh bda",
    address: "Hegestraße 70, Haupteingang des Neubaus Oberstufenhaus, Hamburg",
    id: 161,
    lat: 53.5846324,
    lng: 9.9848085,
  },
  {
    district: "Finkenwerder",
    title: {
      de: "Neugestaltung der Straße Steendiek",
      en: "Redesign of Steendiek Street",
    },
    description: {
      de: "Der Verkehrsknotenpunkt im Zentrum Finkenwerders wurdedurch einen Kreisel neu geordnet, der den Verkehr ver langsamt und die Querung für Fußgänger zwischen Wohn gebieten im Westen und der Einkaufsstraße im Osten verbessert. Als Hommage an die Fischereitradition Finken werders sind in die Klinkerpflasterflächen Netze, Fische und Wellen gepflastert worden. Außerdem entstand eine neue Platzfläche unter Ahornen und Felsenbirnen undden alte Deichverlauf zeichnen Silberlinden nach.",
      en: "The traffic junction in the centre of Finkenwerder has been reorganised with a roundabout that slows down traffic and improves pedestrian crossing between residential areas in the west and the shopping street in the east. As a tribute to Finkenwerder's fishing tradition, nets, fish and waves have been paved into the clinker paving. In addition, a new square was created under maples and rock pears and silver lime trees trace the old course of the dyke.",
    },
    architect:
      "YLA ANDO YOO Landschaftsarchitektur, Ingenieurbüro BKP und Wfw nord consult Ingenieurgesellschaft mbH",
    address: "Platzfläche am Finksweg 6, Hamburg",
    id: 162,
    lat: 53.5336521,
    lng: 9.8777929,
  },
  {
    district: "HafenCity",
    title: {
      de: "U- und S-Bahn-Haltestelle Elbbrücken",
      en: "Elbbrücken subway and S-Bahn station",
    },
    description: {
      de: "Die U4 bindet das neue Baakenhafen-Quartier an denöffentlichen Nahverkehr an. Nach dem Entwurf der Archi tekten von Gerkan, Marg und Partner entstehen hier dieU-Bahn-Haltestelle, das Hallendach für die S-Bahn-Stationsowie ein Verbindungsbau als städtebauliches Ensemble direkt an der Elbe. Eine signifikante Stahlkonstruktion aus gebogenen Rahmenträgern prägt die neue U-Bahn-Halte stelle. Die außen liegende, tonnenförmige Dachkonstruktionunterstreicht die optische Präsenz des Tragwerks.",
      en: "The U4 links the new Baakenhafen quarter to the public transport network. According to the design by architects von Gerkan, Marg and Partners, the underground station, the hall roof for the S-Bahn station and a connecting building are being built here as an urban ensemble directly on the Elbe. The new underground station is characterised by a significant steel structure made of curved frame girders. The external, barrel-shaped roof structure emphasises the visual presence of the supporting structure.",
    },
    architect: "gmp · Architekten von Gerkan, Marg und Partner",
    address:
      "Baugelände an der Straßenkreuzung Zweibrückenstraße /  Baakenwerder Straße Hinweis: Besichtigung nur mit festem Schuhwerk, Hamburg",
    id: 163,
    lat: 53.5359995,
    lng: 10.0223231,
  },
  {
    district: "HafenCity",
    title: {
      de: "Wohnvielfalt am Grasbrookpark",
      en: "Variety of housing at Grasbrookpark",
    },
    description: {
      de: "Die „Wohnvielfalt am Grasbrookpark“ befindet sich direktnördlich des neuen Spielparks nahe dem Überseequartier.Mit einer hohen Nutzungsvielfalt auf rund 20.000 Quadrat metern sind ca. 140 Wohnungen entstanden. Ihre Misch ung reicht von Wohnungen einer Baugemeinschaft, geför derten Mietwohnungen bis hin zu Sonderwohnformen wie Ateliers, familienfreundlichen und studentischen Woh nungen. Zusätzlich sorgen im Erdgeschoss eine Kinder tagesstätte, Einzelhandelsflächen und über das Gebäudeverteilte Freiräume für Lebendigkeit.",
      en: "Wohnvielfalt am Grasbrookpark' is located directly to the north of the new play park near Überseequartier. 140 flats have been built on around 20,000 square metres with a wide variety of uses. The mix ranges from flats in a building community and subsidised rental flats to special forms of housing such as studios, family-friendly and student flats. In addition, a children's day care centre, retail space and open spaces distributed throughout the building ensure a lively atmosphere on the ground floor.",
    },
    architect:
      "BKK-3 Architektur ZT GmbH / BKK-3 NJN Planungsgesell schaft mbH (LP 2 bis 4), Mevius Mörker Architekten (LP 1 und 4 bis 9)",
    address:
      "Am Grasbrookpark 1 a-g, Freitreppe zum Spielplatz / Park, Hamburg",
    id: 164,
    lat: 53.5405239,
    lng: 9.9956844,
  },
  {
    district: "Neustadt",
    title: { de: "Finnlandhaus Hamburg", en: "Finland House Hamburg" },
    description: {
      de: "Das 1966 fertig gestellte Hochhaus ist eines der markan testen Gebäude der deutschen Nachkriegsmoderne. Mit seinem freigestellten Treppenhauskern und der filigra nen Vorhangfassade repräsentiert es beispielhaft den Geist des technologischen Aufbruchs der 1960er Jahre.2017 wurde es denkmalgerecht saniert und den aktu ellen Anforderungen an Büronutzungen angepasst. Dabeiwurde die Fassade in alten Dimensionen und Oberflä chen als zweischalige Elementfassade erneuert. Wesent liche Ausbauelemente wurden erhalten.",
      en: "Completed in 1966, the tower block is one of the most striking buildings of German post-war modernism. With its exposed stairwell core and filigree curtain façade, it exemplifies the spirit of the technological upheaval of the 1960s. In 2017, it was refurbished in line with its listed status and adapted to the current requirements for office use. The façade was renewed in the old dimensions and surfaces as a double-skin element façade. Essential finishing elements were retained.",
    },
    architect:
      "HPP - Helmut Hentrich und Hubert Petschnigg (1966), HPP Architekten (Revitalisierung 2017, LP 1 bis 5)",
    address: "Esplanade 41, Vorplatz Neuer Jungfernstieg, Hamburg",
    id: 165,
    lat: 53.5580819,
    lng: 9.992760299999999,
  },
  {
    district: "Neustadt",
    title: {
      de: "Stadthöfe Hamburg - Umbau Palaishaus",
      en: "Stadthöfe Hamburg - conversion of the palace house",
    },
    description: {
      de: "Das Palaishaus bildet den Auftakt zum GebäudeensembleStadthöfe Hamburg. Der Umbau des Hauses von 1889 (Architekt: Carl Johann Christian Zimmermann) umfasst den Erhalt der historischen Fassaden und Treppenhäu ser, die grundlegende Erneuerung der Erschließung undTragstruktur, die Ergänzung des Gebäudes durch eine zweigeschossige Aufstockung sowie die Rekonstruktiondes historischen Turmes mit Kuppel.",
      en: "The Palaishaus forms the prelude to the Stadthöfe Hamburg ensemble of buildings. The remodelling of the building from 1889 (architect: Carl Johann Christian Zimmermann) includes the preservation of the historic façades and staircases, the fundamental renewal of the development and supporting structure, the addition of a two-storey extension to the building and the reconstruction of the historic tower with cupola",
    },
    architect:
      "Kuehn Malvezzi (LP 1 bis 4 und gestalterische Qualitätssicherung LP 5 bis 8), agn Leusmann GmbH (LP 5)",
    address: "Stadthausbrücke / Ecke Neuer Wall, Hamburg",
    id: 166,
    lat: 53.5498083,
    lng: 9.986161899999999,
  },
  {
    district: "Rotherbaum",
    title: {
      de: "Freianlagen Hotel The Fontenay",
      en: "Outdoor facilities Hotel The Fontenay",
    },
    description: {
      de: "In einer zurückhaltende, präzise Konzeption der Außenan lagen entfaltet sich zeitgemäß die einzigartige, eleganteAtmosphäre und Lage dieses Ortes. Stadträumlich werdendie parkähnlichen Strukturen der Umgebung ähnlich ein em großzügigen Landschaftspark (Alsterpark) weitergeführt.Sanft geschwungene Rasenflächen und malerische Baum bestände rahmen den Alsterblick, lineare Heckenkörper undSteinelemente erinnern an historische Parterre-Anlagen. Im Entree-Bereich nimmt ein rundes Wasserobjekt den Kreis gedanken der Gebäudestruktur auf.",
      en: "The unique, elegant atmosphere and location of this place unfolds in a contemporary way in a restrained, precise conception of the outdoor facilities. In terms of urban space, the park-like structures of the surrounding area are continued in the form of a spacious landscape park (Alsterpark), with gently curving lawns and picturesque tree stands framing the view of the Alster, while linear hedges and stone elements are reminiscent of historical parterre facilities. In the entrance area, a round water feature echoes the circular idea of the building structure.",
    },
    architect:
      "WES LandschaftsArchitektur (Freianlagen), Störmer Murphy and Partners GbR (Hochbau)",
    address: "Vorplatz Haupteingang, beim runden Wasserobjekt, Hamburg",
    id: 167,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "St. Pauli - Karolinenviertel",
    title: {
      de: "Neubau von 18 Wohnungen in Holzbauweise",
      en: "New construction of 18 wooden apartments",
    },
    description: {
      de: "Zwischen Gründerzeitgebäuden und sogenannter Terras senbebauung im Hamburger Karolinenviertel werden diesenSommer 18 Wohnungen überwiegend in Holzbauweisefertig gestellt. Abgesehen von den aussteifenden Treppen hauskernen und dem Kellergeschoss aus Stahlbeton sindalle tragenden Wände und Decken in Brettspeerholz ausge führt. Von den 18 Wohnungen werden 16 Wohnungen imgeförderten Wohnungsbau errichtet.",
      en: "Between Wilhelminian-style buildings and so-called terraces in Hamburg's Karolinenviertel, 18 flats will be completed this summer, mainly in timber construction. Apart from the bracing staircase cores and the basement made of reinforced concrete, all load-bearing walls and ceilings are made of glulam. Of the 18 flats, 16 are being built as subsidised housing.",
    },
    architect: "steg Hamburg mbH",
    address: "Vorwerkstraße 15, Hamburg",
    id: 168,
    lat: 53.5596419,
    lng: 9.9709117,
  },
  {
    district: "Uhlenhorst",
    title: {
      de: "upTOWNHOUSES - eine Stadthauszeile",
      en: "upTOWNHOUSES - a row of townhouses",
    },
    description: {
      de: "Auf dem Gelände der ehemaligen Frauenklinik Finkenau isteine Stadthauszeile mit 26 Stadthäusern entstanden, ent worfen von sechs Hochbauarchitekten. Durch die unterschied lichen Parzellenbreiten und Höhenstaffelungen wurde einelebendige Häuserzeile mit individuellen Adressen ausge bildet. Verstärkt wird dies durch das Geländegefälle und dieVor- und Rücksprünge der variierenden Verblendfassaden.",
      en: "On the site of the former Finkenau Women's Clinic, a row of 26 townhouses has been built, designed by six building architects. The different plot widths and staggered heights have created a lively row of houses with individual addresses. This is emphasised by the gradient of the terrain and the projections and recesses of the varying façades.",
    },
    architect:
      "LP 1 bis 3: Spengler Wiescholek Architekten und Stadtpla ner, Kraus Schönberg Architekten, HeitmannMontùfar Architekten,Tchoban Voss Architekten, LA'KET Architekten, be baumschlager eberle;LP 4 bis 5: PLANWERKEINS Architekten; Freiraumplanung: Schoppe + partner freiraumplanung",
    address: "vor dem Haus Dorothea-Bernstein-Weg 26, Hamburg",
    id: 169,
    lat: 53.5703525,
    lng: 10.0338802,
  },
  {
    district: "Altstadt",
    title: {
      de: "Wohn- und Geschäftshaus Katharinenhof (1993)",
      en: "Katharinenhof residential and commercial building (1993)",
    },
    description: {
      de: "Das Haus liegt an der Ecke Neue Grönigerstraße / Zippelhausgegenüber der Katharinenkirche. Es wurde um 1890 alsKontorhaus im Stil der Neorenaissance erbaut. Im ZweitenWeltkrieg wurde es durch einen Bombeneinschlag so beschädigt, dass nur noch drei Geschosse erhalten waren.In enger Abstimmung mit dem Denkmalschutzamt wur den die fehlenden Gebäudeteile kontrastierend zum Bestandin zeitgemäß stringenter Form ergänzt. Im Erdgeschoss befinden sich Läden, im 1. bis 5. Obergeschoss Büros undim 6. Obergeschoss ist eine Wohnung.",
      en: "The house is located on the corner of Neue Grönigerstraße / Zippelhaus opposite St Catherine's Church. It was built around 1890 as a Kontorhaus in the neo-Renaissance style. During the Second World War, it was so damaged by bombing that only three storeys were preserved, and the missing parts of the building were added in a contemporary, stringent form in close consultation with the heritage conservation office. There are shops on the ground floor, offices on the 1st to 5th floors and a flat on the 6th floor.",
    },
    architect:
      "Architekten Gössler + Schnittger (heute Gössler Kinz Kerber Kreienbaum Architekten), Dr. H. Dietrich (Fassade Altbau)",
    address: "vor dem Eingang Zippelhaus 2, Hamburg",
    id: 170,
    lat: 53.5923465,
    lng: 9.960742399999999,
  },
  {
    district: "Altstadt",
    title: {
      de: "Neubau und Restaurierung Altbau in der Deichstraße (1981 / 1982)",
      en: "New construction and restoration of the old building on Deichstrasse (1981 / 1982)",
    },
    description: {
      de: "Deichstraße 37: Restaurierung eines Außendeichshausesmit zweigeschossiger Diele. In die ehemaligen Speicher böden wurden Wohnungen geplant. Deichstraße 35: Im Neubau sind Elemente der historischen Außendeichs häuser aufgenommen und verfremdet: in der Dreiteilungder Fassade, im ins 1. Obergeschoss übergreifenden Portal und im Schmuck des Giebels. Auszeichnungen:„Deutscher Städtebaupreis 1985“ und „Silberne Halbkugel der Deutschen Stiftung Denkmalschutz“.",
      en: "Deichstraße 37: Restoration of an outer dyke house with a two-storey hallway. Flats were planned for the former attic floors. Deichstraße 35: In the new building, elements of the historic outer dyke houses are incorporated and alienated: in the tripartite façade, in the portal extending to the first floor and in the decoration of the gable. Awards: 'German Urban Planning Prize 1985' and 'Silver Hemisphere of the German Foundation for Monument Protection'.",
    },
    architect:
      "Planungsgruppe Nord D. J. Glienke und Gerhard Hirschfeld und Schiefler & Denker",
    address: "vor dem Haus Deichstraße 37, Hamburg",
    id: 171,
    lat: 53.5456794,
    lng: 9.9871388,
  },
  {
    district: "Harvestehude",
    title: {
      de: "Verlagsgebäude Hoffmann und Campe(1991 und 2001)",
      en: "Hoffmann and Campe publishing house (1991 and 2001)",
    },
    description: {
      de: "Die Verlagsgebäude von Hoffmann und Campe reihen sichin die Villenbebauung am Harvestehuder Weg ein. Die vorhandenen fünf Altbauten wurden durch zwei freistehen de villenartige Neubauten ergänzt. Alle Gebäude stehen in einer gemeinsamen Parklandschaft. Das neue Verlagshausfügt sich in die sanft zur Alster hin fallende Topographie. Die weit auskragenden Dächer und die Baufiguren unterstrei chen das großzügige Landschaftsbild. Zu den Altbauten gehören zwei Villen von Martin Haller und Emil Fahrenkamp.",
      en: "The Hoffmann and Campe publishing buildings are part of the villa development on Harvestehuder Weg. The existing five old buildings were supplemented by two new detached villa-like buildings. All the buildings stand in a shared park landscape. The new publishing house blends into the gently sloping topography towards the Alster. The wide overhanging roofs and the building figures emphasise the generous landscape. The old buildings include two villas by Martin Haller and Emil Fahrenkamp.",
    },
    architect:
      "Jourdan & Müller Architekten und Gustav Lange, Landschaftsarchitekt",
    address: "Harvestehuder Weg 41, am Aufgang zum Haupteingang, Hamburg",
    id: 172,
    lat: 53.5775466,
    lng: 9.998643699999999,
  },
  {
    district: "Altona",
    title: {
      de: "Neue Mitte Altona, Kopfgebäude Südblock, Harkortstraße",
      en: "Neue Mitte Altona, head building south block, Harkortstrasse",
    },
    description: {
      de: "Der Neubau an der Harkortstraße versteht sich als südli cher Kopf des neuen Stadtteils Mitte Altona. Die Südfassade des Gebäudes bildet dabei die Rückwand, der sieben geschossige, höhere Gebäudeteil betont den südöstlichenAbschluss des Quartiers, der niedrigere und gestaffeltewestliche Teil leitet in das neue Quartier. Die gesamte Erd geschosszone wird gastronomisch genutzt. Die darüberliegenden Wohnungen mit Balkonen oder Loggien orientie ren sich nach Süden. Als Material wurde ein sandfarbenerBackstein ausgewählt.",
      en: "The new building on Harkortstrasse sees itself as the southern head of the new Mitte Altona district. The south façade of the building forms the rear wall, the seven-storey, higher part of the building emphasises the south-eastern end of the quarter, while the lower and staggered western part leads into the new quarter. The entire ground floor zone is used for catering. The flats above with balconies or loggias are orientated towards the south. A sand-coloured brick was chosen as the material.",
    },
    architect: "KPW Papay Warncke und Partner Architekten mbB",
    address: "Platz der Arbeiterinnen, Hamburg",
    id: 173,
    lat: 53.558467,
    lng: 9.9378874,
  },
  {
    district: "Altona",
    title: {
      de: "Sechs Freunde (Kranbauten), Neue Mitte Altona",
      en: "Six friends (crane buildings), Neue Mitte Altona",
    },
    description: {
      de: "Die Masterplanstudie 2011 bestimmt die städtebaulicheKubatur der Kranbauten. Die historische Hallenstruktur wirddurch die sechs Baukörper der Kranbauten ergänzt. Dieselagern sich von Osten her an die bestehenden zwei Hallen schiffe an. Dabei geben die beiden äußeren Baukörper einenklaren Rahmen vor. Sie stehen im Norden und im Südenan das zweite Hallenschiff angrenzend vollflächig auf demBoden. Die inneren vier Gebäudekörper hingegen docken andie Halle an und kragen viergeschossig über ihnen aus.",
      en: "The 2011 masterplan study determines the urban cubature of the crane buildings. The historic hall structure is complemented by the six structures of the crane buildings. The new buildings are connected to the existing two halls from the east. The two outer structures provide a clear framework. To the north and south, they are fully flush with the ground adjacent to the second hall aisle. The inner four building volumes, on the other hand, dock onto the hall and cantilever four storeys above it.",
    },
    architect:
      "André Poitiers Architekt Stadtplaner RIBA (Städtebaulicher Entwurf und hochbauliche Ausarbeitung LP 1-5), arbos Freiraumplanung GmbH (Städtebaulicher Entwurf)",
    address: "Platz der Arbeiterinnen, Hamburg",
    id: 174,
    lat: 53.558467,
    lng: 9.9378874,
  },
  {
    district: "Altstadt",
    title: {
      de: "Revitalisierung der ehemaligen Spiegel-Insel,Hamburg Heights",
      en: "Revitalization of the former Spiegel Island, Hamburg Heights",
    },
    description: {
      de: "Die beiden Hochhäuser wurden durch Werner Kallmorgenzwischen 1965",
      en: "The two tower blocks were built by Werner Kallmorgen between 1965",
    },
    architect:
      "Winking - Froh Architekten GmbH Height 1: LP 1-5; Height 2,3,4 und 5: LP 1-4, teilweise 5 / Leitdetails)",
    address: "Eingang Brandstwiete 3, Hamburg",
    id: 175,
    lat: 53.5469423,
    lng: 9.9977865,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "Zentrum für strukturelle Systembiologie CSSB",
      en: "Center for Structural Systems Biology CSSB",
    },
    description: {
      de: "Beim interdisziplinären Zentrum für strukturelle System biologie CSSB kam es hammeskrause architekten daraufan, dem inhaltlichen und organisatorischen Begriff desZentrums auch einen adäquaten architektonischen Raumzu geben: Über alle vier Geschosse erlebbare Galerien und Treppenläufe kulminieren in einer gebäudehohen, licht durchfluteten Foyerhalle und sind der zentrale Treffpunktder Forscher. Dieser attraktive Raum im Herzen des Gebäu des regt durch seine angenehme und helle Atmosphäre zuinformellen Gesprächen und Wissensaustausch an.",
      en: "For the interdisciplinary Centre for Structural Systems Biology CSSB, hammeskrause architekten were keen to give the content and organisational concept of the centre an appropriate architectural space: Galleries and staircases that can be experienced across all four storeys culminate in a building-high, light-flooded foyer hall and are the central meeting point for the researchers. With its pleasant and bright atmosphere, this attractive space at the heart of the building encourages informal discussions and the exchange of knowledge.",
    },
    architect: "hammeskrause architekten",
    address:
      "Empfangstresen beim Haupteingang CSSB, Gebäude 15, Notkestraße 85, Hamburg",
    id: 176,
    lat: 53.573014,
    lng: 9.8808017,
  },
  {
    district: "Dulsberg",
    title: {
      de: "Umbau und Sanierung der Frohbotschaftskirche Hamburg-Dulsberg",
      en: "Reconstruction and renovation of the Good News Church in Hamburg-Dulsberg",
    },
    description: {
      de: "Die Kirche war für ihre Besucheranzahl viel zu groß undaußerdem stark sanierungsbedürftig geworden. Nach dem„Haus-im-Haus“-Prinzip konnten die drei Funktionen derKirche - Sakralraum, Kita und Gemeinderaum - unter einemDach vereint und die Kirche so vor dem Abriss bewahrtwerden. Dazu wurden zwei Kuben in die entkernte Kircheeingebaut, während das Denkmal außen fast unverändertblieb. Die Öffnung zum Stadtteil und die Einbindung desStraßburger Platzes wurden durch den neuen Zugang vomPlatz aus erreicht.",
      en: "The church was far too large for the number of visitors and was also in serious need of renovation. Following the 'house-in-house' principle, the three functions of the church - sacred space, daycare centre and community room - were united under one roof, thus saving the church from demolition. To this end, two cubes were built into the gutted church, while the exterior of the monument remained almost unchanged. The opening to the neighbourhood and the integration of Strasbourg Square were achieved through the new entrance from the square.",
    },
    architect: "WRS Architekten & Stadtplaner GmbH",
    address: "Haupteingang der Kirche am Straßburger Platz, Hamburg",
    id: 177,
    lat: 53.5815182,
    lng: 10.0614514,
  },
  {
    district: "HafenCity",
    title: {
      de: "Dock 71 HafenCity Hamburg",
      en: "Dock 71 HafenCity Hamburg",
    },
    description: {
      de: "Bei diesem Neubau eines Wohngebäudes mit 65 Wohnungenfür eine Baugruppe waren mehrere Herausforderungengleichzeitig zu meistern: den unterschiedlichen Bedürfnis sen der Bewohnerinnen und Bewohner gerecht zu werden,die Integration einer Kita und Gewerbe im Erdgeschoss, die Belichtung des Innenhofes sowie die Berücksichtigungunterschiedlicher Lärmschutzmaßnahmen. Für Letzteressorgt u.a. ein differenziertes, vertikales Fassadenspiel, dasgleichzeitig dem Wunsch nach identitätsstiftenden Bau teilen nachkommt.Architekten: DFZ ArchitektenFührungen: Johann ZurlTermine: Samstag, 29. Juni, 14.10 Uhr, 15.10 Uhr, 16.10 UhrTreffpunkt: Ecke Yokohamastraße / Am Lohsepark",
      en: "In this new residential building with 65 flats for a group of buildings, several challenges had to be mastered at the same time: meeting the different needs of the residents, integrating a daycare centre and commercial space on the ground floor, lighting the inner courtyard and taking into account different noise protection measures. For the latter, a differentiated, vertical façade interplay, which at the same time fulfils the desire for identity-creating parts of the building, is one of the requirements: DFZ ArchitektenGuided tours: Johann ZurlDates: Saturday, 29 June, 2.10 pm, 3.10 pm, 4.10 pmMeeting point: Corner of Yokohamastraße / Am Lohsepark",
    },
    architect: "DFZ Architekten",
    address: "Ecke Yokohamastraße / Am Lohsepark, Hamburg",
    id: 178,
    lat: 53.5421839,
    lng: 10.0039949,
  },
  {
    district: "Harburg",
    title: {
      de: "309 Sozialwohnungen an der Denickestraße",
      en: "309 social housing on Denickestrasse",
    },
    description: {
      de: "Der Entwurf betont die städtebaulich geschwungene Stadt kante der Denickestraße durch eine Rhythmisierung vonTopografie und Baukörper. Der leichte Versatz zwischen denbaugleichen Gebäudetypen gliedert die städtebauliche Kante in regelmäßige Abschnitte und sorgt für eine zusätz liche Süd-West-Orientierung der Loggien. Durch Ausbil dung von Staffelgeschossen sind die Versprünge zusätzlichbetont. Das Durchwohnprinzip bestimmt die Grundrisse.",
      en: "The design emphasises the curved urban edge of Denickestraße by rhythmising the topography and building structure. The slight offset between the identical building types divides the urban edge into regular sections and provides an additional south-west orientation for the loggias. The offset is further emphasised by the formation of stepped storeys. The through-living principle determines the floor plans.",
    },
    architect:
      "Renner Hainke Wirth Zirn Architekten (Wettbewerb 1. Preis,LP 1-4 und künstlerische Oberleitung Häuser B, C, D und E), AIT Architektur-und Ingenieurbüro Holger Trumpf (LP 1-4 und künst lerische Oberleitung Häuser A und C; funktionale Ausschreibung, Leitdetails und Qualitätsüberwachung des GU)",
    address: "MAG-Kiosk Denickestraße 74, Ecke Thörlstraße, Hamburg",
    id: 179,
    lat: 53.4614002,
    lng: 9.9612465,
  },
  {
    district: "Lokstedt",
    title: {
      de: "Bürogebäude im Rütersbarg",
      en: "Office building in Rütersbarg",
    },
    description: {
      de: "Der im Norden Hamburgs gelegene, dreigeschossige Büro bau füllt eine außergewöhnlich schlanke Baulücke in einemaus nur wenigen Gebäuden bestehenden Gewerbegebiet.Der Baukörper fügt sich auf unaufgeregte und respektvolleWeise in seine Nachbarschaft ein und versucht die vor gefundene Situation logisch zu ergänzen. Die verwendetenMaterialien, Farben, Formen und Gestaltungselemente sind sorgfältig auf die Umgebung abgestimmt. Im Innerendes Gebäudes können bis zu sechs autarke Nutzungsein heiten untergebracht werden.",
      en: "The three-storey office building located in the north of Hamburg fills an unusually slim gap in a commercial area consisting of only a few buildings. The structure blends into its neighbourhood in an unagitated and respectful manner and attempts to logically complement the existing situation. The materials, colours, shapes and design elements used are carefully coordinated with the surroundings. Up to six self-sufficient utilisation units can be accommodated inside the building.",
    },
    architect: "Andreas Pflügelbauer",
    address: "Rütersbarg 52, vor dem Gebäude, Hamburg",
    id: 180,
    lat: 53.60532079999999,
    lng: 9.955872099999999,
  },
  {
    district: "Neugraben-Fischbek",
    title: {
      de: "Auftakt IBA-Quartier Fischbeker Heidbrook",
      en: "Opening of the IBA district Fischbeker Heidbrook",
    },
    description: {
      de: "Das Gebäude bildet das markante Quartiersentrée und den Auftakt für die angrenzende südliche WohnbebauungFischbeker Heidbrook und schützt diese gleichzeitig vordem Lärm der flankierenden Bundesstraße. Die Mischnut zung (Gewerbe im Erdgeschoss, Wohnen darüber) ermög licht eine hohe Bebauungsdichte. Als Ausgleich wurde einDachgarten geschaffen, der neben privaten Gärten auchGemeinschafts- und Kinderspielflächen bietet und die nörd lichen mit den südlichen, öffentlich geförderten Wohnun gen verbindet.",
      en: "The building forms the striking neighbourhood centre and the prelude to the neighbouring southern residential development of Fischbeker Heidbrook and at the same time protects it from the noise of the flanking main road. The mixed use (commercial on the ground floor, residential above) allows for a high building density. To compensate for this, a roof garden was created, which offers private gardens as well as communal and children's play areas and connects the northern apartments with the southern, publicly subsidised apartments.",
    },
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
    address: "vor der Haspa-Station, Im Fischbeker Heidbrook 2 a-d, Hamburg",
    id: 181,
    lat: 53.4665938,
    lng: 9.8086595,
  },
  {
    district: "Neustadt",
    title: {
      de: "Tortue - Hotel in den Stadthöfen",
      en: "Tortue - Hotel in the Stadthöfen",
    },
    description: {
      de: "2008 startete das Re-Development Projekt der StadthöfeHamburg mit der Auslobung eines Investorenwettbewerbes.Stephen Williams Associates entwickelte zusammen mitdem Immobilienentwickler Quantum einen komplexen Mas terplan und gewann den Wettbewerb mit der Idee, einStück Stadtquartier mit einem Mix aus Retail- und Office flächen, Wohnungen, einem individuellen Boutique Hotelwiederzubeleben. Stephen Williams Associates konntenaußerdem das Boutique Hotel Tortue entwickeln.",
      en: "The StadthöfeHamburg redevelopment project began in 2008 with the launch of an investor competition. Stephen Williams Associates developed a complex master plan together with property developer Quantum and won the competition with the idea of revitalising a part of the city quarter with a mix of retail and office space, flats and an individual boutique hotel. Stephen Williams Associates were also able to develop the boutique hotel Tortue.",
    },
    architect:
      "Stephen Williams Associates GmbH (LP 1-4 Hochbau; Innenarchitektur Lobby, Brasserie, Bars); agnLeusmann GmbH (LP 5 Hochbau)",
    address: "Eingang Hotel Tortue, Stadthausbrücke 10, Hamburg",
    id: 182,
    lat: 53.55152289999999,
    lng: 9.986072199999999,
  },
  {
    district: "Ohlsdorf",
    title: {
      de: "Kapelle 2 auf dem Hauptfriedhof OhlsdorfDenkmalgerechte Sanierung und Restaurierung",
      en: "Chapel 2 in the Ohlsdorf main cemetery, monument-appropriate renovation and restoration",
    },
    description: {
      de: "Die Kapelle aus dem Jahr 1886 im Stil der Neugotik wur de umfassend denkmalgerecht saniert und restauriert.Größtenteils konnte der ursprüngliche Zustand aufwendigwieder hergestellt werden, dabei wurde u.a. auch Wand malerei freigelegt. Innen wurde ein Farb- und Gestaltungs konzept entwickelt, das die ursprüngliche Entwurfshal tung und Originalanmutung aufgreift und sie respektvollreduziert an heutige Bedürfnisse anpasst. Speziell fürden Raum entworfene Möbel und ein sorgsam abgestimm tes Lichtkonzept runden das Projekt ab.",
      en: "The chapel from 1886 in the neo-Gothic style has been extensively renovated and restored in line with its listed status, and the original condition has been extensively restored, including the uncovering of wall paintings. Inside, a colour and design concept was developed that picks up on the original design and appearance and respectfully adapts it to today's needs. Furniture specially designed for the room and a carefully coordinated lighting concept round off the project.",
    },
    architect: "Dohse Architekten",
    address: "vor der Kapelle 2, Nebenallee, Hauptfriedhof Ohlsdorf, Hamburg",
    id: 183,
    lat: 53.623333,
    lng: 10.045051,
  },
  {
    district: "Rothenburgsort",
    title: {
      de: "Neubau des Opernfundus der Hamburger Staatsoper",
      en: "New construction of the opera fund of the Hamburg State Opera",
    },
    description: {
      de: "Die bisher auf drei Standorte verteilten Fundi und Werk stätten der Hamburger Staatsoper wurden auf dem Geländedes ehemaligen Huckepackbahnhofes zusammengeführt.Die unterschiedlichen Nutzungsbereiche - Dekorations werkstätten, Kulissen-, Kostüm- und Maskenfundus - habeneine eigene bauliche Identität erhalten, die sich gleichzei tig als eine städtebaulich homogene Einheit mit gemeinsamerAdresse zeigt. Die gekantete Metallfassade stellt als ab strakte Interpretation eines Bühnenvorhanges Bezüge zurStaatsoper her.",
      en: "The foundations and workshops of the Hamburg State Opera, which were previously spread across three locations, have been brought together on the site of the former piggyback station, and the different areas of use - decoration workshops, scenery, costume and make-up workshops - have been given their own structural identity, which at the same time presents itself as a homogeneous urban unit with a common address. The canted metal façade is an abstract interpretation of a stage curtain and references the state opera.",
    },
    architect: "DFZ Architekten",
    address: "Haupteingang Opernfundus, Cornelia-Harte-Straße, Hamburg",
    id: 184,
    lat: 53.5392266,
    lng: 10.0375041,
  },
  {
    district: "St. Pauli",
    title: {
      de: "Umbau und Sanierung eines denkmal geschützten Schulgebäudes zu 20 Wohnungen für eine Baugemeinschaft",
      en: "Conversion and renovation of a listed school building into 20 apartments for a building community",
    },
    description: {
      de: "1928 nach Plänen Gustav Oelsners erbaut steht die Pesta lozzischule heute unter Denkmalschutz. Nach Aufgabe des Schulbetriebes wurde Sie, unter Erhalt der historischenSporthalle, zu 20 Wohnungen für eine Baugemeinschaftsowie zwei Gewerbeeinheiten umgeplant. Im Vordergrundstand dabei die Frage, in welcher Weise das Gebäude nicht nur in seiner äußeren Erscheinung, sondern auch inseiner inneren Struktur und Ausstattung so weit wie möglicherhalten und trotzdem weiterentwickelt werden kann.",
      en: "Built in 1928 according to plans by Gustav Oelsner, the Pesta lozzi school is now a listed building. After the school was closed, it was converted into 20 flats for a joint building venture and two commercial units while retaining the historic sports hall. The focus was on the question of how the building could be preserved as far as possible, not only in terms of its external appearance, but also in terms of its internal structure and furnishings, and yet still be developed further.",
    },
    architect: "HP Architekten mbB",
    address: "vor dem Haupteingang, Kleine Freiheit 68, Hamburg",
    id: 185,
    lat: 53.55252789999999,
    lng: 9.9572621,
  },
  {
    district: "Wandsbek",
    title: {
      de: "Zubau einer zweizügigen Bezirksgrundschule der Albert-Schweitzer-Schule",
      en: "Construction of a two-class district primary school for the Albert Schweitzer School",
    },
    description: {
      de: "Die Albert-Schweitzer-Gesamtschule wurde um einen Neubau ergänzt. Mit Ost-West-Erschließung wurde ein dreigeschossiges Klassenhaus mit zehn Klassenräu men, drei fachgebundenen Lehrräumen und Differen zierungszonen entwickelt. In der Kubatur, der Materialitätund der Farbigkeit wird Bezug auf die Bestandsbauten u.a. aus den 1950er und 1970er Jahren genommen. Loch fassaden sowie asymmetrische Dachschrägen geben dem Gebäude ein zeitgemäßes Gepräge.",
      en: "A new building was added to the Albert Schweitzer Comprehensive School. A three-storey classroom block with ten classrooms, three subject-specific classrooms and differentiation zones was developed with east-west access. The cubature, materiality and colour scheme refer to the existing buildings from the 1950s and 1970s, among others. Perforated façades and asymmetrical pitched roofs give the building a contemporary character.",
    },
    architect: "HS-Architekten PartGmbB Schmidt Limmroth Funck Klapsing",
    address: "Albert-Schweitzer-Schule, Schluchtweg 1, Hamburg",
    id: 186,
    lat: 53.6324392,
    lng: 10.0475122,
  },
  {
    district: "Hammerbrook",
    title: {
      de: "City-S-Bahnhof Hammerbrook (1983)",
      en: "Hammerbrook city S-Bahn station (1983)",
    },
    description: {
      de: "Der Bahnhof war als zentrale Haltestelle der S-Bahn am1970 geplanten, jedoch unrealisierten Hanse-Centrum (HC)vorgesehen. Er ist das Ergebnis eines unter Baufirmen mitArchitektenbindung durchgeführten Wettbewerbs der Stadtund der Deutschen Bahn für die Gesamtgestaltung derBauwerke der City-S-Bahn. Seine besondere Bauform undFarbigkeit sollte mit der futuristischen Großform des Hanse Centrums korrespondieren.",
      en: "The station was intended as the central stop of the S-Bahn at the Hanse-Centrum (HC), which was planned in 1970 but never realised. It is the result of a competition organised by the city and Deutsche Bahn among construction companies with architectural ties for the overall design of the City S-Bahn buildings. Its special design and colourfulness were intended to correspond with the futuristic large-scale form of the Hanse Centre.",
    },
    architect: "Schramm, Pempelfort, v. Bassewitz, Hupertz (SPBH)",
    address:
      "Kreuzung Mittelkanalstraße /Hammerbrookstraße,„Zweite Hammerbrookbrücke“Treffpunkt bei Regen: Eingangshalle Nord, S-Bahnhof, Hamburg",
    id: 187,
    lat: 53.5482652,
    lng: 10.0225813,
  },
  {
    district: "Poppenbüttel",
    title: {
      de: "Wohnquartier Hamburg Tegelsbarg (1975 -1980, Wettbewerb 1967)",
      en: "Hamburg Tegelsbarg residential area (1975 - 1980, competition 1967)",
    },
    description: {
      de: "Tegelsbarg ist mit ca. 2200 Wohnungen die letzte undgleichzeitig auch die kleinste, der in den 1970er Jahren inHamburg erbauten Großwohnsiedlungen. Neu an Tegels barg war seine klare vom Freiraum aus gedachte sozial räumliche städtebauliche Gliederung und die Einbindung in einen vorhandenen Stadtteil. Die Realisierung wurdedurch einen Gestaltungskatalog begleitet. Mit der Stape lung von Reihenhäusern entstanden hier einige beson ders innovative Wohnhaustypologien.",
      en: "With around 2,200 flats, Tegelsbarg is the last and also the smallest of the large housing estates built in Hamburg in the 1970s. What was new about Tegelsbarg was its clear social-spatial urban structure conceived from the open space and its integration into an existing neighbourhood. The realisation was accompanied by a design catalogue. With the stacking of terraced houses, some particularly innovative residential typologies were created here.",
    },
    architect:
      "Architekten /Stadtplaner: Nickels, Ohrt und Partner (Städtebau) undSchulze, Hass, Kummer (Freiflächenplanung)",
    address: "Norbert-Schmid-Platz, Hamburg",
    id: 188,
    lat: 53.65396210000001,
    lng: 10.0615678,
  },
  {
    district: "Sasel",
    title: {
      de: "Denkmalgerechte Sanierung und Umbau der Herren hausanlage Annenhof in vier Wohneinheiten (1993)",
      en: "Renovation and conversion of the Annenhof manor house complex into four residential units (1993)",
    },
    description: {
      de: "Eine Allee aus Linden führt durch den großen Park des ca. 5 Hektar großen Anwesens zum Denkmal, das 1922im Backsteinstil nach englischem Vorbild errichtet wurde. In Zusammenarbeit mit dem Denkmalschutzamt erfolgteeine umfassende Sanierung, um dem Ensemble wieder ein ruhiges, dem ursprünglichen Zustand entsprechendes Gesamtbild zu geben. Prägende historische Gestaltungs elemente wurden erhalten bzw. wieder hergestellt und mitzurückhaltenden neuen Formen und Materialien kombiniert.",
      en: "An avenue of lime trees leads through the large park of the approximately 5-hectare estate to the monument, which was built in 1922 in brick style following the English model. A comprehensive renovation was carried out in collaboration with the heritage conservation office to give the ensemble a calm overall appearance in keeping with its original state. Characteristic historical design elements were preserved or restored and combined with restrained new forms and materials.",
    },
    architect:
      "Architekturbüro Holger Schmidt (heute HS-Architekten PartGmbB Schmidt Limmroth Funck Klapsing)Führung: Holger Schmidt ",
    address: "Saselbergweg 29a, Hamburg",
    id: 189,
    lat: 53.661977,
    lng: 10.0935508,
  },
  {
    district: "Winterhude",
    title: {
      de: "Hauptverwaltung der Deutschen TEXACO AG / heute Unternehmenszentrale der Deutschen Erdöl AG,DE A (1977)",
      en: "Headquarters of Deutsche TEXACO AG / today corporate headquarters of Deutsche Petroleum AG, DE A (1977)",
    },
    description: {
      de: "Das Gebäude ist ein Großraumbau mit kleineren Bereichenreversibler Einzelbüros für insgesamt 1400 Mitarbeiter/ innen. Der Eingang liegt entsprechend dem 2. BauabschnittCity Nord in der angehobenen Fußgängerebene. In Zeitender Ölkrise wurde eine dreifach verglaste Fassade als Abluft fenster entwickelt, die entzogene Wärme für die Erwär mung der Räume genutzt.",
      en: "The building is an open-plan structure with smaller areas of reversible individual offices for a total of 1,400 employees. The entrance is located on the raised pedestrian level in line with the 2nd construction phaseCity North. In times of the oil crisis, a triple-glazed façade was developed as an exhaust air window and the extracted heat was used to heat the rooms.",
    },
    architect:
      "Schramm Pempelfort Hupertz Architekten (1974-1975),Schramm Pempelfort von Bassewitz Hupertz Architekten (1975-1977)",
    address:
      "Bereich Pforte Überseering 40Hinweis: bitte Personalausweis / Pass mitbringen, Hamburg",
    id: 190,
    lat: 53.6038039,
    lng: 10.0177086,
  },
  {
    district: "Altona",
    title: { de: "Neue Mitte Altona", en: "New center Altona" },
    description: {
      de: "In dem Entwurfskonzept werden die beiden Assoziations räume „urbane Stadt“ und „Gleisanlagen“ zusammengefügtund aus ihnen die Gestaltungsprinzipien für die städtebau liche Struktur und die öffentlichen Räume der Neuen MitteAltona entwickelt. Die durch Gleisanlagen unterbrocheneGrünverknüpfung von der Elbe zum Volkspark wird mit demEntwurf hergestellt und die angrenzenden Gebiete werdendurch das neue Zentrum aufgewertet. Um diese großzügige,öffentliche Parkfläche entwickeln sich die neuen Quartiere.",
      en: "The design concept combines the two associative spaces 'urban city' and 'railway tracks' and uses them to develop the design principles for the urban structure and public spaces of the new centre of Altona. The green link from the Elbe to the Volkspark, which is interrupted by the railway tracks, is created with the design and the neighbouring areas are enhanced by the new centre. The new neighbourhoods will develop around this spacious public park area.",
    },
    architect:
      "André Poitiers Architekt Stadtplaner RIBA (Städtebaulicher Entwurf, Entwurf mehrerer Hochbauprojekte LP 1-5),arbos Freiraumplanung GmbH (Städtebaulicher Entwurf)",
    address: "Platz der Arbeiterinnen, Hamburg",
    id: 191,
    lat: 53.558467,
    lng: 9.9378874,
  },
  {
    district: "Altstadt",
    title: {
      de: "Fraser Suites Hamburg in der ehemaligen Oberfinanzdirektion",
      en: "Fraser Suites Hamburg in the former regional finance office",
    },
    description: {
      de: "Mit viel Liebe zum Detail und sensiblem Umgang mit der Bausubstanz ist die ehemalige Oberfinanzdirektion von1907 am Rödingsmarkt zu dem 5-Sterne-Superiorhotel Fraser Suites umgebaut worden. Der Charme des denkmal geschützten Gebäudes zeigt sich in der Eingangshalle, im Restaurant, den Konferenzräumen und den 154 Zimmern.Zeittypische Gestaltungselemente im Stil der 1920er und1950er Jahre konnten bewahrt bzw. aufgearbeitet werden.",
      en: "With great attention to detail and sensitive treatment of the building fabric, the former Oberfinanzdirektion from 1907 on Rödingsmarkt has been converted into the 5-star superior hotel Fraser Suites. The charm of the listed building can be seen in the entrance hall, the restaurant, the conference rooms and the 154 rooms, and typical design elements from the 1920s and 1950s have been preserved and refurbished",
    },
    architect:
      "MPP MEDING PLAN + PROJEKT GmbH, JOI-Design Innen architekten Architekt Design joehnk + partner mbB (Innenarchitektur)",
    address: "Lobby des Hotels Fraser Suites, Rödingsmarkt 2, Hamburg",
    id: 192,
    lat: 53.54837939999999,
    lng: 9.986449499999999,
  },
  {
    district: "Bergstedt",
    title: { de: "Kita Bergstedt", en: "Kita Bergstedt" },
    description: {
      de: "Neubau einer Kita in Holzmassivbauweise im denkmal geschützten Ensemble der evangelischen Kirche Bergstedt.Die Kita wurde beim BDA Architekturpreis Hamburg 2018mit einem 2. Preis ausgezeichnet.",
      en: "New construction of a daycare centre in solid timber construction in the listed ensemble of the Bergstedt Protestant church, which was awarded 2nd prize at the BDA Architecture Prize Hamburg 2018",
    },
    architect: "BUB Architektin bda_Alexandra Bub",
    address:
      "Haupteingang der ev. Kirche Bergstedt, Wohldorfer Damm 8, Hamburg",
    id: 193,
    lat: 53.6721911,
    lng: 10.1263861,
  },
  {
    district: "Fuhlsbüttel",
    title: {
      de: "Erweiterungsbau Grundschule Ratsmühlendamm",
      en: "Extension to Ratsmühlendamm primary school",
    },
    description: {
      de: "Neubau eines zweigeschossigen Gebäudes mit Klassenräu men, Musikraum, Mensa und Gymnastikhalle als Ergänzungzum bestehenden Ensemble aus Altbau und Sporthalle von Fritz Schumacher. Der Bestand entstand 1927 und istdenkmalgeschützt, der Erweiterungsbau schließt denSchulhof gegen den Marktplatz und erhaltene, wertvolleBäume ab und bildet mit den Altbauten ein abgestimm tes Bauensemble. Die Nutzungen im Neubau sind vielfältigmiteinander verwoben und schaffen neue Raumqualitäten.",
      en: "New construction of a two-storey building with classrooms, music room, canteen and gymnastics hall as an addition to the existing ensemble of old building and sports hall by Fritz Schumacher. The existing building was constructed in 1927 and is a listed building; the extension closes off the schoolyard from the market square and the preserved, valuable trees and forms a harmonised building ensemble with the old buildings. The uses in the new building are interwoven in a variety of ways and create new spatial qualities.",
    },
    architect: "Gössler Kinz Kerber Kreienbaum Architekten BDA",
    address:
      "Grundschule Ratsmühlendamm, Haupteingang Altbau, Ratsmühlendamm 39 , Hamburg",
    id: 194,
    lat: 53.6267047,
    lng: 10.0206758,
  },
  {
    district: "Hammerbrook",
    title: {
      de: "Modell „Haus in der Halle“ von Gustav Hassenpflug",
      en: "Model “House in the Hall” by Gustav Hassenpflug",
    },
    description: {
      de: "Der Architekt und ehemalige Bauhäusler Gustav Hassenpflugübernahm 1950 die Leitung der Landeskunstschule (heuteHochschule für bildende Künste). Im Mittelpunkt seiner erstenAusstellung 1953 stand das von ihm entworfene „Haus in der Halle“, an dem sich fast alle hauseigenen Werkstättenmit Entwürfen beteiligten - das bedeutete damals die Wiederbelebung einer zentralen Bauhaus-Idee. Für die Aus stellung „Bauhaus in Hamburg. Künstler, Werke, Spuren“wurde das Haus als Modell im Maßstab 1:5 nachgebaut.",
      en: "The architect and former Bauhaus student Gustav Hassenpflug took over the management of the Landeskunstschule (now the Hochschule für bildende Künste) in 1950. The centrepiece of his first exhibition in 1953 was the 'House in the Hall' designed by him, in which almost all of the school's own workshops participated with designs - at the time, this signified the revival of a central Bauhaus idea. For the exhibition 'Bauhaus in Hamburg. Artists, Works, Traces' exhibition, the house was recreated as a 1:5 scale model.",
    },
    architect:
      "Gustav Hassenpflug („Haus in der Halle“, 1953)Modellbau Rekonstruktion: Jan Schleifer und Stefan Mislinski",
    address:
      "in der Ausstellung, Freie Akademie der Künste, Klosterwall 23, Hamburg",
    id: 195,
    lat: 53.54832709999999,
    lng: 10.0068268,
  },
  {
    district: "Lokstedt",
    title: {
      de: "Umnutzung der historischen Amsinck-Villa zur Kindertagesstätte",
      en: "Conversion of the historic Amsinck villa into a daycare center",
    },
    description: {
      de: "Die Amsinck-Villa auf dem Liethberg ist ein bedeutenderHamburger Landsitz aus dem 19. Jahrhundert. Martin Haller, einer der Rathausbaumeister, gestaltete den Som mersitz. Nach wechselhafter Geschichte und langem Leerstand wurde das marode Gebäude grundlegend inStand gesetzt und 2017 zur Kindertagesstätte umgenutzt.Die klassizistische Villa wurde äußerlich und im Inneren in ihrer bauzeitlichen Ausgestaltung aufwendig restauriert.Expressive Farb- und Schablonengestaltungen aus den1920ern wurden freigelegt.",
      en: "The Amsinck Villa on the Liethberg is an important 19th century Hamburg country estate. Martin Haller, one of the town hall architects, designed the summer residence. After an eventful history and a long period of vacancy, the dilapidated building was completely renovated and converted into a children's daycare centre in 2017.the neoclassical villa was extensively restored on the outside and inside in its period design.expressive colour and stencil designs from the 1920s were uncovered.",
    },
    architect: "Knaack & Prell Architekten Partnerschaft mbB",
    address: "Beim Amsinckpark 18, Hamburg",
    id: 196,
    lat: 53.6008066,
    lng: 9.9432142,
  },
  {
    district: "Lurup",
    title: { de: "Wohnen am Volkspark", en: "Living at the Volkspark" },
    description: {
      de: "Das Baugrundstück für 171 geförderte Wohneinheiten liegtzwischen Volkspark und der stark frequentierten Elbgau straße, weshalb hohe Anforderungen an Schallschutz gestelltund eine hohe naturräumliche Qualität gefordert wurden.Die drei- bis viergeschossigen Baukörper beherbergen einenautofreien, familienfreundlichen Innenhof. Ein integrierterNachbarschaftstreff mit Gemeinschaftsräumen bietet dieMöglichkeit für Begegnungen.",
      en: "The building site for 171 subsidised residential units is located between Volkspark and the busy Elbgaustrasse, which is why high demands were placed on noise protection and a high quality of natural surroundings. the three to four-storey buildings house a car-free, family-friendly inner courtyard. An integrated neighbourhood meeting point with common rooms offers the opportunity for encounters.",
    },
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff +Winkler PartG mbB (Baukörper 1 + 4 + TG: Wettbewerb, Funktionsplan,LP 1 bis 5), KBNK Architekten GmbH (Generalplaner gesamtes Ensem ble, Baukörper 2 + 3: LP 1 bis 9)",
    address: "Elbgaustraße 235 / Ecke Vorhornweg, Hamburg",
    id: 197,
    lat: 53.5918759,
    lng: 9.881618399999999,
  },
  {
    district: "Neustadt",
    title: {
      de: "Raumwunder Görttwiete: Errichtung, Revitalisierungund Aufstockung auf kleinstem Raum",
      en: "Space miracle Görttwiete: construction, revitalization and extension in the smallest space",
    },
    description: {
      de: "Der denkmalgeschützte Appendix Altes Klöpperhaus wurdeim Zuge einer Nachverdichtung saniert, aufgestockt und erweitert. Ein Altbau mit Klinkerfassade, ein Neubau mit Glas fassade und eine Aufstockung mit Metallverkleidung wur den auf engstem Raum nach Vorgaben der Denkmalpflegeund Statik zu einem harmonischen Gesamtbild verbunden.Im Inneren beeindrucken loftartige Räume und der spektaku läre Rundumblick - vor allem den Mieter Design Offices.",
      en: "The listed Altes Klöpperhaus appendix was renovated, extended and extended as part of a redensification programme. An old building with a clinker brick façade, a new building with a glass façade and an extension with metal cladding were combined to create a harmonious overall picture in a very confined space in accordance with the specifications for the preservation of historical monuments and statics.loft-like rooms and the spectacular panoramic view are impressive inside - especially for the tenant Design Offices",
    },
    architect:
      "caspar.schmitzmorkramer (ehemals meyerschmitzmor kramer, LP 1-5), Rogge ABP (LP 8), brandherm + krumrey interior architecture (Innenarchitektur Design Offices)",
    address: "Eingang, Görttwiete 16-20, Hamburg",
    id: 198,
    lat: 53.5478484,
    lng: 9.9875214,
  },
  {
    district: "Ochsenwerder",
    title: {
      de: "Wohnprojekt Stadt-Land-Fluss, Umbau einesehemaligen Gasthofes zum Wohnhaus und Neubauvon zwei weiteren Wohnhäusern",
      en: "Urban-country-river residential project, conversion of a former inn into a residential building and new construction of two additional residential buildings",
    },
    description: {
      de: "Der ehemalige Gasthof wurde für Wohnungen umgebaut undum zwei Wohngebäude ergänzt. Die insgesamt 18 öffent lich geförderten Wohnungen mit individuellen Grundrissenund 300 m² Gemeinschaftsräumen bieten der Baugemein schaft den Raum, die Ideen von gemeinsamen Wohnen, solidarischem Miteinander und einem nachhaltigen, selbst bestimmten Leben zu verwirklichen. Eisheizung und mas sives Verblendmauerwerk spiegeln den Anspruch wider,ein auch energetisch nachhaltiges Projekt zu realisieren.",
      en: "The former inn was converted into flats and two residential buildings were added. The total of 18 publicly subsidised flats with individual floor plans and 300 m² of communal space offer the building community the space to realise the ideas of communal living, solidarity and a sustainable, self-determined life. Ice heating and massive facing brickwork reflect the aspiration to realise a project that is also sustainable in terms of energy.",
    },
    architect: "planerkollektiv Architekten PartGmbB Koehler Mayer Tietz",
    address: "Ochsenwerder Kirchendeich 1, Hamburg",
    id: 199,
    lat: 53.476214,
    lng: 10.0842315,
  },
  {
    district: "Ohlsdorf",
    title: {
      de: "Kapelle 1 auf dem Hauptfriedhof OhlsdorfDenkmalgerechte Innensanierung",
      en: "Chapel 1 in the Ohlsdorf main cemetery, interior renovation in line with monument requirements",
    },
    description: {
      de: "Die Kapelle 1 wird nicht mehr für Trauerfeiern genutzt und wurde im Zuge der Nachhaltigkeitsstrategie Ohlsdorf2050 für neue Nutzungsmöglichkeiten umgebaut. Die Umbaumaßnahmen beinhalten in großen Teilen die Wieder herstellung des Originalzustands mit einigen wenigen Ausnahmen, die aus der neuen Nutzung resultieren. Für den gesamten Innenraum wurde in enger Zusammen arbeit mit dem Denkmalschutzamt ein neues Farb- und Gestaltungskonzept erarbeitet.",
      en: "Chapel 1 is no longer used for funerals and was converted for new uses as part of the Ohlsdorf2050 sustainability strategy. The remodelling measures largely involve restoring the original condition with a few exceptions resulting from the new use. A new colour and design concept was developed for the entire interior in close cooperation with the heritage conservation office.",
    },
    architect: "Dohse Architekten",
    address:
      "vor der Kapelle 1, Kapellenstraße, Hauptfriedhof Ohlsdorf, Hamburg",
    id: 200,
    lat: 53.6223664,
    lng: 10.0404928,
  },
  {
    district: "Stellingen",
    title: {
      de: "Sanierung der Stellinger Kirche",
      en: "Renovation of the Stellingen Church",
    },
    description: {
      de: "Die denkmalgeschützte Stellinger Kirche (Architekt KurtQuednau, 1953) zeichnet sich durch eine traditionelle Back steinbauweise aus, zu der die moderne Formenspracheim Inneren im Kontrast steht. Augenmerk bei ihrer Sanierunglag auf der historischen Farbgebung des Innenraums. Restauratorische Farbbefunde wurden in ein Gestaltungs konzept überführt. Der Chor erhielt eine neue Orgel. Für das entstehende Gemeindehaus wurde eine zeitgemäßeVerbindung geschaffen.",
      en: "The listed Stellingen church (architect KurtQuednau, 1953) is characterised by its traditional brick construction, which contrasts with the modern design language of the interior. During its renovation, the focus was on the historic colour scheme of the interior. Restoration colour findings were transferred into a design concept. The choir was given a new organ. A contemporary connection was created for the new parish hall.",
    },
    architect: "Studio Andreas Heller GmbH",
    address: "vor dem Kircheneingang, Molkenbuhrstraße 6 , Hamburg",
    id: 201,
    lat: 53.590148,
    lng: 9.925364,
  },
  {
    district: "Wandsbek",
    title: {
      de: "Skylofts Hamburg - Umbau eines Hochbunkers in ein Wohngebäude",
      en: "Skylofts Hamburg - conversion of a high-rise bunker into a residential building",
    },
    description: {
      de: "Die Umnutzung des Luftschutzbunkers zu Wohnungenerforderte den Abbruch der 1,4 m starken Dachdecke, eines Teils der 1,1 m starken Außenwände und der innen liegenden Geschossdecken. Die Neueinteilung der Geschosse ergeben heute 19 Wohneinheiten auf sechsWohnebenen und einem zusätzlichen Staffelgeschoss - mit großen Fenstern und Balkonen.",
      en: "The conversion of the air raid shelter into flats required the demolition of the 1.4 m thick roof slab, part of the 1.1 m thick outer walls and the interior floor slabs. The reorganisation of the storeys now results in 19 residential units on six residential levels and an additional staggered storey - with large windows and balconies.",
    },
    architect:
      "Dipl.-Ing. Architekt Rüdiger Solvie (LP 1-4) , AG horizont Architekten Jürgen Hansen, Dietmar Wintschnig, Dipl.-Ing. Architekten (LP 4-9) ",
    address: "vor dem Gebäude, Wasserstieg 11, Hamburg",
    id: 202,
    lat: 53.5783529,
    lng: 10.0662007,
  },
  {
    district: "Barmbek",
    title: {
      de: "U-Bahn-Haltestelle Dehnhaide, Modernisierung und barrierefreier Ausbau (1995)",
      en: "Dehnhaide subway stop, modernization and barrier-free expansion (1995)",
    },
    description: {
      de: "Die Haltestelle ist Teil der historischen Ringstrecke Baujahr1912, die im 2. Weltkrieg weitgehend zerstört wurde. Ver bliebene historische Elemente (Sandsteinportal) wurden mitder neuen Haltestellenüberdachung verbunden. Ein frühesBeispiel für einen barrierefreien Ausbau. Der Umbau mit neu en Bahnsteigen, Überdachung, neuen Treppenaufgängenund Aufzugsanlagen erfolgte 1993 bis 1995 unter laufendemU-Bahnbetrieb in zwei Bauabschnitten.",
      en: "The stop is part of the historic ring line built in 1912, which was largely destroyed in the Second World War. The remaining historical elements (sandstone portal) were combined with the new station roofing. An early example of a barrier-free extension. The conversion with new platforms, roofing, new staircases and lifts was carried out in two construction phases between 1993 and 1995 while the underground railway continued to operate.",
    },
    architect:
      "Grundmann /Rehder (bis Juni 1992), Grundmann + Hein (ab Juli 1992)",
    address: "Haltestellen-Haupteingang Dehnhaide, Hamburg",
    id: 203,
    lat: 53.5786717,
    lng: 10.0489654,
  },
  {
    district: "Ottensen",
    title: {
      de: "HausArbeit - Mietwohnungen für eine Baugemeinschaft Alleinerziehender (1994)",
      en: "HausArbeit - rental apartments for a single-parent building community (1994)",
    },
    description: {
      de: "Hausarbeit eG ist ein selbst initiiertes Projekt von Alleiner ziehenden. Es wurde im Rahmen des experimentellen Wohnungs- und Städtebaus wissenschaftlich begleitet undbei der Habitat II Konferenz in Istanbul als best practicepräsentiert. Die individuellen Wohnungen, der Garten unddie gemeinschaftliche Dachterrasse wurden gemeinsam mit den Bewohnerinnen geplant. Damals ungewöhnlichwar die Ausstattung mit raumhohen Fenstern und Holzfuß boden im öffentlich geförderten Mietwohnungsbau.",
      en: "Hausarbeit eG is a self-initiated project by people living alone. It was scientifically monitored as part of the experimental housing and urban development programme and presented as best practice at the Habitat II conference in Istanbul. The individual flats, the garden and the communal roof terrace were planned together with the residents. The floor-to-ceiling windows and wooden flooring were unusual at the time in publicly subsidised rental housing.",
    },
    address: "vor dem Eingang Bergiusstraße 22, Hamburg",
    id: 204,
    lat: 53.5535717,
    lng: 9.9266923,
  },
  {
    district: "Rotherbaum",
    title: {
      de: "Schröderstift - Instandsetzung statt Abriss durch Gruppenselbsthilfe (1982)",
      en: "Schröderstift - repair instead of demolition through group self-help (1982)",
    },
    description: {
      de: "Das Schröderstift wurde 1851 / 52 nach Plänen des Architekten Albert Rosengarten auf der grünen Wiese errichtet. Die seit Anfang der 1970er Jahre dort leben den Bewohnerinnen und Bewohner gründeten 1981 denVerein „Mieterselbstverwaltung Schröderstift e.V.“. Sie boten ihre Selbsthilfe an, um die Gebäude instand zusetzen. Das planerkollektiv erarbeitete entsprechende Konzepte und so konnten mit einem sehr hohen Anteil von erbrachter Eigenarbeit durch die Bewohnerinnen und Bewohner die Gebäude langfristig erhalten werden.",
      en: "The Schröderstift was built on a greenfield site in 1851/52 according to plans by architect Albert Rosengarten. The residents who have lived there since the early 1970s founded the 'Mieterselbstverwaltung Schröderstift e.V.' association in 1981. They offered to help themselves to repair the buildings. The planning collective developed appropriate concepts and so, with a very high proportion of the residents' own labour, the buildings could be maintained in the long term.",
    },
    architect: "planerkollektiv Architekten PartGmbB",
    address: "vor der Kapelle, Schröderstiftstraße 34, Hamburg",
    id: 205,
    lat: 53.5675039,
    lng: 9.9713929,
  },
  {
    district: "Volksdorf",
    title: {
      de: "Umbau der Kirche am Rockenhof und Anbau Gemeindesaal (1989 / 1995)",
      en: "Reconstruction of the church at Rockenhof and extension of the community hall (1989/1995)",
    },
    description: {
      de: "Die Kirche wurde 1952 nach einem Entwurf des ArchitektenWalter Arendt aus dem Jahr 1938 mit basilikalem Quer schnitt und hohem Obergaden mit langem und breitem Mittelschiff mit halbrunder Apsis erbaut. Ende der 1920igerJahre hatte der Architekt die Kirche zunächst im Stil der Moderne entworfen, aber nicht realisiert. Die Kirche bildetzusammen mit dem Pastorat und dem Saal-Anbau von 1995 eine städtebauliche Einheit mit unterschiedlicher Architektursprache. Die Kirchenfenster wurden von Jochem Poensgen gestaltet.",
      en: "The church was built in 1952 according to a design by architect Walter Arendt from 1938 with a basilica cross-section and high clerestory with a long and wide nave with a semi-circular apse. At the end of the 1920s, the architect had initially designed the church in the modernist style, but never realised it. Together with the pastorate and the hall extension from 1995, the church forms an urban unit with a different architectural language. The church windows were designed by Jochem Poensgen.",
    },
    architect: "Architektur Büro Prof. Bernhard Hirche",
    address: "Eingang Gemeindesaal, Am Rockenhof 5, Hamburg",
    id: 206,
    lat: 53.65084410000001,
    lng: 10.1649429,
  },
  {
    district: "Alsterdorf",
    title: {
      de: "Umbau und Sanierung der Stiftungskirche St. Nicolaus und Errichtung des Lern- und Gedenkortes",
      en: "Conversion and renovation of the St. Nicolaus Foundation Church and construction of the learning and memorial site",
    },
    description: {
      de: "Das 1938 in die neugotische Kirche eingefügte SgraffitoAltarbild zeigt die Verstrickung der früheren AlsterdorferAnstalten mit dem NS-Regime. Um den Kirchraum von derLast des Bildes befreien zu können, dieses aber gleichzeitigals ein Dokument der Täterkunst zu erhalten, wurde es mitder bauzeitlichen Chorwand in den neuen Lern-und Gedenkort für die Opfer der Euthanasie transloziert. Den neuenRaumabschluss bildet nun eine mehrschichtige Glasfassade,die den Raum wieder hell und freundlich erscheinen lässt.",
      en: "The sgraffito altarpiece inserted into the neo-Gothic church in 1938 shows the involvement of the former Alsterdorf institutions with the Nazi regime. In order to free the church from the burden of the picture, but at the same time to preserve it as a document of perpetrator art, it was relocated with the original chancel wall to the new learning and memorial centre for the victims of euthanasia. The new room is now enclosed by a multi-layered glass façade, which makes the room appear bright and friendly again.",
    },
    architect: "ZYMARA LOITZENBAUER GIESECKE Architekten BDA",
    address:
      "vor der Kirche, Eingang Sengelmanstraße / EckeDorothea-Kasten-Straße, Hamburg",
    id: 207,
    lat: 53.6145023,
    lng: 10.0191504,
  },
  {
    district: "Altona",
    title: {
      de: "Wohnungsgebäude mit Pastoraten undGemeinderäumen an der Paul-Gerhardt-Kirche",
      en: "Apartment building with pastorate and community rooms at the Paul Gerhardt Church",
    },
    description: {
      de: "Bei der 1956 erbauten Paul-Gerhardt-Kirche ist ein Wohngebäude mit zwei Pastoraten und Gemeinderäumen entstanden.Das U-förmige Gebäude öffnet sich zum Erschließungshof,zwei flankierende Treppenhäuser sind durch einen dreiseitigumfassenden Laubengang verbunden und erschließen alleWohnungen. Es ist ein Ort entstanden, der ein Miteinander derBewohner*innen ermöglicht, ohne auf Privatheit zu verzichten.",
      en: "A residential building with two pastorates and community rooms has been created next to the Paul Gerhardt Church, which was built in 1956. the U-shaped building opens up to the access courtyard, two flanking stairwells are connected by a three-sided pergola and provide access to all the flats. The result is a place that enables residents to live together without sacrificing privacy.",
    },
    architect:
      "Schaltraum, Dahle-Dirumdam-Heise Partnerschaftvon Architekten MBB, BHF Bendfeldt Herrmann FrankeLandschaftsarchitekten",
    address:
      "Haupteingang Paul-Gerhardt-Kirche, BahrenfelderSteindamm / Ecke Bei der Paul-Gerhardt-Kirche, Hamburg",
    id: 208,
    lat: 53.5615499,
    lng: 9.9211359,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "Max-Planck-Institut für Struktur und Dynamikder Materie",
      en: "Max Planck Institute for the Structure and Dynamics of Matter",
    },
    description: {
      de: "Das Institut bietet auf dem Campus Bahrenfeld ein attraktives Zuhause für Wissenschaftler*innen, Mitarbeiter*innen,Studierende und Gäste. Vom Foyer bis ins oberste Geschossbilden Treppenläufe entlang der runden Galerieebenen mitgroßen Oberlichtern das kommunikative Zentrum des Gebäudes. Lebendig begrünte Dachterrassen und Dachgärten, diesich über mehrere Geschosse erstrecken, setzen neue Maßstäbe und sorgen für eine besondere Aufenthaltsqualität.",
      en: "The institute offers an attractive home for scientists, staff, students and guests on the Bahrenfeld campus. From the foyer to the top floor, flights of stairs along the round gallery levels with large skylights form the communicative centre of the building. Lively green roof terraces and roof gardens, which extend over several floors, set new standards and ensure a special quality of stay.",
    },
    architect:
      "hammeskrause architekten bda, Landschaftsarchitektur+ Holzapfel-Herziger & Benesch PartG mbB",
    address:
      "Luruper Chaussee 149, vor dem Haupteingang des Instituts, Hamburg",
    id: 209,
    lat: 53.5768648,
    lng: 9.8882853,
  },
  {
    district: "Barmbek-Süd",
    title: { de: "Built in Barmbek", en: "Built in Barmbek" },
    description: {
      de: "Unter dem Leitgedanken „Produktive Stadt“ entstand einGewerbehof, der kleinen Start-ups, Handwerks- und Dienstleistungsbetrieben der Kreativbranche günstige Flächenanbietet. Ein straßenbegleitender, fünfgeschossiger Baukörper ist für großflächige, ein zweigeschossiger Flügel imBlockinneren für kleinteiligere Gewerbenutzungen vorgesehen. Beide verbindet ein gemeinsam genutzter Werkhof.Das Gebäude ist als vorgefertigter Industriebau bewussteinfach gehalten, um geringe Mieten realisieren zu können.Architekturbüro: coido GmbHFührungen: Sven Cordsen, Luisa HeldTermine: Samstag, 25. Juni, 14.10 Uhr, 15.20 Uhr, 16.40 UhrTreffpunkt: Holsteinischer Kamp / Ecke Marschnerstraße",
      en: "Under the guiding principle of 'Productive City', a commercial centre has been created that offers small start-ups, craft and service businesses in the creative sector affordable space. A five-storey building along the street is intended for large-scale commercial use, while a two-storey wing in the centre of the block is for smaller-scale commercial use. Both are connected by a shared work yard and the building has been deliberately kept simple as a prefabricated industrial building in order to realise low rents: Sven Cordsen, Luisa HeldDates: Saturday, 25 June, 2.10 pm, 3.20 pm, 4.40 pmMeeting point: 'Holsteinischer Kamp / corner of Marschnerstraße",
    },
    architect: "coido GmbH",
    address: "Holsteinischer Kamp / Ecke Marschnerstraße, Hamburg",
    id: 210,
    lat: 53.5751094,
    lng: 10.0396481,
  },
  {
    district: "Eimsbüttel",
    title: {
      de: "Denkmalgerechte GrundsanierungEmilie-Wüstenfeld-Gymnasium",
      en: "Basic renovation of Emilie-Wüstenfeld-Gymnasium in keeping with historical monuments",
    },
    description: {
      de: "Der denkmalgeschützte Bau wurde behutsam saniertund mit sorgfältig detaillierten Ergänzungen versehen undmit einem an dem historischen Vorbild orientierten Farbund Materialkonzept den neuen Nutzungsanforderungenangepasst. Die ursprünglichen, scharrierten Putzoberflächen wurden freigelegt und mittels eines abgestimmten Beleuchtungskonzeptes herausgestellt.",
      en: "The listed building was carefully renovated and provided with carefully detailed additions and adapted to the new usage requirements with a colour and material concept based on the historical model. The original, scratched plaster surfaces were exposed and emphasised by means of a coordinated lighting concept",
    },
    architect: "Dohse und Partner Architekten",
    address: "Bundesstraße 78, an der Treppe vor dem Haupteingang, Hamburg",
    id: 211,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Fischbek",
    title: {
      de: "Gesundheitszentrum Fischbeker Heidbrook",
      en: "Fischbeker Heidbrook Health Center",
    },
    description: {
      de: "Das Gebäude wurde in energieeffizienter und modernerHolzbauweise realisiert. Dabei kamen komplett vorgefertigte Holzmassivbauteile zum Einsatz, um eine durchgängighohe Bauqualität zu erhalten, bei gleichzeitig wirtschaftlichen Baukosten und äußerst kurzer Bauzeit. Auch der Fahrstuhlschacht besteht als Holz. Ziel war ein Ärztehaus mitWohlfühlfaktor, in dem Patienten nicht nur medizinisch gutversorgt werden, sondern durch die sichtbaren Holzbauteilesich auch atmosphärisch gut aufgehoben fühlen.",
      en: "The building was realised using an energy-efficient and modern timber construction method. Completely prefabricated solid timber components were used in order to achieve a consistently high construction quality, while keeping construction costs low and construction time extremely short. The lift shaft is also made of wood. The aim was to create a medical centre with a feel-good factor, in which patients not only receive good medical care, but also feel at home thanks to the visible wooden components.",
    },
    architect: "G2R Architekten",
    address: "Im Fischbeker Heidbrook 20, Vorplatz Gesundheitszentrum, Hamburg",
    id: 212,
    lat: 53.4679548,
    lng: 9.814366399999999,
  },
  {
    district: "Hoheluft-West",
    title: {
      de: "Neubau Wohngebäude Gärtnerstraße 26a",
      en: "New residential building Gärtnerstraße 26a",
    },
    description: {
      de: "Im Sinne einer Nachverdichtung der bestehenden Bebauung grenzt der Neubau als drei- bis fünfgeschossiger Riegelin Teilen direkt an das Nachbargebäude Gärtnerstraße 22.Die Position der Treppen- und Aufzugsanlage reagiert dabeiauf die Brandwände des Bestandsbaus, zwei offene Treppenhäuser verbinden die Laubengangerschließung mit großzügigen, begehbaren und begrünten Dachflächen. Insgesamt sind 29 Wohnungen auf fünf Ebenen sowie eine Tiefgarage entstanden.",
      en: "As part of a redensification of the existing development, the new three- to five-storey block directly adjoins the neighbouring building at Gärtnerstrasse 22, with the position of the staircase and lift system responding to the firewalls of the existing building, while two open stairwells connect the pergola access with spacious, accessible and green roof areas. A total of 29 flats on five levels and an underground car park have been created.",
    },
    architect:
      "HS-Architekten Part GmbB Schmidt Limmroth FunckKlapsing, Kathrin Wolf Landschaftsarchitektur",
    address: "Gärtnerstraße 22, Tordurchfahrt, Hamburg",
    id: 213,
    lat: 53.5838232,
    lng: 9.9677247,
  },
  {
    district: "Ohlsdorf",
    title: {
      de: "Südteichbrücke Friedhof Ohlsdorf - Neuentwicklung der historischen Teichanlage",
      en: "Südteichbrücke Ohlsdorf cemetery - new development of the historic pond complex",
    },
    description: {
      de: "Mit der Südteichbrücke wird der 1887/88 von dem Architekten Johann Wilhelm Cordes angelegte Bereich um denSüdteich mit seiner Insel im Rahmen des Entwicklungskonzeptes Ohlsdorf 2050 neu erschlossen. Die neue Brückenimmt den Platz der historischen schmiedeeisernen Brückeein. In Teilen wird die historische Wegeführung auf der Südteichinsel wieder aufgegriffen. Von Rosenpflanzungen begleitet, schwingt sich der Weg zum höchsten Punkt der Inselund weitet sich zu einem Sitzbereich mit Rundumausblick aus.",
      en: "The Südteichbrücke bridge will open up the area around the Südteich pond and its island, which was designed by architect Johann Wilhelm Cordes in 1887/88, as part of the Ohlsdorf 2050 development concept. The new bridge will take the place of the historic wrought-iron bridge. Parts of the historical pathways on the Südteichinsel will be taken up again. Accompanied by rose plantings, the path swings up to the highest point of the island and expands into a seating area with a panoramic view.",
    },
    architect: "YLA Ando Yoo Landschaftsarchitektur",
    address: "Fuhlsbüttler Straße 756, Rückseite des Eingangsgebäudes, Hamburg",
    id: 214,
    lat: 53.6234703,
    lng: 10.0339278,
  },
  {
    district: "Osdorf",
    title: {
      de: "Osdorfer Born - Bezahlbar besser wohnen",
      en: "Osdorfer Born - Better affordable living",
    },
    description: {
      de: "Das Hochhausensemble Bornheide ist Teil des OsdorferBorns, eines Stadtteils, geprägt von Betonbauten der1960er-Jahre. Durch die exponierte Lage hat das Wohnhochhaus eine charakterbildende Rolle für den Stadtteil,und es setzt heute mit der neuen Gestaltung einen farbenprächtigen Akzent gegen gängige Etikettierungen vonGroßwohnsiedlungen. Gemeinsam mit der Wohnungsbaugenossenschaft altoba wird aufgezeigt, wie wirtschaftliche, soziale und energetische Nachhaltigkeit durch Sanierung und Modernisierung des Bestands erreicht werden kann.",
      en: "The high-rise ensemble Bornheide is part of OsdorferBorn, a district characterized by concrete buildings from the 1960s. Due to its prominent location, the residential high-rise plays a character-defining role for the district, and today, with its new design, it adds a colorful accent against common labels for large residential estates. In collaboration with the housing cooperative altoba, it is demonstrated how economic, social, and energy sustainability can be achieved through the renovation and modernization of existing structures.",
    },
    architect: "ABJ Architekten",
    address: "Bornheide 80, Eingangsloge, Hamburg",
    id: 215,
    lat: 53.59086,
    lng: 9.8531,
  },
  {
    district: "Othmarschen",
    title: {
      de: "Halbmondhaus - Denkmalgerechte Sanierung des Stallgebäudes und Ausbau zu hochwertigen Büroflächen",
      en: "Halbmondhaus - historic renovation of the stable building and expansion into high-quality office space",
    },
    description: {
      de: "Das Halbmondhaus wurde Ende des 18. Jahrhunderts alsStallgebäude des Landhauses Thornton von dem dänischenArchitekten Christian Frederik Hansen erbaut. Das Gebäudeist in der Folgezeit mehrfach überformt und umgenutztworden. Im Rahmen einer umfassenden denkmalgerechtenSanierung, Restaurierung und Umstrukturierung erhieltes eine Büronutzung, die sich über zwei Geschosse erstreckt.Das Entwurfskonzept orientiert sich dabei an der ursprünglichen historischen Grundrissdisposition.",
      en: "The Half Moon House was built at the end of the 18th century as a stable building for the Thornton country house by the Danish architect Christian Frederik Hansen. The building was subsequently remodelled and repurposed several times. As part of a comprehensive refurbishment, restoration and restructuring in keeping with the building's listed status, it was given an office use extending over two storeys, with the design concept based on the original historical floor plan.",
    },
    architect:
      "Architekten Christian Frederik Hansen erbaut. Das Gebäudeist in der Folgezeit mehrfach überformt und umgenutztworden. Im Rahmen einer umfassenden denkmalgerechtenSanierung, Restaurierung und Umstrukturierung erhieltes eine Büronutzung, die sich über zwei Geschosse erstreckt.Das Entwurfskonzept orientiert sich dabei an der ursprünglichen historischen Grundrissdisposition.Klaus und Schulz Architekten Part mbB",
    address: "Halbmondhaus, Haupteingang, Elbchaussee 228, Hamburg",
    id: 216,
    lat: 53.5464873,
    lng: 9.8761153,
  },
  {
    district: "Schnelsen",
    title: {
      de: "Parkanlage „Hamburger Deckel“",
      en: "“Hamburger Lid” park",
    },
    description: {
      de: "Édouard Manets Gemälde „Le déjeuner sur l’herbe“diente dem neuen Park auf dem A7-Tunnel in Schnelsenals Inspiration. Wo sich Blechlawinen einst unter freiemHimmel dahinschoben, gedeiht heute - oberhalb vonVerkehrslärm und vierspuriger Straße - eine vegetativeArtenvielfalt, treffen sich Anwohner*innen zum Picknick,spielen Kinder ungefährdet Fußball, bauen Kleingärtner*innen Obst und Gemüse an. Und alle, die mögen, die lädtdie 2,9 Hektar große Dachbegrünung zu einem Frühstückim Grünen ein.",
      en: "Édouard Manet's painting 'Le déjeuner sur l'herbe' served as inspiration for the new park on the A7 tunnel in Schnelsen. Where avalanches of cars once pushed along under the open sky, today - above the traffic noise and four-lane road - a vegetative diversity of species thrives, local residents meet for picnics, children play football in safety, allotment gardeners grow fruit and vegetables. And the 2.9-hectare green roof invites anyone who likes to have breakfast in the countryside.",
    },
    architect: "POLA Landschaftsarchitekten GmbH",
    address:
      "Quartiersplatz „Geschwister-Töllke-Platz“,Höhe Frohmestraße, Hamburg",
    id: 217,
    lat: 53.6317251,
    lng: 9.9227518,
  },
  {
    district: "Stellingen",
    title: {
      de: "Br48 Baugemeinschaft - Mehrgenerationenwohnen",
      en: "Br48 building community - multi-generational living",
    },
    description: {
      de: "Die Baugemeinschaft B48 hat auf einem ehemaligen Einfamilienhaus-Grundstück ein Vier-Generationen-Wohnprojekt als Holzbau realisiert. Die vormalige Eigentümerinwohnt nun gemeinsam mit Familien, Pärchen und Singlesü50. Die acht Wohneinheiten und die Gemeinschafts- undSharingräume verteilen sich auf zwei Geschosse + Staffel.Der Architekt Martin Brüdigam und die Baugruppen-Bewohner*innen informieren über die Entstehung dieses ökologischen und nachhaltigen Wohnprojekts.",
      en: "Baugemeinschaft B48 has realised a four-generation residential project as a timber construction on a former detached house plot. The former owner now lives together with families, couples and singles over 50. The eight residential units and the communal and sharing rooms are spread over two storeys + staggered floors.' Architect Martin Brüdigam and the residents of the building group provide information about the development of this ecological and sustainable residential projec",
    },
    architect: "Plan -R- Architektenbüro Martin Brüdigam",
    address:
      "Brehmweg 48, im Garten auf der RückseiteHinweis: Parallel findet ein Angebot für junge Leute statt(siehe Veranstaltungsnummer 76 in diesem Programm), Hamburg",
    id: 218,
    lat: 53.584804,
    lng: 9.9425296,
  },
  {
    district: "St. Pauli",
    title: {
      de: "Appartementhaus Simon-von-Utrecht-Straße",
      en: "Apartment house Simon-von-Utrecht-Straße",
    },
    description: {
      de: "Die geschlossene Blockrandbebauung dieses Gebäudesfügt sich unaufdringlich in die bereits vorhandene gründerzeitliche Baustruktur ein und schafft durch ihre geneigteBlechdacheindeckung und anthrazitfarbenen Gauben eineattraktive Ecksituation. Die helle Ziegelfassade erlangt ihreoptische Tiefe und Plastizität durch großformatige, bodentiefe Fenster, umlaufende Sichtbetonbänder und versetztangeordnete Balkone. Den begrünten Innenhof prägt eineweiße und für diese Nachbarschaft typische Putzfassade.",
      en: "The closed perimeter block development of this building blends unobtrusively into the existing Wilhelminian-style building structure and creates an attractive corner situation with its pitched sheet metal roofing and anthracite-coloured dormers. The light-coloured brick façade achieves its visual depth and plasticity through large-format, floor-to-ceiling windows, surrounding exposed concrete bands and staggered balconies. The green inner courtyard is characterised by a white rendered façade typical of this neighbourhood.",
    },
    architect: "THÜS FARNSCHLÄDER ARCHITEKTEN PartmbB",
    address: "Simon-von-Utrecht-Straße 27, Hamburg",
    id: 219,
    lat: 53.5512015,
    lng: 9.9647027,
  },
  {
    district: "St. Pauli, Neustadt",
    title: {
      de: "Erweiterung Planten un Blomen undUmgestaltung Dag-Hammarskjöld-Platz",
      en: "Expansion of Planten un Blomen and redesign of Dag Hammarskjöld Square",
    },
    description: {
      de: "Die Revitalisierung des CCH bot 2015 die Chance, den angrenzenden Raum um die Marseiller Straße neu zu ordnen.Mit der Umwandlung der vierspurigen Straße zur Parkanlage wurde eine eigenständige Esplanade zwischen demhistorischen Botanischen Garten und Planten un Blomenimplementiert. Zeitgleich wurde der Dag-HammarskjöldPlatz am Bahnhof Dammtor zum Vorzimmer des AltenBotanischen Gartens.",
      en: "The revitalisation of the CCH in 2015 offered the opportunity to reorganise the adjoining space around Marseiller Strasse, and with the conversion of the four-lane road into a park, an independent esplanade was implemented between the historic botanical garden and Planten un Blomen. At the same time, Dag Hammarskjöld Square at Dammtor railway station became the antechamber to the Old Botanical Garden.",
    },
    architect:
      "POLA Landschaftsarchitekten GmbH (LP 1-3/5-8),Landschaftsarchitekt Mark Krieger (Pflanzplanung), Dipl.-Ing. IngridGock Garten- und Landschaftsarchitektur (Pflanzplanung)",
    address: "StadtRAD Fahrradmietstation, Dag-Hammarskjöld-Platz, Hamburg",
    id: 220,
    lat: 53.5608977,
    lng: 9.9887294,
  },
  {
    district: "Wandsbek",
    title: { de: "Bunte Bleichen", en: "Colorful bleaching" },
    description: {
      de: "Das Wohnensemble an einer viel befahrenen HamburgerMagistrale schafft einen freundlichen Ort mit eigenerIdentität für seine zukünftigen Bewohner. Die kubischenKlinkergebäude erzeugen eigenständige Adressen zumStraßenraum hin und werden über das Thema der Schallschutzloggien und Fenster zu einer gestalterischen Einheitzusammengezogen. Die Innenhoffassaden sind in hellenPutztönen gehalten und laden auf den großzügigen Galerienzum Verweilen ein.",
      en: "The residential ensemble on a busy Hamburg arterial road creates a friendly place with its own identity for its future residents. The cubic clinker brick buildings create independent addresses towards the street and are drawn together to form a design unit through the theme of soundproof loggias and windows. The inner courtyard façades are kept in light plaster colours and invite people to linger in the spacious galleries.",
    },
    architect: "APB. Schneider Andresen Architektenund Stadtplaner PartG mbB",
    address:
      "Wandsbeker Allee 57 / HauseingangHinweis: ohne Innenbesichtigungen, Hamburg",
    id: 221,
    lat: 53.57489770000001,
    lng: 10.0701908,
  },
  {
    district: "Winterhude",
    title: {
      de: "Quiet Space auf Kampnagel",
      en: "Quiet Space on Kampnagel",
    },
    description: {
      de: "Das Zentralfoyer, das Herz Kampnagels, ist ein lebendigerund betriebsamer Ort der Begegnungen. Dieser geschätzteOrt der regen Kommunikation schließt gleichzeitig diejenigen aus, die Ruhe brauchen und trotzdem gern Kulturveranstaltungen besuchen möchten. Im Foyer fehlt einsogenannter Quiet Space, also ein ruhiger, komfortablerund zugleich offener Ort. Wie sieht auf Kampnagel soein Ort aus und welchen Anforderungen muss er gerechtwerden, um in der Öffentlichkeit eines Aufführungsbetriebes zu funktionieren?",
      en: "The central foyer, the heart of Kampnagel, is a lively and bustling meeting place. This valued place of lively communication simultaneously excludes those who need peace and quiet but would still like to attend cultural events. The foyer lacks a so-called quiet space, i.e. a quiet, comfortable and at the same time open place. What does such a place look like at Kampnagel and what requirements must it fulfil in order to function in the public sphere of a performance venue?",
    },
    address: "Kampnagel, Jarrestraße 20, Platz vor dem Zentralfoyer, Hamburg",
    id: 222,
    lat: 53.5833342,
    lng: 10.0218018,
  },
  {
    district: "Winterhude",
    title: {
      de: "Wohnungsbau am Braamkamp - Denkmalgerechte energetische Modernisierung und Instandsetzung",
      en: "Housing construction at Braamkamp - historic-appropriate energy modernization and repairs",
    },
    description: {
      de: "Das Gebäude wurde 1930 errichtet (Architekt Ernst Dorendorf). Im Erdgeschoss des fünfgeschossigen Gebäudes befinden sich drei Büros, in den Obergeschossen 24 Wohnungen.In Abstimmung mit dem Denkmalschutzamt wurde ein Sanierungskonzept nahe am Bestand entwickelt. Dazu gehören einWärmedämmverbundsystem mit Klinkerriemchen, neue Fenster mit Sprossen und leichtere Vorstellbalkone. Die ursprünglichen Zierelemente wurden bestandsnah nachgebildet.",
      en: "The building was constructed in 1930 (architect Ernst Dorendorf). There are three offices on the ground floor of the five-storey building and 24 flats on the upper floors. This includes a composite thermal insulation system with clinker brick slips, new windows with glazing bars and lighter projecting balconies. The original decorative elements were reproduced close to the existing building.",
    },
    architect: "d3-architekten",
    address: "Hainbuchenweg 14Hinweis: keine Innenbesichtigung, Hamburg",
    id: 223,
    lat: 53.6007956,
    lng: 9.9997925,
  },
  {
    district: "Altona",
    title: {
      de: "Lofthaus am Elbberg (1997)",
      en: "Loft house on Elbberg (1997)",
    },
    description: {
      de: "Der Elbberg ist geprägt von Gegensätzen: von der Elbe imSüden und dem Altonaer Balkon, einem bepflanzten Steilhang im Norden, von den Fischlagerhäusern sowie denBürobauten der Umgebung. In der Architektur des Lofthauses sind diese Gegensätze gespiegelt. So findet die fächerartig aufgebaute, an die Leichtigkeit des Wassers erinnernde Glasfront im Süden in der grünen Kupferfassade zurLandseite hin ein kräftiges Gegengewicht. Das Haus stehtauf Stützen, die ihm Schutz vor Hochwasser bieten.",
      en: "The Elbberg is characterised by contrasts: the Elbe to the south and the Altona balcony, a planted steep slope to the north, the fish warehouses and the office buildings in the surrounding area. These contrasts are reflected in the architecture of the loft house. The fan-shaped glass façade to the south, reminiscent of the lightness of water, is counterbalanced by the green copper façade on the land side. The house stands on supports that protect it from flooding.",
    },
    architect:
      "BRT Architekten Bothe Richter Teherani,heute Hadi Teherani Architects GmbH, Jens Bothe Architekt Dipl.-Ing.BDA, Hillmer und Richter Architekten GmbH",
    address: "Büro Hadi Teherani, Elbberg 1, Hamburg",
    id: 224,
    lat: 53.5448575,
    lng: 9.9343515,
  },
  {
    district: "Harvestehude",
    title: {
      de: "Mehrfamilienhaus mit Arztpraxis Frauenthal  7  (1994)",
      en: "Apartment building with doctor's office at Frauenthal 7 (1994)",
    },
    description: {
      de: "An einer Harvestehuder Kreuzungssituation wurde 1994 einviergeschossiges Mehrfamilienhaus mit Praxis errichtet,welches auf die umliegenden Gebäudestrukturen des Milieuschutzgebiets Harvestehude / Rotherbaum Rücksicht nimmt.Es wurde als durchgängiges Mauerwerksmaterial Bimsbetonstein für sämtliche Wände verwendet und das prägendeTonnendach in einer Holzrahmenkonstruktion mit innenliegenden Patios ausgearbeitet. Es zeigt sich heute, wie gutdieses Gebäude altert und sich trotz eigenständiger Ausbildung in die historische Umgebung einfügt.",
      en: "In 1994, a four-storey apartment block with a practice was built at a crossroads in Harvestehude, taking into account the surrounding building structures of the Harvestehude / Rotherbaum neighbourhood conservation area. pumice concrete blocks were used for all the walls and the characteristic barrel roof was designed as a timber frame construction with internal patios. Today it is evident how well this building is ageing and how well it fits into the historic surroundings despite its independent design.",
    },
    architect: "Architekturbüro Holger Schmidt,heute HS-Architekten PartGmbB",
    address: "Frauenthal 7, Hamburg",
    id: 225,
    lat: 53.5800542,
    lng: 9.9937586,
  },
  {
    district: "Rotherbaum",
    title: {
      de: "Stadtvilla Alsterufer 38 (1993)",
      en: "City villa Alsterufer 38 (1993)",
    },
    description: {
      de: "Der Entwurf orientiert sich an der Typologie der umgebendenVillen und präsentiert ein Gebäude, das in der Eleganz desAusdrucks und der ungewöhnlichen Materialität die Jury desdamaligen Wettbewerbs überzeugte. Die Interpretation derVilla zeigt sich in der repräsentativen Eingangshalle und densehr individuell nach „Raumplan“ entwickelten Wohnungenmit integrierten Maisonetten und unterschiedlichen Raumhöhen. Durch die eigenwillige Kubatur erhielten sämtliche Wohnungen den begehrten Alsterblick.",
      en: "The design is based on the typology of the surrounding villas and presents a building that impressed the jury of the previous competition with its elegance of expression and unusual materiality. The interpretation of the villa is reflected in the representative entrance hall and the highly individualised flats developed according to a 'spatial plan' with integrated maisonettes and different room heights. Thanks to the unconventional cubature, all of the flats have a coveted view of the Alster.",
    },
    architect:
      "Spengler Wiescholek Architekten Stadtplaner GbR,heute Spengler Wiescholek Architektur / Stadtplanung PartGmbB, Landschaftsarchitekt Günther Schulze",
    address: "Alsterufer 38, Hamburg",
    id: 226,
    lat: 53.56451939999999,
    lng: 9.9980019,
  },
  {
    district: "Altona",
    title: {
      de: "Haus Krühler - Wohnhaus in Holzbauweisein Hamburg-Othmarschen",
      en: "Haus Krühler - wooden house in Hamburg-Othmarschen",
    },
    description: {
      de: "Mit dem in Massivholzbauweise auf einem StahlbetonUntergeschoss errichteten Haus Krühler wurde ein offenesWohnkonzept umgesetzt, mit Höhenversätzen zur Differenzierung von Raum, mit Treppen, die nicht nur der Erschließung dienen, sondern zu Aufenthalts- und Spielflächenwerden, und mit einem Schrank, in dem nicht nur verstaut,sondern auch geklettert werden kann. Das Innere wurdeweitestgehend unverkleidet belassen, Fügung und Schichtung der konstruktiven Bauteile sind das bestimmende Thema des Entwurfs.",
      en: "The Krühler house, built in solid wood on a reinforced concrete basement, is an open-plan living concept, with height offsets to differentiate the space, with stairs that not only serve to provide access, but also become areas to stay and play, and with a cupboard that can not only be used for storage, but also for climbing. The interior has been left largely unclad; the joining and layering of the structural components are the defining theme of the design.",
    },
    architect: "asdfg Architekten . Loeper Schmitz Grenz PartGmbB",
    address: "Slevogtstieg 2, Hamburg",
    id: 227,
    lat: 53.54770329999999,
    lng: 9.895241799999999,
  },
  {
    district: "Bahrenfeld",
    title: {
      de: "DESY Innovationszentrum",
      en: "DESY Innovation Center",
    },
    description: {
      de: "Mit dem DESY Innovationszentrum wird der Forschungscampus in Hamburg-Bahrenfeld erweitert. DerNeubau bietet Büros und Laborflächen für Existenzgründer,Start-ups und etablierte Firmen aus den Forschungsfelderndes Campus. Durch den prägnanten Versatz der Glasfassade im Nordosten entsteht ein überbauter, kommunikativerRaum, der sich zur Luruper Chaussee hin öffnet und einweithin sichtbares Zeichen am Kreuzungspunkt mit der Stadionstraße setzt.",
      en: "The DESY Innovation Centre will expand the research campus in Hamburg-Bahrenfeld. The new building offers offices and laboratory space for start-ups and established companies from the campus's research fields. The striking offset of the glass façade in the north-east creates an overbuilt, communicative space that opens up towards Luruper Chaussee and makes a visible statement at the intersection with Stadionstrasse",
    },
    architect: "DFZ Architekten",
    address: "Luruper Hauptstraße 1, Eingang DESY Innovationszentrum , Hamburg",
    id: 228,
    lat: 53.58028119999999,
    lng: 9.884354199999999,
  },
  {
    district: "Bergedorf",
    title: { de: "Jugendclub Bergedorf", en: "Bergedorf youth club" },
    description: {
      de: "Der neue Jugendclub Bergedorf ist ein Bildungs- undSozialisationszentrum der offenen Kinder- und Jugendarbeit und liegt in einem Grünstreifen entlang des KanalsAlte Brookwetterung. Das Low-Budget-Gebäude ist als  CO2 -sparender Holzmassivbau mit einer Fassade aus Wellplatten verkleidet, die dem Gebäude bei sehr geringenKosten ein hohes Identifikationspotenzial geben.",
      en: "The new Bergedorf youth club is an education and socialisation centre for open child and youth work and is located in a green strip along the Alte Brookwetterung canal. The low-budget building is a CO2-saving solid timber construction with a façade made of corrugated panels, which give the building a high identification potential at very low cost",
    },
    architect: "Münch Architekten BDA",
    address: "Am Hohen Stege 1 / Ecke Vierlandenstraße, Hamburg",
    id: 229,
    lat: 53.48530150000001,
    lng: 10.2093138,
  },
  {
    district: "Fischbek",
    title: {
      de: "Posteck - Sanierung eines alten Bauernhauses",
      en: "Posteck - Restoration of an Old Farmhouse",
    },
    description: {
      de: "Er war einst einer der schmucksten Höfe in Fischbek undschien am Ende kaum noch zu erhalten: Der 1886 erbaute,denkmalgeschützte Hof an der Ecke Scharlbarg / Postecklag jahrelang verfallen im Dornröschenschlaf. Die Rettungkam in letzter Minute. Das Bauernhaus wurde aufwendigsaniert und die alte Hofstelle zu einem Ensemble mit21 Mietwohnungen umgebaut.",
      en: "Once one of the most picturesque courtyards in Fischbek, it seemed almost beyond salvation in the end: The 1886-built, heritage-protected courtyard at the corner of Scharlbarg/Postecklag had been deteriorating for years in a state of neglect. The rescue came at the eleventh hour. The farmhouse underwent elaborate restoration, transforming the old courtyard into an ensemble with 21 rental apartments.",
    },
    architect: "Schulenburg Architekten",
    address: "Posteck 2, Hamburg",
    id: 230,
    lat: 53.4701177,
    lng: 9.8280877,
  },
  {
    district: "HafenCity",
    title: {
      de: "Fleetbrücke Miniaturwunderland",
      en: "Fleet bridge miniature wonderland",
    },
    description: {
      de: "Das Miniaturwunderland plante eine Erweiterung in einen aufder anderen Fleetseite gelegenen Speicher. Als witterungsgeschützte Verbindung für Besucher*innen und Modelleisenbahnen wurde eine 25 Meter lange Brücke mit Glasfassadeund einem an die Umgebung angepassten Strebenfachwerkals Tragwerk erstellt. Wegen des Höhenunterschieds derbeiden Speichergebäude verläuft die in einem Stück hergestellte und per Kran eingehobene Brücke schräg mit der fürModellbahnen maximalen Steigung von 3 Prozent.",
      en: "The Miniaturwunderland planned an extension into a warehouse located on the other side of the canal. A 25-metre-long bridge with a glass façade and a strut framework adapted to the surroundings was created as a weather-protected connection for visitors and model trains. Due to the difference in height between the two warehouse buildings, the bridge, which was constructed in one piece and lifted into place by crane, runs at an angle with a maximum gradient of 3 per cent for model railways",
    },
    architect: "studioH2K ArchitektenIngenieurbüro: panta ingenieure GmbH",
    address: "Kehrwieder 2 / Ecke Auf dem Sande, Hamburg",
    id: 231,
    lat: 53.54379110000001,
    lng: 9.9893533,
  },
  {
    district: "HafenCity",
    title: {
      de: "Quartier der Generationen, Baufeld 93",
      en: "Quarter of generations, building site 93",
    },
    description: {
      de: "In Wasserlage an der Elbe sind Wohnnutzungen für unterschiedliche Gruppen entstanden: Preisgedämpfte, freifinanzierte und geförderte Wohnungen sowie Seniorenwohnungen werden über einen Innenhof erschlossen, der übereine große Freitreppe zu erreichen ist. Der Entwurf reagiertauf diese Mischung mit der konsequenten Ausbildung differenzierter Fassaden. Die Ausführung in farbverwandtemKlinker fasst das Quartier optisch zusammen.",
      en: "Residential units for different groups have been created in a waterside location on the Elbe: Affordable, privately financed and subsidised flats as well as senior citizens' flats are accessed via an inner courtyard, which can be reached via a large flight of steps. The design responds to this mix with the consistent creation of differentiated façades. The design in coloured clinker brick visually unites the neighbourhood.",
    },
    architect:
      "KPW Papay Warncke Vagt Architekten (Gesamtprojekt: Bebauungs- und Nutzungskonzept; Haus 2-5: LP 1-4, Leitdetails; Haus 1-5: LP 5 Warftgeschoss und Tiefgarage); PlanwerkeinsArchitekten (Haus 1-5: LP 5 ab EG)",
    address: "Lola-Rogge-Platz, vor dem Discounter, Hamburg",
    id: 232,
    lat: 53.5376361,
    lng: 10.0125279,
  },
  {
    district: "Oberbillwerder",
    title: { de: "Oberbillwerder", en: "Oberbillwerder" },
    description: {
      de: "Oberbillwerder liegt im Bezirk Bergedorf, rund 16 Minutenvom Hamburger Hauptbahnhof entfernt. Es ist nicht nurHamburgs zweitgrößtes Stadtentwicklungsprojekt, es wirdauch der 105. Stadtteil der Hansestadt - und der nachhaltigste. Seit 2016 laufen die Planungen der IBA Hamburg zurEntwicklung des neuen Stadtteils. In dem Prozess mit verschiedenen Beteiligungsformaten wurde der Entwurf vonADEPT mit Karres en Brands ausgewählt, der nun für die bauliche Realisierung ab Mitte der 2020er-Jahre weiterentwickelt wird.",
      en: "Oberbillwerder is located in the Bergedorf district, around 16 minutes from Hamburg's main railway station. It is not only Hamburg's second largest urban development project, it will also be the 105th district in the Hanseatic city - and the most sustainable. IBA Hamburg has been planning the development of the new district since 2016. In the process with various participation formats, the design by ADEPT with Karres en Brands was selected, which will now be further developed for structural realisation from the mid-2020s",
    },
    architect: "ADEPT und Karres en Brands",
    address: "Nördlich der S-Bahn-Station Allermöhe, Hamburg",
    id: 233,
    lat: 53.4849804,
    lng: 10.1489358,
  },
  {
    district: "Osdorf",
    title: {
      de: "Geschwister-Scholl-Stadtteilschule",
      en: "Sibling Scholl District School",
    },
    description: {
      de: "Die Geschwister-Scholl-Stadtteilschule mit dem Haus derJugend und der Bezirkssporthalle liegt direkt am Glückstädter Weg im Stadtteil Osdorf im Bezirk Altona. Der Baukörper des dreigeschossigen Schulgebäudes fügt sichaus vier Jahrgangsclusterhäusern. Fünf Klassenräume mitGruppenräumen und die Teamstation bilden die jeweiligeigenständigen Jahrgangscluster. Die Mensa und das Forum im Erdgeschoss dienen als Herz der Schule. Die sandfarbige Klinkerfassade vermittelt Ruhe und Geborgenheit.",
      en: "The Geschwister-Scholl-Stadtteilschule with the Haus derJugend and the district sports hall is located directly on Glückstädter Weg in the Osdorf district of Altona. The structure of the three-storey school building is made up of four year group clusters. Five classrooms with group rooms and the team station form the respective year clusters. The canteen and the forum on the ground floor serve as the heart of the school. The sand-coloured clinker brick façade conveys a sense of calm and security.",
    },
    architect:
      "MGF Architekten GmbH, (LP 1-8);mo architekten Ingenieure (LP 8)",
    address: "Haupteingang am Glückstädter Weg 7, Hamburg",
    id: 234,
    lat: 53.5863958,
    lng: 9.8655121,
  },
  {
    district: "Othmarschen",
    title: {
      de: "Ramboll Hamburg Headoffice - neue Arbeitswelt",
      en: "Ramboll Hamburg Head Office - new working world",
    },
    description: {
      de: "Der neue Workspace von Ramboll Deutschland in Hamburgwurde nach den Aspekten neuer Arbeitswelten gestaltet.Ramboll ist ein internationales Ingenieur-, Architektur- undManagementbüro - mit Kompetenz im Bereich neue Energien. Diese Verbindung zu den Elementen Wasser und Luftsowie zu Pflanzen und Bäumen wurde als konzeptionellerTreiber für das architektonische Raumkonzept genutzt. Beider Auswahl der Materialien sowie beim Einrichtungskonzept lag der Fokus auf nachhaltigem Design.",
      en: "The new workspace of Ramboll Germany in Hamburg was designed according to the aspects of new working environments.Ramboll is an international engineering, architecture and management office - with expertise in the field of new energies. This connection to the elements of water and air as well as to plants and trees was used as a conceptual driver for the architectural spatial concept. The choice of materials and the furnishing concept focussed on sustainable design.",
    },
    architect: "PLY Atelier GmbH",
    address: "Jürgen-Töpfer-Straße 48 / Haus 17, Haupteingang, Hamburg",
    id: 235,
    lat: 53.5566821,
    lng: 9.907025599999999,
  },
  {
    district: "Ottensen",
    title: {
      de: "Umbau, Sanierung und Aufstockung eines ehemaligen Fabrikgebäudes",
      en: "Conversion, renovation and extension of a former factory building",
    },
    description: {
      de: "Das im Jahre 1890 als offener Lagerschuppen für eineDampfsägerei errichtete Gebäude wurde zuletzt alsDruckerei genutzt, bevor es lange leer stand. Das Hinterhof-Gebäude liegt in einem Wohn- und Gewerbehofim Herzen von Ottensen. Die neue Nutzung sollte sich indieses Umfeld einfügen, so waren u.a. übersichtlicheGebäudeeinheiten gewünscht. Die dreiseitige Grenzständigkeit des Gebäudes war in Bezug auf natürliche Belichtung und Fluchtwege besonders herausfordernd beidieser Bauaufgabe.",
      en: "Built in 1890 as an open storage shed for a steam sawmill, the building was last used as a print shop before standing empty for a long time. The backyard building is located in a residential and commercial neighbourhood in the heart of Ottensen. The new use was to fit in with this environment, and the building units were to be clearly laid out. The building's three-sided perimeter was particularly challenging in terms of natural lighting and escape routes.",
    },
    architect: "Ulrich Tränkmann Architektur",
    address: "Hohenesch 13, im Hof, Hamburg",
    id: 236,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Stellingen",
    title: {
      de: "Wohngebäude Sportplatzring 5  - 21",
      en: "Residential building Sportplatzring 5 - 21",
    },
    description: {
      de: "Der Wohnkomplex wurde mit zwei kontrastreichen Fassaden geplant. Zur Straßenseite knüpft ein rötlicher Klinkeran die Materialität des angrenzenden Rathauses von Stellingen an und verleiht dem Gebäuderiegel einen monolithischen Charakter - die Gartenfassade ist hell und luftigmit transparent wirkenden Balkonen gestaltet. Der Neubau öffnet sich mit bodentiefen Fenstern zur parkähnlichenLandschaft, während die Gartenseite von der schallabsorbierenden Funktion des Gebäuderiegels profitiert.",
      en: "The residential complex was planned with two contrasting façades. On the street side, a reddish clinker brick echoes the materiality of the neighbouring Stellingen town hall and gives the building block a monolithic character - the garden façade is light and airy with transparent-looking balconies. The new building opens up to the park-like landscape with floor-to-ceiling windows, while the garden side benefits from the sound-absorbing function of the building block.",
    },
    architect: "Gerber Architekten GmbH",
    address: "Sportplatzring / Ecke Basselweg, Hamburg",
    id: 237,
    lat: 53.59253150000001,
    lng: 9.933798099999999,
  },
  {
    district: "St. Georg",
    title: { de: "CAB 20", en: "CAB20" },
    description: {
      de: "Der Entwurf für das deutschlandweit erste Kabinenhotelist in seiner Reduktion auf das Wesentliche an japanischenKapselhotels orientiert. Es bietet 176 jeweils zweifach insich verschachtelte Kabinen als Ein- oder Zweibettzimmer.Die Gestaltung bezieht sich auf die ehemalige Zwischennutzung der Streetartkünstler*innen B20 im vormaligenAutohaus. So haben lokale Streetartkünstler*innen dieWände und Treppenhäuser des Hotels gestaltet.",
      en: "The design for Germany's first cabin hotel is based on Japanese capsule hotels in its reduction to the essentials. It offers 176 cabins, each with two nested rooms for one or two people, and the design refers to the former temporary use of the former car dealership by street artists B20. Local street artists designed the walls and staircases of the hotel.",
    },
    architect:
      "Janiesch Architektur (Innenarchitektur LP 3-8, künstlerische Oberleitung LP 5-8), Clic (LP 2, Entwurf Kojen), Licht01 (LP 3-8),SKAI Architekten (Architektur, LP1-3), A6 Architekten(Architektur LP 5), PVOO Architekten (Architektur LP 6-8)",
    address: "Brennerstrasse 20, Lobby im EG, Hamburg",
    id: 238,
    lat: 53.5552986,
    lng: 10.0147874,
  },
  {
    district: "St. Pauli",
    title: {
      de: "Neubau für das Jung von Matt Headquarter",
      en: "New building for the Jung von Matt headquarters",
    },
    description: {
      de: "Der Neubau verbindet zwei bestehende Gebäude. In einemzentralen Treppenhaus werden die verschiedenen Geschossebenen zusammengeführt. Die Backsteinfassade, als Hommage an den historischen Kontext, schirmt mit Filtermauerwerk im Erdgeschoss den offenen Parkplatz ab. In den Obergeschossen ermöglichen die großzügigen Öffnungen lichtdurchflutete Arbeitswelten. Im Staffelgeschoss befindensind neben einer großen Dachterrasse multifunktionale Räume für Nachwuchstalente.",
      en: "The new building connects two existing buildings. The different storeys are brought together in a central stairwell. The brick façade, as a homage to the historical context, shields the open car park with filter brickwork on the ground floor. On the upper floors, the generous openings allow light-flooded working environments. In addition to a large roof terrace, the staggered storey houses multifunctional rooms for young talent.",
    },
    architect: "Stephen Williams Associates (LP 1-4),KKP Architekten (LP 5)",
    address: "Glashüttenstraße 79, vor dem Haupteingang, Hamburg",
    id: 239,
    lat: 53.5600094,
    lng: 9.9732712,
  },
  {
    district: "Uhlenhorst",
    title: {
      de: "Atelierhaus Hochschule für bildende Künste Hamburg HFBK",
      en: "Atelierhaus University of Fine Arts Hamburg HFBK",
    },
    description: {
      de: "Das Atelierhaus entstand als frei stehender Kubus nebendem Hauptgebäude Fritz Schumachers aus dem Jahr 1913.Das Erdgeschoss beherbergt drei Ausstellungsräume, dieObergeschosse zwölf Ateliers für Studierende. Eine zentraleviergeschossige Halle mit großem Luftraum dient der Erschließung und Kommunikation. Die Klinkerfassade überzieht den Kubus wie ein Gewebe. Die Schichtung der gegenläufig angeordneten, schrägen Fensterleibungen erzeugtein spannungsreiches Bild.",
      en: "The studio building was created as a free-standing cube next to Fritz Schumacher's main building from 1913, with three exhibition rooms on the ground floor and twelve studios for students on the upper floors. A central four-storey hall with a large air space is used for access and communication. The clinker brick façade covers the cube like a fabric. The layering of the opposing, slanted window reveals creates an exciting image.",
    },
    architect: "Winking · Froh Architekten GmbH",
    address:
      "Atelierhaus, Lerchenfeld 2 a,zwischen Neubau und Bestandsbau HFBK, Hamburg",
    id: 240,
    lat: 53.56703,
    lng: 10.0314365,
  },
  {
    district: "Wilhelmsburg",
    title: {
      de: "Umnutzung der Kirche St. Maximilian Kolbe zum Malteser Campus",
      en: "Conversion of the Church of St. Maximilian Kolbe to the Maltese Campus",
    },
    description: {
      de: "Mit dem Kirchbau St. Maximilian Kolbe, dessen spiralförmiger Grundform, der aufgefächerten, ansteigendenDachkonstruktion sowie einer feinen Materialität undDetailierung hat der Architekt Jo Filke Anfang der 1970erJahre ein integrales Raumerlebnis geschaffen. Einen „Einraum“, dessen Qualität von jedem Standpunkt aus verändert wahrgenommen werden kann. Die Umnutzung mitöffentlichen sowie sozialen Funktionen des MalteserOrdens ist eine angemessene Maßnahme zum Erhalt dieses außerordentlichen Baudenkmals.",
      en: "In the early 1970s, architect Jo Filke created an integral spatial experience with the St. Maximilian Kolbe church building, its spiral basic form, the fanned-out, rising roof construction and the fine materiality and detailing. A 'single space' whose quality can be perceived differently from every angle. The conversion with public and social functions of the Order of Malta is an appropriate measure to preserve this extraordinary architectural monument.",
    },
    architect: "LH Architekten (Umnutzung); Jo Filke (Kirche, 1974)",
    address: "Haupteingang Kirchbau, Krieter Straße 9, Hamburg",
    id: 241,
    lat: 53.4984394,
    lng: 10.0136537,
  },
  {
    district: "Winterhude",
    title: {
      de: "Pergolenviertel Baufelder 5 und 6",
      en: "Pergolenviertel building areas 5 and 6",
    },
    description: {
      de: "Die zentralen Baufelder im Pergolenviertel - ein langerRiegel und ein kompakter Block - rahmen den Quartiersplatz und sind im Erdgeschoss öffentlich genutzt: Nebeneiner Kita und einer Tagesförderung entstehen u.a. einQuartierscafé mit Hofladen, eine Fahrradwerkstatt, Atelierflächen und ein Schwimmbad im Untergeschoss. Architektonisch markant ist die Fassadengestaltung, die durchKlinkerornamentik und die namensgebenden Pergolenbzw. Arkaden eine leicht südländisch anmutende Eleganzausstrahlt.",
      en: "The central building plots in the pergola quarter - a long block and a compact block - frame the neighbourhood square and are used by the public on the ground floor: In addition to a day-care centre and a day-care facility, a neighbourhood café with a farm shop, a bicycle workshop, studio space and a swimming pool are being built in the basement. The façade design is architecturally striking, with its clinker ornamentation and the eponymous pergolas and arcades giving it a slightly Mediterranean elegance.Architectural office: coido GmbHGuided tours: Jirka BarsDates: Saturday, 25 June, 2.10 pm, 3.20 pm, 4.40 pmMeeting point: Winterlindenweg 32, in front of the 'Café",
    },
    architect: "coido GmbH",
    address: "Winterlindenweg 32, vor dem Café, Hamburg",
    id: 242,
    lat: 53.60407540000001,
    lng: 10.0308881,
  },
  {
    district: "Hammerbrook",
    title: {
      de: "VTG Center und Wohnhaus am Nagelsweg (1996)",
      en: "VTG Center and residential building on Nagelsweg (1996)",
    },
    description: {
      de: "In der von Gewerbe- und Bürobauten geprägten City Südentstand ein Quartier mit einer Nutzungsmischung aus Wohnen und Arbeiten. Das Bürogebäude, Firmensitz des Transportunternehmens VTG, und das Wohngebäude ergänzen denBestand zu einem neuen Stadtbaustein. Die Baukörper bilden ein Ensemble um einen halböffentlichen Garten, der sichmit einem repräsentativen Vorplatz zum Nagelsweg öffnet.Auf dem dreieckigen Grundstückszuschnitt schiebt sich eineprägnante Figur in den Straßenraum.",
      en: "In City Süd, which is characterised by commercial and office buildings, a district with a mixture of residential and working uses has been created. The office building, headquarters of the transport company VTG, and the residential building complement the existing buildings to form a new urban building block. The buildings form an ensemble around a semi-public garden, which opens up to Nagelsweg with a prestigious forecourt, while the triangular shape of the plot creates a striking figure in the street space.",
    },
    architect:
      "Hilde Léon & Konrad Wohlhage,heute léonwohlhage Gesellschaft von Architekten mbH",
    address:
      "vor dem Gebäude, Nagelsweg / Ecke AmsinckstraßeHinweis: Anmeldung über www.tda-hamburg.de empfohlen, Hamburg",
    id: 243,
    lat: 53.5476135,
    lng: 10.0190677,
  },
  {
    district: "Ottensen",
    title: {
      de: "Restaurant Eisenstein (1989)",
      en: "Restaurant Eisenstein (1989)",
    },
    description: {
      de: "In der ehemaligen Schiffschraubenfabrik Zeise in HamburgOttensen befinden sich die Räume des Restaurants Eisenstein. Im Vordergrund der Umbaumaßnahme stand, eineVerbindung zwischen Alt und Neu herzustellen, schroffer Industriecharakter kombiniert mit zeitloser Architektur. Dafür wurde die vorhandene Baukonstruktion der Hallen instandgesetzt und durch zeitlose Elemente ergänzt. In Stahlrahmen gefasste Mauerwerksausschnitte sowie die mächtige Schornsteinanlage machen die Geschichte des Gebäudes sichtbar.",
      en: "The Eisenstein restaurant is located in the former Zeise propeller factory in Hamburg-Ottensen. The focus of the renovation project was to create a connection between old and new, combining a rugged industrial character with timeless architecture. To achieve this, the existing building structure of the halls was refurbished and supplemented with timeless elements. Masonry cut-outs set in steel frames and the mighty chimney system make the history of the building visible.",
    },
    architect: "Dinse Feest Zurl, heute DFZ Architekten",
    address:
      "vor dem Eingang des Außenbereichs des Eisensteins,Friedensallee 9, Hamburg",
    id: 244,
    lat: 53.5544162,
    lng: 9.927119099999999,
  },
  {
    district: "Winterhude",
    title: {
      de: "Erweiterung Jarrestadt (1994)",
      en: "Expansion of Jarrestadt (1994)",
    },
    description: {
      de: "Die Wohnbebauung Jarrestraße ist das Ergebnis eines städtebaulichen Wettbewerbs von 1982. Ziel war die Ergänzung derhistorischen Jarrestadt. Das städtebauliche Konzept geht aufden Rhythmus der gegenüberliegenden Blöcke und Freiräumeder Jarrestadt ein. Die dort formulierten Räume werden verlängert und an den parkartigen Freiraum am Osterbekkanalgeführt. Die Jarrestadt ist die Verbindung vom Goldbekkanalzum Osterbekkanal. Eine neue Brücke führt über Letzteren.",
      en: "The Jarrestraße residential development is the result of an urban planning competition held in 1982. The aim was to complement the historic Jarrestadt. The urban development concept responds to the rhythm of the blocks and open spaces of Jarrestadt opposite. The spaces formulated there are extended and led to the park-like open space on the Osterbek Canal. Jarrestadt is the connection between the Goldbekkanal and the Osterbekkanal. A new bridge leads over the latter.",
    },
    address: "Jarrestraße 32, Hamburg",
    id: 245,
    lat: 53.5845998,
    lng: 10.0241006,
  },
  {
    title: { de: "Burstah Ensemble ", en: "Burstah Ensemble" },
    description: {
      de: "Das städtebauliche Entwicklungsprogramm „Innenstadtkonzept Hamburg 2010“ sieht im Umfeld der Nikolaikirche eine Neuordnung des Areals in Anlehnung an die kriegszerstörte, gründerzeitliche Bebauungsstruktur vor. Auf Grundlage des Wettbewerbsentwurfs „Großer Burstah 3, Neue Burg 1“ von BIWERMAU Architekten wurden dort zwei Büro- und Geschäftshäuser realisiert, die die stadtbildprägenden Typologien der Hamburger Kontorhäuser fortschreiben.",
      en: "The urban development programme 'City Centre Concept Hamburg 2010' envisages a reorganisation of the area around the Nikolai Church based on the war-damaged, Wilhelminian-style building structure. Based on the competition design 'Großer Burstah 3, Neue Burg 1' by BIWERMAU Architekten, two office and commercial buildings were realised there, which continue the typologies of Hamburg's office buildings that characterise the cityscape.",
    },
    district: "Altstadt",
    address: "Bohnenstraße, Hahntrapp, 20457 Hamburg",
    architect:
      "BIWERMAU Architekten BDA (Wettbewerb 1. Preis, LP 1-4 + Leitdetails),  Tchoban Voss Architekten (LP 5), www.tchobanvoss.de",
    id: 246,
    lat: 53.5483993,
    lng: 9.9902588,
  },
  {
    title: {
      de: "Carlsen Verlagscampus",
      en: "Carlsen publishing campus",
    },
    description: {
      de: "Wo die Firma Gutmann noch bis 1980 Sandstrahlgebläse herstellte, entstand im Mai 2021 eine neue Bürowelt für den Kinder- und Jugendbuchverlag Carlsen. Diese neue Fläche in Ottensen ist Teil des zukünftigen Verlags-Campus, der sich derzeit auf dem Areal in der Völckersstraße 20 entwickelt. Sie ergänzt das dortige Verlagshaus des Unternehmens um einen weiteren, größeren Standort in direkter Nachbarschaft.  ",
      en: "Where the Gutmann company manufactured sandblasting blowers until 1980, a new office world was created in May 2021 for the children's and young adult book publisher Carlsen. This new space in Ottensen is part of the future publishing campus that is currently being developed on the site at Völckersstraße 20. It complements the company's publishing house there with another, larger location in the immediate neighbourhood. \n ",
    },
    district: "Ottensen",
    address: "Völckerstraße 20",
    architect:
      "ARGE de Winder Architekten / Stern Architekten,  www.stern-architekten.de",
    id: 247,
    lat: 48.1907603,
    lng: 11.6117976,
  },
  {
    title: {
      de: "Gemeinsam Wohnen im Grünen in Alt Osdorf",
      en: "Living together in the countryside in Alt Osdorf",
    },
    description: {
      de: "Die dreigeschossige Neubauzeile mit Staffel (16 Wohneinheiten) im vorstädtischen Stadtteil Osdorf wurde nachhaltig geplant: Die großzügigen aufgeständerten Freisitze sind ebenso wie die Fassade aus hochwertigen Tonschindeln, zu 50 % aus recycelten Klinkern gefertigt, rückbaubar. Die Schindeln wurden speziell für die vorgehängte hinterlüftete Fassadenkonstruktion entwickelt, um Materialverluste zu minimieren und eine zeitgemäße, innovative Alternative zum umweltschädlichen Wärmedämmverbundsystem zu realisieren.",
      en: "The three-storey row of new buildings with staggered storeys (16 residential units) in the suburban district of Osdorf was planned sustainably: The spacious elevated outdoor seating areas can be dismantled, as can the façade made of high-quality clay shingles, 50% of which are made from recycled clinker bricks. The shingles were specially developed for the rear-ventilated façade construction in order to minimise material losses and create a contemporary, innovative alternative to the environmentally harmful external thermal insulation composite system",
    },
    district: "Osdorf",
    address: "Jochim-Sahling-Weg 13, 22549 Hamburg",
    architect: "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler",
    id: 248,
    lat: 53.5747282,
    lng: 9.8479692,
  },
  {
    title: {
      de: "Geschäftshaus am Lohsepark",
      en: "Commercial building at Lohsepark",
    },
    description: {
      de: "Gelegen am Hamburger Lohsepark, bildet der L-förmige Baukörper städtebaulich eine Einheit mit dem angrenzenden denkmalgeschützten Bestand. Der Gebäudekörper erscheint zweigeteilt und staffelt sich durch Dachterrassen zu den Nachbarn hin ab. Der Sockel des Gebäudes ist mit grün und schwarz glasierten Klinkern gestaltet. Die mit rotem Klinker gemauerte Fassade der Obergeschosse lässt das Gebäude je nach Licht- und Witterungsverhältnissen unterschiedlich erscheinen und verleiht ihm eine nahezu textile Leichtigkeit.",
      en: "Situated on Hamburg's Lohsepark, the L-shaped building forms an urban unit with the neighbouring listed building. The building appears to be divided into two parts and is staggered towards the neighbours by roof terraces. The base of the building is designed with green and black glazed clinker bricks. The red clinker brick façade of the upper storeys gives the building a different appearance depending on the light and weather conditions and lends it an almost textile lightness.",
    },
    district: "HafenCity",
    address: "Am Lohsepark 4-6, 20457 Hamburg",
    architect: "Wandel Lorch Götze Wach",
    id: 249,
    lat: 53.5431993,
    lng: 10.0037716,
  },
  {
    title: {
      de: "Wohnen und Studieren auf der „Schanze“",
      en: "Living and studying on the “Schanze”",
    },
    description: {
      de: "Sieben drei- bis siebengeschossige Wohngebäude (113 Eigentumswohnungen und Studierendenwohnanlage) schließen den Blockrand Schulterblatt /Amandastraße. Nach Norden zum angrenzenden Lindenpark komplementiert ein dreigeschossiger Riegel mit Staffelgeschoss und einem fünfgeschossigen Solitär das Quartier um einen neuen Innenhof und schafft so privaten Freiraum für die Bewohner*innen. Das Quartier zeichnet sich durch eine hohe urbane Dichte (Geschossflächenzahl: 3,4) und hervorragende Wohn- und Freiraumqualitäten aus.",
      en: "Seven three- to seven-storey residential buildings (113 owner-occupied flats and a student residence) close off the Schulterblatt/Amandastrasse perimeter block. To the north towards the neighbouring Lindenpark, a three-storey block with a staggered storey and a five-storey solitary building completes the neighbourhood around a new inner courtyard, creating private open space for the residents. The neighbourhood is characterised by a high urban density (floor area ratio: 3.4) and outstanding residential and open space qualities.",
    },
    district: "Schanzenviertel",
    address: "Schulterblatt 120 / Amandastraße 74, 20357 Hamburg",
    architect: "LRW Architekten und Stadtplaner Loosen, Rüschoff und Winkler",
    id: 250,
    lat: 53.56514,
    lng: 9.95955,
  },
  {
    title: {
      de: "Barrierefreies Hamburger Rathaus",
      en: "Barrier-free Hamburg town hall",
    },
    description: {
      de: "Mit dem Aufzug ist ein Meilenstein für die Barrierefreiheit im Hamburger Rathaus erreicht worden. Jetzt können mobilitätseingeschränkte Personen und Menschen mit Behinderung alle Ebenen vom Keller bis zum Dachgeschoss erreichen. Damit sind die Besucher*innentribüne des Plenarsaals, der Festsaal mit Galerie sowie Besprechungsräume und die Abgeordnet*innenbüros für alle Menschen, unabhängig von ihren Mobilitätseinschränkungen, selbstständig und selbstbestimmt ohne fremde Hilfe barrierefrei zugänglich.",
      en: "The lift is a milestone for accessibility in Hamburg City Hall. People with limited mobility and people with disabilities can now reach all levels from the basement to the top floor. This means that the visitors' gallery in the plenary chamber, the ballroom with gallery, meeting rooms and MPs' offices are now accessible to all people, regardless of their mobility impairments, independently and self-determinedly without assistance",
    },
    district: "Altstadt",
    address: "Rathausmarkt 1, 20095 Hamburg",
    architect: "rimpf Architektur & Generalplanung",
    id: 251,
    lat: 53.55048480000001,
    lng: 9.992437299999999,
  },
  {
    title: {
      de: "Bauspielhaus Hexenberg ",
      en: "Hexenberg construction playhouse ",
    },
    description: {
      de: "Der Massivholzbau wurde durch das Bezirksamt Altona und das Amt für Bauordnung und Hochbau 44 realisiert. Er beherbergt die Gruppenräume des Bauspielplatzes, in denen Kinder unter Betreuung spielen und werken können. Die Geometrie des Baukörpers verleiht diesem einen kindgerechten Maßstab. Die Baumaterialien spiegeln die Nutzung wider. Die Massivholzwände und Dächer sind im Innenraum sichtbar. Die Lärchenbretter für die Fassade wurden von der Försterei Klövensteen mit Holz aus dem bezirkseigenen Forst hergestellt.",
      en: "The solid timber construction was realised by the Altona District Office and the Office for Building Regulations and Building Construction 44. It houses the group rooms of the construction playground, where children can play and work under supervision. The geometry of the building gives it a child-friendly scale. The building materials reflect the utilisation. The solid wood walls and roofs are visible in the interior. The larch boards for the façade were produced by the Klövensteen forestry company using wood from the district's own forest.",
    },
    district: "Altona",
    address: "Königstraße 8a, 22767 Hamburg",
    architect:
      "Architekturbüro Hormann (LP 1-8),  Architekturbüro Moedebeck (LP 8), www.moedebeck.netJan Hormann (Architekturbüro Hormann), Gilbert Moedebeck (Architekturbüro Moedebeck), Johannes Hüttermann (Klett Ingenieur), Bernd Germer (GS-Ingenieure Germer & Petersen), Daniel Wickersheim (Wickersheim Mannsfeld), Helge Fischer, Michael Prehn",
    id: 252,
    lat: 53.5500682,
    lng: 9.9531102,
  },
  {
    title: {
      de: "Revitalisierung Bürogebäude Rosenstraße",
      en: "Revitalization of the Rosenstrasse office building",
    },
    description: {
      de: "Das in den Jahren 1993 und 1996 errichtete Büro- und Geschäftshaus in der Rosenstraße in Hamburg wurde einer umfangreichen Revitalisierung unterzogen, die neben einer BREEAM-Zertifizierung für die Lebenszyklusphasen von Immobilien zum Ziel hatte, eine Multi-Tenant Vermietung mit zeitgemäßen Arbeitsplatzformen von Open Space bis Single Workplaces zu ermöglichen - also eine Art \"Multispace\" zu realisieren, der die Mitarbeitenden in ihren Arbeitsabläufen, aber auch in ihrem Büro- und Lebensalltag unterstützt.",
      en: "The office and commercial building in Rosenstrasse in Hamburg, which was built in 1993 and 1996, underwent extensive revitalisation, which, in addition to BREEAM certification for the life cycle phases of real estate, aimed to enable multi-tenant letting with contemporary workplace forms ranging from open spaces to single workplaces - in other words, to create a kind of 'multi-space' that supports employees in their work processes, but also in their everyday office and lif",
    },
    district: "Altstadt",
    address: "Rosenstraße 9-11, 20095 Hamburg",
    architect: "pbr Planungsbüro Rohling AG",
    id: 253,
    lat: 53.55305269999999,
    lng: 10.0019773,
  },
  {
    title: {
      de: "Vom Kirdorfhaus zum Ballinhof: Umbau, Erweiterung und Sanierung eines historischen Kontorhauses an der Hamburger Binnenalster",
      en: "From Kirdorfhaus to Ballinhof: Conversion, expansion and renovation of a historic office building on Hamburg's Inner Alster",
    },
    description: {
      de: "Von der Alster bis zur Ferdinandstraße erstreckt sich seit Fertigstellung im Jahr 1921 das sechsgeschossige Kontorhaus. Die äußerst widersprüchlichen Fassaden aus Sandstein, Keramik und Stuck wurden mit großer Zurückhaltung saniert und teilweise mit nachgebrannter Keramik neu aufgebaut. Die originale Kupferdachdeckung wurde aufgearbeitet und gerettet. Die historischen, nach außen vortretenden Vitrinen wurden als Stahlkonstruktion neu erbaut.",
      en: "Since its completion in 1921, the six-storey Kontorhaus has stretched from the Alster to Ferdinandstraße. The extremely contradictory façades of sandstone, ceramics and stucco were renovated with great restraint and partially rebuilt with re-fired ceramics. The original copper roof covering was refurbished and saved. The historic showcases projecting outwards were rebuilt as a steel structure.",
    },
    district: "Altstadt",
    address: "Ballindamm 17, 20095 Hamburg",
    architect: "HS-Architekten PartGmbB Schmidt Limmroth Funck Klapsing",
    id: 254,
    lat: 53.5538465,
    lng: 9.9984348,
  },
  {
    title: {
      de: "Tischlerei Møbelwerft - Holz auf Holz",
      en: "Carpentry Møbelwerft - wood on wood",
    },
    description: {
      de: "Planungsbüro und Showroom sollten ein Gesicht bekommen: Wenn Kund*innen zur Møbelwerft kommen, sehen sie direkt, was diese Tischlerei alles kann. Deren handwerkliche Exzellenz in der Arbeit mit Holz spiegelt sich vom Empfang über den Konferenzraum bis weiter in den Materialraum und den Toilettenbereich wider.  ",
      en: "The planning office and showroom should have a face: When customers come to Møbelwerft, they immediately see what this joinery can do. Their excellent craftsmanship in working with wood is reflected in the reception area, the conference room, the materials room and the toilet area.  ",
    },
    district: "Bahrenfeld",
    address: "Boschstraße 16, 22761 Hamburg",
    architect: "",
    id: 255,
    lat: 53.5673718,
    lng: 9.9141628,
  },
  {
    title: { de: "Montblanc Haus", en: "Mont Blanc House" },
    description: {
      de: "Das Montblanc Haus ist ein neues Ausstellungsgebäude, das der Kunst des Schreibens gewidmet ist. Das Projekt ist als 100 Meter langes Volumen konzipiert, das die historische Form der Hülle eines Schreibgeräts aufgreift. Eine komplexe Abfolge von Räumen auf drei Ebenen ist um ein einzigartiges Foyer herum entwickelt. Das Gebäude mit einer Nutzfläche von 3.600 m² beherbergt eine Dauerausstellung, temporäre Ausstellungsräume, ein Archiv, eine Boutique, ein Schreib-Atelier, Meetingräume und ein Café.",
      en: "The Montblanc House is a new exhibition building dedicated to the art of writing. The project is conceived as a 100 metre long volume that takes up the historical shape of the casing of a writing instrument. A complex sequence of rooms on three levels is developed around a unique foyer. The building, with a usable area of 3,600 m², houses a permanent exhibition, temporary exhibition spaces, an archive, a boutique, a writing studio, meeting rooms and a café.",
    },
    district: "Lurup",
    address: "Hellgrundweg, 98, 22525 Hamburg",
    architect: "Nieto Sobejano Arquitectos GmbH, Plan Forward GmbH",
    id: 256,
    lat: 53.5934638,
    lng: 9.8991329,
  },
  {
    title: {
      de: "Umnutzung und Erweiterung eines Luftschutzbunkers zu Mikroappartements",
      en: "Conversion and expansion of an air raid shelter into micro apartments",
    },
    description: {
      de: "Der unter Denkmalschutz stehende Bunker aus den 1940er Jahren wurde zu Mikroappartements sowie zwei Gewerbeeinheiten umgebaut. Die ebenfalls unter Denkmalschutz stehenden Geschossdecken und Treppenhäuser wurden erhalten und Relikte aus der aktiven Bunkerzeit in die Planung integriert. Die Belichtung der Bunkerappartements erfolgt über zwei Lichtschlitze in der Außenfassade. Historische und neue Elemente bilden dabei einen harten Kontrast. Ergänzt wurde der Bunker durch einen rückwertigen Anbau.",
      en: "The listed bunker from the 1940s was converted into micro-apartments and two commercial units. The ceilings and stairwells, which are also listed, were preserved and relics from the active bunker period were integrated into the planning. The bunker flats are lit via two light slits in the outer façade. Historical and new elements form a stark contrast. The bunker was supplemented by an extension at the rear.",
    },
    district: "Barmbek-Süd",
    address: "Habichtstraße 37",
    architect:
      "Doruk Architekten (LP 1-4), AG horizont Architekten (LP 3-6 und KOL 8), Design Haus Medy (LP 7), TBR Architekten (LP 8)",
    id: 257,
    lat: 53.5935184,
    lng: 10.052142,
  },
  {
    title: {
      de: "Wohnsiedlung Julius-Vosseler-Straße",
      en: "Julius-Vosseler-Straße housing estate",
    },
    description: {
      de: "Als Siegerentwurf aus einem städtebaulichen Wettbewerb hervorgegangen, bietet das neue Quartier auf dem ehemaligen Gelände eines Kleingartenvereins Wohnraum für über 600 Menschen. Der großräumige Wohnhof, der sich typologisch an den Mietsblöcken aus der Zeit der Weimarer Republik orientiert, schafft mit seiner parkartigen Weite und den neu gepflanzten Großbäumen eine außerordentliche Aufenthaltsqualität. Die Mischung aus freifinanzierten und geförderten Wohnungen ist zukunftsweisend für urbanes Wohnen in Hamburg.",
      en: "The winning design from an urban planning competition, the new neighbourhood on the former site of an allotment garden association offers living space for over 600 people. The spacious residential courtyard, which is typologically orientated towards the apartment blocks from the Weimar Republic era, creates an extraordinary quality of stay with its park-like expanse and newly planted large trees. The mix of privately financed and subsidised flats is a pioneering example of urban living in Hamburg",
    },
    district: "Lokstedt",
    address: "Julius-Vosseler-Straße 106-114, 22527 Hamburg",
    architect: "SEHW Architekten PartG mbB",
    id: 258,
    lat: 53.5895136,
    lng: 9.947235,
  },
  {
    title: { de: "Alsterkant", en: "Alsterkant" },
    description: {
      de: "Das Gebäudeensemble ist eine umschließende Blockrandbebauung unter Berücksichtigung der vorgegebenen Sichtachse. Durch ein Öffnen des Blockrands zur Alster ist der Durchblick und der Bezug zum Wasser gegeben. Um neben dem Erhalt der schützenswerten Bäume den wichtigen Bezug zu dem gegenüberliegenden Schumacher-Bau zu schaffen, tritt das Volumen auf der Nordseite in Teilen zurück.",
      en: "The building ensemble is an enclosing perimeter block development that takes into account the given visual axis. By opening up the edge of the block towards the Alster, the view and the relationship to the water is given. In order to create an important relationship to the Schumacher building opposite, in addition to preserving the trees worthy of protection, the volume on the north side recedes in parts",
    },
    district: "Ohlsdorf",
    address: "Im Grünen Grunde / Am Hasenberge, 22337 Hamburg",
    architect: "bof architekten (LP 1-5)",
    id: 259,
    lat: 53.6224924,
    lng: 10.031251,
  },
  {
    title: {
      de: "Info Pavillon zum Hamburger Architektur Sommer 2023",
      en: "Info pavilion for the Hamburg Architecture Summer 2023",
    },
    description: {
      de: "Zirkularität gilt als einer der Schlüssel zum ressourcenschonenden Bauen. Zukünftig gilt es Gebäude so zu konstruieren, dass die Nutzung der darin verbauten Materialien über die Lebensdauer der Gebäude hinaus gewährleistet bleibt. Verbindungen und Fügungen von Baumaterialien müssen neu und reversibel gedacht werden. Welche Materialstrategien kommen zum Einsatz? Am Beispiel des temporären Pavillons soll kreislaufgerechtes Bauen im Zeitraffer und Modellversuch anschaulich und nachvollziehbar werden.",
      en: "Circularity is one of the keys to resource-efficient construction. In future, buildings will have to be constructed in such a way that the use of the materials used in them is guaranteed beyond the service life of the building. Connections and joints between building materials must be rethought in a new and reversible way. Which material strategies are used? Using the example of the temporary pavilion, the aim is to illustrate and understand circular construction in a time-lapse and model experiment.",
    },
    district: "HafenCity",
    address: "Magellan-Terassen",
    architect: "",
    id: 260,
    lat: 53.5423053,
    lng: 9.9929653,
  },
  {
    title: {
      de: "Kommunales Kultur- und Begegnungszentrum KörberHaus",
      en: "Municipal cultural and meeting center KörberHaus",
    },
    description: {
      de: "Mitten in Bergdorf befindet sich das neue KörberHaus: ein offenes Haus mit Theater, Bibliothek, Café und multifunktionalen Veranstaltungsräumen für alle. Das Herzstück des Hauses, das lichtdurchflutete Foyer bietet den Besucher*innen einen schnellen Überblick über alle drei Geschosse. Lamellen aus Kupfer mit der typischen warmrötlichen Farbigkeit umhüllen das Gebäude und verbinden den Neubau mit der umgebenden Backsteinarchitektur. Über dem Wasser schwebende Terrassen bieten Ruheorte im Freien.",
      en: "The new KörberHaus is located in the middle of Bergdorf: an open house with a theatre, library, café and multifunctional event rooms for everyone. The centrepiece of the building, the light-flooded foyer, offers visitors a quick overview of all three floors. Copper slats with the typical warm reddish colouring envelop the building and connect the new building with the surrounding brick architecture. Terraces hovering over the water offer places to relax outdoors.",
    },
    district: "Bergedorf",
    address: "Holzhude 1, 21029 Hamburg-Bergedorf",
    architect:
      "MGF Architekten GmbH (LP 1-4, Wettbewerb 2017 1.Preis),  Schaub und Partner (LP 5), www.schaub-architekten.de; mo architekten und ingenieure (Lp 6-9), www.mo-architekten.de",
    id: 261,
    lat: 53.4871297,
    lng: 10.2087974,
  },
  {
    title: {
      de: "ZINNERGIE - eine urbane Biogasanlage ",
      en: "ZINNERGIE - an urban biogas plant",
    },
    description: {
      de: "ZINNERGIE erforscht das Potenzial zirkulärer Konzepte durch den Bau einer kleinen urbanen Biogasanlage, die ausschließlich aus wiederverwendeten Materialien besteht. Entwickelt wurde eine robuste Struktur, die die Infrastruktur der Biogasanlage aufnimmt und darüber hinaus ausstellt. Ein großes Dach schützt vor Regen und definiert das Gesicht zur öffentlichen Straße. Die Offenheit der Struktur lädt die Menschen ein einzutreten. Der Platz davor wird aktiviert und in einen Ort des öffentlichen Lebens verwandelt.",
      en: "ZINNERGIE explores the potential of circular concepts through the construction of a small urban biogas plant made exclusively from recycled materials. A robust structure was developed that accommodates the infrastructure of the biogas plant and also exhibits it. A large roof protects against rain and defines the face to the public street. The openness of the structure invites people to enter. The square in front of it is activated and transformed into a place of public life.",
    },
    district: "Wilhelmsburg",
    address: "Am Veringhof 7",
    architect: "",
    id: 262,
    lat: 53.5131935,
    lng: 9.984465,
  },
  {
    title: {
      de: "Baugemeinschaft „Tor zur Welt“",
      en: "Building community “Gate to the World”",
    },
    description: {
      de: "Für die Baugemeinschaft „Tor zur Welt“ wurde in der östlichen HafenCity am Eingang zum Quartier Baakenhafen eine achtgeschossige Wohnbebauung in Holzhybridbauweise mit 29 Wohneinheiten errichtet. Zielsetzung bei der Grundrissfindung war, eine möglichst robuste Grundstruktur zu schaffen, die in der Nutzung und bei einer möglichen späteren Umnutzung maximale Variabilität ermöglicht. Neben Aspekten der Nachhaltigkeit wurde durch ein regelmäßiges Grundrisssystem eine hohe Kosteneffizienz sichergestellt.\n ",
      en: "An eight-storey residential development in timber hybrid construction with 29 residential units was built for the 'Tor zur Welt' building community at the entrance to the Baakenhafen neighbourhood in eastern HafenCity. The aim of the floor plan was to create a basic structure that is as robust as possible and allows maximum variability in terms of use and possible subsequent conversion. In addition to sustainability aspects, a regular floor plan system ensured a high level of cost efficiency.\n ",
    },
    district: "HafenCity",
    address: "Baakenallee 8-10, 20457 Hamburg",
    architect: "Kaden+Lager (heute ",
    id: 263,
    lat: 53.5377665,
    lng: 10.0101443,
  },
  {
    title: {
      de: "Hammerbrooklyn Digital Pavillon",
      en: "Hammerbrooklyn Digital Pavilion",
    },
    description: {
      de: "Translozierung eines Expo Pavillons von Mailand nach Hamburg: Das ursprüngliche Bauwerk des Architekten James Biber (NY) musste an die deutschen Bauvorschriften angepasst werden und bildet das Initialgebäude der digitalen Transformation des Großmarktgeländes. Spine Architects nahmen im Inneren räumliche Modifikationen für die neuen Nutzungen vor, ertüchtigte die thermische Hülle, errichtete die unteren beiden Ebenen in massiver, feuerbeständiger Stahlbetonbauweise und entwickelte drei neue Stahlbetontreppenhäuser.",
      en: "Relocation of an Expo pavilion from Milan to Hamburg: The original building by architect James Biber (NY) had to be adapted to German building regulations and forms the initial building for the digital transformation of the wholesale market site. Spine Architects made spatial modifications to the interior for the new uses, upgraded the thermal envelope, built the lower two levels in solid, fire-resistant reinforced concrete construction and developed three new reinforced concrete stairwells.",
    },
    district: "Hammerbrook",
    address: "Stadtdeich 2-4, 20097 Hamburg",
    architect:
      "Biber Architects (ursprünglicher Expo Pavillon Expo Mailand 2015),  Spine Architects GmbH (LP 5-7, künstlerische Oberbauleitung und Mieterausbauplanung), www.spine-architects.com",
    id: 264,
    lat: 53.545159,
    lng: 10.0085024,
  },
  {
    title: {
      de: "Lofthouse Stahlwiete 20",
      en: "Lofthouse Stahlwiete 20",
    },
    description: {
      de: "Das Grundstück befindet sich in Bahrenfeld nahe des beliebten Stadtteils Ottensen. In dem ehemals von Industrie geprägten Gebiet hat sich inzwischen ein lebendiges Miteinander von Gewerbe und Wohnen entwickelt. Im Innenhof des Grundstücks befindet sich ein unter Denkmalschutz stehendes Fabrikgebäude. Mit dem Neubau wird die Lücke in der Blockrandbebauung geschlossen. Gleichzeitig bleibt die Sichtverbindung durch den großzügigen zweigeschossigen Durchgang in den Innenhof und zum historische Fabrikgebäude bestehen.",
      en: "The property is located in Bahrenfeld, close to the popular Ottensen neighbourhood. In the area, which was once characterised by industry, a lively mix of commercial and residential areas has now developed. A listed factory building is located in the inner courtyard of the property. The new building will close the gap in the perimeter block development. At the same time, the visual connection through the spacious two-storey passageway into the inner courtyard and to the historic factory building will be maintained.",
    },
    district: "Bahrenfeld",
    address: "Stahltwiete 20, 22761 Hamburg",
    architect: "Heitmann Montufar Architekten (LP 1-5)",
    id: 265,
    lat: 53.5620497,
    lng: 9.9266474,
  },
  {
    title: {
      de: "Neubau für \"Der Player - Eat. Drink. Dance. Work\"",
      en: "New building for The Player - Eat. Drink. Dance. Work",
    },
    description: {
      de: "Ottensen ist ein Stadtteil mit vielen historischen Loftgebäuden. Der „Player“ ist ein Businessclub als kreativem Knotenpunkt mit Gastronomie-, Büro und Freizeitflächen mit ganzheitlichem Ansatz. Der Ziegelstein über dem Cortenstahl-Sockel wurde aus dem Rückbau von historischer Bausubstanz gewonnen. Die Fenster erinnern in Material und Proportion an ein Loftgebäude. Die Haupterschließung erfolgt über eine außenliegende Stahltreppe im Hinterhof, wie bei vielen Industriegebäuden aus dem 19. Jahrhundert üblich.",
      en: "Ottensen is a neighbourhood with many historic loft buildings. The 'Player' is a business club as a creative hub with catering, office and leisure areas with a holistic approach. The brick above the Corten steel base was obtained from the demolition of historic buildings. The material and proportions of the windows are reminiscent of a loft building. The main access is via an external steel staircase in the rear courtyard, as is common in many industrial buildings from the 19th century.",
    },
    district: "Ottensen",
    address: "Bahrenfelder Straße 322, 22765 Hamburg",
    architect:
      "Stephen Willams Associates (Architektur LP 1-4 und Innenarchitektur),  Aumann Katzsch Architekten (Architektur LP 5-8) www.au-kat.de",
    id: 266,
    lat: 53.5590103,
    lng: 9.928253699999999,
  },
  {
    title: { de: "Pergolenviertel", en: "Pergolas Quarter" },
    description: {
      de: "Das Pergolenviertel beschreibt den „Block im Grünen“ in der urbanen Umgebung zwischen der Hamburger City Nord und Barmbek. Der Entwurf basiert auf einem klaren Entwurfsraster, welches sich sowohl in der äußeren Fassadengestaltung als auch in der inneren Struktur des Baukörpers wiederfindet. Das städtebauliche Prinzip wird hier zum maßstabsübergreifenden Entwurfsthema.",
      en: "The pergola neighbourhood describes the 'block in the green' in the urban environment between Hamburg City North and Barmbek. The design is based on a clear design grid, which is reflected both in the external façade design and in the internal structure of the building. The urban planning principle becomes a cross-scale design theme here.",
    },
    district: "Winterhude",
    address: "Feldahornweg, 22303 Hamburg",
    architect: "blrm Architekt*innen GmbH",
    id: 267,
    lat: 53.5980061,
    lng: 10.034,
  },
  {
    title: {
      de: "Sanierung und Erweiterung Kulturhaus Eidelstedt",
      en: "Renovation and expansion of the Eidelstedt cultural center",
    },
    description: {
      de: "Die Sanierung und Erweiterung des Kulturhauses Eidelstedt erfolgte nach den Plänen der Preisträger eines europaweit ausgeschriebenen Wettbewerbs. Durch die Auflösung des Baukörpers mithilfe einer großflächigen Glasfassade als Basis sowie durch einen Rücksprung, schwebt das Gebäude scheinbar über dem Platz und belebt diesen durch die hier vorgesehene Nutzung als Bücherei. Eine weiße Haut aus horizontalen, ungleichmäßig gegliederten Fassadenprofilen zitiert das früher vorhandene Sichtmauerwerk des Ursprungbaus. ",
      en: "The refurbishment and extension of the Kulturhaus Eidelstedt was carried out according to the plans of the winners of a Europe-wide competition. \nBy breaking up the structure with a large glass façade as a base and a recess, the building appears to float above the square and enlivens it with its intended use as a library. A white skin made of horizontal, unevenly structured façade profiles echoes the exposed brickwork of the original building.\n ",
    },
    district: "Eidelstedt",
    address: "Alte Elbgaustraße 12, 22523 Hamburg",
    architect: "acollage. architektur urbanistik",
    id: 268,
    lat: 53.60740999999999,
    lng: 9.9031579,
  },
  {
    title: {
      de: "Neubau Wohnheim Wasserschutzpolizei-Schule",
      en: "New residential building for water police school",
    },
    description: {
      de: "Der trapezförmige Grundriss des viergeschossigen Gebäudes mit 18 Zimmern und Lehrräumen resultiert aus dem Grundstückszuschnitt. Firstlinie und Traufkante verlaufen straßenseitig parallel zum Worthdamm, sodass eine ruhige Westansicht entsteht. Mit bodentiefen, schlanken Fensteröffnungen und einer schnörkellosen Backsteinästhetik nimmt der Bau die Materialität des unter Denkmalschutz stehenden Hauptgebäudes auf und ist zugleich modernes hanseatisches Understatement.",
      en: "The trapezoidal floor plan of the four-storey building with 18 rooms and classrooms results from the layout of the plot. The ridge line and eaves edge run parallel to Worthdamm on the street side, creating a calm western view. With floor-to-ceiling, slender window openings and a no-frills brick aesthetic, the building picks up on the materiality of the listed main building and is at the same time a modern Hanseatic understatement.",
    },
    district: "Veddel",
    address: "Veddeler Damm 48, 20457 Hamburg",
    architect: "prasch buken partner architekten bda (LP 1-3, Freiraumplanung)",
    id: 269,
    lat: 53.5282515,
    lng: 9.9820045,
  },
  {
    title: {
      de: "Der Allende-Platz - Neugestaltung des öffentlichen Raumes im Grindelviertel  ",
      en: "Allende Square - redesign of public space in the Grindelviertel",
    },
    description: {
      de: "Der Allende-Platz war ein von Gehwegen umgebener Parkplatz in Uninähe. Im Rahmen eines städtischen Sanierungsprogramms fand seine landschaftsarchitektonische Neugestaltung statt. Entstanden ist eine großzügige Aufenthaltsfläche ohne Verzehrzwang, mit ruhigeren Abschnitten und solchen, die dem prallen Leben direkt neben der Gastronomie zugeordnet sind. Mit Blick auf das Thema Nachhaltigkeit wurden in großem Stil örtlich vorhandene, historische Naturstein-Stufen und gebrauchtes Hamburger Pflaster wiederverwendet.",
      en: "Allende Square was a car park surrounded by footpaths near the university. It was redesigned as part of an urban redevelopment programme. The result is a spacious recreational area with no obligation to eat, with quieter sections and those that are dedicated to the hustle and bustle of life right next to the catering outlets. With a view to sustainability, locally available, historic natural stone steps and used Hamburg paving were reused on a large scale.",
    },
    district: "Rotherbaum",
    address: "Allende-Platz, 20146 Hamburg",
    architect: "",
    id: 270,
    lat: 53.567312,
    lng: 9.9830032,
  },
  {
    title: {
      de: "Ehemaliger Getreidespeicher mit Verladebrücke Große Elbstraße 281",
      en: "Former grain store with loading bridge at Große Elbstraße 281",
    },
    description: {
      de: "Umbau, Sanierung und Instandsetzung  des ehemaligen unter Denkmalschutz stehenden Getreidespeichers einschließlich Innenausbau und Hochwasserschutzanlage. ",
      en: "Conversion, refurbishment and repair of the former listed granary including interior work and flood protection system. ",
    },
    district: "Altona",
    address: "Große Elbstraße 281",
    architect: "SEHW Architekten PartG mbB",
    id: 271,
    lat: 53.54409510000001,
    lng: 9.9251645,
  },
  {
    title: {
      de: "Revitalisierung Congress Center Hamburg ",
      en: "Revitalization of the Congress Center Hamburg",
    },
    description: {
      de: "In den 1970er Jahren wurde das CCH als visionäres und gewagtes Bauvorhaben für die Stadt Hamburg errichtet. Nach über 40 Jahren bedurfte es einer Revitalisierung und Erweiterung. Dazu wurde 2014 ein Wettbewerb ausgelobt, den die Arbeitsgemeinschaft agnLeusmann/TIM HUPE Architekten für sich entscheiden konnte. Nach Abschluss der Baumaßnahmen verbindet nun ein neuer Mantelbau drei räumliche Situationen zu einer Sequenz: die Ankunft von Osten, die neue Eingangshalle und das zwei Ebenen höher gelegene Belvedere.",
      en: "In the 1970s, the CCH was built as a visionary and daring construction project for the city of Hamburg. After more than 40 years, it was in need of revitalisation and expansion. To this end, a competition was organised in 2014, which was won by the agnLeusmann/TIM HUPE Architekten consortium. Now that the construction work has been completed, a new shell building combines three spatial situations into one sequence: the arrival from the east, the new entrance hall and the Belvedere, which is two levels higher",
    },
    district: "St. Pauli",
    address: "Congressplatz 1, 20355 Hamburg",
    architect:
      "Arbeitsgemeinschaft agnLeusmann / TIM HUPE Architekten, TIM HUPE Architekten (seit Januar 2022 HUPE FLATAU Partner) (Entwurf),  agn Leusmann GmbH (Ausführung), www.agnleusmann.de",
    id: 272,
    lat: 53.5616735,
    lng: 9.9860331,
  },
  {
    title: {
      de: "Drei Schwestern - Genossenschaftlicher Wohnungsbau in heterogenem Quartier",
      en: "Three Sisters - cooperative housing in a heterogeneous neighborhood",
    },
    description: {
      de: "Auf dem ursprünglich mit einem eingeschossigen Supermarkt bebauten Grundstück wurden drei rautenförmige Gebäude mit 37 Wohnungen und eine Kita für 34 Kinder realisiert. Die Gebäude sollten möglichst baugleich sein. Das Ensemble entwickelt sich mit einem fünfgeschossigen Baukörper zur Kreuzung und zwei viergeschossigen Häusern um die bestehenden Bäume herum. Es gibt einen großen Fahrradraum, keine Tiefgarage und nur ein Haus verfügt über einen Aufzug. In den Untergeschossen sind drei Wärmepumpen aktiv.",
      en: "Three diamond-shaped buildings with 37 flats and a daycare centre for 34 children were built on the site, which was originally developed with a single-storey supermarket. The buildings were to be as identical as possible. The ensemble develops with a five-storey building towards the crossroads and two four-storey buildings around the existing trees. There is a large bicycle room, no underground car park and only one building has a lift. Three heat pumps are active in the basement floors.",
    },
    district: "Wilsdorf",
    address: "Reeseberg 115, 21079 Hamburg",
    architect: "Renner Hainke Wirth Zirn Architekten",
    id: 273,
    lat: 53.4442362,
    lng: 9.999636599999999,
  },
  {
    title: {
      de: "LEO - Leo-Leistikow-Allee",
      en: "LEO - Leo-Leistikow-Allee",
    },
    description: {
      de: "Das Projekt LEO an der Leo-Leistikow-Allee / Ecke Oberaltenallee bildet als kräftige Eckbebauung den Auftakt in das neue Wohnquartier Finkenau. Trotz seiner Lage an der achtspurigen Magistrale und den damit verbundenen Herausforderungen wurden hier 184 hochwertige Wohnungen - davon 55 öffentlich gefördert - und Gewerbeeinheiten geschaffen. Die Fassade mit den ausdrucksstarken, variierenden Ziegelstrukturen erinnert an loftartige Gebäude zu Beginn des vergangenen Jahrhunderts.",
      en: "The LEO project on the corner of Leo-Leistikow-Allee and Oberaltenallee is a powerful corner development that marks the start of the new Finkenau residential neighbourhood. Despite its location on the eight-lane main road and the associated challenges, 184 high-quality flats - 55 of which are publicly subsidised - and commercial units have been created here. The façade with its expressive, varying brick structures is reminiscent of loft-like buildings at the beginning of the last century.",
    },
    district: "Uhlenhorst",
    address:
      "Leo-Leistikow-Allee 2-8 / Oberaltenallee 46-52 / Martha-Muchow-Weg 15, 22081 Hamburg",
    architect: "kbnk ARCHITEKTEN GMBH",
    id: 274,
    lat: 53.5717808,
    lng: 10.0327032,
  },
  {
    title: {
      de: "Neugestaltung der Fußgängerpromenade am Serrahn",
      en: "Redesign of the pedestrian promenade on the Serrahn",
    },
    description: {
      de: "Die alte ca.13 Meter breite Hafenkante Bergedorfs wird durch ihre zonierte Neugestaltung großzügiger und mit einem Gewinn an Aufenthaltsqualität gestaltet.  Entlang der Bebauung ist die Sondernutzung für Außengastronomie zugelassen, die mittlere Zone wird Fußgänger*innen als Flaniermeile vorbehalten, während die Wasserkante weitgehend offen gestaltet und von privaten Nutzungen freigehalten wird. Historische Bezüge werden durch den Hafenkran und Schutenbänke erlebbar gemacht. ",
      en: "Bergedorf's old harbour edge, which is around 13 metres wide, will be redesigned in zones to make it more spacious and improve the quality of life.  Special use for outdoor catering is permitted along the buildings, the middle zone will be reserved for pedestrians as a promenade, while the water's edge will be largely open and kept free of private uses. Historical references are brought to life by the harbour crane and barge benches. ",
    },
    district: "Bergedorf",
    address: "Serrahnstraße 1 bis 9, 21029, Bergedorf",
    architect: "",
    id: 275,
    lat: 53.489508,
    lng: 10.2087739,
  },
  {
    title: {
      de: "Roots - ein Holzhochhaus in der HafenCity",
      en: "Roots - a wooden high-rise in HafenCity",
    },
    description: {
      de: "Der Trend zur ökologischen und nachhaltigen Architektur manifestiert sich auch im Baumaterial Holz. Am Beispiel von Roots - dem ersten und derzeit höchsten Holzhochhaus Deutschlands, welches aktuell in der Hamburger HafenCity entsteht - wird auf den Prozess einer nachhaltigen Hochhauskonzeption eingegangen und über Herausforderungen, Erfahrungen und Lehren aus der Perspektive des Planers und des Holzbauunternehmers reflektiert.",
      en: "The trend towards ecological and sustainable architecture also manifests itself in timber as a building material. Using the example of Roots - the first and currently tallest timber high-rise building in Germany, which is currently being built in Hamburg's HafenCity - the process of designing a sustainable high-rise building will be discussed and the challenges, experiences and lessons learnt from the perspective of the planner and the timber construction company will be reflected upon",
    },
    district: "HafenCity",
    address:
      "Liselotte-von-Rantzau-Platz/ Lucy-Borchardt-Straße 2 - 8,  20457 Hamburg",
    architect: "Störmer Murphy and Partners (LP 1-5)",
    id: 276,
    lat: 53.53832449999999,
    lng: 10.0186837,
  },
  {
    title: {
      de: "Sanierung und Erweiterung der Schule an der Isebek",
      en: "Renovation and expansion of the school at Isebek",
    },
    description: {
      de: "Für die Erweiterung der Grundschule wurde das denkmalgeschützte Gebäude von Fritz Schumacher von Zubauten aus den 1970er-Jahren befreit und behutsam saniert. Ein neuer kompakter Baukörper ergänzt das ursprünglich als Hilfsschule geplante Gebäude von 1927 entlang der Bundesstraße. Während im Bestandsbau originale Bauteile und Farben unter den alten Schichten wieder hervorgeholt wurden, überrascht der ansonsten ruhig anmutende Neubau seinerseits mit einem innenliegenden zweigeschossigen polygonalen Pausenraum.",
      en: "For the extension of the primary school, Fritz Schumacher's listed building was freed from additions from the 1970s and carefully renovated. A new compact structure complements the building from 1927, which was originally planned as an auxiliary school along the main road. While original components and colours were brought back from under the old layers in the existing building, the otherwise calm-looking new building surprises with an interior two-storey polygonal break room",
    },
    district: "Eimsbüttel",
    address: "Bundesstraße 94, 20144 Hamburg",
    architect:
      "Trapez Architektur GmbH, (Partizipationsverfahren, Planung LP 1-8),  baubüro.eins (LP 8), www.baubueroeins.de",
    id: 277,
    lat: 53.5724187,
    lng: 9.968379299999999,
  },
];

export default rawProjects;
