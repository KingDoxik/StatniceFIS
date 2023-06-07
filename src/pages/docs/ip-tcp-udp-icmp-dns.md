---
title: Základní protokoly internetu IP, TCP, UDP, ICMP, DNS
description: Quidem magni aut exercitationem maxime rerum eos.
---

# Transportní protokoly

## Protokol IP

Internetový protokol IP je hlavní součástí sady protokolů používaných pro doručování paketů mezi koncovými body v TCP/IP sítích. Existují dvě varianty IP: IP verze 4 (IPv4) a IP verze 6 (IPv6). IP je nezávislý na transportní vrstvě a funguje v různých typech sítí. Byl navržen jako bezstavový, tolerantní k výpadkům a směrovatelný.

### Hlavička IP

Při odesílání TCP nebo UDP dat je k nim připojena IP hlavička obsahující různá pole. Tato pole zahrnují identifikaci zdroje a cíle paketu, použitý formát protokolu IP a další informace. Z těchto 13 polí je nutné vyplnit všechna kromě jednoho.

- Verze
- Délka záhlaví IP
- Typ služby
- Celková délka
- Identifikace
- Příznaky
- Odsazení fragmentu
- Životnost (TTL)
- Protokol
- Kontrolní součet záhlaví
- Zdrojová adresa
- Cílová adresa
- Volby
- Data

## TCP (Transmission Control Protocol)

TCP je spojově orientovaný protokol, který umožňuje otevření spojení klientem nebo serverem a přenášení dat v obou směrech. Hlavní vlastnosti TCP protokolu zahrnují:

- Spolehlivost: TCP používá potvrzování přijetí, opětovné posílání a časové limity k zajištění spolehlivého doručení dat. Pokud dojde ke ztrátě dat během přenosu, server si je znovu vyžádá. TCP minimalizuje ztráty dat a ukončí spojení pouze v případě, že vyprší časový limit vícekrát za sebou.
- Zachování pořadí: TCP zajistí, že data dorazí ve správném pořadí, i když jsou odesílána v různých časových okamžicích. TCP vrstva spravuje doručování a zajišťuje, že data jsou předána aplikaci ve správném pořadí.
- Vyšší režie: TCP vyžaduje tři pakety pro otevření spojení, což zvyšuje režii, ale zajišťuje spolehlivost celého spojení.
- Identifikace aplikací: TCP přenáší data mezi konkrétními aplikacemi. K tomu využívá porty (čísla v rozmezí 0-65535), které

umožňují rozlišení, pro kterou aplikaci jsou data určena. Některé příklady portů jsou FTP (porty 21 a 20), SMTP (port 25), DNS (port 53) a HTTP (port 80).

- Vytváření spojení: TCP vytváří spojení mezi aplikacemi a vytváří virtuální okruh pro obousměrnou komunikaci po dobu trvání spojení.
- Integrita dat: TCP zajišťuje integritu dat pomocí kontrolního součtu, který chrání data před modifikací během přenosu.

### Navázání spojení

Navázání spojení v TCP probíhá pomocí třícestného handshakingu. Průběh navázání spojení je následující:

1. První strana otevře socket a vytvoří možnost komunikace (pasivní otevření).
2. Druhá strana pošle SYN paket pro požadavek na otevření spojení.
3. První strana odpoví paketem SYN/ACK.
4. Druhá strana potvrdí spojení paketem ACK.

### Přenos dat TCP

Během navázání spojení jsou mezi účastníky výměnou inicializačního čísla sekvence (ISN) a dohodou o velikosti okna. Při přenosu dat je každý paket označen sekvenčním číslem a v poli ACK je posíláno potvrzující sekvenční číslo přijatých dat. TCP také vypočítává 16bitový kontrolní součet dat pro detekci chyb. Chybné pakety jsou zahazovány.

### Ukončení spojení

Ukončení spojení v TCP je opět založeno na třícestném handshakingu. Průběh ukončení spojení je následující:

1. Jedna strana pošle FIN paket pro požadavek na uzavření spojení.
2. Druhá strana odpoví paketem FIN/ACK.
3. První strana potvrdí uzavření spojení paketem ACK.

### Užití

TCP se často používá pro aplikace, které vyžadují spolehlivý přenos dat přes bezdrátové sítě, jako jsou e-maily, webové stránky a obecně služby, které vyžadují bezchybný přenos dat.

## UDP (User Datagram Protocol)

UDP je jednodušší protokol založený na odesílání nezávislých zpráv, nazývaných datagramy. Jedná se o nespojovanou službu, což znamená, že odesílatel zasí

lá datagram a již se nestará o to, zda dorazil k příjemci. UDP nemá mechanismy potvrzování přijetí, opětovného odesílání ani časových limitů. Hlavní rysy protokolu UDP jsou:

- Bez záruky: UDP neposkytuje záruku doručení dat a datagramy se mohou ztratit během přenosu.
- Nezachovává pořadí: Pokud jsou zprávy odeslány ve stejnou dobu, nemusí dorazit k příjemci v pořadí, v jakém byly odeslány.
- Jednoduchost: UDP je jednodušší a má nižší režii než TCP, protože neprovádí řazení, sledování spojení atd.

### Užití

UDP se často používá pro aplikace, které vyžadují rychlý přenos dat a mohou tolerovat ztrátu některých datagramů. Příklady aplikací, které využívají UDP, jsou systémy otázka-odpověď, jako je DNS, a sdílení souborů v lokální síti (LAN). Jeho bezstavovost je také užitečná pro servery, které obsluhují mnoho klientů, a pro nasazení, kde je ztráta datagramů přijatelná, například u hlasového nebo video streamu.

# Řídící protokoly

## ICMP (Internet Control Message Protocol)

ICMP je služební protokol, který funguje jako součást IP protokolu, ale chová se podobně jako TCP/UDP. Je vložen do IP datagramu a obsahuje IP hlavičku, ICMP hlavičku a data. ICMP slouží k signalizaci mimořádných událostí v sítích založených na IP protokolu. Například směrovače při přeposílání IP datagramu snižují pole TTL (Time to Live) v IP hlavičce o jedničku. Pokud se TTL sníží na hodnotu 0 a datagram není určen stroji provádějícímu dekrementaci, směrovač zahodí přijatý paket a pošle původnímu odesílateli ICMP zprávu "Time to live exceeded in transit". ICMP zprávy mohou například informovat o nedoručitelném IP datagramu, požadovat snížení rychlosti odesílání, změnu směrování, žádat o echo, odpovědět na žádost o směrování, signalizovat vypršení času, chybné parametry atd. Pro správné fungování protokolu IP je nutné, aby systémy podporovaly zprávy ICMP. ICMP je důležitý pro bezchybnou komunikaci v sítích IP a existují dvě verze tohoto protokolu - jedna pro IPv4 a druhá pro IPv6. ICMP se obvykle nepoužívá přímo síťovými aplikacemi, s výjimkou nástroje ping, který posílá ICMP zprávy "Echo Request" (a očekává odpověď "Echo Reply") k ověření dostupnosti cílového počítače a zjištění časové prodlevy při cestě paketů tam a zpět. ICMP zprávy se generují na základě IP datagramů, jejichž vlastnosti nebo chování vyžadují akci na úrovni protokolu ICMP. ICMP zprávy se nikdy nedělí a vždy jsou odesílány v jediném datagramu. Typ ICMP zprávy se rozpoznává podle prvního pole vloženého na pozici 160 v paketu (za IP hlavičkou) a případně dále, pokud jsou v IP hlavičce obsaženy volby.

## Nízkoúrovňové protokoly

### DNS (Domain Name System)

DNS je protokol, který slouží k překladu názvů domén na IP adresy. Jedná se o hierarchický systém, kde každý DNS server spravuje svoji doménu (nebo několik domén) a může delegovat správu podřízených subdomén na další DNS servery. DNS původně zajišťoval pouze překlad názvů domén na IP adresy, ale dnes se používá i pro další služby, například uchovává informace o poštovních serverech domény (MX záznamy). Každý klient v síti musí znát adresu DNS serveru, aby mohl používat URL adresy. Při připojení na webovou stránku se například URL "seznam.cz" musí přeložit na IP adresu. Adresu DNS serverů může klient získat staticky nebo pomocí DHCP serveru. DNS je protokol aplikační vrstvy, stejně jako DHCP. Hlavními elementy DNS jsou DNS resolver (klient, který generuje dotazy na DNS systém), rekurzivní DNS server (hledá odpovědi na dotazy) a autoritativní DNS server (poskytuje odpovědi na rekurzivní dotazy). DNS provádí rekurzi, kde recursor musí znát root servery. Zeptá se root serveru na odpověď, kterou obdrží v podobě adres, na které může najít odpověď pro doménu první úrovně. Jednou z bezpečnostních zranitelností DNS protokolu je cache poisoning, kdy je možné podvrhnout odpověď DNS serveru s falešnými IP adresami. DNS server si tuto falešnou odpověď uloží do mezipaměti a distribuuje ji dalším klientům. Jako řešení se používá technologie DNSSEC, která zajišťuje autentičnost odpovědí prostřednictvím elektronických podpisů a ověřování jejich platnosti.
