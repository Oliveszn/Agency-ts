export const getAllPostsQuery = `
  *[_type == "post"]{
    title,
    category,
    slug,
    body,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    }
  }
`;

export const getPostBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    body,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    },
    "categories": categories[]->{
     _id,
       title
    }
   
  }
`;

export const getAllOffices = `
*[_type == "offices"]{
  city,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    },
  address,
}
`;

export const getAllAdmins = `
*[_type == "admins"]{
name,
slug,
role,
 images[] {
      asset -> {
        _id,
        url
      },
      alt
    },
  bio
}
`;

export const getAdminBySlug = `
*[_type == "admins" && slug.current == $slug][0]{
  name,
  slug,
  role,
  images[] {
    asset -> {
      _id,
      url
    },
    alt
  },
  bio
}
`;
