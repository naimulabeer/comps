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
}) {
  const classes = className("px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-black bg-black text-white": secondary,
    "border-emerald-800 bg-emerald-500 text-white": success,
    "border-yellow-800 bg-yellow-400 text-white": warning,
    "border-red-800 bg-red-500 text-white": danger,
  });

  return <button className={classes}>{children}</button>;
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
