
import { create } from "zustand";
import "./App.css";
import { UserData } from "./User";

interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

/* First create a store:
Your store is a hook! 
You can put anything in it: primitives, objects, functions. 
The set function merges state.*/
const useStore = create<BearState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({
    bears: state.bears + 1
  })),
  removeAllBears: () => set({
    bears: 0
  }),
}));


/*Then bind your components, and that's it!
You can use the hook anywhere, without the need of providers. 
Select your state and the consuming component will re-render when that state changes. */
export function BearsContainer() {
  const bears = useStore((state) => state.bears);
  const content = [];
  for (let i = 0; i < bears; i++) {
    content.push(`🐻`);
  }
  return (
    <div className="bears">
      {content.length ? content : "no bears"}
    </div>
  );

}

export function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore(state => state.removeAllBears);
  return (
    <div className="controls">
      <button onClick={increasePopulation} className="btn">one up</button>
      <button onClick={removeAllBears} className="btn">reset</button>

    </div>
  );
}

export function Counter() {
  const bearNum = useStore(state => state.bears);
  return (
    <div className="counter">
      {bearNum}
    </div>

  );

}

function App() {

  return (
    <div className="main">
      <Controls />
      <BearsContainer />
      <Counter />
      <UserData />
    </div>
  );
}

export default App;
