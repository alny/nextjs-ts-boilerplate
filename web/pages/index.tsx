import * as React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import styled from "styled-components";

type Props = {};

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

class Home extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.props;
    return (
      <Layout title="Nextjs - Home">
        <div>Home</div>
        <Button>Erik</Button>
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
