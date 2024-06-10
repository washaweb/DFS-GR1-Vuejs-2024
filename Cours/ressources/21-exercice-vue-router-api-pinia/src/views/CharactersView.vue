<template>
  <main>
    <h1>Les personnages de Star Wars</h1>

    <h2 class="mb-3">Exercice noté</h2>

    <p>
      En utilisant l'exemple des planètes, et en vous référant à la documentation de l'api
      <a href="https://www.swapi.tech/documentation" target="_blank">https://www.swapi.tech/</a>
    </p>

    <ol>
      <li>Complétez et personnalisez les templates déjà créé avec votre style</li>
      <li>Créer les pages suivantes:</li>
      <ul>
        <li>
          <strong>Personnages :</strong> <code>(/characters)</code> (la page courante de cet
          exercice) -> doit lister les personnages de l'univers de StarWars
        </li>
        <li>
          <strong>Personnage (détail) :</strong> <code>/characters/:uid</code> -> Doit afficher la
          fiche détaillée d'un personnage de l'univers de StarWars
        </li>
      </ul>
    </ol>

    <p class="fw-semibold p-4 border bg-body-tertiary rounded-3 shadow-sm">
      Ceci est l'exercice final de votre formation front-end, et vous devez donc y apporter un soin
      particulier. La qualité du rendu HTML et le détail apporté au rendu des pages sera étudié
      attentivement et comptera dans votre note.
    </p>
    <h4>Critères de notation</h4>

    <ul>
      <li>
        Compléter les templates existants et créer les templates et composants manquants :
        <span class="badge text-bg-primary">3</span>
      </li>
      <li>
        Configuration des routes et utilisation du router :
        <span class="badge text-bg-primary">2</span>
      </li>
      <li>
        Modification et personnalisation des styles pour un rendu unique et personnalisé :
        <span class="badge text-bg-primary">5</span>
      </li>
      <li>
        Rendu graphique général et qualité du code : <span class="badge text-bg-primary">3</span>
      </li>
      <li>
        Créer un composant réutilisable pour la pagination
        <span class="badge text-bg-primary">3</span>
      </li>
      <li>
        <strong>Objectif final :</strong> Convertissez les méthodes utilisées dans ce projet pour
        utiliser un store pinia dans toutes les vues de l'application, vous devez créer un store par
        resource (un store pour les personnages, un store pour les planètes), Il existe un store de
        référence pour les planètes :
        <span class="badge text-bg-primary">4</span>
      </li>
    </ul>
  </main>
</template>
