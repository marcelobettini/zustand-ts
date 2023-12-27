import { create } from "zustand";
interface State {
  firstName: string;
  lastName: string;
};

interface Action {
  updateFirst: (firstName: State['firstName']) => void,
  updateLast: (lastName: State['lastName']) => void;
};
const useStore = create<State & Action>()(set => ({
  firstName: '',
  lastName: '',
  updateFirst: (firstName) => set(() => ({ firstName: firstName })),
  updateLast: (lastName) => set(() => ({ lastName: lastName }))
}));

export function UserData() {
  const state = useStore(state => state);
  return (
    <>
      <p>{state.firstName}</p>
      <input type="text" onChange={(e) => (state.updateFirst(e.currentTarget.value))} />
      <p>{state.lastName}</p>
      <input type="text" onChange={(e) => (state.updateLast(e.currentTarget.value))} />
    </>
  );
}