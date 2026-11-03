[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)


# DIN 743-asberekeningstool: gratis online calculator voor asdimensionering en geautomatiseerd Excel-sjabloon voor vermoeiingssterkteanalyse
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/7488196d-f46b-404a-9ee5-adf83da8c83d" />
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/9ffa110b-aa4a-4650-bfe3-ddd5105abfec" />

 

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20Calculator%20%2B%20Excel%20Template-green.svg)
![Engineering Standard](https://img.shields.io/badge/Standard-DIN%20743%20Shaft%20Fatigue%20Verification-orange.svg)
![Automation](https://img.shields.io/badge/Automation-22%20Built--In%20Material%20%26%20Valve%20Rules-brightgreen.svg)

<p><strong>DIN 743-sjabloon voor asberekening & online calculator</strong>: een kant-en-klare <strong>tool voor vermoeiingssterkteanalyse van mechanische assen</strong> en een <strong>spreadsheet voor het dimensioneren van roterende assen en ventielspindels</strong>, zonder enige installatie, voor ingenieurs, CAD-ontwerpers en technisch inkopers die direct auditeerbare resultaten nodig hebben zonder complexe Duitse engineeringtabellen uit het hoofd te leren. Beschikbaar als <strong>gratis ascalculator in de browser</strong> en als <strong>geautomatiseerd Microsoft Excel-sjabloon (.xlsx)</strong>: deze toolkit berekent <strong>veiligheidsfactoren voor gecombineerde buiging, torsie en axiale belasting</strong>, automatiseert correcties voor de <strong>spanningsconcentratiefactor (<em>K<sub>t</sub></em>)</strong> en de <strong>kerfgevoeligheid</strong>, en kalibreert de vermoeiingsgrenzen van materialen over <strong>6 classificaties van bedrijfscondities van kleppen</strong>.</p>

**Geen aanmelding. Geen software-installatie. Direct technisch oordeel: Geslaagd of Gefaald.**

Gebruik de gratis webcalculator voor een snelle controle van één as, of download de volledig ontgrendelde **Pro Excel-werkmap** met **22 voorgeprogrammeerde regels voor materiaal- en oppervlakteafstemming**: plak je ruwe gegevens en krijg direct batchresultaten, zonder één formule te schrijven of te slepen.

> 🌐 **Gratis interactieve webapp:** [**Start de gratis online DIN 743-calculator voor asdimensionering en vermoeiingsanalyse (geen installatie nodig)**](https://hyvoid.github.io/DIN-743-Shaft-Calculations/)
> 
> 📥 **Geautomatiseerde Excel-spreadsheet (.xlsx):** [**Download het geautomatiseerde DIN 743 Excel-sjabloon voor vermoeiings- en ventielspindelverificatie (30 dagen niet-goed-geld-terug)**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)

---

## Voor wie deze DIN 743-software voor asontwerp en dit Excel-sjabloon bedoeld is (rollen en scenario's)

Of je nu een aandrijfas vanaf nul dimensionert, een ventielspindel valideert onder cyclische hoogdrukbelasting, of het mechanische berekeningsrapport van een leverancier auditeert: dit **sjabloon voor assterkteverificatie** elimineert handmatige opzoekfouten:

* **Junior werktuigbouwkundigen & beginnende CAD-ontwerpers:** hebben een plug-and-play **calculator voor asdiameters** nodig om getrapte assen, afrondingsradii en spiebanen in SolidWorks, Inventor of AutoCAD te verifiëren, zonder dagenlang grafieken uit DIN 743 deel 1–3 te ontcijferen of een kostbare Finite Element Analysis (FEA) uit te voeren.
* **Ontwerpingenieurs voor kleppen & specialisten in het dimensioneren van actuatoren:** hebben een speciaal **spreadsheet voor torsie en vermoeiing van ventielspindels** nodig, vooraf gekalibreerd voor **6 classificaties van bedrijfscondities van kleppen** en corrosiebestendige legeringen (**martensitisch roestvast staal, Super Duplex, nikkellegeringen, titaniumlegeringen en AISI 4340**).
* **Ingenieurs voor pompen, tandwielkasten & roterende apparatuur:** hebben een herhaalbaar **werkblad voor gecombineerde buigings- en torsieberekening** nodig om cyclische vermoeiingsgrenzen, statische piekoverbelastingen en veiligheidsmarges voor asdoorbuiging te beoordelen.
* **Technisch inkopers, cost engineers & QA-auditors:** hebben een **spreadsheet voor technische besluitvorming** zonder drempel nodig om te verifiëren of een asontwerp gevaarlijk ondermaats is (risico op falen in het veld) of juist overdreven conservatief (verspilling van het budget voor staafmateriaal van legeringen door te ruime diameters).

---

## Vermoeiingsverificatie en dimensionering van assen: veelvoorkomende knelpunten versus geautomatiseerde sjabloonoplossingen

| Knelpunt bij mechanisch ontwerp en dimensionering | Frequent engineeringrisico | Hoe deze DIN 743-calculator en dit Excel-sjabloon het oplossen |
| :--- | :--- | :--- |
| **Onzekere veiligheidsfactoren voor vermoeiing van assen ($S_f$)** | Gokken met veiligheidsmarges leidt tot onverwachte vermoeiingsscheuren of mislukte ontwerpaudits bij de klant. | Berekent automatisch **dynamische vermoeiingsveiligheidsfactoren** en **statische vloeiveiligheidsfactoren** ten opzichte van de drempelwaarden van DIN 743, met directe **Geslaagd/Gefaald**-markeringen. |
| **Verwarrende opzoektabellen voor vermoeiingsgrenzen** | Standaardtabellen voor koolstofstaal schieten tekort bij het dimensioneren van exotische legeringen voor corrosieve of zwaarbelaste omgevingen. | Ingebouwde database met **martensitisch RVS, Super Duplex, nikkellegeringen, titaniumlegeringen en 4340-staal** over **4 treksterkteklassen ($R_m$)**. |
| **Complexe combinaties van meervoudige belastingen** | Gelijktijdige buigmomenten, torsieschuifspanning en axiale trek met de hand beoordelen is foutgevoelig. | Geïntegreerde **von Mises-calculator voor equivalente spanning** die wisselende en gemiddelde belastingen combineert voor **buiging, torsie en axiale krachten**. |
| **Niet gekwantificeerde kerfgevoeligheid en spanningsconcentraties** | Het negeren van asopsluivingen, groeven en spiebanen veroorzaakt catastrofale breuk bij geometrieovergangen. | Real-time tracking van **geometrische spanningsconcentratiefactoren ($K_t$)**, **vermoeiingskerffactoren ($K_f$)** en **groottefactoren ($K_d$)**. |
| **Verkeerd gebruik van ruwe nominale spanningen** | Een nominale CAD-spanning direct vergelijken met de vloeigrens uit een catalogus negeert de oppervlakteafwerking en de ernst van de bedrijfsomstandigheden. | Geautomatiseerde derating over **5 oppervlakteruwheidstoestanden × 4 $R_m$-intervallen**, specifiek gekalibreerd voor **6 classificaties van bedrijfscondities van kleppen**. |
| **Kapotte formules in verouderde spreadsheets** | Kopiëren en slepen van cellen in oude Excel-bestanden beschadigt verwijzingen tijdens batchberekeningen van assen. | **Geautomatiseerde Excel-architectuur zonder slepen**: plak je rijen met ruwe parameters en de 22 ingebouwde rekenregels vullen de resultaten meteen automatisch in. |

---

## Functievergelijking: handmatige DIN 743-berekening versus gratis webcalculator versus Pro Excel-sjabloon

| Operationele en technische dimensie | Handmatige berekening / kladblad | Gratis online DIN 743-browsercalculator | Geautomatiseerd DIN 743 Pro Excel-sjabloon (.xlsx) |
| :--- | :--- | :--- | :--- |
| **Beoogd gebruik** | Academische studie of eenmalige ruwe schatting | Snelle validatie van één punt in de browser | **Productieontwerp, batchdimensionering van assen en ventielen & QA-documentatie** |
| **Materialenbibliotheek en legeringsdekking** | Handmatig opzoeken in leerboektabellen vereist | Standaard basale constructiestalen | **22 vooraf ingebouwde rekenregels (martensitisch RVS, Super Duplex, nikkellegeringen, titanium, 4340)** |
| **Matrix oppervlakteafwerking × treksterkte ($R_m$)** | Handmatige interpolatie uit DIN-grafieken | Eenvoudige invoer van één oppervlaktetoestand | **Geautomatiseerde koppelingsmatrix: 5 oppervlaktetoestanden × 4 $R_m$-bereiken** |
| **Kalibratie op bedrijfscondities van kleppen** | Niet inbegrepen (vraagt om aangepaste derating) | Alleen algemene mechanische belasting | **Vooraf gekalibreerd voor 6 classificaties van bedrijfscondities van kleppen** |
| **Formuleonderhoud en gegevensinvoer** | Groot risico op fouten in celverwijzingen en bij kopiëren-plakken | Handmatige invoer per item via een webformulier | **100% automatisch actualiserende formules (dubbelklikken of formules slepen niet nodig)** |
| **Batchverwerking en offline audittrail** | Traag, niet gestandaardiseerd, moeilijk te auditen | Alleen binnen één sessie (reset bij verversen) | **Onbeperkt aantal offline batchrijen, aanpasbare ontgrendelde bladen, PDF-export klaar voor de klant** |

---

## Snelstartgids: vermoeiingssterkte van een as berekenen in 4 stappen (workflow zonder formules)

Je hebt geen achtergrond in geavanceerde metallurgie of constructiemechanica nodig om nauwkeurige resultaten voor asdimensionering te krijgen. Volg deze workflow om binnen enkele minuten van ruwe afmetingen naar een technische beslissing te gaan:

### Stap 1: valideer de geometrie van één as in de gratis browsercalculator
Open de [**gratis online DIN 743-webcalculator voor assterkte**](https://hyvoid.github.io/DIN-743-Shaft-Calculations/) en voer de uitgangsdiameter van je as ($d$), het kritieke kenmerk van de dwarsdoorsnede (afrondingsradius van de getrapte as, spiebaan of groef) en de nominale belastingen in om te zien hoe de geometrie de spanningsconcentratie beïnvloedt.

### Stap 2: kies je materiaalkwaliteit en de toestand van de oppervlakteruwheid
Kies het materiaal van je as of ventielspindel en de bewerkingsafwerking. De rekenkern beoordeelt hoe je **treksterkte ($R_m$)** en **vloeigrens ($R_{p0.2}$)** samenhangen met de oppervlakteruwheid ($R_z$) om de werkelijk gecorrigeerde vermoeiingsgrens vast te stellen.

### Stap 3: pas gecombineerde belastingen en de ernst van de bedrijfsomstandigheden toe
Voer je **buigmoment**, **torsiemoment** en **axiale kracht** in en selecteer de bijbehorende ernst van de bedrijfsomstandigheden. Controleer direct of de dwarsdoorsnede voldoet aan de veiligheidsfactorcriteria van DIN 743.

### Stap 4: schaal op naar batchautomatisering met één klik via het Pro Excel-sjabloon
Zodra je je proef met één punt in de browser hebt afgerond, kun je je workflow opschalen naar de dagelijkse engineeringpraktijk met het [**geautomatiseerde DIN 743 Excel-sjabloon voor as- en ventielberekeningen**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength).

* **Waarom overstappen naar de Excel-werkmap?** De onderliggende mechanische theorie van DIN 743 en de commerciële risicologic zijn zeer complex, maar het Excel-product heeft al het zware werk vooraf verpakt in **22 geautomatiseerde matching-rekenregels**.
  <img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/b30e51ae-fade-4f83-8869-7de538238ee4" />

* **Volledige dekking van gangbare en zware bedrijfsomstandigheden:** Nieuw uitgebreid met veelgevraagde industriële materialen, waaronder **martensitisch roestvast staal, Super Duplex roestvast staal, nikkellegeringen, titaniumlegeringen en AISI 4340-legeringsstaal**, automatisch gekruist over **5 oppervlakteafwerkingstoestanden × 4 treksterkte-intervallen ($R_m$)** om **6 afzonderlijke classificaties van bedrijfscondities van kleppen** te kalibreren.
* **Echt werken zonder drempel (geen formules slepen):** Elke opzoek- en spanningscorrectieformule actualiseert dynamisch. **Je hoeft niet eens op de celhoek te dubbelklikken of met de muis te slepen om formules te kopiëren.** Download het `.xlsx`-bestand naar je computer, plak je eigen afmetings- en belastinggegevens in de invoerkolommen en krijg direct met één klik een technisch en commercieel oordeel Geslaagd/Gefaald, zodat complete beginners meteen op seniorniveau kunnen analyseren.

👉 [**Download het kant-en-klare geautomatiseerde DIN 743 Excel-sjabloon op Theseus Workshop**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)

---

## De bedrijfslogica en methodologie: verborgen commerciële blinde vlekken bij asdimensionering

Voor niet-specialisten, junior ingenieurs en projectmanagers lijkt asberekening vaak een pure wiskundeoefening. In werkelijkheid is **DIN 743-asverificatie een instrument voor commercieel risicobeheer**.

DIN 743-berekeningen mislukken zelden door basale rekenfouten; ze mislukken omdat engineeringaannames versnipperd raken over handgeschreven notities, niet-gekalibreerde spreadsheets en losstaande leveranciersoffertes. Wanneer een team geen gestandaardiseerd berekeningssysteem heeft, loopt het tegen twee dure commerciële blinde vlekken aan:

### Blinde vlek 1: de valkuil van de "nominale spanning" (garantieclaims, breuk in het veld en aansprakelijkheid bij productterugroeping)
Beginners berekenen vaak de ruwe **nominale spanning** (belasting gedeeld door het dwarsdoorsnedeoppervlak) en vergelijken die direct met de vermoeiings- of vloeigrens uit een materialencatalogus.
* **Het objectieve feit:** Assen in de praktijk bevatten spanningsverhogende elementen (spiebanen, opsluivingen), grootte-effecten (grotere diameters hebben een lagere specifieke vermoeiingssterkte) en microkerfjes door oppervlakteruwheid. Samen met zware bedrijfscondities van kleppen verlagen deze factoren het werkelijke draagvermogen van een as doorgaans met **30% tot 60%**.
* **Het commerciële gevolg:** Een as of ventielspindel die op een eenvoudige calculator "100% veilig" lijkt, kan in het veld na enkele duizenden cycli breken, met ongeplande stilstand van de installatie, boetes voor noodvervanging en garantieclaims tot gevolg die de winst van een hele productlijn wegvagen.

#### Praktijkimpact: ruwe nominale spanning versus gecorrigeerde spanning volgens DIN 743
* **Vooraf (ongeïnformeerde nominale controle):** Een ontwerper vergelijkt een nominale buigspanning van `185 MPa` direct met een vermoeiingsgrens van `210 MPa` uit de materialencatalogus en keurt de tekening goed voor productie.
* **Achteraf (geautomatiseerde controle met het DIN 743-sjabloon):** Het sjabloon past automatisch kerfgevoeligheid, grootte-derating van de as, **oppervlakteruwheidsfactoren voor 5 toestanden** en **klepkalibratie voor 6 klassen** toe. De werkelijk toelaatbare vermoeiingsgrens daalt naar `168 MPa`.

```text
Original Naive Decision:
185 MPa < 210 MPa  →  PASS (Hidden Field Failure Risk)

Corrected DIN 743 Decision:
185 MPa > 168 MPa  →  FAIL (Redesign or Material Upgrade Required Before Production)

```

### Blinde vlek 2: blinde overdimensionering en te veel uitgeven aan legeringen (verloren aanbestedingen en uitgeholde marges)

Wanneer ingenieurs of inkopers niet precies weten hoe een materiaal zich gedraagt binnen specifieke treksterkte-intervallen ($R_m$) of classificaties van bedrijfscondities van kleppen, compenseren ze die onzekerheid met willekeurige "angstfactoren": ze maken de as onnodig dik of stappen blind over van **martensitisch roestvast staal of 4340** naar peperdure **nikkellegeringen of titaniumlegeringen**.

* **Het objectieve feit:** Als je een ventielspindel of aandrijfas slechts 20% overdimensionert, neemt het gewicht van het staafmateriaal met meer dan 40% toe, word je gedwongen een grotere en duurdere actuator of lagerbehuizing te kiezen en stijgt de bewerkingstijd.
* **Het commerciële gevolg:** Opgeblazen kosten voor de stuklijst (BOM) maken je offertes niet concurrerend in prijsgevoelige aanbestedingen, of hollen stilletjes 15%–35% van je brutoproductiemarge uit.

### Hoe onze geautomatiseerde Excel-engine met 22 regels beide problemen oplost

In plaats van te eisen dat je Duitse mechanische normen beheerst, verpakt deze werkmap de beslissingslogica in een foolproof workflow:

1. **Voorkomt aansprakelijkheid door onderdimensionering:** Handhaaft automatisch DIN 743-derating over **5 oppervlaktetoestanden × 4 $R_m$-klassen** en **6 bedrijfscondities van kleppen**, zodat marginale ontwerpen nooit door de QA-beoordeling glippen.
2. **Voorkomt overbesteding aan materiaal:** Laat je **martensitisch RVS, Super Duplex, nikkellegeringen, titanium en 4340** binnen enkele seconden naast elkaar testen, zodat je precies de kostenoptimale legering en de minimaal veilige diameter kiest die aan de norm voldoet en zowel je technische reputatie als je winstmarge beschermt.

---

## Over Theseus Workshop

Ik bouw lichtgewicht trackers, engineeringcalculators en sjablonen voor commerciële besluitvorming, bedoeld voor complexe technische workflows met te veel bewegende delen om ze betrouwbaar in één hoofd te houden.

Het leidende principe achter elke tool is eenvoudig:

> **Welke kritieke gegevens en regels moeten op één plek staan, zodat je volgende technische of zakelijke beslissing binnen enkele seconden met vertrouwen kan worden genomen?**

Deze **DIN 743-tool voor vermoeiingsberekening van assen** maakt bewezen werktuigbouwkundige normen tot een herbruikbaar operationeel bezit zonder drempel, in plaats van de zoveelste fragiele, geïsoleerde spreadsheet.

* 🛒 **Dit sjabloon aanschaffen:** **[Download de geautomatiseerde DIN 743 Excel-werkmap voor as- en ventielberekeningen](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)**
* 🧰 **Alle engineering- en beslissjablonen bekijken:** Bezoek onze officiële winkel op **[TheseusWorkshop.com](https://www.google.com/search?q=https://www.theseusworkshop.com%3Futm_source%3Dgithub%26utm_medium%3DGitHub%2520README%26utm_campaign%3Dreadme%2520about%2520section%26utm_content%3Ddin-743-shaft-strength)** voor meer plug-and-play spreadsheets, workflows voor engineeringverificatie en tools voor zakelijke besluitvorming.

---

## Technische details

<details>
<summary>Voor technische beoordelaars, Excel-gebruikers en samenwerkingspartners</summary>

---

### Werkmaparchitectuur

| Werkblad    | Doel                                                    |
| ----------- | ------------------------------------------------------ |
| GUIDE       | Gebruiksinstructies, scope, versiebeheer, disclaimer    |
| INPUT       | Eén bewerkbaar invoerpunt                               |
| REFERENCE   | Materialendatabase en DIN-parameters                    |
| CALCULATION | Beveiligde rekenkern                                    |
| RESULTS     | Veiligheidsdashboard en Geslaagd/Gefaald-beoordeling    |
| REPORT      | Gestandaardiseerde rapportage-uitvoer                   |

#### Gegevensstroom

```text
GUIDE
   ↓
INPUT
   ↓
REFERENCE
   ↓
CALCULATION
   ↓
RESULTS
   ↓
REPORT
```

Validatie vindt plaats bij INPUT.

Uitvoer is uitsluitend afhankelijk van de resultaten van CALCULATION.

Kringverwijzingen zijn niet toegestaan.

---

### Drie valkuilen die zelfs ervaren werktuigbouwkundigen treffen

---

#### Valkuil 1: nominale spanning direct vergelijken met de vermoeiingsgrens van het materiaal

Er werd een beslissing genomen:

```
185 MPa < 210 MPa
PASS
```

Onjuiste aanname:

Nominale spanningen vertegenwoordigen de werkelijke vermoeiingscapaciteit.

Waarom onjuist:

Vermoeiingsgrenzen van materialen moeten worden gecorrigeerd voor componenteffecten.

Gecorrigeerde aanpak:

```
σWK = (σW × Kd × KF) / β
```

Gecorrigeerd resultaat:

```
Corrected endurance limit:
168 MPa

185 MPa > 168 MPa

FAIL
```

<details>
<summary>Formulareferentie</summary>

```excel
=(Sigma_W * Kd * KF) / Beta
```

</details>

---

#### Valkuil 2: geometrie-effecten negeren

Beslissing:

De asdiameter enigszins vergroten.

Onjuiste aanname:

Kleine geometriewijzigingen hebben verwaarloosbare invloed.

Waarom onjuist:

Afrondingen en groeven veranderen de spanningsconcentratie aanzienlijk.

Gecorrigeerde aanpak:

Evalueer de factoren α en β.

Resultaat:

Een grotere afrondingsradius verbeterde de vermoeiingsveiligheid door de kerfscherpte te verlagen.

<details>
<summary>Formulareferentie</summary>

```excel
Beta = 1 + q*(Alpha-1)
```

</details>

---

#### Valkuil 3: buiging en torsie afzonderlijk behandelen

Beslissing:

Beide veiligheidsfactoren overschrijden afzonderlijk de grenzen.

Onjuiste aanname:

Afzonderlijke goedkeuring garandeert goedkeuring van het geheel.

Waarom onjuist:

De gecombineerde belasting bepaalt de vermoeiingsprestatie.

Gecorrigeerde aanpak:

Gebruik een gecombineerde veiligheidsbeoordeling.

Resultaat:

Wat individueel als Geslaagd werd beoordeeld, faalde in de gecombineerde beoordeling.

<details>
<summary>Formulareferentie</summary>

```excel
S=(Sb*St)/SQRT(Sb^2+St^2)
```

</details>

---

### Voorbeeldscenario

Een doorsnede van een ventielspindel wordt geëvalueerd met:

| Parameter              |        Waarde |
| ---------------------- | -----------: |
| Materiaal              |        17-4PH |
| Diameter               |        40 mm |
| Afrondingsradius       |         2 mm |
| Buigmoment             | 450,000 N·mm |
| Torsie                 | 180,000 N·mm |
| Bedrijfsfactor         |         1.25 |
| Vereiste veiligheidsfactor |     1.50 |

Tussenberekeningen:

```text
Wb = πd³/32
Wp = πd³/16

σb = Mb×KA/Wb
τt = T×KA/Wp
```

Na toepassing van:

* kerfgevoeligheid,
* geometriecorrecties,
* grootte-effecten,
* invloedsfactoren voor het oppervlak,

wordt de gecombineerde vermoeiingsveiligheidsfactor:

```text
S = 1.38
```

Interpretatie:

```
Required:
S ≥ 1.50

Actual:
S = 1.38
```

Aanbeveling:

Vergroot de diameter, wijzig de geometrie, verlaag de belastingen of heroverweeg de materiaalkeuze vóór vrijgave.

Implicatie voor de beslissing:

De as mag onder de huidige ontwerpaannames niet naar productie gaan.

---

### Formulareferentie

<details>
<summary>Doorsnedegrootheden</summary>

```excel
Wp = PI()*(d^3)/16
Wb = PI()*(d^3)/32
```

Doel:

Bereken de torsie- en buigweerstandsmomenten.

</details>

<details>
<summary>Nominale spanning</summary>

```excel
σb=(Mb×KA)/Wb
τt=(T×KA)/Wp
```

Doel:

Bereken de nominale spanningen.

</details>

<details>
<summary>Kerfeffecten</summary>

```excel
β=1+q×(α−1)
```

Doel:

Zet geometrische concentratie om in vermoeiingsinvloed.

</details>

<details>
<summary>Gecorrigeerde vermoeiingsgrenzen</summary>

```excel
σWK=(σW×Kd×KF)/β
τWK=(τW×Kd×KF)/β
```

Doel:

Bepaal de vermoeiingscapaciteit van het component.

</details>

<details>
<summary>Gecombineerde veiligheid</summary>

```excel
S=(Sb×St)/SQRT(Sb^2+St^2)
```

Doel:

Beoordeel de uiteindelijke aanvaardbaarheid.

</details>

---

### Validatieregels

| Veld                 | Regel                            | Foutgedrag                   |
| --------------------- | ------------------------------- | --------------------------- |
| Projectnaam          | Verplicht                        | Voortgang blokkeren          |
| Materiaal-ID         | Moet bestaan in de bibliotheek   | Ongeldige invoer weigeren    |
| Diameter             | Groter dan nul                   | Validatiewaarschuwing        |
| Radius               | Positief en kleiner dan diameter | Validatiewaarschuwing        |
| Buigmoment           | ≥ 0                              | Negatieve invoer weigeren    |
| Torsie               | ≥ 0                              | Negatieve invoer weigeren    |
| Bedrijfsfactor       | 1.00–3.00                        | Ongeldige invoer blokkeren   |
| Minimale veiligheidsfactor | 1.20–5.00                  | Ongeldige invoer blokkeren   |
| Referentiegegevens   | Beheerd door beheerder           | Verborgen en beveiligd       |
| Rekenkern            | Alleen-lezen                     | Overschrijven van formules geblokkeerd |

</details>

---



## Andere tools in deze serie

* **[construction-estimating](https://github.com/HyVoid/construction-estimating)** — Wat kost deze bouwscope onder de huidige aannames? — Standaardiseer het opstellen van bouwaanbestedingen en zet afgeronde ramingen om in herbruikbare kostenbibliotheken.
* **[aia-construction-cost-tracker-excel](https://github.com/HyVoid/aia-construction-cost-tracker-excel)** — Hoe verhouden ramingen en getraceerde kosten zich tot de oplevering? — Vergelijk bouwramingen met werkelijke kosten gedurende het hele project, in AIA-standaardformaten.
* **[construction-project-management-excel](https://github.com/HyVoid/construction-project-management-excel)** — Is de financiële positie van het project accuraat na verwerking van goedgekeurde wijzigingen, werkelijke kosten en factureringsvoortgang? — Integreer budgetten, wijzigingsopdrachten, voortgangsfacturering en cashflow in één kader voor bouwprojectbeheersing.
* **[industrial-energy-tco-calculator](https://github.com/HyVoid/industrial-energy-tco-calculator)** — Welke energieoptie levert de laagste total cost of ownership voor dit specifieke project onder de werkelijke bedrijfsomstandigheden? — Vergelijk industriële energiebronnen op basis van werkelijk nuttige energie door brandstofkosten, apparatuurefficiëntie, infrastructuurinvesteringen en levenscycluskosten te normaliseren.
* **[residential-boq-template](https://github.com/HyVoid/residential-boq-template)** — Wat kost dit residentiële project en welke onderdelen zijn al over budget? — Raam de kosten van woningbouw op basis van BOQ-hoeveelheden en tarieven en volg goedgekeurde budgetten tegen werkelijke uitgaven.
* **[tunnel-cost-estimator-boq-excel](https://github.com/HyVoid/tunnel-cost-estimator-boq-excel)** — Wat kost dit drill-and-blast-tunnelproject onder de veronderstelde bouwcyclus? — Raam ontgraving, boren, explosieven, ondersteuning, materieel en arbeid voor een drill-and-blast-tunnel tot een volledige projectkostenraming en BOQ.
* **[Foundation-Quantity-Takeoff-BBS-BOQ-Cost-Estimation-Excel-Toolkit](https://github.com/HyVoid/Foundation-Quantity-Takeoff-BBS-BOQ-Cost-Estimation-Excel-Toolkit)** — Wat zijn de totale materiaal- en wapeningskosten voor de funderingsconstructie, en kan ik elke commerciële biedwaarde herleiden tot de gemeten afmetingen? — Bereken betonvolumes, bekistingsvlakken, grondwerkhoeveelheden, wapeningstonnage via geautomatiseerde buigstaten en commerciële BOQ-waarden op basis van gemeten constructieve afmetingen.

Meer tools: [Bezoek onze website](https://www.theseusworkshop.com/)

---

## Licentie

Dit project is gelicentieerd onder de **Apache License 2.0**.

Je mag dit werk gebruiken, wijzigen en distribueren in overeenstemming met de voorwaarden van de Apache License 2.0.
