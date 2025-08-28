import type { Admins } from "@/utils/types";

interface AboutTileProps {
  admin: Admins;
  handleGetAdminDetails: () => void;
}
const AboutTile = ({ admin, handleGetAdminDetails }: AboutTileProps) => {
  return (
    // onClick={handleGetAdminDetails}
    <li
      className="flex cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleGetAdminDetails();
      }}
    >
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
