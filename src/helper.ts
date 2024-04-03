export type RenderTagPropsType = Record<string, string | number>;

export function renderTag(tag: string, props: RenderTagPropsType = {}) {
  const stringifiedProps = Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  return `<${tag} ${stringifiedProps}></${tag}>`;
}
