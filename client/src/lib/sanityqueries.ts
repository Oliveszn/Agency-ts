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
