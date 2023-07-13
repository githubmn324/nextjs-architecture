'use client';

interface ButtonProps {
  /**
   * label kimura!!!
   */
  label: string;
  /**
   * Optional click handler
   */
  // onClick: (val:string) => void;
  onClick?: () => void;
}

// export const Button = ({label,onClick}: ButtonProps) => {
//   const handleClick = () =>{
//     const val = "clicked!!!"
//     onClick(val)
//   }

//   return (
//     <button onClick={handleClick} >
//       {label}
//     </button>
//   );
// };

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// function Button({ children ,onClick}) {
//   return <button type="button" onClick={onClick}>
//     {children}
//     </button>;
// }

// export default Button;
