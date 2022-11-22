import "./styles.css";

/*
 Attention: vous pouvez poser toutes les questions que vous voulez,
 vous avez le droit d'utiliser internet. Par contre, il faut bien expliquer
 votre démarche.

 1. Mettre à jour le composant App pour pouvoir ajouter des tasks à la liste 
 des todos via le champ input et le bouton add

 2. Mettre `à jour le composant pour pouvoir supprimer une task des todos
 en cliquant directement sur la task en question

 3. Eternaliser la listes des todos (juste la liste ) dans un composant Todos
*/

export default function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div>
        <input name="new-todo" type="text" />
        <button>Add</button>
      </div>
      <ul>
        <li>Fix CI pipeline</li>
        <li>My component is covered by tests</li>
        <li>Remove console error in browser</li>
      </ul>
      <div></div>
    </div>
  );
}
