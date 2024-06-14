# La boucle d'événements Node.js, les minuteries et process.nextTick ()

## Qu'est-ce que la boucle d'événement?

La boucle d'événements est ce qui permet à Node.js d'effectuer des opérations d'E/S non bloquantes - malgré le fait que JavaScript soit monothread - en déchargeant les opérations vers le noyau système chaque fois que possible.

Comme la plupart des noyaux modernes sont multi-threads, ils peuvent gérer plusieurs opérations s'exécutant en arrière-plan. 
Quand l'une de ces opérations se termine, le noyau informe Node.js afin que le rappel approprié puisse être ajouté à la file d'attente d'interrogation pour être finalement exécuté.


## Boucle d'événement expliquée

Lorsque Node.js démarre, il initialise la boucle d'événements, traite le script d'entrée fourni qui peut effectuer des appels d'API asynchrones, planifier des minuteries ou appeler `process.nextTick()`, commence alors le traitement de la boucle d'événements.

Le diagramme suivant présente une vue d'ensemble simplifiée de l'ordre des opérations de la boucle d'événements.

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

> Chaque case sera appelée "phase" de la boucle d'événements.

Chaque phase a une file d'attente FIFO (First in / First Out) de rappels à exécuter. Bien que chaque phase soit spéciale à sa manière, généralement, lorsque la boucle d'événements entre dans une phase donnée, elle effectuera toutes les opérations spécifiques à cette phase, puis exécutera des rappels dans la file d'attente de cette phase jusqu'à ce que la file d'attente soit épuisée ou le nombre maximum de rappels ait été exécuté.
Lorsque la file d'attente est épuisée ou que la limite de rappel est atteinte, la boucle d'événements passe à la phase suivante, et ainsi de suite.

Étant donné que n'importe laquelle de ces opérations peut planifier plus d'opérations et que les nouveaux événements traités dans la phase d'interrogation sont mis en file d'attente par le noyau, les événements d'interrogation peuvent être mis en file d'attente pendant le traitement des événements d'interrogation.

Par conséquent, des rappels de longue durée peuvent permettre à la phase d'interrogation de s'exécuter beaucoup plus longtemps que le seuil d'un minuteur.

Il y a un léger décalage entre l'implémentation Windows et Unix / Linux, mais ce n'est pas important pour cette démonstration. Les parties les plus importantes sont ici. Il y a en fait sept ou huit étapes, mais celles qui nous intéressent - celles que Node.js utilise réellement - sont celles ci-dessus.

> **file d'attente FIFO :** En informatique, une file dite aussi file d'attente (en anglais queue) est un type abstrait basé sur le principe « premier entré, premier sorti » ou PEPS, désigné en anglais par l'acronyme FIFO (« first in, first out ») : les premiers éléments ajoutés à la file seront les premiers à en être retirés.

## Aperçu des phases

* **timers:** cette phase exécute les callbacks programmés par `setTimeout()` et `setInterval()`.
* **callbacks en attente:** exécute les rappels d'E/S reportés à l'itération de boucle suivante.
* **idle, prepare:** utilisé uniquement en interne.
* **poll:** récupère les nouveaux événements d'E/S; exécuter les rappels liés aux E/S (presque tous à l'exception des rappels fermés, ceux planifiés par les minuteries et setImmediate ()); Le nœud se bloquera ici le cas échéant.
* **check:** les callbacks `setImmediate()` sont invoqués ici.
* **close callbacks:** execute certaines fonctions de callbacks réservés pour la fin d'un cycle, comme par exemple `socket.on ('close', ...)`.

Entre chaque exécution de la boucle d'événements, Node.js vérifie s'il attend des E/S asynchrones ou des minuteries et s'arrête proprement s'il n'y en a pas.

Pour plus d'information sur les phases et des exemples de code, consulter la documentation en ligne ici :

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
