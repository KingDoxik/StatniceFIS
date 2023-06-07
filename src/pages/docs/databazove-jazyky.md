---
title: Databázové jazyky
description: Quidem magni aut exercitationem maxime rerum eos.
---

## Základní pojmy

- **Data:** Formalizované a fyzicky zaznamenané znalosti, poznatky, zkušenosti, výsledky pozorování.
- **Informace:** Smysluplná interpretace dat.
- **Databáze:** Integrovaná počítačově zpracovaná množina persistentních dat.
- **Relační model dat:** Založený na predikátové logice prvního řádu, k manipulaci s daty možno použít relační kalkul nebo operace relační algebry.
- **Dotazovací jazyk:** Slouží pro získání dat z databáze; v relační databázi je odpovědí relace, jejíž n-tice splňují nadefinované podmínky.
- **Systém řízení bází dat (SŘBD):** Množina programových prostředků, která umožňuje: vytvoření databáze, použití databáze (manipulace s daty - výběr, vkládání, aktualizace, mazání) a údržbu a správu databáze.
- **Databázový systém (DBS):** SŘBD + databáze.

## Databázový jazyk SQL

Standardizovaný dotazovací jazyk používaný pro práci s daty v relačních databázích. SQL je zkratkou anglických slov Structured Query Language (strukturovaný dotazovací jazyk).

## PL/SQL

Procedural Language / Structured Query Language je procedurální nadstavba jazyka SQL od firmy Oracle založená na programovacím jazyku Ada. Pomocí PL/SQL je možné vytvářet:

- Uložené procedury a funkce.
- Programové balíky.
- Triggery.
- Uživatelsky definované datové typy.

Tato nadstavba se rozšířila a její deriváty převzaly i jiné relační databáze.

## OQL

Object Query Language (OQL) je standardizovaný dotazovací jazyk pro objektově-orientované databáze vytvořený podle SQL. OQL byl vyvinut Object Data Management Group (ODMG). Kvůli jeho komplexitě zatím žádný výrobce neimplementoval OQL v úplnosti. OQL ovlivnil návrh některých novějších dotazovacích jazyků jako JDOQL a EJB QL.

## JPQL

Java Persistence Query Language je platformě nezávislý objektově-orientovaný dotazovací jazyk definovan

ý jako součást specifikace Java Persistence API (JPA). JPQL se používá k dotazování se na entity uložené v relační databázi. Je silně inspirován SQL a má podobnou syntaxi.

## XQuery

XQuery je dotazovací a funkcionální programovací jazyk navržený pro dotazování na kolekce dat v XML. XQuery poskytuje prostředky pro extrahování a manipulaci dat z XML dokumentů nebo jakéhokoli datového zdroje, který může být jako XML zobrazen, například relační databáze nebo některé dokumenty (např. OpenOffice, MS Office 2007,...).
