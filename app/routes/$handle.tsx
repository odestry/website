import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import type {Collection as CollectionType} from '@shopify/hydrogen/storefront-api-types';

export async function loader({params, context}: LoaderArgs) {
  const {handle} = params;
  const {collection} = await context.storefront.query<{
    collection: CollectionType;
  }>(COLLECTION_QUERY, {
    variables: {
      handle,
    },
  });

  if (!collection) {
    throw new Response(null, {status: 404});
  }

  return json({
    collection,
  });
}

const COLLECTION_QUERY = `#graphql
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      title
      handle
    }
  }
`;
