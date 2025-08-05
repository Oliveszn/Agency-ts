import type { Admins } from "@/pages/About";

//  handleGetAdminDetails
interface AboutTileProps {
  admin: Admins;
  handleGetAdminDetails: () => void;
}
const AboutTile = ({ admin, handleGetAdminDetails }: AboutTileProps) => {
  return (
    <li className="flex cursor-pointer" onClick={handleGetAdminDetails}>
      <a>
        <div className="flex flex-row gap-6">
          {admin.images?.map((img, idx) => (
            <picture key={idx}>
              <img
                src={img.asset.url}
                alt={img.alt || admin.name}
                className="w-full h-auto max-w-sm object-contain mx-auto"
              />
            </picture>
          ))}
        </div>

        <div className="uppercase">
          {admin.name}
          <br />
          <strong>{admin.role}</strong>
        </div>
      </a>
    </li>
  );
};

export default AboutTile;
