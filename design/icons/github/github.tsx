import { GithubSvg, GithubSvgProps } from './github.svg.js';

export type GithubProps = {} & GithubSvgProps;

export function Github(props: GithubProps) {
  return <GithubSvg {...props} />;
}
