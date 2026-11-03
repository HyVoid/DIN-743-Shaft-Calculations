[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)


# Outil de calcul d'arbres DIN 743 : calculateur en ligne gratuit de dimensionnement d'arbre et modèle Excel d'analyse automatisée de la résistance à la fatigue
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/7488196d-f46b-404a-9ee5-adf83da8c83d" />
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/9ffa110b-aa4a-4650-bfe3-ddd5105abfec" />

 

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20Calculator%20%2B%20Excel%20Template-green.svg)
![Engineering Standard](https://img.shields.io/badge/Standard-DIN%20743%20Shaft%20Fatigue%20Verification-orange.svg)
![Automation](https://img.shields.io/badge/Automation-22%20Built--In%20Material%20%26%20Valve%20Rules-brightgreen.svg)

<p><strong>Modèle de calcul d'arbres DIN 743 et calculateur en ligne</strong> : un <strong>outil d'analyse de la résistance à la fatigue des arbres mécaniques</strong> et un <strong>tableur de dimensionnement d'arbres tournants et de tiges de soupape</strong> prêts à l'emploi et sans configuration, conçus pour les ingénieurs, les dessinateurs CAO et les acheteurs techniques qui exigent des résultats immédiats et auditables sans mémoriser les tables d'ingénierie allemandes complexes. Proposée en <strong>calculateur d'arbres gratuit dans le navigateur</strong> et en <strong>modèle Microsoft Excel automatisé (.xlsx)</strong>, cette boîte à outils calcule les <strong>coefficients de sécurité sous charges combinées de flexion, de torsion et d'effort axial</strong>, automatise les corrections de <strong>facteur de concentration de contraintes (<em>K<sub>t</sub></em>)</strong> et de <strong>sensibilité à l'entaille</strong>, et calibre les limites d'endurance des matériaux selon <strong>6 classifications de conditions de service de soupape</strong>.</p>

**Aucune inscription. Aucune installation de logiciel. Un verdict d'ingénierie Conforme/Non conforme immédiat.**

Utilisez le calculateur web gratuit pour vérifier rapidement un arbre isolé, ou téléchargez le **classeur Excel Pro** entièrement déverrouillé, doté de **22 règles de correspondance matériau et état de surface préprogrammées** : collez vos données brutes et obtenez instantanément des résultats de calcul par lots, sans écrire ni faire glisser la moindre formule.

> 🌐 **Application web interactive gratuite :** [**Lancer le calculateur en ligne gratuit de dimensionnement d'arbre et de fatigue DIN 743 (aucune installation requise)**](https://hyvoid.github.io/DIN-743-Shaft-Calculations/)
> 
> 📥 **Tableur Excel automatisé (.xlsx) :** [**Télécharger le modèle Excel automatisé de vérification de fatigue d'arbre et de tige de soupape DIN 743 (garantie de remboursement sous 30 jours)**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)

---

## À qui s'adressent ce logiciel de conception d'arbres DIN 743 et ce modèle Excel (profils utilisateurs et cas d'usage)

Que vous dimensionniez un arbre de transmission depuis zéro, validiez une tige de soupape sous chargement cyclique haute pression ou auditiez le rapport de calcul mécanique d'un fournisseur, ce **modèle de vérification de résistance d'arbre** élimine les erreurs de recherche manuelle :

* **Ingénieurs mécaniciens débutants et dessinateurs CAO juniors :** ont besoin d'un **calculateur de dimensionnement de diamètre d'arbre** prêt à l'emploi pour vérifier des arbres épaulés, des rayons de raccordement et des rainures de clavette dans SolidWorks, Inventor ou AutoCAD, sans passer des journées à décrypter les abaques DIN 743 parties 1 à 3 ni à lancer une analyse par éléments finis (FEA) coûteuse.
* **Ingénieurs en conception de soupapes et spécialistes du dimensionnement d'actionneurs :** ont besoin d'un **tableur dédié au couple et à la fatigue des tiges de soupape**, pré-calibré pour **6 classifications de conditions de service de soupape** et pour les alliages résistants à la corrosion (**aciers inoxydables martensitiques, Super Duplex, alliages de nickel, alliages de titane et AISI 4340**).
* **Ingénieurs pompes, réducteurs et machines tournantes :** ont besoin d'une **fiche de calcul d'arbre en flexion et torsion combinées** reproductible pour évaluer les limites d'endurance cyclique, les surcharges statiques de pointe et les marges de sécurité en déflexion d'arbre.
* **Acheteurs techniques, ingénieurs coûts et auditeurs qualité :** ont besoin d'un **tableur d'aide à la décision d'ingénierie** sans barrière pour vérifier si un arbre est dangereusement sous-dimensionné (risque de défaillance sur site) ou excessivement conservateur (gaspillage du budget matière en barres d'alliage surdimensionnées).

---

## Vérification de fatigue et dimensionnement d'arbre : difficultés courantes et réponses automatisées du modèle

| Difficulté de conception et de dimensionnement mécaniques | Risque d'ingénierie fréquent | Comment ce calculateur DIN 743 et ce modèle Excel le résolvent |
| :--- | :--- | :--- |
| **Coefficients de sécurité en fatigue d'arbre incertains ($S_f$)** | Estimer les marges de sécurité à l'aveugle conduit à des fissures de fatigue imprévues ou à des audits de conception clients non validés. | Calcule automatiquement les **coefficients de sécurité en fatigue dynamique** et les **coefficients de sécurité statiques vis-à-vis de la limite d'élasticité** par rapport aux seuils de référence DIN 743, avec des indicateurs **Conforme/Non conforme** immédiats. |
| **Recherche confuse des limites d'endurance des matériaux** | Les tables d'aciers au carbone standard sont inadaptées au dimensionnement d'alliages exotiques pour des environnements corrosifs ou fortement chargés. | Base de données intégrée couvrant les **aciers inoxydables martensitiques, le Super Duplex, les alliages de nickel, les alliages de titane et l'acier 4340** sur **4 plages de résistance à la traction ($R_m$)**. |
| **Combinaisons de charges multiaxiales complexes** | Évaluer à la main des moments de flexion, un cisaillement de torsion et une traction axiale simultanés est source d'erreurs. | **Calculateur de contrainte équivalente de von Mises** intégré, combinant charges alternées et charges moyennes pour la **flexion, la torsion et les efforts axiaux**. |
| **Sensibilité à l'entaille et concentrations de contraintes non quantifiées** | Ignorer les épaulements, les gorges et les rainures de clavette d'un arbre provoque des ruptures catastrophiques aux transitions de géométrie. | Suivi en temps réel des **facteurs de concentration de contraintes géométriques ($K_t$)**, des **coefficients d'entaille en fatigue ($K_f$)** et des **facteurs d'échelle ($K_d$)**. |
| **Mauvaise utilisation de la contrainte nominale brute** | Comparer directement la contrainte nominale issue de la CAO à la limite d'élasticité du catalogue ignore l'état de surface et la sévérité de service. | Déclassement automatisé sur **5 états de rugosité de surface × 4 intervalles de $R_m$**, calibré spécifiquement pour **6 classifications de conditions de service de soupape**. |
| **Formules cassées dans les tableurs hérités** | Le copier-glisser de cellules dans d'anciens classeurs Excel corrompt les références lors des évaluations d'arbres par lots. | **Architecture Excel automatisée sans glisser-déposer** : collez vos lignes de paramètres bruts et laissez les 22 règles de calcul intégrées renseigner immédiatement les résultats. |

---

## Comparatif fonctionnel : calcul manuel DIN 743 vs calculateur web gratuit vs modèle Excel Pro

| Dimension opérationnelle et technique | Calcul manuel / feuille de brouillon | Calculateur DIN 743 gratuit dans le navigateur | Modèle Excel DIN 743 Pro automatisé (.xlsx) |
| :--- | :--- | :--- | :--- |
| **Cas d'usage cible** | Étude académique ou estimation ponctuelle approximative | Validation rapide d'un point unique dans le navigateur | **Conception de production, dimensionnement d'arbres et de soupapes par lots et documentation qualité** |
| **Bibliothèque de matériaux et couverture des alliages** | Recherche manuelle dans les tables des ouvrages requise | Aciers de construction standard de référence | **22 règles de calcul préétablies (inox martensitique, Super Duplex, alliages de nickel, titane, 4340)** |
| **Matrice état de surface × résistance à la traction ($R_m$)** | Interpolation manuelle à partir des abaques DIN | Saisie de surface basique pour un point unique | **Matrice automatisée de correspondance 5 états de surface × 4 plages de $R_m$** |
| **Calibrage des conditions de service de soupape** | Non inclus (déclassement personnalisé requis) | Chargement mécanique général uniquement | **Pré-calibré pour 6 classifications de conditions de service de soupape** |
| **Maintenance des formules et saisie des données** | Risque élevé d'erreurs de référence de cellule et de copier-coller | Saisie manuelle élément par élément dans un formulaire web | **Formules à mise à jour automatique à 100 % (aucun double-clic ni glisser de formule requis)** |
| **Traitement par lots et piste d'audit hors ligne** | Lent, non standardisé, difficile à auditer | Session unique uniquement (réinitialisation à l'actualisation) | **Lignes hors ligne illimitées, feuilles déverrouillées personnalisables, export PDF prêt pour le client** |

---

## Tutoriel de démarrage rapide : comment calculer la résistance à la fatigue d'un arbre en 4 étapes (méthode sans formule)

Nul besoin d'une formation en métallurgie avancée ou en mécanique des structures pour obtenir un dimensionnement d'arbre fiable. Suivez cette méthode pour passer des cotes brutes à une décision d'ingénierie en quelques minutes :

### Étape 1 : valider la géométrie d'un arbre isolé dans le calculateur gratuit du navigateur
Ouvrez le [**calculateur web gratuit de résistance d'arbre DIN 743**](https://hyvoid.github.io/DIN-743-Shaft-Calculations/) et saisissez le diamètre de référence de votre arbre ($d$), la particularité de la section critique (rayon de raccordement d'un épaulement, rainure de clavette ou gorge) ainsi que les charges nominales, pour visualiser l'effet de la géométrie sur la concentration de contraintes.

### Étape 2 : sélectionner la nuance de matériau et l'état de rugosité de surface
Choisissez le matériau de votre arbre ou de votre tige de soupape ainsi que l'état de finition d'usinage. Le moteur de calcul évalue la manière dont la **résistance à la traction ($R_m$)** et la **limite d'élasticité ($R_{p0.2}$)** interagissent avec la rugosité de surface ($R_z$) pour établir la véritable limite d'endurance corrigée.

### Étape 3 : appliquer les charges combinées et la sévérité de service
Saisissez le **moment de flexion**, le **couple de torsion** et l'**effort axial** de service, puis sélectionnez la sévérité de service correspondante. Vérifiez instantanément si la section satisfait ou non les critères de coefficient de sécurité de la DIN 743.

### Étape 4 : passer à l'automatisation par lots en un clic avec le modèle Excel Pro
Une fois votre essai ponctuel terminé dans le navigateur, transposez votre méthode à la production industrielle réelle avec le [**modèle Excel automatisé de calcul d'arbres et de soupapes DIN 743**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength).

* **Pourquoi passer au classeur Excel ?** La théorie mécanique DIN 743 sous-jacente et la logique de risque commercial sont très complexes, mais le produit Excel a déjà intégré tout le travail lourd dans **22 règles de calcul automatiques de correspondance**.
  <img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/b30e51ae-fade-4f83-8869-7de538238ee4" />

* **Couverture complète des matériaux courants et des services sévères :** extension récente aux matériaux industriels les plus demandés — **aciers inoxydables martensitiques, acier inoxydable Super Duplex, alliages de nickel, alliages de titane et acier allié AISI 4340** — automatiquement croisés sur **5 états de finition de surface × 4 intervalles de résistance à la traction ($R_m$)** afin de calibrer **6 classifications distinctes de conditions de service de soupape**.
* **Un fonctionnement réellement sans barrière (aucune formule à tirer) :** chaque formule de recherche et de correction de contrainte se met à jour dynamiquement. **Vous n'avez même pas besoin de double-cliquer sur le coin de la cellule ni de tirer à la souris pour recopier des formules.** Téléchargez simplement le fichier `.xlsx` sur votre ordinateur, collez vos propres données dimensionnelles et de charge dans les colonnes de saisie, et obtenez en un clic un verdict immédiat, à la fois technique et commercial, Conforme/Non conforme — un débutant complet exploite ainsi immédiatement une analyse de niveau senior.

👉 [**Télécharger le modèle Excel automatisé DIN 743 prêt à l'emploi sur Theseus Workshop**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)

---

## La logique métier et la méthodologie : révéler les angles morts commerciaux cachés du dimensionnement d'arbre

Pour les non-spécialistes, les ingénieurs juniors et les chefs de projet, le calcul d'arbre ressemble souvent à un simple exercice mathématique. En réalité, **la vérification d'arbre selon DIN 743 est un outil de maîtrise du risque commercial**. 

Les calculs DIN 743 échouent rarement pour des raisons d'arithmétique élémentaire ; ils échouent parce que les hypothèses d'ingénierie se dispersent entre notes manuscrites, tableurs non calibrés et devis fournisseurs déconnectés. Faute d'un système de calcul standardisé, une équipe tombe dans deux angles morts commerciaux coûteux :

### Angle mort n° 1 : le piège de la « contrainte nominale » (réclamations au titre de la garantie, rupture sur site et responsabilité liée à un rappel produit)
Les débutants calculent fréquemment la **contrainte nominale** brute (charge divisée par la section droite) et la comparent directement à la limite de fatigue ou à la limite d'élasticité du catalogue du matériau. 
* **Le fait objectif :** les arbres réels comportent des concentrateurs de contraintes (rainures de clavette, épaulements), des pénalités d'échelle (les grands diamètres ont une résistance à la fatigue spécifique plus faible) et des micro-entailles de rugosité de surface. Associés à des conditions de service de soupape sévères, ces facteurs réduisent couramment de **30% à 60%** la capacité de charge réelle d'un arbre.
* **La conséquence commerciale :** un arbre ou une tige de soupape qui paraît « sûr à 100 % » sur un calculateur basique peut casser sur site après quelques milliers de cycles, provoquant des arrêts d'usine non planifiés, des pénalités de remplacement d'urgence et des réclamations au titre de la garantie qui anéantissent la marge d'une gamme entière.

#### Impact réel : contrainte nominale brute vs contrainte corrigée DIN 743
* **Avant (vérification nominale non informée) :** un concepteur compare une contrainte nominale de flexion de `185 MPa` directement à une limite de fatigue catalogue de `210 MPa` et valide le plan pour la fabrication.
* **Après (vérification automatisée avec le modèle DIN 743) :** le modèle applique automatiquement la sensibilité à l'entaille, le déclassement lié à la taille de l'arbre, les **facteurs de rugosité de surface à 5 états** et le **calibrage des conditions de service de soupape à 6 classes**. La limite d'endurance admissible réelle chute à `168 MPa`.

```text
Original Naive Decision:
185 MPa < 210 MPa  →  PASS (Hidden Field Failure Risk)

Corrected DIN 743 Decision:
185 MPa > 168 MPa  →  FAIL (Redesign or Material Upgrade Required Before Production)

```

### Angle mort n° 2 : le surdimensionnement aveugle et le gaspillage d'alliages (appels d'offres perdus et érosion des marges)

Lorsque les ingénieurs ou les acheteurs ne savent pas précisément comment un matériau se comporte dans des intervalles donnés de résistance à la traction ($R_m$) ou selon les classes de service de soupape, ils compensent l'incertitude par des « facteurs de peur » arbitraires : soit ils surdimensionnent inutilement l'arbre, soit ils passent aveuglément d'un **acier inoxydable martensitique ou d'un 4340** à des **alliages de nickel ou de titane** ultra-coûteux.

* **Le fait objectif :** surdimensionner une tige de soupape ou un arbre de transmission de seulement 20% augmente de plus de 40% la masse de barre nécessaire, impose le choix d'un actionneur ou d'un palier plus grand et plus coûteux, et allonge le temps d'usinage.
* **La conséquence commerciale :** des coûts de nomenclature (BOM) gonflés rendent vos devis non compétitifs sur les appels d'offres sensibles au prix, ou érodent silencieusement 15%–35% de votre marge brute de fabrication.

### Comment notre moteur Excel automatisé à 22 règles résout ces deux problèmes

Plutôt que d'exiger de vous la maîtrise des normes mécaniques allemandes, ce classeur transforme la logique de décision en un processus infaillible :

1. **Élimine le risque lié à un sous-dimensionnement :** applique automatiquement le déclassement DIN 743 sur **5 états de surface × 4 plages de $R_m$** et **6 conditions de service de soupape**, afin qu'aucune conception limite ne passe au travers de la revue qualité.
2. **Prévient le surcoût matière :** vous permet de comparer en quelques secondes **inox martensitique, Super Duplex, alliages de nickel, titane et 4340** — pour choisir l'alliage exactement optimal en coût et le diamètre minimal sûr conforme aux exigences, en protégeant à la fois votre réputation technique et votre marge.

---

## À propos de Theseus Workshop

Je conçois des outils de suivi légers, des calculateurs d'ingénierie et des modèles d'aide à la décision commerciale pour des processus techniques complexes comportant trop de paramètres mobiles pour être fiables dans une seule tête.

Le principe directeur de chaque outil est simple :

> **Quelles données et règles critiques doivent être réunies au même endroit pour que votre prochaine décision technique ou commerciale puisse être prise en toute confiance en quelques secondes ?**

Cet **outil de calcul de fatigue d'arbres DIN 743** transforme des normes de génie mécanique éprouvées en un actif opérationnel réutilisable et sans barrière, plutôt qu'en un énième tableur isolé et fragile.

* 🛒 **Obtenir ce modèle :** **[Télécharger le classeur Excel automatisé de calcul d'arbres et de soupapes DIN 743](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)**
* 🧰 **Explorer tous les modèles d'ingénierie et d'aide à la décision :** visitez notre boutique officielle **[TheseusWorkshop.com](https://www.google.com/search?q=https://www.theseusworkshop.com%3Futm_source%3Dgithub%26utm_medium%3DGitHub%2520README%26utm_campaign%3Dreadme%2520about%2520section%26utm_content%3Ddin-743-shaft-strength)** pour découvrir d'autres tableurs prêts à l'emploi, processus de vérification d'ingénierie et outils d'aide à la décision commerciale.

---

## Détails techniques

<details>
<summary>Pour les relecteurs techniques, les utilisateurs avancés d'Excel et les collaborateurs</summary>

---

### Architecture du classeur

| Feuille    | Rôle                                                   |
| ----------- | ------------------------------------------------------ |
| GUIDE       | Instructions d'utilisation, périmètre, gestion des versions, avertissement |
| INPUT       | Point d'entrée unique modifiable                       |
| REFERENCE   | Base de données matériaux et paramètres DIN            |
| CALCULATION | Moteur de calcul protégé                               |
| RESULTS     | Tableau de bord de sécurité et évaluation CONFORME / NON CONFORME |
| REPORT      | Sortie de rapport standardisée                         |

#### Flux de données

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

La validation s'effectue dans INPUT.

Les sorties dépendent exclusivement des résultats de CALCULATION.

Aucune référence circulaire n'est autorisée.

---

### Trois pièges qui trompent même les ingénieurs mécaniciens expérimentés

---

#### Piège n° 1 : comparer directement la contrainte nominale aux limites de fatigue du matériau

Une décision a été prise :

```
185 MPa < 210 MPa
PASS
```

Hypothèse erronée :

Les contraintes nominales représentent la capacité de fatigue réelle.

Pourquoi c'est faux :

Les limites d'endurance du matériau doivent être corrigées pour tenir compte des effets de composant.

Approche corrigée :

```
σWK = (σW × Kd × KF) / β
```

Résultat corrigé :

```
Corrected endurance limit:
168 MPa

185 MPa > 168 MPa

FAIL
```

<details>
<summary>Référence des formules</summary>

```excel
=(Sigma_W * Kd * KF) / Beta
```

</details>

---

#### Piège n° 2 : ignorer les effets de géométrie

Décision :

Augmenter légèrement le diamètre de l'arbre.

Hypothèse erronée :

De petites modifications de géométrie ont une influence négligeable.

Pourquoi c'est faux :

Les rayons de raccordement et les gorges modifient sensiblement la concentration de contraintes.

Approche corrigée :

Évaluer les facteurs α et β.

Résultat :

Un rayon de raccordement plus grand a amélioré la sécurité en fatigue en réduisant la sévérité de l'entaille.

<details>
<summary>Référence des formules</summary>

```excel
Beta = 1 + q*(Alpha-1)
```

</details>

---

#### Piège n° 3 : traiter flexion et torsion indépendamment

Décision :

Les deux coefficients de sécurité dépassent individuellement les limites.

Hypothèse erronée :

Une acceptation indépendante garantit l'acceptation du système.

Pourquoi c'est faux :

Le chargement combiné gouverne la tenue en fatigue.

Approche corrigée :

Utiliser une évaluation de sécurité combinée.

Résultat :

Des conditions CONFORME individuelles deviennent un NON CONFORME combiné.

<details>
<summary>Référence des formules</summary>

```excel
S=(Sb*St)/SQRT(Sb^2+St^2)
```

</details>

---

### Exemple de cas concret

Une section de tige de soupape est évaluée avec les données suivantes :

| Paramètre                      |        Valeur |
| ---------------------- | -----------: |
| Matériau                       |       17-4PH |
| Diamètre                       |        40 mm |
| Rayon de raccordement          |         2 mm |
| Moment de flexion              | 450,000 N·mm |
| Couple                         | 180,000 N·mm |
| Coefficient de service         |         1.25 |
| Coefficient de sécurité requis |         1.50 |

Calculs intermédiaires :

```text
Wb = πd³/32
Wp = πd³/16

σb = Mb×KA/Wb
τt = T×KA/Wp
```

Après application :

* de la sensibilité à l'entaille,
* des corrections de géométrie,
* des effets d'échelle,
* des facteurs d'influence de surface,

le coefficient de sécurité combiné en fatigue devient :

```text
S = 1.38
```

Interprétation :

```
Required:
S ≥ 1.50

Actual:
S = 1.38
```

Recommandation :

Augmenter le diamètre, modifier la géométrie, réduire les charges ou reconsidérer le choix du matériau avant la mise en production.

Implication sur la décision :

L'arbre ne doit pas passer en fabrication avec les hypothèses de conception actuelles.

---

### Référence des formules

<details>
<summary>Caractéristiques de section</summary>

```excel
Wp = PI()*(d^3)/16
Wb = PI()*(d^3)/32
```

Objet :

Calculer les modules de section en torsion et en flexion.

</details>

<details>
<summary>Contrainte nominale</summary>

```excel
σb=(Mb×KA)/Wb
τt=(T×KA)/Wp
```

Objet :

Calculer les contraintes nominales.

</details>

<details>
<summary>Effets d'entaille</summary>

```excel
β=1+q×(α−1)
```

Objet :

Convertir la concentration géométrique en influence sur la fatigue.

</details>

<details>
<summary>Limites d'endurance corrigées</summary>

```excel
σWK=(σW×Kd×KF)/β
τWK=(τW×Kd×KF)/β
```

Objet :

Déterminer la capacité de fatigue du composant.

</details>

<details>
<summary>Sécurité combinée</summary>

```excel
S=(Sb×St)/SQRT(Sb^2+St^2)
```

Objet :

Évaluer l'acceptabilité finale.

</details>

---

### Règles de validation

| Champ                      | Règle                           | Comportement en cas d'erreur |
| --------------------- | ------------------------------- | --------------------------- |
| Nom du projet              | Obligatoire                     | Empêche la finalisation     |
| ID matériau                | Doit exister dans la bibliothèque | Rejette la saisie invalide |
| Diamètre                   | Supérieur à zéro                | Avertissement de validation |
| Rayon                      | Positif et inférieur au diamètre | Avertissement de validation |
| Moment de flexion          | ≥ 0                             | Rejette une valeur négative |
| Couple                     | ≥ 0                             | Rejette une valeur négative |
| Coefficient de service     | 1.00–3.00                       | Empêche une saisie invalide |
| Coefficient de sécurité minimal | 1.20–5.00                  | Empêche une saisie invalide |
| Données de référence       | Contrôlées par l'administrateur | Masquées et protégées       |
| Moteur de calcul           | Lecture seule                   | Écrasement des formules empêché |

</details>

---



## Autres outils de cette série

* **[construction-estimating](https://github.com/HyVoid/construction-estimating)** — Combien coûtera ce périmètre de construction selon les hypothèses actuelles ? — Standardiser l'estimation des appels d'offres de construction et transformer les estimations réalisées en bibliothèques de coûts réutilisables.
* **[aia-construction-cost-tracker-excel](https://github.com/HyVoid/aia-construction-cost-tracker-excel)** — Comment les estimations et les coûts suivis se comparent-ils tout au long de la réalisation ? — Comparer les estimations de construction aux coûts réels pendant toute la réalisation du projet, au format standard AIA.
* **[construction-project-management-excel](https://github.com/HyVoid/construction-project-management-excel)** — La situation financière du projet est-elle exacte après intégration des avenants approuvés, des coûts réels et de l'avancement de la facturation ? — Intégrer budgets, avenants, facturation à l'avancement et trésorerie dans un cadre unique de contrôle de projet de construction.
* **[industrial-energy-tco-calculator](https://github.com/HyVoid/industrial-energy-tco-calculator)** — Quelle option énergétique offre le coût total de possession le plus bas pour ce projet précis, dans ses conditions d'exploitation réelles ? — Comparer les sources d'énergie industrielles sur une base d'énergie utile réelle, en normalisant les coûts de combustible, l'efficacité des équipements, l'investissement en infrastructure et les coûts de possession sur le cycle de vie.
* **[residential-boq-template](https://github.com/HyVoid/residential-boq-template)** — Combien coûtera ce projet résidentiel et quels lots dépassent déjà le budget ? — Estimer les coûts de construction résidentielle à partir des métrés et des prix du BOQ, tout en comparant les budgets approuvés aux dépenses réelles.
* **[tunnel-cost-estimator-boq-excel](https://github.com/HyVoid/tunnel-cost-estimator-boq-excel)** — Combien coûtera ce projet de tunnel en forage-dynamitage selon le cycle de construction retenu ? — Estimer les besoins en excavation, forage, dynamitage, soutènement, équipements et main-d'œuvre d'un tunnel en forage-dynamitage pour obtenir un coût de projet et un BOQ complets.
* **[Foundation-Quantity-Takeoff-BBS-BOQ-Cost-Estimation-Excel-Toolkit](https://github.com/HyVoid/Foundation-Quantity-Takeoff-BBS-BOQ-Cost-Estimation-Excel-Toolkit)** — Quel est le coût total des matériaux et des armatures de l'infrastructure de fondation, et puis-je rattacher chaque valeur commerciale de l'offre aux dimensions mesurées ? — Calculer les volumes de béton, les surfaces de coffrage, les quantités de terrassement, les tonnages d'armatures via des nomenclatures de façonnage automatisées, ainsi que les valeurs du devis quantitatif à partir des dimensions mesurées de la structure.

Plus d'outils : [Visitez notre site web](https://www.theseusworkshop.com/)

---

## Licence

Ce projet est distribué sous **licence Apache 2.0**.

Vous êtes libre d'utiliser, de modifier et de distribuer ce travail conformément aux termes de la licence Apache 2.0.
