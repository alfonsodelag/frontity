import React from "react";
import { connect, styled } from "frontity";

const Post = ({ state }) => {
  const { isReady, type, id, isPost } = state.source.data(state.router.path);
  const post = state.source[type][id];
  const author = state.source.author[post.author];

  return isReady ? (
    <Container>
      <Head>
        <Title>{post.title.rendered}</Title>
        {isPost && <Author>By {author.name}</Author>}
      </Head>
      <Body
        dangerouslySetInnerHTML={{
          __html: post.content.rendered
        }}
      />
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  max-width: 800px;
  width: 100vw;
  padding: 24px;
  box-sizing: border-box;
  margin: 0;
  list-style: none;
`;

const Head = styled.div``;

const Title = styled.h1`
  margin: 0;
  color: rgba(12, 17, 43);
`;

const Author = styled.p``;

const Body = styled.div``;
