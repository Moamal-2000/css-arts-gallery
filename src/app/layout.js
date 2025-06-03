import "../styles/globals.scss";
import RootProviders from "./RootProviders";

export const metadata = {
  title: "CSS Art Gallery",
  description:
    "A website to showcases a collection of creative drawings and designs made purely with CSS. Some pieces also incorporate JavaScript to add interactive or dynamic effects. Explore the power of pure CSS craftsmanship and see how simple code transforms into beautiful visuals.",
};

export default function RootLayout({ children }) {
  return (
    <RootProviders>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RootProviders>
  );
}
