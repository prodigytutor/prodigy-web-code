import React from 'react'
// Define the type of the props expected by the Button component
type ButtonProps = {
    title: string; // Change this to the appropriate type for `title`
    onClick: () => void; // Adjust if your onClick handler has a specific signature
  };
  
  const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <div>
      <button
        style={{
          maxWidth: "140px",
          minWidth: "80px",
          height: "30px",
          marginRight: "5px"
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}
export default Button
