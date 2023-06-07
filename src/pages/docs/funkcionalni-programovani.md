---
title: Prvky funkcionálního programování aplikované např. v Javě
description: Quidem magni aut exercitationem maxime rerum eos.
---

## Funkcionální programování

Funkcionální programování je paradigma, které se zaměřuje na vytváření programů pomocí funkcí a jejich manipulace. Na rozdíl od imperativního programování, kde je důraz kladen na změnu stavu a sekvenci instrukcí, se ve funkcionálním programování klade důraz na výpočetní procesy vykonávané pomocí vyhodnocování funkcí.

### Hlavní rysy funkcionálního programování:

1. **Čisté funkce**: Funkce ve funkcionálním programování jsou čisté, což znamená, že pro stejný vstup vrací vždy stejný výstup a nemají žádné vedlejší efekty. To usnadňuje testování a zlepšuje předvídatelnost programu.

2. **Bezměnnost**: Data ve funkcionálním programování jsou nezměnitelná, což znamená, že nemohou být přímo modifikována. Namísto toho se vytvářejí nové instance dat s každou změnou. To zvyšuje odolnost proti chybám a usnadňuje paralelní zpracování.

3. **Rekurze**: Rekurze je častým prvkem funkcionálního programování. Funkce se často volají navzájem, čímž umožňují elegantní způsob řešení problémů.

4. **Vysoká úroveň abstrakce**: Funkcionální programování se snaží poskytnout vyšší úroveň abstrakce, což umožňuje programátorům se soustředit na samotný problém a ne na implementační detaily.

### Výhody funkcionálního programování:

- **Čitelnost a srozumitelnost**: Funkcionální programování se zaměřuje na vyjádření programu pomocí funkcí, což může vést k srozumitelnějšímu a čitelnějšímu kódu.

- **Snazší testování**: Čisté funkce, které nemají vedlejší efekty, jsou snadněji testovatelné, protože jejich výstup závisí pouze na vstupu.

- **Bezpečnost**: Funkcionální programování podporuje nezměnitelnost dat a minimalizaci vedlejších efektů, což vede k bezpečnějším a robustnějším programům.

- **Paralelní zpracování**: Funkcionální programování dává důraz na nezměnitelnost dat, což umožňuje snadnější paralelní zpracování a využívání vícejádrových systémů.

- **Modularita**: Funkcionální programování podporuje modulární přístup k programování, kdy funkce mohou být jednoduše kombinovány a znovupoužívány.

Funkcionální programování nabízí různé výhody, které mohou zlepšit produktivitu programátorů a kvalitu výsledného kódu. Je však důležité si uvědomit, že ne všechny problémy jsou nejlépe řešitelné pomocí tohoto paradigmatu a správná volba paradigmatu závisí na konkrétním problému a kontextu.

## Lambda funkce v Javě

Lambda kalkul je formální systém, který se používá pro popis výpočtů a manipulaci s funkcemi. Při práci s lambda kalkulem se nepracuje s objekty, ale s funkcemi samotnými. Tento přístup může mít několik výhod:

- **Zpřehlednější kód**: Lambda kalkul umožňuje vyjádřit složité operace pomocí jednoduchých funkcí a operátorů. To zjednodušuje čtení a porozumění kódu.

- **Lepší čitelnost**: V některých situacích můžeme využít lambda kalkul k nahrazení několika zbytečných řádků kódu jednoduchým a srozumitelným výrazem.

Lambda kalkul se skládá ze tří základních prvků:

1. **Proměnná**: Proměnná reprezentuje nějakou hodnotu, kterou můžeme použít v rámci výrazu.

2. **Aplikace**: Aplikace je operace, která umožňuje aplikovat funkci na určitý argument. Můžeme tak kombinovat funkce a provádět výpočty.

3. **Abstrakce**: Abstrakce je způsob definice nové funkce. Umožňuje nám vytvořit novou funkci, která závisí na jedné nebo více proměnných.

Použití lambda kalkulu může vést k zjednodušení a zkrácení kódu a zlepšení jeho čitelnosti v situacích, kdy bychom jinak museli použít více řádků kódu pro dosažení stejného výsledku.
