import { KataHeader } from "../../components/KataHeader/KataHeader";
import LeapYearForm from "../../components/LeapYear/LeapYearForm";
import { Navigation } from "../../components/Navigation/Navigation";
import { paths } from "../../config/paths";

export const ThirdKataPage = () => {
  return (
    <>
      <Navigation backLink={paths.workshopHub} nextLink={paths.changeCode}/>
      <KataHeader
        kataNumber={3}
        title="Comprueba si un año es bisiesto"
        instructionsPath="kata-3 → README.md"
      />
      <LeapYearForm />
    </>
  );
};
