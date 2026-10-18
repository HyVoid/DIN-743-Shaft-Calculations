[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Outil de calcul d'arbres DIN 743 : Modèle d'analyse de la résistance à la fatigue

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-DIN%20743%20Decision%20Support-orange.svg)

<p><strong>Modèle de calcul d'arbres DIN 743</strong> : un <strong>outil d'analyse de la résistance à la fatigue des arbres</strong> gratuit, sans installation, disponible sous forme de <strong>calculateur navigateur</strong> et de <strong>tableur Excel</strong> réutilisable. Standardisez votre <strong>flux de vérification des arbres</strong>, calculez les coefficients de sécurité pour les sollicitations combinées de flexion et de torsion, et garantissez des conceptions de mécanique auditables, reproductibles et rapides.</p>

**Sans inscription. Sans installation. Gratuit dans votre navigateur.**

Essayez le calculateur en ligne pour des validations rapides. Pour la documentation formelle, le traitement par lots ou l'usage hors ligne, vous pouvez acquérir le classeur Excel déverrouillé, accompagné d'une garantie de remboursement de 30 jours.

> 🌐 **Outil en ligne gratuit :** [**Lancer le calculateur d'arbres DIN 743 gratuit**](https://hyvoid.github.io/DIN-743-Shaft-Calculations/)
> 
> 📥 **Ressource premium :** [**Télécharger le modèle Excel de calcul d'arbres DIN 743**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)

---

## Vérification en fatigue des arbres : points de douleur et solutions

| Point de douleur en conception mécanique | Solution de l'outil DIN 743 (ce qu'il suit) |
| :--- | :--- |
| **Coefficients de sécurité en fatigue incertains** | Vérification automatisée des **exigences minimales de sécurité en fatigue** (S_f) par rapport aux normes de référence du projet. |
| **Limites d'endurance des matériaux devinées** | Calcul dynamique de l'influence directe du **choix du matériau (limite d'élasticité, résistance à la traction)** sur les marges de sécurité finales. |
| **Chargements multi-axiaux complexes** | Évaluation intégrée des **moments de flexion et couples de torsion combinés** pour déterminer l'acceptabilité globale de la conception. |
| **Concentrations de contraintes non quantifiées** | Suivi en temps réel des évolutions géométriques (par ex. **rayons de congé, rainures de clavette**) et de leur effet sur la **sensibilité à l'entaille**. |
| **Usage impropre des contraintes nominales** | Passage automatisé des **contraintes nominales** brutes aux **limites d'endurance de la pièce corrigées** (intégrant les facteurs de dimension et d'état de surface). |
| **Critères de validation ambigus** | Identification claire Succès/Échec indiquant quelles **sections critiques d'arbre nécessitent une reconception** avant la libération pour fabrication. |

---

## Pourquoi j'ai conçu cet outil de dimensionnement d'arbres en mécanique

Les calculs DIN 743 sont rarement difficiles à cause des mathématiques. Ils le deviennent parce que le raisonnement de conception mécanique se fragmente entre notes manuscrites, formules isolées, jugement d'ingénieur et hypothèses de résistance statique non documentées.

J'ai vu à plusieurs reprises des revues de conception où des ingénieurs parvenaient à des conclusions différentes avec exactement les mêmes chargements cycliques et contraintes dimensionnelles. L'échec n'était généralement pas de calcul ; il était analytique.

Quelqu'un oubliait un facteur de concentration de contraintes (Kt). Quelqu'un utilisait directement les contraintes nominales face aux limites de fatigue du matériau sans correction appropriée. Quelqu'un copiait une formule d'un ancien tableur sans vérifier si les hypothèses de chargement dynamique sous-jacentes s'appliquaient encore.

La conséquence était prévisible :

* Les conceptions mécaniques conservatrices devenaient inutilement coûteuses.
* Des modèles d'arbres marginaux passaient la revue qualité sans être remarqués.
* La vérification structurelle dépendait du savoir tribal individuel plutôt que d'un processus organisationnel auditable.

Ce classeur industrialise le raisonnement intégré dans la norme DIN 743. Au lieu de traiter la vérification en fatigue des arbres comme un exercice de calcul ponctuel, il transforme la norme en un cadre décisionnel réutilisable.

### Un exemple concret : contrainte nominale vs contrainte corrigée

**Avant**
Un concepteur CAO compare une contrainte nominale de flexion de 185 MPa directement à une limite de fatigue du matériau de 210 MPa et conclut que la conception est acceptable.

**Après**
L'outil de calcul applique automatiquement les effets géométriques, la sensibilité à l'entaille, les corrections de dimension et les facteurs d'influence de surface. La limite d'endurance corrigée tombe à 168 MPa.

La conclusion change immédiatement :

```text
Décision initiale :
PASS

Décision corrigée :
FAIL → Reconfiguration requise
```

---

## À propos

Je conçois des outils de suivi légers et d'aide à la décision pour les situations où les pièces mobiles sont trop nombreuses pour être fièrement retenues dans une seule tête.

La question qui guide ces outils est simple :

> **Quelles informations doivent coexister en un seul endroit pour que la prochaine décision puisse être prise avec confiance ?**

Cette calculatrice d'arbres DIN 743 est un exemple de cette approche : transformer un raisonnement d'ingénierie éprouvé en actif opérationnel réutilisable plutôt qu'en un tableur isolé de plus.

---

## Détails techniques

<details>
<summary>Pour les réviseurs techniques, les praticiens d'Excel et les collaborateurs</summary>

---

### Architecture du classeur

| Feuille       | Objectif                                                |
| ----------- | ------------------------------------------------------ |
| GUIDE       | Instructions d'utilisation, périmètre, contrôle de version, avertissement |
| INPUT       | Point d'entrée unique modifiable                            |
| REFERENCE   | Base de données matériaux et paramètres DIN                   |
| CALCULATION | Moteur de calcul protégé                                    |
| RESULTS     | Tableau de bord de sécurité et évaluation PASS/FAIL              |
| REPORT      | Sortie de reporting standardisée                              |

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

La validation a lieu au niveau de INPUT.

Les sorties dépendent exclusivement des résultats de CALCULATION.

Aucune référence circulaire n'est autorisée.

---

### Trois pièges qui surprennent même les ingénieurs mécaniciens expérimentés

---

#### Piège 1 : Comparer directement la contrainte nominale aux limites de fatigue du matériau

Une décision a été prise :

```
185 MPa < 210 MPa
PASS
```

Hypothèse erronée :

Les contraintes nominales représentent la capacité réelle en fatigue.

Pourquoi c'est incorrect :

Les limites d'endurance des matériaux doivent être ajustées aux effets de la pièce.

Approche corrigée :

```
σWK = (σW × Kd × KF) / β
```

Résultat corrigé :

```
Limite d'endurance corrigée :
168 MPa

185 MPa > 168 MPa

FAIL
```

<details>
<summary>Référence de formules</summary>

```excel
=(Sigma_W * Kd * KF) / Beta
```

</details>

---

#### Piège 2 : Ignorer les effets géométriques

Décision :

Augmenter légèrement le diamètre de l'arbre.

Hypothèse erronée :

Les petites variations géométriques ont une influence négligeable.

Pourquoi c'est incorrect :

Les congés et les rainures modifient significativement la concentration de contraintes.

Approche corrigée :

Évaluer les facteurs α et β.

Résultat :

Un rayon de congé plus grand a amélioré la sécurité en fatigue en réduisant la sévérité de l'entaille.

<details>
<summary>Référence de formules</summary>

```excel
Beta = 1 + q*(Alpha-1)
```

</details>

---

#### Piège 3 : Traiter la flexion et la torsion indépendamment

Décision :

Les deux coefficients de sécurité dépassent individuellement les limites.

Hypothèse erronée :

L'acceptation individuelle garantit l'acceptation du système.

Pourquoi c'est incorrect :

Le chargement combiné gouverne la performance en fatigue.

Approche corrigée :

Utiliser une évaluation de sécurité combinée.

Résultat :

Des conditions PASS individuelles sont devenues un FAIL combiné.

<details>
<summary>Référence de formules</summary>

```excel
S=(Sb*St)/SQRT(Sb^2+St^2)
```

</details>

---

### Scénario d'exemple

Une section de tige de vanne est évaluée avec :

| Paramètre              |        Valeur |
| ---------------------- | -----------: |
| Matériau               |       17-4PH |
| Diamètre               |        40 mm |
| Rayon de congé         |         2 mm |
| Moment de flexion      | 450,000 N·mm |
| Couple                 | 180,000 N·mm |
| Facteur de service     |         1.25 |
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
* des corrections géométriques,
* des effets de dimension,
* des facteurs d'influence de surface,

le coefficient de sécurité combiné en fatigue devient :

```text
S = 1.38
```

Interprétation :

```
Requis :
S ≥ 1.50

Réel :
S = 1.38
```

Recommandation :

Augmenter le diamètre, modifier la géométrie, réduire les charges ou reconsidérer le choix du matériau avant libération.

Implication décisionnelle :

L'arbre ne devrait pas passer en fabrication sous les hypothèses de conception actuelles.

---

### Référence de formules

<details>
<summary>Propriétés de section</summary>

```excel
Wp = PI()*(d^3)/16
Wb = PI()*(d^3)/32
```

Objectif :

Calculer les modules de section en torsion et en flexion.

</details>

<details>
<summary>Contrainte nominale</summary>

```excel
σb=(Mb×KA)/Wb
τt=(T×KA)/Wp
```

Objectif :

Calculer les contraintes nominales.

</details>

<details>
<summary>Effets d'entaille</summary>

```excel
β=1+q×(α−1)
```

Objectif :

Convertir la concentration géométrique en influence sur la fatigue.

</details>

<details>
<summary>Limites d'endurance corrigées</summary>

```excel
σWK=(σW×Kd×KF)/β
τWK=(τW×Kd×KF)/β
```

Objectif :

Déterminer la capacité en fatigue de la pièce.

</details>

<details>
<summary>Sécurité combinée</summary>

```excel
S=(Sb×St)/SQRT(Sb^2+St^2)
```

Objectif :

Évaluer l'acceptabilité finale.

</details>

---

### Règles de validation

| Champ                 | Règle                            | Comportement en cas d'erreur              |
| --------------------- | ------------------------------- | --------------------------- |
| Nom du projet          | Obligatoire                        | Empêche la validation          |
| ID Matériau           | Doit exister dans la bibliothèque           | Rejette une entrée invalide        |
| Diamètre              | Supérieur à zéro               | Avertissement de validation          |
| Rayon                | Positif et inférieur au diamètre | Avertissement de validation          |
| Moment de flexion        | ≥ 0                             | Rejette une entrée négative       |
| Couple                | ≥ 0                             | Rejette une entrée négative       |
| Facteur de service        | 1.00–3.00                       | Empêche une entrée invalide       |
| Coefficient de sécurité minimal | 1.20–5.00                       | Empêche une entrée invalide       |
| Données de référence        | Contrôlé par l'administrateur | Masqué et protégé        |
| Moteur de calcul    | Lecture seule                       | Écrasement de formule empêché |

</details>

---

## Autres outils de cette série

* **Console de contrôle budgétaire** — comparez les budgets prévus, les engagements et les dépenses restantes.
* **Tableau de bord des opérations logistiques** — suivez l'exécution des expéditions entre entités.
* **Suivi des opérations de service** — standardisez l'exécution et le reporting des équipes terrain.

Plus d'outils : [Visitez notre site](https://www.theseusworkshop.com/)

---

## Licence

Ce projet est sous licence **Apache License 2.0**.

Vous êtes libre d'utiliser, de modifier et de distribuer cette œuvre conformément aux termes de la Apache License 2.0.
