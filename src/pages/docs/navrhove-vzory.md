---
title: Návrhové vzory
description: Quidem magni aut exercitationem maxime rerum eos.
---

## Výhody návrhových vzorů:

- Zrychlují návrh (používá se existující řešení namísto vymýšlení nového)
- Zkvalitňují návrh
- Snižují pravděpodobnost chyb tím, že jsou ověřené
- Doporučené postupy pro časté problémy při řešení úloh
- Vštěpují zásady správného programování
- Zjednodušují a zkvalitňují komunikaci mezi vývojáři
- Existují katalogy návrhových vzorů, jako například GoF (Gang of Five), který popisuje 23 základních vzorů
- Používá se kombinace UML diagramů a slovního popisu při zápisu návrhových vzorů

## Cíle návrhových vzorů:

- Sepsat katalog vztahů mezi objekty, které jsou často používány vývojáři
- Dosáhnout nezávislosti mezi třídami a volných vazeb

## Návrhové vzory podle Pecinovského (nezařazené do GoF):

- Jednoduchá tovární metoda
- Přepravka (Messenger)
- Knihovní třída (Utility)
- A další, jako kontejner, výčtový typ, neměnné objekty, služebník (servant), prázdný objekt (null object)

### 1. Strukturální vzory

- Adapter (adaptér)

```java
// Cílové rozhraní
interface CiloveRozhrani {
    void provedAkci();
}

// Adaptee (Existující třída nekompatibilní s cílovým rozhraním)
class Adaptee {
    public void metodaAdaptee() {
        System.out.println("Vykonávám metodu Adaptee.");
    }
}

// Adapter
class Adapter implements CiloveRozhrani {
    private Adaptee adaptee;

    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    public void provedAkci() {
        adaptee.metodaAdaptee(); // Volání metody Adaptee
    }
}

// Použití
public class Main {
    public static void main(String[] args) {
        Adaptee adaptee = new Adaptee();
        CiloveRozhrani adapter = new Adapter(adaptee);
        adapter.provedAkci(); // Volání metody cílového rozhraní pomocí adapteru
    }
}
```

- Bridge (most)

```java
// Rozhraní implementace
interface Implementace {
    void provedOperaci();
}

// Konkrétní implementace
class KonkretniImplementaceA implements Implementace {
    public void provedOperaci() {
        System.out.println("Provedeno pomocí konkrétní implementace A.");
    }
}

class KonkretniImplementaceB implements Implementace {
    public void provedOperaci() {
        System.out.println("Provedeno pomocí konkrétní implementace B.");
    }
}

// Abstrakce
abstract class Abstrakce {
    protected Implementace implementace;

    public Abstrakce(Implementace implementace) {
        this.implementace = implementace;
    }

    public abstract void provedOperaci();
}

// Konkrétní abstrakce
class KonkretniAbstrakce extends Abstrakce {
    public KonkretniAbstrakce(Implementace implementace) {
        super(implementace);
    }

    public void provedOperaci() {
        implementace.provedOperaci(); // Volání metody implementace
    }
}

// Použití
public class Main {
    public static void main(String[] args) {
        Implementace implementaceA = new KonkretniImplementaceA();
        Abstrakce abstrakce = new KonkretniAbstrakce(implementaceA);
        abstrakce.provedOperaci(); // Provedení operace pomocí konkrétní implementace A

        Implementace implementaceB = new KonkretniImplementaceB();
        abstrakce = new KonkretniAbstrakce(implementaceB);
        abstrakce.provedOperaci(); // Provedení operace pomocí konkrétní implementace B
    }
}
```

- Composite (skladba)

```java
// Komponenta
interface Komponenta {
    void provedOperaci();
}

// List
class List implements Komponenta {
    public void provedOperaci() {
        System.out.println("Provedeno na listu.");
    }
}

// Složenina
class Slozenina implements Komponenta {
    private List<Komponenta> komponenty = new ArrayList<>();

    public void pridatKomponentu(Komponenta komponenta) {
        komponenty.add(komponenta);
    }

    public void odebratKomponentu(Komponenta komponenta) {
        komponenty.remove(komponenta);
    }

    public void provedOperaci() {
        for (Komponenta komponenta : komponenty) {
            komponenta.provedOperaci();
        }
    }
}

// Použití
public class Main {
    public static void main(String[] args) {
        Komponenta slozenina1 = new Slozenina();
        slozenina1.pridatKomponentu(new List());
        slozenina1.pridatKomponentu(new List());

        Komponenta slozenina2 = new Slozenina();
        slozenina2.pridatKomponentu(new List());

        Komponenta slozeninaCelkem = new Slozenina();
        slozeninaCelkem.pridatKomponentu(slozenina1);
        slozeninaCelkem.pridatKomponentu(slozenina2);

        slozeninaCelkem.provedOperaci(); // Provedení operace na všech komponentách (včetně vnořených)
    }
}
```

- Decorator (dekorátor)

```java
// Rozhraní komponenty
interface Komponenta {
    void provedOperaci();
}

// Konkrétní komponenta
class KonkretniKomponenta implements Komponenta {
    public void provedOperaci() {
        System.out.println("Provedeno konkrétní komponentou.");
    }
}

// Dekorátor
abstract class Dekorator implements Komponenta {
    protected Komponenta komponenta;

    public Dekorator(Komponenta komponenta) {
        this.komponenta = komponenta;
    }

    public void provedOperaci() {
        komponenta.provedOperaci(); // Volání metody komponenty
    }
}

// Konkrétní dekorátor
class KonkretniDekorator extends Dekorator {
    public KonkretniDekorator(Komponenta komponenta) {
        super(komponenta);
    }

    public void provedOperaci() {
        super.provedOperaci();
        pridatFunkcionalitu();
    }

    private void pridatFunkcionalitu() {
        System.out.println("Přidána dodatečná funkcionalita.");
    }
}

// Použití
public class Main {
    public static void main(String[] args) {
        Komponenta komponenta = new KonkretniKomponenta();
        Komponenta dekorator = new KonkretniDekorator(komponenta);
        dekorator.provedOperaci(); // Provedení operace s dodatečnou funkcionalitou
    }
}
```

- Facade (fasáda)

```java
// Subsystém 1
class Podsystem1 {
    public void operace1() {
        System.out.println("Podsystem 1 - Operace 1");
    }

    public void operace2() {
        System.out.println("Podsystem 1 - Operace 2");
    }
}

// Subsystém 2
class Podsystem2 {
    public void operace1() {
        System.out.println("Podsystem 2 - Operace 1");
    }

    public void operace2() {
        System.out.println("Podsystem 2 - Operace 2");
    }
}

// Fasáda
class Fasada {
    private Podsystem1 podsystem1;
    private Podsystem2 podsystem2;

    public Fasada() {
        podsystem1 = new Podsystem1();
        podsystem2 = new Podsystem2();
    }

    public void provestSlozitouOperaci() {
        podsystem1.operace1();
        podsystem2.operace1();
        podsystem1.operace2();
        podsystem2.operace2();
    }
}

// Použití
public class Main {
    public static void main(String[] args) {
        Fasada fasada = new Fasada();
        fasada.provestSlozitouOperaci(); // Použití fasády pro provádění složité operace
    }
}
```

- Flyweight (lehká váha)

```java
// Flyweight
class Flyweight {
    private String stav;

    public Flyweight(String stav) {
        this.stav = stav;
    }

    public void provedOperaci() {
        System.out.println("Provedeno s lehkou vahou se stavem: " + stav);
    }
}

// Flyweight factory
class FlyweightFactory {
    private Map<String, Flyweight> flyweights = new HashMap<>();

    public Flyweight getFlyweight(String stav) {
        if (flyweights.containsKey(stav)) {
            return flyweights.get(stav);
        } else {
            Flyweight flyweight = new Flyweight(stav);
            flyweights.put(stav, flyweight);
            return flyweight;
        }
    }
}

// Použití
public class Main {
    public static void main(String[] args) {
        FlyweightFactory flyweightFactory = new FlyweightFactory();
        Flyweight flyweight1 = flyweightFactory.getFlyweight("A");
        Flyweight flyweight2 = flyweightFactory.getFlyweight("B");
        Flyweight flyweight3 = flyweightFactory.getFlyweight("A");

        flyweight1.provedOperaci(); // Provedeno s lehkou vahou se stavem: A
        flyweight2.provedOperaci(); // Provedeno s lehkou vahou se stavem: B
        flyweight3.provedOperaci(); // Provedeno s lehkou vahou se stavem: A
    }
}
```

- Proxy (zástupce)

```java
// Rozhraní subjektu
interface Subjekt {
    void provedOperaci();
}

// Konkrétní subjekt
class KonkretniSubjekt implements Subjekt {
    public void provedOperaci() {
        System.out.println("Provedeno konkrétním subjektem.");
    }
}

// Proxy
class Proxy implements Subjekt {
    private KonkretniSubjekt subjekt;

    public void provedOperaci() {
        if (subjekt == null) {
            subjekt = new KonkretniSubjekt();
        }
        predejOperaci();
    }

    private void predejOperaci() {
        System.out.println("Proxy předává operaci konkrétnímu subjektu.");
        subjekt.provedOperaci(); // Volání metody konkrétního subjektu
    }
}

// Použití
public class Main {
    public static void main(String[] args) {
        Subjekt proxy = new Proxy();
        proxy.provedOperaci(); // Použití proxy pro provedení operace
    }
}
```

### 2. Vzory pro vytváření objektů

- Tovární metoda (Factory Method)
  - Používá se pro vytváření objektů z různých tříd, které mají společného předka
  - Rozhraní definuje vytváření objektu, ale nechává rozhodnutí o konkrétní třídě na podtřídách
- Abstraktní továrna (Abstract Factory)
- Stavitel (Builder)
- Prototype
- Jedináček (Singleton)
  - Zajišťuje, že třída bude mít nejvýše jednu instanci
  - Řeší se pomocí statické proměnné třídy a statické metody pro získání instance třídy
  - Příklady: jediné připojení k databázi, správce tiskových úloh

### 3. Vzory chování

- Mediator (prostř

edník)

- Observer (pozorovatel)
  - Navazuje vztah mezi objekty (pozorovateli) a reaguje na změny stavu nebo události pozorovaného objektu
  - Objekty jsou volně vázané a pozorovaný objekt informuje pozorovatele o změně stavu pomocí metody "update"

## Přínosy návrhových vzorů:

- Poskytují řešení opakujících se problémů při návrhu softwaru
- Dokumentují již existující a ověřené návrhy
- Zvyšují úroveň abstrakce při práci s návrhem
- Definují jazyk pro popis návrhu
- Dokumentují architekturu a stavební prvky pro komplexní návrhy
- Zajišťují vyšší kvalitu softwaru
