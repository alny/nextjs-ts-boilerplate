import * as React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

class Layout extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:500,600,700"
            rel="stylesheet"
          />
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
            rel="stylesheet"
          />
        </Head>
        {children}
      </div>
    );
  }
}

export default Layout;
