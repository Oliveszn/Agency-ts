import type { Admins } from "@/utils/types";
import AboutTile from "./Abouttile";

interface AdminSectionProps {
  admins: Admins[] | undefined;
  handleGetAdminDetails: (index: number) => void;
}

const AdminSection = ({ admins, handleGetAdminDetails }: AdminSectionProps) => {
  return (
    <section>
      <div>
        <figure className="bg-priColor h-1 p-0 m-0 align-baseline border-0"></figure>
        <div className="flex flex-row justify-between uppercase my-10">
          <div className="font-medium">Sec.</div>
          <div className="font-medium">/D</div>
          <div className="text-2xl">●</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] my-20">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold uppercase mb-10">
          <h2>
            Team &amp; <br className="hidden lg:block" /> Leadership
          </h2>
        </div>
        <div className="w-full lg:w-1/2 text-xl md:text-2xl lg:text-3xl font-medium lg:font-semibold">
          <p>
            We’re 120+ individuals from across the world driven by bold ideas
            and diverse perspectives. Craft, service, and efficiency drive us
            forward and we see our agency as a place for our shared values to
            collide.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {admins && admins.length > 0
          ? admins.map((admin, index) => (
              <AboutTile
                admin={admin}
                key={admin.name}
                handleGetAdminDetails={() => handleGetAdminDetails(index)}
              />
            ))
          : null}
      </ul>
    </section>
  );
};

export default AdminSection;
