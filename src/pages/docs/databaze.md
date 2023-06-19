---
title: Analýza, návrh a realizace databáze + datove modelovani
description: Quidem magni aut exercitationem maxime rerum eos.
---

## Obecné pojmy

Databáze je organizovaný systém souborů pro ukládání dat. Tyto soubory jsou mezi sebou navzájem
propojeny. V širším smyslu jsou součástí databáze i softwarové prostředky, které umožňují manipulaci
s uloženými daty a přístup k nim. Tento software se v české odborné literatuře nazývá systém řízení
báze dat. Běžně se označením databáze myslí jak uložená data, tak i software.

## Dělení databází podle typu

[Hezké Fireship video co popisuje jednotlivé typy databází](https://www.youtube.com/watch?v=W2Z7fbCLSTw).

Databáze se dají dělit podle typu a způsobu ukládaní dat na 3 hlavní kategorie.

### Relační databáze

Nejčasteji používaný typ databází. Data jsou modelována pomocí relačního modelu, tedy tabulek s fixní strukturou jednotlivých záznamů, které jsou navzájem propojené pomocí relací.  V tomto typu databáze se používá relační model, což je giga based matematickej koncept ze 70 let, který je tvořen množinami (tabulkami), přičemž každá tabulka má svůj primární klíč (jeden nebo více atributů - composite primary key). Dále je tu koncept normalizace, který určuje pravidla, podle kterých databáze spadá do jedné z 5 normovaných form více viz kapitola o normalizaci.

### NoSQL databáze

NoSQL databáze nepoužívají tabulkové struktury, normalizaci a SQL (no shit), namísto toho jsou tvořeny tzv. kolekcemi, ve který jsou uložené dokumenty. Dokument je většinou komplexní objekt tvořený mnoha dílčími podobjekty. Často se pro ukládání/načítání používá JSON nebo jeho efektivnější binární verze BSON. Nejpoužívánější NoSQL databází je MongoDB, CouchDB, Firebase/Firestore nebo Amazon DynamoDB.

Výhodou oproti relačním databázím je možnost horizontálního škálování (přidání více malých serverů) naproti vertikálnímu škálování u relačních databází (zvýšení výkonu jednoho serveru).

### Specializované Databáze

Poslední, velice obecnou kategorií jsou specializované databáze. Jedná se často o databáze, které řeší nějaký konkrétní problém a nehodí se pro obecné use cases jako RDBMS nebo NoSQL. Mezi nejvýznamnější podtypy patří například: Graph Databases (databáze co nativně podporují grafové struktury pro modelování komplexních sítí) - například Neo4J, Key-Value databáze, které ukládají vždy jednu hodnotu pro daný klíč - například Redis, Memcached. Key-Value se většinou používá jako cache nad “tradiční” databází spíš než jako přímo databáze samotná.

## Konceptuální schéma

(„nezávislý“) model obsahu datové základny na konceptuální úrovni (tj. nezatížený jakýmikoliv implementačními a technologickými implementacemi)

- konceptuální schéma reality – hrubý model vytvořený za účelem poznání reality
- konceptuální schéma dat (datový model) – za účelem přesné specifikace obsahu datové základny. Předběžný návrh databázové základny
- Funkce konceptuálního schématu:
  o Zadání pro implementační fázi
  o Nástroj (záruka) pro zachování konsistence
  o Lze z něj odvozovat dílčí pohledy na obsah databáze
  o Východisko pro nové požadavky na data
  o Východisko pro zásahy do existující datové základny
  o Nástroj dokumentace
  Logický model
  Popis způsobu realizace systému v termínech jisté třídy technologického prostředí (lineární, relační, hierarchické, síťové datové struktury) Např. u RDM – doplnění cizích klíčů
  Fyzický model
  Popis vlastní realizace systému v konkrétním implementačním prostředí (doplnění i typu indexu, velikosti, rozmístění pracovního prostoru apod.)
  Využívá se taktéž metoda normalizace dat

Všechny RDBMS by měly být **ACID**:
- **A**tomicity defines all the elements that make up a complete database transaction
- **C**onsistency defines the rules for maintaining data points in a correct state after a transaction
- **I**solation keeps the effect of a transaction invisible to others until it is committed, to avoid confu-
sion
- **D**urability ensures that data changes become permanent once the transaction is committed.

### Návrh databáze

Spočívá v určení entit (tabulek), klíčů (referenční integrita), vztahů (relace), dodržení normálních forem, indexů. Pro zajištění kvality návrhu relační databáze se používá normalizace, podle které se databáze řadí do jedné z pěti normalních forem.

### Normalizace
Normalizace je technika používaná při návrhu relačních databází tak, aby byla v souladu s takzvanými normálními formami, nedocházelo k duplicitě dat a byla zajištěna jejich konzistence. Rozlišujeme celkem 5 normálních forem, čím vyšší stupeň normalizace, tím větší lze klást na databázi
záruky ohledně redundance a konzistence dat.

[Hezký video o normalizaci](https://www.youtube.com/watch?v=GFQaEYEc8_8).

#### 1NF - první normální forma

V databázi existují pouze tabulky, které obsahují atributy, které jsou dále nedělitelné a každá tabulka obsahuje primární klíč, pomocí kterého je možné identifikovat konkrétní záznam.
 
#### 2NF - druhá normální forma

1NF + každý atribut co není (součástí) primárního klíče musí být na klíči závislý. Tj. pokud by byla tabulka s galerií a u každé galerie byl uložen kromě ID autora i počet všech jeho galerií, tak se jedná o porušení 2NF, protože tento atribut je závislý na ID uživatele a nikoliv na ID galerie, což je primární
klíč této tabulky.

Fancy slovíčko pro dělení tabulek aby všechny atributy byly závislý pouze na primárním klíči je **dekompozice**.

#### 3NF - třetí normální forma

2NF + tabulka neobsahuje tranzitivní závislosti. Tj. neukládá atributy tabulek se kterými má vztah. V případě galerie by 3NF porušilo, pokud by se ke galerii ukládalo kromě ID autora i username. Protože username je tranzitivní závislost Galerie → Uzivatel → Username.

#### BCNF - Boyceho–Coddova normální forma

Upravená verze 3NF, která navíc přidává 2 podmínky:
- v relaci nesmí existovat více kandidátních klíčů
- neexistuje takový atribut, který je společný pro všechny kandidátní klíče

#### 4NF - čtvrtá normální forma

BCNF + všechny relace jsou modelovány přes cizí klíče a neukládají se v tabulce jako hodnoty, pokud je vícero závislostí.

#### 5NF - pátá normální forma

Ultimátní forma databáze, tabulku nelze dále rozdělovat. Všechno je rozdělený na nejmenší možný celky.

### Datové modelování – činnosti

- Rozlišení množin objektů (entitních množin)
- Pojmenování entitních množin a identifikace entit
- Rozlišení entitních podmnožin (zaměstnanec – učitel, vědec, administrátor, zaměstnanec)
- Určení vztahů mezi entitními množinami, určení kardinality (počet) a parciality (volitelnost) vztahů
- Určení atributů entitních množin a vztahů
- Vyřešení problémů synonym a homonym
  Data v tabulce jsou uložena v polích uspořádaných do řádků (= záznamy) a sloupců (= atributy)

### Transformace do relačního modelu dat

- Entity → tabulky
- Atributy → sloupce
- 1:N vztahy → FK
- M:N vztahy → asociativní tabulky
- identifikátory → PK
- volitelnost → (povolené hodnoty null FK)
- povinnost → (not null FK)

### Pravidla transformace konceptuálního schématu do relačního modelu dat

- Entitní množina → 1 tabulka, identifikátory => atributy tvořící PK tabulky
- Vztah je vyjádřen cizím klíčem
  o Jaká varianta je vhodnější pro transformaci vztahu 1:1?
- Vztah M:N je vyjádřen vazební relační tabulkou s dvěma FK
- Generalizace / specializace – více variant
  o 1 relační tabulka
  o Relačními tabulkami na úrovni specializovaných entitních množin
  o Relačními tabulkami na úrovni generalizující entitní množiny i na úrovní specializovaných entitních množin

## Základní pojmy

- entita: typ objektů, ať už konkrétních (osoby, místa, věci) či abstraktních (katalogové položky, kategorie), natolik důležitých v dané realitě, že se o takových objektech mají vést záznamy
- objekt: jiné označení pro entitu
- atribut: vlastnost nebo charakteristika objektu nebo vztahu v datovém modelu (např. jméno a příjmení zaměstnance)
- vztah: pojmenovaná spojitost mezi entitami
- kardinalita: četnost vazby; nabývá hodnot 1:1, 1: N, M:N
- parcialita: volitelnost vztahu mezi entitami

ER (Entity Relationship) modelování se používá pro abstraktní a konceptuální znázornění dat. Spočívá ve využití základních konstruktů jazyka pro tvorbu diagramů a v metodice tvorby těchto diagramů – základní myšlenkou je, že databáze uchovává fakta o entitách a o vztazích mezi entitami. Výsledkem je ERD (Entity Relationship Diagram, ER diagram).

### Zásady

- Minimalizace redundance (normalizace)
- Maximalizovat znovupoužitelnost (dědičnost)
- Maximalizovat výkonnost (de-normalizace, metody, database tuning)
- Minimalizovat nároky na uložení dat (compression)

## P3A – princip tří architektur

Smyslem P3A je postupně upřesňovat datový model tak, aby zcela odpovídal požadavkům využívané databázové technologie. Stejně tak je naopak žádoucí, aby model v první vrstvě byl, pokud možno, abstraktní a tech. nezávislý.

## Konceptuální – model reality

- Model obsahu datové základny na konceptuální úrovni (tj. nezatížený jakýmikoliv implementačními a technologickými implementacemi)
  -- KSR – model obsahující základní entitní množiny, vztahy a jejich atributy. Jedná se .o hrubý model vytvořený za účelem poznání zkoumané reality.
  -- KSD – popis obsahu datové základny za účelem přesné specifikace obsahu datové základny. Předběžný návrh datové základny

## Logický (technologický)

Popis způsobu realizace systému v termínech jisté třídy technologického prostředí (lineární, relační, hierarchické, síťové datové struktury) Např. u RDM – doplnění cizích klíčů. Při transformaci do relační se řídí pravidly:

- Každá entitní množina je transformována do jedné relační tabulky. Identifikátory entitní množiny se stanou atributy tvořícími primární klíč relační tabulky.
- Vztah z konceptuálního modelu je v relačním modelu vyjádřen cizím klíčem
- Vztah M:N z konceptuálního modelu je v relačním modelu vyjádřen vazební relační tabulkou a dvěma cizími klíči.
- Generalizace / specializace je transformována do relačního modelu dat několika variantami:
  -- jednou relační tabulkou na úrovni celé hierarchie,
  -- relačními tabulkami na úrovni specializovaných entitních množin,
  -- relačními tabulkami na úrovni generalizující entitní množiny i na úrovni specializovaných entitních množin.
- Využívá se taktéž metoda normalizace dat
  -- Cíle:
  --- vytvořit co nejvěrnější obraz v modelovaném světě existujících entitních množin
  --- zajistit interní konzistenci datového modelu, resp. databáze,
  --- minimalizovat redundance
  --- maximalizovat stabilitu datových struktur
  -- Sada normálních forem (první, druhá, třetí, boyce/codd, čtvrtá, pátá).

## Fyzický (implementační)

Popis vlastní realizace systému v konkrétním implementačním prostředí (doplnění i typu indexu, velikosti, rozmístění pracovního prostoru apod.). Je dán

- Způsobem uložení dat
  -- Sekvenční = Sekvenční způsob uložení dat není využíván pro uložení dat v databázových systémech. Bývá používán pro zálohování databázových souborů.
  -- Přímé = hodnotě primárního klíče jednotlivých záznamů je přiřazena (vypočtena) určitým algoritmem (hashing algorithm) adresa uložení záznamu na paměťovém médiu
- Způsobem přístupu k datům
  -- Sekvenční
  -- Přímé
  -- S využitím dalších mechanismů (řetězení, indexy)

## Metodologie konceptuálního návrhu databáze

Cíl: vytvořit ER (Entity Relationship) model datových požadavků organizace (nebo části organizace), kterou má databáze podporovat. Každý ER model obsahuje:

- entity
- relace
- atributy a domény atributů
- primární klíče a alternativní klíče
- integritní omezení

## Jednotlivé úkoly

- Identifikace entit: Identifikace a dokumentace hlavních entit v organizaci.
- Identifikace relací: Identifikace důležitých relací mezi entitami, které byly zjištěny v předcházejícím kroku. Určení omezení multiplicity těchto relací. Dokumentace relací. Použijte ER modelování, pokud je to potřebné.
- Identifikace atributů a spojení atributů s entitami nebo relacemi: Spojení atributů s odpovídajícími entitami nebo relacemi. Identifikace jednoduchých/složených atributů, atributů s jedinou hodnotou/atributů s více hodnotami a odvozených atributů. Dokumentace atributů
- Určení domén atributů: Určení domén (=množina hodnot, z níž mohou čerpat své hodnoty jeden nebo více atributů) pro atributy v ER modelu. Dokumentace domén atributů.
- Určení atributů, které budou kandidátními, primárními a alternativními klíči: Určení kandidátního klíče (klíčů), a pokud existuje víc než jeden kandidátní klíč, vybrat mezi nimi primární klíč a určit ostatní jako alternativní klíče. Dokumentace kandidátních, primárních a alternativních klíčů pro každou silnou entitu.
- Specializace/ generalizace entit (volitelný krok): Určení entit nadtříd a podtříd, pokud je to vhodné.
- Kontrola redundance v modelu: Kontrola ER modelu, aby se zjistilo, že se v něm nevyskytuje redundance. Zejména je třeba znovu zkontrolovat relace typu 1:1 a odstranit redundantní relace.
- Kontrola, zda model podporuje uživatelské transakce: Zajistit, aby model ER podporoval transakce požadované uživateli. Prozkoumáme dva způsoby, jak zajistit, aby ER model podporoval požadované transakce: 1) Popis transakce: kontrolujeme potřebné transakce uvedené v zadání, 2) Sledování cest transakcí: reprezentace cest transakcí přímo v ER modelu.
- Posouzení konceptuálního návrhu databáze s uživateli: Posoudit ER model spolu s uživateli, aby se zajistilo, že model je „správnou“ reprezentací datových požadavků organizace.
