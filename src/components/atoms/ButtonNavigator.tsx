
interface Props {
  onClick: () => void;
  text: string;
  textSize: string;
}

function ButtonNavigator({onClick, text, textSize}: Props) {

  return (
    <button type="button"
      onClick={onClick}
      className={`bg-rose-400 p-2 mb-10 rounded-xl hover:bg-white border-rose-500 sm:p-4 sm: mb-0 ${textSize}`} > 
        {text}
    </button>
  )
}

export default ButtonNavigator