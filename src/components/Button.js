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
    "mb-5 ml-4 flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-100": primary,
      "border-gray-900 bg-gray-100 ": secondary,
      "border-green-500 bg-green-100": success,
      "border-yellow-400 bg-yellow-400": warning,
      "border-red-500 bg-red-500": danger,
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
