---
title: Základy webových informačních technologií
description: Quidem magni aut exercitationem maxime rerum eos.
---

# Webové stránky a vývoj aplikací

Webové stránky byly původně navrženy pro sdílení statických dokumentů. Nicméně dnes je možné na webu vytvářet různé aplikace a pozorujeme trend směrem k nové platformě pro vývoj aplikací.

Existují některé výhody tohoto přístupu. Web má velký rozsah a aplikace nemusí být instalovány na straně klienta. To znamená, že uživatelé mohou přistupovat k aplikacím přímo prostřednictvím svých prohlížečů.

Nicméně vývojář musí mít znalosti několika technologií, jako je HTTP, HTML, CSS, PHP, JavaScript a další. Tyto technologie jsou potřebné pro správnou tvorbu webových aplikací.

Přístupy k tvorbě dynamických webových stránek se liší. Některé části aplikace běží přímo v prohlížeči pomocí jazyků jako JavaScript nebo Visual Basic Script. Jiné části aplikace běží na serveru pomocí jazyků jako PHP, ASP nebo CGI. Nejčastěji se však používá kombinace obou technologií.

Na straně klienta lze využít rozšiřující klientské technologie, které přinášejí výhody jako interaktivní stránky a rychlou odezvu. Například pomocí JavaScriptu lze provádět kontrolu dat z formulářů přímo v prohlížeči, aniž by bylo nutné odesílat data na server. To snižuje zátěž serveru a zrychluje komunikaci.

Přesto existují i nevýhody. Klientské technologie nelze vždy spoléhat na 100% a důležité a citlivé operace by měly být prováděny na straně serveru. Klientské technologie lze vypnout nebo blokovat a podpora pro tyto technologie se může lišit mezi různými prohlížeči. Některé technologie také mohou neoprávněně manipulovat s daty na počítači klienta.

Teoreticky lze použít libovolný jazyk pro vývoj webových aplikací, ale nejpoužívanějším jazykem je JavaScript. Existují také varianty JavaScriptu, jako je TypeScript nebo CoffeeScript, které se transpilují do čistého JavaScriptu. Některé prohlížeče také podporují jiné jazyky, jako je VBScript nebo Python, ale ty jsou méně rozšířené.

Na straně serveru se generuje dynamické HTML na z

ákladě požadavků uživatele. Klientovi je pak odeslán čistý HTML kód. Nemusí být potřeba žádný speciální prohlížeč, stačí prohlížeč s základní podporou HTML. V případě potřeby lze na serveru generovaných stránkách použít také klientské technologie, jako je JavaScript.

Pro udržování stavové informace při komunikaci mezi klientem a serverem je třeba řešit omezení HTTP protokolu. HTTP je bezstavový protokol, což znamená, že každý požadavek je nezávislý a nemá souvislost s předchozími požadavky. To může být problém pro webové aplikace, které vyžadují uchování stavu, například pro nákupní košík nebo přihlášení.

Existují různá řešení pro udržování stavu. Údaje mohou být přenášeny v URL adrese nebo skrytých polích formulářů. Lze také využít cookies, které server ukládá do prohlížeče. Další možností jsou session proměnné, které každému uživateli přiřadí unikátní identifikátor. Web Storage poskytuje úložiště dat na straně klienta, ale neřeší problém identifikace klienta na serveru.

Existuje také několik technologií a jazyků pro serverovou stranu, jako jsou Server Side Includes (SSI), PHP, Java Server Pages (JSP), Active Server Pages (ASP) a ASP.NET. Tyto technologie umožňují generování dynamického obsahu na straně serveru.

Vývoj webových aplikací často vyžaduje správu relace a udržování informací o relaci s uživatelem. Zde se setkáváme s omezeními protokolu HTTP.

Protokol HTTP je bezstavový, což znamená, že server nemá stálé spojení s klientem a nemůže je jednoznačně identifikovat. To způsobuje komplikace pro webové aplikace, které potřebují uchovávat stavové informace, jako například obsah nákupního košíku nebo přihlášení uživatele.

Existuje několik způsobů, jak řešit tuto situaci:

1. Přenášení údajů v URL a skrytých polích formulářů: Údaje, které mají být uchovány mezi požadavky, lze přenést v URL adrese nebo využít skrytá pole ve formulářích.

2. Použití cookies: Server může uložit krátké informace, tzv. cookies, v prohlížeči klienta. Tyto cookies se přenášejí mezi klientem a serverem s každým požadavkem a umožňují uchovávání stavových informací.

3. Session proměnné: Každému uživateli je přiřazen unikátní identifikátor relace, tzv. session ID. Server uchovává informace o stavu relace pomocí těchto session proměnných.

4. Web Storage: Jedná se o úložiště dat na straně klienta, které umožňuje ukládání informací na straně klienta. Nicméně, neřeší problém identifikace klienta na serveru.

Při vývoji webových aplikací je důležité zvážit, který z těchto přístupů nejlépe vyhovuje konkrétním potřebám aplikace a zabezpečitelnosti dat. Každý z nich má své výhody a omezení.

Je také možné využít kombinaci technologií na straně serveru a na straně klienta. Tím lze dosáhnout vyváženého a efektivního vývoje webových aplikací, které poskytují interaktivitu, rychlou odezvu a udržují si správu stavu mezi požadavky uživatele.
