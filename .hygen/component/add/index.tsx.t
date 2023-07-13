---
to: <%= abs_path %>.tsx
unless_exists: true
---
<% if (have_props) { %>
interface <%= name %>Props {
  str: string;
}
<%}%>
export const <%= name %> = (<% if (have_props) { %> props: <%= name %>Props <% } %>): JSX.Element  => {
  return (
    <>
      <% if (have_props) { %> { props.str } <% } else { %>Hello, hygen!<% } %>
    </>
  );
};