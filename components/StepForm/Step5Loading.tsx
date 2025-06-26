type Props = {
  onNext?: () => void;
  onBack?: () => void;
};
export default function Step5Loading({ onNext, onBack }: Props) {
  return (
    <div>
      <Step5Loading />
      {onBack && <button onClick={onBack}>Back</button>}
      {onNext && <button onClick={onNext}>Next</button>}
    </div>
  );
}
