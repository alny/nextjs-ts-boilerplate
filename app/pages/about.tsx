import * as React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

type Props = {};

interface State {}

class About extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.props;
    return (
      <Layout title="About">
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default About;
