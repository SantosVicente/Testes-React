type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button data-testid="Button" {...rest} className="bg-blue-500">
      {children}
    </button>
  );
};

export default Button;
