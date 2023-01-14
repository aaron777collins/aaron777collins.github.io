import * as React from "react";

export interface IRedirectProps {
  url: string;
}

export default function Redirect(props: IRedirectProps) {
  React.useEffect(() => {
    window.location.replace(props.url);
  }, []);
  return null;
}
