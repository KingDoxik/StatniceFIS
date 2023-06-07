---
title: Aplikační nástroje internetu - email, ssh, WWW
description: Quidem magni aut exercitationem maxime rerum eos.
---

# SSH

SSH (Secure Shell) je program a protokol na aplikační vrstvě v TCP/IP sítích, který umožňuje bezpečnou komunikaci mezi dvěma počítači. Používá transparentní šifrování a volitelnou kompresi pro přenos dat. SSH pracuje na portu 22 a zajišťuje autentizaci, šifrování, integritu a volitelnou kompresi přenášených dat mezi počítači přes nebezpečnou vnější síť.

Terminologie:

- SSH je název pro přenosový protokol i program pro zprostředkování spojení. Přestože je označován jako "Secure Shell," ve skutečnosti se nejedná o shell pro interpretaci příkazů. Jméno bylo odvozeno z programu rsh, který má podobné funkce, ale není zabezpečený.
- SSH se často používá pro vzdálenou práci a správu počítačů. Obvykle se připojuje k SSH démonovi (sshd) pro navázání spojení. SSH démon rozhoduje, jaké formy autentizace bude požadovat a na kterém portu naslouchá. Implementace SSH klientů a serverů jsou dostupné na různých platformách a existují jak komerční, tak Open Source varianty.
- SSH je nejběžnější způsob vzdáleného připojení na UNIX/Linux systémy, které často fungují pouze s příkazovým řádkem.

## Komunikační protokoly

Pro výměnu zpráv mezi počítači na Internetu se používají protokoly SMTP a MTA (Mail Transfer Agent). Uživatelé mají na svých počítačích nainstalovaný e-mailový klient, který stahuje zprávy z poštovního serveru pomocí protokolů POP nebo IMAP. Ve velkých společnostech se často používají komerční protokoly jako Lotus Notes nebo Microsoft Exchange Server. Někteří uživatelé přistupují ke svým zprávám přes webové rozhraní.

- MUA (Mail User Agent): Poštovní klient zpracovávající zprávy u uživatele.
- MTA (Mail Transport Agent): Server starající se o doručování zpráv na cílový systém adresáta.
- MDA (Mail Delivery Agent): Program pro lokální doručování, umisťování zpráv do uživatelských schránek a zpracovávání (ukládání příloh, odpovídání, spouštění aplikací).

## Doručování

Při posílání pošty přes internet je dů

ležité zaručit spolehlivý přenos zprávy i v případě dočasného výpadku cílového serveru. Postup doručování zahrnuje následující kroky:

1. Zpráva se obvykle píše v e-mailovém klientu nebo webovém rozhraní.
2. Klient pomocí protokolu SMTP odesílá zprávu programu MTA (Mail Transfer Agent) na poštovním serveru.
3. MTA zjišťuje domény cílových adres pomocí DNS (Domain Name System) a hledá mail exchange servery, které přijímají poštu pro dané domény.
4. MTA odesílá zprávu na mail exchange server pomocí SMTP. Domény obvykle mají záložní mail exchange servery pro případ nedostupnosti hlavního serveru.
5. Mail exchange server doručuje zprávu do schránky adresáta.
6. Adresát si stahuje zprávu pomocí protokolu POP3 nebo IMAP, nebo ji prohlíží v poštovním klientu nebo webové službě.

## SMTP

Protokol SMTP (Simple Mail Transfer Protocol) slouží k odesílání a přijímání e-mailových zpráv. Umožňuje bezprostřední komunikaci mezi programy na počítači odesílatele a adresáta.

# World Wide Web (WWW)

World Wide Web, často označován jako WWW, je systém pro identifikaci, interakci a interpretaci zdrojů na internetu.

- **Identifikace**: Každý zdroj na webu je identifikován jedinečným URI (Uniform Resource Identifier), který se často označuje jako URL (Uniform Resource Locator).
- **Interakce**: Web agent komunikuje pomocí standardního protokolu HTTP (Hypertext Transfer Protocol), který umožňuje výměnu zpráv s přesně definovanou syntaxí a sémantikou.
- **Interpretace (reprezentace)**: Při komunikaci přenášíme data a případně metadata z určeného zdroje. Nejběžnějším formátem pro prezentaci webu je HTML (Hypertext Markup Language).

Díky WWW mohou uživatelé procházet webové stránky, které obsahují text, obrázky, videa a další multimediální prvky. Webové stránky jsou propojeny hypertextovými odkazy, které umožňují navigaci mezi různými zdroji na webu.

WWW je jednou z nejpoužívanějších služeb na internetu a přineslo revoluci v přístupu k informacím a komunikaci mezi lidmi po celém světě.
