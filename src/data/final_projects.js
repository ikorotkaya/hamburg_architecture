const rawProjects = [
  {
    district: "Altona",
    title:
      "bahn_hoefe, Umbau, Erweiterung und Nutzungs änderung der ehemaligen Reichsbahndirektion",
    description:
      "Der historische Gebäudekomplex der ehemaligen Bahndirek tion am Bahnhof Altona wurde vollständig saniert und zueinem vitalen, offenen Hofkonzept erweitert und umgebaut:die „bahn _hoefe“. Neben Apartments für Studenten, einerMusicalschule, Büroflächen für die Kreativwirtschaft und einerHochschule für Gestaltung werden im Erdgeschoss Laden geschäfte und gastronomische Betriebe einziehen. Ein Neubaufür eine Kita und einige Wohnungen vervollständigen dieBlockrandstruktur im Süden des Ensembles.",
    architect: "Jo Landwehr und Daisy Dewanto, LH Architekten",
    address: "Am Felde 58, 22765 Hamburg, Hamburg",
    id: 1,
    lat: 53.5511834,
    lng: 9.9327747,
  },
  {
    district: "Altstadt",
    title: "Handelskammer InnovationsCampus (HKIC)",
    description:
      "Zunächst erschien es fast unmöglich an diesem Ort über den Gleisanlagen und ohne ausgewiesenes Grundstück zu bauen. Dies dennoch zu ermöglichen, setzte innovative Architekten- und Ingenieurleistungen sowie eine beispiel hafte Kooperation von Bauherrenschaft, Stadt, Hochbahn,Nachbarn und Projektbeteiligten voraus. Genutzt werden die Büros, Seminar- und Konferenzräume sowie der großeSaal des InnovationsCampus von der Handelskammer, deren Bildungseinrichtungen (HSBA und HKBIS) sowie Mit gliedsunternehmen der Handelskammer.",
    architect: "Markus Trautmann, Hörter + Trautmann Architekten",
    address:
      "Café-Terrasse vor dem Haupteingang, Adolphsplatz 6,20457 Hamburg, Hamburg",
    id: 2,
    lat: 53.54937830000001,
    lng: 9.9904061,
  },
  {
    district: "Altstadt",
    title: "Katharinenquartier",
    description:
      "Das neue Wohnquartier mit 131 Mietwohnungen und kleineren Gewerbeeinheiten an der Achse zwischen Rathaus und HafenCity, dem sogenannten Katharinenweg, trägt zur Belebungder Altstadt bei. Der Abschirmung gegenüber dem Auto verkehr auf der Willy-Brandt-Straße dient das nördliche Büro und Geschäftsgebäude. So bildet ein Ensemble aus drei Gebäuden das Quartier um einen begrünten, gemeinschaftlichgenutzten Innenhof. Die Fassaden sind von dem für die Altstadt typischen Material Backstein geprägt.",
    architect: "Finn Warncke und Niels Vagt, KPW Architekten",
    address:
      "vor dem Gebäudeeingang Grimm 17 (Nähe Hauptportal Katharinenkirche), 20457 Hamburg , Hamburg",
    id: 3,
    lat: 53.5458815,
    lng: 9.9944468,
  },
  {
    district: "Bahrenfeld",
    title: "Pförtnergebäude DESY",
    description:
      "Das vorhandene Pförtnergebäude am Haupteingang Notkestraße wurde durch einen markanten Neubau ersetzt. Entstanden ist ein Gebäude mit einem weit auskragenden, geneigten Dach aus Stahlbeton. In seiner skulpturalen Ausprägung formuliert es mit einer einladenden Geste deutlichden Eingang zum DESY-Gelände. Die dynamische Konstruk tion steht für die innovativen Forschungsinhalte von DESY.",
    architect: "Esther Steinbrinck, Hartfil-Steinbrinck Architekten",
    address: "Pförtnergebäude, Eingang Notkestraße 85, 22607 Hamburg, Hamburg",
    id: 4,
    lat: 53.573014,
    lng: 9.8808017,
  },
  {
    district: "Bahrenfeld",
    title: "Center for Free-Electron Laser Science CFEL",
    description:
      "Mit dem Center for Free-Electron Laser Science entsteht in Hamburg ein internationales Zentrum für die Grundlagen forschung an und mit Röntgenlasern. Es ist eine Koopera tion der drei unabhängigen Forschungseinrichtungen Univer sität Hamburg, Max-Planck-Gesellschaft und Deutsches Elektronen-Synchrotron. Um ein hohes Maß an Synergien zwischen den unterschiedlichen Forschergruppen zu erzeugen, stehen offene Raumgefüge im Vordergrund, die die Kommunikationsprozesse der Wissenschaftler fördern.",
    architect: "Markus Hammes, Hammeskrause Architekten",
    address:
      "Pförtnerloge / Eingangsgebäude DESY, Notkestraße 85, 22607 Hamburg, Hamburg",
    id: 5,
    lat: 53.573032,
    lng: 9.880975,
  },
  {
    district: "Bahrenfeld",
    title:
      "FLASH II - Linearer Teilchenbeschleuniger und Experimentierhalle der Grundlagenphysik",
    description:
      "Der „Freie-Elektronen-Laser FLASH“ ist ein Linearbeschleu niger für Strahlung im weichen Röntgenbereich. Mit FLASH IIwurde dieser um eine Experimentierhalle mit Bürotrakt und einen Beschleunigungstunnel mit Technikräumen und Laborenerweitert. Die Fassade von FLASH II ist in ihrer Plastizität zurückhaltend und glatt. Lediglich zur Luruper Chaussee drücktsich das DESY-Logo als Relief in die horizontale Blechfassade.  Hier öffnet sich FLASH II mit einem großen, dynamischenSchaufenster in Richtung Stadt.",
    architect: "Stefan Wirth, Renner Hainke Wirth Architekten",
    address: "Empfangsgebäude der DESY, Notkestraße 85, 22607 Hamburg, Hamburg",
    id: 6,
    lat: 53.573032,
    lng: 9.880975,
  },
  {
    district: "Barmbek",
    title: "U-/S-Bahnhof und Busanlage BarmbekNeubau und Umbau",
    description:
      "Das Projekt beinhaltet den Neubau der Überdachung der Bus anlage und der Bahnhofszugänge, den Umbau der Bahnhofs schalterhallen, die Sanierung des historischen Eingangsportalsund der bestehenden Klinkerstützwände. Die dynamische Geometrie der Zugangsbauwerke der Schalterhallen und diemarkante Überdachung der Busanlage verknüpfen die nörd lichen und südlichen Stadtquartiere miteinander. Beidseitsdes Bahnhofs wurden filigrane Stahlkonstruktionen mit trans luzenten, pneumatischen Foliendächern konzipiert.",
    architect: "Julian Vielmo und Michael Glowasz, ap plan",
    address:
      "am Rundbunker, Wiesendamm 7,    Ecke Poppenhusenstraße, 22305 Hamburg, Hamburg",
    id: 7,
    lat: 53.5865289,
    lng: 10.0448496,
  },
  {
    district: "Barmbek-Süd",
    title: "Inklusionskita - Naturerfahrung in der Stadt",
    description:
      "Ein Stück Natur inmitten von Barmbek-Süd für 140 Kinder bis sechs Jahren. Der in warmen Farbtönen gestaltete Holzrahmenbau gliedert das Außengelände und setzt die prägenden Bestandsbäume angemessen in Szene. Die pädagogischen Themen „Bewegung“ und „Naturerfahrung in der Stadt“ bildeten die Leitgedanken für die innere Organisation und die äußere Gestaltung. Die Erschließung aus offener zentraler Halle und langen Balkonen ermöglicht vielfältige Blick- und direkte Wegebeziehungen in das naturnahe Spielgelände.",
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
    title: "Mensa Adolph-Schönfelder Schule",
    description:
      "Der eingeschossige Neubau interpretiert die Pavillon architektur aus den sechziger Jahren durch einen umlaufen den Gebäudeunterschnitt, Sockellinie, Dachlinie und durch dazwischen bündig eingefügte, großflächig asymmetrisch gesetzte Fassadenelemente aus rahmenlosem Glas und hellemKlinker. Detailreduktion und Flächenkomposition sind die prägenden Gestaltungsmittel.",
    architect: "Henning Scheid und Sarah Sauler, BKS Architekten",
    address: "Zeisigstraße 3, Haupteingang, 22081 Hamburg, Hamburg",
    id: 9,
    lat: 53.5777009,
    lng: 10.0474282,
  },
  {
    district: "Blankenese",
    title: "Falkensteiner Hof, Umbau und Sanierung",
    description:
      "Der Falkensteiner Hof wurde 1895 als historisch bedeutsames Wirtschaftsgebäude mit Stallungen und Wohnungen errich tet. Die Sanierung des Ensembles umfasste die denkmal gerechte Restaurierung des Hauptgebäudes, den Umbau derReithalle aus den 1950er Jahren, die Neubauten Longierhalleund Heulager sowie die Neufassung der Außenanlagen.",
    architect: "Alexander Guth, Büro Alex Guth Architekt",
    address:
      "Haupteingang Hauptgebäude, In de Bargen 31, 22587 HamburgDer Bus Linie 286 fährt alle 30 Minuten vom Bahnhof Blankenese bis Haltestelle Falkenstein. Von dort sind es ca. 6 Minuten Fußweg., Hamburg",
    id: 10,
    lat: 53.5694785,
    lng: 9.7753725,
  },
  {
    district: "Bramfeld",
    title: "Gemeindezentrum und Kita der Oster-Kirchengemeinde",
    description:
      "Die neue Kindertagesstätte, das denkmalgerecht sanierte alte Pastorat und das neue Gemeindezentrum umschließen den neu gestalteten Kirchplatz mit dem historischen Lindenring.Der zentrale, flexibel nutzbare Außenraum verbindet über kurzeWege Kirche, Gemeindehaus und Kita. Die neuen Gebäude bilden ein Ensemble aus analog gestalteten Baukörpern mitbegrünten Flach- und ansteigenden Pultdächern. Die Fassadensind im Wechsel von hellem Putz und naturbelassenen Zedernholzschindeln gestaltet.",
    architect: "Mathias Hein, Mathias Hein Architekten",
    address:
      "vor dem Kirchenportal, Bramfelder Chaussee 202, 22177 Hamburg, Hamburg",
    id: 11,
    lat: 53.6096511,
    lng: 10.074489,
  },
  {
    district: "Fuhlsbüttel",
    title: "Parkhaus P1 am Flughafen Hamburg",
    description:
      "Das Parkhaus ist im Grundriss auf ein an den Ecken abgerun detes Dreieck aufgebaut und umschreibt Außenabmessungenvon ca. 164 m x 124 m. Die sechs Parkebenen verteilen sichdabei auf eine Gebäudehöhe von ca. 20 Meter. Die ringförmigeStruktur des Gebäudes führt zu einem Querschnittsprinzipvon ca. 34 Meter Breite. Im Gebäude sind ca. 2.800 Parkplätzevorgesehen. Die Fassade besteht aus L-förmigen, eingefärbtenStahlbetonfertigteilen. Die Innengestaltung des Gebäudes wird durch den Charakter der Konstruktion geprägt.",
    architect: "Roger Riewe, Riegler Riewe Architekten",
    address:
      "Flughafen Hamburg, Terminal Tango, am Kreisel gegenüber dem Baustellenzugang, Flughafenstraße 1-3, 22335 Hamburg, Hamburg",
    id: 12,
    lat: 53.6342105,
    lng: 10.0043933,
  },
  {
    district: "HafenCity",
    title: "KLU Kühne Logistics University",
    description:
      "Durch den Umbau des ehemaligen SAP Büro- und Schulungs gebäudes zur Kühne Logistics University entstanden Vor lesungs- und Seminarräume sowie Räume für Fakultät undVerwaltung, verschiedene Lounges, eine Bibliothek und ein kleines Fitnesscenter. Im alle Geschosse übergreifendenAtrium wurde ein Auditorium mit 299 Sitzplätzen in Form eines goldenen Eis eingebaut. Das ansteigende Gestühl verbindet das Erdgeschoss mit dem 1.   Obergeschoss, so dass der Zugang von unten im Foyer, wie von oben über eine Empore möglich ist.",
    architect: "Anja Meding und Jan-Oliver Meding, MPP",
    address: "Brooktorkai 20, 20457 Hamburg, Hamburg",
    id: 13,
    lat: 53.5448978,
    lng: 10.0020985,
  },
  {
    district: "Harburg",
    title: "Speicher am KaufhauskanalUmbau zur Konzert- und Tagungsstätte",
    description:
      "Das „Neue Kaufhaus“ wurde 1826 /27 am Ende des HarburgerKaufhauskanals errichtet. 1880 musste das Gebäude dem Bau der Niederelbebahntrasse weichen. Es wurde an den Stand ort Blohmstraße 22 als Lager für die Kolonialwarengroßhand lung Bode & Kroos transloziert und dort 1888 um ein Comptoirerweitert. Um Hamburgs ältesten Großspeicher historisch rekonstruiert der Öffentlichkeit zugänglich zu machen, ist ab2015 eine Nutzung mit Vortrags- und Konzertveranstaltungenfür die Monate Mai bis Oktober geplant.",
    architect: "Ulrich Garbe, Garbe-Architekten",
    address:
      "im Hof, Blohmstraße 22, 21079 HamburgBaustellenführung! Bitte festes Schuhwerk und robuste Kleidung mitbringen., Hamburg",
    id: 14,
    lat: 53.466501,
    lng: 9.9812149,
  },
  {
    district: "Harvestehude",
    title: "Bürohaus Ensemble Sophienterrassen",
    description:
      "Den Auftakt und Hauptzugang zu den Sophienterrassen bildet der neue Platz am Mittelweg, der von einer Villa und drei zu einem Geviert stehenden Bürogebäuden gebildet wird:dem Bürohaus Ensemble Sophienterrassen. Die Gebäude sind in den Hauptansichten schlicht und vornehm, in den demPlatz zugewandten Seiten offen und spielerisch ausgeführt.Die drei Gebäude sind mit einer einzigartigen Metallfassademit floral anmutenden Strukturen verkleidet. Bäume aus demdirekten Umfeld standen für diesen Entwurf Pate.",
    architect: "Carsten Roth und Jürgen Feyrer, Carsten Roth Architekt",
    address:
      "auf dem Platz zwischen den Gebäuden, Mittelweg 110, 20149  Hamburg, Hamburg",
    id: 15,
    lat: 53.57531609999999,
    lng: 9.9934976,
  },
  {
    district: "Niendorf",
    title: "Sankt Ansgar Kirche in Niendorf, Sanierung und Erweiterung",
    description:
      "Die von Karlheinz Bargholz entworfene katholische Kirche (Bj. 1962) wurde nach der Zusammenlegung dreier Gemeinden Pfarrkirche. Im Zuge der Sanierung wurde sie nach den Anforderungen des 2. Vatikanischen Konzils umgestaltet. Die behutsame Sanierung und Umgestaltung erfolgte in engem Kontakt zum Architekten Karlheinz Bargholz. Das Gebäude ist inzwischen auf Antrag der Gemeinde ein Denkmal.",
    architect: "Andreas Rowold, Andreas Rowold Architekt ",
    address: "Kirchvorplatz, Niendorfer Kirchenweg 18, 22459 Hamburg, Hamburg",
    id: 16,
    lat: 53.62044119999999,
    lng: 9.949804499999999,
  },
  {
    district: "Ohlsdorf",
    title:
      "Fuhlsbüttler Schleuse, Neubau des Betriebsgebäudes,übergeordnetes Gestaltungskonzept und Außenanlagen",
    description:
      "Die Schleusenanlage wurde im Zuge des Neubaus zu einerWehranlage mit integriertem Betriebsgebäude vollständigumgestaltet. Dabei waren neben architektonischen, städtebau lichen und landschaftsplanerischen Aspekten auch Anforderun gen des Denkmalschutzes zu berücksichtigen. Das neue Wehrdient dem Schutz vor Binnenhochwasser am Alsterlauf und der  Wasserstandhaltung. Ein „Mäander-Fischpass“ wurde  inte griert und der östliche Uferbereich durch Sitzstufen terrassiert.",
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
    title:
      "Bürgerhaus Bornheide, Umbau Grundschule Barlsheidezum Bürgerhaus Bornheide",
    description:
      "Leitbild Dorf: Der Bürgerpark ist das verbindende Element. Hier finden Aktionen statt, hier wird geskatet, man sitzt im Café und hier spielt der Zirkus. Ähnlich gestaltete Häuser gruppieren sich um einen Platz, auf dem das Haupthaus steht. Die vorhandenen Pavillons wurden freigestellt, der Außen raum neu geordnet, die Gebäude energetisch ertüchtigt und an die Bedürfnisse der neuen Nutzer angepasst. Die Farb gestaltung der Häuser dient der Orientierung.",
    architect: "Philipp Dau, KBNK Architekten",
    address:
      "vor dem BürgerCafé (rotes Haus), Bornheide 76, 22549 Hamburg, Hamburg",
    id: 18,
    lat: 53.58878360000001,
    lng: 9.8556032,
  },
  {
    district: "Ottensen",
    title: "Fette-Höfe, Modernisierung eines Wohn- und Gewerbehofs",
    description:
      "Der Wohn- und Gewerbehof „Fette-Höfe“ bietet mit 23 Wohnungen und 13 Gewerbeeinheiten einen urbanen Nutzungsmix und orientiert sich mit seiner städtebau lichen Verdichtung am Quartierscharakter Ottensen. Die autofreien Innenhöfe und die intensiv begrünten Dach terrassen sollen das Mikroklima im dichten städtischen Umfeld verbessern. Die Anordnung der Gebäude und ihre Fassadengestaltung orientieren sich an der ursprüng lichen Fabrikarchitektur.",
    architect: "Kirstin Pugnat, Architekturbüro AG Horizont",
    address:
      "vor der Hofdurchfahrt, Spritzenplatz 5 -10, 22765 Hamburg, Hamburg",
    id: 19,
    lat: 53.5512065,
    lng: 9.9308158,
  },
  {
    district: "Ottensen",
    title: "Wohnquartier Gaußstraße",
    description:
      "In Hamburg-Ottensen ist eine Wohnanlage mit 202 Wohnein heiten für Miet- und Eigentumswohnungen entstanden. Durchvariierende Gebäudehöhen, Staffelgeschosse und brücken förmige Überbauungen ist der Baukörper horizontal gegliedert.Die meisten der familiengerechten Wohnungsgrundrisse wur den nach dem Prinzip „Durchwohnen“ konzipiert. Das Projektzählt aktuell zu den größten energieeffizienten Baumaßnahmenin Norddeutschland.",
    architect: "Johann Zurl, DFZ Architekten",
    address:
      "Hofdurchfahrt Gaußstraße 194 (neben der Tiefgarageneinfahrt),22765 Hamburg, Hamburg",
    id: 20,
    lat: 53.55871579999999,
    lng: 9.924337699999999,
  },
  {
    district: "Rotherbaum",
    title:
      "Fachbibliothek Sozialwissenschaften der UniversitätHamburg, Erweiterung und Modernisierung",
    description:
      "Die Fachbibliothek Sozialwissenschaften der UniversitätHamburg befindet sich im 3. OG des sogenannten „Pferde stalls.“ Sie stellt Literatur für die Fächer Soziologie, Politik wissenschaft, Journalistik und Kriminologische Sozialforschungbereit. Die Umstellung von einer reinen Freihand- zu einer Magazinbibliothek ermöglichte eine räumliche Neuorganisation der Bibliothek. Eine offene Studierlandschaft mit individuellen Arbeitsplätzen für unterschiedliche Lerntypen ersetzt die ehemals kleinteiligen Raumstrukturen.",
    architect: "Gesine Beyer und Christina Radtke, Trapez Architektur",
    address: "Foyer, Allende-Platz 1, 20146 Hamburg, Hamburg",
    id: 21,
    lat: 53.5673346,
    lng: 9.982259599999999,
  },
  {
    district: "Rotherbaum",
    title:
      "Studienbüro Wirtschaftswissenschaften der UniversitätHamburg, Umbau und Neustrukturierung",
    description:
      "Die Verlegung des Hauptzugangs in die Kernzone des Gebäudeshat dazu geführt, dass Besucher heute direkt zum neuen Infotresen geführt werden. Die geschwungenen Wände „spülen“sie förmlich dorthin. Am Tresen vorbei gelangt man zu den Büros im kontrollierten Innenbereich. Dieser wird durch eine eingestellte, ovale Großform räumlich definiert. Durch gläserneBürotüren fällt Tageslicht, das zu einer angenehmen Arbeits atmosphäre beiträgt. Die Oberlichte über den Bürotüren könnenzur Querlüftung individuell geöffnet werden.",
    architect: "Klaus Roloff, me di um Architekten",
    address:
      "Eingangsbereich Gebäude Von-Melle-Park 5,    Eingang „C“ im Erdgeschoss, 20146 Hamburg, Hamburg",
    id: 22,
    lat: 53.56539189999999,
    lng: 9.9845291,
  },
  {
    district: "St. Pauli",
    title: "Entertainmenthaus  St. Pauli",
    description:
      "Das Entertainmenthaus mit Gründerzentrum beherbergt auf 5500 m² vier Probebühnen, Textilwerkstätten und Musikproberäume. Das Gebäude verweist mit übereinanderschwingenden und auskragenden Kuben auf seine kreativen und tanzenden Nutzer. Der Gebäudekopf mit großem Schaufenster ermöglicht tiefe Einblicke in die zehn Meter hohe Artistenbühne. Die Fassade wurde analog zu einem Stoffgewebe entwickelt. Die feingliedrig strukturierte Stadt fassade bietet dem Auge ein subtiles Farbspiel.",
    architect: "Karin Renner und Melanie Zirn, Renner Hainke Wirth Architekten",
    address:
      "vor dem Eingang, Simon von Utrecht Straße 1,    Ecke Große Freiheit, 22767 Hamburg, Hamburg",
    id: 23,
    lat: 53.5518091,
    lng: 9.957163699999999,
  },
  {
    district: "St. Pauli",
    title: "Eingang Neue Messe, Planten un Blomen Hamburg",
    description:
      "Wie eine Schärpe legt sich der neue Zaun am ParkeingangNeue Messe um das Gartengelände. Er besteht aus Lamellen,die mit Licht und Schatten spielen, abgrenzen und schützen,gleichzeitig Einblick gewähren und neugierig machen, denn siesind nach außen hin verformt, als würde die Natur gegen ihre Begrenzung aufbegehren. Thematisiert wird die Ambivalenzvon Schutz des kostbaren Gartens und nachdrücklicher Ein ladung zum Besuch durch eine Rampe, die den neuen Zugangals Einschnitt durch die dichte grüne Fassade inszeniert.",
    architect: "Lola Meyer, A24 Landschaft",
    address:
      "Eingangsplatz Nord, Rentzelstraße / Ecke Tiergartenstraße (gegenüber dem Fernsehturm), 20357 Hamburg, Hamburg",
    id: 24,
    lat: 53.5631192,
    lng: 9.9758418,
  },
  {
    district: "St. Pauli",
    title: "Talschmuck, Neubau einer Wohnanlage",
    description:
      "Neubau einer Wohnanlage mit 85 Mietwohnungen. Sanierung, Erweiterung eines denkmalgeschützten Hauses im Herzen von St. Pauli. Baulückenschließung mit Nach verdichtung im Blockinnenbereich. Anteil von 30% öffentlich gefördertem Wohnraum.",
    architect:
      "Axel Farnschläder und Michael Thüs, Thüs Farnschläder Architekten ",
    address: "Talstraße 47, 20359 Hamburg, Hamburg",
    id: 25,
    lat: 53.55117,
    lng: 9.95981,
  },
  {
    district: "Wilhelmsburg",
    title: "Schwimmhalle Inselpark",
    description:
      "Die Schwimmhalle Inselpark wurde als Projekt der Internatio nalen Bauausstellung im April 2013 eröffnet. Die hierausresultierenden architektonischen Besonderheiten und energe tischen Vorgaben wurden durch die Architekturbüros ASWfür den Fassadenentwurf und bs2 für die Generalplanung undInnenarchitektur umgesetzt. Vier unterschiedliche Fassaden,darunter eine 40 m x 8 m große, zu öffnende Glasfassade undeine farblich codierte und akzentuierte Innenraumgestal tung unterstreichen den Sportbadcharakter.",
    architect: "Elmar Männer, bs2architekten",
    address:
      "Schwimmhalle Inselpark, Kurt-Emmerich-Platz 12, 21109 Hamburg, Hamburg",
    id: 26,
    lat: 53.4954928,
    lng: 10.001742,
  },
  {
    district: "Alsterdorf",
    title: "Aufstockung der Orchideenterrassen",
    description:
      "Für vier mehrgeschossige Wohnbauten aus den 50er Jahrengalt es eine Lösung für eine höhere Ausnutzung durch Auf stockung der bestehenden Gebäude zu erarbeiten. Es wurdensechs eingeschossige Wohnungen und zwölf zweigeschossigeMaisonette-Wohnungen geschaffen. Die Durchführung durftedas Sondereigentum des Bestandes nicht berühren und mussteeigenständig gegründet werden. Die Gebäude wurden miteiner Stahlbetonkonstruktion tischartig überbaut. Die Aufsto ckung erfolgte in Leichtbauweise aus vorgefertigten Modulen.",
    architect: "Bauatelier Dipl.-Ing. Architekt Torsten Pilch",
    address: "Orchideenstieg 8, vor dem Treppenhaus, Hamburg",
    id: 27,
    lat: 53.6040945,
    lng: 9.9912309,
  },
  {
    district: "Altona",
    title:
      "AKK Altonaer Kinderkrankenhaus: Erweiterungsbauten, Sanierung, Um- und Ausbau",
    description:
      "Das AKK wurde 1859 gegründet und gehört zu den größtenKinderkliniken Deutschlands. Die seit 2004 betreute Sanierungund der Aus- und Erweiterungsbau des teilweise historischenEnsembles umfasst u.a. den Bau des „Lufthafens“, der Cafe teria, die Sanierung des „S-Hauses“ zum ambulanten Versor gungszentrum und aktuell die Erweiterung der OPs. Es galtfunktionale Anforderungen eines modernen Krankenhausbe triebes in denkmalgeschützter Bausubstanz umzusetzen.",
    architect: "euroterra Ingenieurgesellschaft mbH & Co. KG",
    address:
      "Cafeteria des AKK, Eingang Bleickenallee 38 oder Grünebergstraße , Hamburg",
    id: 28,
    lat: 53.5520562,
    lng: 9.9130905,
  },
  {
    district: "Altona",
    title: "Elbdeck Hamburg",
    description:
      "Neubau des Wohn- und Geschäftsgebäudes Elbdeck mitrund 100 hochwertig ausgestatteten Wohnungen am Elbufer.Eine Tiefgarage mit rund 280 Stellplätzen bildet den Sockel,der gleichzeitig als Flutschutzpolder dient, zuzüglich Büros,Gastronomie- und Ladenflächen in den Erdgeschossen und teilweise dem 1./2.OG. Die gewählte hellrote Farbigkeitdes Ziegels, die im freundlichen Kontrast zu den weißen Putzflächen steht, verleiht dem Elbdeck Hamburg ein medi terranes Flair und wirkt stets heiter - selbst an trüben Tagen.",
    architect: "Carsten Roth Architekt",
    address: "Neumühlen 1, Ecke Kaispeicher , Hamburg",
    id: 29,
    lat: 53.54470019999999,
    lng: 9.9270263,
  },
  {
    district: "Altona",
    title: "Ikea Altona Hamburg",
    description:
      "Über drei Geschosse präsentiert sich der erste innerstäd tische Ikea Fachmarkt. Im Vordergrund der Bauaufgabe standdie Entwicklung eines Fassadensystems, das die Bedürfnisseder Kunden und Anwohner gleichermaßen berücksichtigt.Das Grundthema bildet hierfür ein Strichcode, definiert durchschuppenartig aneinandergefügte, gekantete Metallpaneele.Je nach Standpunkt zeigt sich das Gebäude farbig oder neutralund vereint so die zwei konträren Ziele in einer Fassade.",
    architect:
      "nps tchoban voss GmbH & Co KG (hochbauliche Planung);DFZ Architekten GmbH (Fassadengestaltung, Kubatur)",
    address: "Haupteingang Ikea, Große Bergstraße 164, Hamburg",
    id: 30,
    lat: 53.5515976,
    lng: 9.9416207,
  },
  {
    district: "Altona",
    title: "Wohnungsbau Palmaille 92",
    description:
      "Die Interpretation klassischer Elemente der historischenBebauung der Palmaille, in einem dennoch deutlich modernwirkenden Wohngebäude, war die gestalterische Zielsetzungdieses Projektes. Durch die ausgeprägte Körperhaftigkeit mit ihren klar eingeschnittenen Öffnungen, der stringentenFassadenteilung und der variierenden Tiefe wurde eine plastische Betonung analog zu den historischen Nachbar gebäuden erreicht. Die weiß gefärbte Fassade, die sich bis über die geneigte Dachfläche zieht, ist ein prägnantes Gestaltungselement.",
    architect: "La`ket Architekten GmbH",
    address: "Palmaille 92, Hamburg",
    id: 31,
    lat: 53.54647629999999,
    lng: 9.940574699999999,
  },
  {
    district: "Altstadt",
    title: "Deichtorhallen Hamburg: Sanierung der Halle für Aktuelle Kunst",
    description:
      "Die 1912 errichtete und 1989 von Josef Paul Kleihues zur„Halle für Aktuelle Kunst“ umgebaute nördliche Deichtorhallewurde grundhaft saniert und neugeordnet. Städtebaulichöffnet sich die Halle nunmehr auch nach Westen mit neuemCafé, Bookshop und den Räumen der kulturellen Bildung.Denkmalpflegerisch konnte trotz neuer Klima- und Bauphysik anforderungen der einzigartige Charakter der gesamten Halledurch differenzierte Pufferzonenbildung erhalten bleiben.",
    architect: "Gregor Sunder-Plassmann Architekten BDA mit Stephanie Kaindl",
    address: "Eingang nördliche Deichtorhalle, Deichtorstraße 1+2, Hamburg",
    id: 32,
    lat: 53.5470705,
    lng: 10.006862,
  },
  {
    district: "Barmbek-Nord",
    title: "Neu- und Anbau Bürgerhaus Barmbek",
    description:
      "Dem Entwurf für die Erweiterung des Bürgerhauses lag als wesentlicher Gedanke der Respekt vor dem denkmal geschützten Gebäude von Fritz Schumacher zugrunde. Der Neubau wird als Ergänzung der Schumacherschen Architektur verstanden. Er fügt sich zurückhaltend an den historischen Bestand an, besticht aber durch seine architektonische Eigenständigkeit. Entwurfsmotive des Bestands wurden neu interpretiert und finden in der klaren und sachlichen Klinkerfassade ihren Ausdruck.",
    architect: "KBNK Architekten GmbH",
    address: "Lorichstraße 28A, vor dem Haupteingang, Hamburg",
    id: 33,
    lat: 53.6024045,
    lng: 10.0440227,
  },
  {
    district: "Barmbek-Nord",
    title: "Umbau und Erweiterung der Kultureinrichtung Zinnschmelze",
    description:
      "Das Gebäude auf dem Museumshof wurde grundlegend umgebaut und räumlich neu geordnet sowie um einen Neubau erweitert. Alt- und Neubau wurden durch einen gläser nen Verbindungsbau verknüpft. Der Erweiterungsbau folgt der Kubatur des Altbaus, interpretiert diesen aber neu. Dunkel braunes Kupfer zieht sich als Hülle über Dach und Fassadedes Neubaus und gliedert sich in den industriellen Charakterdes ehemaligen Fabrikgeländes ein.Architekten: LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
    address: "Haupteingang Zinnschmelze, Maurienstraße 19, Hamburg",
    id: 34,
    lat: 53.5858943,
    lng: 10.0446922,
  },
  {
    district: "Eimsbüttel",
    title: "Wohn- und Geschäftshaus Isebekdomizil",
    description:
      "Das Haus zwischen U-Bahnhaltestelle Hoheluftbrücke und der Isebek hat eine bewegte Planungsgeschichte. DerSiegerentwurf von 2007 für das Bürogebäude Hoheluft kontor wurde in einem Bürgerbegehren abgelehnt. Das nunrealisierte gemischte Gebäudekonzept umfasst 30 Studen tenwohnungen, 40 Mietwohnungen, einen Supermarkt sowie eine gemeinschaftlich genutzte Spielfläche. Das Gebäude orientiert sich mit seiner Klinkerfassade an der angrenzen den Bebauung der 1920er Jahre.",
    architect: "APB. Architekten BDA (LP 1-5, tlw. 8)",
    address: "Kaiser-Friedrich-Ufer 30, vor dem Supermarkt, Hamburg",
    id: 35,
    lat: 53.57781749999999,
    lng: 9.9759212,
  },
  {
    district: "Eimsbüttel",
    title: "Haus Winter - Passivhaus im gründerzeitlichen Gewand",
    description:
      "Der Passivhausneubau „Haus Winter“ schließt eine lang jährige Baulücke in einer durch gründerzeitliche Architekturgeprägten Nachbarschaft und vereint dabei zwei zentrale Anforderungen, die sich auf den ersten Blick auszuschlie ßen scheinen: Zum einen sollte das historische Stadtbild durch einen sich optisch ohne Bruch einfügenden „grün derzeitlichen“ Neubau ergänzt werden, zum anderen sollte ein nachhaltiges Gebäude geschaffen werden, das den modernen Ansprüchen an Energieeffizienz und Ökologie mehr als gerecht wird.",
    architect: "Architekturbüro Jakob Siemonsen",
    address: "Wiesenstraße 7, vor dem Haus, Hamburg",
    id: 36,
    lat: 53.5758202,
    lng: 9.9572366,
  },
  {
    district: "Eimsbüttel",
    title: "Witwenball - Küche & Wein",
    description:
      "Der Witwenball ist ein stilvolles, gemütliches Weinrestaurantim Schanzenviertel. Der Name des Restaurants hat Tradition.Bis in die 1980er Jahre existierte an dieser Stelle das beliebteTanzlokal „Elfriedes Witwenball“. Die Idee des Projektes ist „ein Tisch für Freunde und Freundes Freunde“. Der Restau rantbesucher wird von einem imposanten Tresen aus Carrara Marmor, Tischflächen aus Emperado-Marmor, türkisfarbenen,glamourösen Polsterstoffen, der Antikspiegelwand und durch die edlen Tapeten mit zarten Wolkenmustern aus demAlltag entführt.Architekten: Giorgio Gullotta Architekten",
    architect: "Giorgio Gullotta Architekten",
    address: "Weidenallee 20, Hamburg",
    id: 37,
    lat: 53.56716240000001,
    lng: 9.965251499999999,
  },
  {
    district: "Hamm",
    title: "Mehrfamilienhaus  Sievekingdamm 72",
    description:
      "Ziel des vorgeschlagenen Bebauungskonzeptes ist es, mit tels eines lagerhaften, fünfgeschossigen Baukörpers ohnewesentliche Höhenakzente die Kontinuität des „Boulevards“Sievekingdamm zu stärken, nicht zu unterbrechen und deutlich räumlich zu fassen. Gleichzeitig wird ein weitererkleinerer Baukörper kompositorisch so positioniert, dass erdem Kontext der Blockrandschließung folgt, sich aber zur Nachbarschaft hin öffnet und diese mittels Durchwegung vom„Fuchsloch“ zum „Hofquartier“ einbindet und bereichert.",
    architect: "APB. Architekten BDA (LP 1-5, tlw. 8)",
    address: "Sievekingdamm 72 , Hamburg",
    id: 38,
    lat: 53.5600395,
    lng: 10.0513554,
  },
  {
    district: "Hammerbrook",
    title: "Hausboot „Schwan“",
    description:
      "In diesem Hausbootentwurf verbindet sich das indi viduelle Leben auf dem Wasser mit der nachhaltigen Nutzung möglichst weniger fossiler Ressourcen. Zur funktionalen Zonierung des Grundrisses ist der Baukörper in Scheiben unterteilt. Das Hausboot wurde als klassischer Holzrahmenbau auf einem Stahlbeton-Ponton ausgeführt. Neben der Dämmung der Hülle wurden aktive Systeme integriert und die Speicherung von Warmwasser und Strom durch Sonnenenergie einbezogen.",
    architect: "Daniel Wickersheim Architekt",
    address:
      "Norderkai-Ufer 1, am Mittelkanal zwischen Hammerbrookbrücke und Nagelswegbrücke, Hamburg",
    id: 39,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Hammerbrook",
    title: "Hausboot „Sonn  Dusel“",
    description:
      "In den Räumen des Hausbootes soll sich das Gefühl vermitteln, auf einem Boot zu sein. Daher wurde der Schlaf bereich tiefer gelegt. Die Bewohner „tauchen“ so zu den „Kojen“ ab. Der Wohnbereich liegt dagegen auf Wasser niveau und kann über eine Schiebetüre großflächig zum Wasser hin geöffnet werden. Durch die Verteilung der Räumeauf zwei Niveaus ist die Trennung in einen öffentlicheren und einen privaten Bereich und die Brückengängigkeit fürden Standort gewährleistet worden.",
    architect: "Rost.Niderehe Architekten I Ingenieure",
    address:
      "Norderkai-Ufer 3, am Mittelkanal zwischen Hammerbrookbrücke und Nagelswegbrücke, Hamburg",
    id: 40,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Langenhorn",
    title:
      "Joachim Herz Stiftung - Bürogebäude mit Lehr- und Veranstaltungsräumen",
    description:
      "Der Neubau wurde auf dem Areal einer ehemaligen Kaffee rösterei errichtet. Ein markanter 25 Meter hoher Röstturmblieb erhalten und wurde gestalterisch und funktional indas neue Gesamtensemble integriert. Das dreigeschossigeGebäude umspielt den Röstturm mit einem mäandrierendenGrundriss und bildet zwei eigenständige Innenhöfe, um die sich lichtdurflutete Büros, Lehr- und Veranstaltungsräumesowie eine großzügige Cafeteria mit Seeterrasse anordnen.",
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
    title: "Umgestaltung Katholische Kirche St. Ansgar - Kleiner Michel",
    description:
      "Umgestaltung des Innenraumes und der wieder freigelegten Südfassade der im Jahre 1953-1955 erbauten neoklassizistischen Saalkirche an dem historischen Standort der ursprünglichen Michaeliskirche.Architekten: Architektur + Stadtplanung, Ewers Dörnen + Partner GmbH Führungen: Klaus Dörnen, Architektur + Stadtplanung, Ewers Dörnen + Partner GmbH",
    architect: "Architektur + Stadtplanung, Ewers Dörnen + Partner GmbH ",
    address: "Michaelisstraße 5, Kirchenvorplatz  , Hamburg",
    id: 42,
    lat: 53.5491233,
    lng: 9.9830358,
  },
  {
    district: "Nienstedten",
    title: "Neubau eines Mehrfamilienhauses mit Tiefgarage",
    description:
      "Ein unbebautes Grundstück in einem gewachsenen Villen gebiet wird um drei Wohnungen in einem villenähnlichenStadthaus arrondiert. Das Haus ist einem klaren kubischenFormenkanon verpflichtet, der mit wenigen Formaten undMaterialien auskommt. Die traditionelle dunkle Klinker fassade korrespondiert mit den dunklen Bronzetönen der Metallfenster und Faschen sowie der Brüstungselemente. Im Innern des Hauses zeigen loftähnliche Grundrisse, dass auch diese Bauaufgabe überraschend andersartige Lösungen aufzeigen kann.",
    architect: "Spengler · Wiescholek Architekten Stadtplaner",
    address: "Christian August Weg 22, Hamburg",
    id: 43,
    lat: 53.5606144,
    lng: 9.828676,
  },
  {
    district: "Öjendorf",
    title: "Modernisierung der Feierhallen auf dem Friedhof Öjendorf",
    description:
      "Der Friedhof Öjendorf ist der dritte Hauptfriedhof Hamburgs, mit dessen Planung Baudirektor Gropp bereits 1930 be gonnen hatte. Die drei Feierhallen aus den 1960er Jahren ent sprachen nicht mehr den heutigen Anforderungen und warendringend sanierungsbedürftig. Im Spannungsfeld zwischenDenkmalschutz und Erhöhung der Attraktivität für Be stattungsfeiern setzten die Architekten B8 auf eine behut same Sanierung und erhielten die Hallen weitestgehend in ihrem äußeren Erscheinungsbild.",
    architect: "Architekten B8 Ingwersen I Rapp GmbH",
    address:
      "Friedhof Öjendorf, Platz vor der mittleren Halle (Halle 2)  , Hamburg",
    id: 44,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Othmarschen",
    title: "Wohnen in den Othmarscher Höfen",
    description:
      "Im Eingangsbereich des neuen Wohnquartiers „OthmarscherHöfe“ bilden die zwei Wohnhäuser der Wohnungsbaugenossen schaft ALTOBA den Auftakt der neuen „Grünen Mitte“ mit 43 familiengerechten Wohneinheiten. Hervorzuheben ist dasKonzept einer wandelbaren Grundrissgestaltung für sich ändernde Wohnbedürfnisse. Die ALTOBA hat als erstes Ham burger Wohnungsunternehmen für dieses Projekt das Zer tifikat „Nachhaltiger Wohnungsbau“ vom NaWoh (Verein zurFörderung der Nachhaltigkeit im Wohnungsbau) erhalten.",
    architect:
      "LRW Architekten und Stadtplaner, Loosen, Rüschoff + Winkler PartG mbB",
    address: "Jürgen Töpfer Straße 51-57, Hamburg",
    id: 45,
    lat: 53.5576466,
    lng: 9.9034622,
  },
  {
    district: "Ottensen",
    title: "Ice-Loft, Wohn- und Geschäftshaus",
    description:
      "Fließende Formen wie zu Eis erstarrt; ein Erdgeschoss, des sen Rankpflanzen den amorphen Linien folgen; ein gerundetesDach, dessen Gauben wie kleine Wellen die Bewegungeinleiten: als erstes Bauwerk mit einer Fassade aus Mineral werkstoff in Norddeutschland steht dieses ungewöhnlicheStadthaus neben den Altbauten der denkmalgeschützten Zeiß straße. Und doch fügt es sich mit seiner klassischen Gliede rung überraschend harmonisch in das historische Ensemble ein.",
    architect: "Planungsbüro Köhler",
    address: "Abbestraße 50 / Ecke Zeißstraße, Hamburg",
    id: 46,
    lat: 53.5549881,
    lng: 9.930684399999999,
  },
  {
    district: "Steinwerder",
    title: "Theater an der Elbe",
    description:
      "Das im letzten Jahr von Stage Entertainment neu er öffnete Musical-Theater prägt v.a. durch seine glänzende Edelstahlfassade die Ansicht auf die Hafenkante gegenüber den Landungsbrücken. Dahinter verbirgt sich ein Theater gebäude mit bis zu 1.900 Sitzplätzen, mit einem vollflächig verglasten Foyer, ein Betriebsgebäude mit Künstlergarde roben, Probenräumen, Büros, Werkstätten, Mitarbeiterkantinesowie der 26 Meter hohe Bühnenturm mit Schnürboden und Eisernem Vorhang.",
    architect:
      "AMA Group Associates Architects BV (Entwurf) und Schenk +Waiblinger Architekten (Genehmigungs- und Ausführungsplanung)",
    address:
      "Bühneneingang, Zugang über Norderelbstraße 8, Anfahrt überHafen bzw. Alten Elbtunnel (Fahrrad). Die Fähre 73 fährt nicht., Hamburg",
    id: 47,
    lat: 53.5258086,
    lng: 9.9787389,
  },
  {
    district: "St. Georg",
    title: "Wohnbebauung Rosenallee 1, Ecke Repsoldstraße",
    description:
      "Bei dem Neubau handelt es sich um ein Wohngebäude mit 14 öffentlich geförderten Wohneinheiten. Das Bauvorhabenschließt die im Zweiten Weltkrieg zerstörte Gebäudeecke der unter Denkmalschutz stehenden Münzburg. Der neu ent standene Baukörper wurde in enger Abstimmung mit demDenkmalschutz entwickelt. Eine besondere Herausforderungbei der Umsetzung war die hohe Lärmbelastung zwischenFernbahntrasse und stark befahrener Spaldingstraße, die zu hohen Schallschutzanforderungen führte.",
    architect: "BDS Bechtloff.Steffen.Architekten BDA",
    address: "Rosenallee 1, Ecke Repsoldstraße, Hamburg",
    id: 48,
    lat: 53.5490023,
    lng: 10.0134131,
  },
  {
    district: "St. Georg Süd / Hammerbrook",
    title: "Mehr! Theater Hamburg",
    description:
      "Auf dem Gelände des Hamburger Großmarktes ist, in denBestand integriert, ein Musiktheater entstanden. Ein Teil desbestehenden Industriebaus aus dem Jahre 1962 ist hier zurVersammlungsstätte (Musiktheater mit Nutzungsmöglichkeitals Mehrzweckhalle) umgenutzt worden. Die unter Denkmal schutz stehende Halle (Architekt: Bernhard Hermkes) ist alseine baulich ungeteilte Fläche ausgeführt. Die Anforderungenan Gründung und statische Gegebenheiten stellten somitgroße Herausforderungen dar.",
    architect: "Frans Dikmans, F101 Architekten (LP 1-5)",
    address:
      "Lippeltstraße/Ecke Banksstraße, vor dem Hochhaus Lippeltstraße 1, Hamburg",
    id: 49,
    lat: 53.5442601,
    lng: 10.0154184,
  },
  {
    district: "St. Pauli",
    title: "Modernisierung der ehemaligen Rindermarkthalle",
    description:
      "Die denkmalgeschützte Rindermarkthalle wurde aufwen dig, in Anlehnung an ihr altes und historisch bedeutendes Er scheinungsbild, modernisiert. Unter anderem wurden dieursprünglichen Fassaden wieder freigelegt und das Dach derehemals größten freitragenden Stahlbauhalle Europas instandgesetzt. Im Inneren wurde die große Marktfläche von ihrenzwischenzeitlichen Einbauten befreit und neu strukturiert, sodass sie heute neben Einzelhändlern auch Büroflächen, einerMoschee sowie örtlichen Vereinen und Künstlern Platz bietet.",
    architect:
      "ABJ.Planungsgesellschaft mbH (LP 1-4) und pbr Planungsbüro Rohling AG (LP 5-8)",
    address: "Neuer Kamp 31, vor dem Eingang an der Tankstelle, Hamburg",
    id: 50,
    lat: 53.5571275,
    lng: 9.9678068,
  },
  {
    district: "St. Pauli",
    title: "Budapester Lofts",
    description:
      "Von 2011 an wuchsen an der Budapester Straße zwei Loftgebäude von insgesamt 5.800 m² für kreative Dienst leister. Planungsziel war es, charakterstarke Gebäude und Flächen zu entwickeln, die den Nutzern Inspiration und Flexibilität bieten. Kleine Unterschiede wie Erker, Terrassen oder schmale Balkone geben den Flächen in jedem Geschoss einen individuellen Charakter. Das puristische Innenleben war als Arbeitsumfeld sofort gefragt: Binnen kurzer Zeit füllten Mieter das Ensemble mit Leben.",
    architect:
      "hda Henrik Diemann Architekten (LP 1-6) und GHP Landschaftsarchitekten (Innenhofgestaltung)",
    address: "Eingang Budapester Straße 45/46, Hamburg",
    id: 51,
    lat: 53.55533,
    lng: 9.96411,
  },
  {
    district: "St. Pauli",
    title:
      "Resonanzraum Hamburg - Konzert- und Probesaal für das Emsemble Resonanz im Hochbunker",
    description:
      "Das selbstverwaltete Orchester Ensemble Resonanz hat in derzu einem Konzert- und Probesaal umgebauten Bunkeretageeine neue Spielstätte gefunden, den „Resonanzraum Hamburg“.Der Umgang mit der denkmalgeschützten Substanz des Hoch bunkers, die Erfordernis höchster akustischer Anforderungenwie auch das knappe Budget haben zu einer Reduktion derarchitektonischen Eingriffe und Einbauten auf das Wesentlichegeführt und einen neuen kulturellen Ort für die Verbindung zeit genössischer und klassischer Musikaufführungen geschaffen.",
    architect: "Prof. Jörg Friedrich PFP Planungs GmbH",
    address:
      "Hochbunker St. Pauli Heiliggeistfeld, 1.OG (Zugang überHaupteingang), Feldstraße 66, Hamburg",
    id: 52,
    lat: 53.554969,
    lng: 9.9696637,
  },
  {
    district: "Uhlenhorst",
    title: "Kunst- und Mediencampus Hamburg Finkenau",
    description:
      "Der skulpturale Neubau ist eine Ergänzung zur ehemaligenFrauenklinik, die von Fritz Schumacher erbaut wurde undheute den Hauptteil des Kunst- und Mediencampus der Hoch schule für Angewandte Wissenschaften darstellt. Mit deut lichem Abstand zur Hauptbaumasse und Respekt zum Bau meister Fritz Schumacher, aber auch in Fortführung, als engeAnbindung des neuen Sockelbaus an den Altbau, sollen so Alt und Neu auch über das Material Ziegel ein städtebaulichharmonisches Ensemble um dem Campushof bilden.",
    architect: "Gerber Architekten",
    address: "Finkenau 35, Atrium Erdgeschoss, Hamburg",
    id: 53,
    lat: 53.5689453,
    lng: 10.0330673,
  },
  {
    district: "Uhlenhorst",
    title: "Clubhaus Norddeutscher Regatta Verein",
    description:
      "Nach dem Brand im Clubhaus 2010 entschied man sich gegeneine Sanierung und, da der Jugendbereich ohnehin ver größert werden sollte, für einen Neubau an selber Stelle. Für das Untergeschoss unterhalb des Wasserspiegels war eine Spezialgründung notwendig. Es wurden Spundwände gestellt, um eine Sohle aus Unterwasserbeton zu gießen und damit das Gebäude gegen Aufschwimmen zu sichern. Vor eindringen dem Wasser schützt eine wasserundurchlässige Konstruktion.",
    architect:
      "Planungsgemeinschaft RFP-BDS: Roschke Franzen und Partner / Beratende Ingenieure VBI und BDS Bechtloff Steffen Architekten BDA; Hennings-Börn Interiors (Innenarchitektur)",
    address: "Schöne Aussicht 36, Hamburg",
    id: 54,
    lat: 53.5746397,
    lng: 10.0086,
  },
  {
    district: "Wilhelmsburg",
    title: "Kopfbauten des Weltquartiers Wilhelmsburg",
    description:
      "Die Arbeitersiedlung in dreigeschossiger Zeilenbauweise mit Satteldächern wurde durch zwei Neubauten ergänzt, die die baulichen Grundelemente des Bestandes auf genommen, in den skulpturalen Kopfbaukörpern neu inter pretiert und mit den Anforderungen an ein energetisch hocheffizientes Passivhaus verknüpft haben. Insgesamt 75 Wohneinheiten, unterschiedlicher Größe und Wohn form, sorgen für einen Wohnmix als Angebot an Singles, Paare und Familien und fördern dadurch die soziale Durchmischung des Weltquartiers.",
    architect: "Gerber Architekten",
    address: "Neuhöfer Straße 7, Eingang Energiebunker, Hamburg",
    id: 55,
    lat: 53.5102504,
    lng: 9.989579299999999,
  },
  {
    district: "Winterhude",
    title: "Wohnen im Solitär - Neubau an der Barmbeker Straße",
    description:
      "In der Nähe des Hamburger Stadtparks, an der Kreu zung Barmbeker Straße/Ecke Wiesendamm, entstand ein prägnantes Wohngebäude mit 20 Wohneinheiten. Der kompakte Baukörper bildet eine kräftige Geste zur stark befahrenen Straßenkreuzung. Zum Wiesendamm springt die doppelgeschossige Staffel leicht zurück, um auf die etwas niedrigere nachbarliche Bebauungsstruktur ein zugehen. Durch die prägnante Form des Neubaus und die Wahl des roten Backsteins ist ein zusammenhängen des städtebauliches Bild entstanden.",
    architect: "coido architects Cordsen Ipach + Döll GmbH",
    address: "Wiesendamm 155, Haupteingang, Hamburg",
    id: 56,
    lat: 53.5897807,
    lng: 10.014431,
  },
  {
    district: "Winterhude",
    title: "Sanierung und Umbau eines historischen Stadthauses",
    description:
      "Das im Jahr 1898 als dreigeschossiges Stadthaus errichteteEinfamilienhaus wurde komplett saniert. Dabei wurden diverseUmbauten entfernt: Fassade, Grundriss, Geschosshöhe sowieInnenausbau (Türen, Deckenstuck, Holzböden etc.) freigelegtund in Anlehnung an den historischen Entwurf rekonstruiert.Im Kontrast dazu wurde die Stahlkonstruktion des im Jahr 2000 aufgestockten Dachgeschosses teilweise zurückgebaut und mit einer zeitgemäßen Ganzglasfassade versehen und damit ein neuer Freiraum im Dach geschaffen.",
    architect:
      "ARGE Architektinnen Heide Dittmer & Susanne Lehmann-Reupert GbR",
    address: "Scheffelstraße 8, vor dem Eingangstor, Hamburg",
    id: 57,
    lat: 53.5794746,
    lng: 10.0072298,
  },
  {
    district: "Alsterdorf",
    title: "Cafeteria Heilwig-Gymnasium",
    description:
      "Der Erweiterungsbau der Cafeteria grenzt an ein denk mal geschütztes Ensemble der Nachkriegsmoderne aus den 1960er Jahren, entworfen von Paul Seitz. Der Neubau ordnet sich in Kubatur und Fassade diesem Ensemble unter und ist dabei so eigenständig, dass der Bestand wei ter hin erkennbar bleibt. Ein Teil des Neubaus schiebt sich in den Bestand der Pausenhalle und bleibt auch dort ablesbar. Der Innenraum des dunklen Kubus überrascht mit weißen Oberflächen und einem lichtdurchfluteten,freundlichen Raumeindruck.",
    architect:
      "tun-architektur Tommy Müller / Nathalie Dudda Partnerschaftsgesellschaft mbB",
    address: "Haupteingang Heilwig-Gymnasium, Wilhelm-Metzger-Str. 4, Hamburg",
    id: 58,
    lat: 53.6054197,
    lng: 9.9986397,
  },
  {
    district: "Altona",
    title: "Stadthaus Palmaille 98",
    description:
      "Als Referenz für diese Interpretation großbürger lichen Wohnens dient das schönste Haus der Palmaille, das „Einfensterhaus“ von Christian Frederik Hansen. Herausfor derungen waren die Lage im Geltungsbereich eines über holten Durchführungsplans, einer Gestaltungs satzung, einersozialen Erhaltensverordnung, über einem S-Bahntunnel, in geschlossener Bebauung mit nicht unterkel lerten Baudenk malen, an einer lärmintensiven Straße sowie die Überschrei tung der festgesetzten Bruttogrundfläche um 140 Prozent.",
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
    title: "Die Neue Mitte Altona",
    description:
      "Die „Neue Mitte Altona“ behandelt ein ca. 30 Hektar großesPlanungsgebiet, das sich unmittelbar nördlich des Bahn  hofs Altona im Bezirk Altona befindet und sich im Nordenbis zum Gleisbogen an der Stresemannstraße erstrecktund die Gleisanlagen des Bahnhofs und den ehemaligen Güterbahnhof Altona umfasst. Hier entstehen ca. 3.600 Woh  nungen, Geschäfte, Grünanlagen und öffentliche Einrich tungen. Ein Quartier zu schaffen und Ottensen und Altona Nord zu verbinden, ist die vorliegende Herausforderungdieses Projekts.",
    architect:
      "André Poitiers Architekt Stadtplaner RIBA und arbos Freiraumplanung GmbH & Co. KG",
    address: "Harkortstraße 79, Hamburg",
    id: 60,
    lat: 53.5567857,
    lng: 9.936494999999999,
  },
  {
    district: "Altona",
    title: "Sanierung Gewerbeschule G10 und Altonaer Theater",
    description:
      "Das Gebäude wurde 1928 unter der Bezeichnung „Haus der Jugend“ als Staatliche Gewerbeschule von Gustav Oelsner geplant und bis 1930 gebaut - ein klar strukturierterStahlbetonskelettbau mit markanten Kupferverkleidungen. Nach dem Krieg wurde die Aula für das Altonaer Theater umgebaut. Die Herausforderung bestand in der Bestandsauf   nahme und Planung während der laufenden tiefgreifendenSanierung, der Sicherung erhaltener Bauteile und der Gestal tung neuer Einbauten im Sinne des historischen Entwurfs.",
    architect: "Spengler · Wiescholek",
    address: "Haupteingang Schule, Museumstraße 19, Hamburg",
    id: 61,
    lat: 53.5485872,
    lng: 9.9341247,
  },
  {
    district: "Altstadt",
    title: "Patriotische Gesellschaft von 1765",
    description:
      "Das denkmalgeschützte Backsteingebäude (1847, TheodorBülau) der Patriotischen Gesellschaft wurde 2012 bis 2016 durch Joachim Reinig revitalisiert: Im Mittelpunkt desEntwicklungskonzeptes standen die Wiedereröffnung desRestaurants „Zum alten Rathaus“, die dringend notwendigekonstruktive Sicherung, die Freilegung des neogoti  schen Säulenzimmers, die Restaurierung der 1950er-Jahre- Innenarchitektur, aber auch neue Beleuchtungskonzepte.",
    architect: "Plan -R- Architektenbüro Joachim Reinig",
    address: "Trostbrücke 4, auf der Brücke, Hamburg",
    id: 62,
    lat: 53.5483579,
    lng: 9.9923121,
  },
  {
    district: "Bahrenfeld",
    title: "Innenausbau Kita Alte Druckerei",
    description:
      "Ein pädagogischer Leitgedanke dieser siebengruppigen Kita ist die frühzeitige ästhetische Bildung, der in eine für Kinder und Erwachsene gleichermaßen erlebbare archi tektonische Sprache übersetzt wurde. Ein speziell ent  wickeltes modulares Möbel-System dient als thematischerWegweiser durch 1.000 Quadratmeter Fläche. Mit Anleihenan eine klassische Industriearchitektur wurden vom Kinderstuhl bis zum raumgreifenden Spielpodest alle Ein bauten eigens entworfen. Kernstück ist das Kinder-Ateliermit einer historischen Druckmaschine.",
    architect: "D O C K Architekten Kurz, Knott & Scheltz PartGmbB",
    address:
      "Luruper Chaussee 125 (Gewerbehof Wichmannstr. 4), Haus 8A, Haupteingang, Hamburg",
    id: 63,
    lat: 53.57089269999999,
    lng: 9.891899,
  },
  {
    district: "Bahrenfeld",
    title: "DESY Petra III Extension und weitere Gebäude",
    description:
      "Die Experimentierhallen „PETRA-III Extension North & East“sind als Erweiterung der ausgelasteten, benachbartenPETRA-III-Halle entstanden. Sie sind in einem technischenUmfeld, welches sich seit den 1960er Jahren ständig ver ändert und schnell den Erfordernissen der physikalischenExperimente anpasst, entwickelt worden und erfüllenvielschichtige Anforderungen an die Physik, z. B. an Maßge nauigkeit, Schwingungsentkopplung und Strahlensicherheit.",
    architect: "Renner Hainke Wirth Architekten GmbH",
    address: "DESY, Notkestraße 85, Haupteingang Notkestraße, Hamburg",
    id: 64,
    lat: 53.573032,
    lng: 9.880975,
  },
  {
    district: "Barmbek-Nord",
    title:
      "Osterbekstraße 107, Umbau des ehemaligen „GUB“ zu Wohnraum für eine Baugemeinschaft",
    description:
      "Im ehemaligen Schulgebäude des Gymnasium Uhlenhorst Barmbek - kurz GUB genannt - wurden für die Bauge nossenschaft FLUWOG-NORDMARK eG und die Bauge meinschaft „Kekse“ vierzig Wohnungen realisiert - alle individuell für die Bewohner geplant. Dafür wurde das Ge bäu de grundsaniert und zu einem Passivhaus umge baut. Heute zeigt sich das Gebäude als ein Wohngebäude, dem die Geschichte als Schulbau noch anzusehen ist.",
    architect:
      "Huke-Schubert Berge Architekten (Hochbau), Hunck + Lorenz Freiraumplanung (Freiraumplanung)",
    address: "Osterbekstraße 107, auf der Auffahrt , Hamburg",
    id: 65,
    lat: 53.5846404,
    lng: 10.0391451,
  },
  {
    district: "Blankenese",
    title: "Villa Baurs Park",
    description:
      "Die denkmalgeschützte Villa von 1924, am Elb hang in Blan kenese gelegen, wurde grundlegend überar  beitet und durch einen Neubauteil erweitert. Mit den vorgelager ten,sich dem Hang angepasst staffelnden Terrassen gehen Innen- und Außenraum wie nahtlos ineinander über. Aufallen Ebenen bieten sich Blicke auf die Elbe. Dies erfor derte eine intensive architektonische und handwerkli cheDurcharbeitung und besondere Detaillösungen.",
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
    title: "ZAL Zentrum für Angewandte Luftfahrtforschung",
    description:
      "Der Neubau des Zentrums für Angewandte Luftfahrtfor schung liegt am Steendiek-Kanal in Finkenwerder. Als technologisches Forschungs- und Entwicklungszentrum für die zivile Luftfahrtindustrie bildet das ZAL die Schnitt  stelle zwischen Wissenschaft und Wirtschaft. Mehr als25.000 Quadratmeter Nutzfläche bieten Raum für ca. 600Arbeitsplätze: Büro- und Laborflächen, Werkstätten, Audi torium, Kantine und ein Foyer mit Innovationsmarktplatz.Architekten: PSP Architekten Ingenieure Landschaftsarchitekten: Mertins | Hamburg | LandschaftsarchitekturTragwerksplanung: Weber · Poll Ingenieurbüro für Bauwesen GbR                    Führungen: Michael Krämer und Ulrich Joachim, PSP Architekten Ingenieure; Hermann Poll, Ingenieurbüro Weber · Poll",
    architect:
      "PSP Architekten Ingenieure Landschaftsarchitekten: Mertins | Hamburg | LandschaftsarchitekturTragwerksplanung: Weber · Poll Ingenieurbüro für Bauwesen GbR                    ",
    address: "Hein-Saß-Weg 22, vor dem Haupteingang, Hamburg",
    id: 67,
    lat: 53.5362132,
    lng: 9.868445,
  },
  {
    district: "Groß-Borstel",
    title: "Schule Lokstedter Damm - Ersatzneubau Haus 2",
    description:
      "Die Ganztagsschule Lokstedter Damm hat einen Förder schwerpunkt für geistig und körperlich beeinträchtigte Kinder.Die Schule besteht aus einem Gebäudekomplex von vierSchulgebäuden mit Turnhalle und großzügigen Spiel- undSportplätzen. Im zweigeschossigen Neubau wurden vier Klassenräume mit jeweils angeschlossenen Differen zierungsräumen und Nebenräume untergebracht. Die Klassenräume orientieren sich entlang der südlichen Grund stücksgrenze, der Eingangsbereich im Westen öffnetsich zu den umliegenden Schulgebäuden.",
    architect: "HS-Architekten PartGmbB SCHMIDT LIMMROTH FUNCK",
    address: "Eingangstor Schule, Lokstedter Damm 38 , Hamburg",
    id: 68,
    lat: 53.6075336,
    lng: 9.971073400000002,
  },
  {
    district: "HafenCity",
    title: "Wohn- und Geschäftshaus Shanghaialle 13-17",
    description:
      "Das Gebäude ist als vielschichtiger Stadtbaustein konzipiertund vereint Leben und Arbeiten für besondere Nutzer unter einem Dach. Gut geschnittene Einzelhandelsflächen im Erdgeschoss bieten mit ihren Galerien flexible Mög lichkeiten der Nutzung. Büroflächen liegen im 1. und 2. Ober geschoss. Darüber sind auf drei Geschossen inklusive Hausgemeinschaften um jeweils eigene Gemeinschafts bereiche organisiert. Im Dachgeschoss befinden sichattraktive Penthäuser mit Dachterrassen.",
    architect: "APB. Architekten BDA Grossmann-Hensel, Schneider, Andresen",
    address: "Shanghaiallee 15, Hamburg",
    id: 69,
    lat: 53.5425312,
    lng: 10.0030825,
  },
  {
    district: "HafenCity",
    title: "Ensemble am Alten Hafenamt im Überseequartier",
    description:
      "Der Cinnamon Turm wurde als freistehender Campanile erdacht - ein Pin auf einer Piazza war die Vision vonBOLLES+WILSON im Wettbewerb für das Areal „AltesHafenamt“ im Jahr 2006. Ein Turm war nicht Teil des Wett bewerbsprogramms, aber die Jury erkannte, dass er dieöffentlichen Funktionen um das einzige zwischen denMegablocks des Überseequartiers verbliebene historischeGebäude verankerte und sichtbar machte. Das denkmal geschützte Alte Hafenamt wurde zu einem Hotel umgebaut.",
    architect:
      "BOLLES+WILSON (LP 1-5 + künstlerische OL); SPINE ARCHI TECTS (LP 5 + künstlerische OL Altes Hafenamt); LV Baumanag. AG (LP 6-8)",
    address: "Osakaallee 14, vor dem InfoPavillon Überseequartier, Hamburg",
    id: 70,
    lat: 53.5420953,
    lng: 9.998833099999999,
  },
  {
    district: "HafenCity",
    title: "Restaurant The Table Kevin Fehling",
    description:
      "The Table - der Name des Restaurants ist Programm. Herz stück des beeindruckenden, hohen Raums ist der orga nisch geschwungene Chef‘s Table aus dunklem Kirschholz.Durch seine geschwungene Form gewährt er von jedemPlatz aus Einblick in die Küche und ermöglicht sowohl einanregendes Tischgespräch als auch stillen Genuss. Farb-,Material- und Lichtkonzept ergänzen die einladende Wir kung des „Tables“, und eigens entworfene Akustikelementeaus Filz, die „Wings“, sorgen für eine perfekte Akustik.",
    architect: "Heyroth & Kürbitz freie Architekten BDA",
    address: "Shanghaiallee 15, Hamburg",
    id: 71,
    lat: 53.5425312,
    lng: 10.0030825,
  },
  {
    district: "HafenCity",
    title:
      "Wohnen am Lohsepark | Wohnungsbau mit Kindertagesstätte und Gewerbeflächen",
    description:
      "Die städtebauliche Vorgabe der Blockbebauung ist durcheine differenzierte Reihung von fünf Einzelhäusern der Bau genossenschaft Bergedorf Bille variiert. In Analogie zurZiegelarchitektur der Speicherstadt schaffen die Fassadenein ebenso anspruchsvolles wie wohnliches Ambiente. Sieinterpretieren zeitgemäß den konstruktiven und dekorativenCharakter dieser Bauweise. Eine im Erdgeschoss befind liche Kita macht das Wohnen für Familien attraktiv. 15 Woh nungen wurden als WK-Effizienzhaus 40 ausgeführt.",
    architect:
      "BLK2 Böge Lindner K2 Architekten (LP 1-4, Leitdetail planung LP 5); Neumann + Partner Architekten und Ingenieure (LP 5-9)",
    address: "Hofdurchgang Steinschanze 2-4, Hamburg",
    id: 72,
    lat: 53.5427249,
    lng: 10.0032836,
  },
  {
    district: "Hamm",
    title: "Hansaterrassen",
    description:
      "Das Wohnquartier Hansaterrassen befindet sich in direkterNähe zur historischen Hansaburg (1913-1915), die früher als Papierfabrik genutzt wurde und heute in Teilen unterDenkmalschutz steht. Das Quartier orientiert sich an denstädtebaulichen Gegebenheiten. Durch Aufnahme der typischen hamburgischen Kanalkantenbebauung wurde ein einheitliches Gesamtensemble mit der Hansaburg geschaffen. Durch die Einzelgebäudeausbildung und derenzueinander verschobene Positionierung haben alle Bewohner einen freien Blick auf das Wasser erhalten.",
    architect: "blauraum Architekten GmbH",
    address: "Wendenstraße 493/499, vor der Hansaburg, Hamburg",
    id: 73,
    lat: 53.5496907,
    lng: 10.0602378,
  },
  {
    district: "Hammerbrook",
    title: "BüroBoot LORE",
    description:
      "Die Bauform des schwimmenden Büros erinnert an alte Hafenlieger, welche in Hamburg früher für Werkstätten undBüros im Hafengebiet genutzt wurden. Darüber hinaussind die Gegensätze der Umgebung in den Entwurf einge gangen und in der Materialwahl widergespiegelt. Dasgebrauchte Holz steht für den rauen Charme der angren zenden Werkstätten und Hinterhöfe, die metallene Fassade in Goldoptik für die benachbarte GeschäftsweltHammerbrooks mit ihren hochwertigen Büros.",
    architect: "Rost.Niderehe Architekten I Ingenieure",
    address:
      "an Bord, Victoriakai-Ufer 4d, Zuwegung gegenüber Süderstraße 112, Hamburg",
    id: 74,
    lat: 53.5460279,
    lng: 10.0321247,
  },
  {
    district: "Harburg",
    title: "Studentisches Wohnen am Schellerdamm",
    description:
      "Das Studentenwohnhaus am Schellerdamm stärkt die Entwicklung des Harburger Binnenhafens hin zu einem lebendigen urbanen Quartier. Die Auftrennung der Großstruktur in einzelne Baukörper gliedert die Straßenflucht analog zum vis-à-vis gelegenen Fleethaus. Das offene Erschließungssystem dient als kommuni kative Struktur über alle Ebenen. Die Küchen der Woh nungen sind hier aus dem Außenraum zu betreten. Es entsteht ein großzügiges gemeinschaftliches Ambiente, das den typischen Wohnheimcharakter vermeidet.",
    architect: "Limbrock Tubbesing Architekten und Stadtplaner",
    address: "Schellerdamm / Ecke Veritaskai, Hamburg",
    id: 75,
    lat: 53.4661155,
    lng: 9.9869077,
  },
  {
    district: "Harburg",
    title: "Speicher am Kaufhauskanal",
    description:
      "„Das Gebäude ist ein zweifach verriegelter Fachwerkbaumit drei Böden und Doppelständer-Innengerüst. An seinemvormaligen Standort repräsentierte der Bau (...) den Typusdes traufständigen Speichers, der im seltenen Gegensatzzu den gängigen, giebelständigen Speichern in Hamburgstand.“ (Gutachten zum Denkmalwert, Dr. Christine Onnen8/2008) An seiner Konstruktion sind die Geschichte vonBau, Translozierung und Sanierung sowie die wechselndenNutzungen abzulesen.",
    architect: "Ulrich Garbe Dipl.-Ing. Architekt",
    address: "Blohmstraße 22, im Innenhof, Hamburg",
    id: 76,
    lat: 53.466501,
    lng: 9.9812149,
  },
  {
    district: "Hohenfelde",
    title: "Wohnhaus Ifflandstraße in der grünen Mitte Hohenfelde",
    description:
      "Das Punkthaus in der Ifflandstraße, unweit der Alster schwimmhalle, beherbergt 39 überwiegend 2- oder 3-Zimmer Wohnungen und zeichnet sich durch seine Hochwertig keit in Hinblick auf Materialität und Ausführung aus. Das kubische Gebäude, gelegen innerhalb eines Parks, verfügtüber sechs Vollgeschosse und ein Staffelgeschoss. Die bodentiefen Fenster in den Wohnungen sorgen für Weitblickund bieten eine ansprechende Wohnqualität. Die hohe Aus führungsqualität zeigt sich auch im Detail des Innenausbaus.",
    architect: "KBNK Architekten GmbH",
    address: "Ifflandstraße 5021, Hamburg",
    id: 77,
    lat: 53.5611211,
    lng: 10.022236,
  },
  {
    district: "Mümmelmannsberg",
    title:
      "Fassadengestaltung und energetische SanierungGroßwohnsiedlung Mümmelmannsberg",
    description:
      "Die energetische Fassadensanierung der Gebäude derBaugenossenschaft Fluwog Nordmark eG bekennt sich mitRespekt zu den Fertigteilkonstruktionen mit ihren klarenLinien, den abwechslungsreich gestalteten Bauabschnittenund den exzellent proportionierten Großformen. Klare, geordnete Strukturen, eingewachsen in üppiges Grün, lassenden Menschen viel Platz, Licht und Außenraum.Architekten: CARSTEN ROTH ARCHITEKT",
    architect: "CARSTEN ROTH ARCHITEKT",
    address:
      "am Durchgang vor dem Gebäude Steinbecker Grenzdamm /Ecke Heideblöck, Hamburg",
    id: 78,
    lat: 53.5232042,
    lng: 10.1527822,
  },
  {
    district: "Neugraben Fischbek",
    title: "ModernArt D designed by Prof. B. Hirche, Architekt",
    description:
      "Mit dem Doppelhaus KfW 40 plus wird das Ziel kosten günstigen Bauens qualitätsvoller Alltagsarchitektur, entsprechend dem IBA Konzept „Naturverbundenes Woh nen\", umgesetzt. Der Entwurf lässt verschiedene Wohn formen vom konventionellen Grundriss mit additivem Raum gefüge bis hin zum offenen Grundriss mit Luftraum undSichtverbindungen zu. Der kompakte Baukörper hat mit dunk lem Klinker und flächigem Dach ohne Überstand eine „monolithische Wirkung\" mit subtiler Gliederung der Loch fassadenflächen durch Relief-Zierverbände.",
    architect: "Architekt Prof. B. Hirche (LP1-4), Viebrockhaus AG (LP 5-9)",
    address: "Randweide 1/3, Hamburg",
    id: 79,
    lat: 53.4769309,
    lng: 9.853118499999999,
  },
  {
    district: "Rahlstedt-Hohenhorst",
    title: "Quartierspark Hohenhorst Park",
    description:
      "Die Großsiedlung Hohenhorst entstand in den 1960er Jahren.Zahlreiche im zugehörigen Park einst aufwendig ange legte Bereiche wie z.B. großzügige Wasseranlagen wurdenim Laufe der Jahrzehnte rückgebaut. Der inzwischen erwachsene Baumbestand bildet ein dichtes Grüngerüst,das jedoch kaum mehr Blickbezüge zwischen den Parkarealen zuließ. Im Rahmen des Städtebauförderungs programmes „soziale Stadt“ gelang es, alte und neue Qualitäten zu entdecken und die Parkanlage wieder zumgrünen Mittelpunkt des Quartiers zu entwickeln.",
    architect: "kfp Kontor Freiraumplanung Thomas Tradowsky",
    address:
      "Schöneberger Straße 44, Vorplatz Community Centre „Haus am See“, Uferterrasse bei der Ankerskulptur, Hamburg",
    id: 80,
    lat: 53.5840135,
    lng: 10.1456792,
  },
  {
    district: "Rissen",
    title: "Einfamilienhaus mit Atelier von 1960",
    description:
      "Das Einfamilienhaus mit großem Atelier und vier verschie denen Gartenhöfen, 1960 vom Architekten für seine Familierealisiert, steht zwischen Elbe und oberem Leuchtturm inTinsdal. Die Innenräume des Holzskelettbaus gehen in Teilenüber zwei Geschosse, unten sind sie hell und zum Gartenoffen, oben befinden sich über Wendeltreppen und eine Brückeerreichbare Rückzugs-Arbeits-Lese-Schlafräume. NachDraußen laufende Wände lassen großzügige, weite oder intime Innen-Außenräume entstehen.",
    architect:
      "Timm Ohrt, Landschaftsarchitekt: Günther Schulze, Umbau 1995: Timm Ohrt & Hille von Seggern",
    address: "Am Leuchtturm 13, Rissen (Tinsdal), Hamburg",
    id: 81,
    lat: 53.5663504,
    lng: 9.740978300000002,
  },
  {
    district: "Rissen",
    title: "DLRG Wasserrettungsdienststation",
    description:
      "Die Station am Rissener Ufer, direkt auf dem Elbstrand, ersetzt die seit den 1970er Jahren existierende kleine Stationohne Sanitäranlagen. Neben der besonderen, exponier ten Lage waren bei Projektkonzeption und Planung folgendeBesonderheiten zu berücksichtigen: Baustellenbetrieb im Flutbereich der Elbe mit erschwerter Zuwegung (sandi ger Grund, Naturschutzgebiet), Pfahlgründung, modulareContainerbauweise, Medienversorgung (Wasser, Strom, etc.)und umfangreiche Nutzeranforderungen.",
    architect: "SKA Sibylle Kramer Architekten",
    address:
      "Rissener Ufer (Straße bis zum Ende fahren), am Übergangvom öffentlichen Parkplatz zum Anlegersteg, Hamburg",
    id: 82,
    lat: 53.5649996,
    lng: 9.7564783,
  },
  {
    district: "Rotherbaum",
    title: "Apartimentum",
    description:
      "Das „Apartimentum“ ist ein neu errichtetes Wohn- und Geschäftshaus unter Erhalt der gründerzeitlichen Fassadeam Mittelweg in Hamburg-Rotherbaum. Die Bestands fassade wurde um einen zweigeschossigen Dachkörper ergänzt, dessen Fensterbänder aus dem Prinzip eines Barcodes abgeleitet wurden. Zum Innenhof zeigt sich derNeubau mit moderner Fassade. Der Bauherr hat das Gebäude konsequent als Smart-Home entwickeln lassen -von der Eingangstür bis zur Wohnungsausstattung lässt sich das Haus digital bedienen.",
    architect: "KPW Papay Warncke und Partner Architekten mbB",
    address: "Mittelweg 169, Haupteingang, Hamburg",
    id: 83,
    lat: 53.5656669,
    lng: 9.9954591,
  },
  {
    district: "St. Georg",
    title: "Freiraumplanung Hamburger Kunsthalle",
    description:
      "Im Rahmen der Modernisierung der Hamburger Kunsthallewurde WES LandschaftsArchitektur mit der Umgestaltungund Aufwertung des Außenbereichs beauftragt. Auf demNiveau des Kunsthallengebäudes ist eine neue Flaniermeileals Fußweg entstanden. Diese wurde mit Sitzgelegenheiten,Anpflanzungen und einer barrierefreien Anbindung an dieAlster ausgestattet. Um die Kunsthalle letztlich auf ihren his torischen, grünen Sockel zu stellen, wurden die Stütz mauern entlang des Glockengießerwalls mit Efeu berankt.",
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
    title:
      "Museum für Kunst und GewerbeRevitalisierung der historischen Turnhalle",
    description:
      "Die historische Turnhalle war einst der größte und höchsteRaum im ganzen Gebäude und wurde als zentrale Aus stellungs- bzw. Sonderfläche revitalisiert. Die Maßnahme bildet den zentralen Baustein zur Neukonzeption des Museums aus dem von den Architekten erstellten Master plan und besteht aus dem Rückbau der Einbauten der 1950erJahre, der Wiederherstellung der bauzeitlichen Raum zusammenhänge, der Neuherstellung der Fenster in der Ursprungsgröße und der Entwicklung eines Nutzungs- und Beleuchtungskonzeptes.",
    architect: "KPW Papay Warncke und Partner Architekten mbB",
    address: "Foyer Museum für Kunst und Gewerbe, Steintorplatz, Hamburg",
    id: 85,
    lat: 53.5512167,
    lng: 10.0097694,
  },
  {
    district: "St. Georg",
    title:
      "Renovierung und Modernisierung des Hotel ReichshofHamburg CURIO Collection by Hilton",
    description:
      "Das denkmalgeschützte Gebäude wurde nach aufwendigerSanierung im Juli 2015 als Reichshof Hamburg CURIO byHilton wiedereröffnet. Es galt, die historischen Stilelementeunter Berücksichtigung des Denkmalschutzes wieder zubeleben und gleichzeitig die Technik an den neuestenStandard anzupassen. Es fand eine Umstrukturierung der public areas und der Zimmer statt. Die Fassadenele mente und das Vordach erfuhren eine Erneuerung und auch die Büroempore wurde zurückgebaut, um den Origi nalzustand wiederherzustellen.",
    architect: "JOI-Design GmbH",
    address: "Kirchenallee 34-36, in der Lobby, Hamburg",
    id: 86,
    lat: 53.5548461,
    lng: 10.008553,
  },
  {
    district: "St. Pauli \nPestalozzi Quartier",
    title: "Wohnbebauung Hamburg St. Pauli - Große Freiheit",
    description:
      "Familiengerechter Wohnungsbau mit wohnverträgli chem Gewerbe im städtischen Kernbereich, Umnutzung vorhandener Schulgebäude und Nachverdichtung durchtypologisch gemischte Neubauten an der Schnittstelle vom bürgerlichen Wohnquartier zum Vergnügungsviertel.",
    architect:
      "Renner Hainke Wirth Architekten (LP 1-4), Schaub und Partner Architekten Partnerschaftsgesellschaft (LP 5)",
    address: "Große Freiheit 58, vor dem Grünspan, Hamburg",
    id: 87,
    lat: 53.55188339999999,
    lng: 9.9580558,
  },
  {
    district: "St. Pauli \nKlubhaus St. Pauli",
    title:
      "Das Klubhaus St. Pauli verfolgt das Ziel, das Livemusik angebot auf der Reeperbahn zu ergänzen und mit seinenvielfältigen kulturellen Nutzungen die Ausgehmeile für deren Besucher noch attraktiver zu gestalten. Die Fassadedes Klubhauses wurde entworfen unter der Prämisse, die Integration von Medien in die Architektur neu zu denken. Eigens konzipierte Metallgittermodule, mit LED-Technikbestückt, sind in unterschiedlichen Ebenen vor der eigent lichen Gebäudehaut angeordnet und generieren eine dreidimensionale Topografie.",
    description: "Architekten: akyol kamps : bbp architekten BDA",
    address: "Spielbudenplatz 20-24, direkt am Eingang des Klubhauses, Hamburg",
    id: 88,
    lat: 53.5492357,
    lng: 9.9643979,
  },
  {
    district: "Allermöhe",
    title: "Kindercampus Anton-Rée-Schule",
    description:
      "Für die Grundschule Anton-Rée-Schule in Allermöhe (Ursprungsbau Hensel + Bechtloff Architekten) wurde einErweiterungsbau mit Mensa/Multifunktionsraum, Unter richtsräumen und Flächen für die Ganztagsbetreuung geplant, um die ehemals zwei Standorte der Schule zusam menzulegen. Eine weit spannende Holzbinderkonstruktion,die das Dach der Mensa trägt, großflächige Verglasungensowie ein aufgeständerter Klassentrakt prägen das Gebäudeund bilden ein offenes und transparentes Erdgeschoss aus.",
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
    title:
      "Viktoria-Kaserne: Umnutzung einer ehemaligen Kaserne in Nutzflächen für Künstler und kunstnahesGewerbe im Rahmen einer Genossenschaft",
    description:
      "Block III der ehemaligen Viktoria-Kaserne ist der verblei bende Teil einer ehemaligen blockrandbildenden preu ßischen Anlage, die zwischen 1878 und 1883 erbaut wurde.Nach vielen unterschiedlichen Nutzungen in den vergan genen Jahrzehnten, die zum Abriss großer Teile des Ensem bles und vielgestaltiger Überformung des Restbestandsführten, erfolgt seit 2016 die Sanierung, der Umbau unddie Erweiterung des Gebäudes mit dem Ziel, Raum für viel fältige künstlerische und kulturelle Aktivitäten zu schaffen.",
    architect: "KSRK architekt & ingenieur",
    address: "Hofeinfahrt Bodenstedtstraße 16, Hamburg",
    id: 90,
    lat: 53.55832179999999,
    lng: 9.9440812,
  },
  {
    district: "Altstadt",
    title: "Hamburg Süd",
    description:
      "Der Sitz der traditionsreichen Reederei Hamburg Süd wurde grundlegend saniert und um einen 7-geschossigenBüroneubau und eine 2-geschossige Tiefgarage erwei tert. Die Sanierungsmaßnahmen des denkmalgeschützten Gebäudeensembles (1958 bis 1964), ein Entwurf des Architekten Cäsar Pinnau, umfassen u.a. eine energetischeSanierung und die Erneuerung der Fassaden. In Abstim mung mit dem Denkmalschutz wurden alle Fassaden entfernt und die Gebäude bis auf die tragende Teile entkernt.",
    architect:
      "KSP Jürgen Engel Architekten (LP 1-5) und KSP Consultgp(Generalplanung)",
    address: "Willy-Brandt-Straße 59-65, Hamburg",
    id: 91,
    lat: 53.5469035,
    lng: 9.9919589,
  },
  {
    district: "Altstadt",
    title: "Denkmalpflegerische Sanierung des ehemaligen Spiegel-Verlagshauses",
    description:
      "Die prägnanten Gebäude Spiegel-Verlagshaus und IBM-Hochhaus wurden durch Werner Kallmorgen zwischen 1965 und 1969 als Ausdruck des neuen städtischen Selbstbewusstseins der Nachkriegszeit, dem Ideal des „fließenden Raumes“ folgend, als optischer Endpunkt der Ost-West-Straße errichtet. Die Innenausstattung des Spiegel-Verlagshauses wurde durch den dänischen Designer Verner Panton gestaltet. Nach dem Auszug der Spiegel-Verlags gruppe wurde das Gebäude denkmalpflegerisch saniert.",
    architect: "Winking · Froh Architekten GmbH",
    address: "Haupteingang, Brandtstwiete 3, Hamburg",
    id: 92,
    lat: 53.5469423,
    lng: 9.9977865,
  },
  {
    district: "Barmbek-Süd",
    title: "FSP1 Berufsschule für Sozialpädagogik",
    description:
      "Der Neubau der Gewerbeschule liegt in unmittelbarer Nach barschaft eines denkmalgeschützten Schulbaus von FritzSchumacher. Die Planung durch Spengler · Wiescholek erfolg te auf der Basis eines Wettbewerbsentwurfs von RennerHainke Wirth. Entstanden ist ein großzügiges, lichtdurch flutetes Haus, dessen Räume sich um eine zentrale, mehrgeschossige Halle mit angeschlossener Mensa und Aula entwickeln. Über eine Freitreppe werden alle Ebenen ein schließlich einer in den Luftraum integrierten Lounge erreicht.",
    architect:
      "Renner Hainke Wirth Architekten (LP 1-2), Spengler · Wiescholek Architekten Stadtplaner (LP 2-6)",
    address: "Wagnerstraße 60, Hamburg",
    id: 93,
    lat: 53.57145300000001,
    lng: 10.0387493,
  },
  {
    district: "Blankenese",
    title:
      "Friedhof Blankenese Friedhofskapelle, Flügelbauten und Abschiedsräume",
    description:
      "In einem dritten Bauabschnitt wurden die Warte- undKondolenzräume, die Flügelbauten des Kapellenvorplatzes,umgebaut und gestalterisch aufgewertet. Zuvor waren es die im expressionistischen Stil gebaute Kapelle (1927, Architekt Winkelmann) und die Abschiedsräume (1962, Architekten Grundmann + Sandtmann), welche von StölkenSchmidt Architekten denkmalgerecht saniert wurden. Ein ungewöhnliches Ensemble unterschiedlicher Baustile prägt die weitläufige Erinnerungslandschaft auf dem Blankeneser Friedhof.",
    architect: "Stölken Schmidt Architekten BDA",
    address: "Friedhofskapelle, Sülldorfer Kirchenweg 151, Hamburg",
    id: 94,
    lat: 53.57634239999999,
    lng: 9.8021506,
  },
  {
    district: "Eimsbüttel",
    title:
      "Oberstufenhaus Eimsbütteler Modell Innere und äußere Grundinstandsetzung",
    description:
      "Das denkmalgeschützte Backsteingebäude von 1911 wurdevon Albert Erbe geplant. Mit der Sanierung sollte die Charakteristik der historischen Fassade mit Verzierungenaus Ziegeln und Muschelkalk originalgetreu erhalten bleiben. Ausgangspunkt für die Gestaltung der Innenräumebildete der denkmalpflegerische Farbbefund. Dieser wurde in der Eingangshalle nachgebildet und in den übrigenBereichen in ein modernes Farbkonzept übersetzt.",
    architect: "andreas schneider architekten GmbH & Co. KG",
    address: "Haupteingang Schule, Bogenstraße 59, Hamburg",
    id: 95,
    lat: 53.5754649,
    lng: 9.9704579,
  },
  {
    district: "Eppendorf",
    title: "The Quality Street",
    description:
      "In einer versteckten Hoflage am Eppendorfer Marktplatzsind auf dem Gelände einer ehemaligen Bonbonpapier fabrik neue Wohngebäude in Ergänzung zu bestehendenAltbauten entwickelt worden. Ehemals war das Geländefast vollständig überbaut, nun bilden individuelle Häuser einvielschichtiges, innerstädtisches Ensemble, das durch seine Lage der städtischen Hektik vollkommen entrückt zusein scheint.",
    architect: "KBNK Architekten GmbH",
    address: "Eppendorfer Landstraße 104, neben der Papeterie, Hamburg",
    id: 96,
    lat: 53.5922501,
    lng: 9.988769999999999,
  },
  {
    district: "Fuhlsbüttel",
    title:
      "Gymnasium Alstertal: denkmalgerechte Grundsanierung, Erweiterungsbau mit Sporthalle und Anbau einer Cafeteria",
    description:
      "Der Altbau wurde 1929 von Oberbaudirektor Fritz Schumacherin moderner Bauweise mit Flachdach und horizontalen Fensterbändern errichtet. 2006 erhielt er eine Erweiterungum eine Cafeteria. Es folgten die Grundsanierung des Altbaus und ein Neubau mit Lernzonen (Kompartments) undSporthalle. Besonderheiten der Altbausanierung sind diedenkmalgerechte Wiederherstellung des Farbkonzeptes inden Fluren, dem Musiksaal und der Aula mit moderner Deckendekoration sowie die Aktivierung von Kellerflächen.",
    architect: "Dohse Architekten",
    address: "Haupteingang Gymnasium Alstertal, Erdkampsweg 89, Hamburg",
    id: 97,
    lat: 53.6328493,
    lng: 10.0172715,
  },
  {
    district: "HafenCity",
    title: "Elbphilharmonie",
    description:
      "Die Elbphilharmonie ist nicht nur ein Haus für die Musik mit einer Konzerthalle für 2100 und einem Kammermusik saal für 550 Besucher. Die beiden übereinander gesta pelten Architekturen des Kaispeichers und der Philharmonie beherbergen außerdem eine dichte Mischung urbaner Nutzungen: Übungsräume, Wohnungen, Bars, ein Restau rant, ein Hotel, einen Shop sowie Parkplätze. Die Plaza, eine Terrasse mit Blick über Hamburg und den Hafen, stehtallen Menschen offen - als neues Angebot im kulturellenund alltäglichen Leben der Stadt.",
    architect: "Herzog & de Meuron Ltd.",
    address: "Platz der Deutschen Einheit 1, 20457 Hamburg, Hamburg",
    id: 98,
    lat: 53.54112869999999,
    lng: 9.9848694,
  },
  {
    district: "HafenCity",
    title:
      "Erweiterung Unternehmenszentrale Gebr. Heinemann 2014 wurde mit den Baumaßnahmen zum Erweiterungs neubau der Unternehmenszentrale Gebr. Heinemann imBereich des Magdeburger Hafens begonnen. Als Ergänzungder bestehenden Gebäude vervollständigt der Neubau als dritter markanter Baukörper das Ensemble harmonisch.So werden das Material des Bestandsziegels und die Höhenentwicklung der Nachbarbebauung aufgenommen.Andere historische Elemente wurden neu interpretiert. Der Neubau wurde nach Anforderungen des Gold-Standards„Nachhaltiges Bauen in der HafenCity“ realisiert.",
    description: "Architekten: gmp International GmbH",
    architect: "gmp International GmbH",
    address: "Haupteingang Koreastraße 5, Hamburg",
    id: 99,
    lat: 53.5436756,
    lng: 10.0017224,
  },
  {
    district: "HafenCity",
    title: "Lohsepark mit denk.mal Hannoverscher Bahnhof",
    description:
      "Als zentrale Grünfläche der HafenCity erfüllt der Lohseparkmit seinen offenen Rasenflächen und über 530 Bäumenwichtige stadträumliche, soziale und ökologische Funkti onen. 550 m lang, zwischen zwei Wasserflächen einge spannt, beinhaltet das Freiraumkonzept zwei grundlegendeIdeen: eine Blickachse von Wasser zu Wasser und eineräumliche Staffelung in drei Höhenstufen. Der in den Parkintegrierte Gedenkort „denk.mal Hannoverscher Bahnhof“erinnert an die Deportation von 8071 Juden, Sinti und Romain den Jahren 1940 bis 1945.",
    architect: "VOGT Landschaft GmbH",
    address:
      "Überseeallee 16, Östlicher Vorplatz HafenCity Universität, U-Bahn Ausgang HafenCity Universität, Hamburg",
    id: 100,
    lat: 53.540291,
    lng: 10.0047373,
  },
  {
    district: "Hammerbrook",
    title:
      "Sonninstraße, Haus 1, Neubau eines Wohngebäudes mit Tiefgarage und einer Gewerbeeinheit",
    description:
      "Neubau eines Wohngebäudes mit 114 Wohneinheiten als öffentlich geförderter Wohnungsbau. Die Fassade zur Sonninstraße weist einen klassischen Fassadenaufbauauf und ist durch plastisch, körperhafte Auskragungen in fünf rhythmisierte Einheiten gegliedert, die ein subtilesSpiel großer Kubaturen ergeben. Neben den großzügigverglasten Zugängen erhält jede der fünf Gebäudeeinheiteneine differenzierte Betonung des Eingangsbereichs, diedurch ihre Varianz fünf eigenständige Adressen markieren.",
    architect: "KPW Papay Warncke und Partner Architekten mbB (LP 1-5)",
    address: "am Eingangsplatz zum Quartier, Sonninstraße 10 , Hamburg",
    id: 101,
    lat: 53.54725730000001,
    lng: 10.016861,
  },
  {
    district: "Hammerbrook",
    title:
      "Wohnen am Sonninkanal, Haus 2, Mehrfamilienhaus mit zwei Gewerbeeinheiten",
    description:
      "Das 9-geschossige Hybridgebäude steht bei der ehema ligen Schokoladenfabrik des historischen Sonninhofs. Die Nutzungsmischung aus Wohnen, Gewerbe und Parkenspiegelt sich in der Fassade wider. Eine Besonderheit bildet hierbei das rote Klinkermauerwerk, welches vor den4- bis 5-geschossigen Parkbereichen als Filtermauer werk ausgebildet wurde. Hinter dem U-förmigen Baukörperverbirgt sich auf Höhe des 4. OG ein grüner Innenhof.",
    architect: "Schenk Waiblinger Architekten",
    address:
      "Haupteingang Sonninhof 3, Sonninstraße 24Hinweis: festes Schuhwerk erforderlich, Sicherheitsschuhe empfohlen, Hamburg",
    id: 102,
    lat: 53.5476486,
    lng: 10.0169265,
  },
  {
    district: "Hammerbrook",
    title: "Wohnanlage am Sonninkanal",
    description:
      "Neubau einer Wohnanlage im innerstädtischen Kontext.Das Projekt verteilt sich auf drei Baukörper, die von drei Hamburger Architekturbüros geplant wurden. ThüsFarnschläder Architekten haben das Haus 3 mit 129 Wohneinheiten in direkter Wasserlage sowie das gesamteSockelgeschoss für Haus 1 und 3 mit Tiefgarage und Nebenflächen geplant. Das Projekt ist in Massivbauweiseund mit erhöhtem Gründungsaufwand errichtet worden.",
    architect: "Thüs Farnschläder Architekten PartmbB (LP 1-5)",
    address: "Südlicher Quartiersplatz, Sonninstraße 20, Hamburg",
    id: 103,
    lat: 53.5471768,
    lng: 10.0169241,
  },
  {
    district: "Hammerbrook",
    title:
      "Leser Kontor - Neubau eines Firmensitzes mit technischem Prüfstand am Mittelkanal",
    description:
      "Die Leser KG ist der größte Hersteller von Sicherheits ventilen in Europa und eines der führenden Unternehmenseiner Branche weltweit. Auf dem angestammten Firmen gelände in der Wendenstraße wurde nach Abbruch allerBestandsgebäude ein neues Hauptquartier in zwei Bauab schnitten errichtet. Der Innenhof zwischen Bürogebäudeund technischem Prüfstand bildet den neuen Firmencam pus zum Mittelkanal hin mit anspruchsvoll gestaltetemWasserbezug. Die offene Gestaltung des Gebäudes soll eineoffene Unternehmenskultur unterstützen.",
    architect: "GRS REIMER ARCHITEKTEN GmbH",
    address: "Wendenstraße 133, Eingang Bürogebäude, Hamburg",
    id: 104,
    lat: 53.5490175,
    lng: 10.0324571,
  },
  {
    district: "Harburg",
    title: "Maritimes Wohnen am Kaufhauskanal",
    description:
      "Maßgeblich für die städtebauliche Struktur der Wohnan lage ist die schachbrettartige Anordnung der Gebäude. Die Form der einzelnen Baukörper wird vor allem durch die Anordnung des Dachfirsts über die Gebäudediagonale hinweg bestimmt. Dadurch ergeben sich an allen vier Seitender Gebäude fallende Traufkanten als gestaltprägendes Element. Die geometrische Besonderheit der Gebäude ist auchim Inneren in Form von offenen und räumlich höchst indi viduellen Galeriewohnungen erlebbar.",
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
    title: "Büro und Geschäftshaus, Am Alsterufer 1- 3",
    description:
      "Der Büroblock bildet den südlichen Abschluss der ehemaligen Dammvorstadt im Schnittpunkt von Außen alster und Wallring. Der Wettbewerbsentwurf des BürosAPB. Architekten wurde durch den Entwurf des Büros Riemann ergänzt. Das Kontorhaus-Ensemble mit zwei Höfenbildet einen urbanen Stadtblock mit Büroflächen auf sieben Geschossen sowie Restaurant- und Einzelhandels flächen. Die Tiefgarage ist viergeschossig.",
    architect:
      "APB. Architekten BDA und Riemann Gesellschaft von Architekten mbH",
    address: "Am Alsterufer 1, vor dem Haupteingang, Hamburg",
    id: 106,
    lat: 53.5591668,
    lng: 9.9946697,
  },
  {
    district: "Harvestehude",
    title: "Sophienpalais",
    description:
      "Das Sophienpalais entstand 1935 und diente als militäri sches Verwaltungsgebäude. Das Gebäude, das durchseinen reduzierten, neoklassizistischen Habitus und seineSymmetrie beeindruckt, wurde in hochwertigen Wohn raum umgestaltet. In enger Abstimmung mit dem Denkmal schutz entkernten und modernisierten ksg architekten und stadtplaner das Sophienpalais. Die umlaufenden Fas saden blieben erhalten. Nur die Südfassade wurde erneuertund erhielt im Bereich der Wohnungen eine moderne Glasfassade, ergänzt durch Loggien sowie gestalterischeFassadenelemente mit ornamentalem Charakter.",
    architect: "kister scheithauer gross architekten und stadtplaner GmbH",
    address: "Sophienterrasse 14, Haupteingang, Hamburg",
    id: 107,
    lat: 53.5762634,
    lng: 9.996062499999999,
  },
  {
    district: "Hoheluft-West",
    title: "Neubau/Erweiterung Gymnasium Hoheluft",
    description:
      "Am Standort der ehemaligen Grundschule Christian Förster-Straße ist aus dem alten Schulgebäude und dem Erweiterungsbau das neu gegründete Gymnasium Hoheluft entstanden. Der Neubau nimmt in seiner archi tektonischen Gestaltung und Anordnung Bezug auf dasAltgebäude und ergänzt es inhaltlich um Unterrichtsräume,Fachklassen, Aula, Ganztagesbereich mit Küche sowie zwei Doppelsporthallen in gestapelter Bauweise. Ein innovativer Grundriss ermöglicht den flexiblen Zusammen schluss von Räumen und multifunktionale Nutzungen.",
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
    title: "Grüne Mitte Hohenfelde",
    description:
      "In Hohenfelde, nahe der Alsterschwimmhalle, wurden auf einem ehemaligen Schulgelände 160 neue Wohnungen errichtet. Insgesamt fünf Gebäude, geplant von vier ver schiedenen Architekturbüros, sind um einen zentralen Stadt teilpark gruppiert, in dem wertvoller Baumbestand erhal ten werden konnte. Zum verkehrsreichen Mühlendamm hinist das Quartier weitgehend geschlossen und so lärm geschützt. Die städtebauliche Gesamtplanung basiert aufeinem Wettbewerb aus dem Jahr 2010.",
    architect: "coido architects und Bruun & MöllersLandschaftsarchitektur",
    address: "Mühlendamm 19, vor dem Eingang, Hamburg",
    id: 109,
    lat: 53.5611136,
    lng: 10.0249666,
  },
  {
    district: "Hummelsbüttel",
    title: "Haus für eine Pianistin",
    description:
      "Dem Wohnhaus gaben zwei Aspekte seine besondere Gestalt: Das Grundstück ist von einem alten Baumbestandgeprägt. Es galt, das Gebäude schonend zwischen den Bäumen einzufügen. Die Bauherrin ist Konzertpianistin japanischer Herkunft. Der Aufstellungsort des Flügels, seine Sicht- und Hörbarkeit während der Proben und Auf führungen, bildete daher den Ausgangspunkt aller innenräumlichen Überlegungen. Neben diesen besonderenAnforderungen dient das Haus als Zuhause für eine fünfköpfige Familie.",
    architect: "eins:eins architekten",
    address: "Distelweg 21, Hamburg",
    id: 110,
    lat: 53.6399554,
    lng: 10.0408541,
  },
  {
    district: "Langenhorn",
    title: "Wohnquartier „Unter den Linden“",
    description:
      "Mit dem Projekt „Unter den Linden“ entsteht ein neuesWohnquartier mit mehr als 450 Wohneinheiten auf dem parkartigen Gelände der ehemaligen Klinik Ochsenzoll.Die historischen Krankenhausbauten werden vollstän dig entkernt, saniert, mit großzügigen Balkon- und Terras senanlagen versehen und in hochwertige Eigentums wohnungen umgewandelt. Mehrere Neubauten fügen sichharmonisch in das Denkmal-Ensemble ein, zum Teil von Störmer Murphy and Partners geplant. Drei weitere Architekturbüros sind am Quartier beteiligt.",
    architect: "Störmer Murphy and Partners (LP 1-5)",
    address:
      "Wasserturm am Jütlandring/FassbinderwegHinweis: festes Schuhwerk erforderlich, da zum Teil noch Baustelle, Hamburg",
    id: 111,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Langenhorn",
    title: "Unter den Linden/Ox-Park",
    description:
      "Mit dem Projekt „Unter den Linden“ entsteht auf 11 ha ein neues Wohnquartier auf dem Gelände des ehemaligenKrankenhauses Ochsenzoll von 1891. Das Denkmal Ensemble aus Krankenhausbauten und Pavillons in dergroßzügigen Parkanlage wurde umgenutzt und nach verdichtet. Ehemalige Patientengärten wurden zu privatenGärten, wobei parkartige Strukturen, wie beeindruckendeGroßbäume, Lindenalleen und eine vielfältige Bepflanzung,erhalten bzw. ergänzt und der Öffentlichkeit zugänglich gemacht wurden.",
    architect: "GHP Landschaftsarchitekten",
    address:
      "Wasserturm am Jütlandring/FassbinderwegHinweis: festes Schuhwerk empfohlen, da zum Teil noch Baustelle, Hamburg",
    id: 112,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Neustadt",
    title: "Denkmalgerechte Sanierung der ersten drei Gebäude im Gängeviertel",
    description:
      "Das Gängeviertel wurde im August 2009 von der Initiative„Komm in die Gänge“ durch etwa 200 Künstler und Kreative besetzt, um die Gebäude vor dem Zerfall und dem Abriss zu retten. Vorgestellt werden die ersten drei sanierten Gebäude Caffamacherreihe 37-39, 43-49und das soziokulturelle Zentrum „Fabrique“ am Valen tinskamp 34a, der bewohnerorientierte Planungs- und Umsetzungsprozess, die Geschichte des Gängeviertels sowieder Umgang mit der denkmalgeschützten Bausubstanz.",
    architect: "Plan-R- Architektenbüro Joachim Reinig",
    address:
      "Ecke Caffamacherreihe 37-39/Speckstraße, vor der Jupi-Bar, Hamburg",
    id: 113,
    lat: 53.5550297,
    lng: 9.982987099999999,
  },
  {
    district: "Neustadt",
    title:
      "Neubau eines Büro-Hochhauses zwischen BAT-Hochhaus und Finnland-Hochhaus",
    description:
      "Der Grundgedanke des ehemaligen Oberbaudirektors Hebebrandt, einen Kranz von Hochhäusern um die innereStadt zu legen, wurde an der Esplanade in den 1960er Jahren mit zwei Hochhäusern umgesetzt. Das neue Hoch haus ergänzt dieses Ensemble, nimmt die Kubatur desehemaligen BAT-Hochhauses auf und erreicht die Höhe desFinnland-Hochhauses. Ein besonderes Augenmerk lag auf der Gestaltung der Schmalseiten, die die Fassadengestal tung des BAT-Hochhauses aufnehmen und transformieren.",
    architect:
      "Winking · Froh Architekten GmbH (LP 1-5 + künstlerische Oberleitung)",
    address: "Haupteingang, Esplanade 40, Hamburg",
    id: 114,
    lat: 53.5581641,
    lng: 9.992253999999999,
  },
  {
    district: "Neustadt",
    title:
      "Sanierung des denkmalgeschützten Ensembles von Godber Nissen Neuer Wall 41 und 43/Alsterarkaden 27",
    description:
      "Die Gebäude Alsterarkaden 27, Neuer Wall 43 und NeuerWall 41 wurden in den 1950er Jahren von dem Archi tekten Godber Nissen geplant und gelten als typisches Ensemble dieser Zeit. Beide Gebäude wurden in den letzten Jahren in Abstimmung mit dem Denkmalschutz amt umfänglich saniert.",
    architect: "akyol kamps : bbp architekten gmbh",
    address: "Neuer Wall 41, Hamburg",
    id: 115,
    lat: 53.55124439999999,
    lng: 9.990298500000002,
  },
  {
    district: "Ohlstedt",
    title: "Kinderkreisel",
    description:
      "Die preisgekrönte Kinderkrippe (BDA Preis Hamburg 2017und Shortlist Architekturpreis 2017 des Deutschen Archi tekturmuseums) liegt in die Natur eingebettet am Waldrand.Das Gebäude bietet vielfältige Sichtbezüge im Innen- undAußenbereich. Durch eine durchlässige Wand sind die unterschiedlichen Funktionen über den gemeinschaftlichen Innenraum verbunden. Der Holzrahmenbau ist mit einernaturbelassenen Lärchenschalung und großzügigen Glas flächen verkleidet. Diese ermöglichen überraschende Einblicke in das Haus.",
    architect: "Kraus Schönberg Architekten",
    address: "KITA Kinderkreisel, Bredenbekkamp 20 a            , Hamburg",
    id: 116,
    lat: 53.6853054,
    lng: 10.1445914,
  },
  {
    district: "Rissen",
    title: "Campus Rissen",
    description:
      "Die Stadtteilschule Rissen erhielt am Standort des Gymnasiums Rissen ein neues Schulgebäude. Beide Schulenteilen sich den Campus und wurden um ein gemeinsa mes Aula- und Mensagebäude ergänzt. Zwei Schulen aneinem Standort führen zu Synergieeffekten in räumlicher und pädagogischer Hinsicht. Den grauen und erdfarbenenBetonplatten der Bestandsschulbauten wurden farbige Fassaden mit gepixelten Farbflächen gegenübergestellt.",
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
    title: "Grandhotel The Fontenay",
    description:
      "Auf dem Areal des früheren Hotels InterContinental an der Außenalster entsteht ein neues Fünf-Sterne Superior-Hotel. Der in einem internationalen Wettbewerberstplatzierte Entwurf von Störmer, Murphy and Part ners (Innenarchitektur in Zusammenarbeit mit dem Designer Mattheo Thun, Mailand) ist seit 2014 in Bau, im Herbst 2017 wird „The Fontenay“ eröffnen und soll an der Spitze der deutschen Luxushotellerie stehen. Der sechsgeschossige Solitärbau fügt sich mit flie ßenden Linien harmonisch in das parkartige Gelände ein.",
    architect: "Störmer Murphy and Partners",
    address:
      "Baustelleneingang, Fontenay 10Hinweis: max. 15 Teilnehmer pro Führung, festes Schuhwerk erforderlich, Hamburg",
    id: 118,
    lat: 53.5648549,
    lng: 9.9968526,
  },
  {
    district: "Rotherbaum",
    title: "Haus der Betriebswirtschaft",
    description:
      "Das ehemalige Wohnpalais wurde 1896 nach den Plänendes Architekten Semmy Engel im Universitätsviertel Rotherbaum errichtet. Die für die Bauzeit typische Raum gliederung blieb durch alle Phasen des Nutzungswan dels erhalten. Seit 1948 wurde das Haus durch die Rechts wissenschaft und Kunstgeschichte, später durch die Universitätsverwaltung genutzt. Nach der Sanierung, Restaurierung und gestalterischen Überarbeitung steht das Haus der Betriebswirtschaft seit 2016 seinen neuen Nutzern zur Verfügung.",
    architect: "Stölken Schmidt Architekten BDA",
    address: "vor dem Haus, Moorweidenstrasse 18, Hamburg",
    id: 119,
    lat: 53.5641179,
    lng: 9.9900153,
  },
  {
    district: "Stellingen",
    title: "Kolumbarium St. Thomas Morus",
    description:
      "In der 1979 von Jörn Rau erbauten Kirche und im Innenhof wurde ein Kolumbarium geschaffen, während die Kirche weiterhin auch für Gemeindegottesdienste genutzt wird. Die Urnengräber wurden zu Blöcken zusam mengefasst, deren Ausmaße die Wirkung des großenKirchenraumes auch aus der Sitzposition der Gläubigen heraus nicht stören. Im Außenbereich, dem „Paradies“, gruppieren sich weitere Urnenblöcke und begrünte Bank blöcke um die „ewige Asche“.",
    architect:
      "Andreas Rowold Architekt und Munder und Erzepky Landschaftsarchitekten",
    address: "Koppelstraße 16, im Foyer, Hamburg",
    id: 120,
    lat: 53.5926897,
    lng: 9.936755999999999,
  },
  {
    district: "St. Georg",
    title: "Umbau und Erweiterung der Hamburger Kunsthalle",
    description:
      "Durch umfangreiche Umbau- und Erweiterungsmaßnahmendes Museums wurde ein zentrales Entrée aus der „Mitte des Ensembles“ entwickelt. Dazu wurde der ursprünglicheHaupteingang des Gründungsbaus reaktiviert und ange passt. Die Integration eines Auditoriums sowie Ticketing-,Garderobenräume und ein Museumsshop waren neben der Modernisierung der Depoträume und der Neugestaltungder Sammlungsräume Teil des Planungsauftrags.",
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
    title: "Klimamodellquartier „Op‘n Hainholt“",
    description:
      "Mit dem Klimamodellquartier sind 14 Eigentumswoh nungen, 27 Reihenhäuser und 8 Doppelhäuser entstanden.Satteldächer und Fassaden mit Backstein und Holz verschalungen fügen die Gebäude in die ländlich geprägteUmgebung der Stadtrandlage ein. Die Ökobilanz für diese Wohnanlage zeigt, dass mit dem Einsatz recycelterund nachhaltiger Baustoffe über 40 % Energie eingespartwerden. Herz des innovativen Energiekonzepts ist ein Solar Eis-Speicher.",
    architect: "eins:eins architekten",
    address: "Osterfeld 1, Hamburg",
    id: 122,
    lat: 53.5816339,
    lng: 9.800671099999999,
  },
  {
    district: "Winterhude",
    title: "Klassenhaus für die Gelehrtenschule des Johanneums",
    description:
      "Zwischen der denkmalgeschützten Gelehrtenschule des Johanneums von Fritz Schumacher und dem Forum von2007 fügt sich das neue Klassenhaus an der Opitzstraße ein.Mit einer Terrassierung nach Norden bleibt ein respekt voller Abstand zu dem Altbau gewahrt und ein Teil der bebauten Pausenhoffläche bleibt über Freitreppen weiterfür die Schüler nutzbar. Auch im Inneren gibt es enge Verzahnungen von den notwendigen Treppen mit den Flur flächen vor den Klassen, wodurch besondere räumlicheQualitäten ausgebildet wurden.",
    architect: "Winking · Froh Architekten GmbH",
    address: "Maria-Louisen-Straße, Ecke Opitzstraße, Hamburg",
    id: 123,
    lat: 53.5893705,
    lng: 10.0052716,
  },
  {
    district: "Altstadt",
    title: "Gerhart-Hauptmann-Platz (1975)",
    description:
      "In den 1970er Jahren als poetischer Ort der Ruhe konzipiert,entschleunigt die „topografische Landschaft“ des Gerhart-Hauptmann-Platzes noch heute den Großstadt betrieb. Das Gestaltungsziel, den ersten Hamburger Platz mit lichten Bäumen zu schaffen, erfüllten Platanen Inseln, die sich mangels Beschnitt in einen „Wald“ verwandelt haben. Zur Förderung der Nutzer-Interaktiondienten für die Zeit innovative, bewegliche Sitzelemente,Rundbänke und Wasser-Reliefs, die zum Teil, wie der Pavillon, rückgebaut wurden.",
    architect:
      "WES LandschaftsArchitektur (ehemals WES & Partner)Führung: Hinnerk Wehberg",
    address: "Gerhart-Hauptmann-Platz, Ecke Alstertor/Rosenstraße, Hamburg",
    id: 124,
    lat: 53.550953,
    lng: 9.998699499999999,
  },
  {
    district: "Altstadt",
    title: "Rathausmarkt Hamburg (1982)",
    description:
      "Der Rathausmarkt ist aus dem Siegerentwurf eines bundesoffenen Wettbewerbs entstanden. Die noch im 19. Jahrhundert geschaffene Raumfolge Binnenalster,Kleine Alster, Rathausmarkt wurde durch die neue Treppeentlang der kleinen Alster betont und mit erhöhter Auf enthaltsqualität ausgestattet. Der Platz lebt von der großenfreien Fläche vor dem Rathaus und den Arkaden gegen über. Der Rathausmarkt ist ein Platz zum Verweilen, zumalltäglichen Gebrauch, für Demonstrationen und ebenso einOrt der Repräsentation.",
    architect:
      "Timm Ohrt & Hille von Seggern; Wettbewerbsentwurf: FNO Planungsgruppe",
    address:
      "Viertelkreistreppe bei der Barlach-Stele an der Kleinen Alster, Hamburg",
    id: 125,
    lat: 53.55154049999999,
    lng: 9.992402,
  },
  {
    district: "Klein Flottbek",
    title: "Biozentrum Klein Flottbek (1982)",
    description:
      "Die Anforderungen des Lehr- und Forschungsbetriebes waren mit dem Maßstab der Umgebung, vornehmlichVillenbebauung, in Einklang zu bringen. Neben dem Verfü gungsgebäude für Lehre und Forschung mit Hörsälen, Bibliothek und Kurslaboren, den Anzuchtgewächshäusernund dem „Herbarium Hamburgense“ entstand ein Ver sorgungsgebäude für den botanischen Garten. Die beidenunteren Geschosse der Gebäude wurden in einer rotenZiegelfassade ausgeführt. Die Obergeschosse in Stahl undGlas treten diesen gegenüber zurück.",
    architect:
      "Arbeitsgemeinschaft Biozentrum Hamburg-Flottbek Nissen-Patschan Werner WinkingFührung: Prof. Bernhard Winking",
    address: "am Haupteingang, Ohnhorststraße 18, Hamburg",
    id: 126,
    lat: 53.5596717,
    lng: 9.859782599999999,
  },
  {
    district: "Steilshoop",
    title: "Gemeindezentrum der Ev. Luth Martin-Luther-King-Kirche (1974)",
    description:
      "Das Gemeindezentrum war das erste Bauwerk im Zentrumdes neuen Stadtteils Steilshoop. Um den zentralen Andachtsraum legen sich wie ein Kreuz das Gemeindehaus,Jugendhaus, Wohnungen und ein „hortus conclusus“. Die Architektur folgt skandinavischen Einflüssen in der Ver wendung von blauer Baukeramik und Holz sowie in derInnenraumgestaltung. Altar, Kreuz und Leuchten, Lesepultund Opferstöcke sind eine Gemeinschaftsarbeit des Architekten und des Gold- und Silberschmieds Alfons Werner.",
    architect:
      "Patschan Werner Winking Architekten, Landschaftsarchitekten: Wehberg · Lange + PartnerFührung: Prof. Asmus Werner",
    address: "Foyer Erdgeschoss Gemeindehaus, Gründgensstraße 28, Hamburg",
    id: 127,
    lat: 53.609964,
    lng: 10.0594985,
  },
  {
    district: "St. Georg",
    title: "Stadterneuerung in St. Georg zwischen 1978 und 2017",
    description:
      "Die Veranstaltung besteht aus einem Einleitungsvortrag im Stadtteilbüro zur historischen Entwicklung von St. Georgund der Geschichte der Stadterneuerung von 1978 bis heute und einer Führung durch den Stadtteil, die die unter schiedlichen Welten des Stadtteils - Lange Reihe - Hansaplatz - Steindamm den Besuchern vor Augen führt.Dabei werden einzelne Projekte der Sanierung (Altbau sanierung, Wohnungsneubau, Straßen - und Platzgestaltung)und u.a. das Thema Bürgerbeteiligung erläutert.",
    architect: "ASK GmbH - Stadtplaner und Sanierungsträger",
    address:
      "Stadtteilbüro am Hansaplatz/Ecke Zimmerpforte, Zimmerpforte 8, Hamburg",
    id: 128,
    lat: 53.5552277,
    lng: 10.0122972,
  },
  {
    district: "Allermöhe",
    title: "Studierendenwohnanlage Sophie-Schoop-Weg",
    description:
      "Der Mangel an bezahlbarem Wohnraum in Hamburg istbesonders für Studierende ein Problem. Um bezahlbarenWohnraum zu realisieren, müssen problematische und dadurch kostengünstige Grundstücke, wie hier z.B. in lärmintensiver Lage, durch kluge städtebauliche und archi tektonische Konzepte qualifiziert werden. Der Neubau des Studierendenwerks Hamburg mit 266 Plätzen in verschiedensten individuellen Wohnformen ist ein Pionier projekt am Tor zum neuen Stadtteil Oberbillwerder.",
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB (LP 1 bis 5), SWP-Architekten Göttsche-Hoffmann-Partner GbR (LP 6 bis 8)",
    address: "Sophie Schoop Weg 2, Haupteingang, Hamburg",
    id: 129,
    lat: 53.4893489,
    lng: 10.1607664,
  },
  {
    district: "Altona-Altstadt",
    title: "Stadthaus Schmarjestraße",
    description:
      "Eine alte Buche und die St. Petri-Kirche prägen das kleineGrundstück in der Schmarjestraße in Altona, das sich zu einem Ort für eine Baugemeinschaft mit sehr diversenWohnvorstellungen entwickelte: Studiowohnen, Loft mit Dachterrasse, vertikale Bibliotheken und ein Patio im Untergeschoss. Die fünf Wohnungen sind nach dem Prinzip des Stadthauses entwickelt, so besitzen sie jeweilseinen eigenen, individuellen Wohnungseingang auf Erdgeschossniveau und sind vornehmlich über mehrere Geschosse organisiert.",
    architect: "coido architects | Cordsen Ipach + Döll GmbH",
    address: "Schmarjestraße 24, Hamburg",
    id: 130,
    lat: 53.5490355,
    lng: 9.9390061,
  },
  {
    district: "Altstadt",
    title: "Revitalisierung Büro- und Geschäftshaus Neuer Wall 50",
    description:
      "Das sich zu drei Seiten orientierende Gebäude befindet sich im historischen Kerngebiet von Hamburg. Stark in die Jahre gekommen, hat das Bestandsgebäude aus den1980er Jahren durch die Umbaumaßnahme einen frischenund modernen Ausdruck erhalten, ohne dass die Grund struktur des Gebäudes im Wesentlichen verändert wordenist. Die prägende Erkerstruktur wurde beibehalten. Dieschrägen Dachformen wurden durch nutzbare Terrassenersetzt. Das Gebäude erhielt zusätzlich eine Aufstockung inForm von zwei Penthouse-Wohnungen.",
    architect: "Florian Fischötter Architekt GmbH",
    address: "auf der Bleichenbrücke, Hamburg",
    id: 131,
    lat: 53.5516681,
    lng: 9.9884753,
  },
  {
    district: "Altstadt",
    title: "„Prospekt“ Kunst am Bau - Mahnmal St. Nikolai",
    description:
      "Der am Mahnmal St. Nikolai realisierte Kunst am Bau Wettbewerbsbeitrag „Prospekt“ ist eine Installation, die die Skulpturen von St. Nikolai in Szene setzt. Durch zwei Präsentationsformen, bei Tag und bei Nacht, werden dem Besucher Einblicke und Aussichten auf den Figurenschmuck des Turmes ermöglicht.",
    architect: "acollage. architektur urbanstik und Nic Fey",
    address:
      "Mahnmal St. Nikolai, Hauptportal, Willy-Brandt-Straße 60, Hamburg",
    id: 132,
    lat: 53.5474603,
    lng: 9.9906708,
  },
  {
    district: "Bahrenfeld",
    title: "Praxislandschaft mit smarter Hotelatmosphäre",
    description:
      "Zahnarztpraxen suchen mehr denn je nach Wegen, den Patienten als Kunden zu gewinnen. Die dreifache Praxis, LS smart LS kids LS kieferorthopädie, erforderte die Zusammenfügung von einem funktionalen Raumkonzept,hochwertiger Gestaltung und Technik. In einer vier monatigen Planungs- und Bauzeit konnte der geforderteRaumbedarf durch geschickte Möbelgestaltung redu ziert werden. Die Kunden werden auf Augenhöhe empfangen.In Anlehnung an eine Hotelatmosphäre sind Material und Beleuchtung konzipiert worden.",
    architect: "Kamleitner Architekten",
    address:
      "Friesenweg 2a (kleine Stichstraße), erster Eingang, Erdgeschoss, Hamburg",
    id: 133,
    lat: 53.5587702,
    lng: 9.9085998,
  },
  {
    district: "Billstedt",
    title: "Erweiterung Katholische Schule St. Paulus",
    description:
      "Anforderungen wie Inklusion und Ganztagesbetrieb machtenfür die bestehende Schule eine Erweiterung für Unter richtsräume, Caféteria und Verwaltung erforderlich. Dasdidaktische Transparenzkonzept der Schule fand dabei seine bauliche Entsprechung in einem bewusst offen gehal tenen Gebäude mit zahlreichen Durch-, Ein- und Ausbli cken. Die lichtdurchflutete Halle mit transparentem Folien kissendach dient als neuer zentraler Versammlungs- undBegegnungsort, ergänzt um diverse Kommunikations- undRückzugsbereiche wie der Bibliothek mit Dachterrasse.",
    architect: "APB. Grossmann-Hensel Schneider Andresen Architekten BDA",
    address: "Katholische Schule St. Paulus, Öjendorfer Weg 14, Hamburg",
    id: 134,
    lat: 53.5406045,
    lng: 10.1091166,
  },
  {
    district: "Blankenese",
    title: "Erweiterungsbau Stadtteilschule Blankenese",
    description:
      "Flexible Nutzung, Heimatbildung und individuelle Lernortesind die Kernthemen der Stadtteilschule Blankenese. Das neu gestaltete Foyer mit Mensa, Räumen für Musik,Kunst und Darstellendes Spiel sowie mit Bibliothek sinddas neue Herzstück des Zubaus. Offen gestaltete Bereiche,mobile Trennwände, individuelle Einbauten und Mobiliarverleihen diesem eine atelierartige Atmosphäre. Die neuenHeimaten für die Unterstufe sind jahrgangsweise im drei geschossigen Klassenhaus untergebracht und ebenfallsvom Foyer aus erreichbar.",
    architect:
      "Trapez Architektur GmbH (LP 1 bis 9), Architekturbüro Herzer (LP 8, teilweise)",
    address: "Foyer, Zugang über Frahmstraße 15, Hamburg",
    id: 135,
    lat: 53.5638303,
    lng: 9.822298199999999,
  },
  {
    district: "Eimsbüttel",
    title: "Berufsschule Eimsbüttel - Neubau Klassenhaus",
    description:
      "Beim Neubau der Berufsschule Eimsbüttel handelt es sich um die Erweiterung eines denkmalgeschützten Gebäu des von Fritz Schumacher (1910). Das neue Klassenhausschließt sich an den Risalit des historischen Bauwerks anund setzt sich durch eine dezente Glasfuge ab. Die Fas sade zitiert die historische Klinkerarchitektur in Materialitätund Format. Die Cafeteria stellt mit ihrer Raumhöhe eineBesonderheit im Hamburger Schulbau dar. Die Unterrichts räume sind als neue Lernwelten gestaltet.",
    architect: "ABJ. Planungsgesellschaft mbH",
    address: "Haupteingang Lutterothstraße 80 (Elsa-Rauch-Platz), Hamburg",
    id: 136,
    lat: 53.5822227,
    lng: 9.9469605,
  },
  {
    district: "Eimsbüttel",
    title: "Stadtraumerneuerung in der Osterstraße",
    description:
      "Die Osterstraße ist das quirlige Zentrum Eimsbüttels - ein bunter Mix aus Einzelhandel und Gastronomie. In die Jahre gekommen war sie dennoch, stammten dieGrundzüge der Straßenraumgestaltung noch aus den1950 /1960er Jahren. Ein Bedürfnis nach einem urbanenStraßenraumflair war in den Bürgerbeteiligungen über deutlich geworden. Es ergab sich die Chance zur vollständi gen Neuordnung, wobei das in der Verkehrsplanung ge wohnte Denkmuster, die Fahrbahn als Hauptfläche und derBürgersteig als Nebenfläche, hier invers entwickelt ist.",
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
    title: "Neubau Kinder-UKEWerner und Michael Otto Universitätskinderklinik",
    description:
      "Der Entwurf wird von der im Eingangsbereich stehenden126 jährigen Hainbuche geprägt. Sie bildet das Leitmotiv für den gesamten Entwurf „dem Baumprojekt“ und ist die Seele des neuen Hauses. Um sie herum fügt sich das Gebäude offen, lichtdurchflutet und großzügig. Neben denhochtechnischen Bereichen hält es immer wieder Nischenbereit, die den „kleinen Patienten“ und Besuchern Geborgen heit bieten und Vertrauen stiften sollen.",
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
    title: "Neubau Gymnasium Farmsen",
    description:
      "Das Gymnasium Farmsen wird seit jeher als „Schule im Grünen“ wahrgenommen. Die Aufgabe bestand darin, trotz Teilabbruchs des Bestands und Errichtung des drei geschossigen Neubaus diese Qualität zu erhalten. Der Neubau hat die Form eines rechtwinkligen Z. Während inden kurzen Schenkeln des Baus die Jahrgangsbereicheuntergebracht sind, nimmt der mittlere Teil Ganztags- undGemeinschaftsflächen sowie nahezu alle Fachbereiche auf. Große verglaste Schächte bringen Tageslicht vom Dachin die Gemeinschaftsräume in den Obergeschossen und bis in die Aula und die Mensa im Erdgeschoss.",
    architect: "Haslob, Kruse + Partner Architekten mbB",
    address: "Treffpunkt vor dem Haupteingang, Swebenhöhe 50, Hamburg",
    id: 139,
    lat: 53.61224370000001,
    lng: 10.1096947,
  },
  {
    district: "HafenCity",
    title: "Öffentliche Freianlagen Westliche HafenCity",
    description:
      "Die ehemaligen Hafenflächen werden in einen neuen, maritimen Stadtraum transformiert - das größte innerstädt ische Stadtentwicklungsprojekt Europas. Es entsteht ein gemischt genutzter, urbaner Raum, der Menschen näheran das Wasser heranbringt. Viel Grün und Wasser bildendie Identität der vielfältigen Orte, das mediterrane Designstellt unmittelbare Bezüge zwischen Promenaden, Straßen,Plätze, Parks und dem Wasser her - wie eine wechselndeLandschaft entlang der Kais, die von Menschen statt vonSchiffen geprägt werden.",
    architect:
      "Miralles Tagliabue EMBT (LP 1 bis 4), WES GmbH LandschaftsArchitektur (LP 5 bis 8)",
    address: "Magellan-Terrassen / Großer Grasbrook, Hamburg",
    id: 140,
    lat: 53.5425675,
    lng: 9.9933046,
  },
  {
    district: "HafenCity",
    title: "Campus Futura",
    description:
      "Neubau eines Hotels mit Wohnungsteil Im Fokus der Planung des Jugend- und Familienhotels im Baakenhafen steht ein beeindruckendes Raumerlebnis für die Gäste. Unterschiedliche Ebenen, vielfältige Blick beziehungen und Durchblicke bis zum Wasser prägen die Räume des umweltzertifizierten Hotels. Die fantastischeLage am Hafen brachte eine anspruchsvolle technische Planung mit sich. Flutschutztore zur Hafenseite und ein hoherSchallschutz, bedingt durch die Anbindung der U-Bahn und die Versmannstraße, mussten berücksichtigt werden.",
    architect:
      "KBNK Architekten GmbH (LP 2 bis 4, Erstellung Leitdetails, Künstlerische Oberbauleitung)",
    address: "Versmannstraße 12, Ausgang U-Bahnhof, Hamburg",
    id: 141,
    lat: 53.5400919,
    lng: 10.0091643,
  },
  {
    district: "Langenhorn",
    title: "Wohnen am Kiwittsmoor-Park",
    description:
      "Der Neubau nimmt mit seiner geknickten Form zum einendie Ausrichtung der bestehenden Häuserzeilen auf, zumanderen orientiert er sich am Straßenverlauf. Am Übergangder „Fritz-Schumacher-Siedlung“ zur nördlichen „Garten stadt Langenhorn-Heidberg“ - entstanden im Zeichen dervom damaligen Oberbaudirektor Hebebrand proklamierten„aufgelockerten und gegliederten Stadt“ - setzt er einenAkzent, der sowohl auf die aktuelle Entwicklung der Stadtals auch auf die städtebauliche Historie verweist.",
    architect:
      "tun-architektur, T. Müller / N. Dudda Partnerschafts gesellschaft mbB (LP 1 bis 7, teilweise 8), architekturbüro j. h. haase (LP 1 bis 5, teilweise 8)",
    address: "Tangstedter Landstraße 381, Hamburg",
    id: 142,
    lat: 53.6700236,
    lng: 10.025704,
  },
  {
    district: "Neustadt-Nord",
    title: "WLC - Work Life Center",
    description:
      "Die Oberpostdirektion wurde 1883-1887 erbaut und 1997in die Denkmalliste aufgenommen. Die Neuplanung hat die historischen Fassaden und Treppenhäuser sowie dieEisenhalle erhalten. Auf einer neuen Tiefgarage ist die Halleals neue Verbindung zum Ostbau inszeniert. Der Baukör per am Gorch-Fock-Wall ist um eine gläserne Aufstockungergänzt, wie sie bereits am Ostbau ausgeführt wurde. ZumDammtorwall wurde das Haus um einen fünfgeschossigenBüroaufbau erweitert, der die Halle zur Hälfte überkragt.",
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
    title: "Gymnasium ChristianeumNeubau Bibliothek und Grundinstandsetzung",
    description:
      "Das Christianeum wurde 1968 bis 1971 nach Plänen der dänischen Architekten Arne Jacobsen und Otto Weitling errichtet. Das Gebäude steht außen und innen einschließlichder Ausstattung unter Denkmalschutz. Für den wertvollenBuchbestand, basierend auf einer Schenkung des Schulgrün ders, Christian VI, König von Dänemark, wurde durch denAusbau eines Hochkellers und durch die Umstrukturierungvon Räumlichkeiten eine neue Bibliothek geschaffen. Zeit gleich fand die innere Grundinstandsetzung der Schule statt.",
    architect: "lup-architekten, Inhaber Stefan Mathey",
    address: "Otto-Ernst-Straße 34, Haupteingang, Hamburg",
    id: 144,
    lat: 53.55804,
    lng: 9.874189999999999,
  },
  {
    district: "Rotherbaum",
    title: "Wohnen an der MagistraleDurchschnitt / An der Verbindungsbahn",
    description:
      "Das Gebäude liegt an einer Magistrale mit angrenzenderBahntrasse und ist durch erhebliche Lärmemissionen belastet. Vor dem Hintergrund der Grundstücksknappheit inden Städten zeigt das Projekt, dass das Thema „Schall schutz im Wohnungsbau“ wohnlich und hochwertig um setzbar ist. Das bestehende Quartier wurde durch dieSchließung des Blockes deutlich aufgewertet und ein ruhigerInnenhof gewonnen. Die Nachverdichtung hat so auch für die Nachbarschaft einen großen Mehrwert geschaffen.",
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
    address: "An der Verbindungsbahn 3, vor dem Hauseingang, Hamburg",
    id: 145,
    lat: 53.5644005,
    lng: 9.979468599999999,
  },
  {
    district: "Uhlenhorst",
    title: "Umbau der Bibliothek der Hochschule für bildende Künste",
    description:
      "Ziel des Umbaus der Bibliothek der denkmalgeschütztenHochschule für bildende Künste war die Erweiterung desinhaltlichen und räumlichen Angebots. Durch das Addierenvon zusätzlichen Funktionen per Einbauten und Möbel, die sich in Form und Materialität an dem Entwurf Fritz Schu machers orientieren, wurde der Bestand sensibel fortge schrieben. Im großen Lesesaal und im ehemaligen Magazinwurden zwei sehr unterschiedliche Arbeitswelten mit einer Vielzahl an neuen Nutzungsmöglichkeiten geschaffen.",
    architect:
      "asdfg Architekten in Kooperation mit den Professoren Jesko Fezer und Glen Oliver Löw",
    address: "Lerchenfeld 2, vor der Bibliothek im 2. Obergeschoss, Hamburg",
    id: 146,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Wilhelmsburg",
    title: "Betriebshof Alte Gärtnerei - Inselpark",
    description:
      "Auf dem Gelände der „Internationalen Gartenschau 2013“ist ein neuer Betriebshof für 32 Büro- und Außendienst mitarbeiter entstanden. Für die zukünftige Parkbewirtschaf tung stehen in dem 2017 fertig gestellten Gebäudeen semble ein Verwaltungsbau und Remisen zur Verfügung. Die Gebäude wurden vollständig in einer Holzrahmen konstruktion errichtet. Die handwerklichen Details der außen- und innenräumlichen Fassaden sowie die der Möbel- und Arbeitsplatzeinrichtungen können als vorbild haft bezeichnet werden.",
    architect: "Stölken Schmidt Architekten BDA",
    address: "Hauland 83, Hamburg",
    id: 147,
    lat: 53.4867095,
    lng: 9.997579799999999,
  },
  {
    district: "Wilhelmsburg",
    title: "Woodie (Universal Design Quarter)",
    description:
      "Woodie ist das derzeit weltweit größte Wohnbauprojekt in Holz-Modulbauweise und bietet Micro-Apartments für 371 Studierende. Als Teil eines neuen Wohnquartiers in Hamburg-Wilhelmsburg knüpft es an den experi mentellen Charakter der IBA 2013 an. Die 20 Quadratmetergroßen Apartments wurden inklusive ihrer Einbauten in Österreich vollständig aus Vollholz vorgefertigt und inner halb von wenigen Monaten in Hamburg montiert.",
    architect: "Sauerbruch Hutton",
    address: "Haupteingang Woodie, Dratelnstraße 32, Hamburg",
    id: 148,
    lat: 53.4993902,
    lng: 10.0004752,
  },
  {
    district: "Altona-Nord",
    title: "Freiraumplanung Paketpostamt Altona (1974)",
    description:
      "Das Paketpostamt Altona wurde in den 1970er Jahren auf dem Gelände des ehemaligen Kaltenkirchener Bahnhofsgebaut. Die künstlerische Perspektive des Büros WES &Partner prägte maßgeblich die Freiraumgestaltung mit dergeschwungenen Topografie, dem mäandernden Backsteinsowie einzelnen, expressiven Kunstobjekten. Das Projekterhielt 1972 den „Preis des Bundesbauministeriums fürIndustrie im Städtebau und Auszeichnung als vorbildlicheLeistung für Kunst und Architektur 1972“.",
    architect: "WES & Partner (heute WES LandschaftsArchitektur)",
    address:
      "Haupteingang Paketpostamt Altona, Kaltenkirchener Straße 1-3, Hamburg",
    id: 149,
    lat: 53.566224,
    lng: 9.9405901,
  },
  {
    district: "Eimsbüttel",
    title: "Wiederauf- und Umbau der ev.-luth. Apostelkirche (1982)",
    description:
      "Die Kirche wurde von den Architekten Jürgensen / v. Melle1893 / 94 als erster „Baustein” der Stadterweiterung Eims büttel erbaut. Nach einem Brand 1977 wurde sie 1980 -1982mit Büro, Forum, Gemeinderäumen im Erdgeschoss undKirchraum im Obergeschoss sowie neuem Eingangshof undPortal wiederaufgebaut. Grundlage war das Prinzip des gebundenen Kontrastes zwischen historischer Substanz und neuen Elementen. Die Ausstattung, Orgel, Chorfenster,Taufe, Kanzel und Kreuz waren Teil des Gesamtkonzeptes.",
    architect:
      "Prof. Bernhard Hirche (Wettbewerb, Entwurf); Arbeitsgemeinschaft Apostelkirche: Prof. Bernhard Hirche und Architekten Grundmann / Rehder (Ausführung)",
    address: "Bei der Apostelkirche 1, Eingangshof, Hamburg",
    id: 150,
    lat: 53.57558539999999,
    lng: 9.9455575,
  },
  {
    district: "St. Georg",
    title: "Drachenbau  St. Georg Wohnungsbaugenossenschaft eG (1987)",
    description:
      "Drachenbau ist eines der Pionierprojekte gemeinschaft licher Wohnformen. Als Kleingenossenschaft baute sie eine ehemalige Poststation zu Wohngemeinschafts wohnungen um und errichtete zwei Neubauten im sozialen Wohnungsbau für junge und alte Haushalte. Es wurden mit neuen Förderbedingungen koppelbare Wohnungenentwickelt und Gemeinschaftsräume integriert. Drachen bau war auch ein erstes Projekt des von den Architekten initiierten alternativen Stadtentwicklungsträgers Stattbau.",
    architect: "Planerkollektiv",
    address: "Schmilinskystraße 6 a, Tordurchfahrt, Hamburg",
    id: 151,
    lat: 53.5592905,
    lng: 10.0110978,
  },
  {
    district: "Altona",
    title: "Klopstock Höfe",
    description:
      "Eine Nachverdichtung unter extremen räumlichen Bedin gungen. Das Grundstück befindet sich in einem hoch umbauten schmalen Hinterhof, dessen südliche Seite voneiner viergeschossigen Brandwand abgeschlossen wird. Ist an einem solchen Ort der Bau von 23 neuen Wohnungenmit einem Drittel öffentlich geförderten Wohnungsbauüberhaupt möglich? Dank einer raffinierten Raumorganisa tion ist es gelungen, den besonderen Herausforderungender Bauaufgabe gerecht zu werden.",
    architect:
      "Limbrock Tubbesing Architekten und Stadtplaner (LP 1 bis 5), Lichtenstein Landschaftsarchitekten (Freiraumplanung)",
    address: "Klopstockplatz 9, Hofdurchfahrt, Hamburg",
    id: 152,
    lat: 53.547434,
    lng: 9.9316842,
  },
  {
    district: "Altstadt",
    title: "Restaurierung und Aufstockung eines Kontorhauses",
    description:
      "Das nach starken Kriegsschäden veränderte Kontorhauswurde 2016 /2017 restauriert und aufgestockt. Insbesonde re im Windfang und Treppenhaus sind z.B. die Jugendstil fliesen und -Jugendstilgeländer detailgetreu ergänzt worden.Die zurückhaltende Aufstockung wurde unter Nutzung der baulichen Gegebenheiten stilistisch und konstruktiveingepasst und erhielt eine Dachterrasse. Das Ladenlokal(Barbier) ist in derselben Art gestaltet.",
    architect: "Alk Friedrichsen  -  Architekten und Denkmalpfleger",
    address: "vor dem Gebäude Hopfensack 6, Hamburg",
    id: 153,
    lat: 53.5483313,
    lng: 10.0001029,
  },
  {
    district: "Altstadt",
    title: "Sanierung und Instandsetzung des Mahnmals St. Nikolai",
    description:
      "Die Überreste der im 2. Weltkrieg zerstörten St. Nikolai-Kirchewurden in den Jahren 2014 bis 2018 umfangreich saniert.Hauptaufgabe war die Sicherung der Bausubstanz des 147 m hohen Turmes, der die Kirche bei Fertigstellung 1874zum höchsten Gebäude der Welt machte. Bei teils schwie rigen Witterungsverhältnissen wurden das Fugennetz sowiedas Ziegel- und Sandsteinmauerwerk instandgesetzt.",
    architect:
      "Arbeitsgemeinschaft Historisches Bauen am Mahnmal St. Nikolai: Architekturbüro Bernhard Brüggemann und ArchitekturbüroAlk Arwed Friedrichsen GmbH",
    address: "Willy-Brandt-Straße 60, Westportal des Turmes, Hamburg",
    id: 154,
    lat: 53.5474814,
    lng: 9.9906472,
  },
  {
    district: "Bahrenfeld",
    title: "Phoenixhof Areal mit Landmark 7",
    description:
      "Der Phoenixhof ist der ehemalige Sitz der „Ottensener Eisenwerke“. Seit den 1990er Jahren wird das Quartier unter Erhalt der historischen Bauten saniert und entwickelt.Neben Büros für kreative Unternehmen finden sich Show rooms, Fernseh- und Kochstudios sowie ein Restaurant undein Café. Als „Quartierskrone“ und visueller Angelpunkt im Herzen des Areals stärkt das neue „Landmark“-Gebäudeden urbanen Charakter des Viertels.",
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
    title: "Wohnhaus und Architekturbüroim Naturschutzgebiet Hainesch-Iland",
    description:
      "Das Wohnhaus mit Scheune wurde als Landsitz eines Hamburger Industriellen 1906 im Waldgebiet von Hainesch Iland errichtet. In den vergangenen Jahrzehnten mehr fach um- und angebaut, wurde das Ensemble aktuell noch mals umgestaltet: Die Kubatur des Wohnhauses wurde bereinigt, das innere Raumgefüge entkernt und modernisiert.Die Scheune ist heute Architekturbüro, die Pferdeboxen Besprechungsraum, der sich unter Einbeziehung des ehemaligen Heubodens als großzügiger, offener Raum präsentiert.",
    architect: "Laura Jahnke Architekten",
    address: "Iland 33, am Wasserbecken vor dem Wohnhaus, Hamburg",
    id: 156,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Billstedt",
    title: "Neubau Grundschule Rahewinkel",
    description:
      "Der kreuzartig angelegte Neubau besteht aus vier Gebäude flügeln, die um ein Forum mit Glasdach gruppiert sind.Jeder Flügel erhielt im Innenraum eine individuelle Farbge bung, so dass Schülern die Orientierung erleichtert wird.Die äußere Erscheinung der Grundschule wurde aus demGenius Loci des parkähnlichen Umfeldes entwickelt und ist geprägt durch Lärchenvollholzstäbe auf einer Holzfassa denkonstruktion. Im Innenraum ist das Gestaltungskon zept fortgeschrieben, mit der Intention spielerisch die Sinneder Kinder anzuregen.",
    architect:
      "pbr Planungsbüro Rohling AG, Große + Baldauf Landschaftsarchitekten",
    address: "Rahewinkel 9, im Eingangsbereich auf dem Schulhof, Hamburg",
    id: 157,
    lat: 53.5268414,
    lng: 10.1555275,
  },
  {
    district: "Borgfelde",
    title: "Neubau eines Berufsschulzentrums für zwei Schulen",
    description:
      "Im Zuge der Neustrukturierung der hamburgischen Berufs schulen wurden 13 Schulen auf acht Standorte konzentriert.Am Standort Anckelmannstraße 10 entstand ein Zentrumfür kaufmännische Berufe. Die BS 01 und BS 02 sind organi satorisch getrennt, kooperieren aber eng miteinander. Diebeiden Schulen sind jeweils in einem eigenen Gebäude veror tet, gleichwohl gibt es gemeinsame Nutzungen wie Pausen mehrzweckhalle, Cafeteria, Mediothek und Sporthalle. Dasdritte Gebäude wird von beiden Schulen gemeinsam genutzt.",
    architect:
      "Lorenzen Mayer Architekten GmbH (Wettbewerbssieger 2010), APB. Architekten BDA (LP 2 bis 5)",
    address: "Anckelmannstraße 10, am „Weltenbaum“ auf der Piazza , Hamburg",
    id: 158,
    lat: 53.5533148,
    lng: 10.0325626,
  },
  {
    district: "Eimsbüttel",
    title: "Katholische KITA St. Bonifatius und Wohnungsbau",
    description:
      "Der Neubau komplettiert das backsteinerne Ensemble St. Bonifatius mit Kirche, Grundschule, Pfarrhaus inmittendes „weißen“ Gründerzeitviertels. Der Entwurf ist geprägtdurch die Nähe zum Kirchturm, die funktionale Gliederungund ganz wesentlich die Materialität „Roter Ziegel“. Das Gebäude schließt platzsparend mittels einer Baufuge an die Gründerzeitbebauung an. Darin integriert ist eineSchachteltreppe zur Erschließung der vier Wohnungen und der viergeschossigen KITA.",
    architect:
      "BLK2 Böge Lindner K2 Architekten (Planung, LP 1 bis 9),mo Architekten Ingenieure (Objektüberwachung, LP 6 bis 9), Schoppe + Partner (Freiraumplanung)",
    address: "Eingang KITA, Am Weiher 29, Hamburg",
    id: 159,
    lat: 53.5779204,
    lng: 9.957654699999999,
  },
  {
    district: "Eimsbüttel",
    title: "Erweiterung und Sanierung Grundschule Kielortallee",
    description:
      "Das Schulgebäude an der Kielortallee stammt aus der Kaiserzeit und ist für die heutigen Bedürfnisse an einenmodernen Grundschulunterricht umgebaut und saniertworden. Ein Turnhallenbau von 1958 wurde abgerissen unddurch einen Erweiterungsbau mit Pausenhalle, Sporthalleund Unterrichtsräumen ersetzt. Die neue Pausenhalle stellteine Verbindung zwischen Schule und Stadtteil her. DerNeubau fügt sich durch seine Form, seine Gliederung sowiedurch seine Farbe und Materialität in das gründerzeitlicheStraßenbild ein.",
    architect: "ppp architekten + stadtplaner",
    address: "Haupteingang Schulgebäude, Kielortallee 18, Hamburg",
    id: 160,
    lat: 53.5719842,
    lng: 9.974243399999999,
  },
  {
    district: "Eppendorf",
    title: "Neubau Oberstufenhaus Gymnasium Eppendorf",
    description:
      "Das Oberstufenhaus wurde auf insgesamt 12 Klassenräumeerweitert. Der bestehende Klassentrakt wurde um einen L-förmigen zweigeschossigen Baukörper nach Süden ergänzt.Zubau und Bestand bilden einen intimen Innenhof aus, welcher als neuer Nukleus für das Oberstufenzentrum fun giert. In ihrer ebenso zurückhaltenden wie selbstbewusstenGestaltung schließt die Fassade des Neubaus an den Bestand an und fügt sich in den städtebaulichen Kontext ein.",
    architect: "akyol kamps : bbp architekten gmbh bda",
    address: "Hegestraße 70, Haupteingang des Neubaus Oberstufenhaus, Hamburg",
    id: 161,
    lat: 53.5846324,
    lng: 9.9848085,
  },
  {
    district: "Finkenwerder",
    title: "Neugestaltung der Straße Steendiek",
    description:
      "Der Verkehrsknotenpunkt im Zentrum Finkenwerders wurdedurch einen Kreisel neu geordnet, der den Verkehr ver langsamt und die Querung für Fußgänger zwischen Wohn gebieten im Westen und der Einkaufsstraße im Osten verbessert. Als Hommage an die Fischereitradition Finken werders sind in die Klinkerpflasterflächen Netze, Fische und Wellen gepflastert worden. Außerdem entstand eine neue Platzfläche unter Ahornen und Felsenbirnen undden alte Deichverlauf zeichnen Silberlinden nach.",
    architect:
      "YLA ANDO YOO Landschaftsarchitektur, Ingenieurbüro BKP und Wfw nord consult Ingenieurgesellschaft mbH",
    address: "Platzfläche am Finksweg 6, Hamburg",
    id: 162,
    lat: 53.5336521,
    lng: 9.8777929,
  },
  {
    district: "HafenCity",
    title: "U- und S-Bahn-Haltestelle Elbbrücken",
    description:
      "Die U4 bindet das neue Baakenhafen-Quartier an denöffentlichen Nahverkehr an. Nach dem Entwurf der Archi tekten von Gerkan, Marg und Partner entstehen hier dieU-Bahn-Haltestelle, das Hallendach für die S-Bahn-Stationsowie ein Verbindungsbau als städtebauliches Ensemble direkt an der Elbe. Eine signifikante Stahlkonstruktion aus gebogenen Rahmenträgern prägt die neue U-Bahn-Halte stelle. Die außen liegende, tonnenförmige Dachkonstruktionunterstreicht die optische Präsenz des Tragwerks.",
    architect: "gmp · Architekten von Gerkan, Marg und Partner",
    address:
      "Baugelände an der Straßenkreuzung Zweibrückenstraße /  Baakenwerder Straße Hinweis: Besichtigung nur mit festem Schuhwerk, Hamburg",
    id: 163,
    lat: 53.5359995,
    lng: 10.0223231,
  },
  {
    district: "HafenCity",
    title: "Wohnvielfalt am Grasbrookpark",
    description:
      "Die „Wohnvielfalt am Grasbrookpark“ befindet sich direktnördlich des neuen Spielparks nahe dem Überseequartier.Mit einer hohen Nutzungsvielfalt auf rund 20.000 Quadrat metern sind ca. 140 Wohnungen entstanden. Ihre Misch ung reicht von Wohnungen einer Baugemeinschaft, geför derten Mietwohnungen bis hin zu Sonderwohnformen wie Ateliers, familienfreundlichen und studentischen Woh nungen. Zusätzlich sorgen im Erdgeschoss eine Kinder tagesstätte, Einzelhandelsflächen und über das Gebäudeverteilte Freiräume für Lebendigkeit.",
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
    title: "Finnlandhaus Hamburg",
    description:
      "Das 1966 fertig gestellte Hochhaus ist eines der markan testen Gebäude der deutschen Nachkriegsmoderne. Mit seinem freigestellten Treppenhauskern und der filigra nen Vorhangfassade repräsentiert es beispielhaft den Geist des technologischen Aufbruchs der 1960er Jahre.2017 wurde es denkmalgerecht saniert und den aktu ellen Anforderungen an Büronutzungen angepasst. Dabeiwurde die Fassade in alten Dimensionen und Oberflä chen als zweischalige Elementfassade erneuert. Wesent liche Ausbauelemente wurden erhalten.",
    architect:
      "HPP - Helmut Hentrich und Hubert Petschnigg (1966), HPP Architekten (Revitalisierung 2017, LP 1 bis 5)",
    address: "Esplanade 41, Vorplatz Neuer Jungfernstieg, Hamburg",
    id: 165,
    lat: 53.5580819,
    lng: 9.992760299999999,
  },
  {
    district: "Neustadt",
    title: "Stadthöfe Hamburg - Umbau Palaishaus",
    description:
      "Das Palaishaus bildet den Auftakt zum GebäudeensembleStadthöfe Hamburg. Der Umbau des Hauses von 1889 (Architekt: Carl Johann Christian Zimmermann) umfasst den Erhalt der historischen Fassaden und Treppenhäu ser, die grundlegende Erneuerung der Erschließung undTragstruktur, die Ergänzung des Gebäudes durch eine zweigeschossige Aufstockung sowie die Rekonstruktiondes historischen Turmes mit Kuppel.",
    architect:
      "Kuehn Malvezzi (LP 1 bis 4 und gestalterische Qualitätssicherung LP 5 bis 8), agn Leusmann GmbH (LP 5)",
    address: "Stadthausbrücke / Ecke Neuer Wall, Hamburg",
    id: 166,
    lat: 53.5498083,
    lng: 9.986161899999999,
  },
  {
    district: "Rotherbaum",
    title: "Freianlagen Hotel The Fontenay",
    description:
      "In einer zurückhaltende, präzise Konzeption der Außenan lagen entfaltet sich zeitgemäß die einzigartige, eleganteAtmosphäre und Lage dieses Ortes. Stadträumlich werdendie parkähnlichen Strukturen der Umgebung ähnlich ein em großzügigen Landschaftspark (Alsterpark) weitergeführt.Sanft geschwungene Rasenflächen und malerische Baum bestände rahmen den Alsterblick, lineare Heckenkörper undSteinelemente erinnern an historische Parterre-Anlagen. Im Entree-Bereich nimmt ein rundes Wasserobjekt den Kreis gedanken der Gebäudestruktur auf.",
    architect:
      "WES LandschaftsArchitektur (Freianlagen), Störmer Murphy and Partners GbR (Hochbau)",
    address: "Vorplatz Haupteingang, beim runden Wasserobjekt, Hamburg",
    id: 167,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "St. Pauli - Karolinenviertel",
    title: "Neubau von 18 Wohnungen in Holzbauweise",
    description:
      "Zwischen Gründerzeitgebäuden und sogenannter Terras senbebauung im Hamburger Karolinenviertel werden diesenSommer 18 Wohnungen überwiegend in Holzbauweisefertig gestellt. Abgesehen von den aussteifenden Treppen hauskernen und dem Kellergeschoss aus Stahlbeton sindalle tragenden Wände und Decken in Brettspeerholz ausge führt. Von den 18 Wohnungen werden 16 Wohnungen imgeförderten Wohnungsbau errichtet.",
    architect: "steg Hamburg mbH",
    address: "Vorwerkstraße 15, Hamburg",
    id: 168,
    lat: 53.5596419,
    lng: 9.9709117,
  },
  {
    district: "Uhlenhorst",
    title: "upTOWNHOUSES - eine Stadthauszeile",
    description:
      "Auf dem Gelände der ehemaligen Frauenklinik Finkenau isteine Stadthauszeile mit 26 Stadthäusern entstanden, ent worfen von sechs Hochbauarchitekten. Durch die unterschied lichen Parzellenbreiten und Höhenstaffelungen wurde einelebendige Häuserzeile mit individuellen Adressen ausge bildet. Verstärkt wird dies durch das Geländegefälle und dieVor- und Rücksprünge der variierenden Verblendfassaden.",
    architect:
      "LP 1 bis 3: Spengler Wiescholek Architekten und Stadtpla ner, Kraus Schönberg Architekten, HeitmannMontùfar Architekten,Tchoban Voss Architekten, LA'KET Architekten, be baumschlager eberle;LP 4 bis 5: PLANWERKEINS Architekten; Freiraumplanung: Schoppe + partner freiraumplanung",
    address: "vor dem Haus Dorothea-Bernstein-Weg 26, Hamburg",
    id: 169,
    lat: 53.5703525,
    lng: 10.0338802,
  },
  {
    district: "Altstadt",
    title: "Wohn- und Geschäftshaus Katharinenhof (1993)",
    description:
      "Das Haus liegt an der Ecke Neue Grönigerstraße / Zippelhausgegenüber der Katharinenkirche. Es wurde um 1890 alsKontorhaus im Stil der Neorenaissance erbaut. Im ZweitenWeltkrieg wurde es durch einen Bombeneinschlag so beschädigt, dass nur noch drei Geschosse erhalten waren.In enger Abstimmung mit dem Denkmalschutzamt wur den die fehlenden Gebäudeteile kontrastierend zum Bestandin zeitgemäß stringenter Form ergänzt. Im Erdgeschoss befinden sich Läden, im 1. bis 5. Obergeschoss Büros undim 6. Obergeschoss ist eine Wohnung.",
    architect:
      "Architekten Gössler + Schnittger (heute Gössler Kinz Kerber Kreienbaum Architekten), Dr. H. Dietrich (Fassade Altbau)",
    address: "vor dem Eingang Zippelhaus 2, Hamburg",
    id: 170,
    lat: 53.5923465,
    lng: 9.960742399999999,
  },
  {
    district: "Altstadt",
    title: "Neubau und Restaurierung Altbau in der Deichstraße (1981 / 1982)",
    description:
      "Deichstraße 37: Restaurierung eines Außendeichshausesmit zweigeschossiger Diele. In die ehemaligen Speicher böden wurden Wohnungen geplant. Deichstraße 35: Im Neubau sind Elemente der historischen Außendeichs häuser aufgenommen und verfremdet: in der Dreiteilungder Fassade, im ins 1. Obergeschoss übergreifenden Portal und im Schmuck des Giebels. Auszeichnungen:„Deutscher Städtebaupreis 1985“ und „Silberne Halbkugel der Deutschen Stiftung Denkmalschutz“.",
    architect:
      "Planungsgruppe Nord D. J. Glienke und Gerhard Hirschfeld und Schiefler & Denker",
    address: "vor dem Haus Deichstraße 37, Hamburg",
    id: 171,
    lat: 53.5456794,
    lng: 9.9871388,
  },
  {
    district: "Harvestehude",
    title: "Verlagsgebäude Hoffmann und Campe(1991 und 2001)",
    description:
      "Die Verlagsgebäude von Hoffmann und Campe reihen sichin die Villenbebauung am Harvestehuder Weg ein. Die vorhandenen fünf Altbauten wurden durch zwei freistehen de villenartige Neubauten ergänzt. Alle Gebäude stehen in einer gemeinsamen Parklandschaft. Das neue Verlagshausfügt sich in die sanft zur Alster hin fallende Topographie. Die weit auskragenden Dächer und die Baufiguren unterstrei chen das großzügige Landschaftsbild. Zu den Altbauten gehören zwei Villen von Martin Haller und Emil Fahrenkamp.",
    architect:
      "Jourdan & Müller Architekten und Gustav Lange, Landschaftsarchitekt",
    address: "Harvestehuder Weg 41, am Aufgang zum Haupteingang, Hamburg",
    id: 172,
    lat: 53.5775466,
    lng: 9.998643699999999,
  },
  {
    district: "Altona",
    title: "Neue Mitte Altona, Kopfgebäude Südblock, Harkortstraße",
    description:
      "Der Neubau an der Harkortstraße versteht sich als südli cher Kopf des neuen Stadtteils Mitte Altona. Die Südfassade des Gebäudes bildet dabei die Rückwand, der sieben geschossige, höhere Gebäudeteil betont den südöstlichenAbschluss des Quartiers, der niedrigere und gestaffeltewestliche Teil leitet in das neue Quartier. Die gesamte Erd geschosszone wird gastronomisch genutzt. Die darüberliegenden Wohnungen mit Balkonen oder Loggien orientie ren sich nach Süden. Als Material wurde ein sandfarbenerBackstein ausgewählt.",
    architect: "KPW Papay Warncke und Partner Architekten mbB",
    address: "Platz der Arbeiterinnen, Hamburg",
    id: 173,
    lat: 53.558467,
    lng: 9.9378874,
  },
  {
    district: "Altona",
    title: "Sechs Freunde (Kranbauten), Neue Mitte Altona",
    description:
      "Die Masterplanstudie 2011 bestimmt die städtebaulicheKubatur der Kranbauten. Die historische Hallenstruktur wirddurch die sechs Baukörper der Kranbauten ergänzt. Dieselagern sich von Osten her an die bestehenden zwei Hallen schiffe an. Dabei geben die beiden äußeren Baukörper einenklaren Rahmen vor. Sie stehen im Norden und im Südenan das zweite Hallenschiff angrenzend vollflächig auf demBoden. Die inneren vier Gebäudekörper hingegen docken andie Halle an und kragen viergeschossig über ihnen aus.",
    architect:
      "André Poitiers Architekt Stadtplaner RIBA (Städtebaulicher Entwurf und hochbauliche Ausarbeitung LP 1-5), arbos Freiraumplanung GmbH (Städtebaulicher Entwurf)",
    address: "Platz der Arbeiterinnen, Hamburg",
    id: 174,
    lat: 53.558467,
    lng: 9.9378874,
  },
  {
    district: "Altstadt",
    title: "Revitalisierung der ehemaligen Spiegel-Insel,Hamburg Heights",
    description:
      "Die beiden Hochhäuser wurden durch Werner Kallmorgenzwischen 1965",
    architect:
      "Winking - Froh Architekten GmbH Height 1: LP 1-5; Height 2,3,4 und 5: LP 1-4, teilweise 5 / Leitdetails)",
    address: "Eingang Brandstwiete 3, Hamburg",
    id: 175,
    lat: 53.5469423,
    lng: 9.9977865,
  },
  {
    district: "Bahrenfeld",
    title: "Zentrum für strukturelle Systembiologie CSSB",
    description:
      "Beim interdisziplinären Zentrum für strukturelle System biologie CSSB kam es hammeskrause architekten daraufan, dem inhaltlichen und organisatorischen Begriff desZentrums auch einen adäquaten architektonischen Raumzu geben: Über alle vier Geschosse erlebbare Galerien und Treppenläufe kulminieren in einer gebäudehohen, licht durchfluteten Foyerhalle und sind der zentrale Treffpunktder Forscher. Dieser attraktive Raum im Herzen des Gebäu des regt durch seine angenehme und helle Atmosphäre zuinformellen Gesprächen und Wissensaustausch an.",
    architect: "hammeskrause architekten",
    address:
      "Empfangstresen beim Haupteingang CSSB, Gebäude 15, Notkestraße 85, Hamburg",
    id: 176,
    lat: 53.573014,
    lng: 9.8808017,
  },
  {
    district: "Dulsberg",
    title: "Umbau und Sanierung der Frohbotschaftskirche Hamburg-Dulsberg",
    description:
      "Die Kirche war für ihre Besucheranzahl viel zu groß undaußerdem stark sanierungsbedürftig geworden. Nach dem„Haus-im-Haus“-Prinzip konnten die drei Funktionen derKirche - Sakralraum, Kita und Gemeinderaum - unter einemDach vereint und die Kirche so vor dem Abriss bewahrtwerden. Dazu wurden zwei Kuben in die entkernte Kircheeingebaut, während das Denkmal außen fast unverändertblieb. Die Öffnung zum Stadtteil und die Einbindung desStraßburger Platzes wurden durch den neuen Zugang vomPlatz aus erreicht.",
    architect: "WRS Architekten & Stadtplaner GmbH",
    address: "Haupteingang der Kirche am Straßburger Platz, Hamburg",
    id: 177,
    lat: 53.5815182,
    lng: 10.0614514,
  },
  {
    district: "HafenCity",
    title: "Dock 71 HafenCity Hamburg",
    description:
      "Bei diesem Neubau eines Wohngebäudes mit 65 Wohnungenfür eine Baugruppe waren mehrere Herausforderungengleichzeitig zu meistern: den unterschiedlichen Bedürfnis sen der Bewohnerinnen und Bewohner gerecht zu werden,die Integration einer Kita und Gewerbe im Erdgeschoss, die Belichtung des Innenhofes sowie die Berücksichtigungunterschiedlicher Lärmschutzmaßnahmen. Für Letzteressorgt u.a. ein differenziertes, vertikales Fassadenspiel, dasgleichzeitig dem Wunsch nach identitätsstiftenden Bau teilen nachkommt.Architekten: DFZ ArchitektenFührungen: Johann ZurlTermine: Samstag, 29. Juni, 14.10 Uhr, 15.10 Uhr, 16.10 UhrTreffpunkt: Ecke Yokohamastraße / Am Lohsepark",
    architect: "DFZ Architekten",
    address: "Ecke Yokohamastraße / Am Lohsepark, Hamburg",
    id: 178,
    lat: 53.5421839,
    lng: 10.0039949,
  },
  {
    district: "Harburg",
    title: "309 Sozialwohnungen an der Denickestraße",
    description:
      "Der Entwurf betont die städtebaulich geschwungene Stadt kante der Denickestraße durch eine Rhythmisierung vonTopografie und Baukörper. Der leichte Versatz zwischen denbaugleichen Gebäudetypen gliedert die städtebauliche Kante in regelmäßige Abschnitte und sorgt für eine zusätz liche Süd-West-Orientierung der Loggien. Durch Ausbil dung von Staffelgeschossen sind die Versprünge zusätzlichbetont. Das Durchwohnprinzip bestimmt die Grundrisse.",
    architect:
      "Renner Hainke Wirth Zirn Architekten (Wettbewerb 1. Preis,LP 1-4 und künstlerische Oberleitung Häuser B, C, D und E), AIT Architektur-und Ingenieurbüro Holger Trumpf (LP 1-4 und künst lerische Oberleitung Häuser A und C; funktionale Ausschreibung, Leitdetails und Qualitätsüberwachung des GU)",
    address: "MAG-Kiosk Denickestraße 74, Ecke Thörlstraße, Hamburg",
    id: 179,
    lat: 53.4614002,
    lng: 9.9612465,
  },
  {
    district: "Lokstedt",
    title: "Bürogebäude im Rütersbarg",
    description:
      "Der im Norden Hamburgs gelegene, dreigeschossige Büro bau füllt eine außergewöhnlich schlanke Baulücke in einemaus nur wenigen Gebäuden bestehenden Gewerbegebiet.Der Baukörper fügt sich auf unaufgeregte und respektvolleWeise in seine Nachbarschaft ein und versucht die vor gefundene Situation logisch zu ergänzen. Die verwendetenMaterialien, Farben, Formen und Gestaltungselemente sind sorgfältig auf die Umgebung abgestimmt. Im Innerendes Gebäudes können bis zu sechs autarke Nutzungsein heiten untergebracht werden.",
    architect: "Andreas Pflügelbauer",
    address: "Rütersbarg 52, vor dem Gebäude, Hamburg",
    id: 180,
    lat: 53.60532079999999,
    lng: 9.955872099999999,
  },
  {
    district: "Neugraben-Fischbek",
    title: "Auftakt IBA-Quartier Fischbeker Heidbrook",
    description:
      "Das Gebäude bildet das markante Quartiersentrée und den Auftakt für die angrenzende südliche WohnbebauungFischbeker Heidbrook und schützt diese gleichzeitig vordem Lärm der flankierenden Bundesstraße. Die Mischnut zung (Gewerbe im Erdgeschoss, Wohnen darüber) ermög licht eine hohe Bebauungsdichte. Als Ausgleich wurde einDachgarten geschaffen, der neben privaten Gärten auchGemeinschafts- und Kinderspielflächen bietet und die nörd lichen mit den südlichen, öffentlich geförderten Wohnun gen verbindet.",
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler PartG mbB",
    address: "vor der Haspa-Station, Im Fischbeker Heidbrook 2 a-d, Hamburg",
    id: 181,
    lat: 53.4665938,
    lng: 9.8086595,
  },
  {
    district: "Neustadt",
    title: "Tortue - Hotel in den Stadthöfen",
    description:
      "2008 startete das Re-Development Projekt der StadthöfeHamburg mit der Auslobung eines Investorenwettbewerbes.Stephen Williams Associates entwickelte zusammen mitdem Immobilienentwickler Quantum einen komplexen Mas terplan und gewann den Wettbewerb mit der Idee, einStück Stadtquartier mit einem Mix aus Retail- und Office flächen, Wohnungen, einem individuellen Boutique Hotelwiederzubeleben. Stephen Williams Associates konntenaußerdem das Boutique Hotel Tortue entwickeln.",
    architect:
      "Stephen Williams Associates GmbH (LP 1-4 Hochbau; Innenarchitektur Lobby, Brasserie, Bars); agnLeusmann GmbH (LP 5 Hochbau)",
    address: "Eingang Hotel Tortue, Stadthausbrücke 10, Hamburg",
    id: 182,
    lat: 53.55152289999999,
    lng: 9.986072199999999,
  },
  {
    district: "Ohlsdorf",
    title:
      "Kapelle 2 auf dem Hauptfriedhof OhlsdorfDenkmalgerechte Sanierung und Restaurierung",
    description:
      "Die Kapelle aus dem Jahr 1886 im Stil der Neugotik wur de umfassend denkmalgerecht saniert und restauriert.Größtenteils konnte der ursprüngliche Zustand aufwendigwieder hergestellt werden, dabei wurde u.a. auch Wand malerei freigelegt. Innen wurde ein Farb- und Gestaltungs konzept entwickelt, das die ursprüngliche Entwurfshal tung und Originalanmutung aufgreift und sie respektvollreduziert an heutige Bedürfnisse anpasst. Speziell fürden Raum entworfene Möbel und ein sorgsam abgestimm tes Lichtkonzept runden das Projekt ab.",
    architect: "Dohse Architekten",
    address: "vor der Kapelle 2, Nebenallee, Hauptfriedhof Ohlsdorf, Hamburg",
    id: 183,
    lat: 53.623333,
    lng: 10.045051,
  },
  {
    district: "Rothenburgsort",
    title: "Neubau des Opernfundus der Hamburger Staatsoper",
    description:
      "Die bisher auf drei Standorte verteilten Fundi und Werk stätten der Hamburger Staatsoper wurden auf dem Geländedes ehemaligen Huckepackbahnhofes zusammengeführt.Die unterschiedlichen Nutzungsbereiche - Dekorations werkstätten, Kulissen-, Kostüm- und Maskenfundus - habeneine eigene bauliche Identität erhalten, die sich gleichzei tig als eine städtebaulich homogene Einheit mit gemeinsamerAdresse zeigt. Die gekantete Metallfassade stellt als ab strakte Interpretation eines Bühnenvorhanges Bezüge zurStaatsoper her.",
    architect: "DFZ Architekten",
    address: "Haupteingang Opernfundus, Cornelia-Harte-Straße, Hamburg",
    id: 184,
    lat: 53.5392266,
    lng: 10.0375041,
  },
  {
    district: "St. Pauli",
    title:
      "Umbau und Sanierung eines denkmal geschützten Schulgebäudes zu 20 Wohnungen für eine Baugemeinschaft",
    description:
      "1928 nach Plänen Gustav Oelsners erbaut steht die Pesta lozzischule heute unter Denkmalschutz. Nach Aufgabe des Schulbetriebes wurde Sie, unter Erhalt der historischenSporthalle, zu 20 Wohnungen für eine Baugemeinschaftsowie zwei Gewerbeeinheiten umgeplant. Im Vordergrundstand dabei die Frage, in welcher Weise das Gebäude nicht nur in seiner äußeren Erscheinung, sondern auch inseiner inneren Struktur und Ausstattung so weit wie möglicherhalten und trotzdem weiterentwickelt werden kann.",
    architect: "HP Architekten mbB",
    address: "vor dem Haupteingang, Kleine Freiheit 68, Hamburg",
    id: 185,
    lat: 53.55252789999999,
    lng: 9.9572621,
  },
  {
    district: "Wandsbek",
    title:
      "Zubau einer zweizügigen Bezirksgrundschule der Albert-Schweitzer-Schule",
    description:
      "Die Albert-Schweitzer-Gesamtschule wurde um einen Neubau ergänzt. Mit Ost-West-Erschließung wurde ein dreigeschossiges Klassenhaus mit zehn Klassenräu men, drei fachgebundenen Lehrräumen und Differen zierungszonen entwickelt. In der Kubatur, der Materialitätund der Farbigkeit wird Bezug auf die Bestandsbauten u.a. aus den 1950er und 1970er Jahren genommen. Loch fassaden sowie asymmetrische Dachschrägen geben dem Gebäude ein zeitgemäßes Gepräge.",
    architect: "HS-Architekten PartGmbB Schmidt Limmroth Funck Klapsing",
    address: "Albert-Schweitzer-Schule, Schluchtweg 1, Hamburg",
    id: 186,
    lat: 53.6324392,
    lng: 10.0475122,
  },
  {
    district: "Hammerbrook",
    title: "City-S-Bahnhof Hammerbrook (1983)",
    description:
      "Der Bahnhof war als zentrale Haltestelle der S-Bahn am1970 geplanten, jedoch unrealisierten Hanse-Centrum (HC)vorgesehen. Er ist das Ergebnis eines unter Baufirmen mitArchitektenbindung durchgeführten Wettbewerbs der Stadtund der Deutschen Bahn für die Gesamtgestaltung derBauwerke der City-S-Bahn. Seine besondere Bauform undFarbigkeit sollte mit der futuristischen Großform des Hanse Centrums korrespondieren.",
    architect: "Schramm, Pempelfort, v. Bassewitz, Hupertz (SPBH)",
    address:
      "Kreuzung Mittelkanalstraße /Hammerbrookstraße,„Zweite Hammerbrookbrücke“Treffpunkt bei Regen: Eingangshalle Nord, S-Bahnhof, Hamburg",
    id: 187,
    lat: 53.5482652,
    lng: 10.0225813,
  },
  {
    district: "Poppenbüttel",
    title: "Wohnquartier Hamburg Tegelsbarg (1975 -1980, Wettbewerb 1967)",
    description:
      "Tegelsbarg ist mit ca. 2200 Wohnungen die letzte undgleichzeitig auch die kleinste, der in den 1970er Jahren inHamburg erbauten Großwohnsiedlungen. Neu an Tegels barg war seine klare vom Freiraum aus gedachte sozial räumliche städtebauliche Gliederung und die Einbindung in einen vorhandenen Stadtteil. Die Realisierung wurdedurch einen Gestaltungskatalog begleitet. Mit der Stape lung von Reihenhäusern entstanden hier einige beson ders innovative Wohnhaustypologien.",
    architect:
      "Architekten /Stadtplaner: Nickels, Ohrt und Partner (Städtebau) undSchulze, Hass, Kummer (Freiflächenplanung)",
    address: "Norbert-Schmid-Platz, Hamburg",
    id: 188,
    lat: 53.65396210000001,
    lng: 10.0615678,
  },
  {
    district: "Sasel",
    title:
      "Denkmalgerechte Sanierung und Umbau der Herren hausanlage Annenhof in vier Wohneinheiten (1993)",
    description:
      "Eine Allee aus Linden führt durch den großen Park des ca. 5 Hektar großen Anwesens zum Denkmal, das 1922im Backsteinstil nach englischem Vorbild errichtet wurde. In Zusammenarbeit mit dem Denkmalschutzamt erfolgteeine umfassende Sanierung, um dem Ensemble wieder ein ruhiges, dem ursprünglichen Zustand entsprechendes Gesamtbild zu geben. Prägende historische Gestaltungs elemente wurden erhalten bzw. wieder hergestellt und mitzurückhaltenden neuen Formen und Materialien kombiniert.",
    architect:
      "Architekturbüro Holger Schmidt (heute HS-Architekten PartGmbB Schmidt Limmroth Funck Klapsing)Führung: Holger Schmidt ",
    address: "Saselbergweg 29a, Hamburg",
    id: 189,
    lat: 53.661977,
    lng: 10.0935508,
  },
  {
    district: "Winterhude",
    title:
      "Hauptverwaltung der Deutschen TEXACO AG / heute Unternehmenszentrale der Deutschen Erdöl AG,DE A (1977)",
    description:
      "Das Gebäude ist ein Großraumbau mit kleineren Bereichenreversibler Einzelbüros für insgesamt 1400 Mitarbeiter/ innen. Der Eingang liegt entsprechend dem 2. BauabschnittCity Nord in der angehobenen Fußgängerebene. In Zeitender Ölkrise wurde eine dreifach verglaste Fassade als Abluft fenster entwickelt, die entzogene Wärme für die Erwär mung der Räume genutzt.",
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
    title: "Neue Mitte Altona",
    description:
      "In dem Entwurfskonzept werden die beiden Assoziations räume „urbane Stadt“ und „Gleisanlagen“ zusammengefügtund aus ihnen die Gestaltungsprinzipien für die städtebau liche Struktur und die öffentlichen Räume der Neuen MitteAltona entwickelt. Die durch Gleisanlagen unterbrocheneGrünverknüpfung von der Elbe zum Volkspark wird mit demEntwurf hergestellt und die angrenzenden Gebiete werdendurch das neue Zentrum aufgewertet. Um diese großzügige,öffentliche Parkfläche entwickeln sich die neuen Quartiere.",
    architect:
      "André Poitiers Architekt Stadtplaner RIBA (Städtebaulicher Entwurf, Entwurf mehrerer Hochbauprojekte LP 1-5),arbos Freiraumplanung GmbH (Städtebaulicher Entwurf)",
    address: "Platz der Arbeiterinnen, Hamburg",
    id: 191,
    lat: 53.558467,
    lng: 9.9378874,
  },
  {
    district: "Altstadt",
    title: "Fraser Suites Hamburg in der ehemaligen Oberfinanzdirektion",
    description:
      "Mit viel Liebe zum Detail und sensiblem Umgang mit der Bausubstanz ist die ehemalige Oberfinanzdirektion von1907 am Rödingsmarkt zu dem 5-Sterne-Superiorhotel Fraser Suites umgebaut worden. Der Charme des denkmal geschützten Gebäudes zeigt sich in der Eingangshalle, im Restaurant, den Konferenzräumen und den 154 Zimmern.Zeittypische Gestaltungselemente im Stil der 1920er und1950er Jahre konnten bewahrt bzw. aufgearbeitet werden.",
    architect:
      "MPP MEDING PLAN + PROJEKT GmbH, JOI-Design Innen architekten Architekt Design joehnk + partner mbB (Innenarchitektur)",
    address: "Lobby des Hotels Fraser Suites, Rödingsmarkt 2, Hamburg",
    id: 192,
    lat: 53.54837939999999,
    lng: 9.986449499999999,
  },
  {
    district: "Bergstedt",
    title: "Kita Bergstedt",
    description:
      "Neubau einer Kita in Holzmassivbauweise im denkmal geschützten Ensemble der evangelischen Kirche Bergstedt.Die Kita wurde beim BDA Architekturpreis Hamburg 2018mit einem 2. Preis ausgezeichnet.",
    architect: "BUB Architektin bda_Alexandra Bub",
    address:
      "Haupteingang der ev. Kirche Bergstedt, Wohldorfer Damm 8, Hamburg",
    id: 193,
    lat: 53.6721911,
    lng: 10.1263861,
  },
  {
    district: "Fuhlsbüttel",
    title: "Erweiterungsbau Grundschule Ratsmühlendamm",
    description:
      "Neubau eines zweigeschossigen Gebäudes mit Klassenräu men, Musikraum, Mensa und Gymnastikhalle als Ergänzungzum bestehenden Ensemble aus Altbau und Sporthalle von Fritz Schumacher. Der Bestand entstand 1927 und istdenkmalgeschützt, der Erweiterungsbau schließt denSchulhof gegen den Marktplatz und erhaltene, wertvolleBäume ab und bildet mit den Altbauten ein abgestimm tes Bauensemble. Die Nutzungen im Neubau sind vielfältigmiteinander verwoben und schaffen neue Raumqualitäten.",
    architect: "Gössler Kinz Kerber Kreienbaum Architekten BDA",
    address:
      "Grundschule Ratsmühlendamm, Haupteingang Altbau, Ratsmühlendamm 39 , Hamburg",
    id: 194,
    lat: 53.6267047,
    lng: 10.0206758,
  },
  {
    district: "Hammerbrook",
    title: "Modell „Haus in der Halle“ von Gustav Hassenpflug",
    description:
      "Der Architekt und ehemalige Bauhäusler Gustav Hassenpflugübernahm 1950 die Leitung der Landeskunstschule (heuteHochschule für bildende Künste). Im Mittelpunkt seiner erstenAusstellung 1953 stand das von ihm entworfene „Haus in der Halle“, an dem sich fast alle hauseigenen Werkstättenmit Entwürfen beteiligten - das bedeutete damals die Wiederbelebung einer zentralen Bauhaus-Idee. Für die Aus stellung „Bauhaus in Hamburg. Künstler, Werke, Spuren“wurde das Haus als Modell im Maßstab 1:5 nachgebaut.",
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
    title: "Umnutzung der historischen Amsinck-Villa zur Kindertagesstätte",
    description:
      "Die Amsinck-Villa auf dem Liethberg ist ein bedeutenderHamburger Landsitz aus dem 19. Jahrhundert. Martin Haller, einer der Rathausbaumeister, gestaltete den Som mersitz. Nach wechselhafter Geschichte und langem Leerstand wurde das marode Gebäude grundlegend inStand gesetzt und 2017 zur Kindertagesstätte umgenutzt.Die klassizistische Villa wurde äußerlich und im Inneren in ihrer bauzeitlichen Ausgestaltung aufwendig restauriert.Expressive Farb- und Schablonengestaltungen aus den1920ern wurden freigelegt.",
    architect: "Knaack & Prell Architekten Partnerschaft mbB",
    address: "Beim Amsinckpark 18, Hamburg",
    id: 196,
    lat: 53.6008066,
    lng: 9.9432142,
  },
  {
    district: "Lurup",
    title: "Wohnen am Volkspark",
    description:
      "Das Baugrundstück für 171 geförderte Wohneinheiten liegtzwischen Volkspark und der stark frequentierten Elbgau straße, weshalb hohe Anforderungen an Schallschutz gestelltund eine hohe naturräumliche Qualität gefordert wurden.Die drei- bis viergeschossigen Baukörper beherbergen einenautofreien, familienfreundlichen Innenhof. Ein integrierterNachbarschaftstreff mit Gemeinschaftsräumen bietet dieMöglichkeit für Begegnungen.",
    architect:
      "LRW Architekten und Stadtplaner Loosen, Rüschoff +Winkler PartG mbB (Baukörper 1 + 4 + TG: Wettbewerb, Funktionsplan,LP 1 bis 5), KBNK Architekten GmbH (Generalplaner gesamtes Ensem ble, Baukörper 2 + 3: LP 1 bis 9)",
    address: "Elbgaustraße 235 / Ecke Vorhornweg, Hamburg",
    id: 197,
    lat: 53.5923003,
    lng: 9.881629199999999,
  },
  {
    district: "Neustadt",
    title:
      "Raumwunder Görttwiete: Errichtung, Revitalisierungund Aufstockung auf kleinstem Raum",
    description:
      "Der denkmalgeschützte Appendix Altes Klöpperhaus wurdeim Zuge einer Nachverdichtung saniert, aufgestockt und erweitert. Ein Altbau mit Klinkerfassade, ein Neubau mit Glas fassade und eine Aufstockung mit Metallverkleidung wur den auf engstem Raum nach Vorgaben der Denkmalpflegeund Statik zu einem harmonischen Gesamtbild verbunden.Im Inneren beeindrucken loftartige Räume und der spektaku läre Rundumblick - vor allem den Mieter Design Offices.",
    architect:
      "caspar.schmitzmorkramer (ehemals meyerschmitzmor kramer, LP 1-5), Rogge ABP (LP 8), brandherm + krumrey interior architecture (Innenarchitektur Design Offices)",
    address: "Eingang, Görttwiete 16-20, Hamburg",
    id: 198,
    lat: 53.5478484,
    lng: 9.9875214,
  },
  {
    district: "Ochsenwerder",
    title:
      "Wohnprojekt Stadt-Land-Fluss, Umbau einesehemaligen Gasthofes zum Wohnhaus und Neubauvon zwei weiteren Wohnhäusern",
    description:
      "Der ehemalige Gasthof wurde für Wohnungen umgebaut undum zwei Wohngebäude ergänzt. Die insgesamt 18 öffent lich geförderten Wohnungen mit individuellen Grundrissenund 300 m² Gemeinschaftsräumen bieten der Baugemein schaft den Raum, die Ideen von gemeinsamen Wohnen, solidarischem Miteinander und einem nachhaltigen, selbst bestimmten Leben zu verwirklichen. Eisheizung und mas sives Verblendmauerwerk spiegeln den Anspruch wider,ein auch energetisch nachhaltiges Projekt zu realisieren.",
    architect: "planerkollektiv Architekten PartGmbB Koehler Mayer Tietz",
    address: "Ochsenwerder Kirchendeich 1, Hamburg",
    id: 199,
    lat: 53.476214,
    lng: 10.0842315,
  },
  {
    district: "Ohlsdorf",
    title:
      "Kapelle 1 auf dem Hauptfriedhof OhlsdorfDenkmalgerechte Innensanierung",
    description:
      "Die Kapelle 1 wird nicht mehr für Trauerfeiern genutzt und wurde im Zuge der Nachhaltigkeitsstrategie Ohlsdorf2050 für neue Nutzungsmöglichkeiten umgebaut. Die Umbaumaßnahmen beinhalten in großen Teilen die Wieder herstellung des Originalzustands mit einigen wenigen Ausnahmen, die aus der neuen Nutzung resultieren. Für den gesamten Innenraum wurde in enger Zusammen arbeit mit dem Denkmalschutzamt ein neues Farb- und Gestaltungskonzept erarbeitet.",
    architect: "Dohse Architekten",
    address:
      "vor der Kapelle 1, Kapellenstraße, Hauptfriedhof Ohlsdorf, Hamburg",
    id: 200,
    lat: 53.6223664,
    lng: 10.0404928,
  },
  {
    district: "Stellingen",
    title: "Sanierung der Stellinger Kirche",
    description:
      "Die denkmalgeschützte Stellinger Kirche (Architekt KurtQuednau, 1953) zeichnet sich durch eine traditionelle Back steinbauweise aus, zu der die moderne Formenspracheim Inneren im Kontrast steht. Augenmerk bei ihrer Sanierunglag auf der historischen Farbgebung des Innenraums. Restauratorische Farbbefunde wurden in ein Gestaltungs konzept überführt. Der Chor erhielt eine neue Orgel. Für das entstehende Gemeindehaus wurde eine zeitgemäßeVerbindung geschaffen.",
    architect: "Studio Andreas Heller GmbH",
    address: "vor dem Kircheneingang, Molkenbuhrstraße 6 , Hamburg",
    id: 201,
    lat: 53.590148,
    lng: 9.925364,
  },
  {
    district: "Wandsbek",
    title: "Skylofts Hamburg - Umbau eines Hochbunkers in ein Wohngebäude",
    description:
      "Die Umnutzung des Luftschutzbunkers zu Wohnungenerforderte den Abbruch der 1,4 m starken Dachdecke, eines Teils der 1,1 m starken Außenwände und der innen liegenden Geschossdecken. Die Neueinteilung der Geschosse ergeben heute 19 Wohneinheiten auf sechsWohnebenen und einem zusätzlichen Staffelgeschoss - mit großen Fenstern und Balkonen.",
    architect:
      "Dipl.-Ing. Architekt Rüdiger Solvie (LP 1-4) , AG horizont Architekten Jürgen Hansen, Dietmar Wintschnig, Dipl.-Ing. Architekten (LP 4-9) ",
    address: "vor dem Gebäude, Wasserstieg 11, Hamburg",
    id: 202,
    lat: 53.5783529,
    lng: 10.0662007,
  },
  {
    district: "Barmbek",
    title:
      "U-Bahn-Haltestelle Dehnhaide, Modernisierung und barrierefreier Ausbau (1995)",
    description:
      "Die Haltestelle ist Teil der historischen Ringstrecke Baujahr1912, die im 2. Weltkrieg weitgehend zerstört wurde. Ver bliebene historische Elemente (Sandsteinportal) wurden mitder neuen Haltestellenüberdachung verbunden. Ein frühesBeispiel für einen barrierefreien Ausbau. Der Umbau mit neu en Bahnsteigen, Überdachung, neuen Treppenaufgängenund Aufzugsanlagen erfolgte 1993 bis 1995 unter laufendemU-Bahnbetrieb in zwei Bauabschnitten.",
    architect:
      "Grundmann /Rehder (bis Juni 1992), Grundmann + Hein (ab Juli 1992)",
    address: "Haltestellen-Haupteingang Dehnhaide, Hamburg",
    id: 203,
    lat: 53.5786717,
    lng: 10.0489654,
  },
  {
    district: "Ottensen",
    title:
      "HausArbeit - Mietwohnungen für eine Baugemeinschaft Alleinerziehender (1994)",
    description:
      "Hausarbeit eG ist ein selbst initiiertes Projekt von Alleiner ziehenden. Es wurde im Rahmen des experimentellen Wohnungs- und Städtebaus wissenschaftlich begleitet undbei der Habitat II Konferenz in Istanbul als best practicepräsentiert. Die individuellen Wohnungen, der Garten unddie gemeinschaftliche Dachterrasse wurden gemeinsam mit den Bewohnerinnen geplant. Damals ungewöhnlichwar die Ausstattung mit raumhohen Fenstern und Holzfuß boden im öffentlich geförderten Mietwohnungsbau.",
    address: "vor dem Eingang Bergiusstraße 22, Hamburg",
    id: 204,
    lat: 53.5535717,
    lng: 9.9266923,
  },
  {
    district: "Rotherbaum",
    title:
      "Schröderstift - Instandsetzung statt Abriss durch Gruppenselbsthilfe (1982)",
    description:
      "Das Schröderstift wurde 1851 / 52 nach Plänen des Architekten Albert Rosengarten auf der grünen Wiese errichtet. Die seit Anfang der 1970er Jahre dort leben den Bewohnerinnen und Bewohner gründeten 1981 denVerein „Mieterselbstverwaltung Schröderstift e.V.“. Sie boten ihre Selbsthilfe an, um die Gebäude instand zusetzen. Das planerkollektiv erarbeitete entsprechende Konzepte und so konnten mit einem sehr hohen Anteil von erbrachter Eigenarbeit durch die Bewohnerinnen und Bewohner die Gebäude langfristig erhalten werden.",
    architect: "planerkollektiv Architekten PartGmbB",
    address: "vor der Kapelle, Schröderstiftstraße 34, Hamburg",
    id: 205,
    lat: 53.5675039,
    lng: 9.9713929,
  },
  {
    district: "Volksdorf",
    title: "Umbau der Kirche am Rockenhof und Anbau Gemeindesaal (1989 / 1995)",
    description:
      "Die Kirche wurde 1952 nach einem Entwurf des ArchitektenWalter Arendt aus dem Jahr 1938 mit basilikalem Quer schnitt und hohem Obergaden mit langem und breitem Mittelschiff mit halbrunder Apsis erbaut. Ende der 1920igerJahre hatte der Architekt die Kirche zunächst im Stil der Moderne entworfen, aber nicht realisiert. Die Kirche bildetzusammen mit dem Pastorat und dem Saal-Anbau von 1995 eine städtebauliche Einheit mit unterschiedlicher Architektursprache. Die Kirchenfenster wurden von Jochem Poensgen gestaltet.",
    architect: "Architektur Büro Prof. Bernhard Hirche",
    address: "Eingang Gemeindesaal, Am Rockenhof 5, Hamburg",
    id: 206,
    lat: 53.65084410000001,
    lng: 10.1649429,
  },
  {
    district: "Alsterdorf",
    title:
      "Umbau und Sanierung der Stiftungskirche St. Nicolaus \nund Errichtung des Lern- und Gedenkortes",
    description:
      "Das 1938 in die neugotische Kirche eingefügte SgraffitoAltarbild zeigt die Verstrickung der früheren AlsterdorferAnstalten mit dem NS-Regime. Um den Kirchraum von derLast des Bildes befreien zu können, dieses aber gleichzeitigals ein Dokument der Täterkunst zu erhalten, wurde es mitder bauzeitlichen Chorwand in den neuen Lern-und Gedenkort für die Opfer der Euthanasie transloziert. Den neuenRaumabschluss bildet nun eine mehrschichtige Glasfassade,die den Raum wieder hell und freundlich erscheinen lässt.",
    architect: "ZYMARA LOITZENBAUER GIESECKE Architekten BDA",
    address:
      "vor der Kirche, Eingang Sengelmanstraße / EckeDorothea-Kasten-Straße, Hamburg",
    id: 207,
    lat: 53.6145023,
    lng: 10.0191504,
  },
  {
    district: "Altona",
    title:
      "Wohnungsgebäude mit Pastoraten undGemeinderäumen an der Paul-Gerhardt-Kirche",
    description:
      "Bei der 1956 erbauten Paul-Gerhardt-Kirche ist ein Wohngebäude mit zwei Pastoraten und Gemeinderäumen entstanden.Das U-förmige Gebäude öffnet sich zum Erschließungshof,zwei flankierende Treppenhäuser sind durch einen dreiseitigumfassenden Laubengang verbunden und erschließen alleWohnungen. Es ist ein Ort entstanden, der ein Miteinander derBewohner*innen ermöglicht, ohne auf Privatheit zu verzichten.",
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
    title: "Max-Planck-Institut für Struktur und Dynamikder Materie",
    description:
      "Das Institut bietet auf dem Campus Bahrenfeld ein attraktives Zuhause für Wissenschaftler*innen, Mitarbeiter*innen,Studierende und Gäste. Vom Foyer bis ins oberste Geschossbilden Treppenläufe entlang der runden Galerieebenen mitgroßen Oberlichtern das kommunikative Zentrum des Gebäudes. Lebendig begrünte Dachterrassen und Dachgärten, diesich über mehrere Geschosse erstrecken, setzen neue Maßstäbe und sorgen für eine besondere Aufenthaltsqualität.",
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
    title: "Built in Barmbek",
    description:
      "Unter dem Leitgedanken „Produktive Stadt“ entstand einGewerbehof, der kleinen Start-ups, Handwerks- und Dienstleistungsbetrieben der Kreativbranche günstige Flächenanbietet. Ein straßenbegleitender, fünfgeschossiger Baukörper ist für großflächige, ein zweigeschossiger Flügel imBlockinneren für kleinteiligere Gewerbenutzungen vorgesehen. Beide verbindet ein gemeinsam genutzter Werkhof.Das Gebäude ist als vorgefertigter Industriebau bewussteinfach gehalten, um geringe Mieten realisieren zu können.Architekturbüro: coido GmbHFührungen: Sven Cordsen, Luisa HeldTermine: Samstag, 25. Juni, 14.10 Uhr, 15.20 Uhr, 16.40 UhrTreffpunkt: Holsteinischer Kamp / Ecke Marschnerstraße",
    architect: "coido GmbH",
    address: "Holsteinischer Kamp / Ecke Marschnerstraße, Hamburg",
    id: 210,
    lat: 53.5751094,
    lng: 10.0396481,
  },
  {
    district: "Eimsbüttel",
    title: "Denkmalgerechte GrundsanierungEmilie-Wüstenfeld-Gymnasium",
    description:
      "Der denkmalgeschützte Bau wurde behutsam saniertund mit sorgfältig detaillierten Ergänzungen versehen undmit einem an dem historischen Vorbild orientierten Farbund Materialkonzept den neuen Nutzungsanforderungenangepasst. Die ursprünglichen, scharrierten Putzoberflächen wurden freigelegt und mittels eines abgestimmten Beleuchtungskonzeptes herausgestellt.",
    architect: "Dohse und Partner Architekten",
    address: "Bundesstraße 78, an der Treppe vor dem Haupteingang, Hamburg",
    id: 211,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Fischbek",
    title: "Gesundheitszentrum Fischbeker Heidbrook",
    description:
      "Das Gebäude wurde in energieeffizienter und modernerHolzbauweise realisiert. Dabei kamen komplett vorgefertigte Holzmassivbauteile zum Einsatz, um eine durchgängighohe Bauqualität zu erhalten, bei gleichzeitig wirtschaftlichen Baukosten und äußerst kurzer Bauzeit. Auch der Fahrstuhlschacht besteht als Holz. Ziel war ein Ärztehaus mitWohlfühlfaktor, in dem Patienten nicht nur medizinisch gutversorgt werden, sondern durch die sichtbaren Holzbauteilesich auch atmosphärisch gut aufgehoben fühlen.",
    architect: "G2R Architekten",
    address: "Im Fischbeker Heidbrook 20, Vorplatz Gesundheitszentrum, Hamburg",
    id: 212,
    lat: 53.4679548,
    lng: 9.814366399999999,
  },
  {
    district: "Hoheluft-West",
    title: "Neubau Wohngebäude Gärtnerstraße 26a",
    description:
      "Im Sinne einer Nachverdichtung der bestehenden Bebauung grenzt der Neubau als drei- bis fünfgeschossiger Riegelin Teilen direkt an das Nachbargebäude Gärtnerstraße 22.Die Position der Treppen- und Aufzugsanlage reagiert dabeiauf die Brandwände des Bestandsbaus, zwei offene Treppenhäuser verbinden die Laubengangerschließung mit großzügigen, begehbaren und begrünten Dachflächen. Insgesamt sind 29 Wohnungen auf fünf Ebenen sowie eine Tiefgarage entstanden.",
    architect:
      "HS-Architekten Part GmbB Schmidt Limmroth FunckKlapsing, Kathrin Wolf Landschaftsarchitektur",
    address: "Gärtnerstraße 22, Tordurchfahrt, Hamburg",
    id: 213,
    lat: 53.5838232,
    lng: 9.9677247,
  },
  {
    district: "Ohlsdorf",
    title:
      "Südteichbrücke Friedhof Ohlsdorf - Neuentwicklung der historischen Teichanlage",
    description:
      "Mit der Südteichbrücke wird der 1887/88 von dem Architekten Johann Wilhelm Cordes angelegte Bereich um denSüdteich mit seiner Insel im Rahmen des Entwicklungskonzeptes Ohlsdorf 2050 neu erschlossen. Die neue Brückenimmt den Platz der historischen schmiedeeisernen Brückeein. In Teilen wird die historische Wegeführung auf der Südteichinsel wieder aufgegriffen. Von Rosenpflanzungen begleitet, schwingt sich der Weg zum höchsten Punkt der Inselund weitet sich zu einem Sitzbereich mit Rundumausblick aus.",
    architect: "YLA Ando Yoo Landschaftsarchitektur",
    address: "Fuhlsbüttler Straße 756, Rückseite des Eingangsgebäudes, Hamburg",
    id: 214,
    lat: 53.6234703,
    lng: 10.0339278,
  },
  {
    district: "Osdorf",
    title: "Osdorfer Born - Bezahlbar besser wohnen",
    description:
      "Das Hochhausensemble Bornheide ist Teil des OsdorferBorns, eines Stadtteils, geprägt von Betonbauten der1960er-Jahre. Durch die exponierte Lage hat das Wohnhochhaus eine charakterbildende Rolle für den Stadtteil,und es setzt heute mit der neuen Gestaltung einen farbenprächtigen Akzent gegen gängige Etikettierungen von",
    architect: "ABJ Architekten",
    address: "Bornheide 80, Eingangsloge, Hamburg",
    id: 215,
    lat: 53.59086,
    lng: 9.8531,
  },
  {
    district: "Othmarschen",
    title:
      "Halbmondhaus - Denkmalgerechte Sanierung \ndes Stallgebäudes und Ausbau zu hochwertigen \nBüroflächen",
    description:
      "Das Halbmondhaus wurde Ende des 18. Jahrhunderts alsStallgebäude des Landhauses Thornton von dem dänischenArchitekten Christian Frederik Hansen erbaut. Das Gebäudeist in der Folgezeit mehrfach überformt und umgenutztworden. Im Rahmen einer umfassenden denkmalgerechtenSanierung, Restaurierung und Umstrukturierung erhieltes eine Büronutzung, die sich über zwei Geschosse erstreckt.Das Entwurfskonzept orientiert sich dabei an der ursprünglichen historischen Grundrissdisposition.",
    architect:
      "Architekten Christian Frederik Hansen erbaut. Das Gebäudeist in der Folgezeit mehrfach überformt und umgenutztworden. Im Rahmen einer umfassenden denkmalgerechtenSanierung, Restaurierung und Umstrukturierung erhieltes eine Büronutzung, die sich über zwei Geschosse erstreckt.Das Entwurfskonzept orientiert sich dabei an der ursprünglichen historischen Grundrissdisposition.Klaus und Schulz Architekten Part mbB",
    address: "Halbmondhaus, Haupteingang, Elbchaussee 228, Hamburg",
    id: 216,
    lat: 53.5464873,
    lng: 9.8761153,
  },
  {
    district: "Schnelsen",
    title: "Parkanlage „Hamburger Deckel“",
    description:
      "Édouard Manets Gemälde „Le déjeuner sur l’herbe“diente dem neuen Park auf dem A7-Tunnel in Schnelsenals Inspiration. Wo sich Blechlawinen einst unter freiemHimmel dahinschoben, gedeiht heute - oberhalb vonVerkehrslärm und vierspuriger Straße - eine vegetativeArtenvielfalt, treffen sich Anwohner*innen zum Picknick,spielen Kinder ungefährdet Fußball, bauen Kleingärtner*innen Obst und Gemüse an. Und alle, die mögen, die lädtdie 2,9 Hektar große Dachbegrünung zu einem Frühstückim Grünen ein.",
    architect: "POLA Landschaftsarchitekten GmbH",
    address:
      "Quartiersplatz „Geschwister-Töllke-Platz“,Höhe Frohmestraße, Hamburg",
    id: 217,
    lat: 53.6317251,
    lng: 9.9227518,
  },
  {
    district: "Stellingen",
    title: "Br48 Baugemeinschaft - Mehrgenerationenwohnen",
    description:
      "Die Baugemeinschaft B48 hat auf einem ehemaligen Einfamilienhaus-Grundstück ein Vier-Generationen-Wohnprojekt als Holzbau realisiert. Die vormalige Eigentümerinwohnt nun gemeinsam mit Familien, Pärchen und Singlesü50. Die acht Wohneinheiten und die Gemeinschafts- undSharingräume verteilen sich auf zwei Geschosse + Staffel.Der Architekt Martin Brüdigam und die Baugruppen-Bewohner*innen informieren über die Entstehung dieses ökologischen und nachhaltigen Wohnprojekts.",
    architect: "Plan -R- Architektenbüro Martin Brüdigam",
    address:
      "Brehmweg 48, im Garten auf der RückseiteHinweis: Parallel findet ein Angebot für junge Leute statt(siehe Veranstaltungsnummer 76 in diesem Programm), Hamburg",
    id: 218,
    lat: 53.584804,
    lng: 9.9425296,
  },
  {
    district: "St. Pauli",
    title: "Appartementhaus Simon-von-Utrecht-Straße",
    description:
      "Die geschlossene Blockrandbebauung dieses Gebäudesfügt sich unaufdringlich in die bereits vorhandene gründerzeitliche Baustruktur ein und schafft durch ihre geneigteBlechdacheindeckung und anthrazitfarbenen Gauben eineattraktive Ecksituation. Die helle Ziegelfassade erlangt ihreoptische Tiefe und Plastizität durch großformatige, bodentiefe Fenster, umlaufende Sichtbetonbänder und versetztangeordnete Balkone. Den begrünten Innenhof prägt eineweiße und für diese Nachbarschaft typische Putzfassade.",
    architect: "THÜS FARNSCHLÄDER ARCHITEKTEN PartmbB",
    address: "Simon-von-Utrecht-Straße 27, Hamburg",
    id: 219,
    lat: 53.5512015,
    lng: 9.9647027,
  },
  {
    district: "St. Pauli, Neustadt",
    title:
      "Erweiterung Planten un Blomen undUmgestaltung Dag-Hammarskjöld-Platz",
    description:
      "Die Revitalisierung des CCH bot 2015 die Chance, den angrenzenden Raum um die Marseiller Straße neu zu ordnen.Mit der Umwandlung der vierspurigen Straße zur Parkanlage wurde eine eigenständige Esplanade zwischen demhistorischen Botanischen Garten und Planten un Blomenimplementiert. Zeitgleich wurde der Dag-HammarskjöldPlatz am Bahnhof Dammtor zum Vorzimmer des AltenBotanischen Gartens.",
    architect:
      "POLA Landschaftsarchitekten GmbH (LP 1-3/5-8),Landschaftsarchitekt Mark Krieger (Pflanzplanung), Dipl.-Ing. IngridGock Garten- und Landschaftsarchitektur (Pflanzplanung)",
    address: "StadtRAD Fahrradmietstation, Dag-Hammarskjöld-Platz, Hamburg",
    id: 220,
    lat: 53.5608977,
    lng: 9.9887294,
  },
  {
    district: "Wandsbek",
    title: "Bunte Bleichen",
    description:
      "Das Wohnensemble an einer viel befahrenen HamburgerMagistrale schafft einen freundlichen Ort mit eigenerIdentität für seine zukünftigen Bewohner. Die kubischenKlinkergebäude erzeugen eigenständige Adressen zumStraßenraum hin und werden über das Thema der Schallschutzloggien und Fenster zu einer gestalterischen Einheitzusammengezogen. Die Innenhoffassaden sind in hellenPutztönen gehalten und laden auf den großzügigen Galerienzum Verweilen ein.",
    architect: "APB. Schneider Andresen Architektenund Stadtplaner PartG mbB",
    address:
      "Wandsbeker Allee 57 / HauseingangHinweis: ohne Innenbesichtigungen, Hamburg",
    id: 221,
    lat: 53.57489770000001,
    lng: 10.0701908,
  },
  {
    district: "Winterhude",
    title: "Quiet Space auf Kampnagel",
    description:
      "Das Zentralfoyer, das Herz Kampnagels, ist ein lebendigerund betriebsamer Ort der Begegnungen. Dieser geschätzteOrt der regen Kommunikation schließt gleichzeitig diejenigen aus, die Ruhe brauchen und trotzdem gern Kulturveranstaltungen besuchen möchten. Im Foyer fehlt einsogenannter Quiet Space, also ein ruhiger, komfortablerund zugleich offener Ort. Wie sieht auf Kampnagel soein Ort aus und welchen Anforderungen muss er gerechtwerden, um in der Öffentlichkeit eines Aufführungsbetriebes zu funktionieren?",
    address: "Kampnagel, Jarrestraße 20, Platz vor dem Zentralfoyer, Hamburg",
    id: 222,
    lat: 53.5833342,
    lng: 10.0218018,
  },
  {
    district: "Winterhude",
    title:
      "Wohnungsbau am Braamkamp - \nDenkmalgerechte energetische Modernisierung \nund Instandsetzung",
    description:
      "Das Gebäude wurde 1930 errichtet (Architekt Ernst Dorendorf). Im Erdgeschoss des fünfgeschossigen Gebäudes befinden sich drei Büros, in den Obergeschossen 24 Wohnungen.In Abstimmung mit dem Denkmalschutzamt wurde ein Sanierungskonzept nahe am Bestand entwickelt. Dazu gehören einWärmedämmverbundsystem mit Klinkerriemchen, neue Fenster mit Sprossen und leichtere Vorstellbalkone. Die ursprünglichen Zierelemente wurden bestandsnah nachgebildet.",
    architect: "d3-architekten",
    address: "Hainbuchenweg 14Hinweis: keine Innenbesichtigung, Hamburg",
    id: 223,
    lat: 53.6007956,
    lng: 9.9997925,
  },
  {
    district: "Altona",
    title: "Lofthaus am Elbberg (1997)",
    description:
      "Der Elbberg ist geprägt von Gegensätzen: von der Elbe imSüden und dem Altonaer Balkon, einem bepflanzten Steilhang im Norden, von den Fischlagerhäusern sowie denBürobauten der Umgebung. In der Architektur des Lofthauses sind diese Gegensätze gespiegelt. So findet die fächerartig aufgebaute, an die Leichtigkeit des Wassers erinnernde Glasfront im Süden in der grünen Kupferfassade zurLandseite hin ein kräftiges Gegengewicht. Das Haus stehtauf Stützen, die ihm Schutz vor Hochwasser bieten.",
    architect:
      "BRT Architekten Bothe Richter Teherani,heute Hadi Teherani Architects GmbH, Jens Bothe Architekt Dipl.-Ing.BDA, Hillmer und Richter Architekten GmbH",
    address: "Büro Hadi Teherani, Elbberg 1, Hamburg",
    id: 224,
    lat: 53.5448575,
    lng: 9.9343515,
  },
  {
    district: "Harvestehude",
    title: "Mehrfamilienhaus mit Arztpraxis Frauenthal  7  (1994)",
    description:
      "An einer Harvestehuder Kreuzungssituation wurde 1994 einviergeschossiges Mehrfamilienhaus mit Praxis errichtet,welches auf die umliegenden Gebäudestrukturen des Milieuschutzgebiets Harvestehude / Rotherbaum Rücksicht nimmt.Es wurde als durchgängiges Mauerwerksmaterial Bimsbetonstein für sämtliche Wände verwendet und das prägendeTonnendach in einer Holzrahmenkonstruktion mit innenliegenden Patios ausgearbeitet. Es zeigt sich heute, wie gutdieses Gebäude altert und sich trotz eigenständiger Ausbildung in die historische Umgebung einfügt.",
    architect: "Architekturbüro Holger Schmidt,heute HS-Architekten PartGmbB",
    address: "Frauenthal 7, Hamburg",
    id: 225,
    lat: 53.5800542,
    lng: 9.9937586,
  },
  {
    district: "Rotherbaum",
    title: "Stadtvilla Alsterufer 38 (1993)",
    description:
      "Der Entwurf orientiert sich an der Typologie der umgebendenVillen und präsentiert ein Gebäude, das in der Eleganz desAusdrucks und der ungewöhnlichen Materialität die Jury desdamaligen Wettbewerbs überzeugte. Die Interpretation derVilla zeigt sich in der repräsentativen Eingangshalle und densehr individuell nach „Raumplan“ entwickelten Wohnungenmit integrierten Maisonetten und unterschiedlichen Raumhöhen. Durch die eigenwillige Kubatur erhielten sämtliche Wohnungen den begehrten Alsterblick.",
    architect:
      "Spengler Wiescholek Architekten Stadtplaner GbR,heute Spengler Wiescholek Architektur / Stadtplanung PartGmbB, Landschaftsarchitekt Günther Schulze",
    address: "Alsterufer 38, Hamburg",
    id: 226,
    lat: 53.56451939999999,
    lng: 9.9980019,
  },
  {
    district: "Altona",
    title: "Haus Krühler - Wohnhaus in Holzbauweisein Hamburg-Othmarschen",
    description:
      "Mit dem in Massivholzbauweise auf einem StahlbetonUntergeschoss errichteten Haus Krühler wurde ein offenesWohnkonzept umgesetzt, mit Höhenversätzen zur Differenzierung von Raum, mit Treppen, die nicht nur der Erschließung dienen, sondern zu Aufenthalts- und Spielflächenwerden, und mit einem Schrank, in dem nicht nur verstaut,sondern auch geklettert werden kann. Das Innere wurdeweitestgehend unverkleidet belassen, Fügung und Schichtung der konstruktiven Bauteile sind das bestimmende Thema des Entwurfs.",
    architect: "asdfg Architekten . Loeper Schmitz Grenz PartGmbB",
    address: "Slevogtstieg 2, Hamburg",
    id: 227,
    lat: 53.54770329999999,
    lng: 9.895241799999999,
  },
  {
    district: "Bahrenfeld",
    title: "DESY Innovationszentrum",
    description:
      "Mit dem DESY Innovationszentrum wird der Forschungscampus in Hamburg-Bahrenfeld erweitert. DerNeubau bietet Büros und Laborflächen für Existenzgründer,Start-ups und etablierte Firmen aus den Forschungsfelderndes Campus. Durch den prägnanten Versatz der Glasfassade im Nordosten entsteht ein überbauter, kommunikativerRaum, der sich zur Luruper Chaussee hin öffnet und einweithin sichtbares Zeichen am Kreuzungspunkt mit der Stadionstraße setzt.",
    architect: "DFZ Architekten",
    address: "Luruper Hauptstraße 1, Eingang DESY Innovationszentrum , Hamburg",
    id: 228,
    lat: 53.58028119999999,
    lng: 9.884354199999999,
  },
  {
    district: "Bergedorf",
    title: "Jugendclub Bergedorf",
    description:
      "Der neue Jugendclub Bergedorf ist ein Bildungs- undSozialisationszentrum der offenen Kinder- und Jugendarbeit und liegt in einem Grünstreifen entlang des KanalsAlte Brookwetterung. Das Low-Budget-Gebäude ist als  CO2 -sparender Holzmassivbau mit einer Fassade aus Wellplatten verkleidet, die dem Gebäude bei sehr geringenKosten ein hohes Identifikationspotenzial geben.",
    architect: "Münch Architekten BDA",
    address: "Am Hohen Stege 1 / Ecke Vierlandenstraße, Hamburg",
    id: 229,
    lat: 53.48530150000001,
    lng: 10.2093138,
  },
  {
    district: "Fischbek \nPosteck - Sanierung eines alten Bauernhauses",
    title:
      "Er war einst einer der schmucksten Höfe in Fischbek und \nschien am Ende kaum noch zu erhalten: Der 1886 erbaute, \ndenkmalgeschützte Hof an der Ecke Scharlbarg / Postecklag jahrelang verfallen im Dornröschenschlaf. Die Rettung \nkam in letzter Minute. Das Bauernhaus wurde aufwendigsaniert und die alte Hofstelle zu einem Ensemble mit21 Mietwohnungen umgebaut.",
    description:
      "Architekturbüro: Schulenburg ArchitektenFührungen: Tim Schulenburg (Schulenburg Architekten)Termine: Samstag, 25. Juni, 10 Uhr, 11 Uhr, 12 UhrTreffpunkt: Posteck 2",
    architect: "Schulenburg Architekten",
    address: "Posteck 2, Hamburg",
    id: 230,
    lat: 53.4701177,
    lng: 9.8280877,
  },
  {
    district: "HafenCity",
    title: "Fleetbrücke Miniaturwunderland",
    description:
      "Das Miniaturwunderland plante eine Erweiterung in einen aufder anderen Fleetseite gelegenen Speicher. Als witterungsgeschützte Verbindung für Besucher*innen und Modelleisenbahnen wurde eine 25 Meter lange Brücke mit Glasfassadeund einem an die Umgebung angepassten Strebenfachwerkals Tragwerk erstellt. Wegen des Höhenunterschieds derbeiden Speichergebäude verläuft die in einem Stück hergestellte und per Kran eingehobene Brücke schräg mit der fürModellbahnen maximalen Steigung von 3 Prozent.",
    architect: "studioH2K ArchitektenIngenieurbüro: panta ingenieure GmbH",
    address: "Kehrwieder 2 / Ecke Auf dem Sande, Hamburg",
    id: 231,
    lat: 53.5438469,
    lng: 9.988992999999999,
  },
  {
    district: "HafenCity",
    title: "Quartier der Generationen, Baufeld 93",
    description:
      "In Wasserlage an der Elbe sind Wohnnutzungen für unterschiedliche Gruppen entstanden: Preisgedämpfte, freifinanzierte und geförderte Wohnungen sowie Seniorenwohnungen werden über einen Innenhof erschlossen, der übereine große Freitreppe zu erreichen ist. Der Entwurf reagiertauf diese Mischung mit der konsequenten Ausbildung differenzierter Fassaden. Die Ausführung in farbverwandtemKlinker fasst das Quartier optisch zusammen.",
    architect:
      "KPW Papay Warncke Vagt Architekten (Gesamtprojekt: Bebauungs- und Nutzungskonzept; Haus 2-5: LP 1-4, Leitdetails; Haus 1-5: LP 5 Warftgeschoss und Tiefgarage); PlanwerkeinsArchitekten (Haus 1-5: LP 5 ab EG)",
    address: "Lola-Rogge-Platz, vor dem Discounter, Hamburg",
    id: 232,
    lat: 53.5376361,
    lng: 10.0125279,
  },
  {
    district: "Oberbillwerder",
    title: "Oberbillwerder",
    description:
      "Oberbillwerder liegt im Bezirk Bergedorf, rund 16 Minutenvom Hamburger Hauptbahnhof entfernt. Es ist nicht nurHamburgs zweitgrößtes Stadtentwicklungsprojekt, es wirdauch der 105. Stadtteil der Hansestadt - und der nachhaltigste. Seit 2016 laufen die Planungen der IBA Hamburg zurEntwicklung des neuen Stadtteils. In dem Prozess mit verschiedenen Beteiligungsformaten wurde der Entwurf vonADEPT mit Karres en Brands ausgewählt, der nun für die bauliche Realisierung ab Mitte der 2020er-Jahre weiterentwickelt wird.",
    architect: "ADEPT und Karres en Brands",
    address: "Nördlich der S-Bahn-Station Allermöhe, Hamburg",
    id: 233,
    lat: 53.4849804,
    lng: 10.1489358,
  },
  {
    district: "Osdorf",
    title: "Geschwister-Scholl-Stadtteilschule",
    description:
      "Die Geschwister-Scholl-Stadtteilschule mit dem Haus derJugend und der Bezirkssporthalle liegt direkt am Glückstädter Weg im Stadtteil Osdorf im Bezirk Altona. Der Baukörper des dreigeschossigen Schulgebäudes fügt sichaus vier Jahrgangsclusterhäusern. Fünf Klassenräume mitGruppenräumen und die Teamstation bilden die jeweiligeigenständigen Jahrgangscluster. Die Mensa und das Forum im Erdgeschoss dienen als Herz der Schule. Die sandfarbige Klinkerfassade vermittelt Ruhe und Geborgenheit.",
    architect:
      "MGF Architekten GmbH, (LP 1-8);mo architekten Ingenieure (LP 8)",
    address: "Haupteingang am Glückstädter Weg 7, Hamburg",
    id: 234,
    lat: 53.5863958,
    lng: 9.8655121,
  },
  {
    district: "Othmarschen",
    title: "Ramboll Hamburg Headoffice - neue Arbeitswelt",
    description:
      "Der neue Workspace von Ramboll Deutschland in Hamburgwurde nach den Aspekten neuer Arbeitswelten gestaltet.Ramboll ist ein internationales Ingenieur-, Architektur- undManagementbüro - mit Kompetenz im Bereich neue Energien. Diese Verbindung zu den Elementen Wasser und Luftsowie zu Pflanzen und Bäumen wurde als konzeptionellerTreiber für das architektonische Raumkonzept genutzt. Beider Auswahl der Materialien sowie beim Einrichtungskonzept lag der Fokus auf nachhaltigem Design.",
    architect: "PLY Atelier GmbH",
    address: "Jürgen-Töpfer-Straße 48 / Haus 17, Haupteingang, Hamburg",
    id: 235,
    lat: 53.5566821,
    lng: 9.907025599999999,
  },
  {
    district: "Ottensen",
    title: "Umbau, Sanierung und Aufstockung \neines ehemaligen Fabrikgebäudes",
    description:
      "Das im Jahre 1890 als offener Lagerschuppen für eineDampfsägerei errichtete Gebäude wurde zuletzt alsDruckerei genutzt, bevor es lange leer stand. Das Hinterhof-Gebäude liegt in einem Wohn- und Gewerbehofim Herzen von Ottensen. Die neue Nutzung sollte sich indieses Umfeld einfügen, so waren u.a. übersichtlicheGebäudeeinheiten gewünscht. Die dreiseitige Grenzständigkeit des Gebäudes war in Bezug auf natürliche Belichtung und Fluchtwege besonders herausfordernd beidieser Bauaufgabe.",
    architect: "Ulrich Tränkmann Architektur",
    address: "Hohenesch 13, im Hof, Hamburg",
    id: 236,
    lat: 53.5488282,
    lng: 9.987170299999999,
  },
  {
    district: "Stellingen",
    title: "Wohngebäude Sportplatzring 5  - 21",
    description:
      "Der Wohnkomplex wurde mit zwei kontrastreichen Fassaden geplant. Zur Straßenseite knüpft ein rötlicher Klinkeran die Materialität des angrenzenden Rathauses von Stellingen an und verleiht dem Gebäuderiegel einen monolithischen Charakter - die Gartenfassade ist hell und luftigmit transparent wirkenden Balkonen gestaltet. Der Neubau öffnet sich mit bodentiefen Fenstern zur parkähnlichenLandschaft, während die Gartenseite von der schallabsorbierenden Funktion des Gebäuderiegels profitiert.",
    architect: "Gerber Architekten GmbH",
    address: "Sportplatzring / Ecke Basselweg, Hamburg",
    id: 237,
    lat: 53.59253150000001,
    lng: 9.933798099999999,
  },
  {
    district: "St. Georg",
    title: "CAB 20",
    description:
      "Der Entwurf für das deutschlandweit erste Kabinenhotelist in seiner Reduktion auf das Wesentliche an japanischenKapselhotels orientiert. Es bietet 176 jeweils zweifach insich verschachtelte Kabinen als Ein- oder Zweibettzimmer.Die Gestaltung bezieht sich auf die ehemalige Zwischennutzung der Streetartkünstler*innen B20 im vormaligenAutohaus. So haben lokale Streetartkünstler*innen dieWände und Treppenhäuser des Hotels gestaltet.",
    architect:
      "Janiesch Architektur (Innenarchitektur LP 3-8, künstlerische Oberleitung LP 5-8), Clic (LP 2, Entwurf Kojen), Licht01 (LP 3-8),SKAI Architekten (Architektur, LP1-3), A6 Architekten(Architektur LP 5), PVOO Architekten (Architektur LP 6-8)",
    address: "Brennerstrasse 20, Lobby im EG, Hamburg",
    id: 238,
    lat: 53.5552986,
    lng: 10.0147874,
  },
  {
    district: "St. Pauli",
    title: "Neubau für das Jung von Matt Headquarter",
    description:
      "Der Neubau verbindet zwei bestehende Gebäude. In einemzentralen Treppenhaus werden die verschiedenen Geschossebenen zusammengeführt. Die Backsteinfassade, als Hommage an den historischen Kontext, schirmt mit Filtermauerwerk im Erdgeschoss den offenen Parkplatz ab. In den Obergeschossen ermöglichen die großzügigen Öffnungen lichtdurchflutete Arbeitswelten. Im Staffelgeschoss befindensind neben einer großen Dachterrasse multifunktionale Räume für Nachwuchstalente.",
    architect: "Stephen Williams Associates (LP 1-4),KKP Architekten (LP 5)",
    address: "Glashüttenstraße 79, vor dem Haupteingang, Hamburg",
    id: 239,
    lat: 53.5600094,
    lng: 9.9732712,
  },
  {
    district: "Uhlenhorst",
    title: "Atelierhaus Hochschule für bildende Künste \nHamburg HFBK",
    description:
      "Das Atelierhaus entstand als frei stehender Kubus nebendem Hauptgebäude Fritz Schumachers aus dem Jahr 1913.Das Erdgeschoss beherbergt drei Ausstellungsräume, dieObergeschosse zwölf Ateliers für Studierende. Eine zentraleviergeschossige Halle mit großem Luftraum dient der Erschließung und Kommunikation. Die Klinkerfassade überzieht den Kubus wie ein Gewebe. Die Schichtung der gegenläufig angeordneten, schrägen Fensterleibungen erzeugtein spannungsreiches Bild.",
    architect: "Winking · Froh Architekten GmbH",
    address:
      "Atelierhaus, Lerchenfeld 2 a,zwischen Neubau und Bestandsbau HFBK, Hamburg",
    id: 240,
    lat: 53.56703,
    lng: 10.0314365,
  },
  {
    district: "Wilhelmsburg",
    title: "Umnutzung der Kirche St. Maximilian Kolbe \nzum Malteser Campus",
    description:
      "Mit dem Kirchbau St. Maximilian Kolbe, dessen spiralförmiger Grundform, der aufgefächerten, ansteigendenDachkonstruktion sowie einer feinen Materialität undDetailierung hat der Architekt Jo Filke Anfang der 1970erJahre ein integrales Raumerlebnis geschaffen. Einen „Einraum“, dessen Qualität von jedem Standpunkt aus verändert wahrgenommen werden kann. Die Umnutzung mitöffentlichen sowie sozialen Funktionen des MalteserOrdens ist eine angemessene Maßnahme zum Erhalt dieses außerordentlichen Baudenkmals.",
    architect: "LH Architekten (Umnutzung); Jo Filke (Kirche, 1974)",
    address: "Haupteingang Kirchbau, Krieter Straße 9, Hamburg",
    id: 241,
    lat: 53.4984394,
    lng: 10.0136537,
  },
  {
    district: "Winterhude",
    title: "Pergolenviertel Baufelder 5 und 6",
    description:
      "Die zentralen Baufelder im Pergolenviertel - ein langerRiegel und ein kompakter Block - rahmen den Quartiersplatz und sind im Erdgeschoss öffentlich genutzt: Nebeneiner Kita und einer Tagesförderung entstehen u.a. einQuartierscafé mit Hofladen, eine Fahrradwerkstatt, Atelierflächen und ein Schwimmbad im Untergeschoss. Architektonisch markant ist die Fassadengestaltung, die durchKlinkerornamentik und die namensgebenden Pergolenbzw. Arkaden eine leicht südländisch anmutende Eleganzausstrahlt.Architekturbüro: coido GmbHFührungen: Jirka BarsTermine: Samstag, 25. Juni, 14.10 Uhr, 15.20 Uhr, 16.40 UhrTreffpunkt: Winterlindenweg 32, vor dem Café",
    architect: "coido GmbH",
    address: "Winterlindenweg 32, vor dem Café, Hamburg",
    id: 242,
    lat: 53.60407540000001,
    lng: 10.0308881,
  },
  {
    district: "Hammerbrook",
    title: "VTG Center und Wohnhaus am Nagelsweg (1996)",
    description:
      "In der von Gewerbe- und Bürobauten geprägten City Südentstand ein Quartier mit einer Nutzungsmischung aus Wohnen und Arbeiten. Das Bürogebäude, Firmensitz des Transportunternehmens VTG, und das Wohngebäude ergänzen denBestand zu einem neuen Stadtbaustein. Die Baukörper bilden ein Ensemble um einen halböffentlichen Garten, der sichmit einem repräsentativen Vorplatz zum Nagelsweg öffnet.Auf dem dreieckigen Grundstückszuschnitt schiebt sich eineprägnante Figur in den Straßenraum.",
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
    title: "Restaurant Eisenstein (1989)",
    description:
      "In der ehemaligen Schiffschraubenfabrik Zeise in HamburgOttensen befinden sich die Räume des Restaurants Eisenstein. Im Vordergrund der Umbaumaßnahme stand, eineVerbindung zwischen Alt und Neu herzustellen, schroffer Industriecharakter kombiniert mit zeitloser Architektur. Dafür wurde die vorhandene Baukonstruktion der Hallen instandgesetzt und durch zeitlose Elemente ergänzt. In Stahlrahmen gefasste Mauerwerksausschnitte sowie die mächtige Schornsteinanlage machen die Geschichte des Gebäudes sichtbar.",
    architect: "Dinse Feest Zurl, heute DFZ Architekten",
    address:
      "vor dem Eingang des Außenbereichs des Eisensteins,Friedensallee 9, Hamburg",
    id: 244,
    lat: 53.5544162,
    lng: 9.927119099999999,
  },
  {
    district: "Winterhude",
    title: "Erweiterung Jarrestadt (1994)",
    description:
      "Die Wohnbebauung Jarrestraße ist das Ergebnis eines städtebaulichen Wettbewerbs von 1982. Ziel war die Ergänzung derhistorischen Jarrestadt. Das städtebauliche Konzept geht aufden Rhythmus der gegenüberliegenden Blöcke und Freiräumeder Jarrestadt ein. Die dort formulierten Räume werden verlängert und an den parkartigen Freiraum am Osterbekkanalgeführt. Die Jarrestadt ist die Verbindung vom Goldbekkanalzum Osterbekkanal. Eine neue Brücke führt über Letzteren.",
    address: "Jarrestraße 32, Hamburg",
    id: 245,
    lat: 53.5845998,
    lng: 10.0241006,
  },
  {
    title: "Burstah Ensemble ",
    description:
      "Das städtebauliche Entwicklungsprogramm „Innenstadtkonzept Hamburg 2010“ sieht im Umfeld der Nikolaikirche eine Neuordnung des Areals in Anlehnung an die kriegszerstörte, gründerzeitliche Bebauungsstruktur vor. Auf Grundlage des Wettbewerbsentwurfs „Großer Burstah 3, Neue Burg 1“ von BIWERMAU Architekten wurden dort zwei Büro- und Geschäftshäuser realisiert, die die stadtbildprägenden Typologien der Hamburger Kontorhäuser fortschreiben.",
    district: "Altstadt",
    address: "Bohnenstraße, Hahntrapp, 20457 Hamburg",
    architect:
      "BIWERMAU Architekten BDA (Wettbewerb 1. Preis, LP 1-4 + Leitdetails),  Tchoban Voss Architekten (LP 5), www.tchobanvoss.de",
    id: 246,
    lat: 53.5483993,
    lng: 9.9902588,
  },
  {
    title: "Carlsen Verlagscampus",
    description:
      "Wo die Firma Gutmann noch bis 1980 Sandstrahlgebläse herstellte, entstand im Mai 2021 eine neue Bürowelt für den Kinder- und Jugendbuchverlag Carlsen. Diese neue Fläche in Ottensen ist Teil des zukünftigen Verlags-Campus, der sich derzeit auf dem Areal in der Völckersstraße 20 entwickelt. Sie ergänzt das dortige Verlagshaus des Unternehmens um einen weiteren, größeren Standort in direkter Nachbarschaft. \n ",
    district: "Ottensen",
    address: "Völckerstraße 20",
    architect:
      "ARGE de Winder Architekten / Stern Architekten,  www.stern-architekten.de",
    id: 247,
    lat: 48.1907603,
    lng: 11.6117976,
  },
  {
    title: "Gemeinsam Wohnen im Grünen in Alt Osdorf",
    description:
      "Die dreigeschossige Neubauzeile mit Staffel (16 Wohneinheiten) im vorstädtischen Stadtteil Osdorf wurde nachhaltig geplant: Die großzügigen aufgeständerten Freisitze sind ebenso wie die Fassade aus hochwertigen Tonschindeln, zu 50 % aus recycelten Klinkern gefertigt, rückbaubar. Die Schindeln wurden speziell für die vorgehängte hinterlüftete Fassadenkonstruktion entwickelt, um Materialverluste zu minimieren und eine zeitgemäße, innovative Alternative zum umweltschädlichen Wärmedämmverbundsystem zu realisieren.",
    district: "Osdorf",
    address: "Jochim-Sahling-Weg 13, 22549 Hamburg",
    architect: "LRW Architekten und Stadtplaner Loosen, Rüschoff + Winkler",
    id: 248,
    lat: 53.5747282,
    lng: 9.8479692,
  },
  {
    title: "Geschäftshaus am Lohsepark",
    description:
      "Gelegen am Hamburger Lohsepark, bildet der L-förmige Baukörper städtebaulich eine Einheit mit dem angrenzenden denkmalgeschützten Bestand. Der Gebäudekörper erscheint zweigeteilt und staffelt sich durch Dachterrassen zu den Nachbarn hin ab. Der Sockel des Gebäudes ist mit grün und schwarz glasierten Klinkern gestaltet. Die mit rotem Klinker gemauerte Fassade der Obergeschosse lässt das Gebäude je nach Licht- und Witterungsverhältnissen unterschiedlich erscheinen und verleiht ihm eine nahezu textile Leichtigkeit.",
    district: "HafenCity",
    address: "Am Lohsepark 4-6, 20457 Hamburg",
    architect: "Wandel Lorch Götze Wach",
    id: 249,
    lat: 53.5431993,
    lng: 10.0037716,
  },
  {
    title: "Wohnen und Studieren auf der „Schanze“",
    description:
      "Sieben drei- bis siebengeschossige Wohngebäude (113 Eigentumswohnungen und Studierendenwohnanlage) schließen den Blockrand Schulterblatt /Amandastraße. Nach Norden zum angrenzenden Lindenpark komplementiert ein dreigeschossiger Riegel mit Staffelgeschoss und einem fünfgeschossigen Solitär das Quartier um einen neuen Innenhof und schafft so privaten Freiraum für die Bewohner*innen. Das Quartier zeichnet sich durch eine hohe urbane Dichte (Geschossflächenzahl: 3,4) und hervorragende Wohn- und Freiraumqualitäten aus.",
    district: "Schanzenviertel",
    address: "Schulterblatt 120 / Amandastraße 74, 20357 Hamburg",
    architect: "LRW Architekten und Stadtplaner Loosen, Rüschoff und Winkler",
    id: 250,
    lat: 53.56514,
    lng: 9.95955,
  },
  {
    title: "Barrierefreies Hamburger Rathaus",
    description:
      "Mit dem Aufzug ist ein Meilenstein für die Barrierefreiheit im Hamburger Rathaus erreicht worden. Jetzt können mobilitätseingeschränkte Personen und Menschen mit Behinderung alle Ebenen vom Keller bis zum Dachgeschoss erreichen. Damit sind die Besucher*innentribüne des Plenarsaals, der Festsaal mit Galerie sowie Besprechungsräume und die Abgeordnet*innenbüros für alle Menschen, unabhängig von ihren Mobilitätseinschränkungen, selbstständig und selbstbestimmt ohne fremde Hilfe barrierefrei zugänglich.",
    district: "Altstadt",
    address: "Rathausmarkt 1, 20095 Hamburg",
    architect: "rimpf Architektur & Generalplanung",
    id: 251,
    lat: 53.55048480000001,
    lng: 9.992437299999999,
  },
  {
    title: "Bauspielhaus Hexenberg \n",
    description:
      "Der Massivholzbau wurde durch das Bezirksamt Altona und das Amt für Bauordnung und Hochbau 44 realisiert. Er beherbergt die Gruppenräume des Bauspielplatzes, in denen Kinder unter Betreuung spielen und werken können. Die Geometrie des Baukörpers verleiht diesem einen kindgerechten Maßstab. Die Baumaterialien spiegeln die Nutzung wider. Die Massivholzwände und Dächer sind im Innenraum sichtbar. Die Lärchenbretter für die Fassade wurden von der Försterei Klövensteen mit Holz aus dem bezirkseigenen Forst hergestellt.",
    district: "Altona",
    address: "Königstraße 8a, 22767 Hamburg",
    architect:
      "Architekturbüro Hormann (LP 1-8),  Architekturbüro Moedebeck (LP 8), www.moedebeck.netJan Hormann (Architekturbüro Hormann), Gilbert Moedebeck (Architekturbüro Moedebeck), Johannes Hüttermann (Klett Ingenieur), Bernd Germer (GS-Ingenieure Germer & Petersen), Daniel Wickersheim (Wickersheim Mannsfeld), Helge Fischer, Michael Prehn",
    id: 252,
    lat: 53.5500682,
    lng: 9.9531102,
  },
  {
    title: "Revitalisierung Bürogebäude Rosenstraße",
    description:
      "Das in den Jahren 1993 und 1996 errichtete Büro- und Geschäftshaus in der Rosenstraße in Hamburg wurde einer umfangreichen Revitalisierung unterzogen, die neben einer BREEAM-Zertifizierung für die Lebenszyklusphasen von Immobilien zum Ziel hatte, eine Multi-Tenant Vermietung mit zeitgemäßen Arbeitsplatzformen von Open Space bis Single Workplaces zu ermöglichen - also eine Art \"Multispace\" zu realisieren, der die Mitarbeitenden in ihren Arbeitsabläufen, aber auch in ihrem Büro- und Lebensalltag unterstützt.",
    district: "Altstadt",
    address: "Rosenstraße 9-11, 20095 Hamburg",
    architect: "pbr Planungsbüro Rohling AG",
    id: 253,
    lat: 53.55305269999999,
    lng: 10.0019773,
  },
  {
    title:
      "Vom Kirdorfhaus zum Ballinhof: Umbau, Erweiterung und Sanierung eines historischen Kontorhauses an der Hamburger Binnenalster",
    description:
      "Von der Alster bis zur Ferdinandstraße erstreckt sich seit Fertigstellung im Jahr 1921 das sechsgeschossige Kontorhaus. Die äußerst widersprüchlichen Fassaden aus Sandstein, Keramik und Stuck wurden mit großer Zurückhaltung saniert und teilweise mit nachgebrannter Keramik neu aufgebaut. Die originale Kupferdachdeckung wurde aufgearbeitet und gerettet. Die historischen, nach außen vortretenden Vitrinen wurden als Stahlkonstruktion neu erbaut.",
    district: "Altstadt",
    address: "Ballindamm 17, 20095 Hamburg",
    architect: "HS-Architekten PartGmbB Schmidt Limmroth Funck Klapsing",
    id: 254,
    lat: 53.5538465,
    lng: 9.9984348,
  },
  {
    title: "Tischlerei Møbelwerft - Holz auf Holz",
    description:
      "Planungsbüro und Showroom sollten ein Gesicht bekommen: Wenn Kund*innen zur Møbelwerft kommen, sehen sie direkt, was diese Tischlerei alles kann. Deren handwerkliche Exzellenz in der Arbeit mit Holz spiegelt sich vom Empfang über den Konferenzraum bis weiter in den Materialraum und den Toilettenbereich wider.  ",
    district: "Bahrenfeld",
    address: "Boschstraße 16, 22761 Hamburg",
    architect: "",
    id: 255,
    lat: 53.5673718,
    lng: 9.9141628,
  },
  {
    title: "Montblanc Haus",
    description:
      "Das Montblanc Haus ist ein neues Ausstellungsgebäude, das der Kunst des Schreibens gewidmet ist. Das Projekt ist als 100 Meter langes Volumen konzipiert, das die historische Form der Hülle eines Schreibgeräts aufgreift. Eine komplexe Abfolge von Räumen auf drei Ebenen ist um ein einzigartiges Foyer herum entwickelt. Das Gebäude mit einer Nutzfläche von 3.600 m² beherbergt eine Dauerausstellung, temporäre Ausstellungsräume, ein Archiv, eine Boutique, ein Schreib-Atelier, Meetingräume und ein Café.",
    district: "Lurup",
    address: "Hellgrundweg, 98, 22525 Hamburg",
    architect: "Nieto Sobejano Arquitectos GmbH, Plan Forward GmbH",
    id: 256,
    lat: 53.5934638,
    lng: 9.8991329,
  },
  {
    title:
      "Umnutzung und Erweiterung eines Luftschutzbunkers zu Mikroappartements",
    description:
      "Der unter Denkmalschutz stehende Bunker aus den 1940er Jahren wurde zu Mikroappartements sowie zwei Gewerbeeinheiten umgebaut. Die ebenfalls unter Denkmalschutz stehenden Geschossdecken und Treppenhäuser wurden erhalten und Relikte aus der aktiven Bunkerzeit in die Planung integriert. Die Belichtung der Bunkerappartements erfolgt über zwei Lichtschlitze in der Außenfassade. Historische und neue Elemente bilden dabei einen harten Kontrast. Ergänzt wurde der Bunker durch einen rückwertigen Anbau.",
    district: "Barmbek-Süd",
    address: "Habichtstraße 37",
    architect:
      "Doruk Architekten (LP 1-4), AG horizont Architekten (LP 3-6 und KOL 8), Design Haus Medy (LP 7), TBR Architekten (LP 8)",
    id: 257,
    lat: 53.5935184,
    lng: 10.052142,
  },
  {
    title: "Wohnsiedlung Julius-Vosseler-Straße",
    description:
      "Als Siegerentwurf aus einem städtebaulichen Wettbewerb hervorgegangen, bietet das neue Quartier auf dem ehemaligen Gelände eines Kleingartenvereins Wohnraum für über 600 Menschen. Der großräumige Wohnhof, der sich typologisch an den Mietsblöcken aus der Zeit der Weimarer Republik orientiert, schafft mit seiner parkartigen Weite und den neu gepflanzten Großbäumen eine außerordentliche Aufenthaltsqualität. Die Mischung aus freifinanzierten und geförderten Wohnungen ist zukunftsweisend für urbanes Wohnen in Hamburg.",
    district: "Lokstedt",
    address: "Julius-Vosseler-Straße 106-114, 22527 Hamburg",
    architect: "SEHW Architekten PartG mbB",
    id: 258,
    lat: 53.5895136,
    lng: 9.947235,
  },
  {
    title: "Alsterkant",
    description:
      "Das Gebäudeensemble ist eine umschließende Blockrandbebauung unter Berücksichtigung der vorgegebenen Sichtachse. Durch ein Öffnen des Blockrands zur Alster ist der Durchblick und der Bezug zum Wasser gegeben. Um neben dem Erhalt der schützenswerten Bäume den wichtigen Bezug zu dem gegenüberliegenden Schumacher-Bau zu schaffen, tritt das Volumen auf der Nordseite in Teilen zurück.",
    district: "Ohlsdorf",
    address: "Im Grünen Grunde / Am Hasenberge, 22337 Hamburg",
    architect: "bof architekten (LP 1-5)",
    id: 259,
    lat: 53.6224924,
    lng: 10.031251,
  },
  {
    title: "Info Pavillon zum Hamburger Architektur Sommer 2023",
    description:
      "Zirkularität gilt als einer der Schlüssel zum ressourcenschonenden Bauen. Zukünftig gilt es Gebäude so zu konstruieren, dass die Nutzung der darin verbauten Materialien über die Lebensdauer der Gebäude hinaus gewährleistet bleibt. Verbindungen und Fügungen von Baumaterialien müssen neu und reversibel gedacht werden. Welche Materialstrategien kommen zum Einsatz? Am Beispiel des temporären Pavillons soll kreislaufgerechtes Bauen im Zeitraffer und Modellversuch anschaulich und nachvollziehbar werden.",
    district: "HafenCity",
    address: "Magellan-Terassen",
    architect: "",
    id: 260,
    lat: 53.5423053,
    lng: 9.9929653,
  },
  {
    title: "Kommunales Kultur- und Begegnungszentrum KörberHaus",
    description:
      "Mitten in Bergdorf befindet sich das neue KörberHaus: ein offenes Haus mit Theater, Bibliothek, Café und multifunktionalen Veranstaltungsräumen für alle. Das Herzstück des Hauses, das lichtdurchflutete Foyer bietet den Besucher*innen einen schnellen Überblick über alle drei Geschosse. Lamellen aus Kupfer mit der typischen warmrötlichen Farbigkeit umhüllen das Gebäude und verbinden den Neubau mit der umgebenden Backsteinarchitektur. Über dem Wasser schwebende Terrassen bieten Ruheorte im Freien.",
    district: "Bergedorf",
    address: "Holzhude 1, 21029 Hamburg-Bergedorf",
    architect:
      "MGF Architekten GmbH (LP 1-4, Wettbewerb 2017 1.Preis),  Schaub und Partner (LP 5), www.schaub-architekten.de; mo architekten und ingenieure (Lp 6-9), www.mo-architekten.de",
    id: 261,
    lat: 53.4871297,
    lng: 10.2087974,
  },
  {
    title: "ZINNERGIE - eine urbane Biogasanlage ",
    description:
      "ZINNERGIE erforscht das Potenzial zirkulärer Konzepte durch den Bau einer kleinen urbanen Biogasanlage, die ausschließlich aus wiederverwendeten Materialien besteht. Entwickelt wurde eine robuste Struktur, die die Infrastruktur der Biogasanlage aufnimmt und darüber hinaus ausstellt. Ein großes Dach schützt vor Regen und definiert das Gesicht zur öffentlichen Straße. Die Offenheit der Struktur lädt die Menschen ein einzutreten. Der Platz davor wird aktiviert und in einen Ort des öffentlichen Lebens verwandelt.",
    district: "Wilhelmsburg",
    address: "Am Veringhof 7",
    architect: "",
    id: 262,
    lat: 53.5131935,
    lng: 9.984465,
  },
  {
    title: "Baugemeinschaft „Tor zur Welt“",
    description:
      "Für die Baugemeinschaft „Tor zur Welt“ wurde in der östlichen HafenCity am Eingang zum Quartier Baakenhafen eine achtgeschossige Wohnbebauung in Holzhybridbauweise mit 29 Wohneinheiten errichtet. Zielsetzung bei der Grundrissfindung war, eine möglichst robuste Grundstruktur zu schaffen, die in der Nutzung und bei einer möglichen späteren Umnutzung maximale Variabilität ermöglicht. Neben Aspekten der Nachhaltigkeit wurde durch ein regelmäßiges Grundrisssystem eine hohe Kosteneffizienz sichergestellt.\n ",
    district: "HafenCity",
    address: "Baakenallee 8-10, 20457 Hamburg",
    architect: "Kaden+Lager (heute ",
    id: 263,
    lat: 53.5377665,
    lng: 10.0101443,
  },
  {
    title: "Hammerbrooklyn Digital Pavillon",
    description:
      "Translozierung eines Expo Pavillons von Mailand nach Hamburg: Das ursprüngliche Bauwerk des Architekten James Biber (NY) musste an die deutschen Bauvorschriften angepasst werden und bildet das Initialgebäude der digitalen Transformation des Großmarktgeländes. Spine Architects nahmen im Inneren räumliche Modifikationen für die neuen Nutzungen vor, ertüchtigte die thermische Hülle, errichtete die unteren beiden Ebenen in massiver, feuerbeständiger Stahlbetonbauweise und entwickelte drei neue Stahlbetontreppenhäuser.",
    district: "Hammerbrook",
    address: "Stadtdeich 2-4, 20097 Hamburg",
    architect:
      "Biber Architects (ursprünglicher Expo Pavillon Expo Mailand 2015),  \nSpine Architects GmbH (LP 5-7, künstlerische Oberbauleitung und Mieterausbauplanung), www.spine-architects.com",
    id: 264,
    lat: 53.545159,
    lng: 10.0085024,
  },
  {
    title: "Lofthouse Stahlwiete 20",
    description:
      "Das Grundstück befindet sich in Bahrenfeld nahe des beliebten Stadtteils Ottensen. In dem ehemals von Industrie geprägten Gebiet hat sich inzwischen ein lebendiges Miteinander von Gewerbe und Wohnen entwickelt. Im Innenhof des Grundstücks befindet sich ein unter Denkmalschutz stehendes Fabrikgebäude. Mit dem Neubau wird die Lücke in der Blockrandbebauung geschlossen. Gleichzeitig bleibt die Sichtverbindung durch den großzügigen zweigeschossigen Durchgang in den Innenhof und zum historische Fabrikgebäude bestehen.",
    district: "Bahrenfeld",
    address: "Stahltwiete 20, 22761 Hamburg",
    architect: "Heitmann Montufar Architekten (LP 1-5)",
    id: 265,
    lat: 53.5620497,
    lng: 9.9266474,
  },
  {
    title: "Neubau für \"Der Player - Eat. Drink. Dance. Work\"",
    description:
      "Ottensen ist ein Stadtteil mit vielen historischen Loftgebäuden. Der „Player“ ist ein Businessclub als kreativem Knotenpunkt mit Gastronomie-, Büro und Freizeitflächen mit ganzheitlichem Ansatz. Der Ziegelstein über dem Cortenstahl-Sockel wurde aus dem Rückbau von historischer Bausubstanz gewonnen. Die Fenster erinnern in Material und Proportion an ein Loftgebäude. Die Haupterschließung erfolgt über eine außenliegende Stahltreppe im Hinterhof, wie bei vielen Industriegebäuden aus dem 19. Jahrhundert üblich.",
    district: "Ottensen",
    address: "Bahrenfelder Straße 322, 22765 Hamburg",
    architect:
      "Stephen Willams Associates (Architektur LP 1-4 und Innenarchitektur),  Aumann Katzsch Architekten (Architektur LP 5-8) www.au-kat.de",
    id: 266,
    lat: 53.5590103,
    lng: 9.928253699999999,
  },
  {
    title: "Pergolenviertel",
    description:
      "Das Pergolenviertel beschreibt den „Block im Grünen“ in der urbanen Umgebung zwischen der Hamburger City Nord und Barmbek. Der Entwurf basiert auf einem klaren Entwurfsraster, welches sich sowohl in der äußeren Fassadengestaltung als auch in der inneren Struktur des Baukörpers wiederfindet. Das städtebauliche Prinzip wird hier zum maßstabsübergreifenden Entwurfsthema.",
    district: "Winterhude",
    address: "Feldahornweg, 22303 Hamburg",
    architect: "blrm Architekt*innen GmbH",
    id: 267,
    lat: 53.5980061,
    lng: 10.034,
  },
  {
    title: "Sanierung und Erweiterung Kulturhaus Eidelstedt",
    description:
      "Die Sanierung und Erweiterung des Kulturhauses Eidelstedt erfolgte nach den Plänen der Preisträger eines europaweit ausgeschriebenen Wettbewerbs. \nDurch die Auflösung des Baukörpers mithilfe einer großflächigen Glasfassade als Basis sowie durch einen Rücksprung, schwebt das Gebäude scheinbar über dem Platz und belebt diesen durch die hier vorgesehene Nutzung als Bücherei. Eine weiße Haut aus horizontalen, ungleichmäßig gegliederten Fassadenprofilen zitiert das früher vorhandene Sichtmauerwerk des Ursprungbaus.\n ",
    district: "Eidelstedt",
    address: "Alte Elbgaustraße 12, 22523 Hamburg",
    architect: "acollage. architektur urbanistik",
    id: 268,
    lat: 53.60740999999999,
    lng: 9.9031579,
  },
  {
    title: "Neubau Wohnheim Wasserschutzpolizei-Schule",
    description:
      "Der trapezförmige Grundriss des viergeschossigen Gebäudes mit 18 Zimmern und Lehrräumen resultiert aus dem Grundstückszuschnitt. Firstlinie und Traufkante verlaufen straßenseitig parallel zum Worthdamm, sodass eine ruhige Westansicht entsteht. Mit bodentiefen, schlanken Fensteröffnungen und einer schnörkellosen Backsteinästhetik nimmt der Bau die Materialität des unter Denkmalschutz stehenden Hauptgebäudes auf und ist zugleich modernes hanseatisches Understatement.",
    district: "Veddel",
    address: "Veddeler Damm 48, 20457 Hamburg",
    architect: "prasch buken partner architekten bda (LP 1-3, Freiraumplanung)",
    id: 269,
    lat: 53.5282515,
    lng: 9.9820045,
  },
  {
    title:
      "Der Allende-Platz - Neugestaltung des öffentlichen Raumes im Grindelviertel  ",
    description:
      "Der Allende-Platz war ein von Gehwegen umgebener Parkplatz in Uninähe. Im Rahmen eines städtischen Sanierungsprogramms fand seine landschaftsarchitektonische Neugestaltung statt. Entstanden ist eine großzügige Aufenthaltsfläche ohne Verzehrzwang, mit ruhigeren Abschnitten und solchen, die dem prallen Leben direkt neben der Gastronomie zugeordnet sind. Mit Blick auf das Thema Nachhaltigkeit wurden in großem Stil örtlich vorhandene, historische Naturstein-Stufen und gebrauchtes Hamburger Pflaster wiederverwendet.",
    district: "Rotherbaum",
    address: "Allende-Platz, 20146 Hamburg",
    architect: "",
    id: 270,
    lat: 53.567312,
    lng: 9.9830032,
  },
  {
    title: "Ehemaliger Getreidespeicher mit Verladebrücke Große Elbstraße 281",
    description:
      "Umbau, Sanierung und Instandsetzung  des ehemaligen unter Denkmalschutz stehenden Getreidespeichers einschließlich Innenausbau und Hochwasserschutzanlage. ",
    district: "Altona",
    address: "Große Elbstraße 281",
    architect: "SEHW Architekten PartG mbB",
    id: 271,
    lat: 53.54409510000001,
    lng: 9.9251645,
  },
  {
    title: "Revitalisierung Congress Center Hamburg ",
    description:
      "In den 1970er Jahren wurde das CCH als visionäres und gewagtes Bauvorhaben für die Stadt Hamburg errichtet. Nach über 40 Jahren bedurfte es einer Revitalisierung und Erweiterung. Dazu wurde 2014 ein Wettbewerb ausgelobt, den die Arbeitsgemeinschaft agnLeusmann/TIM HUPE Architekten für sich entscheiden konnte. Nach Abschluss der Baumaßnahmen verbindet nun ein neuer Mantelbau drei räumliche Situationen zu einer Sequenz: die Ankunft von Osten, die neue Eingangshalle und das zwei Ebenen höher gelegene Belvedere.",
    district: "St. Pauli",
    address: "Congressplatz 1, 20355 Hamburg",
    architect:
      "Arbeitsgemeinschaft agnLeusmann / TIM HUPE Architekten, TIM HUPE Architekten (seit Januar 2022 HUPE FLATAU Partner) (Entwurf),  agn Leusmann GmbH (Ausführung), www.agnleusmann.de",
    id: 272,
    lat: 53.5616735,
    lng: 9.9860331,
  },
  {
    title:
      "Drei Schwestern - Genossenschaftlicher Wohnungsbau in heterogenem Quartier",
    description:
      "Auf dem ursprünglich mit einem eingeschossigen Supermarkt bebauten Grundstück wurden drei rautenförmige Gebäude mit 37 Wohnungen und eine Kita für 34 Kinder realisiert. Die Gebäude sollten möglichst baugleich sein. Das Ensemble entwickelt sich mit einem fünfgeschossigen Baukörper zur Kreuzung und zwei viergeschossigen Häusern um die bestehenden Bäume herum. Es gibt einen großen Fahrradraum, keine Tiefgarage und nur ein Haus verfügt über einen Aufzug. In den Untergeschossen sind drei Wärmepumpen aktiv.",
    district: "Wilsdorf",
    address: "Reeseberg 115, 21079 Hamburg",
    architect: "Renner Hainke Wirth Zirn Architekten",
    id: 273,
    lat: 53.4442362,
    lng: 9.999636599999999,
  },
  {
    title: "LEO - Leo-Leistikow-Allee",
    description:
      "Das Projekt LEO an der Leo-Leistikow-Allee / Ecke Oberaltenallee bildet als kräftige Eckbebauung den Auftakt in das neue Wohnquartier Finkenau. Trotz seiner Lage an der achtspurigen Magistrale und den damit verbundenen Herausforderungen wurden hier 184 hochwertige Wohnungen - davon 55 öffentlich gefördert - und Gewerbeeinheiten geschaffen. Die Fassade mit den ausdrucksstarken, variierenden Ziegelstrukturen erinnert an loftartige Gebäude zu Beginn des vergangenen Jahrhunderts.",
    district: "Uhlenhorst",
    address:
      "Leo-Leistikow-Allee 2-8 / Oberaltenallee 46-52 / Martha-Muchow-Weg 15, 22081 Hamburg",
    architect: "kbnk ARCHITEKTEN GMBH",
    id: 274,
    lat: 53.5717808,
    lng: 10.0327032,
  },
  {
    title: "Neugestaltung der Fußgängerpromenade am Serrahn",
    description:
      "Die alte ca.13 Meter breite Hafenkante Bergedorfs wird durch ihre zonierte Neugestaltung großzügiger und mit einem Gewinn an Aufenthaltsqualität gestaltet.  Entlang der Bebauung ist die Sondernutzung für Außengastronomie zugelassen, die mittlere Zone wird Fußgänger*innen als Flaniermeile vorbehalten, während die Wasserkante weitgehend offen gestaltet und von privaten Nutzungen freigehalten wird. Historische Bezüge werden durch den Hafenkran und Schutenbänke erlebbar gemacht. ",
    district: "Bergedorf",
    address: "Serrahnstraße 1 bis 9, 21029, Bergedorf",
    architect: "",
    id: 275,
    lat: 53.489508,
    lng: 10.2087739,
  },
  {
    title: "Roots - ein Holzhochhaus in der HafenCity",
    description:
      "Der Trend zur ökologischen und nachhaltigen Architektur manifestiert sich auch im Baumaterial Holz. Am Beispiel von Roots - dem ersten und derzeit höchsten Holzhochhaus Deutschlands, welches aktuell in der Hamburger HafenCity entsteht - wird auf den Prozess einer nachhaltigen Hochhauskonzeption eingegangen und über Herausforderungen, Erfahrungen und Lehren aus der Perspektive des Planers und des Holzbauunternehmers reflektiert.",
    district: "HafenCity",
    address:
      "Liselotte-von-Rantzau-Platz/ Lucy-Borchardt-Straße 2 - 8,  20457 Hamburg",
    architect: "Störmer Murphy and Partners (LP 1-5)",
    id: 276,
    lat: 53.53832449999999,
    lng: 10.0186837,
  },
  {
    title: "Sanierung und Erweiterung der Schule an der Isebek",
    description:
      "Für die Erweiterung der Grundschule wurde das denkmalgeschützte Gebäude von Fritz Schumacher von Zubauten aus den 1970er-Jahren befreit und behutsam saniert. Ein neuer kompakter Baukörper ergänzt das ursprünglich als Hilfsschule geplante Gebäude von 1927 entlang der Bundesstraße. Während im Bestandsbau originale Bauteile und Farben unter den alten Schichten wieder hervorgeholt wurden, überrascht der ansonsten ruhig anmutende Neubau seinerseits mit einem innenliegenden zweigeschossigen polygonalen Pausenraum.",
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