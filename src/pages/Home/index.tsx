import React from 'react';
import Page from 'components/Page';

const Home = () => (
  <Page className="Home">
    <h2>Hello&nbsp;!</h2>
    <p>
      Pour ce petit test technique, nous vous demandons de bien vouloir ajouter
      ceci à la présente application&nbsp;:
    </p>
    <ul>
      <li>
        Un système de <strong>routing</strong> simple. Celui ci devrait&nbsp;:
        <ul>
          <li>
            Conserver la présente page sur l&apos;url de base <code>/</code>
            ainsi que l&apos;url <code>/home</code>
          </li>
          <li>
            Ajouter l&apos;url <code>/todos</code> qui sert une page <code>Todos</code>
            (à créer, voir plus bas).
          </li>
          <li>Prendre en charge une page « Not Found » custom.</li>
          <li>
            Bien sûr, il faudrait ajouter un petit menu dans le header ci-dessus,
            permettant de naviguer entre les deux pages de l&apos;application.
          </li>
        </ul>
      </li>
      <li>
        Créer une <strong>page « Todos »</strong> dans laquelle se trouverait&nbsp;:
        <ul>
          <li>
            Une <em>liste de « Todos »</em> (super original 🤔).<br />
            Chaque item devra être du type <code>{'{ title: string, content: string }'}</code>.
            <br />
            Dans la liste, il faudrait n&apos;afficher que <em>le titre</em> de chaque item.<br />
            Cette liste devra être récupérée de manière asynchrone (dans un fichier
            local, pas besoin d&apos;aller taper dans une API sauf si ça vous botte).
          </li>
          <li>
            La possibilité de <em>cliquer sur un item</em> pour l&apos;ouvrir
            et afficher le contenu juste en dessous.<br />
            Tout en bas du contenu de l&apos;item (sous le texte), il faudrait un bouton
            permettant de fermer l&apos;item.<br />
            Quand on ouvre ou ferme un item, le compteur des todos ouverts se met à jour
            (voir ci-dessous).
          </li>
          <li>
            Un <em>compteur</em> en haut de page, qui affiche le nombre de todos qui
            sont ouverts actuellement.<br />
            Quand on clique sur ce compteur, il faudrait que tous les todos ouverts se ferment
            automatiquement.
          </li>
        </ul>
      </li>
    </ul>
    <p>Et voilà&nbsp;!</p>
    <p>
      Nous vous demandons d&apos;utiliser uniquement des <strong>function-components</strong>,
      pas de class-component. Tout doit être typé correctement, et le code devra être lisible
      et compréhensible dans avoir besoin de commentaires.
    </p>
    <p>
      Bien sûr, libre à vous d&apos;introduire n&apos;importe quelle librairie qui vous
      semblerait utile.
    </p>
    <p className='margin-bottom'>Merci pour votre temps, bonne chance&nbsp;!</p>
  </Page>
);

export default Home;
