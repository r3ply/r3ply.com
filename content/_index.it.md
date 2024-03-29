+++
template = "index.html"
title = "r3ply 📬: commentare, semplice come una email"
description = "💬 Aggiungi commenti al tuo sito web facilmente ✨ con r3ply, il sistema di commenti basato sulla email 📥"
+++

## Un Sistema di Commenti Semplice come una Email

r3ply semplifica l'aggiunta di commenti al tuo sito web consentendo ai tuoi lettori di inviarli via email. Questo permette loro di commentare senza dover creare - ancora un - account.

**Per vedere una demo di r3ply e scoprire di più su come funziona, controlla [la sezione commenti](https://spenc.es/writing/email-as-a-commenting-system/#comments) dell'articolo del blog dove l'ho annunciato per la prima volta.**

*Attualmente sto chiedendo al mondo online un feedback per valutare se vale la pena renderlo open source. Se questa cosa ti sembra interessante, dai un'occhiata alla [lista d'attesa](#lista-d-attesa) qui sotto.*

### Vantaggi

1. Tutti hanno già una email!
2. Buon equilibrio tra UX e moderazione dello spam o contenuti offensivi
3. Costruire sopra l'email ti fornisce funzionalità gratuitamente:
    * Commenti in bozza che possono essere salvati e ripresi in seguito
    * Cronologia dei commenti sotto forma di archivio email
    * Le email sono naturalmente in thread, come i commenti
    * Un editor di testo robusto che è già stato testato sul campo
    * Un certo grado di rilevamento dello spam pre-costruito
    * Gli utenti possono scorre il tuo sito, fianco a fianco, mentre preparano la loro bozza
    * E molto altro ancora!


## Funzioni

* Gli utenti possono inviare commenti al tuo sito via email
* Gli indirizzi email vengono automaticamente oscurati prima di essere pubblicati
* I commenti possono essere revisionati prima di essere resi pubblici
* Il design modulare permette di utilizzare la propria configurazione (o backend)


{{fig_cap(img=
`!["Registrazione dello schermo dell'uso di r3ply"](/screenrecording_md.webp "Il tuo client email è probabilmente molto più piacevole per scrivere rispetto al browser. Ad esempio, le bozze vengono salvate automaticamente e puoi scorrere l'articolo mentre scrivi il tuo commento.")`
)}}

## Lista d'Attesa

r3ply non è ancora disponibile pubblicamente, ma se ti sembra interessante e desideri essere informato quando sarà disponibile, lascia il tuo indirizzo email nella lista d'attesa.

{{ waitlist() }}

{{ add(class='text-right', to='*(Prometto di non inviare spam o condividere il tuo indirizzo email)*')}}

**Se hai voglia di darmi un feedback, grazie! Puoi condividerlo [come commento](https://spenc.es/writing/email-as-a-commenting-system/#comments) sul post originale del blog che annuncia r3ply, oppure [mandarmelo via email](https://spenc.es/contact/) privatamente.**

## Domande frequenti (FAQ)

Sono ancora nella fase di raccolta feedback. Fino a quando non ci sarà una documentazione adeguata, aggiungerò domande/risposte comuni in questa FAQ.

<div class="px-4 border border-[#020D2B] rounded-xl">

### Qual è la tempistica per questo progetto?
> r3ply **funziona oggi** e puoi [provarlo](https://spenc.es/writing/email-as-a-commenting-system/#comments) ora. Tuttavia, sto ancora aspettando feedback prima di rendere open source il progetto.
>
> Chissà? Forse le persone lo troveranno la cosa peggiore di sempre e nessuno lo userà mai. In quel caso, posso risparmiarmi il problema. Se invece viene accolto positivamente, allora renderò il codice open source e lo sviluppo futuro avverrà pubblicamente.

### E per la privacy?
> Gli indirizzi email vengono automaticamente convertiti in hash privati ma univoci prima che i commenti vengano pubblicati.

### E per il "spoofing" delle email?
> r3ply esegue controlli `dkim`, `dmarc`, e `spf` sull'indirizzo email del mittente e include un segno di spunta se superano tali controlli.

### Le persone possono scegliere un "nickname" da associare a un commento?
> In futuro, forse.
>
> In realtà ho implementato questo, ma non l'ho ancora rilasciato, dove analizza un nickname dalla "firma" dell'email. Quest'idea sembra elegante, ma penso ancora che un nickname debba essere più intenzionale per essere un buon UX.
>
> In sostanza, sono preoccupato che le persone non sapranno che stanno lasciando un soprannome e temo di essere visto come colui che tradisce quella fiducia. Questo è vero soprattutto perché praticamente tutti i client email includono automaticamente qualche tipo di firma.

### Che tipo di contenuto può essere inviato nelle email?
> Personalmente, permetto un sottoinsieme di markdown, ma spetta a te come moderatore del sito. r3ply può essere configurato per rifiutare le email che superano una certa soglia in termini di dimensioni.

### Qual è effettivamente il flusso dei dati?
> Ecco un esempio preso dal [post iniziale](https://spenc.es/writing/email-as-a-commenting-system/#comments).

<div class="md:hidden bg-slate-900 border border-red-400 not-prose py-4">

!["Un diagramma ad alto livello che mostra il flusso dei dati"](high-level-arch_v.webp "Il flusso dei dati è circolare, inizia e termina con la costruzione/rendering del sito.")

</div>

<div class="hidden md:block bg-slate-900 border border-red-400 not-prose">

!["Un diagramma ad alto livello che mostra il flusso dei dati"](high-level-arch_h.webp "Il flusso dei dati è circolare, inizia e termina con la costruzione/rendering del sito.")

</div>

### Come integro r3ply con il mio sito?
> Per il momento, ho solo un "integrazione" su GitHub creata per le esigenze del mio sito, tuttavia in futuro possono essere sviluppate ulteriori integrazioni e puoi anche facilmente creare la tua e esporre un webhook.

### Come funziona la moderazione dei contenuti?
> Se la moderazione è abilitata, i proprietari del sito verranno notificati quando vengono ricevuti nuovi commenti, dove potranno approvare o respingere le segnalazioni, oltre a bloccare utenti maligni.

### Dove viene eseguito r3ply?
> La parte di email in ingresso di r3ply attualmente utilizza [Cloudflare’s email workers](https://workers.cloudflare.com) per funzionare. I requisiti di risorse si adattano comodamente al loro livello gratuito.

### E se voglio eseguire r3ply sulla mia infrastruttura?
> Se desideri portare r3ply su un'altra infrastruttura, ottimo! [Contattami](https://spenc.es/contact/) e parliamone di più.

### C'è una versione gestita di questo?
> Attualmente no, ma se diventa popolare potrebbe essere creata un servizio basato su di esso.

### Come fa r3ply a sapere da un'email dove dovrebbe andare un commento sul mio sito?
> r3ply utilizza informazioni nella riga dell'oggetto dell'email per incorporare dove è destinato un commento.

### Come arriva questa riga dell'oggetto nell'email inizialmente?
> Quando l'utente fa clic su un pulsante "commento", in realtà fa clic su un link "mailto" che precompila le informazioni necessarie.

### Cosa impedisce a un utente malintenzionato di manomettere la riga dell'oggetto?
> r3ply confronta un hash della riga dell'oggetto con uno precalcolato e, se differiscono, rifiuta l'email.

### Cosa è incluso nei link `mailto`?
> Include il mittente, oltre a istruzioni che sono nel corpo dell'email. Tuttavia, la cosa più importante è la riga dell'oggetto che include a cosa si sta rispondendo nel commento, oltre a un hash per prevenire errori o manomissioni.

### Come viene generato questo link `mailto`?
> Il tuo sito deve crearlo, poiché solo il tuo sito sa dove inserire i commenti nell'HTML.

### In che modo le email aiutano nella moderazione?
> Perché se gli utenti fanno spam o sono in altro modo malintenzionati, il loro indirizzo email può essere bloccato. È simile a come molti siti si fidano dell'invio di una email per eseguire un 'reset password', ma al contrario. Vedi [sopra](#e-per-il-spoofing-delle-email) per preoccupazioni sullo spoofing delle email.

### Non possono semplicemente usare un altro indirizzo email?
> Sì, ma anche quello può essere bloccato, e utilizzare più indirizzi email è un problema anche per le registrazioni di account tradizionali.

### Gli utenti ricevono una notifica che il loro commento è stato inviato con successo?
> Sì, attualmente r3ply risponderà automaticamente alla loro email notificando loro che il loro commento è stato ricevuto. [Fammi sapere](https://spenc.es/contact) se questo non è un buon UX.

### Quali funzionalità future sono pianificate?
> Mi piacerebbe davvero avere più feedback prima di procedere, tuttavia ecco alcune idee che ho:
>
> * Rendere open source il codice e consentire alla community di creare i propri backend per consentire l'integrazione con un solo clic
> * Poter gestire i commenti rispondendo alla tua email. Ad esempio:
>> [scenario 1:] un utente commenta e riceve una risposta automatica da r3ply, notificandogli che il suo commento è riuscito, con una preview del suo commento. Poi si accorge che c'è un errore nel suo commento. Con questa funzionalità potrebbe semplicemente rispondere `AGGIORNA <corregge l'errore>`.
>
>> [scenario 2:] Un moderatore riceve un'email, notificandolo di un nuovo commento. Senza lasciare il suo client email, potrebbe semplicemente rispondere `APPROVA`, `RESPINGI`, o `BLOCCA` e sarebbe fatto per lui.
>
> * Consentire l'associazione di 'nickname' ai commenti, consentendo agli utenti di firmare la propria email
>

Se hai altre idee, per favore [fammelo sapere](https://spenc.es/contact)!
