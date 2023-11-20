import { GameCanvas } from './components/GameCanvas';
import { characterPosition, enemies, projectiles } from './store';

function App() {
  return (
    <>
      <p>Projectiles on screen - {projectiles.value.length}</p>
      <p>
        Player position - x : {characterPosition.value.x}, y :{' '}
        {characterPosition.value.y}
      </p>
      <p>Enemies alive - {enemies.value.length}</p>
      <div className="flex items-center justify-center h-screen bg-black">
        <GameCanvas />
      </div>
    </>
  );
}

export default App;
