export const Conditional =
  <Props, Result>(options: {
    if: (props: Props) => any;
    then: (props: Props) => Result;
    else: (props: Props) => Result;
  }) =>
  (props: Props) => {
    return options.if(props) ? options.then(props) : options.else(props);
  };
