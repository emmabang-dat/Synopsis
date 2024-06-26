async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
const ABOUT_GRAPHQL_FIELDS = `
  internalName
  image {
    url
  }
  aboutHeader
  aboutText
  backgroundColor
`;

function extractAbout(fetchResponse: any): any {
  return fetchResponse?.data?.aboutCollection?.items?.[0];
}

export async function getAboutData(): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      aboutCollection(limit: 1) {
        items {
          ${ABOUT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractAbout(entry);
}

const EXPERIENCE_GRAPHQL_FIELDS = `
  internalName
  title
  company
  period
  description
  image {
    url
  }
`;

function extractExperience(fetchResponse: any): any {
  return fetchResponse?.data?.experienceCollection?.items;
}

export async function getExperienceData(): Promise<any> {
  const entries = await fetchGraphQL(
    `query {
      experienceCollection(limit: 5) {
        items {
          ${EXPERIENCE_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  
  return extractExperience(entries);
}

const FOOTER_GRAPHQL_FIELDS = `
  internalName
  footerText
  backgroundColor
  githubLink
  linkedinLink
`;

function extractFooter(fetchResponse: any): any {
  return fetchResponse?.data?.footerCollection?.items?.[0];
}

export async function getFooterData(): Promise<any> {
  const entries = await fetchGraphQL(
    `query {
      footerCollection(limit: 1) {
        items {
          ${FOOTER_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractFooter(entries);
}

const HEADER_GRAPHQL_FIELDS = `
  internalName
  headerText
  backgroundColor
`;

function extractHeader(fetchResponse: any): any {
  return fetchResponse?.data?.headerCollection?.items?.[0];
}

export async function getHeaderData(): Promise<any> {
  const entries = await fetchGraphQL(
    `query {
      headerCollection(limit: 1) {
        items {
          ${HEADER_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractHeader(entries);
}
