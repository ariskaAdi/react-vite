const c = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export default c;
