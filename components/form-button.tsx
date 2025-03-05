interface FormButtonProps {
  disabled: boolean;
  text: string;
}

export default function FormButton({ disabled, text }: FormButtonProps) {
  return (
    <button
      disabled={disabled}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {disabled ? "로딩 중..." : text}
    </button>
  );
}
