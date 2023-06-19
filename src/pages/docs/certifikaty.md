---
title: Certifikáty, elektronické podpisy, eIDAS (podepisování a identifikace)
description: Quidem magni aut exercitationem maxime rerum eos.
---

**Certifikát** je digitální dokument sloužící k identifikaci a zajištění důvěryhodnosti.

**Elektronický podpis** je typem certifikátu.

**Typy elektronických podpisů:**

- Zaručený elektronický podpis - z CESNETu, je uznáván všemi orgány veřejné moci v

ČR.

- Uznávaný elektronický podpis - privátní klíč je uložen na disku. V ČR neexistují.
- Kvalifikovaný elektronický podpis - privátní klíč je uložen na nějakém prostředku, ze

kterého jej nedostanete ani vy, ani útočník.

_K čemu se certifikáty využívají?_

- Zabezpečení komunikace ať víme s kým komunikujeme - v SSL/TLS (HTTPS) ověření identity digitálního serveru
- Potvrzení od koho přišel email - Digitální podpis email S/MIME
- V zásadě potvrzení Je to on? a Vytvořil tohle on?

Struktura certifikátu obecně:

- Vydavatel
- Předmět
- Délka platnosti
- Veřejný klíč
- Další údaje a digitální podpis od certifikační autority

**Kořenový certifikát** (CA certifikát) je certifikát důvěryhodné autority, většinou **self-signed** (vydavatel=předmět), který bývá na konci řetězu certifikátu pro ověření.

(Je to poslední autorita, která ověřuje tu další a ta tu další atd.)

**ACME** je protokol pro vydávání a správu SSL/TLS certifikátů.

**OCSP stapling -** web server pravidelně ověřuje status svého certifikátu s CA serverem a připojuje ho k HTTPS odpovědím → rychlejší a menší zátěž.

**Elektronicka pecet** je důkaz přikládáný k dokumentům že je vydala určitá organizace - je to elektornický podpis určité organizace. Funguje podle Evropské normy **eIDAS** je také zakotvena v zákoně ČR a požadována v určitých dokumentech.

Od zakonem stanovenych poskytvatelu je možné získat kvalifikovanou pečeť, která je uznávaná v EU.
