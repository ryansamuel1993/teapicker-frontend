type Props = {
  onNext?: () => void;
  onBack?: () => void;
};
export default function Step4Consent({ onNext, onBack }: Props) {
  return (
    <div>
      <Step4Consent />
      {onBack && <button onClick={onBack}>Back</button>}
      {onNext && <button onClick={onNext}>Next</button>}
    </div>
  );
}
