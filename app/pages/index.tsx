import * as React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

type Props = {};

interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.props;
    return (
      <Layout title="Nextjs - Home">
        <div>Home</div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Home;
