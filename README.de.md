[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# DIN 743 Wellenberechnung: Vorlage zur Dauerfestigkeitsanalyse

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-DIN%20743%20Decision%20Support-orange.svg)

<p><strong>DIN 743 Wellenberechnungsvorlage</strong>: Ein kostenloses, installationsfreies <strong>Werkzeug zur Dauerfestigkeitsanalyse von Wellen</strong>, verfügbar als <strong>Browser-Rechner</strong> und als wiederverwendbare <strong>Excel-Arbeitsmappe</strong>. Standardisieren Sie Ihren <strong>Wellennachweis-Arbeitsablauf</strong>, berechnen Sie Sicherheitsfaktoren für kombinierte Biegung und Torsion und stellen Sie sicher, dass Konstruktionen im Maschinenbau prüfbar, wiederholbar und schnell sind.</p>

**Keine Registrierung. Keine Installation. Kostenlos im Browser.**

Nutzen Sie den Web-Rechner für schnelle Nachweise. Für formale Dokumentation, Stapelverarbeitung oder Offline-Nutzung können Sie die freigeschaltete Excel-Arbeitsmappe erwerben, abgesichert durch eine 30-tägige Geld-zurück-Garantie.

> 🌐 **Kostenloses Online-Werkzeug:** [**Kostenlosen DIN 743 Browser-Rechner starten**](https://hyvoid.github.io/DIN-743-Shaft-Calculations/)
> 
> 📥 **Premium-Asset:** [**DIN 743 Excel-Vorlage zur Wellenberechnung herunterladen**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)

---

## Dauerfestigkeitsnachweis von Wellen: Probleme und Lösungen

| Problem in der Konstruktion | Lösung des DIN 743 Werkzeugs (was es verfolgt) |
| :--- | :--- |
| **Unsichere Sicherheitsfaktoren gegen Dauerbruch** | Automatisierter Nachweis der **Mindestanforderungen an die Dauerfestigkeitssicherheit** (S_f) gegenüber den Projektgrundnormen. |
| **Raten der Werkstoffdauerfestigkeit** | Dynamische Berechnung, wie sich die **Werkstoffauswahl (Streckgrenze, Zugfestigkeit)** direkt auf die endgültigen Sicherheitsreserven auswirkt. |
| **Komplexe mehrachsige Belastungen** | Integrierte Bewertung kombinierter **Biegemomente und Torsionsbelastungen** zur Bestimmung der Gesamtakzeptanz der Konstruktion. |
| **Nicht quantifizierte Spannungskonzentrationen** | Echtzeit-Verfolgung von Geometrieänderungen (z. B. **Rundungsradien, Passfedernuten**) und deren Wirkung auf die **Kerbempfindlichkeit**. |
| **Unsachgemäße Verwendung der Nennspannung** | Automatisierter Übergang von der rohen **Nennspannung** zu korrigierten **Bauteildauerfestigkeitsgrenzen** (unter Einbeziehung von Größen- und Oberflächenfaktoren). |
| **Unklare Freigabekriterien** | Klare Bestanden/Nicht-bestanden-Kennzeichnung, die angibt, welche **kritischen Wellenquerschnitte vor der Fertigungsfreigabe neu ausgelegt werden müssen**. |

---

## Warum ich dieses Werkzeug zur Auslegung von Maschinenbauwellen entwickelt habe

DIN 743 Berechnungen sind selten wegen der Mathematik schwierig. Sie werden schwierig, weil der konstruktive Denkprozess über handschriftliche Notizen, isolierte Formeln, ingenieurmäßiges Ermessen und undokumentierte Annahmen zur statischen Festigkeit zerfasert.

Ich habe wiederholt Konstruktionsprüfungen erlebt, in denen Ingenieure bei exakt gleichen zyklischen Belastungen und Abmessungsrandbedingungen zu unterschiedlichen Ergebnissen kamen. Der Fehler war meist nicht rechnerisch, sondern analytisch.

Jemand vergaß einen Spannungskonzentrationsfaktor (Kt). Jemand verwendete Nennspannungen direkt gegen die Werkstoffdauerfestigkeit ohne ordnungsgemäße Korrektur. Jemand kopierte eine Formel aus einer alten Tabelle, ohne zu prüfen, ob die zugrunde liegenden dynamischen Belastungsannahmen noch galten.

Die Folge war vorhersehbar:

* Konservative Konstruktionen wurden unnötig teuer.
* Grenzwertige Wellenmodelle passierten die Qualitätsprüfung unbemerkt.
* Der Strukturnachweis hing vom individuellen Erfahrungswissen Einzelner ab statt von einem prüfbaren organisatorischen Prozess.

Diese Arbeitsmappe macht die in der DIN 743 enthaltene Denkweise zum Produkt. Statt den Wellendauerfestigkeitsnachweis als einmalige Rechenübung zu behandeln, verwandelt sie die Norm in einen wiederverwendbaren Entscheidungsrahmen.

### Ein praktisches Beispiel: Nennspannung vs. korrigierte Spannung

**Vorher**
Ein CAD-Konstrukteur vergleicht eine Nennbiegespannung von 185 MPa direkt mit einer Werkstoffdauerfestigkeit von 210 MPa und schließt, dass die Konstruktion akzeptabel ist.

**Nachher**
Das Berechnungswerkzeug wendet automatisch Geometrieeffekte, Kerbempfindlichkeit, Größenkorrekturen und Oberflächeneinflussfaktoren an. Die korrigierte Dauerfestigkeitsgrenze sinkt auf 168 MPa.

Das Ergebnis ändert sich sofort:

```text
Original Decision:
PASS

Corrected Decision:
FAIL → Redesign Required
```

---

## Über

Ich entwickle leichte Tracker und Entscheidungsunterstützungswerkzeuge für Situationen, in denen zu viele bewegliche Teile vorhanden sind, um sie zuverlässig im Kopf einer einzelnen Person zu behalten.

Die Leitfrage dieser Werkzeuge ist einfach:

> **Welche Information muss an einer Stelle vorhanden sein, damit die nächste Entscheidung sicher getroffen werden kann?**

Dieser DIN 743 Wellenrechner ist ein Beispiel für diesen Ansatz: bewährtes ingenieurmäßiges Denken in ein wiederverwendbares betriebliches Asset zu verwandeln statt in eine weitere isolierte Tabelle.

---

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Anwender und Mitwirkende</summary>

---

### Arbeitsmappen-Architektur

| Blatt       | Zweck                                                  |
| ----------- | ------------------------------------------------------ |
| GUIDE       | Nutzungshinweise, Geltungsbereich, Versionskontrolle, Haftungsausschluss |
| INPUT       | Einziger bearbeitbarer Einstiegspunkt                  |
| REFERENCE   | Werkstoffdatenbank und DIN-Parameter                    |
| CALCULATION | Geschützte Berechnungsengine                           |
| RESULTS     | Sicherheits-Dashboard und Bestanden/Nicht-bestanden-Bewertung |
| REPORT      | Standardisierte Berichtsausgabe                        |

#### Datenfluss

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

Die Validierung erfolgt bei INPUT.

Die Ausgaben hängen ausschließlich von den CALCULATION-Ergebnissen ab.

Zirkuläre Bezüge sind nicht zulässig.

---

### Drei Fallen, in die selbst erfahrene Maschinenbauingenieure tappen

---

#### Falle 1: Nennspannung direkt mit den Dauerfestigkeitsgrenzen des Werkstoffs vergleichen

Es wurde entschieden:

```
185 MPa < 210 MPa
PASS
```

Fehlerhafte Annahme:

Nennspannungen bilden die tatsächliche Dauerfestigkeitskapazität ab.

Warum falsch:

Die Dauerfestigkeitsgrenzen des Werkstoffs müssen um Bauteileffekte angepasst werden.

Korrigiertes Vorgehen:

```
σWK = (σW × Kd × KF) / β
```

Korrigiertes Ergebnis:

```
Corrected endurance limit:
168 MPa

185 MPa > 168 MPa

FAIL
```

<details>
<summary>Formelreferenz</summary>

```excel
=(Sigma_W * Kd * KF) / Beta
```

</details>

---

#### Falle 2: Geometrieeffekte ignorieren

Entscheidung:

Den Wellendurchmesser leicht vergrößern.

Fehlerhafte Annahme:

Kleine Geometrieänderungen haben vernachlässigbaren Einfluss.

Warum falsch:

Rundungen und Nuten verändern die Spannungskonzentration erheblich.

Korrigiertes Vorgehen:

Die Faktoren α und β bewerten.

Ergebnis:

Ein größerer Rundungsradius verbesserte die Dauerfestigkeitssicherheit durch Verringerung der Kerbschärfe.

<details>
<summary>Formelreferenz</summary>

```excel
Beta = 1 + q*(Alpha-1)
```

</details>

---

#### Falle 3: Biegung und Torsion getrennt behandeln

Entscheidung:

Beide Sicherheitsfaktoren überschreiten die Grenzen jeweils einzeln.

Fehlerhafte Annahme:

Einzelne Akzeptanz garantiert die Akzeptanz des Gesamtsystems.

Warum falsch:

Die kombinierte Belastung bestimmt das Dauerfestigkeitsverhalten.

Korrigiertes Vorgehen:

Kombinierte Sicherheitsbewertung verwenden.

Ergebnis:

Einzelne BESTANDEN-Bedingungen wurden zu einem kombinierten NICHT BESTANDEN.

<details>
<summary>Formelreferenz</summary>

```excel
S=(Sb*St)/SQRT(Sb^2+St^2)
```

</details>

---

### Beispielszenario

Ein Ventilschaftquerschnitt wird bewertet mit:

| Parameter                        |        Wert |
| ---------------------- | -----------: |
| Werkstoff               |       17-4PH |
| Durchmesser               |        40 mm |
| Rundungsradius          |         2 mm |
| Biegemoment         | 450,000 N·mm |
| Torsionsmoment                 | 180,000 N·mm |
| Betriebsfaktor         |         1.25 |
| Erforderlicher Sicherheitsfaktor |         1.50 |

Zwischenrechnungen:

```text
Wb = πd³/32
Wp = πd³/16

σb = Mb×KA/Wb
τt = T×KA/Wp
```

Nach Anwendung von:

* Kerbempfindlichkeit,
* Geometriekorrekturen,
* Größeneinflüssen,
* Oberflächeneinflussfaktoren,

ergibt sich der kombinierte Dauerfestigkeits-Sicherheitsfaktor zu:

```text
S = 1.38
```

Interpretation:

```
Required:
S ≥ 1.50

Actual:
S = 1.38
```

Empfehlung:

Durchmesser erhöhen, Geometrie ändern, Lasten reduzieren oder Werkstoffauswahl vor der Freigabe überdenken.

Entscheidungskonsequenz:

Die Welle darf unter den aktuellen Konstruktionsannahmen nicht in die Fertigung gehen.

---

### Formelreferenz

<details>
<summary>Querschnittswerte</summary>

```excel
Wp = PI()*(d^3)/16
Wb = PI()*(d^3)/32
```

Zweck:

Torsions- und Biegewiderstandsmomente berechnen.

</details>

<details>
<summary>Nennspannung</summary>

```excel
σb=(Mb×KA)/Wb
τt=(T×KA)/Wp
```

Zweck:

Nennspannungen berechnen.

</details>

<details>
<summary>Kerbeffekte</summary>

```excel
β=1+q×(α−1)
```

Zweck:

Geometrische Konzentration in Dauerfestigkeitseinfluss umrechnen.

</details>

<details>
<summary>Korrigierte Dauerfestigkeitsgrenzen</summary>

```excel
σWK=(σW×Kd×KF)/β
τWK=(τW×Kd×KF)/β
```

Zweck:

Die Dauerfestigkeitskapazität des Bauteils bestimmen.

</details>

<details>
<summary>Kombinierte Sicherheit</summary>

```excel
S=(Sb×St)/SQRT(Sb^2+St^2)
```

Zweck:

Die endgültige Akzeptanz bewerten.

</details>

---

### Validierungsregeln

| Feld                 | Regel                            | Fehlerverhalten              |
| --------------------- | ------------------------------- | --------------------------- |
| Projektname          | Erforderlich                        | Verhindert Abschluss          |
| Werkstoff-ID           | Muss in der Bibliothek existieren           | Lehnt ungültige Eingabe ab        |
| Durchmesser              | Größer als null               | Validierungswarnung          |
| Radius                | Positiv und kleiner als der Durchmesser | Validierungswarnung          |
| Biegemoment        | ≥ 0                             | Lehnt negative Eingabe ab          |
| Torsionsmoment                | ≥ 0                             | Lehnt negative Eingabe ab          |
| Betriebsfaktor        | 1.00–3.00                       | Verhindert ungültige Eingabe       |
| Mindestsicherheitsfaktor | 1.20–5.00                       | Verhindert ungültige Eingabe       |
| Referenzdaten        | Administratorgesteuert        | Ausgeblendet und geschützt        |
| Berechnungsengine    | Schreibgeschützt                       | Überschreiben von Formeln verhindert |

</details>

---

## Weitere Werkzeuge dieser Reihe

* **Budget Control Console** — geplante Budgets, Verpflichtungen und verbleibende Ausgaben vergleichen.
* **Logistics Operations Dashboard** — die Sendungsabwicklung über Entitäten hinweg verfolgen.
* **Service Operations Tracker** — die Ausführung und Berichterstattung von Außendienstteams standardisieren.

Weitere Werkzeuge: [Besuchen Sie unsere Website](https://www.theseusworkshop.com/)

---

## Lizenz

Dieses Projekt ist unter der **Apache License 2.0** lizenziert.

Sie dürfen dieses Werk gemäß den Bedingungen der Apache License 2.0 verwenden, verändern und verbreiten.

