---
title: Principy a aplikace objektového paradigma
description: Quidem magni aut exercitationem maxime rerum eos.
---

### Objekt

- Abstrakce z reality
- Spojení dat a činností
- Data jsou údaje, proměnné nebo datové atributy
- Činnosti jsou metody, které s daty pracují

### Obecné objektové vlastnosti

- Používání abstrakce
- Definování tříd objektů
- Existence objektů (instancí)
- Komunikace mezi objekty (zprávy, volání metod)
- Zapouzdření a skrytí implementace
- Dědičnost
- Polymorfismus

### Abstrakce

- Základní vlastnost objektů
- Zjednodušení skutečnosti při programování
- Práce s důležitými daty

### Třída a instance

- Třída je obecný popis objektu
- Obsahuje datové atributy (popisují stav objektu) a metody (definují činnosti)
- Objekty s podobnými vlastnostmi jsou sdružovány do tříd
- Objekt je instance třídy
- Třída umí vytvořit instanci (je "formou" pro vytváření instancí)
- Každá instance je obrazem reálného objektu
- Instance se vytvářejí pomocí konstruktoru
- Datové atributy jsou informace o každé instanci
- Metody jsou činnosti, které lze s instancemi provádět

### Komunikace - volání metod, posílání zpráv

- Aplikace obsahuje několik tříd
- Vytvářejí se instance těchto tříd a volají se jejich metody

### Zapouzdření

- Vlastnosti a schopnosti souvisejícího objektu jsou spojeny
- Kód a zpracovaná data jsou sdruženy
- Skrývání implementace zvyšuje bezpečnost a robustnost
- Usnadňuje budoucí modifikace
- Objekt rozhoduje o svém stavu, datové atributy nejsou přístupné zvenku

### Ukrývání implementace

- `private`: Přístupné pouze z metod instance
- Bez uvedení modifikátoru: Přístupné v rámci balíčku
- `protected`: Přístupné v rámci balíčku a potomků v dědičné hierarchii
- `public`: Přístupné z jakékoli jiné třídy

### Dědičnost

- Forma znovupoužitelnosti
- Potomek absorbuje atributy a dědí metody od předka
- Potomek může mít vlastní potomky, vzniká hierarchie tříd

### Polymorfismus

- Různý kód se provádí při stejném volání

- Závisí na parametrech a objektu, kterému je zpráva předána
