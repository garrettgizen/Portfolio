import MobileNavbar from "@/components/navigation/MobileNavbar";
import Navbar from "@/components/navigation/Navbar";
import { getNavigation } from "@/lib/data";

export default async function Navigation() {
  const navigation = await getNavigation();

  return (
    <>
      <MobileNavbar navigation={navigation} />{" "}
      <Navbar navigation={navigation} />
    </>
  );
}
