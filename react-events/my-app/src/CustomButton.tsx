type Prop = {
  text: string;
  color: string;
  onCustomClick: (text: string, color: string) => void;
};

export function CustomButton({ text, color, onCustomClick }: Prop) {
  return (
    <button
      style={{
        backgroundColor: color,
      }}
      onClick={() => onCustomClick(text, color)}>
      {text}
    </button>
  );
}
