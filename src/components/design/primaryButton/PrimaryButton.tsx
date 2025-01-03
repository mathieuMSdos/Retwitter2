import styles from "./PrimaryButton.module.css";

// TYPE
interface PrimaryButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const PrimaryButton = ({ text, onClick, disabled }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.primary_button} ${
        disabled ? "opacity-60" : "cursor-pointer"
      }   flex justify-center items-center text-sm max-h-8 px-3 py-2 whitespace-nowrap rounded-lg text-slate-50 bg-gradient-to-b from-purpleBtn to-darkPurpleBtn`}
    >
      <p className="">{text}</p>
    </button>
  );
};

export default PrimaryButton;
