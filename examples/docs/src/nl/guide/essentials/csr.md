---
titleSuffix: Handleiding voor client-side rendering in het Gez-framework
description: Gedetailleerde uitleg over het client-side rendering-mechanisme van het Gez-framework, inclusief statische bouw, implementatiestrategieën en best practices, om ontwikkelaars te helpen efficiënte front-end rendering te realiseren in een serverloze omgeving.
head:
  - - meta
    - property: keywords
      content: Gez, client-side rendering, CSR, statische bouw, front-end rendering, serverloze implementatie, prestatieoptimalisatie
---

# Client-side rendering

Client-side rendering (CSR) is een techniek waarbij de rendering van pagina's in de browser plaatsvindt. In Gez kun je, wanneer je applicatie niet op een Node.js-server kan worden geïmplementeerd, kiezen voor het genereren van een statisch `index.html` bestand tijdens de bouwfase, waardoor pure client-side rendering mogelijk wordt.

## Gebruiksscenario's

De volgende scenario's zijn geschikt voor client-side rendering:

- **Statische hostingomgevingen**: zoals GitHub Pages, CDN's en andere hostingdiensten die server-side rendering niet ondersteunen
- **Eenvoudige applicaties**: kleine applicaties waarbij de laadsnelheid van de eerste pagina en SEO niet cruciaal zijn
- **Ontwikkelomgeving**: voor snelle preview en debugging tijdens de ontwikkelingsfase

## Configuratie-uitleg

### HTML-sjabloonconfiguratie

In de client-side rendering-modus moet je een algemeen HTML-sjabloon configureren. Dit sjabloon dient als container voor de applicatie en bevat de nodige resource-referenties en mount-points.

```ts title="src/entry.server.ts"
import type { RenderContext } from '@gez/core';

export default async (rc: RenderContext) => {
    // Verzamel afhankelijkheden
    await rc.commit();
    
    // Configureer HTML-sjabloon
    rc.html = `
<!DOCTYPE html>
<html>
<head>
    ${rc.preload()}           // Preload resources
    <title>Gez</title>
    ${rc.css()}               // Injecteer stijlen
</head>
<body>
    <div id="app"></div>
    ${rc.importmap()}         // Importmap
    ${rc.moduleEntry()}       // Ingangsmodule
    ${rc.modulePreload()}     // Module preload
</body>
</html>
`;
};
```

### Statische HTML-generatie

Om client-side rendering in een productieomgeving te gebruiken, moet je tijdens de bouwfase een statisch HTML-bestand genereren. Gez biedt een `postBuild` hook-functie om deze functionaliteit te realiseren:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    async postBuild(gez) {
        // Genereer statisch HTML-bestand
        const rc = await gez.render();
        // Schrijf HTML-bestand
        gez.writeSync(
            gez.resolvePath('dist/client', 'index.html'),
            rc.html
        );
    }
} satisfies GezOptions;
```