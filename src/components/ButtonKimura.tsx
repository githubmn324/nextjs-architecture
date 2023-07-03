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

export const Button = ({label,onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} >
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
