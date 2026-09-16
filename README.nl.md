[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# DIN 743 Shaft Calculation Tool: Fatigue Strength Analysis Template

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-DIN%20743%20Decision%20Support-orange.svg)

<p><strong>DIN 743 Shaft Calculation Template</strong>: Een gratis analysehulpmiddel voor <strong>vermoeiingssterkte van assen</strong> dat u zonder installatie kunt gebruiken, beschikbaar als <strong>browsercalculator</strong> en als herbruikbare <strong>Excel-spreadsheet</strong>. Standaardiseer uw <strong>verificatieworkflow voor assen</strong>, bereken veiligheidsfactoren voor gecombineerd buigen en torsie, en zorg dat werktuigbouwkundige ontwerpen controleerbaar, herhaalbaar en snel zijn.</p>

**Geen aanmelding. Geen installatie. Gratis in uw browser.**

Probeer de webgebaseerde calculator voor snelle validaties. Voor formele documentatie, batchverwerking of offline gebruik kunt u de ontgrendelde Excel-werkmap kopen, ondersteund door een garantie van 30 dagen geld terug.

> 🌐 **Free Online Tool:** [**Launch Free DIN 743 Browser Calculator**](https://hyvoid.github.io/DIN-743-Shaft-Calculations/)
> 
> 📥 **Premium Asset:** [**Download DIN 743 Shaft Calculation Excel Template**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)

---

## Vermoeiingsverificatie van assen: pijnpunten & oplossingen

| Engineering Design Pain Point | DIN 743 Tool Solution (What It Tracks) |
| :--- | :--- |
| **Uncertain Fatigue Safety Factors** | Automated verification of **minimum fatigue safety requirements** (S_f) against baseline project standards. |
| **Guessing Material Endurance Limits** | Dynamic calculation of how **material selection (yield strength, tensile strength)** directly affects final safety margins. |
| **Complex Multi-Axial Loadings** | Integrated evaluation of combined **bending moments and torsional loads** to determine overall design acceptability. |
| **Unquantified Stress Concentrations** | Real-time tracking of geometry changes (e.g., **fillet radii, keyways**) and their effect on **notch sensitivity**. |
| **Improper Nominal Stress Usage** | Automated transition from raw **nominal stress** to corrected **component endurance limits** (incorporating size and surface roughness factors). |
| **Ambiguous Release Criteria** | Clear Pass/Fail identification denoting which **critical shaft cross-sections require redesign** before manufacturing release. |

---

## Waarom ik deze werktuigbouwkundige tool voor asontwerp heb gebouwd

DIN 743-berekeningen zijn zelden moeilijk vanwege de wiskunde. Ze worden moeilijk omdat het mechanisch ontwerpproces zich opsplitst over handgeschreven notities, geïsoleerde formules, technisch oordeel en niet-gedocumenteerde aannames over statische sterkte.

Ik zag herhaaldelijk ontwerpbesprekingen waarin ingenieurs met exact dezelfde cyclische belasting en dimensionale beperkingen tot verschillende conclusies kwamen. Het falen was meestal niet computationeel; het was analytisch.

Iemand vergat een spanningsconcentratiefactor (Kt). Iemand gebruikte nominale spanningen rechtstreeks tegen vermoeiingsgrenzen van het materiaal zonder de juiste correctie. Iemand kopieerde een formule uit een oude spreadsheet zonder te valideren of de onderliggende aannames over dynamische belasting nog steeds van toepassing waren.

Het gevolg was voorspelbaar:

* Conservatieve mechanische ontwerpen werden onnodig duur.
* Marginale asmodellen passeerden de QA-review ongemerkt.
* Structurele verificatie werd afhankelijk van individuele tacit knowledge in plaats van een controleerbaar organisatieproces.

Deze werkmap productiseert de redenering die in de DIN 743-norm is vervat. In plaats van vermoeiingsverificatie van assen te behandelen als een eenmalige rekenoefening, maakt het de norm tot een herbruikbaar beslissingskader.

### Een praktisch voorbeeld: nominale versus gecorrigeerde spanning

**Voorheen**
Een CAD-ontwerper vergelijkt een nominale buigspanning van 185 MPa rechtstreeks met een vermoeiingsgrens van het materiaal van 210 MPa en concludeert dat het ontwerp acceptabel is.

**Nu**
De berekeningstool past automatisch geometrie-effecten, kerfgevoeligheid, groottecorrecties en invloedsfactoren van het oppervlak toe. De gecorrigeerde vermoeiingsgrens daalt naar 168 MPa.

De conclusie verandert onmiddellijk:

```text
Original Decision:
PASS

Corrected Decision:
FAIL → Redesign Required
```

---

## Over

Ik bouw lichtgewicht trackers en beslissingsondersteunende tools voor situaties met te veel bewegende delen om ze betrouwbaar in één hoofd te houden.

De vraag die deze tools stuurt, is eenvoudig:

> **Welke informatie moet op één plek bestaan om de volgende beslissing met vertrouwen te kunnen nemen?**

Deze DIN 743-asberekening is één voorbeeld van die aanpak: het omzetten van bewezen technisch redeneren in een herbruikbaar operationeel asset in plaats van nog een geïsoleerde spreadsheet.

---

## Technische details

<details>
<summary>Voor technische reviewers, Excel-professionals en samenwerkingspartners</summary>

---

### Werkmaparchitectuur

| Sheet       | Purpose                                                |
| ----------- | ------------------------------------------------------ |
| GUIDE       | Usage instructions, scope, version control, disclaimer |
| INPUT       | Single editable entry point                            |
| REFERENCE   | Material database and DIN parameters                   |
| CALCULATION | Protected calculation engine                           |
| RESULTS     | Safety dashboard and PASS/FAIL evaluation              |
| REPORT      | Standardized reporting output                          |

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

Outputs zijn uitsluitend afhankelijk van CALCULATION-resultaten.

Er zijn geen circulaire verwijzingen toegestaan.

---

### Drie valkuilen die zelfs ervaren werktuigbouwkundigen treffen

---

#### Valkuil 1: nominale spanning rechtstreeks vergelijken met vermoeiingsgrenzen van het materiaal

Er werd een beslissing genomen:

```
185 MPa < 210 MPa
PASS
```

Foutieve aanname:

Nominale spanningen vertegenwoordigen de werkelijke vermoeiingscapaciteit.

Waarom onjuist:

De vermoeiingsgrenzen van het materiaal moeten worden aangepast voor componenteffecten.

Gecorrigeerde aanpak:

```
σWK = (σW × Kd × KF) / β
```

Gecorrigeerde uitkomst:

```
Corrected endurance limit:
168 MPa

185 MPa > 168 MPa

FAIL
```

<details>
<summary>Formulereferentie</summary>

```excel
=(Sigma_W * Kd * KF) / Beta
```

</details>

---

#### Valkuil 2: geometrie-effecten negeren

Beslissing:

De asdiameter licht vergroten.

Foutieve aanname:

Kleine geometriewijzigingen hebben een verwaarloosbare invloed.

Waarom onjuist:

Fillets en groeven veranderen de spanningsconcentratie aanzienlijk.

Gecorrigeerde aanpak:

Beoordeel α- en β-factoren.

Uitkomst:

Een grotere filletstraal verbeterde de vermoeiingsveiligheid door de kerfscherpte te verminderen.

<details>
<summary>Formulereferentie</summary>

```excel
Beta = 1 + q*(Alpha-1)
```

</details>

---

#### Valkuil 3: buigen en torsie onafhankelijk behandelen

Beslissing:

Beide veiligheidsfactoren overschrijden afzonderlijk de grenzen.

Foutieve aanname:

Onafhankelijke acceptatie garandeert acceptatie van het systeem.

Waarom onjuist:

Gecombineerde belasting bepaalt de vermoeiingsprestaties.

Gecorrigeerde aanpak:

Gebruik een gecombineerde veiligheidsbeoordeling.

Uitkomst:

Individuele PASS-condities werden een gecombineerde FAIL.

<details>
<summary>Formulereferentie</summary>

```excel
S=(Sb*St)/SQRT(Sb^2+St^2)
```

</details>

---

### Voorbeeldscenario

Een sectie van een klepsteel wordt beoordeeld met:

| Parameter              |        Value |
| ---------------------- | -----------: |
| Material               |       17-4PH |
| Diameter               |        40 mm |
| Fillet Radius          |         2 mm |
| Bending Moment         | 450,000 N·mm |
| Torque                 | 180,000 N·mm |
| Service Factor         |         1.25 |
| Required Safety Factor |         1.50 |

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
* invloedsfactoren van het oppervlak,

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

### Formulereferentie

<details>
<summary>Sectie-eigenschappen</summary>

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

Bereken nominale spanningen.

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

Bepaal de vermoeiingscapaciteit van de component.

</details>

<details>
<summary>Gecombineerde veiligheid</summary>

```excel
S=(Sb×St)/SQRT(Sb^2+St^2)
```

Doel:

Beoordeel de definitieve acceptatie.

</details>

---

### Validatieregels

| Field                 | Rule                            | Error Behavior              |
| --------------------- | ------------------------------- | --------------------------- |
| Project Name          | Required                        | Prevent completion          |
| Material ID           | Must exist in library           | Reject invalid entry        |
| Diameter              | Greater than zero               | Validation warning          |
| Radius                | Positive and less than diameter | Validation warning          |
| Bending Moment        | ≥ 0                             | Reject negative input       |
| Torque                | ≥ 0                             | Reject negative input       |
| Service Factor        | 1.00–3.00                       | Prevent invalid entry       |
| Minimum Safety Factor | 1.20–5.00                       | Prevent invalid entry       |
| Reference Data        | Administrator controlled        | Hidden and protected        |
| Calculation Engine    | Read-only                       | Formula overwrite prevented |

</details>

---

## Andere tools in deze serie

* **Budget Control Console** — vergelijk geplande budgetten, verplichtingen en resterende bestedingen.
* **Logistics Operations Dashboard** — volg de uitvoering van zendingen over entiteiten.
* **Service Operations Tracker** — standaardiseer de uitvoering en rapportage van veldteams.

Meer tools: [Visit Our Website](https://www.theseusworkshop.com/)

---

## Licentie

Dit project is gelicentieerd onder de **Apache License 2.0**.

U bent vrij om dit werk te gebruiken, te wijzigen en te distribueren in overeenstemming met de voorwaarden van de Apache License 2.0.
