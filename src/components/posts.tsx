import * as React from "react";
import { Component } from "react";

export interface PostProps {}

export interface PostState {}

class Post extends React.Component<PostProps, PostState> {
  render() {
    return (
      <div>
        <h1>Welcome To TSX</h1>
      </div>
    );
  }
}

export default Post;
