---
title: Identifikace a autentizace, hesla, vícefaktorová autentizace
description: Quidem magni aut exercitationem maxime rerum eos.
---

autentizace

**Identifikace** je proces rozpoznávání entit v systému (např. uživatel, zařízení). → Kdo to je.

**Autentizace** je proces ověření identity entity. → Je to opravdu on?

**Autorizace** je proces udělená oprávnění a přístupů určité entitě. → Co může dělat?

V bezpečnostním systému to probíhá často takto Identifikace → Autentizaci → Autorizaci

**Digitální identita** je přiřazena v rámci identifikace a slouží jako reprezentace entity v systému (např. uživatelský účet, certifikát).

Autentizace probíhá pomocí

- Toho co víme - heslo, otázka
- Toho co máme ****\*\*****\*\*\*\*****\*\*****- doklady, karta, mobil
- Toho co jsme - biometrie (např. otisk prstu)

## Hesla

Hesla jsou nejčastější způsob autentizace, ale jeden z méně bezpečných.

Kolem hesel je celá řada bezpečnostních praktik:

- Pro uživatele - dostatečná délka a složitost hesla, správce hesel
- Pro itáky - HTTPS, neukládat hesla v plain-text (hashšování), omezení pokusů o přihlášení

## Vicefaktorová autentizace

K přihlášení se využije více než jeden faktor, např. heslo a sms.

**TOTP (Time base One-time password)** je metoda autentizace, kde uživatel má aplikaci generující každých kratký časový úsek nějaký klíč → využívá se často jako druhý faktor.

## Autentizace veřejným klíčem

Funguje následujícím způsobem

1. Klient co se chce autentifikovat pošle na server žádost se svým veřejným klíčem.
2. Server ověří u certifikační autority jestli klientuv veřejný klíč je opravdu jeho.
3. Následně se komunikuje s vyžitím šifrování zpráv veřejnými klíči té druhé strany.

Výhodou je autentizace veřejným klíčem je, že nevyžaduje sdílené tajemství jako heslo.

Tato forma je využita např. v SSH, nebo TLS/SSL (využité v HTTPS) protokolech.
