import { Footer, Header } from "../..";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
