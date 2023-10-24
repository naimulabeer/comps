import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "mb-5 ml-4 flex items-center border text-base h-12 px-5 transform translate-y-5 transition-transform hover:translate-y-2 ",
    {
      "border-blue-500 bg-blue-500": primary,
      "border-gray-900 bg-gray-500": secondary,
      "border-green-500 bg-green-500 ": success,
      "border-yellow-500 bg-yellow-500 ": warning,
      "border-red-500 bg-red-500 ": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-800": outline && primary,
      "text-gray-800": outline && secondary,
      "text-green-800": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-800": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1)
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true!"
      );
  },
};

export default Button;
