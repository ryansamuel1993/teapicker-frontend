import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
};

export type CreateOrderInput = {
  items: Array<OrderItemInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderType?: InputMaybe<OrderType>;
  userId: Scalars['ID']['input'];
};

export type CreateOrderResponse = {
  __typename?: 'CreateOrderResponse';
  data?: Maybe<Order>;
  status?: Maybe<ResponseStatus>;
};

export type CreatePreferencesInput = {
  drinkType: DrinkType;
  milkStrength: MilkStrength;
  notes?: InputMaybe<Scalars['String']['input']>;
  sugarAmount: Scalars['Int']['input'];
  sweetenerType: SweetenerType;
  userId: Scalars['ID']['input'];
};

export type CreatePreferencesResponse = {
  __typename?: 'CreatePreferencesResponse';
  data?: Maybe<Preferences>;
  status: ResponseStatus;
};

export type CreateRatingInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  quality: Scalars['Int']['input'];
  service: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type CreateRatingResponse = {
  __typename?: 'CreateRatingResponse';
  data?: Maybe<Rating>;
  status?: Maybe<ResponseStatus>;
};

export type CreateTeamInput = {
  name: Scalars['String']['input'];
  user?: InputMaybe<Array<InputMaybe<CreateUserInput>>>;
};

export type CreateUserInput = {
  contactNumber?: InputMaybe<Scalars['BigInt']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  data?: Maybe<Array<Maybe<User>>>;
  status?: Maybe<ResponseStatus>;
};

export enum DrinkType {
  Coffee = 'COFFEE',
  Greentea = 'GREENTEA',
  Herbaltea = 'HERBALTEA',
  Hotchocolate = 'HOTCHOCOLATE',
  Tea = 'TEA'
}

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID']['output'];
  isAvailable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export enum MilkStrength {
  Liight = 'LIIGHT',
  Medium = 'MEDIUM',
  None = 'NONE',
  Strong = 'STRONG'
}

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: CreateOrderResponse;
  createPreferences: CreatePreferencesResponse;
  createRating: Rating;
  createTeam: Team;
  createUser?: Maybe<User>;
  updatePreferences: UpdatePreferencesResponse;
  updateUser?: Maybe<User>;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreatePreferencesArgs = {
  input: CreatePreferencesInput;
};


export type MutationCreateRatingArgs = {
  input: CreateRatingInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationUpdatePreferencesArgs = {
  input: CreatePreferencesInput;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Order = {
  __typename?: 'Order';
  completed?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  items: Array<OrderItem>;
  notes?: Maybe<Scalars['String']['output']>;
  orderType?: Maybe<OrderType>;
  ratings?: Maybe<Array<Maybe<Rating>>>;
  teamId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID']['output'];
  item: Item;
  quantity: Scalars['Int']['output'];
};

export type OrderItemInput = {
  itemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export enum OrderType {
  External = 'EXTERNAL',
  Internal = 'INTERNAL'
}

export type Preferences = {
  __typename?: 'Preferences';
  drinkType: DrinkType;
  id: Scalars['ID']['output'];
  milkStrength: MilkStrength;
  notes?: Maybe<Scalars['String']['output']>;
  sugarAmount: Scalars['Int']['output'];
  sweetenerType: SweetenerType;
  userId: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllOrders: Array<Order>;
  getAllTeams?: Maybe<Array<Maybe<Team>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getMenu: Array<Item>;
  getOrder?: Maybe<Order>;
  getRatingById?: Maybe<Rating>;
  getRatingsByUser: Array<Rating>;
  getUserById?: Maybe<User>;
  getUserPreferences?: Maybe<Preferences>;
};


export type QueryGetOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetRatingByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetRatingsByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetUserByIdArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUserPreferencesArgs = {
  userId: Scalars['ID']['input'];
};

export type Rating = {
  __typename?: 'Rating';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  overall?: Maybe<Scalars['Int']['output']>;
  quality?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['ID']['output'];
};

export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  code?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export enum SweetenerType {
  None = 'NONE',
  Sugar = 'SUGAR',
  Sweetener = 'SWEETENER'
}

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID']['output'];
  members?: Maybe<Array<Maybe<User>>>;
  name: Scalars['String']['output'];
};

export type UpdatePreferencesResponse = {
  __typename?: 'UpdatePreferencesResponse';
  data?: Maybe<Preferences>;
  status: ResponseStatus;
};

export type UpdateUserInput = {
  contactNumber?: InputMaybe<Scalars['BigInt']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserResponse = {
  __typename?: 'UpdateUserResponse';
  data?: Maybe<User>;
  status?: Maybe<ResponseStatus>;
};

export type User = {
  __typename?: 'User';
  contactNumber?: Maybe<Scalars['BigInt']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media: Array<UserMedia>;
  name: Scalars['String']['output'];
  teamId?: Maybe<Scalars['String']['output']>;
};

export type UserMedia = {
  __typename?: 'UserMedia';
  alt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type AllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOrdersQuery = { __typename?: 'Query', getAllOrders: Array<{ __typename?: 'Order', id: string, createdAt: string, completed?: boolean, orderType?: OrderType, userId?: string, teamId?: string, notes?: string }> };

export type OrderQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type OrderQuery = { __typename?: 'Query', getOrder?: { __typename?: 'Order', id: string, createdAt: string, completed?: boolean, orderType?: OrderType, notes?: string, userId?: string, teamId?: string, ratings?: Array<{ __typename?: 'Rating', id: string, quality?: number, service?: number, overall?: number, comment?: string }>, items: Array<{ __typename?: 'OrderItem', id: string, quantity: number, item: { __typename?: 'Item', id: string, name: string, price: number } }> } };

export type CreateOrderMutationVariables = Exact<{
  input: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'CreateOrderResponse', status?: { __typename?: 'ResponseStatus', errorMessage?: string, status: string }, data?: { __typename?: 'Order', orderType?: OrderType, userId?: string, notes?: string, items: Array<{ __typename?: 'OrderItem', id: string, quantity: number }> } } };

export type CreatePreferencesMutationVariables = Exact<{
  input: CreatePreferencesInput;
}>;


export type CreatePreferencesMutation = { __typename?: 'Mutation', createPreferences: { __typename?: 'CreatePreferencesResponse', status: { __typename?: 'ResponseStatus', status: string, errorMessage?: string }, data?: { __typename?: 'Preferences', id: string, userId: string, drinkType: DrinkType, sweetenerType: SweetenerType, sugarAmount: number, milkStrength: MilkStrength, notes?: string } } };

export type GetRatingByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRatingByIdQuery = { __typename?: 'Query', getRatingById?: { __typename?: 'Rating', id: string, quality?: number, service?: number, overall?: number, comment?: string, createdAt: string } };

export type GetRatingsByUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetRatingsByUserQuery = { __typename?: 'Query', getRatingsByUser: Array<{ __typename?: 'Rating', id: string, quality?: number, service?: number, overall?: number, comment?: string }> };

export type CreateRatingMutationVariables = Exact<{
  input: CreateRatingInput;
}>;


export type CreateRatingMutation = { __typename?: 'Mutation', createRating: { __typename?: 'Rating', id: string } };

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById?: { __typename?: 'User', id: string, name: string, email?: string, contactNumber?: any, media: Array<{ __typename?: 'UserMedia', id: string, url: string, type?: string, alt?: string, createdAt?: any }> } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers?: Array<{ __typename?: 'User', id: string, name: string, email?: string, contactNumber?: any, media: Array<{ __typename?: 'UserMedia', id: string, url: string, type?: string, alt?: string, createdAt?: any }> }> };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name: string } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, name: string } };

export type GetAllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamsQuery = { __typename?: 'Query', getAllTeams?: Array<{ __typename?: 'Team', id: string, name: string, members?: Array<{ __typename?: 'User', id: string, name: string, email?: string, teamId?: string }> }> };

export type CreateTeamMutationVariables = Exact<{
  input: CreateTeamInput;
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', id: string, name: string } };


export const AllOrdersDocument = gql`
    query AllOrders {
  getAllOrders {
    id
    createdAt
    completed
    orderType
    userId
    teamId
    notes
  }
}
    `;

/**
 * __useAllOrdersQuery__
 *
 * To run a query within a React component, call `useAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
      }
export function useAllOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
        }
export function useAllOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
        }
export type AllOrdersQueryHookResult = ReturnType<typeof useAllOrdersQuery>;
export type AllOrdersLazyQueryHookResult = ReturnType<typeof useAllOrdersLazyQuery>;
export type AllOrdersSuspenseQueryHookResult = ReturnType<typeof useAllOrdersSuspenseQuery>;
export type AllOrdersQueryResult = Apollo.QueryResult<AllOrdersQuery, AllOrdersQueryVariables>;
export const OrderDocument = gql`
    query Order($orderId: ID!) {
  getOrder(id: $orderId) {
    id
    createdAt
    completed
    orderType
    notes
    userId
    teamId
    ratings {
      id
      quality
      service
      overall
      comment
    }
    items {
      id
      quantity
      item {
        id
        name
        price
      }
    }
  }
}
    `;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useOrderQuery(baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables> & ({ variables: OrderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export function useOrderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderSuspenseQueryHookResult = ReturnType<typeof useOrderSuspenseQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    status {
      errorMessage
      status
    }
    data {
      orderType
      userId
      notes
      items {
        id
        quantity
      }
    }
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreatePreferencesDocument = gql`
    mutation CreatePreferences($input: CreatePreferencesInput!) {
  createPreferences(input: $input) {
    status {
      status
      errorMessage
    }
    data {
      id
      userId
      drinkType
      sweetenerType
      sugarAmount
      milkStrength
      notes
    }
  }
}
    `;
export type CreatePreferencesMutationFn = Apollo.MutationFunction<CreatePreferencesMutation, CreatePreferencesMutationVariables>;

/**
 * __useCreatePreferencesMutation__
 *
 * To run a mutation, you first call `useCreatePreferencesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePreferencesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPreferencesMutation, { data, loading, error }] = useCreatePreferencesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePreferencesMutation(baseOptions?: Apollo.MutationHookOptions<CreatePreferencesMutation, CreatePreferencesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePreferencesMutation, CreatePreferencesMutationVariables>(CreatePreferencesDocument, options);
      }
export type CreatePreferencesMutationHookResult = ReturnType<typeof useCreatePreferencesMutation>;
export type CreatePreferencesMutationResult = Apollo.MutationResult<CreatePreferencesMutation>;
export type CreatePreferencesMutationOptions = Apollo.BaseMutationOptions<CreatePreferencesMutation, CreatePreferencesMutationVariables>;
export const GetRatingByIdDocument = gql`
    query GetRatingById($id: ID!) {
  getRatingById(id: $id) {
    id
    quality
    service
    overall
    comment
    createdAt
  }
}
    `;

/**
 * __useGetRatingByIdQuery__
 *
 * To run a query within a React component, call `useGetRatingByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatingByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatingByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRatingByIdQuery(baseOptions: Apollo.QueryHookOptions<GetRatingByIdQuery, GetRatingByIdQueryVariables> & ({ variables: GetRatingByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRatingByIdQuery, GetRatingByIdQueryVariables>(GetRatingByIdDocument, options);
      }
export function useGetRatingByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRatingByIdQuery, GetRatingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRatingByIdQuery, GetRatingByIdQueryVariables>(GetRatingByIdDocument, options);
        }
export function useGetRatingByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRatingByIdQuery, GetRatingByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRatingByIdQuery, GetRatingByIdQueryVariables>(GetRatingByIdDocument, options);
        }
export type GetRatingByIdQueryHookResult = ReturnType<typeof useGetRatingByIdQuery>;
export type GetRatingByIdLazyQueryHookResult = ReturnType<typeof useGetRatingByIdLazyQuery>;
export type GetRatingByIdSuspenseQueryHookResult = ReturnType<typeof useGetRatingByIdSuspenseQuery>;
export type GetRatingByIdQueryResult = Apollo.QueryResult<GetRatingByIdQuery, GetRatingByIdQueryVariables>;
export const GetRatingsByUserDocument = gql`
    query GetRatingsByUser($userId: ID!) {
  getRatingsByUser(userId: $userId) {
    id
    quality
    service
    overall
    comment
  }
}
    `;

/**
 * __useGetRatingsByUserQuery__
 *
 * To run a query within a React component, call `useGetRatingsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatingsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatingsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetRatingsByUserQuery(baseOptions: Apollo.QueryHookOptions<GetRatingsByUserQuery, GetRatingsByUserQueryVariables> & ({ variables: GetRatingsByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRatingsByUserQuery, GetRatingsByUserQueryVariables>(GetRatingsByUserDocument, options);
      }
export function useGetRatingsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRatingsByUserQuery, GetRatingsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRatingsByUserQuery, GetRatingsByUserQueryVariables>(GetRatingsByUserDocument, options);
        }
export function useGetRatingsByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRatingsByUserQuery, GetRatingsByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRatingsByUserQuery, GetRatingsByUserQueryVariables>(GetRatingsByUserDocument, options);
        }
export type GetRatingsByUserQueryHookResult = ReturnType<typeof useGetRatingsByUserQuery>;
export type GetRatingsByUserLazyQueryHookResult = ReturnType<typeof useGetRatingsByUserLazyQuery>;
export type GetRatingsByUserSuspenseQueryHookResult = ReturnType<typeof useGetRatingsByUserSuspenseQuery>;
export type GetRatingsByUserQueryResult = Apollo.QueryResult<GetRatingsByUserQuery, GetRatingsByUserQueryVariables>;
export const CreateRatingDocument = gql`
    mutation CreateRating($input: CreateRatingInput!) {
  createRating(input: $input) {
    id
  }
}
    `;
export type CreateRatingMutationFn = Apollo.MutationFunction<CreateRatingMutation, CreateRatingMutationVariables>;

/**
 * __useCreateRatingMutation__
 *
 * To run a mutation, you first call `useCreateRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRatingMutation, { data, loading, error }] = useCreateRatingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRatingMutation(baseOptions?: Apollo.MutationHookOptions<CreateRatingMutation, CreateRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRatingMutation, CreateRatingMutationVariables>(CreateRatingDocument, options);
      }
export type CreateRatingMutationHookResult = ReturnType<typeof useCreateRatingMutation>;
export type CreateRatingMutationResult = Apollo.MutationResult<CreateRatingMutation>;
export type CreateRatingMutationOptions = Apollo.BaseMutationOptions<CreateRatingMutation, CreateRatingMutationVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($userId: ID!) {
  getUserById(userId: $userId) {
    id
    name
    email
    contactNumber
    media {
      id
      url
      type
      alt
      createdAt
    }
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    id
    name
    email
    contactNumber
    media {
      id
      url
      type
      alt
      createdAt
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAllTeamsDocument = gql`
    query GetAllTeams {
  getAllTeams {
    id
    name
    members {
      id
      name
      email
      teamId
    }
  }
}
    `;

/**
 * __useGetAllTeamsQuery__
 *
 * To run a query within a React component, call `useGetAllTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
      }
export function useGetAllTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
        }
export function useGetAllTeamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
        }
export type GetAllTeamsQueryHookResult = ReturnType<typeof useGetAllTeamsQuery>;
export type GetAllTeamsLazyQueryHookResult = ReturnType<typeof useGetAllTeamsLazyQuery>;
export type GetAllTeamsSuspenseQueryHookResult = ReturnType<typeof useGetAllTeamsSuspenseQuery>;
export type GetAllTeamsQueryResult = Apollo.QueryResult<GetAllTeamsQuery, GetAllTeamsQueryVariables>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
    id
    name
  }
}
    `;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, options);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;