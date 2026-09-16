[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Herramienta de Cálculo de Ejes DIN 743: Plantilla de Análisis de Resistencia a la Fatiga

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-DIN%20743%20Decision%20Support-orange.svg)

<p><strong>Plantilla de Cálculo de Ejes DIN 743</strong>: Una <strong>herramienta de análisis de resistencia a la fatiga de ejes</strong> gratuita y sin instalación, disponible como <strong>calculadora de navegador</strong> y como <strong>hoja de cálculo Excel</strong> reutilizable. Estandariza tu <strong>flujo de verificación de ejes</strong>, calcula factores de seguridad para flexión y torsión combinadas, y garantiza que los diseños de ingeniería mecánica sean auditables, repetibles y rápidos.</p>

**Sin registro. Sin instalación. Gratis en tu navegador.**

Prueba la calculadora web para validaciones rápidas. Para documentación formal, procesamiento por lotes o uso sin conexión, puedes comprar el libro de trabajo Excel desbloqueado, respaldado por una garantía de devolución de dinero de 30 días.

> 🌐 **Herramienta en Línea Gratuita:** [**Abrir la Calculadora DIN 743 Gratuita**](https://hyvoid.github.io/DIN-743-Shaft-Calculations/)
> 
> 📥 **Activo Premium:** [**Descargar la Plantilla Excel de Cálculo de Ejes DIN 743**](https://www.theseusworkshop.com/l/zjyuhp?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=din-743-shaft-strength)

---

## Verificación de Fatiga de Ejes: Puntos de Dolor y Soluciones

| Punto de Dolor del Diseño de Ingeniería | Solución de la Herramienta DIN 743 (Qué Rastrea) |
| :--- | :--- |
| **Factores de Seguridad a Fatiga Inciertos** | Verificación automatizada de los **requisitos mínimos de seguridad a fatiga** (S_f) frente a los estándares base del proyecto. |
| **Adivinar los Límites de Resistencia del Material** | Cálculo dinámico de cómo la **selección del material (límite elástico, resistencia a la tracción)** afecta directamente a los márgenes de seguridad finales. |
| **Cargas Multiaxiales Complejas** | Evaluación integrada de **momentos flectores y cargas torsionales** combinados para determinar la aceptabilidad global del diseño. |
| **Concentraciones de Tensión no Cuantificadas** | Seguimiento en tiempo real de los cambios de geometría (p. ej., **radios de acuerdo, chaveteros**) y su efecto sobre la **sensibilidad a la entalla**. |
| **Uso Inadecuado de la Tensión Nominal** | Transición automatizada desde la **tensión nominal** bruta hasta los **límites de resistencia del componente** corregidos (incorporando factores de tamaño y rugosidad superficial). |
| **Criterios de Liberación Ambiguos** | Identificación clara de Apto/No Apto que señala qué **secciones críticas del eje requieren rediseño** antes de liberar a fabricación. |

---

## Por Qué Construí Esta Herramienta de Diseño de Ejes de Ingeniería Mecánica

Los cálculos DIN 743 rara vez son difíciles por las matemáticas. Se vuelven difíciles porque el proceso de razonamiento del diseño mecánico se fragmenta entre notas manuscritas, fórmulas aisladas, juicio de ingeniería y supuestos de resistencia estática no documentados.

Vi repetidamente revisiones de diseño en las que ingenieros llegaban a conclusiones diferentes usando exactamente las mismas cargas cíclicas y restricciones dimensionales. El fallo normalmente no era computacional; era analítico.

Alguien olvidó un factor de concentración de tensiones (Kt). Alguien usó tensiones nominales directamente contra los límites de fatiga del material sin la corrección adecuada. Alguien copió una fórmula de una hoja antigua sin validar si los supuestos de carga dinámica subyacentes seguían aplicándose.

La consecuencia era predecible:

* Los diseños mecánicos conservadores se volvían innecesariamente caros.
* Modelos de ejes al límite pasaban la revisión de calidad sin ser detectados.
* La verificación estructural pasaba a depender del conocimiento tribal individual en lugar de un proceso organizativo auditable.

Este libro de trabajo convierte el razonamiento contenido en la norma DIN 743 en un producto. En lugar de tratar la verificación de fatiga del eje como un ejercicio de cálculo puntual, transforma la norma en un marco de decisión reutilizable.

### Un Ejemplo Práctico: Tensión Nominal vs. Corregida

**Antes**
Un diseñador de CAD compara una tensión de flexión nominal de 185 MPa directamente con un límite de fatiga del material de 210 MPa y concluye que el diseño es aceptable.

**Después**
La herramienta de cálculo aplica automáticamente los efectos de geometría, la sensibilidad a la entalla, las correcciones por tamaño y los factores de influencia superficial. El límite de resistencia corregido baja a 168 MPa.

La conclusión cambia de inmediato:

```text
Original Decision:
PASS

Corrected Decision:
FAIL → Redesign Required
```

---

## Acerca de

Construyo rastreadores ligeros y herramientas de apoyo a la decisión para situaciones con demasiadas piezas en movimiento como para mantenerlas de forma fiable en la cabeza de una sola persona.

La pregunta que guía estas herramientas es sencilla:

> **¿Qué información necesita existir en un solo lugar para que la siguiente decisión pueda tomarse con confianza?**

Esta calculadora de ejes DIN 743 es un ejemplo de ese enfoque: convertir razonamiento de ingeniería probado en un activo operativo reutilizable en lugar de otra hoja de cálculo aislada.

---

## Detalles Técnicos

<details>
<summary>Para revisores técnicos, practicantes de Excel y colaboradores</summary>

---

### Arquitectura del Libro de Trabajo

| Hoja        | Propósito                                              |
| ----------- | ------------------------------------------------------ |
| GUIDE       | Instrucciones de uso, alcance, control de versiones, exención de responsabilidad |
| INPUT       | Punto de entrada editable único                        |
| REFERENCE   | Base de datos de materiales y parámetros DIN            |
| CALCULATION | Motor de cálculo protegido                             |
| RESULTS     | Panel de seguridad y evaluación APTO/NO APTO           |
| REPORT      | Salida de informes estandarizada                       |

#### Flujo de Datos

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

La validación ocurre en INPUT.

Las salidas dependen exclusivamente de los resultados de CALCULATION.

No se permiten referencias circulares.

---

### Tres Trampas que Atrapan Incluso a Ingenieros Mecánicos Experimentados

---

#### Trampa 1: Comparar la Tensión Nominal Directamente con los Límites de Fatiga del Material

Se tomó una decisión:

```
185 MPa < 210 MPa
PASS
```

Supuesto defectuoso:

Las tensiones nominales representan la capacidad de fatiga real.

Por qué es incorrecto:

Los límites de resistencia del material deben ajustarse por los efectos del componente.

Enfoque corregido:

```
σWK = (σW × Kd × KF) / β
```

Resultado corregido:

```
Corrected endurance limit:
168 MPa

185 MPa > 168 MPa

FAIL
```

<details>
<summary>Referencia de Fórmulas</summary>

```excel
=(Sigma_W * Kd * KF) / Beta
```

</details>

---

#### Trampa 2: Ignorar los Efectos de la Geometría

Decisión:

Aumentar ligeramente el diámetro del eje.

Supuesto defectuoso:

Los pequeños cambios de geometría tienen una influencia despreciable.

Por qué es incorrecto:

Los radios de acuerdo y las ranuras alteran significativamente la concentración de tensiones.

Enfoque corregido:

Evaluar los factores α y β.

Resultado:

Un radio de acuerdo mayor mejoró la seguridad a fatiga al reducir la severidad de la entalla.

<details>
<summary>Referencia de Fórmulas</summary>

```excel
Beta = 1 + q*(Alpha-1)
```

</details>

---

#### Trampa 3: Tratar la Flexión y la Torsión de Forma Independiente

Decisión:

Ambos factores de seguridad superan los límites de forma individual.

Supuesto defectuoso:

La aceptación individual garantiza la aceptación del sistema.

Por qué es incorrecto:

La carga combinada gobierna el comportamiento a fatiga.

Enfoque corregido:

Usar una evaluación de seguridad combinada.

Resultado:

Condiciones APTO individuales se convirtieron en NO APTO combinado.

<details>
<summary>Referencia de Fórmulas</summary>

```excel
S=(Sb*St)/SQRT(Sb^2+St^2)
```

</details>

---

### Escenario de Ejemplo

Se evalúa una sección de vástago de válvula usando:

| Parámetro                        |        Valor |
| ---------------------- | -----------: |
| Material               |       17-4PH |
| Diámetro               |        40 mm |
| Radio de Acuerdo          |         2 mm |
| Momento Flector         | 450,000 N·mm |
| Par                 | 180,000 N·mm |
| Factor de Servicio         |         1.25 |
| Factor de Seguridad Requerido |         1.50 |

Cálculos intermedios:

```text
Wb = πd³/32
Wp = πd³/16

σb = Mb×KA/Wb
τt = T×KA/Wp
```

Después de aplicar:

* la sensibilidad a la entalla,
* las correcciones de geometría,
* los efectos de tamaño,
* los factores de influencia superficial,

el factor de seguridad a fatiga combinado resulta:

```text
S = 1.38
```

Interpretación:

```
Required:
S ≥ 1.50

Actual:
S = 1.38
```

Recomendación:

Aumentar el diámetro, modificar la geometría, reducir las cargas o reconsiderar la selección del material antes de liberar.

Implicación de la decisión:

El eje no debe pasar a fabricación bajo los supuestos de diseño actuales.

---

### Referencia de Fórmulas

<details>
<summary>Propiedades de la Sección</summary>

```excel
Wp = PI()*(d^3)/16
Wb = PI()*(d^3)/32
```

Propósito:

Calcular los módulos resistentes a torsión y a flexión.

</details>

<details>
<summary>Tensión Nominal</summary>

```excel
σb=(Mb×KA)/Wb
τt=(T×KA)/Wp
```

Propósito:

Calcular las tensiones nominales.

</details>

<details>
<summary>Efectos de Entalla</summary>

```excel
β=1+q×(α−1)
```

Propósito:

Convertir la concentración geométrica en influencia sobre la fatiga.

</details>

<details>
<summary>Límites de Resistencia Corregidos</summary>

```excel
σWK=(σW×Kd×KF)/β
τWK=(τW×Kd×KF)/β
```

Propósito:

Determinar la capacidad de fatiga del componente.

</details>

<details>
<summary>Seguridad Combinada</summary>

```excel
S=(Sb×St)/SQRT(Sb^2+St^2)
```

Propósito:

Evaluar la aceptabilidad final.

</details>

---

### Reglas de Validación

| Campo                 | Regla                            | Comportamiento ante Error              |
| --------------------- | ------------------------------- | --------------------------- |
| Nombre del Proyecto          | Obligatorio                        | Impide la finalización          |
| ID de Material           | Debe existir en la biblioteca           | Rechaza la entrada no válida        |
| Diámetro              | Mayor que cero               | Advertencia de validación          |
| Radio                | Positivo y menor que el diámetro | Advertencia de validación          |
| Momento Flector        | ≥ 0                             | Rechaza entradas negativas          |
| Par                | ≥ 0                             | Rechaza entradas negativas          |
| Factor de Servicio        | 1.00–3.00                       | Impide la entrada no válida       |
| Factor de Seguridad Mínimo | 1.20–5.00                       | Impide la entrada no válida       |
| Datos de Referencia        | Controlados por el administrador        | Ocultos y protegidos        |
| Motor de Cálculo    | Solo lectura                       | Impide sobrescribir fórmulas |

</details>

---

## Otras Herramientas de Esta Serie

* **Budget Control Console** — compara presupuestos planificados, compromisos y gasto restante.
* **Logistics Operations Dashboard** — sigue la ejecución de envíos entre entidades.
* **Service Operations Tracker** — estandariza la ejecución y el reporte de equipos de campo.

Más herramientas: [Visita Nuestro Sitio Web](https://www.theseusworkshop.com/)

---

## Licencia

Este proyecto está licenciado bajo la **Licencia Apache 2.0**.

Eres libre de usar, modificar y distribuir este trabajo de acuerdo con los términos de la Licencia Apache 2.0.

