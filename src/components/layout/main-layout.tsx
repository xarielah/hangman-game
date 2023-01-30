import { ReactNode } from "react";
import NavigationBar from "../header/navigation-bar";

interface IMainLayoutProps {
  children: ReactNode | ReactNode[];
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div className="max-w-[100ch] mx-auto">
      <header className="py-6">
        <NavigationBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
