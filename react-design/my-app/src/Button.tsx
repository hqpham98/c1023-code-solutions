type ButtonProps = {
  label: string;
  setIndex: () => void;
};

export function Button({ label, setIndex }: ButtonProps) {
  return (
    <div>
      <button onClick={setIndex}>{label}</button>
    </div>
  );
}
