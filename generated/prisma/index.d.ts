
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ticker
 * 
 */
export type Ticker = $Result.DefaultSelection<Prisma.$TickerPayload>
/**
 * Model Stock_market_data
 * 
 */
export type Stock_market_data = $Result.DefaultSelection<Prisma.$Stock_market_dataPayload>
/**
 * Model Cumulative_return
 * 
 */
export type Cumulative_return = $Result.DefaultSelection<Prisma.$Cumulative_returnPayload>
/**
 * Model Trending
 * 
 */
export type Trending = $Result.DefaultSelection<Prisma.$TrendingPayload>
/**
 * Model Volatility
 * 
 */
export type Volatility = $Result.DefaultSelection<Prisma.$VolatilityPayload>
/**
 * Model Anomaly_prediction
 * 
 */
export type Anomaly_prediction = $Result.DefaultSelection<Prisma.$Anomaly_predictionPayload>
/**
 * Model Ema_indicators
 * 
 */
export type Ema_indicators = $Result.DefaultSelection<Prisma.$Ema_indicatorsPayload>
/**
 * Model Sma_indicators
 * 
 */
export type Sma_indicators = $Result.DefaultSelection<Prisma.$Sma_indicatorsPayload>
/**
 * Model Rsi_indicators
 * 
 */
export type Rsi_indicators = $Result.DefaultSelection<Prisma.$Rsi_indicatorsPayload>
/**
 * Model Macd_indicators
 * 
 */
export type Macd_indicators = $Result.DefaultSelection<Prisma.$Macd_indicatorsPayload>
/**
 * Model Bollinger_indicators
 * 
 */
export type Bollinger_indicators = $Result.DefaultSelection<Prisma.$Bollinger_indicatorsPayload>
/**
 * Model Indicators_technical
 * 
 */
export type Indicators_technical = $Result.DefaultSelection<Prisma.$Indicators_technicalPayload>
/**
 * Model Statistic
 * 
 */
export type Statistic = $Result.DefaultSelection<Prisma.$StatisticPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tickers
 * const tickers = await prisma.ticker.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tickers
   * const tickers = await prisma.ticker.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ticker`: Exposes CRUD operations for the **Ticker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickers
    * const tickers = await prisma.ticker.findMany()
    * ```
    */
  get ticker(): Prisma.TickerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock_market_data`: Exposes CRUD operations for the **Stock_market_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stock_market_data
    * const stock_market_data = await prisma.stock_market_data.findMany()
    * ```
    */
  get stock_market_data(): Prisma.Stock_market_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cumulative_return`: Exposes CRUD operations for the **Cumulative_return** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cumulative_returns
    * const cumulative_returns = await prisma.cumulative_return.findMany()
    * ```
    */
  get cumulative_return(): Prisma.Cumulative_returnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trending`: Exposes CRUD operations for the **Trending** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trendings
    * const trendings = await prisma.trending.findMany()
    * ```
    */
  get trending(): Prisma.TrendingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volatility`: Exposes CRUD operations for the **Volatility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volatilities
    * const volatilities = await prisma.volatility.findMany()
    * ```
    */
  get volatility(): Prisma.VolatilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anomaly_prediction`: Exposes CRUD operations for the **Anomaly_prediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anomaly_predictions
    * const anomaly_predictions = await prisma.anomaly_prediction.findMany()
    * ```
    */
  get anomaly_prediction(): Prisma.Anomaly_predictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ema_indicators`: Exposes CRUD operations for the **Ema_indicators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ema_indicators
    * const ema_indicators = await prisma.ema_indicators.findMany()
    * ```
    */
  get ema_indicators(): Prisma.Ema_indicatorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sma_indicators`: Exposes CRUD operations for the **Sma_indicators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sma_indicators
    * const sma_indicators = await prisma.sma_indicators.findMany()
    * ```
    */
  get sma_indicators(): Prisma.Sma_indicatorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rsi_indicators`: Exposes CRUD operations for the **Rsi_indicators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rsi_indicators
    * const rsi_indicators = await prisma.rsi_indicators.findMany()
    * ```
    */
  get rsi_indicators(): Prisma.Rsi_indicatorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.macd_indicators`: Exposes CRUD operations for the **Macd_indicators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Macd_indicators
    * const macd_indicators = await prisma.macd_indicators.findMany()
    * ```
    */
  get macd_indicators(): Prisma.Macd_indicatorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bollinger_indicators`: Exposes CRUD operations for the **Bollinger_indicators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bollinger_indicators
    * const bollinger_indicators = await prisma.bollinger_indicators.findMany()
    * ```
    */
  get bollinger_indicators(): Prisma.Bollinger_indicatorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indicators_technical`: Exposes CRUD operations for the **Indicators_technical** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indicators_technicals
    * const indicators_technicals = await prisma.indicators_technical.findMany()
    * ```
    */
  get indicators_technical(): Prisma.Indicators_technicalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statistic`: Exposes CRUD operations for the **Statistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statistics
    * const statistics = await prisma.statistic.findMany()
    * ```
    */
  get statistic(): Prisma.StatisticDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ticker: 'Ticker',
    Stock_market_data: 'Stock_market_data',
    Cumulative_return: 'Cumulative_return',
    Trending: 'Trending',
    Volatility: 'Volatility',
    Anomaly_prediction: 'Anomaly_prediction',
    Ema_indicators: 'Ema_indicators',
    Sma_indicators: 'Sma_indicators',
    Rsi_indicators: 'Rsi_indicators',
    Macd_indicators: 'Macd_indicators',
    Bollinger_indicators: 'Bollinger_indicators',
    Indicators_technical: 'Indicators_technical',
    Statistic: 'Statistic'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ticker" | "stock_market_data" | "cumulative_return" | "trending" | "volatility" | "anomaly_prediction" | "ema_indicators" | "sma_indicators" | "rsi_indicators" | "macd_indicators" | "bollinger_indicators" | "indicators_technical" | "statistic"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ticker: {
        payload: Prisma.$TickerPayload<ExtArgs>
        fields: Prisma.TickerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TickerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TickerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          findFirst: {
            args: Prisma.TickerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TickerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          findMany: {
            args: Prisma.TickerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>[]
          }
          create: {
            args: Prisma.TickerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          createMany: {
            args: Prisma.TickerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TickerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          update: {
            args: Prisma.TickerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          deleteMany: {
            args: Prisma.TickerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TickerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TickerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          aggregate: {
            args: Prisma.TickerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicker>
          }
          groupBy: {
            args: Prisma.TickerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TickerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TickerCountArgs<ExtArgs>
            result: $Utils.Optional<TickerCountAggregateOutputType> | number
          }
        }
      }
      Stock_market_data: {
        payload: Prisma.$Stock_market_dataPayload<ExtArgs>
        fields: Prisma.Stock_market_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Stock_market_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Stock_market_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload>
          }
          findFirst: {
            args: Prisma.Stock_market_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Stock_market_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload>
          }
          findMany: {
            args: Prisma.Stock_market_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload>[]
          }
          create: {
            args: Prisma.Stock_market_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload>
          }
          createMany: {
            args: Prisma.Stock_market_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Stock_market_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload>
          }
          update: {
            args: Prisma.Stock_market_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload>
          }
          deleteMany: {
            args: Prisma.Stock_market_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Stock_market_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Stock_market_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Stock_market_dataPayload>
          }
          aggregate: {
            args: Prisma.Stock_market_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock_market_data>
          }
          groupBy: {
            args: Prisma.Stock_market_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stock_market_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.Stock_market_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Stock_market_dataCountAggregateOutputType> | number
          }
        }
      }
      Cumulative_return: {
        payload: Prisma.$Cumulative_returnPayload<ExtArgs>
        fields: Prisma.Cumulative_returnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Cumulative_returnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Cumulative_returnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload>
          }
          findFirst: {
            args: Prisma.Cumulative_returnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Cumulative_returnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload>
          }
          findMany: {
            args: Prisma.Cumulative_returnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload>[]
          }
          create: {
            args: Prisma.Cumulative_returnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload>
          }
          createMany: {
            args: Prisma.Cumulative_returnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Cumulative_returnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload>
          }
          update: {
            args: Prisma.Cumulative_returnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload>
          }
          deleteMany: {
            args: Prisma.Cumulative_returnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Cumulative_returnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Cumulative_returnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cumulative_returnPayload>
          }
          aggregate: {
            args: Prisma.Cumulative_returnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCumulative_return>
          }
          groupBy: {
            args: Prisma.Cumulative_returnGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cumulative_returnGroupByOutputType>[]
          }
          count: {
            args: Prisma.Cumulative_returnCountArgs<ExtArgs>
            result: $Utils.Optional<Cumulative_returnCountAggregateOutputType> | number
          }
        }
      }
      Trending: {
        payload: Prisma.$TrendingPayload<ExtArgs>
        fields: Prisma.TrendingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload>
          }
          findFirst: {
            args: Prisma.TrendingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload>
          }
          findMany: {
            args: Prisma.TrendingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload>[]
          }
          create: {
            args: Prisma.TrendingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload>
          }
          createMany: {
            args: Prisma.TrendingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrendingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload>
          }
          update: {
            args: Prisma.TrendingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload>
          }
          deleteMany: {
            args: Prisma.TrendingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrendingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrendingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingPayload>
          }
          aggregate: {
            args: Prisma.TrendingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrending>
          }
          groupBy: {
            args: Prisma.TrendingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrendingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendingCountArgs<ExtArgs>
            result: $Utils.Optional<TrendingCountAggregateOutputType> | number
          }
        }
      }
      Volatility: {
        payload: Prisma.$VolatilityPayload<ExtArgs>
        fields: Prisma.VolatilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolatilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolatilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload>
          }
          findFirst: {
            args: Prisma.VolatilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolatilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload>
          }
          findMany: {
            args: Prisma.VolatilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload>[]
          }
          create: {
            args: Prisma.VolatilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload>
          }
          createMany: {
            args: Prisma.VolatilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VolatilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload>
          }
          update: {
            args: Prisma.VolatilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload>
          }
          deleteMany: {
            args: Prisma.VolatilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolatilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VolatilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolatilityPayload>
          }
          aggregate: {
            args: Prisma.VolatilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolatility>
          }
          groupBy: {
            args: Prisma.VolatilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolatilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolatilityCountArgs<ExtArgs>
            result: $Utils.Optional<VolatilityCountAggregateOutputType> | number
          }
        }
      }
      Anomaly_prediction: {
        payload: Prisma.$Anomaly_predictionPayload<ExtArgs>
        fields: Prisma.Anomaly_predictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Anomaly_predictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Anomaly_predictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload>
          }
          findFirst: {
            args: Prisma.Anomaly_predictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Anomaly_predictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload>
          }
          findMany: {
            args: Prisma.Anomaly_predictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload>[]
          }
          create: {
            args: Prisma.Anomaly_predictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload>
          }
          createMany: {
            args: Prisma.Anomaly_predictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Anomaly_predictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload>
          }
          update: {
            args: Prisma.Anomaly_predictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload>
          }
          deleteMany: {
            args: Prisma.Anomaly_predictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Anomaly_predictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Anomaly_predictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Anomaly_predictionPayload>
          }
          aggregate: {
            args: Prisma.Anomaly_predictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnomaly_prediction>
          }
          groupBy: {
            args: Prisma.Anomaly_predictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Anomaly_predictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.Anomaly_predictionCountArgs<ExtArgs>
            result: $Utils.Optional<Anomaly_predictionCountAggregateOutputType> | number
          }
        }
      }
      Ema_indicators: {
        payload: Prisma.$Ema_indicatorsPayload<ExtArgs>
        fields: Prisma.Ema_indicatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Ema_indicatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Ema_indicatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload>
          }
          findFirst: {
            args: Prisma.Ema_indicatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Ema_indicatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload>
          }
          findMany: {
            args: Prisma.Ema_indicatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload>[]
          }
          create: {
            args: Prisma.Ema_indicatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload>
          }
          createMany: {
            args: Prisma.Ema_indicatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Ema_indicatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload>
          }
          update: {
            args: Prisma.Ema_indicatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload>
          }
          deleteMany: {
            args: Prisma.Ema_indicatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Ema_indicatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Ema_indicatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ema_indicatorsPayload>
          }
          aggregate: {
            args: Prisma.Ema_indicatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEma_indicators>
          }
          groupBy: {
            args: Prisma.Ema_indicatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ema_indicatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Ema_indicatorsCountArgs<ExtArgs>
            result: $Utils.Optional<Ema_indicatorsCountAggregateOutputType> | number
          }
        }
      }
      Sma_indicators: {
        payload: Prisma.$Sma_indicatorsPayload<ExtArgs>
        fields: Prisma.Sma_indicatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sma_indicatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sma_indicatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload>
          }
          findFirst: {
            args: Prisma.Sma_indicatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sma_indicatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload>
          }
          findMany: {
            args: Prisma.Sma_indicatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload>[]
          }
          create: {
            args: Prisma.Sma_indicatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload>
          }
          createMany: {
            args: Prisma.Sma_indicatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Sma_indicatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload>
          }
          update: {
            args: Prisma.Sma_indicatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload>
          }
          deleteMany: {
            args: Prisma.Sma_indicatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sma_indicatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Sma_indicatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sma_indicatorsPayload>
          }
          aggregate: {
            args: Prisma.Sma_indicatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSma_indicators>
          }
          groupBy: {
            args: Prisma.Sma_indicatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sma_indicatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sma_indicatorsCountArgs<ExtArgs>
            result: $Utils.Optional<Sma_indicatorsCountAggregateOutputType> | number
          }
        }
      }
      Rsi_indicators: {
        payload: Prisma.$Rsi_indicatorsPayload<ExtArgs>
        fields: Prisma.Rsi_indicatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Rsi_indicatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Rsi_indicatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload>
          }
          findFirst: {
            args: Prisma.Rsi_indicatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Rsi_indicatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload>
          }
          findMany: {
            args: Prisma.Rsi_indicatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload>[]
          }
          create: {
            args: Prisma.Rsi_indicatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload>
          }
          createMany: {
            args: Prisma.Rsi_indicatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Rsi_indicatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload>
          }
          update: {
            args: Prisma.Rsi_indicatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload>
          }
          deleteMany: {
            args: Prisma.Rsi_indicatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Rsi_indicatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Rsi_indicatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rsi_indicatorsPayload>
          }
          aggregate: {
            args: Prisma.Rsi_indicatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRsi_indicators>
          }
          groupBy: {
            args: Prisma.Rsi_indicatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rsi_indicatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Rsi_indicatorsCountArgs<ExtArgs>
            result: $Utils.Optional<Rsi_indicatorsCountAggregateOutputType> | number
          }
        }
      }
      Macd_indicators: {
        payload: Prisma.$Macd_indicatorsPayload<ExtArgs>
        fields: Prisma.Macd_indicatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Macd_indicatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Macd_indicatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload>
          }
          findFirst: {
            args: Prisma.Macd_indicatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Macd_indicatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload>
          }
          findMany: {
            args: Prisma.Macd_indicatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload>[]
          }
          create: {
            args: Prisma.Macd_indicatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload>
          }
          createMany: {
            args: Prisma.Macd_indicatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Macd_indicatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload>
          }
          update: {
            args: Prisma.Macd_indicatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload>
          }
          deleteMany: {
            args: Prisma.Macd_indicatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Macd_indicatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Macd_indicatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Macd_indicatorsPayload>
          }
          aggregate: {
            args: Prisma.Macd_indicatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMacd_indicators>
          }
          groupBy: {
            args: Prisma.Macd_indicatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Macd_indicatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Macd_indicatorsCountArgs<ExtArgs>
            result: $Utils.Optional<Macd_indicatorsCountAggregateOutputType> | number
          }
        }
      }
      Bollinger_indicators: {
        payload: Prisma.$Bollinger_indicatorsPayload<ExtArgs>
        fields: Prisma.Bollinger_indicatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Bollinger_indicatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Bollinger_indicatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload>
          }
          findFirst: {
            args: Prisma.Bollinger_indicatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Bollinger_indicatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload>
          }
          findMany: {
            args: Prisma.Bollinger_indicatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload>[]
          }
          create: {
            args: Prisma.Bollinger_indicatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload>
          }
          createMany: {
            args: Prisma.Bollinger_indicatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Bollinger_indicatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload>
          }
          update: {
            args: Prisma.Bollinger_indicatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload>
          }
          deleteMany: {
            args: Prisma.Bollinger_indicatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Bollinger_indicatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Bollinger_indicatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bollinger_indicatorsPayload>
          }
          aggregate: {
            args: Prisma.Bollinger_indicatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBollinger_indicators>
          }
          groupBy: {
            args: Prisma.Bollinger_indicatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bollinger_indicatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Bollinger_indicatorsCountArgs<ExtArgs>
            result: $Utils.Optional<Bollinger_indicatorsCountAggregateOutputType> | number
          }
        }
      }
      Indicators_technical: {
        payload: Prisma.$Indicators_technicalPayload<ExtArgs>
        fields: Prisma.Indicators_technicalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Indicators_technicalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Indicators_technicalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload>
          }
          findFirst: {
            args: Prisma.Indicators_technicalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Indicators_technicalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload>
          }
          findMany: {
            args: Prisma.Indicators_technicalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload>[]
          }
          create: {
            args: Prisma.Indicators_technicalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload>
          }
          createMany: {
            args: Prisma.Indicators_technicalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Indicators_technicalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload>
          }
          update: {
            args: Prisma.Indicators_technicalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload>
          }
          deleteMany: {
            args: Prisma.Indicators_technicalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Indicators_technicalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Indicators_technicalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Indicators_technicalPayload>
          }
          aggregate: {
            args: Prisma.Indicators_technicalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndicators_technical>
          }
          groupBy: {
            args: Prisma.Indicators_technicalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Indicators_technicalGroupByOutputType>[]
          }
          count: {
            args: Prisma.Indicators_technicalCountArgs<ExtArgs>
            result: $Utils.Optional<Indicators_technicalCountAggregateOutputType> | number
          }
        }
      }
      Statistic: {
        payload: Prisma.$StatisticPayload<ExtArgs>
        fields: Prisma.StatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findFirst: {
            args: Prisma.StatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findMany: {
            args: Prisma.StatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          create: {
            args: Prisma.StatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          createMany: {
            args: Prisma.StatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          update: {
            args: Prisma.StatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          deleteMany: {
            args: Prisma.StatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          aggregate: {
            args: Prisma.StatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatistic>
          }
          groupBy: {
            args: Prisma.StatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticCountArgs<ExtArgs>
            result: $Utils.Optional<StatisticCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    ticker?: TickerOmit
    stock_market_data?: Stock_market_dataOmit
    cumulative_return?: Cumulative_returnOmit
    trending?: TrendingOmit
    volatility?: VolatilityOmit
    anomaly_prediction?: Anomaly_predictionOmit
    ema_indicators?: Ema_indicatorsOmit
    sma_indicators?: Sma_indicatorsOmit
    rsi_indicators?: Rsi_indicatorsOmit
    macd_indicators?: Macd_indicatorsOmit
    bollinger_indicators?: Bollinger_indicatorsOmit
    indicators_technical?: Indicators_technicalOmit
    statistic?: StatisticOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TickerCountOutputType
   */

  export type TickerCountOutputType = {
    Trending: number
    Anomaly_prediction: number
    Bollinger_indicators: number
    Ema_indicators: number
    Indicators_technical: number
    Macd_indicators: number
    Rsi_indicators: number
    Sma_indicators: number
    Statistic: number
    Stock_market_data: number
    Volatility: number
  }

  export type TickerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trending?: boolean | TickerCountOutputTypeCountTrendingArgs
    Anomaly_prediction?: boolean | TickerCountOutputTypeCountAnomaly_predictionArgs
    Bollinger_indicators?: boolean | TickerCountOutputTypeCountBollinger_indicatorsArgs
    Ema_indicators?: boolean | TickerCountOutputTypeCountEma_indicatorsArgs
    Indicators_technical?: boolean | TickerCountOutputTypeCountIndicators_technicalArgs
    Macd_indicators?: boolean | TickerCountOutputTypeCountMacd_indicatorsArgs
    Rsi_indicators?: boolean | TickerCountOutputTypeCountRsi_indicatorsArgs
    Sma_indicators?: boolean | TickerCountOutputTypeCountSma_indicatorsArgs
    Statistic?: boolean | TickerCountOutputTypeCountStatisticArgs
    Stock_market_data?: boolean | TickerCountOutputTypeCountStock_market_dataArgs
    Volatility?: boolean | TickerCountOutputTypeCountVolatilityArgs
  }

  // Custom InputTypes
  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerCountOutputType
     */
    select?: TickerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountTrendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountAnomaly_predictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Anomaly_predictionWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountBollinger_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bollinger_indicatorsWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountEma_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ema_indicatorsWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountIndicators_technicalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Indicators_technicalWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountMacd_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Macd_indicatorsWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountRsi_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rsi_indicatorsWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountSma_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sma_indicatorsWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountStatisticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountStock_market_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Stock_market_dataWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountVolatilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolatilityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ticker
   */

  export type AggregateTicker = {
    _count: TickerCountAggregateOutputType | null
    _avg: TickerAvgAggregateOutputType | null
    _sum: TickerSumAggregateOutputType | null
    _min: TickerMinAggregateOutputType | null
    _max: TickerMaxAggregateOutputType | null
  }

  export type TickerAvgAggregateOutputType = {
    id: number | null
  }

  export type TickerSumAggregateOutputType = {
    id: number | null
  }

  export type TickerMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TickerMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TickerCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TickerAvgAggregateInputType = {
    id?: true
  }

  export type TickerSumAggregateInputType = {
    id?: true
  }

  export type TickerMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TickerMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TickerCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TickerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticker to aggregate.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickers
    **/
    _count?: true | TickerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TickerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TickerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TickerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TickerMaxAggregateInputType
  }

  export type GetTickerAggregateType<T extends TickerAggregateArgs> = {
        [P in keyof T & keyof AggregateTicker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicker[P]>
      : GetScalarType<T[P], AggregateTicker[P]>
  }




  export type TickerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TickerWhereInput
    orderBy?: TickerOrderByWithAggregationInput | TickerOrderByWithAggregationInput[]
    by: TickerScalarFieldEnum[] | TickerScalarFieldEnum
    having?: TickerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TickerCountAggregateInputType | true
    _avg?: TickerAvgAggregateInputType
    _sum?: TickerSumAggregateInputType
    _min?: TickerMinAggregateInputType
    _max?: TickerMaxAggregateInputType
  }

  export type TickerGroupByOutputType = {
    id: number
    name: string
    _count: TickerCountAggregateOutputType | null
    _avg: TickerAvgAggregateOutputType | null
    _sum: TickerSumAggregateOutputType | null
    _min: TickerMinAggregateOutputType | null
    _max: TickerMaxAggregateOutputType | null
  }

  type GetTickerGroupByPayload<T extends TickerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TickerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TickerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TickerGroupByOutputType[P]>
            : GetScalarType<T[P], TickerGroupByOutputType[P]>
        }
      >
    >


  export type TickerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Trending?: boolean | Ticker$TrendingArgs<ExtArgs>
    Anomaly_prediction?: boolean | Ticker$Anomaly_predictionArgs<ExtArgs>
    Bollinger_indicators?: boolean | Ticker$Bollinger_indicatorsArgs<ExtArgs>
    Cumulative_return?: boolean | Ticker$Cumulative_returnArgs<ExtArgs>
    Ema_indicators?: boolean | Ticker$Ema_indicatorsArgs<ExtArgs>
    Indicators_technical?: boolean | Ticker$Indicators_technicalArgs<ExtArgs>
    Macd_indicators?: boolean | Ticker$Macd_indicatorsArgs<ExtArgs>
    Rsi_indicators?: boolean | Ticker$Rsi_indicatorsArgs<ExtArgs>
    Sma_indicators?: boolean | Ticker$Sma_indicatorsArgs<ExtArgs>
    Statistic?: boolean | Ticker$StatisticArgs<ExtArgs>
    Stock_market_data?: boolean | Ticker$Stock_market_dataArgs<ExtArgs>
    Volatility?: boolean | Ticker$VolatilityArgs<ExtArgs>
    _count?: boolean | TickerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticker"]>



  export type TickerSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TickerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["ticker"]>
  export type TickerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trending?: boolean | Ticker$TrendingArgs<ExtArgs>
    Anomaly_prediction?: boolean | Ticker$Anomaly_predictionArgs<ExtArgs>
    Bollinger_indicators?: boolean | Ticker$Bollinger_indicatorsArgs<ExtArgs>
    Cumulative_return?: boolean | Ticker$Cumulative_returnArgs<ExtArgs>
    Ema_indicators?: boolean | Ticker$Ema_indicatorsArgs<ExtArgs>
    Indicators_technical?: boolean | Ticker$Indicators_technicalArgs<ExtArgs>
    Macd_indicators?: boolean | Ticker$Macd_indicatorsArgs<ExtArgs>
    Rsi_indicators?: boolean | Ticker$Rsi_indicatorsArgs<ExtArgs>
    Sma_indicators?: boolean | Ticker$Sma_indicatorsArgs<ExtArgs>
    Statistic?: boolean | Ticker$StatisticArgs<ExtArgs>
    Stock_market_data?: boolean | Ticker$Stock_market_dataArgs<ExtArgs>
    Volatility?: boolean | Ticker$VolatilityArgs<ExtArgs>
    _count?: boolean | TickerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TickerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticker"
    objects: {
      Trending: Prisma.$TrendingPayload<ExtArgs>[]
      Anomaly_prediction: Prisma.$Anomaly_predictionPayload<ExtArgs>[]
      Bollinger_indicators: Prisma.$Bollinger_indicatorsPayload<ExtArgs>[]
      Cumulative_return: Prisma.$Cumulative_returnPayload<ExtArgs> | null
      Ema_indicators: Prisma.$Ema_indicatorsPayload<ExtArgs>[]
      Indicators_technical: Prisma.$Indicators_technicalPayload<ExtArgs>[]
      Macd_indicators: Prisma.$Macd_indicatorsPayload<ExtArgs>[]
      Rsi_indicators: Prisma.$Rsi_indicatorsPayload<ExtArgs>[]
      Sma_indicators: Prisma.$Sma_indicatorsPayload<ExtArgs>[]
      Statistic: Prisma.$StatisticPayload<ExtArgs>[]
      Stock_market_data: Prisma.$Stock_market_dataPayload<ExtArgs>[]
      Volatility: Prisma.$VolatilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["ticker"]>
    composites: {}
  }

  type TickerGetPayload<S extends boolean | null | undefined | TickerDefaultArgs> = $Result.GetResult<Prisma.$TickerPayload, S>

  type TickerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TickerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TickerCountAggregateInputType | true
    }

  export interface TickerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticker'], meta: { name: 'Ticker' } }
    /**
     * Find zero or one Ticker that matches the filter.
     * @param {TickerFindUniqueArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TickerFindUniqueArgs>(args: SelectSubset<T, TickerFindUniqueArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TickerFindUniqueOrThrowArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TickerFindUniqueOrThrowArgs>(args: SelectSubset<T, TickerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindFirstArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TickerFindFirstArgs>(args?: SelectSubset<T, TickerFindFirstArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindFirstOrThrowArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TickerFindFirstOrThrowArgs>(args?: SelectSubset<T, TickerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickers
     * const tickers = await prisma.ticker.findMany()
     * 
     * // Get first 10 Tickers
     * const tickers = await prisma.ticker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tickerWithIdOnly = await prisma.ticker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TickerFindManyArgs>(args?: SelectSubset<T, TickerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticker.
     * @param {TickerCreateArgs} args - Arguments to create a Ticker.
     * @example
     * // Create one Ticker
     * const Ticker = await prisma.ticker.create({
     *   data: {
     *     // ... data to create a Ticker
     *   }
     * })
     * 
     */
    create<T extends TickerCreateArgs>(args: SelectSubset<T, TickerCreateArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickers.
     * @param {TickerCreateManyArgs} args - Arguments to create many Tickers.
     * @example
     * // Create many Tickers
     * const ticker = await prisma.ticker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TickerCreateManyArgs>(args?: SelectSubset<T, TickerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticker.
     * @param {TickerDeleteArgs} args - Arguments to delete one Ticker.
     * @example
     * // Delete one Ticker
     * const Ticker = await prisma.ticker.delete({
     *   where: {
     *     // ... filter to delete one Ticker
     *   }
     * })
     * 
     */
    delete<T extends TickerDeleteArgs>(args: SelectSubset<T, TickerDeleteArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticker.
     * @param {TickerUpdateArgs} args - Arguments to update one Ticker.
     * @example
     * // Update one Ticker
     * const ticker = await prisma.ticker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TickerUpdateArgs>(args: SelectSubset<T, TickerUpdateArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickers.
     * @param {TickerDeleteManyArgs} args - Arguments to filter Tickers to delete.
     * @example
     * // Delete a few Tickers
     * const { count } = await prisma.ticker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TickerDeleteManyArgs>(args?: SelectSubset<T, TickerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickers
     * const ticker = await prisma.ticker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TickerUpdateManyArgs>(args: SelectSubset<T, TickerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticker.
     * @param {TickerUpsertArgs} args - Arguments to update or create a Ticker.
     * @example
     * // Update or create a Ticker
     * const ticker = await prisma.ticker.upsert({
     *   create: {
     *     // ... data to create a Ticker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticker we want to update
     *   }
     * })
     */
    upsert<T extends TickerUpsertArgs>(args: SelectSubset<T, TickerUpsertArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerCountArgs} args - Arguments to filter Tickers to count.
     * @example
     * // Count the number of Tickers
     * const count = await prisma.ticker.count({
     *   where: {
     *     // ... the filter for the Tickers we want to count
     *   }
     * })
    **/
    count<T extends TickerCountArgs>(
      args?: Subset<T, TickerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TickerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TickerAggregateArgs>(args: Subset<T, TickerAggregateArgs>): Prisma.PrismaPromise<GetTickerAggregateType<T>>

    /**
     * Group by Ticker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TickerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TickerGroupByArgs['orderBy'] }
        : { orderBy?: TickerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TickerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTickerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticker model
   */
  readonly fields: TickerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TickerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Trending<T extends Ticker$TrendingArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$TrendingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Anomaly_prediction<T extends Ticker$Anomaly_predictionArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Anomaly_predictionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bollinger_indicators<T extends Ticker$Bollinger_indicatorsArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Bollinger_indicatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cumulative_return<T extends Ticker$Cumulative_returnArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Cumulative_returnArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Ema_indicators<T extends Ticker$Ema_indicatorsArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Ema_indicatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Indicators_technical<T extends Ticker$Indicators_technicalArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Indicators_technicalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Macd_indicators<T extends Ticker$Macd_indicatorsArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Macd_indicatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rsi_indicators<T extends Ticker$Rsi_indicatorsArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Rsi_indicatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sma_indicators<T extends Ticker$Sma_indicatorsArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Sma_indicatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Statistic<T extends Ticker$StatisticArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$StatisticArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Stock_market_data<T extends Ticker$Stock_market_dataArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$Stock_market_dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Volatility<T extends Ticker$VolatilityArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$VolatilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticker model
   */
  interface TickerFieldRefs {
    readonly id: FieldRef<"Ticker", 'Int'>
    readonly name: FieldRef<"Ticker", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticker findUnique
   */
  export type TickerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where: TickerWhereUniqueInput
  }

  /**
   * Ticker findUniqueOrThrow
   */
  export type TickerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where: TickerWhereUniqueInput
  }

  /**
   * Ticker findFirst
   */
  export type TickerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickers.
     */
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }

  /**
   * Ticker findFirstOrThrow
   */
  export type TickerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickers.
     */
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }

  /**
   * Ticker findMany
   */
  export type TickerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Tickers to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }

  /**
   * Ticker create
   */
  export type TickerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticker.
     */
    data: XOR<TickerCreateInput, TickerUncheckedCreateInput>
  }

  /**
   * Ticker createMany
   */
  export type TickerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickers.
     */
    data: TickerCreateManyInput | TickerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticker update
   */
  export type TickerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticker.
     */
    data: XOR<TickerUpdateInput, TickerUncheckedUpdateInput>
    /**
     * Choose, which Ticker to update.
     */
    where: TickerWhereUniqueInput
  }

  /**
   * Ticker updateMany
   */
  export type TickerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickers.
     */
    data: XOR<TickerUpdateManyMutationInput, TickerUncheckedUpdateManyInput>
    /**
     * Filter which Tickers to update
     */
    where?: TickerWhereInput
    /**
     * Limit how many Tickers to update.
     */
    limit?: number
  }

  /**
   * Ticker upsert
   */
  export type TickerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticker to update in case it exists.
     */
    where: TickerWhereUniqueInput
    /**
     * In case the Ticker found by the `where` argument doesn't exist, create a new Ticker with this data.
     */
    create: XOR<TickerCreateInput, TickerUncheckedCreateInput>
    /**
     * In case the Ticker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TickerUpdateInput, TickerUncheckedUpdateInput>
  }

  /**
   * Ticker delete
   */
  export type TickerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter which Ticker to delete.
     */
    where: TickerWhereUniqueInput
  }

  /**
   * Ticker deleteMany
   */
  export type TickerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickers to delete
     */
    where?: TickerWhereInput
    /**
     * Limit how many Tickers to delete.
     */
    limit?: number
  }

  /**
   * Ticker.Trending
   */
  export type Ticker$TrendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    where?: TrendingWhereInput
    orderBy?: TrendingOrderByWithRelationInput | TrendingOrderByWithRelationInput[]
    cursor?: TrendingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrendingScalarFieldEnum | TrendingScalarFieldEnum[]
  }

  /**
   * Ticker.Anomaly_prediction
   */
  export type Ticker$Anomaly_predictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    where?: Anomaly_predictionWhereInput
    orderBy?: Anomaly_predictionOrderByWithRelationInput | Anomaly_predictionOrderByWithRelationInput[]
    cursor?: Anomaly_predictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Anomaly_predictionScalarFieldEnum | Anomaly_predictionScalarFieldEnum[]
  }

  /**
   * Ticker.Bollinger_indicators
   */
  export type Ticker$Bollinger_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    where?: Bollinger_indicatorsWhereInput
    orderBy?: Bollinger_indicatorsOrderByWithRelationInput | Bollinger_indicatorsOrderByWithRelationInput[]
    cursor?: Bollinger_indicatorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bollinger_indicatorsScalarFieldEnum | Bollinger_indicatorsScalarFieldEnum[]
  }

  /**
   * Ticker.Cumulative_return
   */
  export type Ticker$Cumulative_returnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    where?: Cumulative_returnWhereInput
  }

  /**
   * Ticker.Ema_indicators
   */
  export type Ticker$Ema_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    where?: Ema_indicatorsWhereInput
    orderBy?: Ema_indicatorsOrderByWithRelationInput | Ema_indicatorsOrderByWithRelationInput[]
    cursor?: Ema_indicatorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ema_indicatorsScalarFieldEnum | Ema_indicatorsScalarFieldEnum[]
  }

  /**
   * Ticker.Indicators_technical
   */
  export type Ticker$Indicators_technicalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    where?: Indicators_technicalWhereInput
    orderBy?: Indicators_technicalOrderByWithRelationInput | Indicators_technicalOrderByWithRelationInput[]
    cursor?: Indicators_technicalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Indicators_technicalScalarFieldEnum | Indicators_technicalScalarFieldEnum[]
  }

  /**
   * Ticker.Macd_indicators
   */
  export type Ticker$Macd_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    where?: Macd_indicatorsWhereInput
    orderBy?: Macd_indicatorsOrderByWithRelationInput | Macd_indicatorsOrderByWithRelationInput[]
    cursor?: Macd_indicatorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Macd_indicatorsScalarFieldEnum | Macd_indicatorsScalarFieldEnum[]
  }

  /**
   * Ticker.Rsi_indicators
   */
  export type Ticker$Rsi_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    where?: Rsi_indicatorsWhereInput
    orderBy?: Rsi_indicatorsOrderByWithRelationInput | Rsi_indicatorsOrderByWithRelationInput[]
    cursor?: Rsi_indicatorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rsi_indicatorsScalarFieldEnum | Rsi_indicatorsScalarFieldEnum[]
  }

  /**
   * Ticker.Sma_indicators
   */
  export type Ticker$Sma_indicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    where?: Sma_indicatorsWhereInput
    orderBy?: Sma_indicatorsOrderByWithRelationInput | Sma_indicatorsOrderByWithRelationInput[]
    cursor?: Sma_indicatorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sma_indicatorsScalarFieldEnum | Sma_indicatorsScalarFieldEnum[]
  }

  /**
   * Ticker.Statistic
   */
  export type Ticker$StatisticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    cursor?: StatisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Ticker.Stock_market_data
   */
  export type Ticker$Stock_market_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    where?: Stock_market_dataWhereInput
    orderBy?: Stock_market_dataOrderByWithRelationInput | Stock_market_dataOrderByWithRelationInput[]
    cursor?: Stock_market_dataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stock_market_dataScalarFieldEnum | Stock_market_dataScalarFieldEnum[]
  }

  /**
   * Ticker.Volatility
   */
  export type Ticker$VolatilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    where?: VolatilityWhereInput
    orderBy?: VolatilityOrderByWithRelationInput | VolatilityOrderByWithRelationInput[]
    cursor?: VolatilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolatilityScalarFieldEnum | VolatilityScalarFieldEnum[]
  }

  /**
   * Ticker without action
   */
  export type TickerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
  }


  /**
   * Model Stock_market_data
   */

  export type AggregateStock_market_data = {
    _count: Stock_market_dataCountAggregateOutputType | null
    _avg: Stock_market_dataAvgAggregateOutputType | null
    _sum: Stock_market_dataSumAggregateOutputType | null
    _min: Stock_market_dataMinAggregateOutputType | null
    _max: Stock_market_dataMaxAggregateOutputType | null
  }

  export type Stock_market_dataAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    open: number | null
    high: number | null
    low: number | null
    close: number | null
    volume: number | null
    adj_close: number | null
  }

  export type Stock_market_dataSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    open: number | null
    high: number | null
    low: number | null
    close: number | null
    volume: number | null
    adj_close: number | null
  }

  export type Stock_market_dataMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    open: number | null
    high: number | null
    low: number | null
    close: number | null
    volume: number | null
    adj_close: number | null
  }

  export type Stock_market_dataMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    open: number | null
    high: number | null
    low: number | null
    close: number | null
    volume: number | null
    adj_close: number | null
  }

  export type Stock_market_dataCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    open: number
    high: number
    low: number
    close: number
    volume: number
    adj_close: number
    _all: number
  }


  export type Stock_market_dataAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    adj_close?: true
  }

  export type Stock_market_dataSumAggregateInputType = {
    id?: true
    id_ticker?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    adj_close?: true
  }

  export type Stock_market_dataMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    adj_close?: true
  }

  export type Stock_market_dataMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    adj_close?: true
  }

  export type Stock_market_dataCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    adj_close?: true
    _all?: true
  }

  export type Stock_market_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock_market_data to aggregate.
     */
    where?: Stock_market_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stock_market_data to fetch.
     */
    orderBy?: Stock_market_dataOrderByWithRelationInput | Stock_market_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Stock_market_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stock_market_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stock_market_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stock_market_data
    **/
    _count?: true | Stock_market_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stock_market_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stock_market_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stock_market_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stock_market_dataMaxAggregateInputType
  }

  export type GetStock_market_dataAggregateType<T extends Stock_market_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateStock_market_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock_market_data[P]>
      : GetScalarType<T[P], AggregateStock_market_data[P]>
  }




  export type Stock_market_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Stock_market_dataWhereInput
    orderBy?: Stock_market_dataOrderByWithAggregationInput | Stock_market_dataOrderByWithAggregationInput[]
    by: Stock_market_dataScalarFieldEnum[] | Stock_market_dataScalarFieldEnum
    having?: Stock_market_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stock_market_dataCountAggregateInputType | true
    _avg?: Stock_market_dataAvgAggregateInputType
    _sum?: Stock_market_dataSumAggregateInputType
    _min?: Stock_market_dataMinAggregateInputType
    _max?: Stock_market_dataMaxAggregateInputType
  }

  export type Stock_market_dataGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    open: number
    high: number
    low: number
    close: number
    volume: number
    adj_close: number
    _count: Stock_market_dataCountAggregateOutputType | null
    _avg: Stock_market_dataAvgAggregateOutputType | null
    _sum: Stock_market_dataSumAggregateOutputType | null
    _min: Stock_market_dataMinAggregateOutputType | null
    _max: Stock_market_dataMaxAggregateOutputType | null
  }

  type GetStock_market_dataGroupByPayload<T extends Stock_market_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stock_market_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stock_market_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stock_market_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Stock_market_dataGroupByOutputType[P]>
        }
      >
    >


  export type Stock_market_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    adj_close?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_market_data"]>



  export type Stock_market_dataSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    adj_close?: boolean
  }

  export type Stock_market_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "open" | "high" | "low" | "close" | "volume" | "adj_close", ExtArgs["result"]["stock_market_data"]>
  export type Stock_market_dataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Stock_market_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock_market_data"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      open: number
      high: number
      low: number
      close: number
      volume: number
      adj_close: number
    }, ExtArgs["result"]["stock_market_data"]>
    composites: {}
  }

  type Stock_market_dataGetPayload<S extends boolean | null | undefined | Stock_market_dataDefaultArgs> = $Result.GetResult<Prisma.$Stock_market_dataPayload, S>

  type Stock_market_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Stock_market_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stock_market_dataCountAggregateInputType | true
    }

  export interface Stock_market_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock_market_data'], meta: { name: 'Stock_market_data' } }
    /**
     * Find zero or one Stock_market_data that matches the filter.
     * @param {Stock_market_dataFindUniqueArgs} args - Arguments to find a Stock_market_data
     * @example
     * // Get one Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Stock_market_dataFindUniqueArgs>(args: SelectSubset<T, Stock_market_dataFindUniqueArgs<ExtArgs>>): Prisma__Stock_market_dataClient<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock_market_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Stock_market_dataFindUniqueOrThrowArgs} args - Arguments to find a Stock_market_data
     * @example
     * // Get one Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Stock_market_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, Stock_market_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Stock_market_dataClient<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_market_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_market_dataFindFirstArgs} args - Arguments to find a Stock_market_data
     * @example
     * // Get one Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Stock_market_dataFindFirstArgs>(args?: SelectSubset<T, Stock_market_dataFindFirstArgs<ExtArgs>>): Prisma__Stock_market_dataClient<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_market_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_market_dataFindFirstOrThrowArgs} args - Arguments to find a Stock_market_data
     * @example
     * // Get one Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Stock_market_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, Stock_market_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__Stock_market_dataClient<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stock_market_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_market_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.findMany()
     * 
     * // Get first 10 Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stock_market_dataWithIdOnly = await prisma.stock_market_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Stock_market_dataFindManyArgs>(args?: SelectSubset<T, Stock_market_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock_market_data.
     * @param {Stock_market_dataCreateArgs} args - Arguments to create a Stock_market_data.
     * @example
     * // Create one Stock_market_data
     * const Stock_market_data = await prisma.stock_market_data.create({
     *   data: {
     *     // ... data to create a Stock_market_data
     *   }
     * })
     * 
     */
    create<T extends Stock_market_dataCreateArgs>(args: SelectSubset<T, Stock_market_dataCreateArgs<ExtArgs>>): Prisma__Stock_market_dataClient<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stock_market_data.
     * @param {Stock_market_dataCreateManyArgs} args - Arguments to create many Stock_market_data.
     * @example
     * // Create many Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Stock_market_dataCreateManyArgs>(args?: SelectSubset<T, Stock_market_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stock_market_data.
     * @param {Stock_market_dataDeleteArgs} args - Arguments to delete one Stock_market_data.
     * @example
     * // Delete one Stock_market_data
     * const Stock_market_data = await prisma.stock_market_data.delete({
     *   where: {
     *     // ... filter to delete one Stock_market_data
     *   }
     * })
     * 
     */
    delete<T extends Stock_market_dataDeleteArgs>(args: SelectSubset<T, Stock_market_dataDeleteArgs<ExtArgs>>): Prisma__Stock_market_dataClient<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock_market_data.
     * @param {Stock_market_dataUpdateArgs} args - Arguments to update one Stock_market_data.
     * @example
     * // Update one Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Stock_market_dataUpdateArgs>(args: SelectSubset<T, Stock_market_dataUpdateArgs<ExtArgs>>): Prisma__Stock_market_dataClient<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stock_market_data.
     * @param {Stock_market_dataDeleteManyArgs} args - Arguments to filter Stock_market_data to delete.
     * @example
     * // Delete a few Stock_market_data
     * const { count } = await prisma.stock_market_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Stock_market_dataDeleteManyArgs>(args?: SelectSubset<T, Stock_market_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_market_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_market_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Stock_market_dataUpdateManyArgs>(args: SelectSubset<T, Stock_market_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stock_market_data.
     * @param {Stock_market_dataUpsertArgs} args - Arguments to update or create a Stock_market_data.
     * @example
     * // Update or create a Stock_market_data
     * const stock_market_data = await prisma.stock_market_data.upsert({
     *   create: {
     *     // ... data to create a Stock_market_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock_market_data we want to update
     *   }
     * })
     */
    upsert<T extends Stock_market_dataUpsertArgs>(args: SelectSubset<T, Stock_market_dataUpsertArgs<ExtArgs>>): Prisma__Stock_market_dataClient<$Result.GetResult<Prisma.$Stock_market_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stock_market_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_market_dataCountArgs} args - Arguments to filter Stock_market_data to count.
     * @example
     * // Count the number of Stock_market_data
     * const count = await prisma.stock_market_data.count({
     *   where: {
     *     // ... the filter for the Stock_market_data we want to count
     *   }
     * })
    **/
    count<T extends Stock_market_dataCountArgs>(
      args?: Subset<T, Stock_market_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stock_market_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock_market_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_market_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stock_market_dataAggregateArgs>(args: Subset<T, Stock_market_dataAggregateArgs>): Prisma.PrismaPromise<GetStock_market_dataAggregateType<T>>

    /**
     * Group by Stock_market_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_market_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Stock_market_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Stock_market_dataGroupByArgs['orderBy'] }
        : { orderBy?: Stock_market_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Stock_market_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_market_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock_market_data model
   */
  readonly fields: Stock_market_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock_market_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Stock_market_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stock_market_data model
   */
  interface Stock_market_dataFieldRefs {
    readonly id: FieldRef<"Stock_market_data", 'Int'>
    readonly id_ticker: FieldRef<"Stock_market_data", 'Int'>
    readonly date: FieldRef<"Stock_market_data", 'DateTime'>
    readonly open: FieldRef<"Stock_market_data", 'Float'>
    readonly high: FieldRef<"Stock_market_data", 'Float'>
    readonly low: FieldRef<"Stock_market_data", 'Float'>
    readonly close: FieldRef<"Stock_market_data", 'Float'>
    readonly volume: FieldRef<"Stock_market_data", 'Int'>
    readonly adj_close: FieldRef<"Stock_market_data", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Stock_market_data findUnique
   */
  export type Stock_market_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * Filter, which Stock_market_data to fetch.
     */
    where: Stock_market_dataWhereUniqueInput
  }

  /**
   * Stock_market_data findUniqueOrThrow
   */
  export type Stock_market_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * Filter, which Stock_market_data to fetch.
     */
    where: Stock_market_dataWhereUniqueInput
  }

  /**
   * Stock_market_data findFirst
   */
  export type Stock_market_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * Filter, which Stock_market_data to fetch.
     */
    where?: Stock_market_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stock_market_data to fetch.
     */
    orderBy?: Stock_market_dataOrderByWithRelationInput | Stock_market_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stock_market_data.
     */
    cursor?: Stock_market_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stock_market_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stock_market_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stock_market_data.
     */
    distinct?: Stock_market_dataScalarFieldEnum | Stock_market_dataScalarFieldEnum[]
  }

  /**
   * Stock_market_data findFirstOrThrow
   */
  export type Stock_market_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * Filter, which Stock_market_data to fetch.
     */
    where?: Stock_market_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stock_market_data to fetch.
     */
    orderBy?: Stock_market_dataOrderByWithRelationInput | Stock_market_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stock_market_data.
     */
    cursor?: Stock_market_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stock_market_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stock_market_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stock_market_data.
     */
    distinct?: Stock_market_dataScalarFieldEnum | Stock_market_dataScalarFieldEnum[]
  }

  /**
   * Stock_market_data findMany
   */
  export type Stock_market_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * Filter, which Stock_market_data to fetch.
     */
    where?: Stock_market_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stock_market_data to fetch.
     */
    orderBy?: Stock_market_dataOrderByWithRelationInput | Stock_market_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stock_market_data.
     */
    cursor?: Stock_market_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stock_market_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stock_market_data.
     */
    skip?: number
    distinct?: Stock_market_dataScalarFieldEnum | Stock_market_dataScalarFieldEnum[]
  }

  /**
   * Stock_market_data create
   */
  export type Stock_market_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock_market_data.
     */
    data: XOR<Stock_market_dataCreateInput, Stock_market_dataUncheckedCreateInput>
  }

  /**
   * Stock_market_data createMany
   */
  export type Stock_market_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stock_market_data.
     */
    data: Stock_market_dataCreateManyInput | Stock_market_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock_market_data update
   */
  export type Stock_market_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock_market_data.
     */
    data: XOR<Stock_market_dataUpdateInput, Stock_market_dataUncheckedUpdateInput>
    /**
     * Choose, which Stock_market_data to update.
     */
    where: Stock_market_dataWhereUniqueInput
  }

  /**
   * Stock_market_data updateMany
   */
  export type Stock_market_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stock_market_data.
     */
    data: XOR<Stock_market_dataUpdateManyMutationInput, Stock_market_dataUncheckedUpdateManyInput>
    /**
     * Filter which Stock_market_data to update
     */
    where?: Stock_market_dataWhereInput
    /**
     * Limit how many Stock_market_data to update.
     */
    limit?: number
  }

  /**
   * Stock_market_data upsert
   */
  export type Stock_market_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock_market_data to update in case it exists.
     */
    where: Stock_market_dataWhereUniqueInput
    /**
     * In case the Stock_market_data found by the `where` argument doesn't exist, create a new Stock_market_data with this data.
     */
    create: XOR<Stock_market_dataCreateInput, Stock_market_dataUncheckedCreateInput>
    /**
     * In case the Stock_market_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Stock_market_dataUpdateInput, Stock_market_dataUncheckedUpdateInput>
  }

  /**
   * Stock_market_data delete
   */
  export type Stock_market_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
    /**
     * Filter which Stock_market_data to delete.
     */
    where: Stock_market_dataWhereUniqueInput
  }

  /**
   * Stock_market_data deleteMany
   */
  export type Stock_market_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock_market_data to delete
     */
    where?: Stock_market_dataWhereInput
    /**
     * Limit how many Stock_market_data to delete.
     */
    limit?: number
  }

  /**
   * Stock_market_data without action
   */
  export type Stock_market_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_market_data
     */
    select?: Stock_market_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock_market_data
     */
    omit?: Stock_market_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Stock_market_dataInclude<ExtArgs> | null
  }


  /**
   * Model Cumulative_return
   */

  export type AggregateCumulative_return = {
    _count: Cumulative_returnCountAggregateOutputType | null
    _avg: Cumulative_returnAvgAggregateOutputType | null
    _sum: Cumulative_returnSumAggregateOutputType | null
    _min: Cumulative_returnMinAggregateOutputType | null
    _max: Cumulative_returnMaxAggregateOutputType | null
  }

  export type Cumulative_returnAvgAggregateOutputType = {
    id_ticker: number | null
    cum_return_open: number | null
    cum_return_high: number | null
    cum_return_low: number | null
    cum_return_close: number | null
    cum_return_volume: number | null
    cum_return_adj_close: number | null
  }

  export type Cumulative_returnSumAggregateOutputType = {
    id_ticker: number | null
    cum_return_open: number | null
    cum_return_high: number | null
    cum_return_low: number | null
    cum_return_close: number | null
    cum_return_volume: number | null
    cum_return_adj_close: number | null
  }

  export type Cumulative_returnMinAggregateOutputType = {
    id_ticker: number | null
    date: Date | null
    cum_return_open: number | null
    cum_return_high: number | null
    cum_return_low: number | null
    cum_return_close: number | null
    cum_return_volume: number | null
    cum_return_adj_close: number | null
  }

  export type Cumulative_returnMaxAggregateOutputType = {
    id_ticker: number | null
    date: Date | null
    cum_return_open: number | null
    cum_return_high: number | null
    cum_return_low: number | null
    cum_return_close: number | null
    cum_return_volume: number | null
    cum_return_adj_close: number | null
  }

  export type Cumulative_returnCountAggregateOutputType = {
    id_ticker: number
    date: number
    cum_return_open: number
    cum_return_high: number
    cum_return_low: number
    cum_return_close: number
    cum_return_volume: number
    cum_return_adj_close: number
    _all: number
  }


  export type Cumulative_returnAvgAggregateInputType = {
    id_ticker?: true
    cum_return_open?: true
    cum_return_high?: true
    cum_return_low?: true
    cum_return_close?: true
    cum_return_volume?: true
    cum_return_adj_close?: true
  }

  export type Cumulative_returnSumAggregateInputType = {
    id_ticker?: true
    cum_return_open?: true
    cum_return_high?: true
    cum_return_low?: true
    cum_return_close?: true
    cum_return_volume?: true
    cum_return_adj_close?: true
  }

  export type Cumulative_returnMinAggregateInputType = {
    id_ticker?: true
    date?: true
    cum_return_open?: true
    cum_return_high?: true
    cum_return_low?: true
    cum_return_close?: true
    cum_return_volume?: true
    cum_return_adj_close?: true
  }

  export type Cumulative_returnMaxAggregateInputType = {
    id_ticker?: true
    date?: true
    cum_return_open?: true
    cum_return_high?: true
    cum_return_low?: true
    cum_return_close?: true
    cum_return_volume?: true
    cum_return_adj_close?: true
  }

  export type Cumulative_returnCountAggregateInputType = {
    id_ticker?: true
    date?: true
    cum_return_open?: true
    cum_return_high?: true
    cum_return_low?: true
    cum_return_close?: true
    cum_return_volume?: true
    cum_return_adj_close?: true
    _all?: true
  }

  export type Cumulative_returnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cumulative_return to aggregate.
     */
    where?: Cumulative_returnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cumulative_returns to fetch.
     */
    orderBy?: Cumulative_returnOrderByWithRelationInput | Cumulative_returnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Cumulative_returnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cumulative_returns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cumulative_returns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cumulative_returns
    **/
    _count?: true | Cumulative_returnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cumulative_returnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cumulative_returnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cumulative_returnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cumulative_returnMaxAggregateInputType
  }

  export type GetCumulative_returnAggregateType<T extends Cumulative_returnAggregateArgs> = {
        [P in keyof T & keyof AggregateCumulative_return]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCumulative_return[P]>
      : GetScalarType<T[P], AggregateCumulative_return[P]>
  }




  export type Cumulative_returnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Cumulative_returnWhereInput
    orderBy?: Cumulative_returnOrderByWithAggregationInput | Cumulative_returnOrderByWithAggregationInput[]
    by: Cumulative_returnScalarFieldEnum[] | Cumulative_returnScalarFieldEnum
    having?: Cumulative_returnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cumulative_returnCountAggregateInputType | true
    _avg?: Cumulative_returnAvgAggregateInputType
    _sum?: Cumulative_returnSumAggregateInputType
    _min?: Cumulative_returnMinAggregateInputType
    _max?: Cumulative_returnMaxAggregateInputType
  }

  export type Cumulative_returnGroupByOutputType = {
    id_ticker: number
    date: Date
    cum_return_open: number
    cum_return_high: number
    cum_return_low: number
    cum_return_close: number
    cum_return_volume: number
    cum_return_adj_close: number
    _count: Cumulative_returnCountAggregateOutputType | null
    _avg: Cumulative_returnAvgAggregateOutputType | null
    _sum: Cumulative_returnSumAggregateOutputType | null
    _min: Cumulative_returnMinAggregateOutputType | null
    _max: Cumulative_returnMaxAggregateOutputType | null
  }

  type GetCumulative_returnGroupByPayload<T extends Cumulative_returnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cumulative_returnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cumulative_returnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cumulative_returnGroupByOutputType[P]>
            : GetScalarType<T[P], Cumulative_returnGroupByOutputType[P]>
        }
      >
    >


  export type Cumulative_returnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ticker?: boolean
    date?: boolean
    cum_return_open?: boolean
    cum_return_high?: boolean
    cum_return_low?: boolean
    cum_return_close?: boolean
    cum_return_volume?: boolean
    cum_return_adj_close?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cumulative_return"]>



  export type Cumulative_returnSelectScalar = {
    id_ticker?: boolean
    date?: boolean
    cum_return_open?: boolean
    cum_return_high?: boolean
    cum_return_low?: boolean
    cum_return_close?: boolean
    cum_return_volume?: boolean
    cum_return_adj_close?: boolean
  }

  export type Cumulative_returnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ticker" | "date" | "cum_return_open" | "cum_return_high" | "cum_return_low" | "cum_return_close" | "cum_return_volume" | "cum_return_adj_close", ExtArgs["result"]["cumulative_return"]>
  export type Cumulative_returnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Cumulative_returnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cumulative_return"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ticker: number
      date: Date
      cum_return_open: number
      cum_return_high: number
      cum_return_low: number
      cum_return_close: number
      cum_return_volume: number
      cum_return_adj_close: number
    }, ExtArgs["result"]["cumulative_return"]>
    composites: {}
  }

  type Cumulative_returnGetPayload<S extends boolean | null | undefined | Cumulative_returnDefaultArgs> = $Result.GetResult<Prisma.$Cumulative_returnPayload, S>

  type Cumulative_returnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Cumulative_returnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cumulative_returnCountAggregateInputType | true
    }

  export interface Cumulative_returnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cumulative_return'], meta: { name: 'Cumulative_return' } }
    /**
     * Find zero or one Cumulative_return that matches the filter.
     * @param {Cumulative_returnFindUniqueArgs} args - Arguments to find a Cumulative_return
     * @example
     * // Get one Cumulative_return
     * const cumulative_return = await prisma.cumulative_return.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Cumulative_returnFindUniqueArgs>(args: SelectSubset<T, Cumulative_returnFindUniqueArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cumulative_return that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Cumulative_returnFindUniqueOrThrowArgs} args - Arguments to find a Cumulative_return
     * @example
     * // Get one Cumulative_return
     * const cumulative_return = await prisma.cumulative_return.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Cumulative_returnFindUniqueOrThrowArgs>(args: SelectSubset<T, Cumulative_returnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cumulative_return that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cumulative_returnFindFirstArgs} args - Arguments to find a Cumulative_return
     * @example
     * // Get one Cumulative_return
     * const cumulative_return = await prisma.cumulative_return.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Cumulative_returnFindFirstArgs>(args?: SelectSubset<T, Cumulative_returnFindFirstArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cumulative_return that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cumulative_returnFindFirstOrThrowArgs} args - Arguments to find a Cumulative_return
     * @example
     * // Get one Cumulative_return
     * const cumulative_return = await prisma.cumulative_return.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Cumulative_returnFindFirstOrThrowArgs>(args?: SelectSubset<T, Cumulative_returnFindFirstOrThrowArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cumulative_returns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cumulative_returnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cumulative_returns
     * const cumulative_returns = await prisma.cumulative_return.findMany()
     * 
     * // Get first 10 Cumulative_returns
     * const cumulative_returns = await prisma.cumulative_return.findMany({ take: 10 })
     * 
     * // Only select the `id_ticker`
     * const cumulative_returnWithId_tickerOnly = await prisma.cumulative_return.findMany({ select: { id_ticker: true } })
     * 
     */
    findMany<T extends Cumulative_returnFindManyArgs>(args?: SelectSubset<T, Cumulative_returnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cumulative_return.
     * @param {Cumulative_returnCreateArgs} args - Arguments to create a Cumulative_return.
     * @example
     * // Create one Cumulative_return
     * const Cumulative_return = await prisma.cumulative_return.create({
     *   data: {
     *     // ... data to create a Cumulative_return
     *   }
     * })
     * 
     */
    create<T extends Cumulative_returnCreateArgs>(args: SelectSubset<T, Cumulative_returnCreateArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cumulative_returns.
     * @param {Cumulative_returnCreateManyArgs} args - Arguments to create many Cumulative_returns.
     * @example
     * // Create many Cumulative_returns
     * const cumulative_return = await prisma.cumulative_return.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Cumulative_returnCreateManyArgs>(args?: SelectSubset<T, Cumulative_returnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cumulative_return.
     * @param {Cumulative_returnDeleteArgs} args - Arguments to delete one Cumulative_return.
     * @example
     * // Delete one Cumulative_return
     * const Cumulative_return = await prisma.cumulative_return.delete({
     *   where: {
     *     // ... filter to delete one Cumulative_return
     *   }
     * })
     * 
     */
    delete<T extends Cumulative_returnDeleteArgs>(args: SelectSubset<T, Cumulative_returnDeleteArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cumulative_return.
     * @param {Cumulative_returnUpdateArgs} args - Arguments to update one Cumulative_return.
     * @example
     * // Update one Cumulative_return
     * const cumulative_return = await prisma.cumulative_return.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Cumulative_returnUpdateArgs>(args: SelectSubset<T, Cumulative_returnUpdateArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cumulative_returns.
     * @param {Cumulative_returnDeleteManyArgs} args - Arguments to filter Cumulative_returns to delete.
     * @example
     * // Delete a few Cumulative_returns
     * const { count } = await prisma.cumulative_return.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Cumulative_returnDeleteManyArgs>(args?: SelectSubset<T, Cumulative_returnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cumulative_returns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cumulative_returnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cumulative_returns
     * const cumulative_return = await prisma.cumulative_return.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Cumulative_returnUpdateManyArgs>(args: SelectSubset<T, Cumulative_returnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cumulative_return.
     * @param {Cumulative_returnUpsertArgs} args - Arguments to update or create a Cumulative_return.
     * @example
     * // Update or create a Cumulative_return
     * const cumulative_return = await prisma.cumulative_return.upsert({
     *   create: {
     *     // ... data to create a Cumulative_return
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cumulative_return we want to update
     *   }
     * })
     */
    upsert<T extends Cumulative_returnUpsertArgs>(args: SelectSubset<T, Cumulative_returnUpsertArgs<ExtArgs>>): Prisma__Cumulative_returnClient<$Result.GetResult<Prisma.$Cumulative_returnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cumulative_returns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cumulative_returnCountArgs} args - Arguments to filter Cumulative_returns to count.
     * @example
     * // Count the number of Cumulative_returns
     * const count = await prisma.cumulative_return.count({
     *   where: {
     *     // ... the filter for the Cumulative_returns we want to count
     *   }
     * })
    **/
    count<T extends Cumulative_returnCountArgs>(
      args?: Subset<T, Cumulative_returnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cumulative_returnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cumulative_return.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cumulative_returnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cumulative_returnAggregateArgs>(args: Subset<T, Cumulative_returnAggregateArgs>): Prisma.PrismaPromise<GetCumulative_returnAggregateType<T>>

    /**
     * Group by Cumulative_return.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cumulative_returnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Cumulative_returnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Cumulative_returnGroupByArgs['orderBy'] }
        : { orderBy?: Cumulative_returnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Cumulative_returnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCumulative_returnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cumulative_return model
   */
  readonly fields: Cumulative_returnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cumulative_return.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Cumulative_returnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cumulative_return model
   */
  interface Cumulative_returnFieldRefs {
    readonly id_ticker: FieldRef<"Cumulative_return", 'Int'>
    readonly date: FieldRef<"Cumulative_return", 'DateTime'>
    readonly cum_return_open: FieldRef<"Cumulative_return", 'Float'>
    readonly cum_return_high: FieldRef<"Cumulative_return", 'Float'>
    readonly cum_return_low: FieldRef<"Cumulative_return", 'Float'>
    readonly cum_return_close: FieldRef<"Cumulative_return", 'Float'>
    readonly cum_return_volume: FieldRef<"Cumulative_return", 'Float'>
    readonly cum_return_adj_close: FieldRef<"Cumulative_return", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Cumulative_return findUnique
   */
  export type Cumulative_returnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * Filter, which Cumulative_return to fetch.
     */
    where: Cumulative_returnWhereUniqueInput
  }

  /**
   * Cumulative_return findUniqueOrThrow
   */
  export type Cumulative_returnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * Filter, which Cumulative_return to fetch.
     */
    where: Cumulative_returnWhereUniqueInput
  }

  /**
   * Cumulative_return findFirst
   */
  export type Cumulative_returnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * Filter, which Cumulative_return to fetch.
     */
    where?: Cumulative_returnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cumulative_returns to fetch.
     */
    orderBy?: Cumulative_returnOrderByWithRelationInput | Cumulative_returnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cumulative_returns.
     */
    cursor?: Cumulative_returnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cumulative_returns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cumulative_returns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cumulative_returns.
     */
    distinct?: Cumulative_returnScalarFieldEnum | Cumulative_returnScalarFieldEnum[]
  }

  /**
   * Cumulative_return findFirstOrThrow
   */
  export type Cumulative_returnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * Filter, which Cumulative_return to fetch.
     */
    where?: Cumulative_returnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cumulative_returns to fetch.
     */
    orderBy?: Cumulative_returnOrderByWithRelationInput | Cumulative_returnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cumulative_returns.
     */
    cursor?: Cumulative_returnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cumulative_returns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cumulative_returns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cumulative_returns.
     */
    distinct?: Cumulative_returnScalarFieldEnum | Cumulative_returnScalarFieldEnum[]
  }

  /**
   * Cumulative_return findMany
   */
  export type Cumulative_returnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * Filter, which Cumulative_returns to fetch.
     */
    where?: Cumulative_returnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cumulative_returns to fetch.
     */
    orderBy?: Cumulative_returnOrderByWithRelationInput | Cumulative_returnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cumulative_returns.
     */
    cursor?: Cumulative_returnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cumulative_returns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cumulative_returns.
     */
    skip?: number
    distinct?: Cumulative_returnScalarFieldEnum | Cumulative_returnScalarFieldEnum[]
  }

  /**
   * Cumulative_return create
   */
  export type Cumulative_returnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * The data needed to create a Cumulative_return.
     */
    data: XOR<Cumulative_returnCreateInput, Cumulative_returnUncheckedCreateInput>
  }

  /**
   * Cumulative_return createMany
   */
  export type Cumulative_returnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cumulative_returns.
     */
    data: Cumulative_returnCreateManyInput | Cumulative_returnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cumulative_return update
   */
  export type Cumulative_returnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * The data needed to update a Cumulative_return.
     */
    data: XOR<Cumulative_returnUpdateInput, Cumulative_returnUncheckedUpdateInput>
    /**
     * Choose, which Cumulative_return to update.
     */
    where: Cumulative_returnWhereUniqueInput
  }

  /**
   * Cumulative_return updateMany
   */
  export type Cumulative_returnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cumulative_returns.
     */
    data: XOR<Cumulative_returnUpdateManyMutationInput, Cumulative_returnUncheckedUpdateManyInput>
    /**
     * Filter which Cumulative_returns to update
     */
    where?: Cumulative_returnWhereInput
    /**
     * Limit how many Cumulative_returns to update.
     */
    limit?: number
  }

  /**
   * Cumulative_return upsert
   */
  export type Cumulative_returnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * The filter to search for the Cumulative_return to update in case it exists.
     */
    where: Cumulative_returnWhereUniqueInput
    /**
     * In case the Cumulative_return found by the `where` argument doesn't exist, create a new Cumulative_return with this data.
     */
    create: XOR<Cumulative_returnCreateInput, Cumulative_returnUncheckedCreateInput>
    /**
     * In case the Cumulative_return was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Cumulative_returnUpdateInput, Cumulative_returnUncheckedUpdateInput>
  }

  /**
   * Cumulative_return delete
   */
  export type Cumulative_returnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
    /**
     * Filter which Cumulative_return to delete.
     */
    where: Cumulative_returnWhereUniqueInput
  }

  /**
   * Cumulative_return deleteMany
   */
  export type Cumulative_returnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cumulative_returns to delete
     */
    where?: Cumulative_returnWhereInput
    /**
     * Limit how many Cumulative_returns to delete.
     */
    limit?: number
  }

  /**
   * Cumulative_return without action
   */
  export type Cumulative_returnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cumulative_return
     */
    select?: Cumulative_returnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cumulative_return
     */
    omit?: Cumulative_returnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cumulative_returnInclude<ExtArgs> | null
  }


  /**
   * Model Trending
   */

  export type AggregateTrending = {
    _count: TrendingCountAggregateOutputType | null
    _avg: TrendingAvgAggregateOutputType | null
    _sum: TrendingSumAggregateOutputType | null
    _min: TrendingMinAggregateOutputType | null
    _max: TrendingMaxAggregateOutputType | null
  }

  export type TrendingAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    trend_close: number | null
    trend_open: number | null
    trend_adj_close: number | null
  }

  export type TrendingSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    trend_close: number | null
    trend_open: number | null
    trend_adj_close: number | null
  }

  export type TrendingMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    trend: string | null
    trend_close: number | null
    trend_open: number | null
    trend_adj_close: number | null
  }

  export type TrendingMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    trend: string | null
    trend_close: number | null
    trend_open: number | null
    trend_adj_close: number | null
  }

  export type TrendingCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    trend: number
    trend_close: number
    trend_open: number
    trend_adj_close: number
    _all: number
  }


  export type TrendingAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    trend_close?: true
    trend_open?: true
    trend_adj_close?: true
  }

  export type TrendingSumAggregateInputType = {
    id?: true
    id_ticker?: true
    trend_close?: true
    trend_open?: true
    trend_adj_close?: true
  }

  export type TrendingMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    trend?: true
    trend_close?: true
    trend_open?: true
    trend_adj_close?: true
  }

  export type TrendingMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    trend?: true
    trend_close?: true
    trend_open?: true
    trend_adj_close?: true
  }

  export type TrendingCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    trend?: true
    trend_close?: true
    trend_open?: true
    trend_adj_close?: true
    _all?: true
  }

  export type TrendingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trending to aggregate.
     */
    where?: TrendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trendings to fetch.
     */
    orderBy?: TrendingOrderByWithRelationInput | TrendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trendings
    **/
    _count?: true | TrendingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrendingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrendingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendingMaxAggregateInputType
  }

  export type GetTrendingAggregateType<T extends TrendingAggregateArgs> = {
        [P in keyof T & keyof AggregateTrending]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrending[P]>
      : GetScalarType<T[P], AggregateTrending[P]>
  }




  export type TrendingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingWhereInput
    orderBy?: TrendingOrderByWithAggregationInput | TrendingOrderByWithAggregationInput[]
    by: TrendingScalarFieldEnum[] | TrendingScalarFieldEnum
    having?: TrendingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendingCountAggregateInputType | true
    _avg?: TrendingAvgAggregateInputType
    _sum?: TrendingSumAggregateInputType
    _min?: TrendingMinAggregateInputType
    _max?: TrendingMaxAggregateInputType
  }

  export type TrendingGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    trend: string
    trend_close: number
    trend_open: number
    trend_adj_close: number
    _count: TrendingCountAggregateOutputType | null
    _avg: TrendingAvgAggregateOutputType | null
    _sum: TrendingSumAggregateOutputType | null
    _min: TrendingMinAggregateOutputType | null
    _max: TrendingMaxAggregateOutputType | null
  }

  type GetTrendingGroupByPayload<T extends TrendingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendingGroupByOutputType[P]>
            : GetScalarType<T[P], TrendingGroupByOutputType[P]>
        }
      >
    >


  export type TrendingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    trend?: boolean
    trend_close?: boolean
    trend_open?: boolean
    trend_adj_close?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trending"]>



  export type TrendingSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    trend?: boolean
    trend_close?: boolean
    trend_open?: boolean
    trend_adj_close?: boolean
  }

  export type TrendingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "trend" | "trend_close" | "trend_open" | "trend_adj_close", ExtArgs["result"]["trending"]>
  export type TrendingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $TrendingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trending"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      trend: string
      trend_close: number
      trend_open: number
      trend_adj_close: number
    }, ExtArgs["result"]["trending"]>
    composites: {}
  }

  type TrendingGetPayload<S extends boolean | null | undefined | TrendingDefaultArgs> = $Result.GetResult<Prisma.$TrendingPayload, S>

  type TrendingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrendingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrendingCountAggregateInputType | true
    }

  export interface TrendingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trending'], meta: { name: 'Trending' } }
    /**
     * Find zero or one Trending that matches the filter.
     * @param {TrendingFindUniqueArgs} args - Arguments to find a Trending
     * @example
     * // Get one Trending
     * const trending = await prisma.trending.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrendingFindUniqueArgs>(args: SelectSubset<T, TrendingFindUniqueArgs<ExtArgs>>): Prisma__TrendingClient<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trending that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrendingFindUniqueOrThrowArgs} args - Arguments to find a Trending
     * @example
     * // Get one Trending
     * const trending = await prisma.trending.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrendingFindUniqueOrThrowArgs>(args: SelectSubset<T, TrendingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrendingClient<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trending that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingFindFirstArgs} args - Arguments to find a Trending
     * @example
     * // Get one Trending
     * const trending = await prisma.trending.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrendingFindFirstArgs>(args?: SelectSubset<T, TrendingFindFirstArgs<ExtArgs>>): Prisma__TrendingClient<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trending that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingFindFirstOrThrowArgs} args - Arguments to find a Trending
     * @example
     * // Get one Trending
     * const trending = await prisma.trending.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrendingFindFirstOrThrowArgs>(args?: SelectSubset<T, TrendingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrendingClient<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trendings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trendings
     * const trendings = await prisma.trending.findMany()
     * 
     * // Get first 10 Trendings
     * const trendings = await prisma.trending.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trendingWithIdOnly = await prisma.trending.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrendingFindManyArgs>(args?: SelectSubset<T, TrendingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trending.
     * @param {TrendingCreateArgs} args - Arguments to create a Trending.
     * @example
     * // Create one Trending
     * const Trending = await prisma.trending.create({
     *   data: {
     *     // ... data to create a Trending
     *   }
     * })
     * 
     */
    create<T extends TrendingCreateArgs>(args: SelectSubset<T, TrendingCreateArgs<ExtArgs>>): Prisma__TrendingClient<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trendings.
     * @param {TrendingCreateManyArgs} args - Arguments to create many Trendings.
     * @example
     * // Create many Trendings
     * const trending = await prisma.trending.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrendingCreateManyArgs>(args?: SelectSubset<T, TrendingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trending.
     * @param {TrendingDeleteArgs} args - Arguments to delete one Trending.
     * @example
     * // Delete one Trending
     * const Trending = await prisma.trending.delete({
     *   where: {
     *     // ... filter to delete one Trending
     *   }
     * })
     * 
     */
    delete<T extends TrendingDeleteArgs>(args: SelectSubset<T, TrendingDeleteArgs<ExtArgs>>): Prisma__TrendingClient<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trending.
     * @param {TrendingUpdateArgs} args - Arguments to update one Trending.
     * @example
     * // Update one Trending
     * const trending = await prisma.trending.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrendingUpdateArgs>(args: SelectSubset<T, TrendingUpdateArgs<ExtArgs>>): Prisma__TrendingClient<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trendings.
     * @param {TrendingDeleteManyArgs} args - Arguments to filter Trendings to delete.
     * @example
     * // Delete a few Trendings
     * const { count } = await prisma.trending.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrendingDeleteManyArgs>(args?: SelectSubset<T, TrendingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trendings
     * const trending = await prisma.trending.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrendingUpdateManyArgs>(args: SelectSubset<T, TrendingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trending.
     * @param {TrendingUpsertArgs} args - Arguments to update or create a Trending.
     * @example
     * // Update or create a Trending
     * const trending = await prisma.trending.upsert({
     *   create: {
     *     // ... data to create a Trending
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trending we want to update
     *   }
     * })
     */
    upsert<T extends TrendingUpsertArgs>(args: SelectSubset<T, TrendingUpsertArgs<ExtArgs>>): Prisma__TrendingClient<$Result.GetResult<Prisma.$TrendingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingCountArgs} args - Arguments to filter Trendings to count.
     * @example
     * // Count the number of Trendings
     * const count = await prisma.trending.count({
     *   where: {
     *     // ... the filter for the Trendings we want to count
     *   }
     * })
    **/
    count<T extends TrendingCountArgs>(
      args?: Subset<T, TrendingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrendingAggregateArgs>(args: Subset<T, TrendingAggregateArgs>): Prisma.PrismaPromise<GetTrendingAggregateType<T>>

    /**
     * Group by Trending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrendingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendingGroupByArgs['orderBy'] }
        : { orderBy?: TrendingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrendingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trending model
   */
  readonly fields: TrendingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trending.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trending model
   */
  interface TrendingFieldRefs {
    readonly id: FieldRef<"Trending", 'Int'>
    readonly id_ticker: FieldRef<"Trending", 'Int'>
    readonly date: FieldRef<"Trending", 'DateTime'>
    readonly trend: FieldRef<"Trending", 'String'>
    readonly trend_close: FieldRef<"Trending", 'Float'>
    readonly trend_open: FieldRef<"Trending", 'Float'>
    readonly trend_adj_close: FieldRef<"Trending", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Trending findUnique
   */
  export type TrendingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * Filter, which Trending to fetch.
     */
    where: TrendingWhereUniqueInput
  }

  /**
   * Trending findUniqueOrThrow
   */
  export type TrendingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * Filter, which Trending to fetch.
     */
    where: TrendingWhereUniqueInput
  }

  /**
   * Trending findFirst
   */
  export type TrendingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * Filter, which Trending to fetch.
     */
    where?: TrendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trendings to fetch.
     */
    orderBy?: TrendingOrderByWithRelationInput | TrendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trendings.
     */
    cursor?: TrendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trendings.
     */
    distinct?: TrendingScalarFieldEnum | TrendingScalarFieldEnum[]
  }

  /**
   * Trending findFirstOrThrow
   */
  export type TrendingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * Filter, which Trending to fetch.
     */
    where?: TrendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trendings to fetch.
     */
    orderBy?: TrendingOrderByWithRelationInput | TrendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trendings.
     */
    cursor?: TrendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trendings.
     */
    distinct?: TrendingScalarFieldEnum | TrendingScalarFieldEnum[]
  }

  /**
   * Trending findMany
   */
  export type TrendingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * Filter, which Trendings to fetch.
     */
    where?: TrendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trendings to fetch.
     */
    orderBy?: TrendingOrderByWithRelationInput | TrendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trendings.
     */
    cursor?: TrendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trendings.
     */
    skip?: number
    distinct?: TrendingScalarFieldEnum | TrendingScalarFieldEnum[]
  }

  /**
   * Trending create
   */
  export type TrendingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * The data needed to create a Trending.
     */
    data: XOR<TrendingCreateInput, TrendingUncheckedCreateInput>
  }

  /**
   * Trending createMany
   */
  export type TrendingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trendings.
     */
    data: TrendingCreateManyInput | TrendingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trending update
   */
  export type TrendingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * The data needed to update a Trending.
     */
    data: XOR<TrendingUpdateInput, TrendingUncheckedUpdateInput>
    /**
     * Choose, which Trending to update.
     */
    where: TrendingWhereUniqueInput
  }

  /**
   * Trending updateMany
   */
  export type TrendingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trendings.
     */
    data: XOR<TrendingUpdateManyMutationInput, TrendingUncheckedUpdateManyInput>
    /**
     * Filter which Trendings to update
     */
    where?: TrendingWhereInput
    /**
     * Limit how many Trendings to update.
     */
    limit?: number
  }

  /**
   * Trending upsert
   */
  export type TrendingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * The filter to search for the Trending to update in case it exists.
     */
    where: TrendingWhereUniqueInput
    /**
     * In case the Trending found by the `where` argument doesn't exist, create a new Trending with this data.
     */
    create: XOR<TrendingCreateInput, TrendingUncheckedCreateInput>
    /**
     * In case the Trending was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendingUpdateInput, TrendingUncheckedUpdateInput>
  }

  /**
   * Trending delete
   */
  export type TrendingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
    /**
     * Filter which Trending to delete.
     */
    where: TrendingWhereUniqueInput
  }

  /**
   * Trending deleteMany
   */
  export type TrendingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trendings to delete
     */
    where?: TrendingWhereInput
    /**
     * Limit how many Trendings to delete.
     */
    limit?: number
  }

  /**
   * Trending without action
   */
  export type TrendingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trending
     */
    select?: TrendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trending
     */
    omit?: TrendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingInclude<ExtArgs> | null
  }


  /**
   * Model Volatility
   */

  export type AggregateVolatility = {
    _count: VolatilityCountAggregateOutputType | null
    _avg: VolatilityAvgAggregateOutputType | null
    _sum: VolatilitySumAggregateOutputType | null
    _min: VolatilityMinAggregateOutputType | null
    _max: VolatilityMaxAggregateOutputType | null
  }

  export type VolatilityAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    volatility: number | null
    volatility_open: number | null
    volatility_close: number | null
    volatility_adj_close: number | null
  }

  export type VolatilitySumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    volatility: number | null
    volatility_open: number | null
    volatility_close: number | null
    volatility_adj_close: number | null
  }

  export type VolatilityMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    volatility: number | null
    volatility_open: number | null
    volatility_close: number | null
    volatility_adj_close: number | null
  }

  export type VolatilityMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    volatility: number | null
    volatility_open: number | null
    volatility_close: number | null
    volatility_adj_close: number | null
  }

  export type VolatilityCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    volatility: number
    volatility_open: number
    volatility_close: number
    volatility_adj_close: number
    _all: number
  }


  export type VolatilityAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    volatility?: true
    volatility_open?: true
    volatility_close?: true
    volatility_adj_close?: true
  }

  export type VolatilitySumAggregateInputType = {
    id?: true
    id_ticker?: true
    volatility?: true
    volatility_open?: true
    volatility_close?: true
    volatility_adj_close?: true
  }

  export type VolatilityMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    volatility?: true
    volatility_open?: true
    volatility_close?: true
    volatility_adj_close?: true
  }

  export type VolatilityMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    volatility?: true
    volatility_open?: true
    volatility_close?: true
    volatility_adj_close?: true
  }

  export type VolatilityCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    volatility?: true
    volatility_open?: true
    volatility_close?: true
    volatility_adj_close?: true
    _all?: true
  }

  export type VolatilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volatility to aggregate.
     */
    where?: VolatilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volatilities to fetch.
     */
    orderBy?: VolatilityOrderByWithRelationInput | VolatilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolatilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volatilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volatilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volatilities
    **/
    _count?: true | VolatilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolatilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolatilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolatilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolatilityMaxAggregateInputType
  }

  export type GetVolatilityAggregateType<T extends VolatilityAggregateArgs> = {
        [P in keyof T & keyof AggregateVolatility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolatility[P]>
      : GetScalarType<T[P], AggregateVolatility[P]>
  }




  export type VolatilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolatilityWhereInput
    orderBy?: VolatilityOrderByWithAggregationInput | VolatilityOrderByWithAggregationInput[]
    by: VolatilityScalarFieldEnum[] | VolatilityScalarFieldEnum
    having?: VolatilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolatilityCountAggregateInputType | true
    _avg?: VolatilityAvgAggregateInputType
    _sum?: VolatilitySumAggregateInputType
    _min?: VolatilityMinAggregateInputType
    _max?: VolatilityMaxAggregateInputType
  }

  export type VolatilityGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    volatility: number
    volatility_open: number
    volatility_close: number
    volatility_adj_close: number
    _count: VolatilityCountAggregateOutputType | null
    _avg: VolatilityAvgAggregateOutputType | null
    _sum: VolatilitySumAggregateOutputType | null
    _min: VolatilityMinAggregateOutputType | null
    _max: VolatilityMaxAggregateOutputType | null
  }

  type GetVolatilityGroupByPayload<T extends VolatilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolatilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolatilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolatilityGroupByOutputType[P]>
            : GetScalarType<T[P], VolatilityGroupByOutputType[P]>
        }
      >
    >


  export type VolatilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    volatility?: boolean
    volatility_open?: boolean
    volatility_close?: boolean
    volatility_adj_close?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volatility"]>



  export type VolatilitySelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    volatility?: boolean
    volatility_open?: boolean
    volatility_close?: boolean
    volatility_adj_close?: boolean
  }

  export type VolatilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "volatility" | "volatility_open" | "volatility_close" | "volatility_adj_close", ExtArgs["result"]["volatility"]>
  export type VolatilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $VolatilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volatility"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      volatility: number
      volatility_open: number
      volatility_close: number
      volatility_adj_close: number
    }, ExtArgs["result"]["volatility"]>
    composites: {}
  }

  type VolatilityGetPayload<S extends boolean | null | undefined | VolatilityDefaultArgs> = $Result.GetResult<Prisma.$VolatilityPayload, S>

  type VolatilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolatilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolatilityCountAggregateInputType | true
    }

  export interface VolatilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volatility'], meta: { name: 'Volatility' } }
    /**
     * Find zero or one Volatility that matches the filter.
     * @param {VolatilityFindUniqueArgs} args - Arguments to find a Volatility
     * @example
     * // Get one Volatility
     * const volatility = await prisma.volatility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolatilityFindUniqueArgs>(args: SelectSubset<T, VolatilityFindUniqueArgs<ExtArgs>>): Prisma__VolatilityClient<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volatility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolatilityFindUniqueOrThrowArgs} args - Arguments to find a Volatility
     * @example
     * // Get one Volatility
     * const volatility = await prisma.volatility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolatilityFindUniqueOrThrowArgs>(args: SelectSubset<T, VolatilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolatilityClient<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volatility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolatilityFindFirstArgs} args - Arguments to find a Volatility
     * @example
     * // Get one Volatility
     * const volatility = await prisma.volatility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolatilityFindFirstArgs>(args?: SelectSubset<T, VolatilityFindFirstArgs<ExtArgs>>): Prisma__VolatilityClient<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volatility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolatilityFindFirstOrThrowArgs} args - Arguments to find a Volatility
     * @example
     * // Get one Volatility
     * const volatility = await prisma.volatility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolatilityFindFirstOrThrowArgs>(args?: SelectSubset<T, VolatilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolatilityClient<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volatilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolatilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volatilities
     * const volatilities = await prisma.volatility.findMany()
     * 
     * // Get first 10 Volatilities
     * const volatilities = await prisma.volatility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volatilityWithIdOnly = await prisma.volatility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolatilityFindManyArgs>(args?: SelectSubset<T, VolatilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volatility.
     * @param {VolatilityCreateArgs} args - Arguments to create a Volatility.
     * @example
     * // Create one Volatility
     * const Volatility = await prisma.volatility.create({
     *   data: {
     *     // ... data to create a Volatility
     *   }
     * })
     * 
     */
    create<T extends VolatilityCreateArgs>(args: SelectSubset<T, VolatilityCreateArgs<ExtArgs>>): Prisma__VolatilityClient<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volatilities.
     * @param {VolatilityCreateManyArgs} args - Arguments to create many Volatilities.
     * @example
     * // Create many Volatilities
     * const volatility = await prisma.volatility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolatilityCreateManyArgs>(args?: SelectSubset<T, VolatilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Volatility.
     * @param {VolatilityDeleteArgs} args - Arguments to delete one Volatility.
     * @example
     * // Delete one Volatility
     * const Volatility = await prisma.volatility.delete({
     *   where: {
     *     // ... filter to delete one Volatility
     *   }
     * })
     * 
     */
    delete<T extends VolatilityDeleteArgs>(args: SelectSubset<T, VolatilityDeleteArgs<ExtArgs>>): Prisma__VolatilityClient<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volatility.
     * @param {VolatilityUpdateArgs} args - Arguments to update one Volatility.
     * @example
     * // Update one Volatility
     * const volatility = await prisma.volatility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolatilityUpdateArgs>(args: SelectSubset<T, VolatilityUpdateArgs<ExtArgs>>): Prisma__VolatilityClient<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volatilities.
     * @param {VolatilityDeleteManyArgs} args - Arguments to filter Volatilities to delete.
     * @example
     * // Delete a few Volatilities
     * const { count } = await prisma.volatility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolatilityDeleteManyArgs>(args?: SelectSubset<T, VolatilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volatilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolatilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volatilities
     * const volatility = await prisma.volatility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolatilityUpdateManyArgs>(args: SelectSubset<T, VolatilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Volatility.
     * @param {VolatilityUpsertArgs} args - Arguments to update or create a Volatility.
     * @example
     * // Update or create a Volatility
     * const volatility = await prisma.volatility.upsert({
     *   create: {
     *     // ... data to create a Volatility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volatility we want to update
     *   }
     * })
     */
    upsert<T extends VolatilityUpsertArgs>(args: SelectSubset<T, VolatilityUpsertArgs<ExtArgs>>): Prisma__VolatilityClient<$Result.GetResult<Prisma.$VolatilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volatilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolatilityCountArgs} args - Arguments to filter Volatilities to count.
     * @example
     * // Count the number of Volatilities
     * const count = await prisma.volatility.count({
     *   where: {
     *     // ... the filter for the Volatilities we want to count
     *   }
     * })
    **/
    count<T extends VolatilityCountArgs>(
      args?: Subset<T, VolatilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolatilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volatility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolatilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolatilityAggregateArgs>(args: Subset<T, VolatilityAggregateArgs>): Prisma.PrismaPromise<GetVolatilityAggregateType<T>>

    /**
     * Group by Volatility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolatilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolatilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolatilityGroupByArgs['orderBy'] }
        : { orderBy?: VolatilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolatilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolatilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volatility model
   */
  readonly fields: VolatilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volatility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolatilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Volatility model
   */
  interface VolatilityFieldRefs {
    readonly id: FieldRef<"Volatility", 'Int'>
    readonly id_ticker: FieldRef<"Volatility", 'Int'>
    readonly date: FieldRef<"Volatility", 'DateTime'>
    readonly volatility: FieldRef<"Volatility", 'Float'>
    readonly volatility_open: FieldRef<"Volatility", 'Float'>
    readonly volatility_close: FieldRef<"Volatility", 'Float'>
    readonly volatility_adj_close: FieldRef<"Volatility", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Volatility findUnique
   */
  export type VolatilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * Filter, which Volatility to fetch.
     */
    where: VolatilityWhereUniqueInput
  }

  /**
   * Volatility findUniqueOrThrow
   */
  export type VolatilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * Filter, which Volatility to fetch.
     */
    where: VolatilityWhereUniqueInput
  }

  /**
   * Volatility findFirst
   */
  export type VolatilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * Filter, which Volatility to fetch.
     */
    where?: VolatilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volatilities to fetch.
     */
    orderBy?: VolatilityOrderByWithRelationInput | VolatilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volatilities.
     */
    cursor?: VolatilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volatilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volatilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volatilities.
     */
    distinct?: VolatilityScalarFieldEnum | VolatilityScalarFieldEnum[]
  }

  /**
   * Volatility findFirstOrThrow
   */
  export type VolatilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * Filter, which Volatility to fetch.
     */
    where?: VolatilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volatilities to fetch.
     */
    orderBy?: VolatilityOrderByWithRelationInput | VolatilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volatilities.
     */
    cursor?: VolatilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volatilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volatilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volatilities.
     */
    distinct?: VolatilityScalarFieldEnum | VolatilityScalarFieldEnum[]
  }

  /**
   * Volatility findMany
   */
  export type VolatilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * Filter, which Volatilities to fetch.
     */
    where?: VolatilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volatilities to fetch.
     */
    orderBy?: VolatilityOrderByWithRelationInput | VolatilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volatilities.
     */
    cursor?: VolatilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volatilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volatilities.
     */
    skip?: number
    distinct?: VolatilityScalarFieldEnum | VolatilityScalarFieldEnum[]
  }

  /**
   * Volatility create
   */
  export type VolatilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Volatility.
     */
    data: XOR<VolatilityCreateInput, VolatilityUncheckedCreateInput>
  }

  /**
   * Volatility createMany
   */
  export type VolatilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volatilities.
     */
    data: VolatilityCreateManyInput | VolatilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volatility update
   */
  export type VolatilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Volatility.
     */
    data: XOR<VolatilityUpdateInput, VolatilityUncheckedUpdateInput>
    /**
     * Choose, which Volatility to update.
     */
    where: VolatilityWhereUniqueInput
  }

  /**
   * Volatility updateMany
   */
  export type VolatilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volatilities.
     */
    data: XOR<VolatilityUpdateManyMutationInput, VolatilityUncheckedUpdateManyInput>
    /**
     * Filter which Volatilities to update
     */
    where?: VolatilityWhereInput
    /**
     * Limit how many Volatilities to update.
     */
    limit?: number
  }

  /**
   * Volatility upsert
   */
  export type VolatilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Volatility to update in case it exists.
     */
    where: VolatilityWhereUniqueInput
    /**
     * In case the Volatility found by the `where` argument doesn't exist, create a new Volatility with this data.
     */
    create: XOR<VolatilityCreateInput, VolatilityUncheckedCreateInput>
    /**
     * In case the Volatility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolatilityUpdateInput, VolatilityUncheckedUpdateInput>
  }

  /**
   * Volatility delete
   */
  export type VolatilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
    /**
     * Filter which Volatility to delete.
     */
    where: VolatilityWhereUniqueInput
  }

  /**
   * Volatility deleteMany
   */
  export type VolatilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volatilities to delete
     */
    where?: VolatilityWhereInput
    /**
     * Limit how many Volatilities to delete.
     */
    limit?: number
  }

  /**
   * Volatility without action
   */
  export type VolatilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volatility
     */
    select?: VolatilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volatility
     */
    omit?: VolatilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolatilityInclude<ExtArgs> | null
  }


  /**
   * Model Anomaly_prediction
   */

  export type AggregateAnomaly_prediction = {
    _count: Anomaly_predictionCountAggregateOutputType | null
    _avg: Anomaly_predictionAvgAggregateOutputType | null
    _sum: Anomaly_predictionSumAggregateOutputType | null
    _min: Anomaly_predictionMinAggregateOutputType | null
    _max: Anomaly_predictionMaxAggregateOutputType | null
  }

  export type Anomaly_predictionAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    anomaly_price: number | null
    anomaly_volume: number | null
  }

  export type Anomaly_predictionSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    anomaly_price: number | null
    anomaly_volume: number | null
  }

  export type Anomaly_predictionMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    anomaly_price: number | null
    anomaly_volume: number | null
  }

  export type Anomaly_predictionMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    anomaly_price: number | null
    anomaly_volume: number | null
  }

  export type Anomaly_predictionCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    anomaly_price: number
    anomaly_volume: number
    _all: number
  }


  export type Anomaly_predictionAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    anomaly_price?: true
    anomaly_volume?: true
  }

  export type Anomaly_predictionSumAggregateInputType = {
    id?: true
    id_ticker?: true
    anomaly_price?: true
    anomaly_volume?: true
  }

  export type Anomaly_predictionMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    anomaly_price?: true
    anomaly_volume?: true
  }

  export type Anomaly_predictionMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    anomaly_price?: true
    anomaly_volume?: true
  }

  export type Anomaly_predictionCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    anomaly_price?: true
    anomaly_volume?: true
    _all?: true
  }

  export type Anomaly_predictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anomaly_prediction to aggregate.
     */
    where?: Anomaly_predictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anomaly_predictions to fetch.
     */
    orderBy?: Anomaly_predictionOrderByWithRelationInput | Anomaly_predictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Anomaly_predictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anomaly_predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anomaly_predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anomaly_predictions
    **/
    _count?: true | Anomaly_predictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Anomaly_predictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Anomaly_predictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Anomaly_predictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Anomaly_predictionMaxAggregateInputType
  }

  export type GetAnomaly_predictionAggregateType<T extends Anomaly_predictionAggregateArgs> = {
        [P in keyof T & keyof AggregateAnomaly_prediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnomaly_prediction[P]>
      : GetScalarType<T[P], AggregateAnomaly_prediction[P]>
  }




  export type Anomaly_predictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Anomaly_predictionWhereInput
    orderBy?: Anomaly_predictionOrderByWithAggregationInput | Anomaly_predictionOrderByWithAggregationInput[]
    by: Anomaly_predictionScalarFieldEnum[] | Anomaly_predictionScalarFieldEnum
    having?: Anomaly_predictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Anomaly_predictionCountAggregateInputType | true
    _avg?: Anomaly_predictionAvgAggregateInputType
    _sum?: Anomaly_predictionSumAggregateInputType
    _min?: Anomaly_predictionMinAggregateInputType
    _max?: Anomaly_predictionMaxAggregateInputType
  }

  export type Anomaly_predictionGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    anomaly_price: number
    anomaly_volume: number
    _count: Anomaly_predictionCountAggregateOutputType | null
    _avg: Anomaly_predictionAvgAggregateOutputType | null
    _sum: Anomaly_predictionSumAggregateOutputType | null
    _min: Anomaly_predictionMinAggregateOutputType | null
    _max: Anomaly_predictionMaxAggregateOutputType | null
  }

  type GetAnomaly_predictionGroupByPayload<T extends Anomaly_predictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Anomaly_predictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Anomaly_predictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Anomaly_predictionGroupByOutputType[P]>
            : GetScalarType<T[P], Anomaly_predictionGroupByOutputType[P]>
        }
      >
    >


  export type Anomaly_predictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    anomaly_price?: boolean
    anomaly_volume?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anomaly_prediction"]>



  export type Anomaly_predictionSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    anomaly_price?: boolean
    anomaly_volume?: boolean
  }

  export type Anomaly_predictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "anomaly_price" | "anomaly_volume", ExtArgs["result"]["anomaly_prediction"]>
  export type Anomaly_predictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Anomaly_predictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anomaly_prediction"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      anomaly_price: number
      anomaly_volume: number
    }, ExtArgs["result"]["anomaly_prediction"]>
    composites: {}
  }

  type Anomaly_predictionGetPayload<S extends boolean | null | undefined | Anomaly_predictionDefaultArgs> = $Result.GetResult<Prisma.$Anomaly_predictionPayload, S>

  type Anomaly_predictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Anomaly_predictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Anomaly_predictionCountAggregateInputType | true
    }

  export interface Anomaly_predictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anomaly_prediction'], meta: { name: 'Anomaly_prediction' } }
    /**
     * Find zero or one Anomaly_prediction that matches the filter.
     * @param {Anomaly_predictionFindUniqueArgs} args - Arguments to find a Anomaly_prediction
     * @example
     * // Get one Anomaly_prediction
     * const anomaly_prediction = await prisma.anomaly_prediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Anomaly_predictionFindUniqueArgs>(args: SelectSubset<T, Anomaly_predictionFindUniqueArgs<ExtArgs>>): Prisma__Anomaly_predictionClient<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anomaly_prediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Anomaly_predictionFindUniqueOrThrowArgs} args - Arguments to find a Anomaly_prediction
     * @example
     * // Get one Anomaly_prediction
     * const anomaly_prediction = await prisma.anomaly_prediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Anomaly_predictionFindUniqueOrThrowArgs>(args: SelectSubset<T, Anomaly_predictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Anomaly_predictionClient<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anomaly_prediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anomaly_predictionFindFirstArgs} args - Arguments to find a Anomaly_prediction
     * @example
     * // Get one Anomaly_prediction
     * const anomaly_prediction = await prisma.anomaly_prediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Anomaly_predictionFindFirstArgs>(args?: SelectSubset<T, Anomaly_predictionFindFirstArgs<ExtArgs>>): Prisma__Anomaly_predictionClient<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anomaly_prediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anomaly_predictionFindFirstOrThrowArgs} args - Arguments to find a Anomaly_prediction
     * @example
     * // Get one Anomaly_prediction
     * const anomaly_prediction = await prisma.anomaly_prediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Anomaly_predictionFindFirstOrThrowArgs>(args?: SelectSubset<T, Anomaly_predictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__Anomaly_predictionClient<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anomaly_predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anomaly_predictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anomaly_predictions
     * const anomaly_predictions = await prisma.anomaly_prediction.findMany()
     * 
     * // Get first 10 Anomaly_predictions
     * const anomaly_predictions = await prisma.anomaly_prediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anomaly_predictionWithIdOnly = await prisma.anomaly_prediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Anomaly_predictionFindManyArgs>(args?: SelectSubset<T, Anomaly_predictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anomaly_prediction.
     * @param {Anomaly_predictionCreateArgs} args - Arguments to create a Anomaly_prediction.
     * @example
     * // Create one Anomaly_prediction
     * const Anomaly_prediction = await prisma.anomaly_prediction.create({
     *   data: {
     *     // ... data to create a Anomaly_prediction
     *   }
     * })
     * 
     */
    create<T extends Anomaly_predictionCreateArgs>(args: SelectSubset<T, Anomaly_predictionCreateArgs<ExtArgs>>): Prisma__Anomaly_predictionClient<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anomaly_predictions.
     * @param {Anomaly_predictionCreateManyArgs} args - Arguments to create many Anomaly_predictions.
     * @example
     * // Create many Anomaly_predictions
     * const anomaly_prediction = await prisma.anomaly_prediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Anomaly_predictionCreateManyArgs>(args?: SelectSubset<T, Anomaly_predictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Anomaly_prediction.
     * @param {Anomaly_predictionDeleteArgs} args - Arguments to delete one Anomaly_prediction.
     * @example
     * // Delete one Anomaly_prediction
     * const Anomaly_prediction = await prisma.anomaly_prediction.delete({
     *   where: {
     *     // ... filter to delete one Anomaly_prediction
     *   }
     * })
     * 
     */
    delete<T extends Anomaly_predictionDeleteArgs>(args: SelectSubset<T, Anomaly_predictionDeleteArgs<ExtArgs>>): Prisma__Anomaly_predictionClient<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anomaly_prediction.
     * @param {Anomaly_predictionUpdateArgs} args - Arguments to update one Anomaly_prediction.
     * @example
     * // Update one Anomaly_prediction
     * const anomaly_prediction = await prisma.anomaly_prediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Anomaly_predictionUpdateArgs>(args: SelectSubset<T, Anomaly_predictionUpdateArgs<ExtArgs>>): Prisma__Anomaly_predictionClient<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anomaly_predictions.
     * @param {Anomaly_predictionDeleteManyArgs} args - Arguments to filter Anomaly_predictions to delete.
     * @example
     * // Delete a few Anomaly_predictions
     * const { count } = await prisma.anomaly_prediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Anomaly_predictionDeleteManyArgs>(args?: SelectSubset<T, Anomaly_predictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anomaly_predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anomaly_predictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anomaly_predictions
     * const anomaly_prediction = await prisma.anomaly_prediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Anomaly_predictionUpdateManyArgs>(args: SelectSubset<T, Anomaly_predictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Anomaly_prediction.
     * @param {Anomaly_predictionUpsertArgs} args - Arguments to update or create a Anomaly_prediction.
     * @example
     * // Update or create a Anomaly_prediction
     * const anomaly_prediction = await prisma.anomaly_prediction.upsert({
     *   create: {
     *     // ... data to create a Anomaly_prediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anomaly_prediction we want to update
     *   }
     * })
     */
    upsert<T extends Anomaly_predictionUpsertArgs>(args: SelectSubset<T, Anomaly_predictionUpsertArgs<ExtArgs>>): Prisma__Anomaly_predictionClient<$Result.GetResult<Prisma.$Anomaly_predictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anomaly_predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anomaly_predictionCountArgs} args - Arguments to filter Anomaly_predictions to count.
     * @example
     * // Count the number of Anomaly_predictions
     * const count = await prisma.anomaly_prediction.count({
     *   where: {
     *     // ... the filter for the Anomaly_predictions we want to count
     *   }
     * })
    **/
    count<T extends Anomaly_predictionCountArgs>(
      args?: Subset<T, Anomaly_predictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Anomaly_predictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anomaly_prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anomaly_predictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Anomaly_predictionAggregateArgs>(args: Subset<T, Anomaly_predictionAggregateArgs>): Prisma.PrismaPromise<GetAnomaly_predictionAggregateType<T>>

    /**
     * Group by Anomaly_prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anomaly_predictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Anomaly_predictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Anomaly_predictionGroupByArgs['orderBy'] }
        : { orderBy?: Anomaly_predictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Anomaly_predictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnomaly_predictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anomaly_prediction model
   */
  readonly fields: Anomaly_predictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anomaly_prediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Anomaly_predictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Anomaly_prediction model
   */
  interface Anomaly_predictionFieldRefs {
    readonly id: FieldRef<"Anomaly_prediction", 'Int'>
    readonly id_ticker: FieldRef<"Anomaly_prediction", 'Int'>
    readonly date: FieldRef<"Anomaly_prediction", 'DateTime'>
    readonly anomaly_price: FieldRef<"Anomaly_prediction", 'Float'>
    readonly anomaly_volume: FieldRef<"Anomaly_prediction", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Anomaly_prediction findUnique
   */
  export type Anomaly_predictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * Filter, which Anomaly_prediction to fetch.
     */
    where: Anomaly_predictionWhereUniqueInput
  }

  /**
   * Anomaly_prediction findUniqueOrThrow
   */
  export type Anomaly_predictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * Filter, which Anomaly_prediction to fetch.
     */
    where: Anomaly_predictionWhereUniqueInput
  }

  /**
   * Anomaly_prediction findFirst
   */
  export type Anomaly_predictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * Filter, which Anomaly_prediction to fetch.
     */
    where?: Anomaly_predictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anomaly_predictions to fetch.
     */
    orderBy?: Anomaly_predictionOrderByWithRelationInput | Anomaly_predictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anomaly_predictions.
     */
    cursor?: Anomaly_predictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anomaly_predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anomaly_predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anomaly_predictions.
     */
    distinct?: Anomaly_predictionScalarFieldEnum | Anomaly_predictionScalarFieldEnum[]
  }

  /**
   * Anomaly_prediction findFirstOrThrow
   */
  export type Anomaly_predictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * Filter, which Anomaly_prediction to fetch.
     */
    where?: Anomaly_predictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anomaly_predictions to fetch.
     */
    orderBy?: Anomaly_predictionOrderByWithRelationInput | Anomaly_predictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anomaly_predictions.
     */
    cursor?: Anomaly_predictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anomaly_predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anomaly_predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anomaly_predictions.
     */
    distinct?: Anomaly_predictionScalarFieldEnum | Anomaly_predictionScalarFieldEnum[]
  }

  /**
   * Anomaly_prediction findMany
   */
  export type Anomaly_predictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * Filter, which Anomaly_predictions to fetch.
     */
    where?: Anomaly_predictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anomaly_predictions to fetch.
     */
    orderBy?: Anomaly_predictionOrderByWithRelationInput | Anomaly_predictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anomaly_predictions.
     */
    cursor?: Anomaly_predictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anomaly_predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anomaly_predictions.
     */
    skip?: number
    distinct?: Anomaly_predictionScalarFieldEnum | Anomaly_predictionScalarFieldEnum[]
  }

  /**
   * Anomaly_prediction create
   */
  export type Anomaly_predictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * The data needed to create a Anomaly_prediction.
     */
    data: XOR<Anomaly_predictionCreateInput, Anomaly_predictionUncheckedCreateInput>
  }

  /**
   * Anomaly_prediction createMany
   */
  export type Anomaly_predictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anomaly_predictions.
     */
    data: Anomaly_predictionCreateManyInput | Anomaly_predictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anomaly_prediction update
   */
  export type Anomaly_predictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * The data needed to update a Anomaly_prediction.
     */
    data: XOR<Anomaly_predictionUpdateInput, Anomaly_predictionUncheckedUpdateInput>
    /**
     * Choose, which Anomaly_prediction to update.
     */
    where: Anomaly_predictionWhereUniqueInput
  }

  /**
   * Anomaly_prediction updateMany
   */
  export type Anomaly_predictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anomaly_predictions.
     */
    data: XOR<Anomaly_predictionUpdateManyMutationInput, Anomaly_predictionUncheckedUpdateManyInput>
    /**
     * Filter which Anomaly_predictions to update
     */
    where?: Anomaly_predictionWhereInput
    /**
     * Limit how many Anomaly_predictions to update.
     */
    limit?: number
  }

  /**
   * Anomaly_prediction upsert
   */
  export type Anomaly_predictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * The filter to search for the Anomaly_prediction to update in case it exists.
     */
    where: Anomaly_predictionWhereUniqueInput
    /**
     * In case the Anomaly_prediction found by the `where` argument doesn't exist, create a new Anomaly_prediction with this data.
     */
    create: XOR<Anomaly_predictionCreateInput, Anomaly_predictionUncheckedCreateInput>
    /**
     * In case the Anomaly_prediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Anomaly_predictionUpdateInput, Anomaly_predictionUncheckedUpdateInput>
  }

  /**
   * Anomaly_prediction delete
   */
  export type Anomaly_predictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
    /**
     * Filter which Anomaly_prediction to delete.
     */
    where: Anomaly_predictionWhereUniqueInput
  }

  /**
   * Anomaly_prediction deleteMany
   */
  export type Anomaly_predictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anomaly_predictions to delete
     */
    where?: Anomaly_predictionWhereInput
    /**
     * Limit how many Anomaly_predictions to delete.
     */
    limit?: number
  }

  /**
   * Anomaly_prediction without action
   */
  export type Anomaly_predictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anomaly_prediction
     */
    select?: Anomaly_predictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anomaly_prediction
     */
    omit?: Anomaly_predictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Anomaly_predictionInclude<ExtArgs> | null
  }


  /**
   * Model Ema_indicators
   */

  export type AggregateEma_indicators = {
    _count: Ema_indicatorsCountAggregateOutputType | null
    _avg: Ema_indicatorsAvgAggregateOutputType | null
    _sum: Ema_indicatorsSumAggregateOutputType | null
    _min: Ema_indicatorsMinAggregateOutputType | null
    _max: Ema_indicatorsMaxAggregateOutputType | null
  }

  export type Ema_indicatorsAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    ema_5: number | null
    ema_10: number | null
    ema_20: number | null
    ema_50: number | null
    ema_100: number | null
    ema_200: number | null
  }

  export type Ema_indicatorsSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    ema_5: number | null
    ema_10: number | null
    ema_20: number | null
    ema_50: number | null
    ema_100: number | null
    ema_200: number | null
  }

  export type Ema_indicatorsMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    ema_5: number | null
    ema_10: number | null
    ema_20: number | null
    ema_50: number | null
    ema_100: number | null
    ema_200: number | null
  }

  export type Ema_indicatorsMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    ema_5: number | null
    ema_10: number | null
    ema_20: number | null
    ema_50: number | null
    ema_100: number | null
    ema_200: number | null
  }

  export type Ema_indicatorsCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    ema_5: number
    ema_10: number
    ema_20: number
    ema_50: number
    ema_100: number
    ema_200: number
    _all: number
  }


  export type Ema_indicatorsAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    ema_5?: true
    ema_10?: true
    ema_20?: true
    ema_50?: true
    ema_100?: true
    ema_200?: true
  }

  export type Ema_indicatorsSumAggregateInputType = {
    id?: true
    id_ticker?: true
    ema_5?: true
    ema_10?: true
    ema_20?: true
    ema_50?: true
    ema_100?: true
    ema_200?: true
  }

  export type Ema_indicatorsMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    ema_5?: true
    ema_10?: true
    ema_20?: true
    ema_50?: true
    ema_100?: true
    ema_200?: true
  }

  export type Ema_indicatorsMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    ema_5?: true
    ema_10?: true
    ema_20?: true
    ema_50?: true
    ema_100?: true
    ema_200?: true
  }

  export type Ema_indicatorsCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    ema_5?: true
    ema_10?: true
    ema_20?: true
    ema_50?: true
    ema_100?: true
    ema_200?: true
    _all?: true
  }

  export type Ema_indicatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ema_indicators to aggregate.
     */
    where?: Ema_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ema_indicators to fetch.
     */
    orderBy?: Ema_indicatorsOrderByWithRelationInput | Ema_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Ema_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ema_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ema_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ema_indicators
    **/
    _count?: true | Ema_indicatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ema_indicatorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ema_indicatorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ema_indicatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ema_indicatorsMaxAggregateInputType
  }

  export type GetEma_indicatorsAggregateType<T extends Ema_indicatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateEma_indicators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEma_indicators[P]>
      : GetScalarType<T[P], AggregateEma_indicators[P]>
  }




  export type Ema_indicatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ema_indicatorsWhereInput
    orderBy?: Ema_indicatorsOrderByWithAggregationInput | Ema_indicatorsOrderByWithAggregationInput[]
    by: Ema_indicatorsScalarFieldEnum[] | Ema_indicatorsScalarFieldEnum
    having?: Ema_indicatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ema_indicatorsCountAggregateInputType | true
    _avg?: Ema_indicatorsAvgAggregateInputType
    _sum?: Ema_indicatorsSumAggregateInputType
    _min?: Ema_indicatorsMinAggregateInputType
    _max?: Ema_indicatorsMaxAggregateInputType
  }

  export type Ema_indicatorsGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    ema_5: number
    ema_10: number
    ema_20: number
    ema_50: number
    ema_100: number
    ema_200: number
    _count: Ema_indicatorsCountAggregateOutputType | null
    _avg: Ema_indicatorsAvgAggregateOutputType | null
    _sum: Ema_indicatorsSumAggregateOutputType | null
    _min: Ema_indicatorsMinAggregateOutputType | null
    _max: Ema_indicatorsMaxAggregateOutputType | null
  }

  type GetEma_indicatorsGroupByPayload<T extends Ema_indicatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ema_indicatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ema_indicatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ema_indicatorsGroupByOutputType[P]>
            : GetScalarType<T[P], Ema_indicatorsGroupByOutputType[P]>
        }
      >
    >


  export type Ema_indicatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    ema_5?: boolean
    ema_10?: boolean
    ema_20?: boolean
    ema_50?: boolean
    ema_100?: boolean
    ema_200?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ema_indicators"]>



  export type Ema_indicatorsSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    ema_5?: boolean
    ema_10?: boolean
    ema_20?: boolean
    ema_50?: boolean
    ema_100?: boolean
    ema_200?: boolean
  }

  export type Ema_indicatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "ema_5" | "ema_10" | "ema_20" | "ema_50" | "ema_100" | "ema_200", ExtArgs["result"]["ema_indicators"]>
  export type Ema_indicatorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Ema_indicatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ema_indicators"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      ema_5: number
      ema_10: number
      ema_20: number
      ema_50: number
      ema_100: number
      ema_200: number
    }, ExtArgs["result"]["ema_indicators"]>
    composites: {}
  }

  type Ema_indicatorsGetPayload<S extends boolean | null | undefined | Ema_indicatorsDefaultArgs> = $Result.GetResult<Prisma.$Ema_indicatorsPayload, S>

  type Ema_indicatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Ema_indicatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ema_indicatorsCountAggregateInputType | true
    }

  export interface Ema_indicatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ema_indicators'], meta: { name: 'Ema_indicators' } }
    /**
     * Find zero or one Ema_indicators that matches the filter.
     * @param {Ema_indicatorsFindUniqueArgs} args - Arguments to find a Ema_indicators
     * @example
     * // Get one Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Ema_indicatorsFindUniqueArgs>(args: SelectSubset<T, Ema_indicatorsFindUniqueArgs<ExtArgs>>): Prisma__Ema_indicatorsClient<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ema_indicators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Ema_indicatorsFindUniqueOrThrowArgs} args - Arguments to find a Ema_indicators
     * @example
     * // Get one Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Ema_indicatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, Ema_indicatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Ema_indicatorsClient<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ema_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ema_indicatorsFindFirstArgs} args - Arguments to find a Ema_indicators
     * @example
     * // Get one Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Ema_indicatorsFindFirstArgs>(args?: SelectSubset<T, Ema_indicatorsFindFirstArgs<ExtArgs>>): Prisma__Ema_indicatorsClient<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ema_indicators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ema_indicatorsFindFirstOrThrowArgs} args - Arguments to find a Ema_indicators
     * @example
     * // Get one Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Ema_indicatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, Ema_indicatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Ema_indicatorsClient<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ema_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ema_indicatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.findMany()
     * 
     * // Get first 10 Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ema_indicatorsWithIdOnly = await prisma.ema_indicators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Ema_indicatorsFindManyArgs>(args?: SelectSubset<T, Ema_indicatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ema_indicators.
     * @param {Ema_indicatorsCreateArgs} args - Arguments to create a Ema_indicators.
     * @example
     * // Create one Ema_indicators
     * const Ema_indicators = await prisma.ema_indicators.create({
     *   data: {
     *     // ... data to create a Ema_indicators
     *   }
     * })
     * 
     */
    create<T extends Ema_indicatorsCreateArgs>(args: SelectSubset<T, Ema_indicatorsCreateArgs<ExtArgs>>): Prisma__Ema_indicatorsClient<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ema_indicators.
     * @param {Ema_indicatorsCreateManyArgs} args - Arguments to create many Ema_indicators.
     * @example
     * // Create many Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Ema_indicatorsCreateManyArgs>(args?: SelectSubset<T, Ema_indicatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ema_indicators.
     * @param {Ema_indicatorsDeleteArgs} args - Arguments to delete one Ema_indicators.
     * @example
     * // Delete one Ema_indicators
     * const Ema_indicators = await prisma.ema_indicators.delete({
     *   where: {
     *     // ... filter to delete one Ema_indicators
     *   }
     * })
     * 
     */
    delete<T extends Ema_indicatorsDeleteArgs>(args: SelectSubset<T, Ema_indicatorsDeleteArgs<ExtArgs>>): Prisma__Ema_indicatorsClient<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ema_indicators.
     * @param {Ema_indicatorsUpdateArgs} args - Arguments to update one Ema_indicators.
     * @example
     * // Update one Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Ema_indicatorsUpdateArgs>(args: SelectSubset<T, Ema_indicatorsUpdateArgs<ExtArgs>>): Prisma__Ema_indicatorsClient<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ema_indicators.
     * @param {Ema_indicatorsDeleteManyArgs} args - Arguments to filter Ema_indicators to delete.
     * @example
     * // Delete a few Ema_indicators
     * const { count } = await prisma.ema_indicators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Ema_indicatorsDeleteManyArgs>(args?: SelectSubset<T, Ema_indicatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ema_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ema_indicatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Ema_indicatorsUpdateManyArgs>(args: SelectSubset<T, Ema_indicatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ema_indicators.
     * @param {Ema_indicatorsUpsertArgs} args - Arguments to update or create a Ema_indicators.
     * @example
     * // Update or create a Ema_indicators
     * const ema_indicators = await prisma.ema_indicators.upsert({
     *   create: {
     *     // ... data to create a Ema_indicators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ema_indicators we want to update
     *   }
     * })
     */
    upsert<T extends Ema_indicatorsUpsertArgs>(args: SelectSubset<T, Ema_indicatorsUpsertArgs<ExtArgs>>): Prisma__Ema_indicatorsClient<$Result.GetResult<Prisma.$Ema_indicatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ema_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ema_indicatorsCountArgs} args - Arguments to filter Ema_indicators to count.
     * @example
     * // Count the number of Ema_indicators
     * const count = await prisma.ema_indicators.count({
     *   where: {
     *     // ... the filter for the Ema_indicators we want to count
     *   }
     * })
    **/
    count<T extends Ema_indicatorsCountArgs>(
      args?: Subset<T, Ema_indicatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ema_indicatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ema_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ema_indicatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ema_indicatorsAggregateArgs>(args: Subset<T, Ema_indicatorsAggregateArgs>): Prisma.PrismaPromise<GetEma_indicatorsAggregateType<T>>

    /**
     * Group by Ema_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ema_indicatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ema_indicatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ema_indicatorsGroupByArgs['orderBy'] }
        : { orderBy?: Ema_indicatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ema_indicatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEma_indicatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ema_indicators model
   */
  readonly fields: Ema_indicatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ema_indicators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Ema_indicatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ema_indicators model
   */
  interface Ema_indicatorsFieldRefs {
    readonly id: FieldRef<"Ema_indicators", 'Int'>
    readonly id_ticker: FieldRef<"Ema_indicators", 'Int'>
    readonly date: FieldRef<"Ema_indicators", 'DateTime'>
    readonly ema_5: FieldRef<"Ema_indicators", 'Float'>
    readonly ema_10: FieldRef<"Ema_indicators", 'Float'>
    readonly ema_20: FieldRef<"Ema_indicators", 'Float'>
    readonly ema_50: FieldRef<"Ema_indicators", 'Float'>
    readonly ema_100: FieldRef<"Ema_indicators", 'Float'>
    readonly ema_200: FieldRef<"Ema_indicators", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Ema_indicators findUnique
   */
  export type Ema_indicatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Ema_indicators to fetch.
     */
    where: Ema_indicatorsWhereUniqueInput
  }

  /**
   * Ema_indicators findUniqueOrThrow
   */
  export type Ema_indicatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Ema_indicators to fetch.
     */
    where: Ema_indicatorsWhereUniqueInput
  }

  /**
   * Ema_indicators findFirst
   */
  export type Ema_indicatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Ema_indicators to fetch.
     */
    where?: Ema_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ema_indicators to fetch.
     */
    orderBy?: Ema_indicatorsOrderByWithRelationInput | Ema_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ema_indicators.
     */
    cursor?: Ema_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ema_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ema_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ema_indicators.
     */
    distinct?: Ema_indicatorsScalarFieldEnum | Ema_indicatorsScalarFieldEnum[]
  }

  /**
   * Ema_indicators findFirstOrThrow
   */
  export type Ema_indicatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Ema_indicators to fetch.
     */
    where?: Ema_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ema_indicators to fetch.
     */
    orderBy?: Ema_indicatorsOrderByWithRelationInput | Ema_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ema_indicators.
     */
    cursor?: Ema_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ema_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ema_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ema_indicators.
     */
    distinct?: Ema_indicatorsScalarFieldEnum | Ema_indicatorsScalarFieldEnum[]
  }

  /**
   * Ema_indicators findMany
   */
  export type Ema_indicatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Ema_indicators to fetch.
     */
    where?: Ema_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ema_indicators to fetch.
     */
    orderBy?: Ema_indicatorsOrderByWithRelationInput | Ema_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ema_indicators.
     */
    cursor?: Ema_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ema_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ema_indicators.
     */
    skip?: number
    distinct?: Ema_indicatorsScalarFieldEnum | Ema_indicatorsScalarFieldEnum[]
  }

  /**
   * Ema_indicators create
   */
  export type Ema_indicatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ema_indicators.
     */
    data: XOR<Ema_indicatorsCreateInput, Ema_indicatorsUncheckedCreateInput>
  }

  /**
   * Ema_indicators createMany
   */
  export type Ema_indicatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ema_indicators.
     */
    data: Ema_indicatorsCreateManyInput | Ema_indicatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ema_indicators update
   */
  export type Ema_indicatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ema_indicators.
     */
    data: XOR<Ema_indicatorsUpdateInput, Ema_indicatorsUncheckedUpdateInput>
    /**
     * Choose, which Ema_indicators to update.
     */
    where: Ema_indicatorsWhereUniqueInput
  }

  /**
   * Ema_indicators updateMany
   */
  export type Ema_indicatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ema_indicators.
     */
    data: XOR<Ema_indicatorsUpdateManyMutationInput, Ema_indicatorsUncheckedUpdateManyInput>
    /**
     * Filter which Ema_indicators to update
     */
    where?: Ema_indicatorsWhereInput
    /**
     * Limit how many Ema_indicators to update.
     */
    limit?: number
  }

  /**
   * Ema_indicators upsert
   */
  export type Ema_indicatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ema_indicators to update in case it exists.
     */
    where: Ema_indicatorsWhereUniqueInput
    /**
     * In case the Ema_indicators found by the `where` argument doesn't exist, create a new Ema_indicators with this data.
     */
    create: XOR<Ema_indicatorsCreateInput, Ema_indicatorsUncheckedCreateInput>
    /**
     * In case the Ema_indicators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Ema_indicatorsUpdateInput, Ema_indicatorsUncheckedUpdateInput>
  }

  /**
   * Ema_indicators delete
   */
  export type Ema_indicatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
    /**
     * Filter which Ema_indicators to delete.
     */
    where: Ema_indicatorsWhereUniqueInput
  }

  /**
   * Ema_indicators deleteMany
   */
  export type Ema_indicatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ema_indicators to delete
     */
    where?: Ema_indicatorsWhereInput
    /**
     * Limit how many Ema_indicators to delete.
     */
    limit?: number
  }

  /**
   * Ema_indicators without action
   */
  export type Ema_indicatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ema_indicators
     */
    select?: Ema_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ema_indicators
     */
    omit?: Ema_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ema_indicatorsInclude<ExtArgs> | null
  }


  /**
   * Model Sma_indicators
   */

  export type AggregateSma_indicators = {
    _count: Sma_indicatorsCountAggregateOutputType | null
    _avg: Sma_indicatorsAvgAggregateOutputType | null
    _sum: Sma_indicatorsSumAggregateOutputType | null
    _min: Sma_indicatorsMinAggregateOutputType | null
    _max: Sma_indicatorsMaxAggregateOutputType | null
  }

  export type Sma_indicatorsAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    sma_5: number | null
    sma_10: number | null
    sma_20: number | null
    sma_50: number | null
    sma_100: number | null
    sma_200: number | null
  }

  export type Sma_indicatorsSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    sma_5: number | null
    sma_10: number | null
    sma_20: number | null
    sma_50: number | null
    sma_100: number | null
    sma_200: number | null
  }

  export type Sma_indicatorsMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    sma_5: number | null
    sma_10: number | null
    sma_20: number | null
    sma_50: number | null
    sma_100: number | null
    sma_200: number | null
  }

  export type Sma_indicatorsMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    sma_5: number | null
    sma_10: number | null
    sma_20: number | null
    sma_50: number | null
    sma_100: number | null
    sma_200: number | null
  }

  export type Sma_indicatorsCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    sma_5: number
    sma_10: number
    sma_20: number
    sma_50: number
    sma_100: number
    sma_200: number
    _all: number
  }


  export type Sma_indicatorsAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    sma_5?: true
    sma_10?: true
    sma_20?: true
    sma_50?: true
    sma_100?: true
    sma_200?: true
  }

  export type Sma_indicatorsSumAggregateInputType = {
    id?: true
    id_ticker?: true
    sma_5?: true
    sma_10?: true
    sma_20?: true
    sma_50?: true
    sma_100?: true
    sma_200?: true
  }

  export type Sma_indicatorsMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    sma_5?: true
    sma_10?: true
    sma_20?: true
    sma_50?: true
    sma_100?: true
    sma_200?: true
  }

  export type Sma_indicatorsMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    sma_5?: true
    sma_10?: true
    sma_20?: true
    sma_50?: true
    sma_100?: true
    sma_200?: true
  }

  export type Sma_indicatorsCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    sma_5?: true
    sma_10?: true
    sma_20?: true
    sma_50?: true
    sma_100?: true
    sma_200?: true
    _all?: true
  }

  export type Sma_indicatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sma_indicators to aggregate.
     */
    where?: Sma_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sma_indicators to fetch.
     */
    orderBy?: Sma_indicatorsOrderByWithRelationInput | Sma_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sma_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sma_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sma_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sma_indicators
    **/
    _count?: true | Sma_indicatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sma_indicatorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sma_indicatorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sma_indicatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sma_indicatorsMaxAggregateInputType
  }

  export type GetSma_indicatorsAggregateType<T extends Sma_indicatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateSma_indicators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSma_indicators[P]>
      : GetScalarType<T[P], AggregateSma_indicators[P]>
  }




  export type Sma_indicatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sma_indicatorsWhereInput
    orderBy?: Sma_indicatorsOrderByWithAggregationInput | Sma_indicatorsOrderByWithAggregationInput[]
    by: Sma_indicatorsScalarFieldEnum[] | Sma_indicatorsScalarFieldEnum
    having?: Sma_indicatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sma_indicatorsCountAggregateInputType | true
    _avg?: Sma_indicatorsAvgAggregateInputType
    _sum?: Sma_indicatorsSumAggregateInputType
    _min?: Sma_indicatorsMinAggregateInputType
    _max?: Sma_indicatorsMaxAggregateInputType
  }

  export type Sma_indicatorsGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    sma_5: number
    sma_10: number
    sma_20: number
    sma_50: number
    sma_100: number
    sma_200: number
    _count: Sma_indicatorsCountAggregateOutputType | null
    _avg: Sma_indicatorsAvgAggregateOutputType | null
    _sum: Sma_indicatorsSumAggregateOutputType | null
    _min: Sma_indicatorsMinAggregateOutputType | null
    _max: Sma_indicatorsMaxAggregateOutputType | null
  }

  type GetSma_indicatorsGroupByPayload<T extends Sma_indicatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sma_indicatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sma_indicatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sma_indicatorsGroupByOutputType[P]>
            : GetScalarType<T[P], Sma_indicatorsGroupByOutputType[P]>
        }
      >
    >


  export type Sma_indicatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    sma_5?: boolean
    sma_10?: boolean
    sma_20?: boolean
    sma_50?: boolean
    sma_100?: boolean
    sma_200?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sma_indicators"]>



  export type Sma_indicatorsSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    sma_5?: boolean
    sma_10?: boolean
    sma_20?: boolean
    sma_50?: boolean
    sma_100?: boolean
    sma_200?: boolean
  }

  export type Sma_indicatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "sma_5" | "sma_10" | "sma_20" | "sma_50" | "sma_100" | "sma_200", ExtArgs["result"]["sma_indicators"]>
  export type Sma_indicatorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Sma_indicatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sma_indicators"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      sma_5: number
      sma_10: number
      sma_20: number
      sma_50: number
      sma_100: number
      sma_200: number
    }, ExtArgs["result"]["sma_indicators"]>
    composites: {}
  }

  type Sma_indicatorsGetPayload<S extends boolean | null | undefined | Sma_indicatorsDefaultArgs> = $Result.GetResult<Prisma.$Sma_indicatorsPayload, S>

  type Sma_indicatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sma_indicatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sma_indicatorsCountAggregateInputType | true
    }

  export interface Sma_indicatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sma_indicators'], meta: { name: 'Sma_indicators' } }
    /**
     * Find zero or one Sma_indicators that matches the filter.
     * @param {Sma_indicatorsFindUniqueArgs} args - Arguments to find a Sma_indicators
     * @example
     * // Get one Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sma_indicatorsFindUniqueArgs>(args: SelectSubset<T, Sma_indicatorsFindUniqueArgs<ExtArgs>>): Prisma__Sma_indicatorsClient<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sma_indicators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sma_indicatorsFindUniqueOrThrowArgs} args - Arguments to find a Sma_indicators
     * @example
     * // Get one Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sma_indicatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, Sma_indicatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sma_indicatorsClient<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sma_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sma_indicatorsFindFirstArgs} args - Arguments to find a Sma_indicators
     * @example
     * // Get one Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sma_indicatorsFindFirstArgs>(args?: SelectSubset<T, Sma_indicatorsFindFirstArgs<ExtArgs>>): Prisma__Sma_indicatorsClient<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sma_indicators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sma_indicatorsFindFirstOrThrowArgs} args - Arguments to find a Sma_indicators
     * @example
     * // Get one Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sma_indicatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, Sma_indicatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Sma_indicatorsClient<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sma_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sma_indicatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.findMany()
     * 
     * // Get first 10 Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sma_indicatorsWithIdOnly = await prisma.sma_indicators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Sma_indicatorsFindManyArgs>(args?: SelectSubset<T, Sma_indicatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sma_indicators.
     * @param {Sma_indicatorsCreateArgs} args - Arguments to create a Sma_indicators.
     * @example
     * // Create one Sma_indicators
     * const Sma_indicators = await prisma.sma_indicators.create({
     *   data: {
     *     // ... data to create a Sma_indicators
     *   }
     * })
     * 
     */
    create<T extends Sma_indicatorsCreateArgs>(args: SelectSubset<T, Sma_indicatorsCreateArgs<ExtArgs>>): Prisma__Sma_indicatorsClient<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sma_indicators.
     * @param {Sma_indicatorsCreateManyArgs} args - Arguments to create many Sma_indicators.
     * @example
     * // Create many Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sma_indicatorsCreateManyArgs>(args?: SelectSubset<T, Sma_indicatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sma_indicators.
     * @param {Sma_indicatorsDeleteArgs} args - Arguments to delete one Sma_indicators.
     * @example
     * // Delete one Sma_indicators
     * const Sma_indicators = await prisma.sma_indicators.delete({
     *   where: {
     *     // ... filter to delete one Sma_indicators
     *   }
     * })
     * 
     */
    delete<T extends Sma_indicatorsDeleteArgs>(args: SelectSubset<T, Sma_indicatorsDeleteArgs<ExtArgs>>): Prisma__Sma_indicatorsClient<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sma_indicators.
     * @param {Sma_indicatorsUpdateArgs} args - Arguments to update one Sma_indicators.
     * @example
     * // Update one Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sma_indicatorsUpdateArgs>(args: SelectSubset<T, Sma_indicatorsUpdateArgs<ExtArgs>>): Prisma__Sma_indicatorsClient<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sma_indicators.
     * @param {Sma_indicatorsDeleteManyArgs} args - Arguments to filter Sma_indicators to delete.
     * @example
     * // Delete a few Sma_indicators
     * const { count } = await prisma.sma_indicators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sma_indicatorsDeleteManyArgs>(args?: SelectSubset<T, Sma_indicatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sma_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sma_indicatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sma_indicatorsUpdateManyArgs>(args: SelectSubset<T, Sma_indicatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sma_indicators.
     * @param {Sma_indicatorsUpsertArgs} args - Arguments to update or create a Sma_indicators.
     * @example
     * // Update or create a Sma_indicators
     * const sma_indicators = await prisma.sma_indicators.upsert({
     *   create: {
     *     // ... data to create a Sma_indicators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sma_indicators we want to update
     *   }
     * })
     */
    upsert<T extends Sma_indicatorsUpsertArgs>(args: SelectSubset<T, Sma_indicatorsUpsertArgs<ExtArgs>>): Prisma__Sma_indicatorsClient<$Result.GetResult<Prisma.$Sma_indicatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sma_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sma_indicatorsCountArgs} args - Arguments to filter Sma_indicators to count.
     * @example
     * // Count the number of Sma_indicators
     * const count = await prisma.sma_indicators.count({
     *   where: {
     *     // ... the filter for the Sma_indicators we want to count
     *   }
     * })
    **/
    count<T extends Sma_indicatorsCountArgs>(
      args?: Subset<T, Sma_indicatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sma_indicatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sma_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sma_indicatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sma_indicatorsAggregateArgs>(args: Subset<T, Sma_indicatorsAggregateArgs>): Prisma.PrismaPromise<GetSma_indicatorsAggregateType<T>>

    /**
     * Group by Sma_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sma_indicatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Sma_indicatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sma_indicatorsGroupByArgs['orderBy'] }
        : { orderBy?: Sma_indicatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Sma_indicatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSma_indicatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sma_indicators model
   */
  readonly fields: Sma_indicatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sma_indicators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sma_indicatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sma_indicators model
   */
  interface Sma_indicatorsFieldRefs {
    readonly id: FieldRef<"Sma_indicators", 'Int'>
    readonly id_ticker: FieldRef<"Sma_indicators", 'Int'>
    readonly date: FieldRef<"Sma_indicators", 'DateTime'>
    readonly sma_5: FieldRef<"Sma_indicators", 'Float'>
    readonly sma_10: FieldRef<"Sma_indicators", 'Float'>
    readonly sma_20: FieldRef<"Sma_indicators", 'Float'>
    readonly sma_50: FieldRef<"Sma_indicators", 'Float'>
    readonly sma_100: FieldRef<"Sma_indicators", 'Float'>
    readonly sma_200: FieldRef<"Sma_indicators", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sma_indicators findUnique
   */
  export type Sma_indicatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Sma_indicators to fetch.
     */
    where: Sma_indicatorsWhereUniqueInput
  }

  /**
   * Sma_indicators findUniqueOrThrow
   */
  export type Sma_indicatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Sma_indicators to fetch.
     */
    where: Sma_indicatorsWhereUniqueInput
  }

  /**
   * Sma_indicators findFirst
   */
  export type Sma_indicatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Sma_indicators to fetch.
     */
    where?: Sma_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sma_indicators to fetch.
     */
    orderBy?: Sma_indicatorsOrderByWithRelationInput | Sma_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sma_indicators.
     */
    cursor?: Sma_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sma_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sma_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sma_indicators.
     */
    distinct?: Sma_indicatorsScalarFieldEnum | Sma_indicatorsScalarFieldEnum[]
  }

  /**
   * Sma_indicators findFirstOrThrow
   */
  export type Sma_indicatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Sma_indicators to fetch.
     */
    where?: Sma_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sma_indicators to fetch.
     */
    orderBy?: Sma_indicatorsOrderByWithRelationInput | Sma_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sma_indicators.
     */
    cursor?: Sma_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sma_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sma_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sma_indicators.
     */
    distinct?: Sma_indicatorsScalarFieldEnum | Sma_indicatorsScalarFieldEnum[]
  }

  /**
   * Sma_indicators findMany
   */
  export type Sma_indicatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Sma_indicators to fetch.
     */
    where?: Sma_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sma_indicators to fetch.
     */
    orderBy?: Sma_indicatorsOrderByWithRelationInput | Sma_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sma_indicators.
     */
    cursor?: Sma_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sma_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sma_indicators.
     */
    skip?: number
    distinct?: Sma_indicatorsScalarFieldEnum | Sma_indicatorsScalarFieldEnum[]
  }

  /**
   * Sma_indicators create
   */
  export type Sma_indicatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sma_indicators.
     */
    data: XOR<Sma_indicatorsCreateInput, Sma_indicatorsUncheckedCreateInput>
  }

  /**
   * Sma_indicators createMany
   */
  export type Sma_indicatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sma_indicators.
     */
    data: Sma_indicatorsCreateManyInput | Sma_indicatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sma_indicators update
   */
  export type Sma_indicatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sma_indicators.
     */
    data: XOR<Sma_indicatorsUpdateInput, Sma_indicatorsUncheckedUpdateInput>
    /**
     * Choose, which Sma_indicators to update.
     */
    where: Sma_indicatorsWhereUniqueInput
  }

  /**
   * Sma_indicators updateMany
   */
  export type Sma_indicatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sma_indicators.
     */
    data: XOR<Sma_indicatorsUpdateManyMutationInput, Sma_indicatorsUncheckedUpdateManyInput>
    /**
     * Filter which Sma_indicators to update
     */
    where?: Sma_indicatorsWhereInput
    /**
     * Limit how many Sma_indicators to update.
     */
    limit?: number
  }

  /**
   * Sma_indicators upsert
   */
  export type Sma_indicatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sma_indicators to update in case it exists.
     */
    where: Sma_indicatorsWhereUniqueInput
    /**
     * In case the Sma_indicators found by the `where` argument doesn't exist, create a new Sma_indicators with this data.
     */
    create: XOR<Sma_indicatorsCreateInput, Sma_indicatorsUncheckedCreateInput>
    /**
     * In case the Sma_indicators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sma_indicatorsUpdateInput, Sma_indicatorsUncheckedUpdateInput>
  }

  /**
   * Sma_indicators delete
   */
  export type Sma_indicatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
    /**
     * Filter which Sma_indicators to delete.
     */
    where: Sma_indicatorsWhereUniqueInput
  }

  /**
   * Sma_indicators deleteMany
   */
  export type Sma_indicatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sma_indicators to delete
     */
    where?: Sma_indicatorsWhereInput
    /**
     * Limit how many Sma_indicators to delete.
     */
    limit?: number
  }

  /**
   * Sma_indicators without action
   */
  export type Sma_indicatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sma_indicators
     */
    select?: Sma_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sma_indicators
     */
    omit?: Sma_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sma_indicatorsInclude<ExtArgs> | null
  }


  /**
   * Model Rsi_indicators
   */

  export type AggregateRsi_indicators = {
    _count: Rsi_indicatorsCountAggregateOutputType | null
    _avg: Rsi_indicatorsAvgAggregateOutputType | null
    _sum: Rsi_indicatorsSumAggregateOutputType | null
    _min: Rsi_indicatorsMinAggregateOutputType | null
    _max: Rsi_indicatorsMaxAggregateOutputType | null
  }

  export type Rsi_indicatorsAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    rsi_5: number | null
    rsi_10: number | null
    rsi_20: number | null
    rsi_50: number | null
    rsi_100: number | null
    rsi_200: number | null
  }

  export type Rsi_indicatorsSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    rsi_5: number | null
    rsi_10: number | null
    rsi_20: number | null
    rsi_50: number | null
    rsi_100: number | null
    rsi_200: number | null
  }

  export type Rsi_indicatorsMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    rsi_5: number | null
    rsi_10: number | null
    rsi_20: number | null
    rsi_50: number | null
    rsi_100: number | null
    rsi_200: number | null
  }

  export type Rsi_indicatorsMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    rsi_5: number | null
    rsi_10: number | null
    rsi_20: number | null
    rsi_50: number | null
    rsi_100: number | null
    rsi_200: number | null
  }

  export type Rsi_indicatorsCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    rsi_5: number
    rsi_10: number
    rsi_20: number
    rsi_50: number
    rsi_100: number
    rsi_200: number
    _all: number
  }


  export type Rsi_indicatorsAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    rsi_5?: true
    rsi_10?: true
    rsi_20?: true
    rsi_50?: true
    rsi_100?: true
    rsi_200?: true
  }

  export type Rsi_indicatorsSumAggregateInputType = {
    id?: true
    id_ticker?: true
    rsi_5?: true
    rsi_10?: true
    rsi_20?: true
    rsi_50?: true
    rsi_100?: true
    rsi_200?: true
  }

  export type Rsi_indicatorsMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    rsi_5?: true
    rsi_10?: true
    rsi_20?: true
    rsi_50?: true
    rsi_100?: true
    rsi_200?: true
  }

  export type Rsi_indicatorsMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    rsi_5?: true
    rsi_10?: true
    rsi_20?: true
    rsi_50?: true
    rsi_100?: true
    rsi_200?: true
  }

  export type Rsi_indicatorsCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    rsi_5?: true
    rsi_10?: true
    rsi_20?: true
    rsi_50?: true
    rsi_100?: true
    rsi_200?: true
    _all?: true
  }

  export type Rsi_indicatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rsi_indicators to aggregate.
     */
    where?: Rsi_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rsi_indicators to fetch.
     */
    orderBy?: Rsi_indicatorsOrderByWithRelationInput | Rsi_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Rsi_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rsi_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rsi_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rsi_indicators
    **/
    _count?: true | Rsi_indicatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rsi_indicatorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rsi_indicatorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rsi_indicatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rsi_indicatorsMaxAggregateInputType
  }

  export type GetRsi_indicatorsAggregateType<T extends Rsi_indicatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateRsi_indicators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRsi_indicators[P]>
      : GetScalarType<T[P], AggregateRsi_indicators[P]>
  }




  export type Rsi_indicatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rsi_indicatorsWhereInput
    orderBy?: Rsi_indicatorsOrderByWithAggregationInput | Rsi_indicatorsOrderByWithAggregationInput[]
    by: Rsi_indicatorsScalarFieldEnum[] | Rsi_indicatorsScalarFieldEnum
    having?: Rsi_indicatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rsi_indicatorsCountAggregateInputType | true
    _avg?: Rsi_indicatorsAvgAggregateInputType
    _sum?: Rsi_indicatorsSumAggregateInputType
    _min?: Rsi_indicatorsMinAggregateInputType
    _max?: Rsi_indicatorsMaxAggregateInputType
  }

  export type Rsi_indicatorsGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    rsi_5: number
    rsi_10: number
    rsi_20: number
    rsi_50: number
    rsi_100: number
    rsi_200: number
    _count: Rsi_indicatorsCountAggregateOutputType | null
    _avg: Rsi_indicatorsAvgAggregateOutputType | null
    _sum: Rsi_indicatorsSumAggregateOutputType | null
    _min: Rsi_indicatorsMinAggregateOutputType | null
    _max: Rsi_indicatorsMaxAggregateOutputType | null
  }

  type GetRsi_indicatorsGroupByPayload<T extends Rsi_indicatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rsi_indicatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rsi_indicatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rsi_indicatorsGroupByOutputType[P]>
            : GetScalarType<T[P], Rsi_indicatorsGroupByOutputType[P]>
        }
      >
    >


  export type Rsi_indicatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    rsi_5?: boolean
    rsi_10?: boolean
    rsi_20?: boolean
    rsi_50?: boolean
    rsi_100?: boolean
    rsi_200?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rsi_indicators"]>



  export type Rsi_indicatorsSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    rsi_5?: boolean
    rsi_10?: boolean
    rsi_20?: boolean
    rsi_50?: boolean
    rsi_100?: boolean
    rsi_200?: boolean
  }

  export type Rsi_indicatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "rsi_5" | "rsi_10" | "rsi_20" | "rsi_50" | "rsi_100" | "rsi_200", ExtArgs["result"]["rsi_indicators"]>
  export type Rsi_indicatorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Rsi_indicatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rsi_indicators"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      rsi_5: number
      rsi_10: number
      rsi_20: number
      rsi_50: number
      rsi_100: number
      rsi_200: number
    }, ExtArgs["result"]["rsi_indicators"]>
    composites: {}
  }

  type Rsi_indicatorsGetPayload<S extends boolean | null | undefined | Rsi_indicatorsDefaultArgs> = $Result.GetResult<Prisma.$Rsi_indicatorsPayload, S>

  type Rsi_indicatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Rsi_indicatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rsi_indicatorsCountAggregateInputType | true
    }

  export interface Rsi_indicatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rsi_indicators'], meta: { name: 'Rsi_indicators' } }
    /**
     * Find zero or one Rsi_indicators that matches the filter.
     * @param {Rsi_indicatorsFindUniqueArgs} args - Arguments to find a Rsi_indicators
     * @example
     * // Get one Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Rsi_indicatorsFindUniqueArgs>(args: SelectSubset<T, Rsi_indicatorsFindUniqueArgs<ExtArgs>>): Prisma__Rsi_indicatorsClient<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rsi_indicators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Rsi_indicatorsFindUniqueOrThrowArgs} args - Arguments to find a Rsi_indicators
     * @example
     * // Get one Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Rsi_indicatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, Rsi_indicatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Rsi_indicatorsClient<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rsi_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rsi_indicatorsFindFirstArgs} args - Arguments to find a Rsi_indicators
     * @example
     * // Get one Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Rsi_indicatorsFindFirstArgs>(args?: SelectSubset<T, Rsi_indicatorsFindFirstArgs<ExtArgs>>): Prisma__Rsi_indicatorsClient<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rsi_indicators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rsi_indicatorsFindFirstOrThrowArgs} args - Arguments to find a Rsi_indicators
     * @example
     * // Get one Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Rsi_indicatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, Rsi_indicatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Rsi_indicatorsClient<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rsi_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rsi_indicatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.findMany()
     * 
     * // Get first 10 Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rsi_indicatorsWithIdOnly = await prisma.rsi_indicators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Rsi_indicatorsFindManyArgs>(args?: SelectSubset<T, Rsi_indicatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rsi_indicators.
     * @param {Rsi_indicatorsCreateArgs} args - Arguments to create a Rsi_indicators.
     * @example
     * // Create one Rsi_indicators
     * const Rsi_indicators = await prisma.rsi_indicators.create({
     *   data: {
     *     // ... data to create a Rsi_indicators
     *   }
     * })
     * 
     */
    create<T extends Rsi_indicatorsCreateArgs>(args: SelectSubset<T, Rsi_indicatorsCreateArgs<ExtArgs>>): Prisma__Rsi_indicatorsClient<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rsi_indicators.
     * @param {Rsi_indicatorsCreateManyArgs} args - Arguments to create many Rsi_indicators.
     * @example
     * // Create many Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Rsi_indicatorsCreateManyArgs>(args?: SelectSubset<T, Rsi_indicatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rsi_indicators.
     * @param {Rsi_indicatorsDeleteArgs} args - Arguments to delete one Rsi_indicators.
     * @example
     * // Delete one Rsi_indicators
     * const Rsi_indicators = await prisma.rsi_indicators.delete({
     *   where: {
     *     // ... filter to delete one Rsi_indicators
     *   }
     * })
     * 
     */
    delete<T extends Rsi_indicatorsDeleteArgs>(args: SelectSubset<T, Rsi_indicatorsDeleteArgs<ExtArgs>>): Prisma__Rsi_indicatorsClient<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rsi_indicators.
     * @param {Rsi_indicatorsUpdateArgs} args - Arguments to update one Rsi_indicators.
     * @example
     * // Update one Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Rsi_indicatorsUpdateArgs>(args: SelectSubset<T, Rsi_indicatorsUpdateArgs<ExtArgs>>): Prisma__Rsi_indicatorsClient<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rsi_indicators.
     * @param {Rsi_indicatorsDeleteManyArgs} args - Arguments to filter Rsi_indicators to delete.
     * @example
     * // Delete a few Rsi_indicators
     * const { count } = await prisma.rsi_indicators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Rsi_indicatorsDeleteManyArgs>(args?: SelectSubset<T, Rsi_indicatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rsi_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rsi_indicatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Rsi_indicatorsUpdateManyArgs>(args: SelectSubset<T, Rsi_indicatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rsi_indicators.
     * @param {Rsi_indicatorsUpsertArgs} args - Arguments to update or create a Rsi_indicators.
     * @example
     * // Update or create a Rsi_indicators
     * const rsi_indicators = await prisma.rsi_indicators.upsert({
     *   create: {
     *     // ... data to create a Rsi_indicators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rsi_indicators we want to update
     *   }
     * })
     */
    upsert<T extends Rsi_indicatorsUpsertArgs>(args: SelectSubset<T, Rsi_indicatorsUpsertArgs<ExtArgs>>): Prisma__Rsi_indicatorsClient<$Result.GetResult<Prisma.$Rsi_indicatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rsi_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rsi_indicatorsCountArgs} args - Arguments to filter Rsi_indicators to count.
     * @example
     * // Count the number of Rsi_indicators
     * const count = await prisma.rsi_indicators.count({
     *   where: {
     *     // ... the filter for the Rsi_indicators we want to count
     *   }
     * })
    **/
    count<T extends Rsi_indicatorsCountArgs>(
      args?: Subset<T, Rsi_indicatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rsi_indicatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rsi_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rsi_indicatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rsi_indicatorsAggregateArgs>(args: Subset<T, Rsi_indicatorsAggregateArgs>): Prisma.PrismaPromise<GetRsi_indicatorsAggregateType<T>>

    /**
     * Group by Rsi_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rsi_indicatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Rsi_indicatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Rsi_indicatorsGroupByArgs['orderBy'] }
        : { orderBy?: Rsi_indicatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Rsi_indicatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRsi_indicatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rsi_indicators model
   */
  readonly fields: Rsi_indicatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rsi_indicators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Rsi_indicatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rsi_indicators model
   */
  interface Rsi_indicatorsFieldRefs {
    readonly id: FieldRef<"Rsi_indicators", 'Int'>
    readonly id_ticker: FieldRef<"Rsi_indicators", 'Int'>
    readonly date: FieldRef<"Rsi_indicators", 'DateTime'>
    readonly rsi_5: FieldRef<"Rsi_indicators", 'Float'>
    readonly rsi_10: FieldRef<"Rsi_indicators", 'Float'>
    readonly rsi_20: FieldRef<"Rsi_indicators", 'Float'>
    readonly rsi_50: FieldRef<"Rsi_indicators", 'Float'>
    readonly rsi_100: FieldRef<"Rsi_indicators", 'Float'>
    readonly rsi_200: FieldRef<"Rsi_indicators", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Rsi_indicators findUnique
   */
  export type Rsi_indicatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Rsi_indicators to fetch.
     */
    where: Rsi_indicatorsWhereUniqueInput
  }

  /**
   * Rsi_indicators findUniqueOrThrow
   */
  export type Rsi_indicatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Rsi_indicators to fetch.
     */
    where: Rsi_indicatorsWhereUniqueInput
  }

  /**
   * Rsi_indicators findFirst
   */
  export type Rsi_indicatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Rsi_indicators to fetch.
     */
    where?: Rsi_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rsi_indicators to fetch.
     */
    orderBy?: Rsi_indicatorsOrderByWithRelationInput | Rsi_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rsi_indicators.
     */
    cursor?: Rsi_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rsi_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rsi_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rsi_indicators.
     */
    distinct?: Rsi_indicatorsScalarFieldEnum | Rsi_indicatorsScalarFieldEnum[]
  }

  /**
   * Rsi_indicators findFirstOrThrow
   */
  export type Rsi_indicatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Rsi_indicators to fetch.
     */
    where?: Rsi_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rsi_indicators to fetch.
     */
    orderBy?: Rsi_indicatorsOrderByWithRelationInput | Rsi_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rsi_indicators.
     */
    cursor?: Rsi_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rsi_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rsi_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rsi_indicators.
     */
    distinct?: Rsi_indicatorsScalarFieldEnum | Rsi_indicatorsScalarFieldEnum[]
  }

  /**
   * Rsi_indicators findMany
   */
  export type Rsi_indicatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Rsi_indicators to fetch.
     */
    where?: Rsi_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rsi_indicators to fetch.
     */
    orderBy?: Rsi_indicatorsOrderByWithRelationInput | Rsi_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rsi_indicators.
     */
    cursor?: Rsi_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rsi_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rsi_indicators.
     */
    skip?: number
    distinct?: Rsi_indicatorsScalarFieldEnum | Rsi_indicatorsScalarFieldEnum[]
  }

  /**
   * Rsi_indicators create
   */
  export type Rsi_indicatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rsi_indicators.
     */
    data: XOR<Rsi_indicatorsCreateInput, Rsi_indicatorsUncheckedCreateInput>
  }

  /**
   * Rsi_indicators createMany
   */
  export type Rsi_indicatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rsi_indicators.
     */
    data: Rsi_indicatorsCreateManyInput | Rsi_indicatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rsi_indicators update
   */
  export type Rsi_indicatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rsi_indicators.
     */
    data: XOR<Rsi_indicatorsUpdateInput, Rsi_indicatorsUncheckedUpdateInput>
    /**
     * Choose, which Rsi_indicators to update.
     */
    where: Rsi_indicatorsWhereUniqueInput
  }

  /**
   * Rsi_indicators updateMany
   */
  export type Rsi_indicatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rsi_indicators.
     */
    data: XOR<Rsi_indicatorsUpdateManyMutationInput, Rsi_indicatorsUncheckedUpdateManyInput>
    /**
     * Filter which Rsi_indicators to update
     */
    where?: Rsi_indicatorsWhereInput
    /**
     * Limit how many Rsi_indicators to update.
     */
    limit?: number
  }

  /**
   * Rsi_indicators upsert
   */
  export type Rsi_indicatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rsi_indicators to update in case it exists.
     */
    where: Rsi_indicatorsWhereUniqueInput
    /**
     * In case the Rsi_indicators found by the `where` argument doesn't exist, create a new Rsi_indicators with this data.
     */
    create: XOR<Rsi_indicatorsCreateInput, Rsi_indicatorsUncheckedCreateInput>
    /**
     * In case the Rsi_indicators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Rsi_indicatorsUpdateInput, Rsi_indicatorsUncheckedUpdateInput>
  }

  /**
   * Rsi_indicators delete
   */
  export type Rsi_indicatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
    /**
     * Filter which Rsi_indicators to delete.
     */
    where: Rsi_indicatorsWhereUniqueInput
  }

  /**
   * Rsi_indicators deleteMany
   */
  export type Rsi_indicatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rsi_indicators to delete
     */
    where?: Rsi_indicatorsWhereInput
    /**
     * Limit how many Rsi_indicators to delete.
     */
    limit?: number
  }

  /**
   * Rsi_indicators without action
   */
  export type Rsi_indicatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rsi_indicators
     */
    select?: Rsi_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rsi_indicators
     */
    omit?: Rsi_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rsi_indicatorsInclude<ExtArgs> | null
  }


  /**
   * Model Macd_indicators
   */

  export type AggregateMacd_indicators = {
    _count: Macd_indicatorsCountAggregateOutputType | null
    _avg: Macd_indicatorsAvgAggregateOutputType | null
    _sum: Macd_indicatorsSumAggregateOutputType | null
    _min: Macd_indicatorsMinAggregateOutputType | null
    _max: Macd_indicatorsMaxAggregateOutputType | null
  }

  export type Macd_indicatorsAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    macd_5: number | null
    macd_10: number | null
    macd_20: number | null
    macd_50: number | null
    macd_100: number | null
    macd_200: number | null
  }

  export type Macd_indicatorsSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    macd_5: number | null
    macd_10: number | null
    macd_20: number | null
    macd_50: number | null
    macd_100: number | null
    macd_200: number | null
  }

  export type Macd_indicatorsMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    macd_5: number | null
    macd_10: number | null
    macd_20: number | null
    macd_50: number | null
    macd_100: number | null
    macd_200: number | null
  }

  export type Macd_indicatorsMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    macd_5: number | null
    macd_10: number | null
    macd_20: number | null
    macd_50: number | null
    macd_100: number | null
    macd_200: number | null
  }

  export type Macd_indicatorsCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    macd_5: number
    macd_10: number
    macd_20: number
    macd_50: number
    macd_100: number
    macd_200: number
    _all: number
  }


  export type Macd_indicatorsAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    macd_5?: true
    macd_10?: true
    macd_20?: true
    macd_50?: true
    macd_100?: true
    macd_200?: true
  }

  export type Macd_indicatorsSumAggregateInputType = {
    id?: true
    id_ticker?: true
    macd_5?: true
    macd_10?: true
    macd_20?: true
    macd_50?: true
    macd_100?: true
    macd_200?: true
  }

  export type Macd_indicatorsMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    macd_5?: true
    macd_10?: true
    macd_20?: true
    macd_50?: true
    macd_100?: true
    macd_200?: true
  }

  export type Macd_indicatorsMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    macd_5?: true
    macd_10?: true
    macd_20?: true
    macd_50?: true
    macd_100?: true
    macd_200?: true
  }

  export type Macd_indicatorsCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    macd_5?: true
    macd_10?: true
    macd_20?: true
    macd_50?: true
    macd_100?: true
    macd_200?: true
    _all?: true
  }

  export type Macd_indicatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Macd_indicators to aggregate.
     */
    where?: Macd_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Macd_indicators to fetch.
     */
    orderBy?: Macd_indicatorsOrderByWithRelationInput | Macd_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Macd_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Macd_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Macd_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Macd_indicators
    **/
    _count?: true | Macd_indicatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Macd_indicatorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Macd_indicatorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Macd_indicatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Macd_indicatorsMaxAggregateInputType
  }

  export type GetMacd_indicatorsAggregateType<T extends Macd_indicatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateMacd_indicators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMacd_indicators[P]>
      : GetScalarType<T[P], AggregateMacd_indicators[P]>
  }




  export type Macd_indicatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Macd_indicatorsWhereInput
    orderBy?: Macd_indicatorsOrderByWithAggregationInput | Macd_indicatorsOrderByWithAggregationInput[]
    by: Macd_indicatorsScalarFieldEnum[] | Macd_indicatorsScalarFieldEnum
    having?: Macd_indicatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Macd_indicatorsCountAggregateInputType | true
    _avg?: Macd_indicatorsAvgAggregateInputType
    _sum?: Macd_indicatorsSumAggregateInputType
    _min?: Macd_indicatorsMinAggregateInputType
    _max?: Macd_indicatorsMaxAggregateInputType
  }

  export type Macd_indicatorsGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    macd_5: number
    macd_10: number
    macd_20: number
    macd_50: number
    macd_100: number
    macd_200: number
    _count: Macd_indicatorsCountAggregateOutputType | null
    _avg: Macd_indicatorsAvgAggregateOutputType | null
    _sum: Macd_indicatorsSumAggregateOutputType | null
    _min: Macd_indicatorsMinAggregateOutputType | null
    _max: Macd_indicatorsMaxAggregateOutputType | null
  }

  type GetMacd_indicatorsGroupByPayload<T extends Macd_indicatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Macd_indicatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Macd_indicatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Macd_indicatorsGroupByOutputType[P]>
            : GetScalarType<T[P], Macd_indicatorsGroupByOutputType[P]>
        }
      >
    >


  export type Macd_indicatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    macd_5?: boolean
    macd_10?: boolean
    macd_20?: boolean
    macd_50?: boolean
    macd_100?: boolean
    macd_200?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["macd_indicators"]>



  export type Macd_indicatorsSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    macd_5?: boolean
    macd_10?: boolean
    macd_20?: boolean
    macd_50?: boolean
    macd_100?: boolean
    macd_200?: boolean
  }

  export type Macd_indicatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "macd_5" | "macd_10" | "macd_20" | "macd_50" | "macd_100" | "macd_200", ExtArgs["result"]["macd_indicators"]>
  export type Macd_indicatorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Macd_indicatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Macd_indicators"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      macd_5: number
      macd_10: number
      macd_20: number
      macd_50: number
      macd_100: number
      macd_200: number
    }, ExtArgs["result"]["macd_indicators"]>
    composites: {}
  }

  type Macd_indicatorsGetPayload<S extends boolean | null | undefined | Macd_indicatorsDefaultArgs> = $Result.GetResult<Prisma.$Macd_indicatorsPayload, S>

  type Macd_indicatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Macd_indicatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Macd_indicatorsCountAggregateInputType | true
    }

  export interface Macd_indicatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Macd_indicators'], meta: { name: 'Macd_indicators' } }
    /**
     * Find zero or one Macd_indicators that matches the filter.
     * @param {Macd_indicatorsFindUniqueArgs} args - Arguments to find a Macd_indicators
     * @example
     * // Get one Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Macd_indicatorsFindUniqueArgs>(args: SelectSubset<T, Macd_indicatorsFindUniqueArgs<ExtArgs>>): Prisma__Macd_indicatorsClient<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Macd_indicators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Macd_indicatorsFindUniqueOrThrowArgs} args - Arguments to find a Macd_indicators
     * @example
     * // Get one Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Macd_indicatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, Macd_indicatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Macd_indicatorsClient<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Macd_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Macd_indicatorsFindFirstArgs} args - Arguments to find a Macd_indicators
     * @example
     * // Get one Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Macd_indicatorsFindFirstArgs>(args?: SelectSubset<T, Macd_indicatorsFindFirstArgs<ExtArgs>>): Prisma__Macd_indicatorsClient<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Macd_indicators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Macd_indicatorsFindFirstOrThrowArgs} args - Arguments to find a Macd_indicators
     * @example
     * // Get one Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Macd_indicatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, Macd_indicatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Macd_indicatorsClient<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Macd_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Macd_indicatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.findMany()
     * 
     * // Get first 10 Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const macd_indicatorsWithIdOnly = await prisma.macd_indicators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Macd_indicatorsFindManyArgs>(args?: SelectSubset<T, Macd_indicatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Macd_indicators.
     * @param {Macd_indicatorsCreateArgs} args - Arguments to create a Macd_indicators.
     * @example
     * // Create one Macd_indicators
     * const Macd_indicators = await prisma.macd_indicators.create({
     *   data: {
     *     // ... data to create a Macd_indicators
     *   }
     * })
     * 
     */
    create<T extends Macd_indicatorsCreateArgs>(args: SelectSubset<T, Macd_indicatorsCreateArgs<ExtArgs>>): Prisma__Macd_indicatorsClient<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Macd_indicators.
     * @param {Macd_indicatorsCreateManyArgs} args - Arguments to create many Macd_indicators.
     * @example
     * // Create many Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Macd_indicatorsCreateManyArgs>(args?: SelectSubset<T, Macd_indicatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Macd_indicators.
     * @param {Macd_indicatorsDeleteArgs} args - Arguments to delete one Macd_indicators.
     * @example
     * // Delete one Macd_indicators
     * const Macd_indicators = await prisma.macd_indicators.delete({
     *   where: {
     *     // ... filter to delete one Macd_indicators
     *   }
     * })
     * 
     */
    delete<T extends Macd_indicatorsDeleteArgs>(args: SelectSubset<T, Macd_indicatorsDeleteArgs<ExtArgs>>): Prisma__Macd_indicatorsClient<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Macd_indicators.
     * @param {Macd_indicatorsUpdateArgs} args - Arguments to update one Macd_indicators.
     * @example
     * // Update one Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Macd_indicatorsUpdateArgs>(args: SelectSubset<T, Macd_indicatorsUpdateArgs<ExtArgs>>): Prisma__Macd_indicatorsClient<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Macd_indicators.
     * @param {Macd_indicatorsDeleteManyArgs} args - Arguments to filter Macd_indicators to delete.
     * @example
     * // Delete a few Macd_indicators
     * const { count } = await prisma.macd_indicators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Macd_indicatorsDeleteManyArgs>(args?: SelectSubset<T, Macd_indicatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Macd_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Macd_indicatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Macd_indicatorsUpdateManyArgs>(args: SelectSubset<T, Macd_indicatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Macd_indicators.
     * @param {Macd_indicatorsUpsertArgs} args - Arguments to update or create a Macd_indicators.
     * @example
     * // Update or create a Macd_indicators
     * const macd_indicators = await prisma.macd_indicators.upsert({
     *   create: {
     *     // ... data to create a Macd_indicators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Macd_indicators we want to update
     *   }
     * })
     */
    upsert<T extends Macd_indicatorsUpsertArgs>(args: SelectSubset<T, Macd_indicatorsUpsertArgs<ExtArgs>>): Prisma__Macd_indicatorsClient<$Result.GetResult<Prisma.$Macd_indicatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Macd_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Macd_indicatorsCountArgs} args - Arguments to filter Macd_indicators to count.
     * @example
     * // Count the number of Macd_indicators
     * const count = await prisma.macd_indicators.count({
     *   where: {
     *     // ... the filter for the Macd_indicators we want to count
     *   }
     * })
    **/
    count<T extends Macd_indicatorsCountArgs>(
      args?: Subset<T, Macd_indicatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Macd_indicatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Macd_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Macd_indicatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Macd_indicatorsAggregateArgs>(args: Subset<T, Macd_indicatorsAggregateArgs>): Prisma.PrismaPromise<GetMacd_indicatorsAggregateType<T>>

    /**
     * Group by Macd_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Macd_indicatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Macd_indicatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Macd_indicatorsGroupByArgs['orderBy'] }
        : { orderBy?: Macd_indicatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Macd_indicatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMacd_indicatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Macd_indicators model
   */
  readonly fields: Macd_indicatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Macd_indicators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Macd_indicatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Macd_indicators model
   */
  interface Macd_indicatorsFieldRefs {
    readonly id: FieldRef<"Macd_indicators", 'Int'>
    readonly id_ticker: FieldRef<"Macd_indicators", 'Int'>
    readonly date: FieldRef<"Macd_indicators", 'DateTime'>
    readonly macd_5: FieldRef<"Macd_indicators", 'Float'>
    readonly macd_10: FieldRef<"Macd_indicators", 'Float'>
    readonly macd_20: FieldRef<"Macd_indicators", 'Float'>
    readonly macd_50: FieldRef<"Macd_indicators", 'Float'>
    readonly macd_100: FieldRef<"Macd_indicators", 'Float'>
    readonly macd_200: FieldRef<"Macd_indicators", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Macd_indicators findUnique
   */
  export type Macd_indicatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Macd_indicators to fetch.
     */
    where: Macd_indicatorsWhereUniqueInput
  }

  /**
   * Macd_indicators findUniqueOrThrow
   */
  export type Macd_indicatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Macd_indicators to fetch.
     */
    where: Macd_indicatorsWhereUniqueInput
  }

  /**
   * Macd_indicators findFirst
   */
  export type Macd_indicatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Macd_indicators to fetch.
     */
    where?: Macd_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Macd_indicators to fetch.
     */
    orderBy?: Macd_indicatorsOrderByWithRelationInput | Macd_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Macd_indicators.
     */
    cursor?: Macd_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Macd_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Macd_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Macd_indicators.
     */
    distinct?: Macd_indicatorsScalarFieldEnum | Macd_indicatorsScalarFieldEnum[]
  }

  /**
   * Macd_indicators findFirstOrThrow
   */
  export type Macd_indicatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Macd_indicators to fetch.
     */
    where?: Macd_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Macd_indicators to fetch.
     */
    orderBy?: Macd_indicatorsOrderByWithRelationInput | Macd_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Macd_indicators.
     */
    cursor?: Macd_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Macd_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Macd_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Macd_indicators.
     */
    distinct?: Macd_indicatorsScalarFieldEnum | Macd_indicatorsScalarFieldEnum[]
  }

  /**
   * Macd_indicators findMany
   */
  export type Macd_indicatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Macd_indicators to fetch.
     */
    where?: Macd_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Macd_indicators to fetch.
     */
    orderBy?: Macd_indicatorsOrderByWithRelationInput | Macd_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Macd_indicators.
     */
    cursor?: Macd_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Macd_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Macd_indicators.
     */
    skip?: number
    distinct?: Macd_indicatorsScalarFieldEnum | Macd_indicatorsScalarFieldEnum[]
  }

  /**
   * Macd_indicators create
   */
  export type Macd_indicatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Macd_indicators.
     */
    data: XOR<Macd_indicatorsCreateInput, Macd_indicatorsUncheckedCreateInput>
  }

  /**
   * Macd_indicators createMany
   */
  export type Macd_indicatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Macd_indicators.
     */
    data: Macd_indicatorsCreateManyInput | Macd_indicatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Macd_indicators update
   */
  export type Macd_indicatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Macd_indicators.
     */
    data: XOR<Macd_indicatorsUpdateInput, Macd_indicatorsUncheckedUpdateInput>
    /**
     * Choose, which Macd_indicators to update.
     */
    where: Macd_indicatorsWhereUniqueInput
  }

  /**
   * Macd_indicators updateMany
   */
  export type Macd_indicatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Macd_indicators.
     */
    data: XOR<Macd_indicatorsUpdateManyMutationInput, Macd_indicatorsUncheckedUpdateManyInput>
    /**
     * Filter which Macd_indicators to update
     */
    where?: Macd_indicatorsWhereInput
    /**
     * Limit how many Macd_indicators to update.
     */
    limit?: number
  }

  /**
   * Macd_indicators upsert
   */
  export type Macd_indicatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Macd_indicators to update in case it exists.
     */
    where: Macd_indicatorsWhereUniqueInput
    /**
     * In case the Macd_indicators found by the `where` argument doesn't exist, create a new Macd_indicators with this data.
     */
    create: XOR<Macd_indicatorsCreateInput, Macd_indicatorsUncheckedCreateInput>
    /**
     * In case the Macd_indicators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Macd_indicatorsUpdateInput, Macd_indicatorsUncheckedUpdateInput>
  }

  /**
   * Macd_indicators delete
   */
  export type Macd_indicatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
    /**
     * Filter which Macd_indicators to delete.
     */
    where: Macd_indicatorsWhereUniqueInput
  }

  /**
   * Macd_indicators deleteMany
   */
  export type Macd_indicatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Macd_indicators to delete
     */
    where?: Macd_indicatorsWhereInput
    /**
     * Limit how many Macd_indicators to delete.
     */
    limit?: number
  }

  /**
   * Macd_indicators without action
   */
  export type Macd_indicatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Macd_indicators
     */
    select?: Macd_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Macd_indicators
     */
    omit?: Macd_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Macd_indicatorsInclude<ExtArgs> | null
  }


  /**
   * Model Bollinger_indicators
   */

  export type AggregateBollinger_indicators = {
    _count: Bollinger_indicatorsCountAggregateOutputType | null
    _avg: Bollinger_indicatorsAvgAggregateOutputType | null
    _sum: Bollinger_indicatorsSumAggregateOutputType | null
    _min: Bollinger_indicatorsMinAggregateOutputType | null
    _max: Bollinger_indicatorsMaxAggregateOutputType | null
  }

  export type Bollinger_indicatorsAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    bollinger_5: number | null
    bollinger_10: number | null
    bollinger_20: number | null
    bollinger_50: number | null
    bollinger_100: number | null
    bollinger_200: number | null
  }

  export type Bollinger_indicatorsSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    bollinger_5: number | null
    bollinger_10: number | null
    bollinger_20: number | null
    bollinger_50: number | null
    bollinger_100: number | null
    bollinger_200: number | null
  }

  export type Bollinger_indicatorsMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    bollinger_5: number | null
    bollinger_10: number | null
    bollinger_20: number | null
    bollinger_50: number | null
    bollinger_100: number | null
    bollinger_200: number | null
  }

  export type Bollinger_indicatorsMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    bollinger_5: number | null
    bollinger_10: number | null
    bollinger_20: number | null
    bollinger_50: number | null
    bollinger_100: number | null
    bollinger_200: number | null
  }

  export type Bollinger_indicatorsCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    bollinger_5: number
    bollinger_10: number
    bollinger_20: number
    bollinger_50: number
    bollinger_100: number
    bollinger_200: number
    _all: number
  }


  export type Bollinger_indicatorsAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    bollinger_5?: true
    bollinger_10?: true
    bollinger_20?: true
    bollinger_50?: true
    bollinger_100?: true
    bollinger_200?: true
  }

  export type Bollinger_indicatorsSumAggregateInputType = {
    id?: true
    id_ticker?: true
    bollinger_5?: true
    bollinger_10?: true
    bollinger_20?: true
    bollinger_50?: true
    bollinger_100?: true
    bollinger_200?: true
  }

  export type Bollinger_indicatorsMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    bollinger_5?: true
    bollinger_10?: true
    bollinger_20?: true
    bollinger_50?: true
    bollinger_100?: true
    bollinger_200?: true
  }

  export type Bollinger_indicatorsMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    bollinger_5?: true
    bollinger_10?: true
    bollinger_20?: true
    bollinger_50?: true
    bollinger_100?: true
    bollinger_200?: true
  }

  export type Bollinger_indicatorsCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    bollinger_5?: true
    bollinger_10?: true
    bollinger_20?: true
    bollinger_50?: true
    bollinger_100?: true
    bollinger_200?: true
    _all?: true
  }

  export type Bollinger_indicatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bollinger_indicators to aggregate.
     */
    where?: Bollinger_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bollinger_indicators to fetch.
     */
    orderBy?: Bollinger_indicatorsOrderByWithRelationInput | Bollinger_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Bollinger_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bollinger_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bollinger_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bollinger_indicators
    **/
    _count?: true | Bollinger_indicatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bollinger_indicatorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bollinger_indicatorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bollinger_indicatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bollinger_indicatorsMaxAggregateInputType
  }

  export type GetBollinger_indicatorsAggregateType<T extends Bollinger_indicatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateBollinger_indicators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBollinger_indicators[P]>
      : GetScalarType<T[P], AggregateBollinger_indicators[P]>
  }




  export type Bollinger_indicatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bollinger_indicatorsWhereInput
    orderBy?: Bollinger_indicatorsOrderByWithAggregationInput | Bollinger_indicatorsOrderByWithAggregationInput[]
    by: Bollinger_indicatorsScalarFieldEnum[] | Bollinger_indicatorsScalarFieldEnum
    having?: Bollinger_indicatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bollinger_indicatorsCountAggregateInputType | true
    _avg?: Bollinger_indicatorsAvgAggregateInputType
    _sum?: Bollinger_indicatorsSumAggregateInputType
    _min?: Bollinger_indicatorsMinAggregateInputType
    _max?: Bollinger_indicatorsMaxAggregateInputType
  }

  export type Bollinger_indicatorsGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    bollinger_5: number
    bollinger_10: number
    bollinger_20: number
    bollinger_50: number
    bollinger_100: number
    bollinger_200: number
    _count: Bollinger_indicatorsCountAggregateOutputType | null
    _avg: Bollinger_indicatorsAvgAggregateOutputType | null
    _sum: Bollinger_indicatorsSumAggregateOutputType | null
    _min: Bollinger_indicatorsMinAggregateOutputType | null
    _max: Bollinger_indicatorsMaxAggregateOutputType | null
  }

  type GetBollinger_indicatorsGroupByPayload<T extends Bollinger_indicatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bollinger_indicatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bollinger_indicatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bollinger_indicatorsGroupByOutputType[P]>
            : GetScalarType<T[P], Bollinger_indicatorsGroupByOutputType[P]>
        }
      >
    >


  export type Bollinger_indicatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    bollinger_5?: boolean
    bollinger_10?: boolean
    bollinger_20?: boolean
    bollinger_50?: boolean
    bollinger_100?: boolean
    bollinger_200?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bollinger_indicators"]>



  export type Bollinger_indicatorsSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    bollinger_5?: boolean
    bollinger_10?: boolean
    bollinger_20?: boolean
    bollinger_50?: boolean
    bollinger_100?: boolean
    bollinger_200?: boolean
  }

  export type Bollinger_indicatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "bollinger_5" | "bollinger_10" | "bollinger_20" | "bollinger_50" | "bollinger_100" | "bollinger_200", ExtArgs["result"]["bollinger_indicators"]>
  export type Bollinger_indicatorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Bollinger_indicatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bollinger_indicators"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      bollinger_5: number
      bollinger_10: number
      bollinger_20: number
      bollinger_50: number
      bollinger_100: number
      bollinger_200: number
    }, ExtArgs["result"]["bollinger_indicators"]>
    composites: {}
  }

  type Bollinger_indicatorsGetPayload<S extends boolean | null | undefined | Bollinger_indicatorsDefaultArgs> = $Result.GetResult<Prisma.$Bollinger_indicatorsPayload, S>

  type Bollinger_indicatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Bollinger_indicatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bollinger_indicatorsCountAggregateInputType | true
    }

  export interface Bollinger_indicatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bollinger_indicators'], meta: { name: 'Bollinger_indicators' } }
    /**
     * Find zero or one Bollinger_indicators that matches the filter.
     * @param {Bollinger_indicatorsFindUniqueArgs} args - Arguments to find a Bollinger_indicators
     * @example
     * // Get one Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Bollinger_indicatorsFindUniqueArgs>(args: SelectSubset<T, Bollinger_indicatorsFindUniqueArgs<ExtArgs>>): Prisma__Bollinger_indicatorsClient<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bollinger_indicators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Bollinger_indicatorsFindUniqueOrThrowArgs} args - Arguments to find a Bollinger_indicators
     * @example
     * // Get one Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Bollinger_indicatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, Bollinger_indicatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Bollinger_indicatorsClient<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bollinger_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bollinger_indicatorsFindFirstArgs} args - Arguments to find a Bollinger_indicators
     * @example
     * // Get one Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Bollinger_indicatorsFindFirstArgs>(args?: SelectSubset<T, Bollinger_indicatorsFindFirstArgs<ExtArgs>>): Prisma__Bollinger_indicatorsClient<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bollinger_indicators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bollinger_indicatorsFindFirstOrThrowArgs} args - Arguments to find a Bollinger_indicators
     * @example
     * // Get one Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Bollinger_indicatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, Bollinger_indicatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Bollinger_indicatorsClient<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bollinger_indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bollinger_indicatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.findMany()
     * 
     * // Get first 10 Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bollinger_indicatorsWithIdOnly = await prisma.bollinger_indicators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Bollinger_indicatorsFindManyArgs>(args?: SelectSubset<T, Bollinger_indicatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bollinger_indicators.
     * @param {Bollinger_indicatorsCreateArgs} args - Arguments to create a Bollinger_indicators.
     * @example
     * // Create one Bollinger_indicators
     * const Bollinger_indicators = await prisma.bollinger_indicators.create({
     *   data: {
     *     // ... data to create a Bollinger_indicators
     *   }
     * })
     * 
     */
    create<T extends Bollinger_indicatorsCreateArgs>(args: SelectSubset<T, Bollinger_indicatorsCreateArgs<ExtArgs>>): Prisma__Bollinger_indicatorsClient<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bollinger_indicators.
     * @param {Bollinger_indicatorsCreateManyArgs} args - Arguments to create many Bollinger_indicators.
     * @example
     * // Create many Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Bollinger_indicatorsCreateManyArgs>(args?: SelectSubset<T, Bollinger_indicatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bollinger_indicators.
     * @param {Bollinger_indicatorsDeleteArgs} args - Arguments to delete one Bollinger_indicators.
     * @example
     * // Delete one Bollinger_indicators
     * const Bollinger_indicators = await prisma.bollinger_indicators.delete({
     *   where: {
     *     // ... filter to delete one Bollinger_indicators
     *   }
     * })
     * 
     */
    delete<T extends Bollinger_indicatorsDeleteArgs>(args: SelectSubset<T, Bollinger_indicatorsDeleteArgs<ExtArgs>>): Prisma__Bollinger_indicatorsClient<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bollinger_indicators.
     * @param {Bollinger_indicatorsUpdateArgs} args - Arguments to update one Bollinger_indicators.
     * @example
     * // Update one Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Bollinger_indicatorsUpdateArgs>(args: SelectSubset<T, Bollinger_indicatorsUpdateArgs<ExtArgs>>): Prisma__Bollinger_indicatorsClient<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bollinger_indicators.
     * @param {Bollinger_indicatorsDeleteManyArgs} args - Arguments to filter Bollinger_indicators to delete.
     * @example
     * // Delete a few Bollinger_indicators
     * const { count } = await prisma.bollinger_indicators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Bollinger_indicatorsDeleteManyArgs>(args?: SelectSubset<T, Bollinger_indicatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bollinger_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bollinger_indicatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Bollinger_indicatorsUpdateManyArgs>(args: SelectSubset<T, Bollinger_indicatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bollinger_indicators.
     * @param {Bollinger_indicatorsUpsertArgs} args - Arguments to update or create a Bollinger_indicators.
     * @example
     * // Update or create a Bollinger_indicators
     * const bollinger_indicators = await prisma.bollinger_indicators.upsert({
     *   create: {
     *     // ... data to create a Bollinger_indicators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bollinger_indicators we want to update
     *   }
     * })
     */
    upsert<T extends Bollinger_indicatorsUpsertArgs>(args: SelectSubset<T, Bollinger_indicatorsUpsertArgs<ExtArgs>>): Prisma__Bollinger_indicatorsClient<$Result.GetResult<Prisma.$Bollinger_indicatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bollinger_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bollinger_indicatorsCountArgs} args - Arguments to filter Bollinger_indicators to count.
     * @example
     * // Count the number of Bollinger_indicators
     * const count = await prisma.bollinger_indicators.count({
     *   where: {
     *     // ... the filter for the Bollinger_indicators we want to count
     *   }
     * })
    **/
    count<T extends Bollinger_indicatorsCountArgs>(
      args?: Subset<T, Bollinger_indicatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bollinger_indicatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bollinger_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bollinger_indicatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bollinger_indicatorsAggregateArgs>(args: Subset<T, Bollinger_indicatorsAggregateArgs>): Prisma.PrismaPromise<GetBollinger_indicatorsAggregateType<T>>

    /**
     * Group by Bollinger_indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bollinger_indicatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Bollinger_indicatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bollinger_indicatorsGroupByArgs['orderBy'] }
        : { orderBy?: Bollinger_indicatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Bollinger_indicatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBollinger_indicatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bollinger_indicators model
   */
  readonly fields: Bollinger_indicatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bollinger_indicators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Bollinger_indicatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bollinger_indicators model
   */
  interface Bollinger_indicatorsFieldRefs {
    readonly id: FieldRef<"Bollinger_indicators", 'Int'>
    readonly id_ticker: FieldRef<"Bollinger_indicators", 'Int'>
    readonly date: FieldRef<"Bollinger_indicators", 'DateTime'>
    readonly bollinger_5: FieldRef<"Bollinger_indicators", 'Float'>
    readonly bollinger_10: FieldRef<"Bollinger_indicators", 'Float'>
    readonly bollinger_20: FieldRef<"Bollinger_indicators", 'Float'>
    readonly bollinger_50: FieldRef<"Bollinger_indicators", 'Float'>
    readonly bollinger_100: FieldRef<"Bollinger_indicators", 'Float'>
    readonly bollinger_200: FieldRef<"Bollinger_indicators", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Bollinger_indicators findUnique
   */
  export type Bollinger_indicatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Bollinger_indicators to fetch.
     */
    where: Bollinger_indicatorsWhereUniqueInput
  }

  /**
   * Bollinger_indicators findUniqueOrThrow
   */
  export type Bollinger_indicatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Bollinger_indicators to fetch.
     */
    where: Bollinger_indicatorsWhereUniqueInput
  }

  /**
   * Bollinger_indicators findFirst
   */
  export type Bollinger_indicatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Bollinger_indicators to fetch.
     */
    where?: Bollinger_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bollinger_indicators to fetch.
     */
    orderBy?: Bollinger_indicatorsOrderByWithRelationInput | Bollinger_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bollinger_indicators.
     */
    cursor?: Bollinger_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bollinger_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bollinger_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bollinger_indicators.
     */
    distinct?: Bollinger_indicatorsScalarFieldEnum | Bollinger_indicatorsScalarFieldEnum[]
  }

  /**
   * Bollinger_indicators findFirstOrThrow
   */
  export type Bollinger_indicatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Bollinger_indicators to fetch.
     */
    where?: Bollinger_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bollinger_indicators to fetch.
     */
    orderBy?: Bollinger_indicatorsOrderByWithRelationInput | Bollinger_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bollinger_indicators.
     */
    cursor?: Bollinger_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bollinger_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bollinger_indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bollinger_indicators.
     */
    distinct?: Bollinger_indicatorsScalarFieldEnum | Bollinger_indicatorsScalarFieldEnum[]
  }

  /**
   * Bollinger_indicators findMany
   */
  export type Bollinger_indicatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * Filter, which Bollinger_indicators to fetch.
     */
    where?: Bollinger_indicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bollinger_indicators to fetch.
     */
    orderBy?: Bollinger_indicatorsOrderByWithRelationInput | Bollinger_indicatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bollinger_indicators.
     */
    cursor?: Bollinger_indicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bollinger_indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bollinger_indicators.
     */
    skip?: number
    distinct?: Bollinger_indicatorsScalarFieldEnum | Bollinger_indicatorsScalarFieldEnum[]
  }

  /**
   * Bollinger_indicators create
   */
  export type Bollinger_indicatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bollinger_indicators.
     */
    data: XOR<Bollinger_indicatorsCreateInput, Bollinger_indicatorsUncheckedCreateInput>
  }

  /**
   * Bollinger_indicators createMany
   */
  export type Bollinger_indicatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bollinger_indicators.
     */
    data: Bollinger_indicatorsCreateManyInput | Bollinger_indicatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bollinger_indicators update
   */
  export type Bollinger_indicatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bollinger_indicators.
     */
    data: XOR<Bollinger_indicatorsUpdateInput, Bollinger_indicatorsUncheckedUpdateInput>
    /**
     * Choose, which Bollinger_indicators to update.
     */
    where: Bollinger_indicatorsWhereUniqueInput
  }

  /**
   * Bollinger_indicators updateMany
   */
  export type Bollinger_indicatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bollinger_indicators.
     */
    data: XOR<Bollinger_indicatorsUpdateManyMutationInput, Bollinger_indicatorsUncheckedUpdateManyInput>
    /**
     * Filter which Bollinger_indicators to update
     */
    where?: Bollinger_indicatorsWhereInput
    /**
     * Limit how many Bollinger_indicators to update.
     */
    limit?: number
  }

  /**
   * Bollinger_indicators upsert
   */
  export type Bollinger_indicatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bollinger_indicators to update in case it exists.
     */
    where: Bollinger_indicatorsWhereUniqueInput
    /**
     * In case the Bollinger_indicators found by the `where` argument doesn't exist, create a new Bollinger_indicators with this data.
     */
    create: XOR<Bollinger_indicatorsCreateInput, Bollinger_indicatorsUncheckedCreateInput>
    /**
     * In case the Bollinger_indicators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Bollinger_indicatorsUpdateInput, Bollinger_indicatorsUncheckedUpdateInput>
  }

  /**
   * Bollinger_indicators delete
   */
  export type Bollinger_indicatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
    /**
     * Filter which Bollinger_indicators to delete.
     */
    where: Bollinger_indicatorsWhereUniqueInput
  }

  /**
   * Bollinger_indicators deleteMany
   */
  export type Bollinger_indicatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bollinger_indicators to delete
     */
    where?: Bollinger_indicatorsWhereInput
    /**
     * Limit how many Bollinger_indicators to delete.
     */
    limit?: number
  }

  /**
   * Bollinger_indicators without action
   */
  export type Bollinger_indicatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bollinger_indicators
     */
    select?: Bollinger_indicatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bollinger_indicators
     */
    omit?: Bollinger_indicatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bollinger_indicatorsInclude<ExtArgs> | null
  }


  /**
   * Model Indicators_technical
   */

  export type AggregateIndicators_technical = {
    _count: Indicators_technicalCountAggregateOutputType | null
    _avg: Indicators_technicalAvgAggregateOutputType | null
    _sum: Indicators_technicalSumAggregateOutputType | null
    _min: Indicators_technicalMinAggregateOutputType | null
    _max: Indicators_technicalMaxAggregateOutputType | null
  }

  export type Indicators_technicalAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    rsi: number | null
    macd: number | null
    bollinger: number | null
    sma: number | null
    ema: number | null
  }

  export type Indicators_technicalSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    rsi: number | null
    macd: number | null
    bollinger: number | null
    sma: number | null
    ema: number | null
  }

  export type Indicators_technicalMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    rsi: number | null
    macd: number | null
    bollinger: number | null
    sma: number | null
    ema: number | null
  }

  export type Indicators_technicalMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    rsi: number | null
    macd: number | null
    bollinger: number | null
    sma: number | null
    ema: number | null
  }

  export type Indicators_technicalCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    rsi: number
    macd: number
    bollinger: number
    sma: number
    ema: number
    _all: number
  }


  export type Indicators_technicalAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    rsi?: true
    macd?: true
    bollinger?: true
    sma?: true
    ema?: true
  }

  export type Indicators_technicalSumAggregateInputType = {
    id?: true
    id_ticker?: true
    rsi?: true
    macd?: true
    bollinger?: true
    sma?: true
    ema?: true
  }

  export type Indicators_technicalMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    rsi?: true
    macd?: true
    bollinger?: true
    sma?: true
    ema?: true
  }

  export type Indicators_technicalMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    rsi?: true
    macd?: true
    bollinger?: true
    sma?: true
    ema?: true
  }

  export type Indicators_technicalCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    rsi?: true
    macd?: true
    bollinger?: true
    sma?: true
    ema?: true
    _all?: true
  }

  export type Indicators_technicalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indicators_technical to aggregate.
     */
    where?: Indicators_technicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators_technicals to fetch.
     */
    orderBy?: Indicators_technicalOrderByWithRelationInput | Indicators_technicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Indicators_technicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators_technicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators_technicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Indicators_technicals
    **/
    _count?: true | Indicators_technicalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Indicators_technicalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Indicators_technicalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Indicators_technicalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Indicators_technicalMaxAggregateInputType
  }

  export type GetIndicators_technicalAggregateType<T extends Indicators_technicalAggregateArgs> = {
        [P in keyof T & keyof AggregateIndicators_technical]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndicators_technical[P]>
      : GetScalarType<T[P], AggregateIndicators_technical[P]>
  }




  export type Indicators_technicalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Indicators_technicalWhereInput
    orderBy?: Indicators_technicalOrderByWithAggregationInput | Indicators_technicalOrderByWithAggregationInput[]
    by: Indicators_technicalScalarFieldEnum[] | Indicators_technicalScalarFieldEnum
    having?: Indicators_technicalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Indicators_technicalCountAggregateInputType | true
    _avg?: Indicators_technicalAvgAggregateInputType
    _sum?: Indicators_technicalSumAggregateInputType
    _min?: Indicators_technicalMinAggregateInputType
    _max?: Indicators_technicalMaxAggregateInputType
  }

  export type Indicators_technicalGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    rsi: number
    macd: number
    bollinger: number
    sma: number
    ema: number
    _count: Indicators_technicalCountAggregateOutputType | null
    _avg: Indicators_technicalAvgAggregateOutputType | null
    _sum: Indicators_technicalSumAggregateOutputType | null
    _min: Indicators_technicalMinAggregateOutputType | null
    _max: Indicators_technicalMaxAggregateOutputType | null
  }

  type GetIndicators_technicalGroupByPayload<T extends Indicators_technicalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Indicators_technicalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Indicators_technicalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Indicators_technicalGroupByOutputType[P]>
            : GetScalarType<T[P], Indicators_technicalGroupByOutputType[P]>
        }
      >
    >


  export type Indicators_technicalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    rsi?: boolean
    macd?: boolean
    bollinger?: boolean
    sma?: boolean
    ema?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicators_technical"]>



  export type Indicators_technicalSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    rsi?: boolean
    macd?: boolean
    bollinger?: boolean
    sma?: boolean
    ema?: boolean
  }

  export type Indicators_technicalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "rsi" | "macd" | "bollinger" | "sma" | "ema", ExtArgs["result"]["indicators_technical"]>
  export type Indicators_technicalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $Indicators_technicalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Indicators_technical"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      rsi: number
      macd: number
      bollinger: number
      sma: number
      ema: number
    }, ExtArgs["result"]["indicators_technical"]>
    composites: {}
  }

  type Indicators_technicalGetPayload<S extends boolean | null | undefined | Indicators_technicalDefaultArgs> = $Result.GetResult<Prisma.$Indicators_technicalPayload, S>

  type Indicators_technicalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Indicators_technicalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Indicators_technicalCountAggregateInputType | true
    }

  export interface Indicators_technicalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Indicators_technical'], meta: { name: 'Indicators_technical' } }
    /**
     * Find zero or one Indicators_technical that matches the filter.
     * @param {Indicators_technicalFindUniqueArgs} args - Arguments to find a Indicators_technical
     * @example
     * // Get one Indicators_technical
     * const indicators_technical = await prisma.indicators_technical.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Indicators_technicalFindUniqueArgs>(args: SelectSubset<T, Indicators_technicalFindUniqueArgs<ExtArgs>>): Prisma__Indicators_technicalClient<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Indicators_technical that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Indicators_technicalFindUniqueOrThrowArgs} args - Arguments to find a Indicators_technical
     * @example
     * // Get one Indicators_technical
     * const indicators_technical = await prisma.indicators_technical.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Indicators_technicalFindUniqueOrThrowArgs>(args: SelectSubset<T, Indicators_technicalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Indicators_technicalClient<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicators_technical that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indicators_technicalFindFirstArgs} args - Arguments to find a Indicators_technical
     * @example
     * // Get one Indicators_technical
     * const indicators_technical = await prisma.indicators_technical.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Indicators_technicalFindFirstArgs>(args?: SelectSubset<T, Indicators_technicalFindFirstArgs<ExtArgs>>): Prisma__Indicators_technicalClient<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicators_technical that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indicators_technicalFindFirstOrThrowArgs} args - Arguments to find a Indicators_technical
     * @example
     * // Get one Indicators_technical
     * const indicators_technical = await prisma.indicators_technical.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Indicators_technicalFindFirstOrThrowArgs>(args?: SelectSubset<T, Indicators_technicalFindFirstOrThrowArgs<ExtArgs>>): Prisma__Indicators_technicalClient<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Indicators_technicals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indicators_technicalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indicators_technicals
     * const indicators_technicals = await prisma.indicators_technical.findMany()
     * 
     * // Get first 10 Indicators_technicals
     * const indicators_technicals = await prisma.indicators_technical.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indicators_technicalWithIdOnly = await prisma.indicators_technical.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Indicators_technicalFindManyArgs>(args?: SelectSubset<T, Indicators_technicalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Indicators_technical.
     * @param {Indicators_technicalCreateArgs} args - Arguments to create a Indicators_technical.
     * @example
     * // Create one Indicators_technical
     * const Indicators_technical = await prisma.indicators_technical.create({
     *   data: {
     *     // ... data to create a Indicators_technical
     *   }
     * })
     * 
     */
    create<T extends Indicators_technicalCreateArgs>(args: SelectSubset<T, Indicators_technicalCreateArgs<ExtArgs>>): Prisma__Indicators_technicalClient<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Indicators_technicals.
     * @param {Indicators_technicalCreateManyArgs} args - Arguments to create many Indicators_technicals.
     * @example
     * // Create many Indicators_technicals
     * const indicators_technical = await prisma.indicators_technical.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Indicators_technicalCreateManyArgs>(args?: SelectSubset<T, Indicators_technicalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Indicators_technical.
     * @param {Indicators_technicalDeleteArgs} args - Arguments to delete one Indicators_technical.
     * @example
     * // Delete one Indicators_technical
     * const Indicators_technical = await prisma.indicators_technical.delete({
     *   where: {
     *     // ... filter to delete one Indicators_technical
     *   }
     * })
     * 
     */
    delete<T extends Indicators_technicalDeleteArgs>(args: SelectSubset<T, Indicators_technicalDeleteArgs<ExtArgs>>): Prisma__Indicators_technicalClient<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Indicators_technical.
     * @param {Indicators_technicalUpdateArgs} args - Arguments to update one Indicators_technical.
     * @example
     * // Update one Indicators_technical
     * const indicators_technical = await prisma.indicators_technical.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Indicators_technicalUpdateArgs>(args: SelectSubset<T, Indicators_technicalUpdateArgs<ExtArgs>>): Prisma__Indicators_technicalClient<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Indicators_technicals.
     * @param {Indicators_technicalDeleteManyArgs} args - Arguments to filter Indicators_technicals to delete.
     * @example
     * // Delete a few Indicators_technicals
     * const { count } = await prisma.indicators_technical.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Indicators_technicalDeleteManyArgs>(args?: SelectSubset<T, Indicators_technicalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indicators_technicals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indicators_technicalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indicators_technicals
     * const indicators_technical = await prisma.indicators_technical.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Indicators_technicalUpdateManyArgs>(args: SelectSubset<T, Indicators_technicalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Indicators_technical.
     * @param {Indicators_technicalUpsertArgs} args - Arguments to update or create a Indicators_technical.
     * @example
     * // Update or create a Indicators_technical
     * const indicators_technical = await prisma.indicators_technical.upsert({
     *   create: {
     *     // ... data to create a Indicators_technical
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Indicators_technical we want to update
     *   }
     * })
     */
    upsert<T extends Indicators_technicalUpsertArgs>(args: SelectSubset<T, Indicators_technicalUpsertArgs<ExtArgs>>): Prisma__Indicators_technicalClient<$Result.GetResult<Prisma.$Indicators_technicalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Indicators_technicals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indicators_technicalCountArgs} args - Arguments to filter Indicators_technicals to count.
     * @example
     * // Count the number of Indicators_technicals
     * const count = await prisma.indicators_technical.count({
     *   where: {
     *     // ... the filter for the Indicators_technicals we want to count
     *   }
     * })
    **/
    count<T extends Indicators_technicalCountArgs>(
      args?: Subset<T, Indicators_technicalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Indicators_technicalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Indicators_technical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indicators_technicalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Indicators_technicalAggregateArgs>(args: Subset<T, Indicators_technicalAggregateArgs>): Prisma.PrismaPromise<GetIndicators_technicalAggregateType<T>>

    /**
     * Group by Indicators_technical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indicators_technicalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Indicators_technicalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Indicators_technicalGroupByArgs['orderBy'] }
        : { orderBy?: Indicators_technicalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Indicators_technicalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndicators_technicalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Indicators_technical model
   */
  readonly fields: Indicators_technicalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Indicators_technical.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Indicators_technicalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Indicators_technical model
   */
  interface Indicators_technicalFieldRefs {
    readonly id: FieldRef<"Indicators_technical", 'Int'>
    readonly id_ticker: FieldRef<"Indicators_technical", 'Int'>
    readonly date: FieldRef<"Indicators_technical", 'DateTime'>
    readonly rsi: FieldRef<"Indicators_technical", 'Float'>
    readonly macd: FieldRef<"Indicators_technical", 'Float'>
    readonly bollinger: FieldRef<"Indicators_technical", 'Float'>
    readonly sma: FieldRef<"Indicators_technical", 'Float'>
    readonly ema: FieldRef<"Indicators_technical", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Indicators_technical findUnique
   */
  export type Indicators_technicalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * Filter, which Indicators_technical to fetch.
     */
    where: Indicators_technicalWhereUniqueInput
  }

  /**
   * Indicators_technical findUniqueOrThrow
   */
  export type Indicators_technicalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * Filter, which Indicators_technical to fetch.
     */
    where: Indicators_technicalWhereUniqueInput
  }

  /**
   * Indicators_technical findFirst
   */
  export type Indicators_technicalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * Filter, which Indicators_technical to fetch.
     */
    where?: Indicators_technicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators_technicals to fetch.
     */
    orderBy?: Indicators_technicalOrderByWithRelationInput | Indicators_technicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicators_technicals.
     */
    cursor?: Indicators_technicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators_technicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators_technicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indicators_technicals.
     */
    distinct?: Indicators_technicalScalarFieldEnum | Indicators_technicalScalarFieldEnum[]
  }

  /**
   * Indicators_technical findFirstOrThrow
   */
  export type Indicators_technicalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * Filter, which Indicators_technical to fetch.
     */
    where?: Indicators_technicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators_technicals to fetch.
     */
    orderBy?: Indicators_technicalOrderByWithRelationInput | Indicators_technicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicators_technicals.
     */
    cursor?: Indicators_technicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators_technicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators_technicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indicators_technicals.
     */
    distinct?: Indicators_technicalScalarFieldEnum | Indicators_technicalScalarFieldEnum[]
  }

  /**
   * Indicators_technical findMany
   */
  export type Indicators_technicalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * Filter, which Indicators_technicals to fetch.
     */
    where?: Indicators_technicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators_technicals to fetch.
     */
    orderBy?: Indicators_technicalOrderByWithRelationInput | Indicators_technicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Indicators_technicals.
     */
    cursor?: Indicators_technicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators_technicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators_technicals.
     */
    skip?: number
    distinct?: Indicators_technicalScalarFieldEnum | Indicators_technicalScalarFieldEnum[]
  }

  /**
   * Indicators_technical create
   */
  export type Indicators_technicalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * The data needed to create a Indicators_technical.
     */
    data: XOR<Indicators_technicalCreateInput, Indicators_technicalUncheckedCreateInput>
  }

  /**
   * Indicators_technical createMany
   */
  export type Indicators_technicalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Indicators_technicals.
     */
    data: Indicators_technicalCreateManyInput | Indicators_technicalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Indicators_technical update
   */
  export type Indicators_technicalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * The data needed to update a Indicators_technical.
     */
    data: XOR<Indicators_technicalUpdateInput, Indicators_technicalUncheckedUpdateInput>
    /**
     * Choose, which Indicators_technical to update.
     */
    where: Indicators_technicalWhereUniqueInput
  }

  /**
   * Indicators_technical updateMany
   */
  export type Indicators_technicalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Indicators_technicals.
     */
    data: XOR<Indicators_technicalUpdateManyMutationInput, Indicators_technicalUncheckedUpdateManyInput>
    /**
     * Filter which Indicators_technicals to update
     */
    where?: Indicators_technicalWhereInput
    /**
     * Limit how many Indicators_technicals to update.
     */
    limit?: number
  }

  /**
   * Indicators_technical upsert
   */
  export type Indicators_technicalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * The filter to search for the Indicators_technical to update in case it exists.
     */
    where: Indicators_technicalWhereUniqueInput
    /**
     * In case the Indicators_technical found by the `where` argument doesn't exist, create a new Indicators_technical with this data.
     */
    create: XOR<Indicators_technicalCreateInput, Indicators_technicalUncheckedCreateInput>
    /**
     * In case the Indicators_technical was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Indicators_technicalUpdateInput, Indicators_technicalUncheckedUpdateInput>
  }

  /**
   * Indicators_technical delete
   */
  export type Indicators_technicalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
    /**
     * Filter which Indicators_technical to delete.
     */
    where: Indicators_technicalWhereUniqueInput
  }

  /**
   * Indicators_technical deleteMany
   */
  export type Indicators_technicalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indicators_technicals to delete
     */
    where?: Indicators_technicalWhereInput
    /**
     * Limit how many Indicators_technicals to delete.
     */
    limit?: number
  }

  /**
   * Indicators_technical without action
   */
  export type Indicators_technicalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicators_technical
     */
    select?: Indicators_technicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicators_technical
     */
    omit?: Indicators_technicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Indicators_technicalInclude<ExtArgs> | null
  }


  /**
   * Model Statistic
   */

  export type AggregateStatistic = {
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  export type StatisticAvgAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    avg_price: number | null
    avg_volume: number | null
    median_price: number | null
    median_volume: number | null
    min_price: number | null
    min_volume: number | null
    max_price: number | null
    max_volume: number | null
    std_price: number | null
    std_volume: number | null
  }

  export type StatisticSumAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    avg_price: number | null
    avg_volume: number | null
    median_price: number | null
    median_volume: number | null
    min_price: number | null
    min_volume: number | null
    max_price: number | null
    max_volume: number | null
    std_price: number | null
    std_volume: number | null
  }

  export type StatisticMinAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    avg_price: number | null
    avg_volume: number | null
    median_price: number | null
    median_volume: number | null
    min_price: number | null
    min_volume: number | null
    max_price: number | null
    max_volume: number | null
    std_price: number | null
    std_volume: number | null
  }

  export type StatisticMaxAggregateOutputType = {
    id: number | null
    id_ticker: number | null
    date: Date | null
    avg_price: number | null
    avg_volume: number | null
    median_price: number | null
    median_volume: number | null
    min_price: number | null
    min_volume: number | null
    max_price: number | null
    max_volume: number | null
    std_price: number | null
    std_volume: number | null
  }

  export type StatisticCountAggregateOutputType = {
    id: number
    id_ticker: number
    date: number
    avg_price: number
    avg_volume: number
    median_price: number
    median_volume: number
    min_price: number
    min_volume: number
    max_price: number
    max_volume: number
    std_price: number
    std_volume: number
    _all: number
  }


  export type StatisticAvgAggregateInputType = {
    id?: true
    id_ticker?: true
    avg_price?: true
    avg_volume?: true
    median_price?: true
    median_volume?: true
    min_price?: true
    min_volume?: true
    max_price?: true
    max_volume?: true
    std_price?: true
    std_volume?: true
  }

  export type StatisticSumAggregateInputType = {
    id?: true
    id_ticker?: true
    avg_price?: true
    avg_volume?: true
    median_price?: true
    median_volume?: true
    min_price?: true
    min_volume?: true
    max_price?: true
    max_volume?: true
    std_price?: true
    std_volume?: true
  }

  export type StatisticMinAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    avg_price?: true
    avg_volume?: true
    median_price?: true
    median_volume?: true
    min_price?: true
    min_volume?: true
    max_price?: true
    max_volume?: true
    std_price?: true
    std_volume?: true
  }

  export type StatisticMaxAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    avg_price?: true
    avg_volume?: true
    median_price?: true
    median_volume?: true
    min_price?: true
    min_volume?: true
    max_price?: true
    max_volume?: true
    std_price?: true
    std_volume?: true
  }

  export type StatisticCountAggregateInputType = {
    id?: true
    id_ticker?: true
    date?: true
    avg_price?: true
    avg_volume?: true
    median_price?: true
    median_volume?: true
    min_price?: true
    min_volume?: true
    max_price?: true
    max_volume?: true
    std_price?: true
    std_volume?: true
    _all?: true
  }

  export type StatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistic to aggregate.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statistics
    **/
    _count?: true | StatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticMaxAggregateInputType
  }

  export type GetStatisticAggregateType<T extends StatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatistic[P]>
      : GetScalarType<T[P], AggregateStatistic[P]>
  }




  export type StatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithAggregationInput | StatisticOrderByWithAggregationInput[]
    by: StatisticScalarFieldEnum[] | StatisticScalarFieldEnum
    having?: StatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticCountAggregateInputType | true
    _avg?: StatisticAvgAggregateInputType
    _sum?: StatisticSumAggregateInputType
    _min?: StatisticMinAggregateInputType
    _max?: StatisticMaxAggregateInputType
  }

  export type StatisticGroupByOutputType = {
    id: number
    id_ticker: number
    date: Date
    avg_price: number
    avg_volume: number
    median_price: number
    median_volume: number
    min_price: number
    min_volume: number
    max_price: number
    max_volume: number
    std_price: number
    std_volume: number
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  type GetStatisticGroupByPayload<T extends StatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticGroupByOutputType[P]>
        }
      >
    >


  export type StatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    avg_price?: boolean
    avg_volume?: boolean
    median_price?: boolean
    median_volume?: boolean
    min_price?: boolean
    min_volume?: boolean
    max_price?: boolean
    max_volume?: boolean
    std_price?: boolean
    std_volume?: boolean
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>



  export type StatisticSelectScalar = {
    id?: boolean
    id_ticker?: boolean
    date?: boolean
    avg_price?: boolean
    avg_volume?: boolean
    median_price?: boolean
    median_volume?: boolean
    min_price?: boolean
    min_volume?: boolean
    max_price?: boolean
    max_volume?: boolean
    std_price?: boolean
    std_volume?: boolean
  }

  export type StatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ticker" | "date" | "avg_price" | "avg_volume" | "median_price" | "median_volume" | "min_price" | "min_volume" | "max_price" | "max_volume" | "std_price" | "std_volume", ExtArgs["result"]["statistic"]>
  export type StatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $StatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Statistic"
    objects: {
      Ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ticker: number
      date: Date
      avg_price: number
      avg_volume: number
      median_price: number
      median_volume: number
      min_price: number
      min_volume: number
      max_price: number
      max_volume: number
      std_price: number
      std_volume: number
    }, ExtArgs["result"]["statistic"]>
    composites: {}
  }

  type StatisticGetPayload<S extends boolean | null | undefined | StatisticDefaultArgs> = $Result.GetResult<Prisma.$StatisticPayload, S>

  type StatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatisticCountAggregateInputType | true
    }

  export interface StatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Statistic'], meta: { name: 'Statistic' } }
    /**
     * Find zero or one Statistic that matches the filter.
     * @param {StatisticFindUniqueArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatisticFindUniqueArgs>(args: SelectSubset<T, StatisticFindUniqueArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Statistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatisticFindUniqueOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, StatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatisticFindFirstArgs>(args?: SelectSubset<T, StatisticFindFirstArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, StatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statistics
     * const statistics = await prisma.statistic.findMany()
     * 
     * // Get first 10 Statistics
     * const statistics = await prisma.statistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticWithIdOnly = await prisma.statistic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatisticFindManyArgs>(args?: SelectSubset<T, StatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Statistic.
     * @param {StatisticCreateArgs} args - Arguments to create a Statistic.
     * @example
     * // Create one Statistic
     * const Statistic = await prisma.statistic.create({
     *   data: {
     *     // ... data to create a Statistic
     *   }
     * })
     * 
     */
    create<T extends StatisticCreateArgs>(args: SelectSubset<T, StatisticCreateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statistics.
     * @param {StatisticCreateManyArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatisticCreateManyArgs>(args?: SelectSubset<T, StatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Statistic.
     * @param {StatisticDeleteArgs} args - Arguments to delete one Statistic.
     * @example
     * // Delete one Statistic
     * const Statistic = await prisma.statistic.delete({
     *   where: {
     *     // ... filter to delete one Statistic
     *   }
     * })
     * 
     */
    delete<T extends StatisticDeleteArgs>(args: SelectSubset<T, StatisticDeleteArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Statistic.
     * @param {StatisticUpdateArgs} args - Arguments to update one Statistic.
     * @example
     * // Update one Statistic
     * const statistic = await prisma.statistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatisticUpdateArgs>(args: SelectSubset<T, StatisticUpdateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statistics.
     * @param {StatisticDeleteManyArgs} args - Arguments to filter Statistics to delete.
     * @example
     * // Delete a few Statistics
     * const { count } = await prisma.statistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatisticDeleteManyArgs>(args?: SelectSubset<T, StatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatisticUpdateManyArgs>(args: SelectSubset<T, StatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statistic.
     * @param {StatisticUpsertArgs} args - Arguments to update or create a Statistic.
     * @example
     * // Update or create a Statistic
     * const statistic = await prisma.statistic.upsert({
     *   create: {
     *     // ... data to create a Statistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statistic we want to update
     *   }
     * })
     */
    upsert<T extends StatisticUpsertArgs>(args: SelectSubset<T, StatisticUpsertArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticCountArgs} args - Arguments to filter Statistics to count.
     * @example
     * // Count the number of Statistics
     * const count = await prisma.statistic.count({
     *   where: {
     *     // ... the filter for the Statistics we want to count
     *   }
     * })
    **/
    count<T extends StatisticCountArgs>(
      args?: Subset<T, StatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatisticAggregateArgs>(args: Subset<T, StatisticAggregateArgs>): Prisma.PrismaPromise<GetStatisticAggregateType<T>>

    /**
     * Group by Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticGroupByArgs['orderBy'] }
        : { orderBy?: StatisticGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Statistic model
   */
  readonly fields: StatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Statistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Statistic model
   */
  interface StatisticFieldRefs {
    readonly id: FieldRef<"Statistic", 'Int'>
    readonly id_ticker: FieldRef<"Statistic", 'Int'>
    readonly date: FieldRef<"Statistic", 'DateTime'>
    readonly avg_price: FieldRef<"Statistic", 'Float'>
    readonly avg_volume: FieldRef<"Statistic", 'Float'>
    readonly median_price: FieldRef<"Statistic", 'Float'>
    readonly median_volume: FieldRef<"Statistic", 'Float'>
    readonly min_price: FieldRef<"Statistic", 'Float'>
    readonly min_volume: FieldRef<"Statistic", 'Float'>
    readonly max_price: FieldRef<"Statistic", 'Float'>
    readonly max_volume: FieldRef<"Statistic", 'Float'>
    readonly std_price: FieldRef<"Statistic", 'Float'>
    readonly std_volume: FieldRef<"Statistic", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Statistic findUnique
   */
  export type StatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findUniqueOrThrow
   */
  export type StatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findFirst
   */
  export type StatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findFirstOrThrow
   */
  export type StatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findMany
   */
  export type StatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistics to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic create
   */
  export type StatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a Statistic.
     */
    data: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
  }

  /**
   * Statistic createMany
   */
  export type StatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Statistic update
   */
  export type StatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a Statistic.
     */
    data: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
    /**
     * Choose, which Statistic to update.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic updateMany
   */
  export type StatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
  }

  /**
   * Statistic upsert
   */
  export type StatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the Statistic to update in case it exists.
     */
    where: StatisticWhereUniqueInput
    /**
     * In case the Statistic found by the `where` argument doesn't exist, create a new Statistic with this data.
     */
    create: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
    /**
     * In case the Statistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
  }

  /**
   * Statistic delete
   */
  export type StatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter which Statistic to delete.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic deleteMany
   */
  export type StatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistics to delete
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to delete.
     */
    limit?: number
  }

  /**
   * Statistic without action
   */
  export type StatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TickerScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TickerScalarFieldEnum = (typeof TickerScalarFieldEnum)[keyof typeof TickerScalarFieldEnum]


  export const Stock_market_dataScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
    volume: 'volume',
    adj_close: 'adj_close'
  };

  export type Stock_market_dataScalarFieldEnum = (typeof Stock_market_dataScalarFieldEnum)[keyof typeof Stock_market_dataScalarFieldEnum]


  export const Cumulative_returnScalarFieldEnum: {
    id_ticker: 'id_ticker',
    date: 'date',
    cum_return_open: 'cum_return_open',
    cum_return_high: 'cum_return_high',
    cum_return_low: 'cum_return_low',
    cum_return_close: 'cum_return_close',
    cum_return_volume: 'cum_return_volume',
    cum_return_adj_close: 'cum_return_adj_close'
  };

  export type Cumulative_returnScalarFieldEnum = (typeof Cumulative_returnScalarFieldEnum)[keyof typeof Cumulative_returnScalarFieldEnum]


  export const TrendingScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    trend: 'trend',
    trend_close: 'trend_close',
    trend_open: 'trend_open',
    trend_adj_close: 'trend_adj_close'
  };

  export type TrendingScalarFieldEnum = (typeof TrendingScalarFieldEnum)[keyof typeof TrendingScalarFieldEnum]


  export const VolatilityScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    volatility: 'volatility',
    volatility_open: 'volatility_open',
    volatility_close: 'volatility_close',
    volatility_adj_close: 'volatility_adj_close'
  };

  export type VolatilityScalarFieldEnum = (typeof VolatilityScalarFieldEnum)[keyof typeof VolatilityScalarFieldEnum]


  export const Anomaly_predictionScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    anomaly_price: 'anomaly_price',
    anomaly_volume: 'anomaly_volume'
  };

  export type Anomaly_predictionScalarFieldEnum = (typeof Anomaly_predictionScalarFieldEnum)[keyof typeof Anomaly_predictionScalarFieldEnum]


  export const Ema_indicatorsScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    ema_5: 'ema_5',
    ema_10: 'ema_10',
    ema_20: 'ema_20',
    ema_50: 'ema_50',
    ema_100: 'ema_100',
    ema_200: 'ema_200'
  };

  export type Ema_indicatorsScalarFieldEnum = (typeof Ema_indicatorsScalarFieldEnum)[keyof typeof Ema_indicatorsScalarFieldEnum]


  export const Sma_indicatorsScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    sma_5: 'sma_5',
    sma_10: 'sma_10',
    sma_20: 'sma_20',
    sma_50: 'sma_50',
    sma_100: 'sma_100',
    sma_200: 'sma_200'
  };

  export type Sma_indicatorsScalarFieldEnum = (typeof Sma_indicatorsScalarFieldEnum)[keyof typeof Sma_indicatorsScalarFieldEnum]


  export const Rsi_indicatorsScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    rsi_5: 'rsi_5',
    rsi_10: 'rsi_10',
    rsi_20: 'rsi_20',
    rsi_50: 'rsi_50',
    rsi_100: 'rsi_100',
    rsi_200: 'rsi_200'
  };

  export type Rsi_indicatorsScalarFieldEnum = (typeof Rsi_indicatorsScalarFieldEnum)[keyof typeof Rsi_indicatorsScalarFieldEnum]


  export const Macd_indicatorsScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    macd_5: 'macd_5',
    macd_10: 'macd_10',
    macd_20: 'macd_20',
    macd_50: 'macd_50',
    macd_100: 'macd_100',
    macd_200: 'macd_200'
  };

  export type Macd_indicatorsScalarFieldEnum = (typeof Macd_indicatorsScalarFieldEnum)[keyof typeof Macd_indicatorsScalarFieldEnum]


  export const Bollinger_indicatorsScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    bollinger_5: 'bollinger_5',
    bollinger_10: 'bollinger_10',
    bollinger_20: 'bollinger_20',
    bollinger_50: 'bollinger_50',
    bollinger_100: 'bollinger_100',
    bollinger_200: 'bollinger_200'
  };

  export type Bollinger_indicatorsScalarFieldEnum = (typeof Bollinger_indicatorsScalarFieldEnum)[keyof typeof Bollinger_indicatorsScalarFieldEnum]


  export const Indicators_technicalScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    rsi: 'rsi',
    macd: 'macd',
    bollinger: 'bollinger',
    sma: 'sma',
    ema: 'ema'
  };

  export type Indicators_technicalScalarFieldEnum = (typeof Indicators_technicalScalarFieldEnum)[keyof typeof Indicators_technicalScalarFieldEnum]


  export const StatisticScalarFieldEnum: {
    id: 'id',
    id_ticker: 'id_ticker',
    date: 'date',
    avg_price: 'avg_price',
    avg_volume: 'avg_volume',
    median_price: 'median_price',
    median_volume: 'median_volume',
    min_price: 'min_price',
    min_volume: 'min_volume',
    max_price: 'max_price',
    max_volume: 'max_volume',
    std_price: 'std_price',
    std_volume: 'std_volume'
  };

  export type StatisticScalarFieldEnum = (typeof StatisticScalarFieldEnum)[keyof typeof StatisticScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TickerOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type TickerOrderByRelevanceFieldEnum = (typeof TickerOrderByRelevanceFieldEnum)[keyof typeof TickerOrderByRelevanceFieldEnum]


  export const TrendingOrderByRelevanceFieldEnum: {
    trend: 'trend'
  };

  export type TrendingOrderByRelevanceFieldEnum = (typeof TrendingOrderByRelevanceFieldEnum)[keyof typeof TrendingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TickerWhereInput = {
    AND?: TickerWhereInput | TickerWhereInput[]
    OR?: TickerWhereInput[]
    NOT?: TickerWhereInput | TickerWhereInput[]
    id?: IntFilter<"Ticker"> | number
    name?: StringFilter<"Ticker"> | string
    Trending?: TrendingListRelationFilter
    Anomaly_prediction?: Anomaly_predictionListRelationFilter
    Bollinger_indicators?: Bollinger_indicatorsListRelationFilter
    Cumulative_return?: XOR<Cumulative_returnNullableScalarRelationFilter, Cumulative_returnWhereInput> | null
    Ema_indicators?: Ema_indicatorsListRelationFilter
    Indicators_technical?: Indicators_technicalListRelationFilter
    Macd_indicators?: Macd_indicatorsListRelationFilter
    Rsi_indicators?: Rsi_indicatorsListRelationFilter
    Sma_indicators?: Sma_indicatorsListRelationFilter
    Statistic?: StatisticListRelationFilter
    Stock_market_data?: Stock_market_dataListRelationFilter
    Volatility?: VolatilityListRelationFilter
  }

  export type TickerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Trending?: TrendingOrderByRelationAggregateInput
    Anomaly_prediction?: Anomaly_predictionOrderByRelationAggregateInput
    Bollinger_indicators?: Bollinger_indicatorsOrderByRelationAggregateInput
    Cumulative_return?: Cumulative_returnOrderByWithRelationInput
    Ema_indicators?: Ema_indicatorsOrderByRelationAggregateInput
    Indicators_technical?: Indicators_technicalOrderByRelationAggregateInput
    Macd_indicators?: Macd_indicatorsOrderByRelationAggregateInput
    Rsi_indicators?: Rsi_indicatorsOrderByRelationAggregateInput
    Sma_indicators?: Sma_indicatorsOrderByRelationAggregateInput
    Statistic?: StatisticOrderByRelationAggregateInput
    Stock_market_data?: Stock_market_dataOrderByRelationAggregateInput
    Volatility?: VolatilityOrderByRelationAggregateInput
    _relevance?: TickerOrderByRelevanceInput
  }

  export type TickerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TickerWhereInput | TickerWhereInput[]
    OR?: TickerWhereInput[]
    NOT?: TickerWhereInput | TickerWhereInput[]
    name?: StringFilter<"Ticker"> | string
    Trending?: TrendingListRelationFilter
    Anomaly_prediction?: Anomaly_predictionListRelationFilter
    Bollinger_indicators?: Bollinger_indicatorsListRelationFilter
    Cumulative_return?: XOR<Cumulative_returnNullableScalarRelationFilter, Cumulative_returnWhereInput> | null
    Ema_indicators?: Ema_indicatorsListRelationFilter
    Indicators_technical?: Indicators_technicalListRelationFilter
    Macd_indicators?: Macd_indicatorsListRelationFilter
    Rsi_indicators?: Rsi_indicatorsListRelationFilter
    Sma_indicators?: Sma_indicatorsListRelationFilter
    Statistic?: StatisticListRelationFilter
    Stock_market_data?: Stock_market_dataListRelationFilter
    Volatility?: VolatilityListRelationFilter
  }, "id">

  export type TickerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TickerCountOrderByAggregateInput
    _avg?: TickerAvgOrderByAggregateInput
    _max?: TickerMaxOrderByAggregateInput
    _min?: TickerMinOrderByAggregateInput
    _sum?: TickerSumOrderByAggregateInput
  }

  export type TickerScalarWhereWithAggregatesInput = {
    AND?: TickerScalarWhereWithAggregatesInput | TickerScalarWhereWithAggregatesInput[]
    OR?: TickerScalarWhereWithAggregatesInput[]
    NOT?: TickerScalarWhereWithAggregatesInput | TickerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticker"> | number
    name?: StringWithAggregatesFilter<"Ticker"> | string
  }

  export type Stock_market_dataWhereInput = {
    AND?: Stock_market_dataWhereInput | Stock_market_dataWhereInput[]
    OR?: Stock_market_dataWhereInput[]
    NOT?: Stock_market_dataWhereInput | Stock_market_dataWhereInput[]
    id?: IntFilter<"Stock_market_data"> | number
    id_ticker?: IntFilter<"Stock_market_data"> | number
    date?: DateTimeFilter<"Stock_market_data"> | Date | string
    open?: FloatFilter<"Stock_market_data"> | number
    high?: FloatFilter<"Stock_market_data"> | number
    low?: FloatFilter<"Stock_market_data"> | number
    close?: FloatFilter<"Stock_market_data"> | number
    volume?: IntFilter<"Stock_market_data"> | number
    adj_close?: FloatFilter<"Stock_market_data"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Stock_market_dataOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    adj_close?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Stock_market_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Stock_market_dataWhereInput | Stock_market_dataWhereInput[]
    OR?: Stock_market_dataWhereInput[]
    NOT?: Stock_market_dataWhereInput | Stock_market_dataWhereInput[]
    id_ticker?: IntFilter<"Stock_market_data"> | number
    date?: DateTimeFilter<"Stock_market_data"> | Date | string
    open?: FloatFilter<"Stock_market_data"> | number
    high?: FloatFilter<"Stock_market_data"> | number
    low?: FloatFilter<"Stock_market_data"> | number
    close?: FloatFilter<"Stock_market_data"> | number
    volume?: IntFilter<"Stock_market_data"> | number
    adj_close?: FloatFilter<"Stock_market_data"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id">

  export type Stock_market_dataOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    adj_close?: SortOrder
    _count?: Stock_market_dataCountOrderByAggregateInput
    _avg?: Stock_market_dataAvgOrderByAggregateInput
    _max?: Stock_market_dataMaxOrderByAggregateInput
    _min?: Stock_market_dataMinOrderByAggregateInput
    _sum?: Stock_market_dataSumOrderByAggregateInput
  }

  export type Stock_market_dataScalarWhereWithAggregatesInput = {
    AND?: Stock_market_dataScalarWhereWithAggregatesInput | Stock_market_dataScalarWhereWithAggregatesInput[]
    OR?: Stock_market_dataScalarWhereWithAggregatesInput[]
    NOT?: Stock_market_dataScalarWhereWithAggregatesInput | Stock_market_dataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stock_market_data"> | number
    id_ticker?: IntWithAggregatesFilter<"Stock_market_data"> | number
    date?: DateTimeWithAggregatesFilter<"Stock_market_data"> | Date | string
    open?: FloatWithAggregatesFilter<"Stock_market_data"> | number
    high?: FloatWithAggregatesFilter<"Stock_market_data"> | number
    low?: FloatWithAggregatesFilter<"Stock_market_data"> | number
    close?: FloatWithAggregatesFilter<"Stock_market_data"> | number
    volume?: IntWithAggregatesFilter<"Stock_market_data"> | number
    adj_close?: FloatWithAggregatesFilter<"Stock_market_data"> | number
  }

  export type Cumulative_returnWhereInput = {
    AND?: Cumulative_returnWhereInput | Cumulative_returnWhereInput[]
    OR?: Cumulative_returnWhereInput[]
    NOT?: Cumulative_returnWhereInput | Cumulative_returnWhereInput[]
    id_ticker?: IntFilter<"Cumulative_return"> | number
    date?: DateTimeFilter<"Cumulative_return"> | Date | string
    cum_return_open?: FloatFilter<"Cumulative_return"> | number
    cum_return_high?: FloatFilter<"Cumulative_return"> | number
    cum_return_low?: FloatFilter<"Cumulative_return"> | number
    cum_return_close?: FloatFilter<"Cumulative_return"> | number
    cum_return_volume?: FloatFilter<"Cumulative_return"> | number
    cum_return_adj_close?: FloatFilter<"Cumulative_return"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Cumulative_returnOrderByWithRelationInput = {
    id_ticker?: SortOrder
    date?: SortOrder
    cum_return_open?: SortOrder
    cum_return_high?: SortOrder
    cum_return_low?: SortOrder
    cum_return_close?: SortOrder
    cum_return_volume?: SortOrder
    cum_return_adj_close?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Cumulative_returnWhereUniqueInput = Prisma.AtLeast<{
    id_ticker?: number
    unique_id_ticker_date?: Cumulative_returnUnique_id_ticker_dateCompoundUniqueInput
    AND?: Cumulative_returnWhereInput | Cumulative_returnWhereInput[]
    OR?: Cumulative_returnWhereInput[]
    NOT?: Cumulative_returnWhereInput | Cumulative_returnWhereInput[]
    date?: DateTimeFilter<"Cumulative_return"> | Date | string
    cum_return_open?: FloatFilter<"Cumulative_return"> | number
    cum_return_high?: FloatFilter<"Cumulative_return"> | number
    cum_return_low?: FloatFilter<"Cumulative_return"> | number
    cum_return_close?: FloatFilter<"Cumulative_return"> | number
    cum_return_volume?: FloatFilter<"Cumulative_return"> | number
    cum_return_adj_close?: FloatFilter<"Cumulative_return"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id_ticker" | "unique_id_ticker_date">

  export type Cumulative_returnOrderByWithAggregationInput = {
    id_ticker?: SortOrder
    date?: SortOrder
    cum_return_open?: SortOrder
    cum_return_high?: SortOrder
    cum_return_low?: SortOrder
    cum_return_close?: SortOrder
    cum_return_volume?: SortOrder
    cum_return_adj_close?: SortOrder
    _count?: Cumulative_returnCountOrderByAggregateInput
    _avg?: Cumulative_returnAvgOrderByAggregateInput
    _max?: Cumulative_returnMaxOrderByAggregateInput
    _min?: Cumulative_returnMinOrderByAggregateInput
    _sum?: Cumulative_returnSumOrderByAggregateInput
  }

  export type Cumulative_returnScalarWhereWithAggregatesInput = {
    AND?: Cumulative_returnScalarWhereWithAggregatesInput | Cumulative_returnScalarWhereWithAggregatesInput[]
    OR?: Cumulative_returnScalarWhereWithAggregatesInput[]
    NOT?: Cumulative_returnScalarWhereWithAggregatesInput | Cumulative_returnScalarWhereWithAggregatesInput[]
    id_ticker?: IntWithAggregatesFilter<"Cumulative_return"> | number
    date?: DateTimeWithAggregatesFilter<"Cumulative_return"> | Date | string
    cum_return_open?: FloatWithAggregatesFilter<"Cumulative_return"> | number
    cum_return_high?: FloatWithAggregatesFilter<"Cumulative_return"> | number
    cum_return_low?: FloatWithAggregatesFilter<"Cumulative_return"> | number
    cum_return_close?: FloatWithAggregatesFilter<"Cumulative_return"> | number
    cum_return_volume?: FloatWithAggregatesFilter<"Cumulative_return"> | number
    cum_return_adj_close?: FloatWithAggregatesFilter<"Cumulative_return"> | number
  }

  export type TrendingWhereInput = {
    AND?: TrendingWhereInput | TrendingWhereInput[]
    OR?: TrendingWhereInput[]
    NOT?: TrendingWhereInput | TrendingWhereInput[]
    id?: IntFilter<"Trending"> | number
    id_ticker?: IntFilter<"Trending"> | number
    date?: DateTimeFilter<"Trending"> | Date | string
    trend?: StringFilter<"Trending"> | string
    trend_close?: FloatFilter<"Trending"> | number
    trend_open?: FloatFilter<"Trending"> | number
    trend_adj_close?: FloatFilter<"Trending"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type TrendingOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    trend?: SortOrder
    trend_close?: SortOrder
    trend_open?: SortOrder
    trend_adj_close?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
    _relevance?: TrendingOrderByRelevanceInput
  }

  export type TrendingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrendingWhereInput | TrendingWhereInput[]
    OR?: TrendingWhereInput[]
    NOT?: TrendingWhereInput | TrendingWhereInput[]
    id_ticker?: IntFilter<"Trending"> | number
    date?: DateTimeFilter<"Trending"> | Date | string
    trend?: StringFilter<"Trending"> | string
    trend_close?: FloatFilter<"Trending"> | number
    trend_open?: FloatFilter<"Trending"> | number
    trend_adj_close?: FloatFilter<"Trending"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id">

  export type TrendingOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    trend?: SortOrder
    trend_close?: SortOrder
    trend_open?: SortOrder
    trend_adj_close?: SortOrder
    _count?: TrendingCountOrderByAggregateInput
    _avg?: TrendingAvgOrderByAggregateInput
    _max?: TrendingMaxOrderByAggregateInput
    _min?: TrendingMinOrderByAggregateInput
    _sum?: TrendingSumOrderByAggregateInput
  }

  export type TrendingScalarWhereWithAggregatesInput = {
    AND?: TrendingScalarWhereWithAggregatesInput | TrendingScalarWhereWithAggregatesInput[]
    OR?: TrendingScalarWhereWithAggregatesInput[]
    NOT?: TrendingScalarWhereWithAggregatesInput | TrendingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trending"> | number
    id_ticker?: IntWithAggregatesFilter<"Trending"> | number
    date?: DateTimeWithAggregatesFilter<"Trending"> | Date | string
    trend?: StringWithAggregatesFilter<"Trending"> | string
    trend_close?: FloatWithAggregatesFilter<"Trending"> | number
    trend_open?: FloatWithAggregatesFilter<"Trending"> | number
    trend_adj_close?: FloatWithAggregatesFilter<"Trending"> | number
  }

  export type VolatilityWhereInput = {
    AND?: VolatilityWhereInput | VolatilityWhereInput[]
    OR?: VolatilityWhereInput[]
    NOT?: VolatilityWhereInput | VolatilityWhereInput[]
    id?: IntFilter<"Volatility"> | number
    id_ticker?: IntFilter<"Volatility"> | number
    date?: DateTimeFilter<"Volatility"> | Date | string
    volatility?: FloatFilter<"Volatility"> | number
    volatility_open?: FloatFilter<"Volatility"> | number
    volatility_close?: FloatFilter<"Volatility"> | number
    volatility_adj_close?: FloatFilter<"Volatility"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type VolatilityOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    volatility?: SortOrder
    volatility_open?: SortOrder
    volatility_close?: SortOrder
    volatility_adj_close?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type VolatilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VolatilityWhereInput | VolatilityWhereInput[]
    OR?: VolatilityWhereInput[]
    NOT?: VolatilityWhereInput | VolatilityWhereInput[]
    id_ticker?: IntFilter<"Volatility"> | number
    date?: DateTimeFilter<"Volatility"> | Date | string
    volatility?: FloatFilter<"Volatility"> | number
    volatility_open?: FloatFilter<"Volatility"> | number
    volatility_close?: FloatFilter<"Volatility"> | number
    volatility_adj_close?: FloatFilter<"Volatility"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id">

  export type VolatilityOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    volatility?: SortOrder
    volatility_open?: SortOrder
    volatility_close?: SortOrder
    volatility_adj_close?: SortOrder
    _count?: VolatilityCountOrderByAggregateInput
    _avg?: VolatilityAvgOrderByAggregateInput
    _max?: VolatilityMaxOrderByAggregateInput
    _min?: VolatilityMinOrderByAggregateInput
    _sum?: VolatilitySumOrderByAggregateInput
  }

  export type VolatilityScalarWhereWithAggregatesInput = {
    AND?: VolatilityScalarWhereWithAggregatesInput | VolatilityScalarWhereWithAggregatesInput[]
    OR?: VolatilityScalarWhereWithAggregatesInput[]
    NOT?: VolatilityScalarWhereWithAggregatesInput | VolatilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Volatility"> | number
    id_ticker?: IntWithAggregatesFilter<"Volatility"> | number
    date?: DateTimeWithAggregatesFilter<"Volatility"> | Date | string
    volatility?: FloatWithAggregatesFilter<"Volatility"> | number
    volatility_open?: FloatWithAggregatesFilter<"Volatility"> | number
    volatility_close?: FloatWithAggregatesFilter<"Volatility"> | number
    volatility_adj_close?: FloatWithAggregatesFilter<"Volatility"> | number
  }

  export type Anomaly_predictionWhereInput = {
    AND?: Anomaly_predictionWhereInput | Anomaly_predictionWhereInput[]
    OR?: Anomaly_predictionWhereInput[]
    NOT?: Anomaly_predictionWhereInput | Anomaly_predictionWhereInput[]
    id?: IntFilter<"Anomaly_prediction"> | number
    id_ticker?: IntFilter<"Anomaly_prediction"> | number
    date?: DateTimeFilter<"Anomaly_prediction"> | Date | string
    anomaly_price?: FloatFilter<"Anomaly_prediction"> | number
    anomaly_volume?: FloatFilter<"Anomaly_prediction"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Anomaly_predictionOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    anomaly_price?: SortOrder
    anomaly_volume?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Anomaly_predictionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id_ticker_date?: Anomaly_predictionUnique_id_ticker_dateCompoundUniqueInput
    AND?: Anomaly_predictionWhereInput | Anomaly_predictionWhereInput[]
    OR?: Anomaly_predictionWhereInput[]
    NOT?: Anomaly_predictionWhereInput | Anomaly_predictionWhereInput[]
    id_ticker?: IntFilter<"Anomaly_prediction"> | number
    date?: DateTimeFilter<"Anomaly_prediction"> | Date | string
    anomaly_price?: FloatFilter<"Anomaly_prediction"> | number
    anomaly_volume?: FloatFilter<"Anomaly_prediction"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "unique_id_ticker_date">

  export type Anomaly_predictionOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    anomaly_price?: SortOrder
    anomaly_volume?: SortOrder
    _count?: Anomaly_predictionCountOrderByAggregateInput
    _avg?: Anomaly_predictionAvgOrderByAggregateInput
    _max?: Anomaly_predictionMaxOrderByAggregateInput
    _min?: Anomaly_predictionMinOrderByAggregateInput
    _sum?: Anomaly_predictionSumOrderByAggregateInput
  }

  export type Anomaly_predictionScalarWhereWithAggregatesInput = {
    AND?: Anomaly_predictionScalarWhereWithAggregatesInput | Anomaly_predictionScalarWhereWithAggregatesInput[]
    OR?: Anomaly_predictionScalarWhereWithAggregatesInput[]
    NOT?: Anomaly_predictionScalarWhereWithAggregatesInput | Anomaly_predictionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Anomaly_prediction"> | number
    id_ticker?: IntWithAggregatesFilter<"Anomaly_prediction"> | number
    date?: DateTimeWithAggregatesFilter<"Anomaly_prediction"> | Date | string
    anomaly_price?: FloatWithAggregatesFilter<"Anomaly_prediction"> | number
    anomaly_volume?: FloatWithAggregatesFilter<"Anomaly_prediction"> | number
  }

  export type Ema_indicatorsWhereInput = {
    AND?: Ema_indicatorsWhereInput | Ema_indicatorsWhereInput[]
    OR?: Ema_indicatorsWhereInput[]
    NOT?: Ema_indicatorsWhereInput | Ema_indicatorsWhereInput[]
    id?: IntFilter<"Ema_indicators"> | number
    id_ticker?: IntFilter<"Ema_indicators"> | number
    date?: DateTimeFilter<"Ema_indicators"> | Date | string
    ema_5?: FloatFilter<"Ema_indicators"> | number
    ema_10?: FloatFilter<"Ema_indicators"> | number
    ema_20?: FloatFilter<"Ema_indicators"> | number
    ema_50?: FloatFilter<"Ema_indicators"> | number
    ema_100?: FloatFilter<"Ema_indicators"> | number
    ema_200?: FloatFilter<"Ema_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Ema_indicatorsOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    ema_5?: SortOrder
    ema_10?: SortOrder
    ema_20?: SortOrder
    ema_50?: SortOrder
    ema_100?: SortOrder
    ema_200?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Ema_indicatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id_ticker_date?: Ema_indicatorsUnique_id_ticker_dateCompoundUniqueInput
    AND?: Ema_indicatorsWhereInput | Ema_indicatorsWhereInput[]
    OR?: Ema_indicatorsWhereInput[]
    NOT?: Ema_indicatorsWhereInput | Ema_indicatorsWhereInput[]
    id_ticker?: IntFilter<"Ema_indicators"> | number
    date?: DateTimeFilter<"Ema_indicators"> | Date | string
    ema_5?: FloatFilter<"Ema_indicators"> | number
    ema_10?: FloatFilter<"Ema_indicators"> | number
    ema_20?: FloatFilter<"Ema_indicators"> | number
    ema_50?: FloatFilter<"Ema_indicators"> | number
    ema_100?: FloatFilter<"Ema_indicators"> | number
    ema_200?: FloatFilter<"Ema_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "unique_id_ticker_date">

  export type Ema_indicatorsOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    ema_5?: SortOrder
    ema_10?: SortOrder
    ema_20?: SortOrder
    ema_50?: SortOrder
    ema_100?: SortOrder
    ema_200?: SortOrder
    _count?: Ema_indicatorsCountOrderByAggregateInput
    _avg?: Ema_indicatorsAvgOrderByAggregateInput
    _max?: Ema_indicatorsMaxOrderByAggregateInput
    _min?: Ema_indicatorsMinOrderByAggregateInput
    _sum?: Ema_indicatorsSumOrderByAggregateInput
  }

  export type Ema_indicatorsScalarWhereWithAggregatesInput = {
    AND?: Ema_indicatorsScalarWhereWithAggregatesInput | Ema_indicatorsScalarWhereWithAggregatesInput[]
    OR?: Ema_indicatorsScalarWhereWithAggregatesInput[]
    NOT?: Ema_indicatorsScalarWhereWithAggregatesInput | Ema_indicatorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ema_indicators"> | number
    id_ticker?: IntWithAggregatesFilter<"Ema_indicators"> | number
    date?: DateTimeWithAggregatesFilter<"Ema_indicators"> | Date | string
    ema_5?: FloatWithAggregatesFilter<"Ema_indicators"> | number
    ema_10?: FloatWithAggregatesFilter<"Ema_indicators"> | number
    ema_20?: FloatWithAggregatesFilter<"Ema_indicators"> | number
    ema_50?: FloatWithAggregatesFilter<"Ema_indicators"> | number
    ema_100?: FloatWithAggregatesFilter<"Ema_indicators"> | number
    ema_200?: FloatWithAggregatesFilter<"Ema_indicators"> | number
  }

  export type Sma_indicatorsWhereInput = {
    AND?: Sma_indicatorsWhereInput | Sma_indicatorsWhereInput[]
    OR?: Sma_indicatorsWhereInput[]
    NOT?: Sma_indicatorsWhereInput | Sma_indicatorsWhereInput[]
    id?: IntFilter<"Sma_indicators"> | number
    id_ticker?: IntFilter<"Sma_indicators"> | number
    date?: DateTimeFilter<"Sma_indicators"> | Date | string
    sma_5?: FloatFilter<"Sma_indicators"> | number
    sma_10?: FloatFilter<"Sma_indicators"> | number
    sma_20?: FloatFilter<"Sma_indicators"> | number
    sma_50?: FloatFilter<"Sma_indicators"> | number
    sma_100?: FloatFilter<"Sma_indicators"> | number
    sma_200?: FloatFilter<"Sma_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Sma_indicatorsOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    sma_5?: SortOrder
    sma_10?: SortOrder
    sma_20?: SortOrder
    sma_50?: SortOrder
    sma_100?: SortOrder
    sma_200?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Sma_indicatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id_ticker_date?: Sma_indicatorsUnique_id_ticker_dateCompoundUniqueInput
    AND?: Sma_indicatorsWhereInput | Sma_indicatorsWhereInput[]
    OR?: Sma_indicatorsWhereInput[]
    NOT?: Sma_indicatorsWhereInput | Sma_indicatorsWhereInput[]
    id_ticker?: IntFilter<"Sma_indicators"> | number
    date?: DateTimeFilter<"Sma_indicators"> | Date | string
    sma_5?: FloatFilter<"Sma_indicators"> | number
    sma_10?: FloatFilter<"Sma_indicators"> | number
    sma_20?: FloatFilter<"Sma_indicators"> | number
    sma_50?: FloatFilter<"Sma_indicators"> | number
    sma_100?: FloatFilter<"Sma_indicators"> | number
    sma_200?: FloatFilter<"Sma_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "unique_id_ticker_date">

  export type Sma_indicatorsOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    sma_5?: SortOrder
    sma_10?: SortOrder
    sma_20?: SortOrder
    sma_50?: SortOrder
    sma_100?: SortOrder
    sma_200?: SortOrder
    _count?: Sma_indicatorsCountOrderByAggregateInput
    _avg?: Sma_indicatorsAvgOrderByAggregateInput
    _max?: Sma_indicatorsMaxOrderByAggregateInput
    _min?: Sma_indicatorsMinOrderByAggregateInput
    _sum?: Sma_indicatorsSumOrderByAggregateInput
  }

  export type Sma_indicatorsScalarWhereWithAggregatesInput = {
    AND?: Sma_indicatorsScalarWhereWithAggregatesInput | Sma_indicatorsScalarWhereWithAggregatesInput[]
    OR?: Sma_indicatorsScalarWhereWithAggregatesInput[]
    NOT?: Sma_indicatorsScalarWhereWithAggregatesInput | Sma_indicatorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sma_indicators"> | number
    id_ticker?: IntWithAggregatesFilter<"Sma_indicators"> | number
    date?: DateTimeWithAggregatesFilter<"Sma_indicators"> | Date | string
    sma_5?: FloatWithAggregatesFilter<"Sma_indicators"> | number
    sma_10?: FloatWithAggregatesFilter<"Sma_indicators"> | number
    sma_20?: FloatWithAggregatesFilter<"Sma_indicators"> | number
    sma_50?: FloatWithAggregatesFilter<"Sma_indicators"> | number
    sma_100?: FloatWithAggregatesFilter<"Sma_indicators"> | number
    sma_200?: FloatWithAggregatesFilter<"Sma_indicators"> | number
  }

  export type Rsi_indicatorsWhereInput = {
    AND?: Rsi_indicatorsWhereInput | Rsi_indicatorsWhereInput[]
    OR?: Rsi_indicatorsWhereInput[]
    NOT?: Rsi_indicatorsWhereInput | Rsi_indicatorsWhereInput[]
    id?: IntFilter<"Rsi_indicators"> | number
    id_ticker?: IntFilter<"Rsi_indicators"> | number
    date?: DateTimeFilter<"Rsi_indicators"> | Date | string
    rsi_5?: FloatFilter<"Rsi_indicators"> | number
    rsi_10?: FloatFilter<"Rsi_indicators"> | number
    rsi_20?: FloatFilter<"Rsi_indicators"> | number
    rsi_50?: FloatFilter<"Rsi_indicators"> | number
    rsi_100?: FloatFilter<"Rsi_indicators"> | number
    rsi_200?: FloatFilter<"Rsi_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Rsi_indicatorsOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi_5?: SortOrder
    rsi_10?: SortOrder
    rsi_20?: SortOrder
    rsi_50?: SortOrder
    rsi_100?: SortOrder
    rsi_200?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Rsi_indicatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id_ticker_date?: Rsi_indicatorsUnique_id_ticker_dateCompoundUniqueInput
    AND?: Rsi_indicatorsWhereInput | Rsi_indicatorsWhereInput[]
    OR?: Rsi_indicatorsWhereInput[]
    NOT?: Rsi_indicatorsWhereInput | Rsi_indicatorsWhereInput[]
    id_ticker?: IntFilter<"Rsi_indicators"> | number
    date?: DateTimeFilter<"Rsi_indicators"> | Date | string
    rsi_5?: FloatFilter<"Rsi_indicators"> | number
    rsi_10?: FloatFilter<"Rsi_indicators"> | number
    rsi_20?: FloatFilter<"Rsi_indicators"> | number
    rsi_50?: FloatFilter<"Rsi_indicators"> | number
    rsi_100?: FloatFilter<"Rsi_indicators"> | number
    rsi_200?: FloatFilter<"Rsi_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "unique_id_ticker_date">

  export type Rsi_indicatorsOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi_5?: SortOrder
    rsi_10?: SortOrder
    rsi_20?: SortOrder
    rsi_50?: SortOrder
    rsi_100?: SortOrder
    rsi_200?: SortOrder
    _count?: Rsi_indicatorsCountOrderByAggregateInput
    _avg?: Rsi_indicatorsAvgOrderByAggregateInput
    _max?: Rsi_indicatorsMaxOrderByAggregateInput
    _min?: Rsi_indicatorsMinOrderByAggregateInput
    _sum?: Rsi_indicatorsSumOrderByAggregateInput
  }

  export type Rsi_indicatorsScalarWhereWithAggregatesInput = {
    AND?: Rsi_indicatorsScalarWhereWithAggregatesInput | Rsi_indicatorsScalarWhereWithAggregatesInput[]
    OR?: Rsi_indicatorsScalarWhereWithAggregatesInput[]
    NOT?: Rsi_indicatorsScalarWhereWithAggregatesInput | Rsi_indicatorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rsi_indicators"> | number
    id_ticker?: IntWithAggregatesFilter<"Rsi_indicators"> | number
    date?: DateTimeWithAggregatesFilter<"Rsi_indicators"> | Date | string
    rsi_5?: FloatWithAggregatesFilter<"Rsi_indicators"> | number
    rsi_10?: FloatWithAggregatesFilter<"Rsi_indicators"> | number
    rsi_20?: FloatWithAggregatesFilter<"Rsi_indicators"> | number
    rsi_50?: FloatWithAggregatesFilter<"Rsi_indicators"> | number
    rsi_100?: FloatWithAggregatesFilter<"Rsi_indicators"> | number
    rsi_200?: FloatWithAggregatesFilter<"Rsi_indicators"> | number
  }

  export type Macd_indicatorsWhereInput = {
    AND?: Macd_indicatorsWhereInput | Macd_indicatorsWhereInput[]
    OR?: Macd_indicatorsWhereInput[]
    NOT?: Macd_indicatorsWhereInput | Macd_indicatorsWhereInput[]
    id?: IntFilter<"Macd_indicators"> | number
    id_ticker?: IntFilter<"Macd_indicators"> | number
    date?: DateTimeFilter<"Macd_indicators"> | Date | string
    macd_5?: FloatFilter<"Macd_indicators"> | number
    macd_10?: FloatFilter<"Macd_indicators"> | number
    macd_20?: FloatFilter<"Macd_indicators"> | number
    macd_50?: FloatFilter<"Macd_indicators"> | number
    macd_100?: FloatFilter<"Macd_indicators"> | number
    macd_200?: FloatFilter<"Macd_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Macd_indicatorsOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    macd_5?: SortOrder
    macd_10?: SortOrder
    macd_20?: SortOrder
    macd_50?: SortOrder
    macd_100?: SortOrder
    macd_200?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Macd_indicatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id_ticker_date?: Macd_indicatorsUnique_id_ticker_dateCompoundUniqueInput
    AND?: Macd_indicatorsWhereInput | Macd_indicatorsWhereInput[]
    OR?: Macd_indicatorsWhereInput[]
    NOT?: Macd_indicatorsWhereInput | Macd_indicatorsWhereInput[]
    id_ticker?: IntFilter<"Macd_indicators"> | number
    date?: DateTimeFilter<"Macd_indicators"> | Date | string
    macd_5?: FloatFilter<"Macd_indicators"> | number
    macd_10?: FloatFilter<"Macd_indicators"> | number
    macd_20?: FloatFilter<"Macd_indicators"> | number
    macd_50?: FloatFilter<"Macd_indicators"> | number
    macd_100?: FloatFilter<"Macd_indicators"> | number
    macd_200?: FloatFilter<"Macd_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "unique_id_ticker_date">

  export type Macd_indicatorsOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    macd_5?: SortOrder
    macd_10?: SortOrder
    macd_20?: SortOrder
    macd_50?: SortOrder
    macd_100?: SortOrder
    macd_200?: SortOrder
    _count?: Macd_indicatorsCountOrderByAggregateInput
    _avg?: Macd_indicatorsAvgOrderByAggregateInput
    _max?: Macd_indicatorsMaxOrderByAggregateInput
    _min?: Macd_indicatorsMinOrderByAggregateInput
    _sum?: Macd_indicatorsSumOrderByAggregateInput
  }

  export type Macd_indicatorsScalarWhereWithAggregatesInput = {
    AND?: Macd_indicatorsScalarWhereWithAggregatesInput | Macd_indicatorsScalarWhereWithAggregatesInput[]
    OR?: Macd_indicatorsScalarWhereWithAggregatesInput[]
    NOT?: Macd_indicatorsScalarWhereWithAggregatesInput | Macd_indicatorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Macd_indicators"> | number
    id_ticker?: IntWithAggregatesFilter<"Macd_indicators"> | number
    date?: DateTimeWithAggregatesFilter<"Macd_indicators"> | Date | string
    macd_5?: FloatWithAggregatesFilter<"Macd_indicators"> | number
    macd_10?: FloatWithAggregatesFilter<"Macd_indicators"> | number
    macd_20?: FloatWithAggregatesFilter<"Macd_indicators"> | number
    macd_50?: FloatWithAggregatesFilter<"Macd_indicators"> | number
    macd_100?: FloatWithAggregatesFilter<"Macd_indicators"> | number
    macd_200?: FloatWithAggregatesFilter<"Macd_indicators"> | number
  }

  export type Bollinger_indicatorsWhereInput = {
    AND?: Bollinger_indicatorsWhereInput | Bollinger_indicatorsWhereInput[]
    OR?: Bollinger_indicatorsWhereInput[]
    NOT?: Bollinger_indicatorsWhereInput | Bollinger_indicatorsWhereInput[]
    id?: IntFilter<"Bollinger_indicators"> | number
    id_ticker?: IntFilter<"Bollinger_indicators"> | number
    date?: DateTimeFilter<"Bollinger_indicators"> | Date | string
    bollinger_5?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_10?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_20?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_50?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_100?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_200?: FloatFilter<"Bollinger_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Bollinger_indicatorsOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    bollinger_5?: SortOrder
    bollinger_10?: SortOrder
    bollinger_20?: SortOrder
    bollinger_50?: SortOrder
    bollinger_100?: SortOrder
    bollinger_200?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Bollinger_indicatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id_ticker_date?: Bollinger_indicatorsUnique_id_ticker_dateCompoundUniqueInput
    AND?: Bollinger_indicatorsWhereInput | Bollinger_indicatorsWhereInput[]
    OR?: Bollinger_indicatorsWhereInput[]
    NOT?: Bollinger_indicatorsWhereInput | Bollinger_indicatorsWhereInput[]
    id_ticker?: IntFilter<"Bollinger_indicators"> | number
    date?: DateTimeFilter<"Bollinger_indicators"> | Date | string
    bollinger_5?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_10?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_20?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_50?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_100?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_200?: FloatFilter<"Bollinger_indicators"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "unique_id_ticker_date">

  export type Bollinger_indicatorsOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    bollinger_5?: SortOrder
    bollinger_10?: SortOrder
    bollinger_20?: SortOrder
    bollinger_50?: SortOrder
    bollinger_100?: SortOrder
    bollinger_200?: SortOrder
    _count?: Bollinger_indicatorsCountOrderByAggregateInput
    _avg?: Bollinger_indicatorsAvgOrderByAggregateInput
    _max?: Bollinger_indicatorsMaxOrderByAggregateInput
    _min?: Bollinger_indicatorsMinOrderByAggregateInput
    _sum?: Bollinger_indicatorsSumOrderByAggregateInput
  }

  export type Bollinger_indicatorsScalarWhereWithAggregatesInput = {
    AND?: Bollinger_indicatorsScalarWhereWithAggregatesInput | Bollinger_indicatorsScalarWhereWithAggregatesInput[]
    OR?: Bollinger_indicatorsScalarWhereWithAggregatesInput[]
    NOT?: Bollinger_indicatorsScalarWhereWithAggregatesInput | Bollinger_indicatorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bollinger_indicators"> | number
    id_ticker?: IntWithAggregatesFilter<"Bollinger_indicators"> | number
    date?: DateTimeWithAggregatesFilter<"Bollinger_indicators"> | Date | string
    bollinger_5?: FloatWithAggregatesFilter<"Bollinger_indicators"> | number
    bollinger_10?: FloatWithAggregatesFilter<"Bollinger_indicators"> | number
    bollinger_20?: FloatWithAggregatesFilter<"Bollinger_indicators"> | number
    bollinger_50?: FloatWithAggregatesFilter<"Bollinger_indicators"> | number
    bollinger_100?: FloatWithAggregatesFilter<"Bollinger_indicators"> | number
    bollinger_200?: FloatWithAggregatesFilter<"Bollinger_indicators"> | number
  }

  export type Indicators_technicalWhereInput = {
    AND?: Indicators_technicalWhereInput | Indicators_technicalWhereInput[]
    OR?: Indicators_technicalWhereInput[]
    NOT?: Indicators_technicalWhereInput | Indicators_technicalWhereInput[]
    id?: IntFilter<"Indicators_technical"> | number
    id_ticker?: IntFilter<"Indicators_technical"> | number
    date?: DateTimeFilter<"Indicators_technical"> | Date | string
    rsi?: FloatFilter<"Indicators_technical"> | number
    macd?: FloatFilter<"Indicators_technical"> | number
    bollinger?: FloatFilter<"Indicators_technical"> | number
    sma?: FloatFilter<"Indicators_technical"> | number
    ema?: FloatFilter<"Indicators_technical"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type Indicators_technicalOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi?: SortOrder
    macd?: SortOrder
    bollinger?: SortOrder
    sma?: SortOrder
    ema?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type Indicators_technicalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id_ticker_date?: Indicators_technicalUnique_id_ticker_dateCompoundUniqueInput
    AND?: Indicators_technicalWhereInput | Indicators_technicalWhereInput[]
    OR?: Indicators_technicalWhereInput[]
    NOT?: Indicators_technicalWhereInput | Indicators_technicalWhereInput[]
    id_ticker?: IntFilter<"Indicators_technical"> | number
    date?: DateTimeFilter<"Indicators_technical"> | Date | string
    rsi?: FloatFilter<"Indicators_technical"> | number
    macd?: FloatFilter<"Indicators_technical"> | number
    bollinger?: FloatFilter<"Indicators_technical"> | number
    sma?: FloatFilter<"Indicators_technical"> | number
    ema?: FloatFilter<"Indicators_technical"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "unique_id_ticker_date">

  export type Indicators_technicalOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi?: SortOrder
    macd?: SortOrder
    bollinger?: SortOrder
    sma?: SortOrder
    ema?: SortOrder
    _count?: Indicators_technicalCountOrderByAggregateInput
    _avg?: Indicators_technicalAvgOrderByAggregateInput
    _max?: Indicators_technicalMaxOrderByAggregateInput
    _min?: Indicators_technicalMinOrderByAggregateInput
    _sum?: Indicators_technicalSumOrderByAggregateInput
  }

  export type Indicators_technicalScalarWhereWithAggregatesInput = {
    AND?: Indicators_technicalScalarWhereWithAggregatesInput | Indicators_technicalScalarWhereWithAggregatesInput[]
    OR?: Indicators_technicalScalarWhereWithAggregatesInput[]
    NOT?: Indicators_technicalScalarWhereWithAggregatesInput | Indicators_technicalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Indicators_technical"> | number
    id_ticker?: IntWithAggregatesFilter<"Indicators_technical"> | number
    date?: DateTimeWithAggregatesFilter<"Indicators_technical"> | Date | string
    rsi?: FloatWithAggregatesFilter<"Indicators_technical"> | number
    macd?: FloatWithAggregatesFilter<"Indicators_technical"> | number
    bollinger?: FloatWithAggregatesFilter<"Indicators_technical"> | number
    sma?: FloatWithAggregatesFilter<"Indicators_technical"> | number
    ema?: FloatWithAggregatesFilter<"Indicators_technical"> | number
  }

  export type StatisticWhereInput = {
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    id?: IntFilter<"Statistic"> | number
    id_ticker?: IntFilter<"Statistic"> | number
    date?: DateTimeFilter<"Statistic"> | Date | string
    avg_price?: FloatFilter<"Statistic"> | number
    avg_volume?: FloatFilter<"Statistic"> | number
    median_price?: FloatFilter<"Statistic"> | number
    median_volume?: FloatFilter<"Statistic"> | number
    min_price?: FloatFilter<"Statistic"> | number
    min_volume?: FloatFilter<"Statistic"> | number
    max_price?: FloatFilter<"Statistic"> | number
    max_volume?: FloatFilter<"Statistic"> | number
    std_price?: FloatFilter<"Statistic"> | number
    std_volume?: FloatFilter<"Statistic"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type StatisticOrderByWithRelationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    avg_price?: SortOrder
    avg_volume?: SortOrder
    median_price?: SortOrder
    median_volume?: SortOrder
    min_price?: SortOrder
    min_volume?: SortOrder
    max_price?: SortOrder
    max_volume?: SortOrder
    std_price?: SortOrder
    std_volume?: SortOrder
    Ticker?: TickerOrderByWithRelationInput
  }

  export type StatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id_ticker_date?: StatisticUnique_id_ticker_dateCompoundUniqueInput
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    id_ticker?: IntFilter<"Statistic"> | number
    date?: DateTimeFilter<"Statistic"> | Date | string
    avg_price?: FloatFilter<"Statistic"> | number
    avg_volume?: FloatFilter<"Statistic"> | number
    median_price?: FloatFilter<"Statistic"> | number
    median_volume?: FloatFilter<"Statistic"> | number
    min_price?: FloatFilter<"Statistic"> | number
    min_volume?: FloatFilter<"Statistic"> | number
    max_price?: FloatFilter<"Statistic"> | number
    max_volume?: FloatFilter<"Statistic"> | number
    std_price?: FloatFilter<"Statistic"> | number
    std_volume?: FloatFilter<"Statistic"> | number
    Ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "unique_id_ticker_date">

  export type StatisticOrderByWithAggregationInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    avg_price?: SortOrder
    avg_volume?: SortOrder
    median_price?: SortOrder
    median_volume?: SortOrder
    min_price?: SortOrder
    min_volume?: SortOrder
    max_price?: SortOrder
    max_volume?: SortOrder
    std_price?: SortOrder
    std_volume?: SortOrder
    _count?: StatisticCountOrderByAggregateInput
    _avg?: StatisticAvgOrderByAggregateInput
    _max?: StatisticMaxOrderByAggregateInput
    _min?: StatisticMinOrderByAggregateInput
    _sum?: StatisticSumOrderByAggregateInput
  }

  export type StatisticScalarWhereWithAggregatesInput = {
    AND?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    OR?: StatisticScalarWhereWithAggregatesInput[]
    NOT?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Statistic"> | number
    id_ticker?: IntWithAggregatesFilter<"Statistic"> | number
    date?: DateTimeWithAggregatesFilter<"Statistic"> | Date | string
    avg_price?: FloatWithAggregatesFilter<"Statistic"> | number
    avg_volume?: FloatWithAggregatesFilter<"Statistic"> | number
    median_price?: FloatWithAggregatesFilter<"Statistic"> | number
    median_volume?: FloatWithAggregatesFilter<"Statistic"> | number
    min_price?: FloatWithAggregatesFilter<"Statistic"> | number
    min_volume?: FloatWithAggregatesFilter<"Statistic"> | number
    max_price?: FloatWithAggregatesFilter<"Statistic"> | number
    max_volume?: FloatWithAggregatesFilter<"Statistic"> | number
    std_price?: FloatWithAggregatesFilter<"Statistic"> | number
    std_volume?: FloatWithAggregatesFilter<"Statistic"> | number
  }

  export type TickerCreateInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateManyInput = {
    id?: number
    name: string
  }

  export type TickerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TickerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Stock_market_dataCreateInput = {
    date: Date | string
    open: number
    high: number
    low: number
    close: number
    volume: number
    adj_close: number
    Ticker: TickerCreateNestedOneWithoutStock_market_dataInput
  }

  export type Stock_market_dataUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    open: number
    high: number
    low: number
    close: number
    volume: number
    adj_close: number
  }

  export type Stock_market_dataUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: FloatFieldUpdateOperationsInput | number
    high?: FloatFieldUpdateOperationsInput | number
    low?: FloatFieldUpdateOperationsInput | number
    close?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    adj_close?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutStock_market_dataNestedInput
  }

  export type Stock_market_dataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: FloatFieldUpdateOperationsInput | number
    high?: FloatFieldUpdateOperationsInput | number
    low?: FloatFieldUpdateOperationsInput | number
    close?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Stock_market_dataCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    open: number
    high: number
    low: number
    close: number
    volume: number
    adj_close: number
  }

  export type Stock_market_dataUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: FloatFieldUpdateOperationsInput | number
    high?: FloatFieldUpdateOperationsInput | number
    low?: FloatFieldUpdateOperationsInput | number
    close?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Stock_market_dataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: FloatFieldUpdateOperationsInput | number
    high?: FloatFieldUpdateOperationsInput | number
    low?: FloatFieldUpdateOperationsInput | number
    close?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Cumulative_returnCreateInput = {
    date: Date | string
    cum_return_open: number
    cum_return_high: number
    cum_return_low: number
    cum_return_close: number
    cum_return_volume: number
    cum_return_adj_close: number
    Ticker: TickerCreateNestedOneWithoutCumulative_returnInput
  }

  export type Cumulative_returnUncheckedCreateInput = {
    id_ticker: number
    date: Date | string
    cum_return_open: number
    cum_return_high: number
    cum_return_low: number
    cum_return_close: number
    cum_return_volume: number
    cum_return_adj_close: number
  }

  export type Cumulative_returnUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cum_return_open?: FloatFieldUpdateOperationsInput | number
    cum_return_high?: FloatFieldUpdateOperationsInput | number
    cum_return_low?: FloatFieldUpdateOperationsInput | number
    cum_return_close?: FloatFieldUpdateOperationsInput | number
    cum_return_volume?: FloatFieldUpdateOperationsInput | number
    cum_return_adj_close?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutCumulative_returnNestedInput
  }

  export type Cumulative_returnUncheckedUpdateInput = {
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cum_return_open?: FloatFieldUpdateOperationsInput | number
    cum_return_high?: FloatFieldUpdateOperationsInput | number
    cum_return_low?: FloatFieldUpdateOperationsInput | number
    cum_return_close?: FloatFieldUpdateOperationsInput | number
    cum_return_volume?: FloatFieldUpdateOperationsInput | number
    cum_return_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Cumulative_returnCreateManyInput = {
    id_ticker: number
    date: Date | string
    cum_return_open: number
    cum_return_high: number
    cum_return_low: number
    cum_return_close: number
    cum_return_volume: number
    cum_return_adj_close: number
  }

  export type Cumulative_returnUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cum_return_open?: FloatFieldUpdateOperationsInput | number
    cum_return_high?: FloatFieldUpdateOperationsInput | number
    cum_return_low?: FloatFieldUpdateOperationsInput | number
    cum_return_close?: FloatFieldUpdateOperationsInput | number
    cum_return_volume?: FloatFieldUpdateOperationsInput | number
    cum_return_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Cumulative_returnUncheckedUpdateManyInput = {
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cum_return_open?: FloatFieldUpdateOperationsInput | number
    cum_return_high?: FloatFieldUpdateOperationsInput | number
    cum_return_low?: FloatFieldUpdateOperationsInput | number
    cum_return_close?: FloatFieldUpdateOperationsInput | number
    cum_return_volume?: FloatFieldUpdateOperationsInput | number
    cum_return_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type TrendingCreateInput = {
    date: Date | string
    trend: string
    trend_close: number
    trend_open: number
    trend_adj_close: number
    Ticker: TickerCreateNestedOneWithoutTrendingInput
  }

  export type TrendingUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    trend: string
    trend_close: number
    trend_open: number
    trend_adj_close: number
  }

  export type TrendingUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    trend?: StringFieldUpdateOperationsInput | string
    trend_close?: FloatFieldUpdateOperationsInput | number
    trend_open?: FloatFieldUpdateOperationsInput | number
    trend_adj_close?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutTrendingNestedInput
  }

  export type TrendingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    trend?: StringFieldUpdateOperationsInput | string
    trend_close?: FloatFieldUpdateOperationsInput | number
    trend_open?: FloatFieldUpdateOperationsInput | number
    trend_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type TrendingCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    trend: string
    trend_close: number
    trend_open: number
    trend_adj_close: number
  }

  export type TrendingUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    trend?: StringFieldUpdateOperationsInput | string
    trend_close?: FloatFieldUpdateOperationsInput | number
    trend_open?: FloatFieldUpdateOperationsInput | number
    trend_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type TrendingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    trend?: StringFieldUpdateOperationsInput | string
    trend_close?: FloatFieldUpdateOperationsInput | number
    trend_open?: FloatFieldUpdateOperationsInput | number
    trend_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type VolatilityCreateInput = {
    date: Date | string
    volatility: number
    volatility_open: number
    volatility_close: number
    volatility_adj_close: number
    Ticker: TickerCreateNestedOneWithoutVolatilityInput
  }

  export type VolatilityUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    volatility: number
    volatility_open: number
    volatility_close: number
    volatility_adj_close: number
  }

  export type VolatilityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volatility?: FloatFieldUpdateOperationsInput | number
    volatility_open?: FloatFieldUpdateOperationsInput | number
    volatility_close?: FloatFieldUpdateOperationsInput | number
    volatility_adj_close?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutVolatilityNestedInput
  }

  export type VolatilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volatility?: FloatFieldUpdateOperationsInput | number
    volatility_open?: FloatFieldUpdateOperationsInput | number
    volatility_close?: FloatFieldUpdateOperationsInput | number
    volatility_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type VolatilityCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    volatility: number
    volatility_open: number
    volatility_close: number
    volatility_adj_close: number
  }

  export type VolatilityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volatility?: FloatFieldUpdateOperationsInput | number
    volatility_open?: FloatFieldUpdateOperationsInput | number
    volatility_close?: FloatFieldUpdateOperationsInput | number
    volatility_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type VolatilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volatility?: FloatFieldUpdateOperationsInput | number
    volatility_open?: FloatFieldUpdateOperationsInput | number
    volatility_close?: FloatFieldUpdateOperationsInput | number
    volatility_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Anomaly_predictionCreateInput = {
    date: Date | string
    anomaly_price: number
    anomaly_volume: number
    Ticker: TickerCreateNestedOneWithoutAnomaly_predictionInput
  }

  export type Anomaly_predictionUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    anomaly_price: number
    anomaly_volume: number
  }

  export type Anomaly_predictionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly_price?: FloatFieldUpdateOperationsInput | number
    anomaly_volume?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutAnomaly_predictionNestedInput
  }

  export type Anomaly_predictionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly_price?: FloatFieldUpdateOperationsInput | number
    anomaly_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type Anomaly_predictionCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    anomaly_price: number
    anomaly_volume: number
  }

  export type Anomaly_predictionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly_price?: FloatFieldUpdateOperationsInput | number
    anomaly_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type Anomaly_predictionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly_price?: FloatFieldUpdateOperationsInput | number
    anomaly_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type Ema_indicatorsCreateInput = {
    date: Date | string
    ema_5: number
    ema_10: number
    ema_20: number
    ema_50: number
    ema_100: number
    ema_200: number
    Ticker: TickerCreateNestedOneWithoutEma_indicatorsInput
  }

  export type Ema_indicatorsUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    ema_5: number
    ema_10: number
    ema_20: number
    ema_50: number
    ema_100: number
    ema_200: number
  }

  export type Ema_indicatorsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ema_5?: FloatFieldUpdateOperationsInput | number
    ema_10?: FloatFieldUpdateOperationsInput | number
    ema_20?: FloatFieldUpdateOperationsInput | number
    ema_50?: FloatFieldUpdateOperationsInput | number
    ema_100?: FloatFieldUpdateOperationsInput | number
    ema_200?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutEma_indicatorsNestedInput
  }

  export type Ema_indicatorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ema_5?: FloatFieldUpdateOperationsInput | number
    ema_10?: FloatFieldUpdateOperationsInput | number
    ema_20?: FloatFieldUpdateOperationsInput | number
    ema_50?: FloatFieldUpdateOperationsInput | number
    ema_100?: FloatFieldUpdateOperationsInput | number
    ema_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Ema_indicatorsCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    ema_5: number
    ema_10: number
    ema_20: number
    ema_50: number
    ema_100: number
    ema_200: number
  }

  export type Ema_indicatorsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ema_5?: FloatFieldUpdateOperationsInput | number
    ema_10?: FloatFieldUpdateOperationsInput | number
    ema_20?: FloatFieldUpdateOperationsInput | number
    ema_50?: FloatFieldUpdateOperationsInput | number
    ema_100?: FloatFieldUpdateOperationsInput | number
    ema_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Ema_indicatorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ema_5?: FloatFieldUpdateOperationsInput | number
    ema_10?: FloatFieldUpdateOperationsInput | number
    ema_20?: FloatFieldUpdateOperationsInput | number
    ema_50?: FloatFieldUpdateOperationsInput | number
    ema_100?: FloatFieldUpdateOperationsInput | number
    ema_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Sma_indicatorsCreateInput = {
    date: Date | string
    sma_5: number
    sma_10: number
    sma_20: number
    sma_50: number
    sma_100: number
    sma_200: number
    Ticker: TickerCreateNestedOneWithoutSma_indicatorsInput
  }

  export type Sma_indicatorsUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    sma_5: number
    sma_10: number
    sma_20: number
    sma_50: number
    sma_100: number
    sma_200: number
  }

  export type Sma_indicatorsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sma_5?: FloatFieldUpdateOperationsInput | number
    sma_10?: FloatFieldUpdateOperationsInput | number
    sma_20?: FloatFieldUpdateOperationsInput | number
    sma_50?: FloatFieldUpdateOperationsInput | number
    sma_100?: FloatFieldUpdateOperationsInput | number
    sma_200?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutSma_indicatorsNestedInput
  }

  export type Sma_indicatorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sma_5?: FloatFieldUpdateOperationsInput | number
    sma_10?: FloatFieldUpdateOperationsInput | number
    sma_20?: FloatFieldUpdateOperationsInput | number
    sma_50?: FloatFieldUpdateOperationsInput | number
    sma_100?: FloatFieldUpdateOperationsInput | number
    sma_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Sma_indicatorsCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    sma_5: number
    sma_10: number
    sma_20: number
    sma_50: number
    sma_100: number
    sma_200: number
  }

  export type Sma_indicatorsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sma_5?: FloatFieldUpdateOperationsInput | number
    sma_10?: FloatFieldUpdateOperationsInput | number
    sma_20?: FloatFieldUpdateOperationsInput | number
    sma_50?: FloatFieldUpdateOperationsInput | number
    sma_100?: FloatFieldUpdateOperationsInput | number
    sma_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Sma_indicatorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sma_5?: FloatFieldUpdateOperationsInput | number
    sma_10?: FloatFieldUpdateOperationsInput | number
    sma_20?: FloatFieldUpdateOperationsInput | number
    sma_50?: FloatFieldUpdateOperationsInput | number
    sma_100?: FloatFieldUpdateOperationsInput | number
    sma_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Rsi_indicatorsCreateInput = {
    date: Date | string
    rsi_5: number
    rsi_10: number
    rsi_20: number
    rsi_50: number
    rsi_100: number
    rsi_200: number
    Ticker: TickerCreateNestedOneWithoutRsi_indicatorsInput
  }

  export type Rsi_indicatorsUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    rsi_5: number
    rsi_10: number
    rsi_20: number
    rsi_50: number
    rsi_100: number
    rsi_200: number
  }

  export type Rsi_indicatorsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi_5?: FloatFieldUpdateOperationsInput | number
    rsi_10?: FloatFieldUpdateOperationsInput | number
    rsi_20?: FloatFieldUpdateOperationsInput | number
    rsi_50?: FloatFieldUpdateOperationsInput | number
    rsi_100?: FloatFieldUpdateOperationsInput | number
    rsi_200?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutRsi_indicatorsNestedInput
  }

  export type Rsi_indicatorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi_5?: FloatFieldUpdateOperationsInput | number
    rsi_10?: FloatFieldUpdateOperationsInput | number
    rsi_20?: FloatFieldUpdateOperationsInput | number
    rsi_50?: FloatFieldUpdateOperationsInput | number
    rsi_100?: FloatFieldUpdateOperationsInput | number
    rsi_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Rsi_indicatorsCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    rsi_5: number
    rsi_10: number
    rsi_20: number
    rsi_50: number
    rsi_100: number
    rsi_200: number
  }

  export type Rsi_indicatorsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi_5?: FloatFieldUpdateOperationsInput | number
    rsi_10?: FloatFieldUpdateOperationsInput | number
    rsi_20?: FloatFieldUpdateOperationsInput | number
    rsi_50?: FloatFieldUpdateOperationsInput | number
    rsi_100?: FloatFieldUpdateOperationsInput | number
    rsi_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Rsi_indicatorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi_5?: FloatFieldUpdateOperationsInput | number
    rsi_10?: FloatFieldUpdateOperationsInput | number
    rsi_20?: FloatFieldUpdateOperationsInput | number
    rsi_50?: FloatFieldUpdateOperationsInput | number
    rsi_100?: FloatFieldUpdateOperationsInput | number
    rsi_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Macd_indicatorsCreateInput = {
    date: Date | string
    macd_5: number
    macd_10: number
    macd_20: number
    macd_50: number
    macd_100: number
    macd_200: number
    Ticker: TickerCreateNestedOneWithoutMacd_indicatorsInput
  }

  export type Macd_indicatorsUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    macd_5: number
    macd_10: number
    macd_20: number
    macd_50: number
    macd_100: number
    macd_200: number
  }

  export type Macd_indicatorsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    macd_5?: FloatFieldUpdateOperationsInput | number
    macd_10?: FloatFieldUpdateOperationsInput | number
    macd_20?: FloatFieldUpdateOperationsInput | number
    macd_50?: FloatFieldUpdateOperationsInput | number
    macd_100?: FloatFieldUpdateOperationsInput | number
    macd_200?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutMacd_indicatorsNestedInput
  }

  export type Macd_indicatorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    macd_5?: FloatFieldUpdateOperationsInput | number
    macd_10?: FloatFieldUpdateOperationsInput | number
    macd_20?: FloatFieldUpdateOperationsInput | number
    macd_50?: FloatFieldUpdateOperationsInput | number
    macd_100?: FloatFieldUpdateOperationsInput | number
    macd_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Macd_indicatorsCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    macd_5: number
    macd_10: number
    macd_20: number
    macd_50: number
    macd_100: number
    macd_200: number
  }

  export type Macd_indicatorsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    macd_5?: FloatFieldUpdateOperationsInput | number
    macd_10?: FloatFieldUpdateOperationsInput | number
    macd_20?: FloatFieldUpdateOperationsInput | number
    macd_50?: FloatFieldUpdateOperationsInput | number
    macd_100?: FloatFieldUpdateOperationsInput | number
    macd_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Macd_indicatorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    macd_5?: FloatFieldUpdateOperationsInput | number
    macd_10?: FloatFieldUpdateOperationsInput | number
    macd_20?: FloatFieldUpdateOperationsInput | number
    macd_50?: FloatFieldUpdateOperationsInput | number
    macd_100?: FloatFieldUpdateOperationsInput | number
    macd_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Bollinger_indicatorsCreateInput = {
    date: Date | string
    bollinger_5: number
    bollinger_10: number
    bollinger_20: number
    bollinger_50: number
    bollinger_100: number
    bollinger_200: number
    Ticker: TickerCreateNestedOneWithoutBollinger_indicatorsInput
  }

  export type Bollinger_indicatorsUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    bollinger_5: number
    bollinger_10: number
    bollinger_20: number
    bollinger_50: number
    bollinger_100: number
    bollinger_200: number
  }

  export type Bollinger_indicatorsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bollinger_5?: FloatFieldUpdateOperationsInput | number
    bollinger_10?: FloatFieldUpdateOperationsInput | number
    bollinger_20?: FloatFieldUpdateOperationsInput | number
    bollinger_50?: FloatFieldUpdateOperationsInput | number
    bollinger_100?: FloatFieldUpdateOperationsInput | number
    bollinger_200?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutBollinger_indicatorsNestedInput
  }

  export type Bollinger_indicatorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bollinger_5?: FloatFieldUpdateOperationsInput | number
    bollinger_10?: FloatFieldUpdateOperationsInput | number
    bollinger_20?: FloatFieldUpdateOperationsInput | number
    bollinger_50?: FloatFieldUpdateOperationsInput | number
    bollinger_100?: FloatFieldUpdateOperationsInput | number
    bollinger_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Bollinger_indicatorsCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    bollinger_5: number
    bollinger_10: number
    bollinger_20: number
    bollinger_50: number
    bollinger_100: number
    bollinger_200: number
  }

  export type Bollinger_indicatorsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bollinger_5?: FloatFieldUpdateOperationsInput | number
    bollinger_10?: FloatFieldUpdateOperationsInput | number
    bollinger_20?: FloatFieldUpdateOperationsInput | number
    bollinger_50?: FloatFieldUpdateOperationsInput | number
    bollinger_100?: FloatFieldUpdateOperationsInput | number
    bollinger_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Bollinger_indicatorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bollinger_5?: FloatFieldUpdateOperationsInput | number
    bollinger_10?: FloatFieldUpdateOperationsInput | number
    bollinger_20?: FloatFieldUpdateOperationsInput | number
    bollinger_50?: FloatFieldUpdateOperationsInput | number
    bollinger_100?: FloatFieldUpdateOperationsInput | number
    bollinger_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Indicators_technicalCreateInput = {
    date: Date | string
    rsi: number
    macd: number
    bollinger: number
    sma: number
    ema: number
    Ticker: TickerCreateNestedOneWithoutIndicators_technicalInput
  }

  export type Indicators_technicalUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    rsi: number
    macd: number
    bollinger: number
    sma: number
    ema: number
  }

  export type Indicators_technicalUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi?: FloatFieldUpdateOperationsInput | number
    macd?: FloatFieldUpdateOperationsInput | number
    bollinger?: FloatFieldUpdateOperationsInput | number
    sma?: FloatFieldUpdateOperationsInput | number
    ema?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutIndicators_technicalNestedInput
  }

  export type Indicators_technicalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi?: FloatFieldUpdateOperationsInput | number
    macd?: FloatFieldUpdateOperationsInput | number
    bollinger?: FloatFieldUpdateOperationsInput | number
    sma?: FloatFieldUpdateOperationsInput | number
    ema?: FloatFieldUpdateOperationsInput | number
  }

  export type Indicators_technicalCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    rsi: number
    macd: number
    bollinger: number
    sma: number
    ema: number
  }

  export type Indicators_technicalUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi?: FloatFieldUpdateOperationsInput | number
    macd?: FloatFieldUpdateOperationsInput | number
    bollinger?: FloatFieldUpdateOperationsInput | number
    sma?: FloatFieldUpdateOperationsInput | number
    ema?: FloatFieldUpdateOperationsInput | number
  }

  export type Indicators_technicalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi?: FloatFieldUpdateOperationsInput | number
    macd?: FloatFieldUpdateOperationsInput | number
    bollinger?: FloatFieldUpdateOperationsInput | number
    sma?: FloatFieldUpdateOperationsInput | number
    ema?: FloatFieldUpdateOperationsInput | number
  }

  export type StatisticCreateInput = {
    date: Date | string
    avg_price: number
    avg_volume: number
    median_price: number
    median_volume: number
    min_price: number
    min_volume: number
    max_price: number
    max_volume: number
    std_price: number
    std_volume: number
    Ticker: TickerCreateNestedOneWithoutStatisticInput
  }

  export type StatisticUncheckedCreateInput = {
    id?: number
    id_ticker: number
    date: Date | string
    avg_price: number
    avg_volume: number
    median_price: number
    median_volume: number
    min_price: number
    min_volume: number
    max_price: number
    max_volume: number
    std_price: number
    std_volume: number
  }

  export type StatisticUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_price?: FloatFieldUpdateOperationsInput | number
    avg_volume?: FloatFieldUpdateOperationsInput | number
    median_price?: FloatFieldUpdateOperationsInput | number
    median_volume?: FloatFieldUpdateOperationsInput | number
    min_price?: FloatFieldUpdateOperationsInput | number
    min_volume?: FloatFieldUpdateOperationsInput | number
    max_price?: FloatFieldUpdateOperationsInput | number
    max_volume?: FloatFieldUpdateOperationsInput | number
    std_price?: FloatFieldUpdateOperationsInput | number
    std_volume?: FloatFieldUpdateOperationsInput | number
    Ticker?: TickerUpdateOneRequiredWithoutStatisticNestedInput
  }

  export type StatisticUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_price?: FloatFieldUpdateOperationsInput | number
    avg_volume?: FloatFieldUpdateOperationsInput | number
    median_price?: FloatFieldUpdateOperationsInput | number
    median_volume?: FloatFieldUpdateOperationsInput | number
    min_price?: FloatFieldUpdateOperationsInput | number
    min_volume?: FloatFieldUpdateOperationsInput | number
    max_price?: FloatFieldUpdateOperationsInput | number
    max_volume?: FloatFieldUpdateOperationsInput | number
    std_price?: FloatFieldUpdateOperationsInput | number
    std_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type StatisticCreateManyInput = {
    id?: number
    id_ticker: number
    date: Date | string
    avg_price: number
    avg_volume: number
    median_price: number
    median_volume: number
    min_price: number
    min_volume: number
    max_price: number
    max_volume: number
    std_price: number
    std_volume: number
  }

  export type StatisticUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_price?: FloatFieldUpdateOperationsInput | number
    avg_volume?: FloatFieldUpdateOperationsInput | number
    median_price?: FloatFieldUpdateOperationsInput | number
    median_volume?: FloatFieldUpdateOperationsInput | number
    min_price?: FloatFieldUpdateOperationsInput | number
    min_volume?: FloatFieldUpdateOperationsInput | number
    max_price?: FloatFieldUpdateOperationsInput | number
    max_volume?: FloatFieldUpdateOperationsInput | number
    std_price?: FloatFieldUpdateOperationsInput | number
    std_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type StatisticUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ticker?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_price?: FloatFieldUpdateOperationsInput | number
    avg_volume?: FloatFieldUpdateOperationsInput | number
    median_price?: FloatFieldUpdateOperationsInput | number
    median_volume?: FloatFieldUpdateOperationsInput | number
    min_price?: FloatFieldUpdateOperationsInput | number
    min_volume?: FloatFieldUpdateOperationsInput | number
    max_price?: FloatFieldUpdateOperationsInput | number
    max_volume?: FloatFieldUpdateOperationsInput | number
    std_price?: FloatFieldUpdateOperationsInput | number
    std_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TrendingListRelationFilter = {
    every?: TrendingWhereInput
    some?: TrendingWhereInput
    none?: TrendingWhereInput
  }

  export type Anomaly_predictionListRelationFilter = {
    every?: Anomaly_predictionWhereInput
    some?: Anomaly_predictionWhereInput
    none?: Anomaly_predictionWhereInput
  }

  export type Bollinger_indicatorsListRelationFilter = {
    every?: Bollinger_indicatorsWhereInput
    some?: Bollinger_indicatorsWhereInput
    none?: Bollinger_indicatorsWhereInput
  }

  export type Cumulative_returnNullableScalarRelationFilter = {
    is?: Cumulative_returnWhereInput | null
    isNot?: Cumulative_returnWhereInput | null
  }

  export type Ema_indicatorsListRelationFilter = {
    every?: Ema_indicatorsWhereInput
    some?: Ema_indicatorsWhereInput
    none?: Ema_indicatorsWhereInput
  }

  export type Indicators_technicalListRelationFilter = {
    every?: Indicators_technicalWhereInput
    some?: Indicators_technicalWhereInput
    none?: Indicators_technicalWhereInput
  }

  export type Macd_indicatorsListRelationFilter = {
    every?: Macd_indicatorsWhereInput
    some?: Macd_indicatorsWhereInput
    none?: Macd_indicatorsWhereInput
  }

  export type Rsi_indicatorsListRelationFilter = {
    every?: Rsi_indicatorsWhereInput
    some?: Rsi_indicatorsWhereInput
    none?: Rsi_indicatorsWhereInput
  }

  export type Sma_indicatorsListRelationFilter = {
    every?: Sma_indicatorsWhereInput
    some?: Sma_indicatorsWhereInput
    none?: Sma_indicatorsWhereInput
  }

  export type StatisticListRelationFilter = {
    every?: StatisticWhereInput
    some?: StatisticWhereInput
    none?: StatisticWhereInput
  }

  export type Stock_market_dataListRelationFilter = {
    every?: Stock_market_dataWhereInput
    some?: Stock_market_dataWhereInput
    none?: Stock_market_dataWhereInput
  }

  export type VolatilityListRelationFilter = {
    every?: VolatilityWhereInput
    some?: VolatilityWhereInput
    none?: VolatilityWhereInput
  }

  export type TrendingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Anomaly_predictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Bollinger_indicatorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Ema_indicatorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Indicators_technicalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Macd_indicatorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Rsi_indicatorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Sma_indicatorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatisticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Stock_market_dataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolatilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TickerOrderByRelevanceInput = {
    fields: TickerOrderByRelevanceFieldEnum | TickerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TickerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TickerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TickerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TickerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TickerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TickerScalarRelationFilter = {
    is?: TickerWhereInput
    isNot?: TickerWhereInput
  }

  export type Stock_market_dataCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    adj_close?: SortOrder
  }

  export type Stock_market_dataAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    adj_close?: SortOrder
  }

  export type Stock_market_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    adj_close?: SortOrder
  }

  export type Stock_market_dataMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    adj_close?: SortOrder
  }

  export type Stock_market_dataSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    adj_close?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Cumulative_returnUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type Cumulative_returnCountOrderByAggregateInput = {
    id_ticker?: SortOrder
    date?: SortOrder
    cum_return_open?: SortOrder
    cum_return_high?: SortOrder
    cum_return_low?: SortOrder
    cum_return_close?: SortOrder
    cum_return_volume?: SortOrder
    cum_return_adj_close?: SortOrder
  }

  export type Cumulative_returnAvgOrderByAggregateInput = {
    id_ticker?: SortOrder
    cum_return_open?: SortOrder
    cum_return_high?: SortOrder
    cum_return_low?: SortOrder
    cum_return_close?: SortOrder
    cum_return_volume?: SortOrder
    cum_return_adj_close?: SortOrder
  }

  export type Cumulative_returnMaxOrderByAggregateInput = {
    id_ticker?: SortOrder
    date?: SortOrder
    cum_return_open?: SortOrder
    cum_return_high?: SortOrder
    cum_return_low?: SortOrder
    cum_return_close?: SortOrder
    cum_return_volume?: SortOrder
    cum_return_adj_close?: SortOrder
  }

  export type Cumulative_returnMinOrderByAggregateInput = {
    id_ticker?: SortOrder
    date?: SortOrder
    cum_return_open?: SortOrder
    cum_return_high?: SortOrder
    cum_return_low?: SortOrder
    cum_return_close?: SortOrder
    cum_return_volume?: SortOrder
    cum_return_adj_close?: SortOrder
  }

  export type Cumulative_returnSumOrderByAggregateInput = {
    id_ticker?: SortOrder
    cum_return_open?: SortOrder
    cum_return_high?: SortOrder
    cum_return_low?: SortOrder
    cum_return_close?: SortOrder
    cum_return_volume?: SortOrder
    cum_return_adj_close?: SortOrder
  }

  export type TrendingOrderByRelevanceInput = {
    fields: TrendingOrderByRelevanceFieldEnum | TrendingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrendingCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    trend?: SortOrder
    trend_close?: SortOrder
    trend_open?: SortOrder
    trend_adj_close?: SortOrder
  }

  export type TrendingAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    trend_close?: SortOrder
    trend_open?: SortOrder
    trend_adj_close?: SortOrder
  }

  export type TrendingMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    trend?: SortOrder
    trend_close?: SortOrder
    trend_open?: SortOrder
    trend_adj_close?: SortOrder
  }

  export type TrendingMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    trend?: SortOrder
    trend_close?: SortOrder
    trend_open?: SortOrder
    trend_adj_close?: SortOrder
  }

  export type TrendingSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    trend_close?: SortOrder
    trend_open?: SortOrder
    trend_adj_close?: SortOrder
  }

  export type VolatilityCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    volatility?: SortOrder
    volatility_open?: SortOrder
    volatility_close?: SortOrder
    volatility_adj_close?: SortOrder
  }

  export type VolatilityAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    volatility?: SortOrder
    volatility_open?: SortOrder
    volatility_close?: SortOrder
    volatility_adj_close?: SortOrder
  }

  export type VolatilityMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    volatility?: SortOrder
    volatility_open?: SortOrder
    volatility_close?: SortOrder
    volatility_adj_close?: SortOrder
  }

  export type VolatilityMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    volatility?: SortOrder
    volatility_open?: SortOrder
    volatility_close?: SortOrder
    volatility_adj_close?: SortOrder
  }

  export type VolatilitySumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    volatility?: SortOrder
    volatility_open?: SortOrder
    volatility_close?: SortOrder
    volatility_adj_close?: SortOrder
  }

  export type Anomaly_predictionUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type Anomaly_predictionCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    anomaly_price?: SortOrder
    anomaly_volume?: SortOrder
  }

  export type Anomaly_predictionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    anomaly_price?: SortOrder
    anomaly_volume?: SortOrder
  }

  export type Anomaly_predictionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    anomaly_price?: SortOrder
    anomaly_volume?: SortOrder
  }

  export type Anomaly_predictionMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    anomaly_price?: SortOrder
    anomaly_volume?: SortOrder
  }

  export type Anomaly_predictionSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    anomaly_price?: SortOrder
    anomaly_volume?: SortOrder
  }

  export type Ema_indicatorsUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type Ema_indicatorsCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    ema_5?: SortOrder
    ema_10?: SortOrder
    ema_20?: SortOrder
    ema_50?: SortOrder
    ema_100?: SortOrder
    ema_200?: SortOrder
  }

  export type Ema_indicatorsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    ema_5?: SortOrder
    ema_10?: SortOrder
    ema_20?: SortOrder
    ema_50?: SortOrder
    ema_100?: SortOrder
    ema_200?: SortOrder
  }

  export type Ema_indicatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    ema_5?: SortOrder
    ema_10?: SortOrder
    ema_20?: SortOrder
    ema_50?: SortOrder
    ema_100?: SortOrder
    ema_200?: SortOrder
  }

  export type Ema_indicatorsMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    ema_5?: SortOrder
    ema_10?: SortOrder
    ema_20?: SortOrder
    ema_50?: SortOrder
    ema_100?: SortOrder
    ema_200?: SortOrder
  }

  export type Ema_indicatorsSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    ema_5?: SortOrder
    ema_10?: SortOrder
    ema_20?: SortOrder
    ema_50?: SortOrder
    ema_100?: SortOrder
    ema_200?: SortOrder
  }

  export type Sma_indicatorsUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type Sma_indicatorsCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    sma_5?: SortOrder
    sma_10?: SortOrder
    sma_20?: SortOrder
    sma_50?: SortOrder
    sma_100?: SortOrder
    sma_200?: SortOrder
  }

  export type Sma_indicatorsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    sma_5?: SortOrder
    sma_10?: SortOrder
    sma_20?: SortOrder
    sma_50?: SortOrder
    sma_100?: SortOrder
    sma_200?: SortOrder
  }

  export type Sma_indicatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    sma_5?: SortOrder
    sma_10?: SortOrder
    sma_20?: SortOrder
    sma_50?: SortOrder
    sma_100?: SortOrder
    sma_200?: SortOrder
  }

  export type Sma_indicatorsMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    sma_5?: SortOrder
    sma_10?: SortOrder
    sma_20?: SortOrder
    sma_50?: SortOrder
    sma_100?: SortOrder
    sma_200?: SortOrder
  }

  export type Sma_indicatorsSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    sma_5?: SortOrder
    sma_10?: SortOrder
    sma_20?: SortOrder
    sma_50?: SortOrder
    sma_100?: SortOrder
    sma_200?: SortOrder
  }

  export type Rsi_indicatorsUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type Rsi_indicatorsCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi_5?: SortOrder
    rsi_10?: SortOrder
    rsi_20?: SortOrder
    rsi_50?: SortOrder
    rsi_100?: SortOrder
    rsi_200?: SortOrder
  }

  export type Rsi_indicatorsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    rsi_5?: SortOrder
    rsi_10?: SortOrder
    rsi_20?: SortOrder
    rsi_50?: SortOrder
    rsi_100?: SortOrder
    rsi_200?: SortOrder
  }

  export type Rsi_indicatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi_5?: SortOrder
    rsi_10?: SortOrder
    rsi_20?: SortOrder
    rsi_50?: SortOrder
    rsi_100?: SortOrder
    rsi_200?: SortOrder
  }

  export type Rsi_indicatorsMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi_5?: SortOrder
    rsi_10?: SortOrder
    rsi_20?: SortOrder
    rsi_50?: SortOrder
    rsi_100?: SortOrder
    rsi_200?: SortOrder
  }

  export type Rsi_indicatorsSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    rsi_5?: SortOrder
    rsi_10?: SortOrder
    rsi_20?: SortOrder
    rsi_50?: SortOrder
    rsi_100?: SortOrder
    rsi_200?: SortOrder
  }

  export type Macd_indicatorsUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type Macd_indicatorsCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    macd_5?: SortOrder
    macd_10?: SortOrder
    macd_20?: SortOrder
    macd_50?: SortOrder
    macd_100?: SortOrder
    macd_200?: SortOrder
  }

  export type Macd_indicatorsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    macd_5?: SortOrder
    macd_10?: SortOrder
    macd_20?: SortOrder
    macd_50?: SortOrder
    macd_100?: SortOrder
    macd_200?: SortOrder
  }

  export type Macd_indicatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    macd_5?: SortOrder
    macd_10?: SortOrder
    macd_20?: SortOrder
    macd_50?: SortOrder
    macd_100?: SortOrder
    macd_200?: SortOrder
  }

  export type Macd_indicatorsMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    macd_5?: SortOrder
    macd_10?: SortOrder
    macd_20?: SortOrder
    macd_50?: SortOrder
    macd_100?: SortOrder
    macd_200?: SortOrder
  }

  export type Macd_indicatorsSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    macd_5?: SortOrder
    macd_10?: SortOrder
    macd_20?: SortOrder
    macd_50?: SortOrder
    macd_100?: SortOrder
    macd_200?: SortOrder
  }

  export type Bollinger_indicatorsUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type Bollinger_indicatorsCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    bollinger_5?: SortOrder
    bollinger_10?: SortOrder
    bollinger_20?: SortOrder
    bollinger_50?: SortOrder
    bollinger_100?: SortOrder
    bollinger_200?: SortOrder
  }

  export type Bollinger_indicatorsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    bollinger_5?: SortOrder
    bollinger_10?: SortOrder
    bollinger_20?: SortOrder
    bollinger_50?: SortOrder
    bollinger_100?: SortOrder
    bollinger_200?: SortOrder
  }

  export type Bollinger_indicatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    bollinger_5?: SortOrder
    bollinger_10?: SortOrder
    bollinger_20?: SortOrder
    bollinger_50?: SortOrder
    bollinger_100?: SortOrder
    bollinger_200?: SortOrder
  }

  export type Bollinger_indicatorsMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    bollinger_5?: SortOrder
    bollinger_10?: SortOrder
    bollinger_20?: SortOrder
    bollinger_50?: SortOrder
    bollinger_100?: SortOrder
    bollinger_200?: SortOrder
  }

  export type Bollinger_indicatorsSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    bollinger_5?: SortOrder
    bollinger_10?: SortOrder
    bollinger_20?: SortOrder
    bollinger_50?: SortOrder
    bollinger_100?: SortOrder
    bollinger_200?: SortOrder
  }

  export type Indicators_technicalUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type Indicators_technicalCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi?: SortOrder
    macd?: SortOrder
    bollinger?: SortOrder
    sma?: SortOrder
    ema?: SortOrder
  }

  export type Indicators_technicalAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    rsi?: SortOrder
    macd?: SortOrder
    bollinger?: SortOrder
    sma?: SortOrder
    ema?: SortOrder
  }

  export type Indicators_technicalMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi?: SortOrder
    macd?: SortOrder
    bollinger?: SortOrder
    sma?: SortOrder
    ema?: SortOrder
  }

  export type Indicators_technicalMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    rsi?: SortOrder
    macd?: SortOrder
    bollinger?: SortOrder
    sma?: SortOrder
    ema?: SortOrder
  }

  export type Indicators_technicalSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    rsi?: SortOrder
    macd?: SortOrder
    bollinger?: SortOrder
    sma?: SortOrder
    ema?: SortOrder
  }

  export type StatisticUnique_id_ticker_dateCompoundUniqueInput = {
    id_ticker: number
    date: Date | string
  }

  export type StatisticCountOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    avg_price?: SortOrder
    avg_volume?: SortOrder
    median_price?: SortOrder
    median_volume?: SortOrder
    min_price?: SortOrder
    min_volume?: SortOrder
    max_price?: SortOrder
    max_volume?: SortOrder
    std_price?: SortOrder
    std_volume?: SortOrder
  }

  export type StatisticAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    avg_price?: SortOrder
    avg_volume?: SortOrder
    median_price?: SortOrder
    median_volume?: SortOrder
    min_price?: SortOrder
    min_volume?: SortOrder
    max_price?: SortOrder
    max_volume?: SortOrder
    std_price?: SortOrder
    std_volume?: SortOrder
  }

  export type StatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    avg_price?: SortOrder
    avg_volume?: SortOrder
    median_price?: SortOrder
    median_volume?: SortOrder
    min_price?: SortOrder
    min_volume?: SortOrder
    max_price?: SortOrder
    max_volume?: SortOrder
    std_price?: SortOrder
    std_volume?: SortOrder
  }

  export type StatisticMinOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    date?: SortOrder
    avg_price?: SortOrder
    avg_volume?: SortOrder
    median_price?: SortOrder
    median_volume?: SortOrder
    min_price?: SortOrder
    min_volume?: SortOrder
    max_price?: SortOrder
    max_volume?: SortOrder
    std_price?: SortOrder
    std_volume?: SortOrder
  }

  export type StatisticSumOrderByAggregateInput = {
    id?: SortOrder
    id_ticker?: SortOrder
    avg_price?: SortOrder
    avg_volume?: SortOrder
    median_price?: SortOrder
    median_volume?: SortOrder
    min_price?: SortOrder
    min_volume?: SortOrder
    max_price?: SortOrder
    max_volume?: SortOrder
    std_price?: SortOrder
    std_volume?: SortOrder
  }

  export type TrendingCreateNestedManyWithoutTickerInput = {
    create?: XOR<TrendingCreateWithoutTickerInput, TrendingUncheckedCreateWithoutTickerInput> | TrendingCreateWithoutTickerInput[] | TrendingUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: TrendingCreateOrConnectWithoutTickerInput | TrendingCreateOrConnectWithoutTickerInput[]
    createMany?: TrendingCreateManyTickerInputEnvelope
    connect?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
  }

  export type Anomaly_predictionCreateNestedManyWithoutTickerInput = {
    create?: XOR<Anomaly_predictionCreateWithoutTickerInput, Anomaly_predictionUncheckedCreateWithoutTickerInput> | Anomaly_predictionCreateWithoutTickerInput[] | Anomaly_predictionUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Anomaly_predictionCreateOrConnectWithoutTickerInput | Anomaly_predictionCreateOrConnectWithoutTickerInput[]
    createMany?: Anomaly_predictionCreateManyTickerInputEnvelope
    connect?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
  }

  export type Bollinger_indicatorsCreateNestedManyWithoutTickerInput = {
    create?: XOR<Bollinger_indicatorsCreateWithoutTickerInput, Bollinger_indicatorsUncheckedCreateWithoutTickerInput> | Bollinger_indicatorsCreateWithoutTickerInput[] | Bollinger_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Bollinger_indicatorsCreateOrConnectWithoutTickerInput | Bollinger_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Bollinger_indicatorsCreateManyTickerInputEnvelope
    connect?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
  }

  export type Cumulative_returnCreateNestedOneWithoutTickerInput = {
    create?: XOR<Cumulative_returnCreateWithoutTickerInput, Cumulative_returnUncheckedCreateWithoutTickerInput>
    connectOrCreate?: Cumulative_returnCreateOrConnectWithoutTickerInput
    connect?: Cumulative_returnWhereUniqueInput
  }

  export type Ema_indicatorsCreateNestedManyWithoutTickerInput = {
    create?: XOR<Ema_indicatorsCreateWithoutTickerInput, Ema_indicatorsUncheckedCreateWithoutTickerInput> | Ema_indicatorsCreateWithoutTickerInput[] | Ema_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Ema_indicatorsCreateOrConnectWithoutTickerInput | Ema_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Ema_indicatorsCreateManyTickerInputEnvelope
    connect?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
  }

  export type Indicators_technicalCreateNestedManyWithoutTickerInput = {
    create?: XOR<Indicators_technicalCreateWithoutTickerInput, Indicators_technicalUncheckedCreateWithoutTickerInput> | Indicators_technicalCreateWithoutTickerInput[] | Indicators_technicalUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Indicators_technicalCreateOrConnectWithoutTickerInput | Indicators_technicalCreateOrConnectWithoutTickerInput[]
    createMany?: Indicators_technicalCreateManyTickerInputEnvelope
    connect?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
  }

  export type Macd_indicatorsCreateNestedManyWithoutTickerInput = {
    create?: XOR<Macd_indicatorsCreateWithoutTickerInput, Macd_indicatorsUncheckedCreateWithoutTickerInput> | Macd_indicatorsCreateWithoutTickerInput[] | Macd_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Macd_indicatorsCreateOrConnectWithoutTickerInput | Macd_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Macd_indicatorsCreateManyTickerInputEnvelope
    connect?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
  }

  export type Rsi_indicatorsCreateNestedManyWithoutTickerInput = {
    create?: XOR<Rsi_indicatorsCreateWithoutTickerInput, Rsi_indicatorsUncheckedCreateWithoutTickerInput> | Rsi_indicatorsCreateWithoutTickerInput[] | Rsi_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Rsi_indicatorsCreateOrConnectWithoutTickerInput | Rsi_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Rsi_indicatorsCreateManyTickerInputEnvelope
    connect?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
  }

  export type Sma_indicatorsCreateNestedManyWithoutTickerInput = {
    create?: XOR<Sma_indicatorsCreateWithoutTickerInput, Sma_indicatorsUncheckedCreateWithoutTickerInput> | Sma_indicatorsCreateWithoutTickerInput[] | Sma_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Sma_indicatorsCreateOrConnectWithoutTickerInput | Sma_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Sma_indicatorsCreateManyTickerInputEnvelope
    connect?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
  }

  export type StatisticCreateNestedManyWithoutTickerInput = {
    create?: XOR<StatisticCreateWithoutTickerInput, StatisticUncheckedCreateWithoutTickerInput> | StatisticCreateWithoutTickerInput[] | StatisticUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutTickerInput | StatisticCreateOrConnectWithoutTickerInput[]
    createMany?: StatisticCreateManyTickerInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type Stock_market_dataCreateNestedManyWithoutTickerInput = {
    create?: XOR<Stock_market_dataCreateWithoutTickerInput, Stock_market_dataUncheckedCreateWithoutTickerInput> | Stock_market_dataCreateWithoutTickerInput[] | Stock_market_dataUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Stock_market_dataCreateOrConnectWithoutTickerInput | Stock_market_dataCreateOrConnectWithoutTickerInput[]
    createMany?: Stock_market_dataCreateManyTickerInputEnvelope
    connect?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
  }

  export type VolatilityCreateNestedManyWithoutTickerInput = {
    create?: XOR<VolatilityCreateWithoutTickerInput, VolatilityUncheckedCreateWithoutTickerInput> | VolatilityCreateWithoutTickerInput[] | VolatilityUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: VolatilityCreateOrConnectWithoutTickerInput | VolatilityCreateOrConnectWithoutTickerInput[]
    createMany?: VolatilityCreateManyTickerInputEnvelope
    connect?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
  }

  export type TrendingUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<TrendingCreateWithoutTickerInput, TrendingUncheckedCreateWithoutTickerInput> | TrendingCreateWithoutTickerInput[] | TrendingUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: TrendingCreateOrConnectWithoutTickerInput | TrendingCreateOrConnectWithoutTickerInput[]
    createMany?: TrendingCreateManyTickerInputEnvelope
    connect?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
  }

  export type Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<Anomaly_predictionCreateWithoutTickerInput, Anomaly_predictionUncheckedCreateWithoutTickerInput> | Anomaly_predictionCreateWithoutTickerInput[] | Anomaly_predictionUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Anomaly_predictionCreateOrConnectWithoutTickerInput | Anomaly_predictionCreateOrConnectWithoutTickerInput[]
    createMany?: Anomaly_predictionCreateManyTickerInputEnvelope
    connect?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
  }

  export type Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<Bollinger_indicatorsCreateWithoutTickerInput, Bollinger_indicatorsUncheckedCreateWithoutTickerInput> | Bollinger_indicatorsCreateWithoutTickerInput[] | Bollinger_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Bollinger_indicatorsCreateOrConnectWithoutTickerInput | Bollinger_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Bollinger_indicatorsCreateManyTickerInputEnvelope
    connect?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
  }

  export type Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput = {
    create?: XOR<Cumulative_returnCreateWithoutTickerInput, Cumulative_returnUncheckedCreateWithoutTickerInput>
    connectOrCreate?: Cumulative_returnCreateOrConnectWithoutTickerInput
    connect?: Cumulative_returnWhereUniqueInput
  }

  export type Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<Ema_indicatorsCreateWithoutTickerInput, Ema_indicatorsUncheckedCreateWithoutTickerInput> | Ema_indicatorsCreateWithoutTickerInput[] | Ema_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Ema_indicatorsCreateOrConnectWithoutTickerInput | Ema_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Ema_indicatorsCreateManyTickerInputEnvelope
    connect?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
  }

  export type Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<Indicators_technicalCreateWithoutTickerInput, Indicators_technicalUncheckedCreateWithoutTickerInput> | Indicators_technicalCreateWithoutTickerInput[] | Indicators_technicalUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Indicators_technicalCreateOrConnectWithoutTickerInput | Indicators_technicalCreateOrConnectWithoutTickerInput[]
    createMany?: Indicators_technicalCreateManyTickerInputEnvelope
    connect?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
  }

  export type Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<Macd_indicatorsCreateWithoutTickerInput, Macd_indicatorsUncheckedCreateWithoutTickerInput> | Macd_indicatorsCreateWithoutTickerInput[] | Macd_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Macd_indicatorsCreateOrConnectWithoutTickerInput | Macd_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Macd_indicatorsCreateManyTickerInputEnvelope
    connect?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
  }

  export type Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<Rsi_indicatorsCreateWithoutTickerInput, Rsi_indicatorsUncheckedCreateWithoutTickerInput> | Rsi_indicatorsCreateWithoutTickerInput[] | Rsi_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Rsi_indicatorsCreateOrConnectWithoutTickerInput | Rsi_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Rsi_indicatorsCreateManyTickerInputEnvelope
    connect?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
  }

  export type Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<Sma_indicatorsCreateWithoutTickerInput, Sma_indicatorsUncheckedCreateWithoutTickerInput> | Sma_indicatorsCreateWithoutTickerInput[] | Sma_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Sma_indicatorsCreateOrConnectWithoutTickerInput | Sma_indicatorsCreateOrConnectWithoutTickerInput[]
    createMany?: Sma_indicatorsCreateManyTickerInputEnvelope
    connect?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
  }

  export type StatisticUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<StatisticCreateWithoutTickerInput, StatisticUncheckedCreateWithoutTickerInput> | StatisticCreateWithoutTickerInput[] | StatisticUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutTickerInput | StatisticCreateOrConnectWithoutTickerInput[]
    createMany?: StatisticCreateManyTickerInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<Stock_market_dataCreateWithoutTickerInput, Stock_market_dataUncheckedCreateWithoutTickerInput> | Stock_market_dataCreateWithoutTickerInput[] | Stock_market_dataUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Stock_market_dataCreateOrConnectWithoutTickerInput | Stock_market_dataCreateOrConnectWithoutTickerInput[]
    createMany?: Stock_market_dataCreateManyTickerInputEnvelope
    connect?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
  }

  export type VolatilityUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<VolatilityCreateWithoutTickerInput, VolatilityUncheckedCreateWithoutTickerInput> | VolatilityCreateWithoutTickerInput[] | VolatilityUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: VolatilityCreateOrConnectWithoutTickerInput | VolatilityCreateOrConnectWithoutTickerInput[]
    createMany?: VolatilityCreateManyTickerInputEnvelope
    connect?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TrendingUpdateManyWithoutTickerNestedInput = {
    create?: XOR<TrendingCreateWithoutTickerInput, TrendingUncheckedCreateWithoutTickerInput> | TrendingCreateWithoutTickerInput[] | TrendingUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: TrendingCreateOrConnectWithoutTickerInput | TrendingCreateOrConnectWithoutTickerInput[]
    upsert?: TrendingUpsertWithWhereUniqueWithoutTickerInput | TrendingUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: TrendingCreateManyTickerInputEnvelope
    set?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
    disconnect?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
    delete?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
    connect?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
    update?: TrendingUpdateWithWhereUniqueWithoutTickerInput | TrendingUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: TrendingUpdateManyWithWhereWithoutTickerInput | TrendingUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: TrendingScalarWhereInput | TrendingScalarWhereInput[]
  }

  export type Anomaly_predictionUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Anomaly_predictionCreateWithoutTickerInput, Anomaly_predictionUncheckedCreateWithoutTickerInput> | Anomaly_predictionCreateWithoutTickerInput[] | Anomaly_predictionUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Anomaly_predictionCreateOrConnectWithoutTickerInput | Anomaly_predictionCreateOrConnectWithoutTickerInput[]
    upsert?: Anomaly_predictionUpsertWithWhereUniqueWithoutTickerInput | Anomaly_predictionUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Anomaly_predictionCreateManyTickerInputEnvelope
    set?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
    disconnect?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
    delete?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
    connect?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
    update?: Anomaly_predictionUpdateWithWhereUniqueWithoutTickerInput | Anomaly_predictionUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Anomaly_predictionUpdateManyWithWhereWithoutTickerInput | Anomaly_predictionUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Anomaly_predictionScalarWhereInput | Anomaly_predictionScalarWhereInput[]
  }

  export type Bollinger_indicatorsUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Bollinger_indicatorsCreateWithoutTickerInput, Bollinger_indicatorsUncheckedCreateWithoutTickerInput> | Bollinger_indicatorsCreateWithoutTickerInput[] | Bollinger_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Bollinger_indicatorsCreateOrConnectWithoutTickerInput | Bollinger_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Bollinger_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Bollinger_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Bollinger_indicatorsCreateManyTickerInputEnvelope
    set?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
    disconnect?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
    delete?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
    connect?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
    update?: Bollinger_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Bollinger_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Bollinger_indicatorsUpdateManyWithWhereWithoutTickerInput | Bollinger_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Bollinger_indicatorsScalarWhereInput | Bollinger_indicatorsScalarWhereInput[]
  }

  export type Cumulative_returnUpdateOneWithoutTickerNestedInput = {
    create?: XOR<Cumulative_returnCreateWithoutTickerInput, Cumulative_returnUncheckedCreateWithoutTickerInput>
    connectOrCreate?: Cumulative_returnCreateOrConnectWithoutTickerInput
    upsert?: Cumulative_returnUpsertWithoutTickerInput
    disconnect?: Cumulative_returnWhereInput | boolean
    delete?: Cumulative_returnWhereInput | boolean
    connect?: Cumulative_returnWhereUniqueInput
    update?: XOR<XOR<Cumulative_returnUpdateToOneWithWhereWithoutTickerInput, Cumulative_returnUpdateWithoutTickerInput>, Cumulative_returnUncheckedUpdateWithoutTickerInput>
  }

  export type Ema_indicatorsUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Ema_indicatorsCreateWithoutTickerInput, Ema_indicatorsUncheckedCreateWithoutTickerInput> | Ema_indicatorsCreateWithoutTickerInput[] | Ema_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Ema_indicatorsCreateOrConnectWithoutTickerInput | Ema_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Ema_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Ema_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Ema_indicatorsCreateManyTickerInputEnvelope
    set?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
    disconnect?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
    delete?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
    connect?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
    update?: Ema_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Ema_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Ema_indicatorsUpdateManyWithWhereWithoutTickerInput | Ema_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Ema_indicatorsScalarWhereInput | Ema_indicatorsScalarWhereInput[]
  }

  export type Indicators_technicalUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Indicators_technicalCreateWithoutTickerInput, Indicators_technicalUncheckedCreateWithoutTickerInput> | Indicators_technicalCreateWithoutTickerInput[] | Indicators_technicalUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Indicators_technicalCreateOrConnectWithoutTickerInput | Indicators_technicalCreateOrConnectWithoutTickerInput[]
    upsert?: Indicators_technicalUpsertWithWhereUniqueWithoutTickerInput | Indicators_technicalUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Indicators_technicalCreateManyTickerInputEnvelope
    set?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
    disconnect?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
    delete?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
    connect?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
    update?: Indicators_technicalUpdateWithWhereUniqueWithoutTickerInput | Indicators_technicalUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Indicators_technicalUpdateManyWithWhereWithoutTickerInput | Indicators_technicalUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Indicators_technicalScalarWhereInput | Indicators_technicalScalarWhereInput[]
  }

  export type Macd_indicatorsUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Macd_indicatorsCreateWithoutTickerInput, Macd_indicatorsUncheckedCreateWithoutTickerInput> | Macd_indicatorsCreateWithoutTickerInput[] | Macd_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Macd_indicatorsCreateOrConnectWithoutTickerInput | Macd_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Macd_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Macd_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Macd_indicatorsCreateManyTickerInputEnvelope
    set?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
    disconnect?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
    delete?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
    connect?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
    update?: Macd_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Macd_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Macd_indicatorsUpdateManyWithWhereWithoutTickerInput | Macd_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Macd_indicatorsScalarWhereInput | Macd_indicatorsScalarWhereInput[]
  }

  export type Rsi_indicatorsUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Rsi_indicatorsCreateWithoutTickerInput, Rsi_indicatorsUncheckedCreateWithoutTickerInput> | Rsi_indicatorsCreateWithoutTickerInput[] | Rsi_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Rsi_indicatorsCreateOrConnectWithoutTickerInput | Rsi_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Rsi_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Rsi_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Rsi_indicatorsCreateManyTickerInputEnvelope
    set?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
    disconnect?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
    delete?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
    connect?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
    update?: Rsi_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Rsi_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Rsi_indicatorsUpdateManyWithWhereWithoutTickerInput | Rsi_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Rsi_indicatorsScalarWhereInput | Rsi_indicatorsScalarWhereInput[]
  }

  export type Sma_indicatorsUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Sma_indicatorsCreateWithoutTickerInput, Sma_indicatorsUncheckedCreateWithoutTickerInput> | Sma_indicatorsCreateWithoutTickerInput[] | Sma_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Sma_indicatorsCreateOrConnectWithoutTickerInput | Sma_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Sma_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Sma_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Sma_indicatorsCreateManyTickerInputEnvelope
    set?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
    disconnect?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
    delete?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
    connect?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
    update?: Sma_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Sma_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Sma_indicatorsUpdateManyWithWhereWithoutTickerInput | Sma_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Sma_indicatorsScalarWhereInput | Sma_indicatorsScalarWhereInput[]
  }

  export type StatisticUpdateManyWithoutTickerNestedInput = {
    create?: XOR<StatisticCreateWithoutTickerInput, StatisticUncheckedCreateWithoutTickerInput> | StatisticCreateWithoutTickerInput[] | StatisticUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutTickerInput | StatisticCreateOrConnectWithoutTickerInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutTickerInput | StatisticUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: StatisticCreateManyTickerInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutTickerInput | StatisticUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutTickerInput | StatisticUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type Stock_market_dataUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Stock_market_dataCreateWithoutTickerInput, Stock_market_dataUncheckedCreateWithoutTickerInput> | Stock_market_dataCreateWithoutTickerInput[] | Stock_market_dataUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Stock_market_dataCreateOrConnectWithoutTickerInput | Stock_market_dataCreateOrConnectWithoutTickerInput[]
    upsert?: Stock_market_dataUpsertWithWhereUniqueWithoutTickerInput | Stock_market_dataUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Stock_market_dataCreateManyTickerInputEnvelope
    set?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
    disconnect?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
    delete?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
    connect?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
    update?: Stock_market_dataUpdateWithWhereUniqueWithoutTickerInput | Stock_market_dataUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Stock_market_dataUpdateManyWithWhereWithoutTickerInput | Stock_market_dataUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Stock_market_dataScalarWhereInput | Stock_market_dataScalarWhereInput[]
  }

  export type VolatilityUpdateManyWithoutTickerNestedInput = {
    create?: XOR<VolatilityCreateWithoutTickerInput, VolatilityUncheckedCreateWithoutTickerInput> | VolatilityCreateWithoutTickerInput[] | VolatilityUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: VolatilityCreateOrConnectWithoutTickerInput | VolatilityCreateOrConnectWithoutTickerInput[]
    upsert?: VolatilityUpsertWithWhereUniqueWithoutTickerInput | VolatilityUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: VolatilityCreateManyTickerInputEnvelope
    set?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
    disconnect?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
    delete?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
    connect?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
    update?: VolatilityUpdateWithWhereUniqueWithoutTickerInput | VolatilityUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: VolatilityUpdateManyWithWhereWithoutTickerInput | VolatilityUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: VolatilityScalarWhereInput | VolatilityScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrendingUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<TrendingCreateWithoutTickerInput, TrendingUncheckedCreateWithoutTickerInput> | TrendingCreateWithoutTickerInput[] | TrendingUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: TrendingCreateOrConnectWithoutTickerInput | TrendingCreateOrConnectWithoutTickerInput[]
    upsert?: TrendingUpsertWithWhereUniqueWithoutTickerInput | TrendingUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: TrendingCreateManyTickerInputEnvelope
    set?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
    disconnect?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
    delete?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
    connect?: TrendingWhereUniqueInput | TrendingWhereUniqueInput[]
    update?: TrendingUpdateWithWhereUniqueWithoutTickerInput | TrendingUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: TrendingUpdateManyWithWhereWithoutTickerInput | TrendingUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: TrendingScalarWhereInput | TrendingScalarWhereInput[]
  }

  export type Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Anomaly_predictionCreateWithoutTickerInput, Anomaly_predictionUncheckedCreateWithoutTickerInput> | Anomaly_predictionCreateWithoutTickerInput[] | Anomaly_predictionUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Anomaly_predictionCreateOrConnectWithoutTickerInput | Anomaly_predictionCreateOrConnectWithoutTickerInput[]
    upsert?: Anomaly_predictionUpsertWithWhereUniqueWithoutTickerInput | Anomaly_predictionUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Anomaly_predictionCreateManyTickerInputEnvelope
    set?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
    disconnect?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
    delete?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
    connect?: Anomaly_predictionWhereUniqueInput | Anomaly_predictionWhereUniqueInput[]
    update?: Anomaly_predictionUpdateWithWhereUniqueWithoutTickerInput | Anomaly_predictionUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Anomaly_predictionUpdateManyWithWhereWithoutTickerInput | Anomaly_predictionUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Anomaly_predictionScalarWhereInput | Anomaly_predictionScalarWhereInput[]
  }

  export type Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Bollinger_indicatorsCreateWithoutTickerInput, Bollinger_indicatorsUncheckedCreateWithoutTickerInput> | Bollinger_indicatorsCreateWithoutTickerInput[] | Bollinger_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Bollinger_indicatorsCreateOrConnectWithoutTickerInput | Bollinger_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Bollinger_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Bollinger_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Bollinger_indicatorsCreateManyTickerInputEnvelope
    set?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
    disconnect?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
    delete?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
    connect?: Bollinger_indicatorsWhereUniqueInput | Bollinger_indicatorsWhereUniqueInput[]
    update?: Bollinger_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Bollinger_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Bollinger_indicatorsUpdateManyWithWhereWithoutTickerInput | Bollinger_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Bollinger_indicatorsScalarWhereInput | Bollinger_indicatorsScalarWhereInput[]
  }

  export type Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput = {
    create?: XOR<Cumulative_returnCreateWithoutTickerInput, Cumulative_returnUncheckedCreateWithoutTickerInput>
    connectOrCreate?: Cumulative_returnCreateOrConnectWithoutTickerInput
    upsert?: Cumulative_returnUpsertWithoutTickerInput
    disconnect?: Cumulative_returnWhereInput | boolean
    delete?: Cumulative_returnWhereInput | boolean
    connect?: Cumulative_returnWhereUniqueInput
    update?: XOR<XOR<Cumulative_returnUpdateToOneWithWhereWithoutTickerInput, Cumulative_returnUpdateWithoutTickerInput>, Cumulative_returnUncheckedUpdateWithoutTickerInput>
  }

  export type Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Ema_indicatorsCreateWithoutTickerInput, Ema_indicatorsUncheckedCreateWithoutTickerInput> | Ema_indicatorsCreateWithoutTickerInput[] | Ema_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Ema_indicatorsCreateOrConnectWithoutTickerInput | Ema_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Ema_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Ema_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Ema_indicatorsCreateManyTickerInputEnvelope
    set?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
    disconnect?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
    delete?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
    connect?: Ema_indicatorsWhereUniqueInput | Ema_indicatorsWhereUniqueInput[]
    update?: Ema_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Ema_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Ema_indicatorsUpdateManyWithWhereWithoutTickerInput | Ema_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Ema_indicatorsScalarWhereInput | Ema_indicatorsScalarWhereInput[]
  }

  export type Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Indicators_technicalCreateWithoutTickerInput, Indicators_technicalUncheckedCreateWithoutTickerInput> | Indicators_technicalCreateWithoutTickerInput[] | Indicators_technicalUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Indicators_technicalCreateOrConnectWithoutTickerInput | Indicators_technicalCreateOrConnectWithoutTickerInput[]
    upsert?: Indicators_technicalUpsertWithWhereUniqueWithoutTickerInput | Indicators_technicalUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Indicators_technicalCreateManyTickerInputEnvelope
    set?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
    disconnect?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
    delete?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
    connect?: Indicators_technicalWhereUniqueInput | Indicators_technicalWhereUniqueInput[]
    update?: Indicators_technicalUpdateWithWhereUniqueWithoutTickerInput | Indicators_technicalUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Indicators_technicalUpdateManyWithWhereWithoutTickerInput | Indicators_technicalUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Indicators_technicalScalarWhereInput | Indicators_technicalScalarWhereInput[]
  }

  export type Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Macd_indicatorsCreateWithoutTickerInput, Macd_indicatorsUncheckedCreateWithoutTickerInput> | Macd_indicatorsCreateWithoutTickerInput[] | Macd_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Macd_indicatorsCreateOrConnectWithoutTickerInput | Macd_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Macd_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Macd_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Macd_indicatorsCreateManyTickerInputEnvelope
    set?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
    disconnect?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
    delete?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
    connect?: Macd_indicatorsWhereUniqueInput | Macd_indicatorsWhereUniqueInput[]
    update?: Macd_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Macd_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Macd_indicatorsUpdateManyWithWhereWithoutTickerInput | Macd_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Macd_indicatorsScalarWhereInput | Macd_indicatorsScalarWhereInput[]
  }

  export type Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Rsi_indicatorsCreateWithoutTickerInput, Rsi_indicatorsUncheckedCreateWithoutTickerInput> | Rsi_indicatorsCreateWithoutTickerInput[] | Rsi_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Rsi_indicatorsCreateOrConnectWithoutTickerInput | Rsi_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Rsi_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Rsi_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Rsi_indicatorsCreateManyTickerInputEnvelope
    set?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
    disconnect?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
    delete?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
    connect?: Rsi_indicatorsWhereUniqueInput | Rsi_indicatorsWhereUniqueInput[]
    update?: Rsi_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Rsi_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Rsi_indicatorsUpdateManyWithWhereWithoutTickerInput | Rsi_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Rsi_indicatorsScalarWhereInput | Rsi_indicatorsScalarWhereInput[]
  }

  export type Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Sma_indicatorsCreateWithoutTickerInput, Sma_indicatorsUncheckedCreateWithoutTickerInput> | Sma_indicatorsCreateWithoutTickerInput[] | Sma_indicatorsUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Sma_indicatorsCreateOrConnectWithoutTickerInput | Sma_indicatorsCreateOrConnectWithoutTickerInput[]
    upsert?: Sma_indicatorsUpsertWithWhereUniqueWithoutTickerInput | Sma_indicatorsUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Sma_indicatorsCreateManyTickerInputEnvelope
    set?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
    disconnect?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
    delete?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
    connect?: Sma_indicatorsWhereUniqueInput | Sma_indicatorsWhereUniqueInput[]
    update?: Sma_indicatorsUpdateWithWhereUniqueWithoutTickerInput | Sma_indicatorsUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Sma_indicatorsUpdateManyWithWhereWithoutTickerInput | Sma_indicatorsUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Sma_indicatorsScalarWhereInput | Sma_indicatorsScalarWhereInput[]
  }

  export type StatisticUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<StatisticCreateWithoutTickerInput, StatisticUncheckedCreateWithoutTickerInput> | StatisticCreateWithoutTickerInput[] | StatisticUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutTickerInput | StatisticCreateOrConnectWithoutTickerInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutTickerInput | StatisticUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: StatisticCreateManyTickerInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutTickerInput | StatisticUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutTickerInput | StatisticUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<Stock_market_dataCreateWithoutTickerInput, Stock_market_dataUncheckedCreateWithoutTickerInput> | Stock_market_dataCreateWithoutTickerInput[] | Stock_market_dataUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: Stock_market_dataCreateOrConnectWithoutTickerInput | Stock_market_dataCreateOrConnectWithoutTickerInput[]
    upsert?: Stock_market_dataUpsertWithWhereUniqueWithoutTickerInput | Stock_market_dataUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: Stock_market_dataCreateManyTickerInputEnvelope
    set?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
    disconnect?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
    delete?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
    connect?: Stock_market_dataWhereUniqueInput | Stock_market_dataWhereUniqueInput[]
    update?: Stock_market_dataUpdateWithWhereUniqueWithoutTickerInput | Stock_market_dataUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: Stock_market_dataUpdateManyWithWhereWithoutTickerInput | Stock_market_dataUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: Stock_market_dataScalarWhereInput | Stock_market_dataScalarWhereInput[]
  }

  export type VolatilityUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<VolatilityCreateWithoutTickerInput, VolatilityUncheckedCreateWithoutTickerInput> | VolatilityCreateWithoutTickerInput[] | VolatilityUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: VolatilityCreateOrConnectWithoutTickerInput | VolatilityCreateOrConnectWithoutTickerInput[]
    upsert?: VolatilityUpsertWithWhereUniqueWithoutTickerInput | VolatilityUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: VolatilityCreateManyTickerInputEnvelope
    set?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
    disconnect?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
    delete?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
    connect?: VolatilityWhereUniqueInput | VolatilityWhereUniqueInput[]
    update?: VolatilityUpdateWithWhereUniqueWithoutTickerInput | VolatilityUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: VolatilityUpdateManyWithWhereWithoutTickerInput | VolatilityUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: VolatilityScalarWhereInput | VolatilityScalarWhereInput[]
  }

  export type TickerCreateNestedOneWithoutStock_market_dataInput = {
    create?: XOR<TickerCreateWithoutStock_market_dataInput, TickerUncheckedCreateWithoutStock_market_dataInput>
    connectOrCreate?: TickerCreateOrConnectWithoutStock_market_dataInput
    connect?: TickerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TickerUpdateOneRequiredWithoutStock_market_dataNestedInput = {
    create?: XOR<TickerCreateWithoutStock_market_dataInput, TickerUncheckedCreateWithoutStock_market_dataInput>
    connectOrCreate?: TickerCreateOrConnectWithoutStock_market_dataInput
    upsert?: TickerUpsertWithoutStock_market_dataInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutStock_market_dataInput, TickerUpdateWithoutStock_market_dataInput>, TickerUncheckedUpdateWithoutStock_market_dataInput>
  }

  export type TickerCreateNestedOneWithoutCumulative_returnInput = {
    create?: XOR<TickerCreateWithoutCumulative_returnInput, TickerUncheckedCreateWithoutCumulative_returnInput>
    connectOrCreate?: TickerCreateOrConnectWithoutCumulative_returnInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutCumulative_returnNestedInput = {
    create?: XOR<TickerCreateWithoutCumulative_returnInput, TickerUncheckedCreateWithoutCumulative_returnInput>
    connectOrCreate?: TickerCreateOrConnectWithoutCumulative_returnInput
    upsert?: TickerUpsertWithoutCumulative_returnInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutCumulative_returnInput, TickerUpdateWithoutCumulative_returnInput>, TickerUncheckedUpdateWithoutCumulative_returnInput>
  }

  export type TickerCreateNestedOneWithoutTrendingInput = {
    create?: XOR<TickerCreateWithoutTrendingInput, TickerUncheckedCreateWithoutTrendingInput>
    connectOrCreate?: TickerCreateOrConnectWithoutTrendingInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutTrendingNestedInput = {
    create?: XOR<TickerCreateWithoutTrendingInput, TickerUncheckedCreateWithoutTrendingInput>
    connectOrCreate?: TickerCreateOrConnectWithoutTrendingInput
    upsert?: TickerUpsertWithoutTrendingInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutTrendingInput, TickerUpdateWithoutTrendingInput>, TickerUncheckedUpdateWithoutTrendingInput>
  }

  export type TickerCreateNestedOneWithoutVolatilityInput = {
    create?: XOR<TickerCreateWithoutVolatilityInput, TickerUncheckedCreateWithoutVolatilityInput>
    connectOrCreate?: TickerCreateOrConnectWithoutVolatilityInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutVolatilityNestedInput = {
    create?: XOR<TickerCreateWithoutVolatilityInput, TickerUncheckedCreateWithoutVolatilityInput>
    connectOrCreate?: TickerCreateOrConnectWithoutVolatilityInput
    upsert?: TickerUpsertWithoutVolatilityInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutVolatilityInput, TickerUpdateWithoutVolatilityInput>, TickerUncheckedUpdateWithoutVolatilityInput>
  }

  export type TickerCreateNestedOneWithoutAnomaly_predictionInput = {
    create?: XOR<TickerCreateWithoutAnomaly_predictionInput, TickerUncheckedCreateWithoutAnomaly_predictionInput>
    connectOrCreate?: TickerCreateOrConnectWithoutAnomaly_predictionInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutAnomaly_predictionNestedInput = {
    create?: XOR<TickerCreateWithoutAnomaly_predictionInput, TickerUncheckedCreateWithoutAnomaly_predictionInput>
    connectOrCreate?: TickerCreateOrConnectWithoutAnomaly_predictionInput
    upsert?: TickerUpsertWithoutAnomaly_predictionInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutAnomaly_predictionInput, TickerUpdateWithoutAnomaly_predictionInput>, TickerUncheckedUpdateWithoutAnomaly_predictionInput>
  }

  export type TickerCreateNestedOneWithoutEma_indicatorsInput = {
    create?: XOR<TickerCreateWithoutEma_indicatorsInput, TickerUncheckedCreateWithoutEma_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutEma_indicatorsInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutEma_indicatorsNestedInput = {
    create?: XOR<TickerCreateWithoutEma_indicatorsInput, TickerUncheckedCreateWithoutEma_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutEma_indicatorsInput
    upsert?: TickerUpsertWithoutEma_indicatorsInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutEma_indicatorsInput, TickerUpdateWithoutEma_indicatorsInput>, TickerUncheckedUpdateWithoutEma_indicatorsInput>
  }

  export type TickerCreateNestedOneWithoutSma_indicatorsInput = {
    create?: XOR<TickerCreateWithoutSma_indicatorsInput, TickerUncheckedCreateWithoutSma_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutSma_indicatorsInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutSma_indicatorsNestedInput = {
    create?: XOR<TickerCreateWithoutSma_indicatorsInput, TickerUncheckedCreateWithoutSma_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutSma_indicatorsInput
    upsert?: TickerUpsertWithoutSma_indicatorsInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutSma_indicatorsInput, TickerUpdateWithoutSma_indicatorsInput>, TickerUncheckedUpdateWithoutSma_indicatorsInput>
  }

  export type TickerCreateNestedOneWithoutRsi_indicatorsInput = {
    create?: XOR<TickerCreateWithoutRsi_indicatorsInput, TickerUncheckedCreateWithoutRsi_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutRsi_indicatorsInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutRsi_indicatorsNestedInput = {
    create?: XOR<TickerCreateWithoutRsi_indicatorsInput, TickerUncheckedCreateWithoutRsi_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutRsi_indicatorsInput
    upsert?: TickerUpsertWithoutRsi_indicatorsInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutRsi_indicatorsInput, TickerUpdateWithoutRsi_indicatorsInput>, TickerUncheckedUpdateWithoutRsi_indicatorsInput>
  }

  export type TickerCreateNestedOneWithoutMacd_indicatorsInput = {
    create?: XOR<TickerCreateWithoutMacd_indicatorsInput, TickerUncheckedCreateWithoutMacd_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutMacd_indicatorsInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutMacd_indicatorsNestedInput = {
    create?: XOR<TickerCreateWithoutMacd_indicatorsInput, TickerUncheckedCreateWithoutMacd_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutMacd_indicatorsInput
    upsert?: TickerUpsertWithoutMacd_indicatorsInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutMacd_indicatorsInput, TickerUpdateWithoutMacd_indicatorsInput>, TickerUncheckedUpdateWithoutMacd_indicatorsInput>
  }

  export type TickerCreateNestedOneWithoutBollinger_indicatorsInput = {
    create?: XOR<TickerCreateWithoutBollinger_indicatorsInput, TickerUncheckedCreateWithoutBollinger_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutBollinger_indicatorsInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutBollinger_indicatorsNestedInput = {
    create?: XOR<TickerCreateWithoutBollinger_indicatorsInput, TickerUncheckedCreateWithoutBollinger_indicatorsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutBollinger_indicatorsInput
    upsert?: TickerUpsertWithoutBollinger_indicatorsInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutBollinger_indicatorsInput, TickerUpdateWithoutBollinger_indicatorsInput>, TickerUncheckedUpdateWithoutBollinger_indicatorsInput>
  }

  export type TickerCreateNestedOneWithoutIndicators_technicalInput = {
    create?: XOR<TickerCreateWithoutIndicators_technicalInput, TickerUncheckedCreateWithoutIndicators_technicalInput>
    connectOrCreate?: TickerCreateOrConnectWithoutIndicators_technicalInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutIndicators_technicalNestedInput = {
    create?: XOR<TickerCreateWithoutIndicators_technicalInput, TickerUncheckedCreateWithoutIndicators_technicalInput>
    connectOrCreate?: TickerCreateOrConnectWithoutIndicators_technicalInput
    upsert?: TickerUpsertWithoutIndicators_technicalInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutIndicators_technicalInput, TickerUpdateWithoutIndicators_technicalInput>, TickerUncheckedUpdateWithoutIndicators_technicalInput>
  }

  export type TickerCreateNestedOneWithoutStatisticInput = {
    create?: XOR<TickerCreateWithoutStatisticInput, TickerUncheckedCreateWithoutStatisticInput>
    connectOrCreate?: TickerCreateOrConnectWithoutStatisticInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerUpdateOneRequiredWithoutStatisticNestedInput = {
    create?: XOR<TickerCreateWithoutStatisticInput, TickerUncheckedCreateWithoutStatisticInput>
    connectOrCreate?: TickerCreateOrConnectWithoutStatisticInput
    upsert?: TickerUpsertWithoutStatisticInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutStatisticInput, TickerUpdateWithoutStatisticInput>, TickerUncheckedUpdateWithoutStatisticInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TrendingCreateWithoutTickerInput = {
    date: Date | string
    trend: string
    trend_close: number
    trend_open: number
    trend_adj_close: number
  }

  export type TrendingUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    trend: string
    trend_close: number
    trend_open: number
    trend_adj_close: number
  }

  export type TrendingCreateOrConnectWithoutTickerInput = {
    where: TrendingWhereUniqueInput
    create: XOR<TrendingCreateWithoutTickerInput, TrendingUncheckedCreateWithoutTickerInput>
  }

  export type TrendingCreateManyTickerInputEnvelope = {
    data: TrendingCreateManyTickerInput | TrendingCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type Anomaly_predictionCreateWithoutTickerInput = {
    date: Date | string
    anomaly_price: number
    anomaly_volume: number
  }

  export type Anomaly_predictionUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    anomaly_price: number
    anomaly_volume: number
  }

  export type Anomaly_predictionCreateOrConnectWithoutTickerInput = {
    where: Anomaly_predictionWhereUniqueInput
    create: XOR<Anomaly_predictionCreateWithoutTickerInput, Anomaly_predictionUncheckedCreateWithoutTickerInput>
  }

  export type Anomaly_predictionCreateManyTickerInputEnvelope = {
    data: Anomaly_predictionCreateManyTickerInput | Anomaly_predictionCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type Bollinger_indicatorsCreateWithoutTickerInput = {
    date: Date | string
    bollinger_5: number
    bollinger_10: number
    bollinger_20: number
    bollinger_50: number
    bollinger_100: number
    bollinger_200: number
  }

  export type Bollinger_indicatorsUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    bollinger_5: number
    bollinger_10: number
    bollinger_20: number
    bollinger_50: number
    bollinger_100: number
    bollinger_200: number
  }

  export type Bollinger_indicatorsCreateOrConnectWithoutTickerInput = {
    where: Bollinger_indicatorsWhereUniqueInput
    create: XOR<Bollinger_indicatorsCreateWithoutTickerInput, Bollinger_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Bollinger_indicatorsCreateManyTickerInputEnvelope = {
    data: Bollinger_indicatorsCreateManyTickerInput | Bollinger_indicatorsCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type Cumulative_returnCreateWithoutTickerInput = {
    date: Date | string
    cum_return_open: number
    cum_return_high: number
    cum_return_low: number
    cum_return_close: number
    cum_return_volume: number
    cum_return_adj_close: number
  }

  export type Cumulative_returnUncheckedCreateWithoutTickerInput = {
    date: Date | string
    cum_return_open: number
    cum_return_high: number
    cum_return_low: number
    cum_return_close: number
    cum_return_volume: number
    cum_return_adj_close: number
  }

  export type Cumulative_returnCreateOrConnectWithoutTickerInput = {
    where: Cumulative_returnWhereUniqueInput
    create: XOR<Cumulative_returnCreateWithoutTickerInput, Cumulative_returnUncheckedCreateWithoutTickerInput>
  }

  export type Ema_indicatorsCreateWithoutTickerInput = {
    date: Date | string
    ema_5: number
    ema_10: number
    ema_20: number
    ema_50: number
    ema_100: number
    ema_200: number
  }

  export type Ema_indicatorsUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    ema_5: number
    ema_10: number
    ema_20: number
    ema_50: number
    ema_100: number
    ema_200: number
  }

  export type Ema_indicatorsCreateOrConnectWithoutTickerInput = {
    where: Ema_indicatorsWhereUniqueInput
    create: XOR<Ema_indicatorsCreateWithoutTickerInput, Ema_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Ema_indicatorsCreateManyTickerInputEnvelope = {
    data: Ema_indicatorsCreateManyTickerInput | Ema_indicatorsCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type Indicators_technicalCreateWithoutTickerInput = {
    date: Date | string
    rsi: number
    macd: number
    bollinger: number
    sma: number
    ema: number
  }

  export type Indicators_technicalUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    rsi: number
    macd: number
    bollinger: number
    sma: number
    ema: number
  }

  export type Indicators_technicalCreateOrConnectWithoutTickerInput = {
    where: Indicators_technicalWhereUniqueInput
    create: XOR<Indicators_technicalCreateWithoutTickerInput, Indicators_technicalUncheckedCreateWithoutTickerInput>
  }

  export type Indicators_technicalCreateManyTickerInputEnvelope = {
    data: Indicators_technicalCreateManyTickerInput | Indicators_technicalCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type Macd_indicatorsCreateWithoutTickerInput = {
    date: Date | string
    macd_5: number
    macd_10: number
    macd_20: number
    macd_50: number
    macd_100: number
    macd_200: number
  }

  export type Macd_indicatorsUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    macd_5: number
    macd_10: number
    macd_20: number
    macd_50: number
    macd_100: number
    macd_200: number
  }

  export type Macd_indicatorsCreateOrConnectWithoutTickerInput = {
    where: Macd_indicatorsWhereUniqueInput
    create: XOR<Macd_indicatorsCreateWithoutTickerInput, Macd_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Macd_indicatorsCreateManyTickerInputEnvelope = {
    data: Macd_indicatorsCreateManyTickerInput | Macd_indicatorsCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type Rsi_indicatorsCreateWithoutTickerInput = {
    date: Date | string
    rsi_5: number
    rsi_10: number
    rsi_20: number
    rsi_50: number
    rsi_100: number
    rsi_200: number
  }

  export type Rsi_indicatorsUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    rsi_5: number
    rsi_10: number
    rsi_20: number
    rsi_50: number
    rsi_100: number
    rsi_200: number
  }

  export type Rsi_indicatorsCreateOrConnectWithoutTickerInput = {
    where: Rsi_indicatorsWhereUniqueInput
    create: XOR<Rsi_indicatorsCreateWithoutTickerInput, Rsi_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Rsi_indicatorsCreateManyTickerInputEnvelope = {
    data: Rsi_indicatorsCreateManyTickerInput | Rsi_indicatorsCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type Sma_indicatorsCreateWithoutTickerInput = {
    date: Date | string
    sma_5: number
    sma_10: number
    sma_20: number
    sma_50: number
    sma_100: number
    sma_200: number
  }

  export type Sma_indicatorsUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    sma_5: number
    sma_10: number
    sma_20: number
    sma_50: number
    sma_100: number
    sma_200: number
  }

  export type Sma_indicatorsCreateOrConnectWithoutTickerInput = {
    where: Sma_indicatorsWhereUniqueInput
    create: XOR<Sma_indicatorsCreateWithoutTickerInput, Sma_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Sma_indicatorsCreateManyTickerInputEnvelope = {
    data: Sma_indicatorsCreateManyTickerInput | Sma_indicatorsCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type StatisticCreateWithoutTickerInput = {
    date: Date | string
    avg_price: number
    avg_volume: number
    median_price: number
    median_volume: number
    min_price: number
    min_volume: number
    max_price: number
    max_volume: number
    std_price: number
    std_volume: number
  }

  export type StatisticUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    avg_price: number
    avg_volume: number
    median_price: number
    median_volume: number
    min_price: number
    min_volume: number
    max_price: number
    max_volume: number
    std_price: number
    std_volume: number
  }

  export type StatisticCreateOrConnectWithoutTickerInput = {
    where: StatisticWhereUniqueInput
    create: XOR<StatisticCreateWithoutTickerInput, StatisticUncheckedCreateWithoutTickerInput>
  }

  export type StatisticCreateManyTickerInputEnvelope = {
    data: StatisticCreateManyTickerInput | StatisticCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type Stock_market_dataCreateWithoutTickerInput = {
    date: Date | string
    open: number
    high: number
    low: number
    close: number
    volume: number
    adj_close: number
  }

  export type Stock_market_dataUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    open: number
    high: number
    low: number
    close: number
    volume: number
    adj_close: number
  }

  export type Stock_market_dataCreateOrConnectWithoutTickerInput = {
    where: Stock_market_dataWhereUniqueInput
    create: XOR<Stock_market_dataCreateWithoutTickerInput, Stock_market_dataUncheckedCreateWithoutTickerInput>
  }

  export type Stock_market_dataCreateManyTickerInputEnvelope = {
    data: Stock_market_dataCreateManyTickerInput | Stock_market_dataCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type VolatilityCreateWithoutTickerInput = {
    date: Date | string
    volatility: number
    volatility_open: number
    volatility_close: number
    volatility_adj_close: number
  }

  export type VolatilityUncheckedCreateWithoutTickerInput = {
    id?: number
    date: Date | string
    volatility: number
    volatility_open: number
    volatility_close: number
    volatility_adj_close: number
  }

  export type VolatilityCreateOrConnectWithoutTickerInput = {
    where: VolatilityWhereUniqueInput
    create: XOR<VolatilityCreateWithoutTickerInput, VolatilityUncheckedCreateWithoutTickerInput>
  }

  export type VolatilityCreateManyTickerInputEnvelope = {
    data: VolatilityCreateManyTickerInput | VolatilityCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type TrendingUpsertWithWhereUniqueWithoutTickerInput = {
    where: TrendingWhereUniqueInput
    update: XOR<TrendingUpdateWithoutTickerInput, TrendingUncheckedUpdateWithoutTickerInput>
    create: XOR<TrendingCreateWithoutTickerInput, TrendingUncheckedCreateWithoutTickerInput>
  }

  export type TrendingUpdateWithWhereUniqueWithoutTickerInput = {
    where: TrendingWhereUniqueInput
    data: XOR<TrendingUpdateWithoutTickerInput, TrendingUncheckedUpdateWithoutTickerInput>
  }

  export type TrendingUpdateManyWithWhereWithoutTickerInput = {
    where: TrendingScalarWhereInput
    data: XOR<TrendingUpdateManyMutationInput, TrendingUncheckedUpdateManyWithoutTickerInput>
  }

  export type TrendingScalarWhereInput = {
    AND?: TrendingScalarWhereInput | TrendingScalarWhereInput[]
    OR?: TrendingScalarWhereInput[]
    NOT?: TrendingScalarWhereInput | TrendingScalarWhereInput[]
    id?: IntFilter<"Trending"> | number
    id_ticker?: IntFilter<"Trending"> | number
    date?: DateTimeFilter<"Trending"> | Date | string
    trend?: StringFilter<"Trending"> | string
    trend_close?: FloatFilter<"Trending"> | number
    trend_open?: FloatFilter<"Trending"> | number
    trend_adj_close?: FloatFilter<"Trending"> | number
  }

  export type Anomaly_predictionUpsertWithWhereUniqueWithoutTickerInput = {
    where: Anomaly_predictionWhereUniqueInput
    update: XOR<Anomaly_predictionUpdateWithoutTickerInput, Anomaly_predictionUncheckedUpdateWithoutTickerInput>
    create: XOR<Anomaly_predictionCreateWithoutTickerInput, Anomaly_predictionUncheckedCreateWithoutTickerInput>
  }

  export type Anomaly_predictionUpdateWithWhereUniqueWithoutTickerInput = {
    where: Anomaly_predictionWhereUniqueInput
    data: XOR<Anomaly_predictionUpdateWithoutTickerInput, Anomaly_predictionUncheckedUpdateWithoutTickerInput>
  }

  export type Anomaly_predictionUpdateManyWithWhereWithoutTickerInput = {
    where: Anomaly_predictionScalarWhereInput
    data: XOR<Anomaly_predictionUpdateManyMutationInput, Anomaly_predictionUncheckedUpdateManyWithoutTickerInput>
  }

  export type Anomaly_predictionScalarWhereInput = {
    AND?: Anomaly_predictionScalarWhereInput | Anomaly_predictionScalarWhereInput[]
    OR?: Anomaly_predictionScalarWhereInput[]
    NOT?: Anomaly_predictionScalarWhereInput | Anomaly_predictionScalarWhereInput[]
    id?: IntFilter<"Anomaly_prediction"> | number
    id_ticker?: IntFilter<"Anomaly_prediction"> | number
    date?: DateTimeFilter<"Anomaly_prediction"> | Date | string
    anomaly_price?: FloatFilter<"Anomaly_prediction"> | number
    anomaly_volume?: FloatFilter<"Anomaly_prediction"> | number
  }

  export type Bollinger_indicatorsUpsertWithWhereUniqueWithoutTickerInput = {
    where: Bollinger_indicatorsWhereUniqueInput
    update: XOR<Bollinger_indicatorsUpdateWithoutTickerInput, Bollinger_indicatorsUncheckedUpdateWithoutTickerInput>
    create: XOR<Bollinger_indicatorsCreateWithoutTickerInput, Bollinger_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Bollinger_indicatorsUpdateWithWhereUniqueWithoutTickerInput = {
    where: Bollinger_indicatorsWhereUniqueInput
    data: XOR<Bollinger_indicatorsUpdateWithoutTickerInput, Bollinger_indicatorsUncheckedUpdateWithoutTickerInput>
  }

  export type Bollinger_indicatorsUpdateManyWithWhereWithoutTickerInput = {
    where: Bollinger_indicatorsScalarWhereInput
    data: XOR<Bollinger_indicatorsUpdateManyMutationInput, Bollinger_indicatorsUncheckedUpdateManyWithoutTickerInput>
  }

  export type Bollinger_indicatorsScalarWhereInput = {
    AND?: Bollinger_indicatorsScalarWhereInput | Bollinger_indicatorsScalarWhereInput[]
    OR?: Bollinger_indicatorsScalarWhereInput[]
    NOT?: Bollinger_indicatorsScalarWhereInput | Bollinger_indicatorsScalarWhereInput[]
    id?: IntFilter<"Bollinger_indicators"> | number
    id_ticker?: IntFilter<"Bollinger_indicators"> | number
    date?: DateTimeFilter<"Bollinger_indicators"> | Date | string
    bollinger_5?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_10?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_20?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_50?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_100?: FloatFilter<"Bollinger_indicators"> | number
    bollinger_200?: FloatFilter<"Bollinger_indicators"> | number
  }

  export type Cumulative_returnUpsertWithoutTickerInput = {
    update: XOR<Cumulative_returnUpdateWithoutTickerInput, Cumulative_returnUncheckedUpdateWithoutTickerInput>
    create: XOR<Cumulative_returnCreateWithoutTickerInput, Cumulative_returnUncheckedCreateWithoutTickerInput>
    where?: Cumulative_returnWhereInput
  }

  export type Cumulative_returnUpdateToOneWithWhereWithoutTickerInput = {
    where?: Cumulative_returnWhereInput
    data: XOR<Cumulative_returnUpdateWithoutTickerInput, Cumulative_returnUncheckedUpdateWithoutTickerInput>
  }

  export type Cumulative_returnUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cum_return_open?: FloatFieldUpdateOperationsInput | number
    cum_return_high?: FloatFieldUpdateOperationsInput | number
    cum_return_low?: FloatFieldUpdateOperationsInput | number
    cum_return_close?: FloatFieldUpdateOperationsInput | number
    cum_return_volume?: FloatFieldUpdateOperationsInput | number
    cum_return_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Cumulative_returnUncheckedUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cum_return_open?: FloatFieldUpdateOperationsInput | number
    cum_return_high?: FloatFieldUpdateOperationsInput | number
    cum_return_low?: FloatFieldUpdateOperationsInput | number
    cum_return_close?: FloatFieldUpdateOperationsInput | number
    cum_return_volume?: FloatFieldUpdateOperationsInput | number
    cum_return_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Ema_indicatorsUpsertWithWhereUniqueWithoutTickerInput = {
    where: Ema_indicatorsWhereUniqueInput
    update: XOR<Ema_indicatorsUpdateWithoutTickerInput, Ema_indicatorsUncheckedUpdateWithoutTickerInput>
    create: XOR<Ema_indicatorsCreateWithoutTickerInput, Ema_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Ema_indicatorsUpdateWithWhereUniqueWithoutTickerInput = {
    where: Ema_indicatorsWhereUniqueInput
    data: XOR<Ema_indicatorsUpdateWithoutTickerInput, Ema_indicatorsUncheckedUpdateWithoutTickerInput>
  }

  export type Ema_indicatorsUpdateManyWithWhereWithoutTickerInput = {
    where: Ema_indicatorsScalarWhereInput
    data: XOR<Ema_indicatorsUpdateManyMutationInput, Ema_indicatorsUncheckedUpdateManyWithoutTickerInput>
  }

  export type Ema_indicatorsScalarWhereInput = {
    AND?: Ema_indicatorsScalarWhereInput | Ema_indicatorsScalarWhereInput[]
    OR?: Ema_indicatorsScalarWhereInput[]
    NOT?: Ema_indicatorsScalarWhereInput | Ema_indicatorsScalarWhereInput[]
    id?: IntFilter<"Ema_indicators"> | number
    id_ticker?: IntFilter<"Ema_indicators"> | number
    date?: DateTimeFilter<"Ema_indicators"> | Date | string
    ema_5?: FloatFilter<"Ema_indicators"> | number
    ema_10?: FloatFilter<"Ema_indicators"> | number
    ema_20?: FloatFilter<"Ema_indicators"> | number
    ema_50?: FloatFilter<"Ema_indicators"> | number
    ema_100?: FloatFilter<"Ema_indicators"> | number
    ema_200?: FloatFilter<"Ema_indicators"> | number
  }

  export type Indicators_technicalUpsertWithWhereUniqueWithoutTickerInput = {
    where: Indicators_technicalWhereUniqueInput
    update: XOR<Indicators_technicalUpdateWithoutTickerInput, Indicators_technicalUncheckedUpdateWithoutTickerInput>
    create: XOR<Indicators_technicalCreateWithoutTickerInput, Indicators_technicalUncheckedCreateWithoutTickerInput>
  }

  export type Indicators_technicalUpdateWithWhereUniqueWithoutTickerInput = {
    where: Indicators_technicalWhereUniqueInput
    data: XOR<Indicators_technicalUpdateWithoutTickerInput, Indicators_technicalUncheckedUpdateWithoutTickerInput>
  }

  export type Indicators_technicalUpdateManyWithWhereWithoutTickerInput = {
    where: Indicators_technicalScalarWhereInput
    data: XOR<Indicators_technicalUpdateManyMutationInput, Indicators_technicalUncheckedUpdateManyWithoutTickerInput>
  }

  export type Indicators_technicalScalarWhereInput = {
    AND?: Indicators_technicalScalarWhereInput | Indicators_technicalScalarWhereInput[]
    OR?: Indicators_technicalScalarWhereInput[]
    NOT?: Indicators_technicalScalarWhereInput | Indicators_technicalScalarWhereInput[]
    id?: IntFilter<"Indicators_technical"> | number
    id_ticker?: IntFilter<"Indicators_technical"> | number
    date?: DateTimeFilter<"Indicators_technical"> | Date | string
    rsi?: FloatFilter<"Indicators_technical"> | number
    macd?: FloatFilter<"Indicators_technical"> | number
    bollinger?: FloatFilter<"Indicators_technical"> | number
    sma?: FloatFilter<"Indicators_technical"> | number
    ema?: FloatFilter<"Indicators_technical"> | number
  }

  export type Macd_indicatorsUpsertWithWhereUniqueWithoutTickerInput = {
    where: Macd_indicatorsWhereUniqueInput
    update: XOR<Macd_indicatorsUpdateWithoutTickerInput, Macd_indicatorsUncheckedUpdateWithoutTickerInput>
    create: XOR<Macd_indicatorsCreateWithoutTickerInput, Macd_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Macd_indicatorsUpdateWithWhereUniqueWithoutTickerInput = {
    where: Macd_indicatorsWhereUniqueInput
    data: XOR<Macd_indicatorsUpdateWithoutTickerInput, Macd_indicatorsUncheckedUpdateWithoutTickerInput>
  }

  export type Macd_indicatorsUpdateManyWithWhereWithoutTickerInput = {
    where: Macd_indicatorsScalarWhereInput
    data: XOR<Macd_indicatorsUpdateManyMutationInput, Macd_indicatorsUncheckedUpdateManyWithoutTickerInput>
  }

  export type Macd_indicatorsScalarWhereInput = {
    AND?: Macd_indicatorsScalarWhereInput | Macd_indicatorsScalarWhereInput[]
    OR?: Macd_indicatorsScalarWhereInput[]
    NOT?: Macd_indicatorsScalarWhereInput | Macd_indicatorsScalarWhereInput[]
    id?: IntFilter<"Macd_indicators"> | number
    id_ticker?: IntFilter<"Macd_indicators"> | number
    date?: DateTimeFilter<"Macd_indicators"> | Date | string
    macd_5?: FloatFilter<"Macd_indicators"> | number
    macd_10?: FloatFilter<"Macd_indicators"> | number
    macd_20?: FloatFilter<"Macd_indicators"> | number
    macd_50?: FloatFilter<"Macd_indicators"> | number
    macd_100?: FloatFilter<"Macd_indicators"> | number
    macd_200?: FloatFilter<"Macd_indicators"> | number
  }

  export type Rsi_indicatorsUpsertWithWhereUniqueWithoutTickerInput = {
    where: Rsi_indicatorsWhereUniqueInput
    update: XOR<Rsi_indicatorsUpdateWithoutTickerInput, Rsi_indicatorsUncheckedUpdateWithoutTickerInput>
    create: XOR<Rsi_indicatorsCreateWithoutTickerInput, Rsi_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Rsi_indicatorsUpdateWithWhereUniqueWithoutTickerInput = {
    where: Rsi_indicatorsWhereUniqueInput
    data: XOR<Rsi_indicatorsUpdateWithoutTickerInput, Rsi_indicatorsUncheckedUpdateWithoutTickerInput>
  }

  export type Rsi_indicatorsUpdateManyWithWhereWithoutTickerInput = {
    where: Rsi_indicatorsScalarWhereInput
    data: XOR<Rsi_indicatorsUpdateManyMutationInput, Rsi_indicatorsUncheckedUpdateManyWithoutTickerInput>
  }

  export type Rsi_indicatorsScalarWhereInput = {
    AND?: Rsi_indicatorsScalarWhereInput | Rsi_indicatorsScalarWhereInput[]
    OR?: Rsi_indicatorsScalarWhereInput[]
    NOT?: Rsi_indicatorsScalarWhereInput | Rsi_indicatorsScalarWhereInput[]
    id?: IntFilter<"Rsi_indicators"> | number
    id_ticker?: IntFilter<"Rsi_indicators"> | number
    date?: DateTimeFilter<"Rsi_indicators"> | Date | string
    rsi_5?: FloatFilter<"Rsi_indicators"> | number
    rsi_10?: FloatFilter<"Rsi_indicators"> | number
    rsi_20?: FloatFilter<"Rsi_indicators"> | number
    rsi_50?: FloatFilter<"Rsi_indicators"> | number
    rsi_100?: FloatFilter<"Rsi_indicators"> | number
    rsi_200?: FloatFilter<"Rsi_indicators"> | number
  }

  export type Sma_indicatorsUpsertWithWhereUniqueWithoutTickerInput = {
    where: Sma_indicatorsWhereUniqueInput
    update: XOR<Sma_indicatorsUpdateWithoutTickerInput, Sma_indicatorsUncheckedUpdateWithoutTickerInput>
    create: XOR<Sma_indicatorsCreateWithoutTickerInput, Sma_indicatorsUncheckedCreateWithoutTickerInput>
  }

  export type Sma_indicatorsUpdateWithWhereUniqueWithoutTickerInput = {
    where: Sma_indicatorsWhereUniqueInput
    data: XOR<Sma_indicatorsUpdateWithoutTickerInput, Sma_indicatorsUncheckedUpdateWithoutTickerInput>
  }

  export type Sma_indicatorsUpdateManyWithWhereWithoutTickerInput = {
    where: Sma_indicatorsScalarWhereInput
    data: XOR<Sma_indicatorsUpdateManyMutationInput, Sma_indicatorsUncheckedUpdateManyWithoutTickerInput>
  }

  export type Sma_indicatorsScalarWhereInput = {
    AND?: Sma_indicatorsScalarWhereInput | Sma_indicatorsScalarWhereInput[]
    OR?: Sma_indicatorsScalarWhereInput[]
    NOT?: Sma_indicatorsScalarWhereInput | Sma_indicatorsScalarWhereInput[]
    id?: IntFilter<"Sma_indicators"> | number
    id_ticker?: IntFilter<"Sma_indicators"> | number
    date?: DateTimeFilter<"Sma_indicators"> | Date | string
    sma_5?: FloatFilter<"Sma_indicators"> | number
    sma_10?: FloatFilter<"Sma_indicators"> | number
    sma_20?: FloatFilter<"Sma_indicators"> | number
    sma_50?: FloatFilter<"Sma_indicators"> | number
    sma_100?: FloatFilter<"Sma_indicators"> | number
    sma_200?: FloatFilter<"Sma_indicators"> | number
  }

  export type StatisticUpsertWithWhereUniqueWithoutTickerInput = {
    where: StatisticWhereUniqueInput
    update: XOR<StatisticUpdateWithoutTickerInput, StatisticUncheckedUpdateWithoutTickerInput>
    create: XOR<StatisticCreateWithoutTickerInput, StatisticUncheckedCreateWithoutTickerInput>
  }

  export type StatisticUpdateWithWhereUniqueWithoutTickerInput = {
    where: StatisticWhereUniqueInput
    data: XOR<StatisticUpdateWithoutTickerInput, StatisticUncheckedUpdateWithoutTickerInput>
  }

  export type StatisticUpdateManyWithWhereWithoutTickerInput = {
    where: StatisticScalarWhereInput
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyWithoutTickerInput>
  }

  export type StatisticScalarWhereInput = {
    AND?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
    OR?: StatisticScalarWhereInput[]
    NOT?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
    id?: IntFilter<"Statistic"> | number
    id_ticker?: IntFilter<"Statistic"> | number
    date?: DateTimeFilter<"Statistic"> | Date | string
    avg_price?: FloatFilter<"Statistic"> | number
    avg_volume?: FloatFilter<"Statistic"> | number
    median_price?: FloatFilter<"Statistic"> | number
    median_volume?: FloatFilter<"Statistic"> | number
    min_price?: FloatFilter<"Statistic"> | number
    min_volume?: FloatFilter<"Statistic"> | number
    max_price?: FloatFilter<"Statistic"> | number
    max_volume?: FloatFilter<"Statistic"> | number
    std_price?: FloatFilter<"Statistic"> | number
    std_volume?: FloatFilter<"Statistic"> | number
  }

  export type Stock_market_dataUpsertWithWhereUniqueWithoutTickerInput = {
    where: Stock_market_dataWhereUniqueInput
    update: XOR<Stock_market_dataUpdateWithoutTickerInput, Stock_market_dataUncheckedUpdateWithoutTickerInput>
    create: XOR<Stock_market_dataCreateWithoutTickerInput, Stock_market_dataUncheckedCreateWithoutTickerInput>
  }

  export type Stock_market_dataUpdateWithWhereUniqueWithoutTickerInput = {
    where: Stock_market_dataWhereUniqueInput
    data: XOR<Stock_market_dataUpdateWithoutTickerInput, Stock_market_dataUncheckedUpdateWithoutTickerInput>
  }

  export type Stock_market_dataUpdateManyWithWhereWithoutTickerInput = {
    where: Stock_market_dataScalarWhereInput
    data: XOR<Stock_market_dataUpdateManyMutationInput, Stock_market_dataUncheckedUpdateManyWithoutTickerInput>
  }

  export type Stock_market_dataScalarWhereInput = {
    AND?: Stock_market_dataScalarWhereInput | Stock_market_dataScalarWhereInput[]
    OR?: Stock_market_dataScalarWhereInput[]
    NOT?: Stock_market_dataScalarWhereInput | Stock_market_dataScalarWhereInput[]
    id?: IntFilter<"Stock_market_data"> | number
    id_ticker?: IntFilter<"Stock_market_data"> | number
    date?: DateTimeFilter<"Stock_market_data"> | Date | string
    open?: FloatFilter<"Stock_market_data"> | number
    high?: FloatFilter<"Stock_market_data"> | number
    low?: FloatFilter<"Stock_market_data"> | number
    close?: FloatFilter<"Stock_market_data"> | number
    volume?: IntFilter<"Stock_market_data"> | number
    adj_close?: FloatFilter<"Stock_market_data"> | number
  }

  export type VolatilityUpsertWithWhereUniqueWithoutTickerInput = {
    where: VolatilityWhereUniqueInput
    update: XOR<VolatilityUpdateWithoutTickerInput, VolatilityUncheckedUpdateWithoutTickerInput>
    create: XOR<VolatilityCreateWithoutTickerInput, VolatilityUncheckedCreateWithoutTickerInput>
  }

  export type VolatilityUpdateWithWhereUniqueWithoutTickerInput = {
    where: VolatilityWhereUniqueInput
    data: XOR<VolatilityUpdateWithoutTickerInput, VolatilityUncheckedUpdateWithoutTickerInput>
  }

  export type VolatilityUpdateManyWithWhereWithoutTickerInput = {
    where: VolatilityScalarWhereInput
    data: XOR<VolatilityUpdateManyMutationInput, VolatilityUncheckedUpdateManyWithoutTickerInput>
  }

  export type VolatilityScalarWhereInput = {
    AND?: VolatilityScalarWhereInput | VolatilityScalarWhereInput[]
    OR?: VolatilityScalarWhereInput[]
    NOT?: VolatilityScalarWhereInput | VolatilityScalarWhereInput[]
    id?: IntFilter<"Volatility"> | number
    id_ticker?: IntFilter<"Volatility"> | number
    date?: DateTimeFilter<"Volatility"> | Date | string
    volatility?: FloatFilter<"Volatility"> | number
    volatility_open?: FloatFilter<"Volatility"> | number
    volatility_close?: FloatFilter<"Volatility"> | number
    volatility_adj_close?: FloatFilter<"Volatility"> | number
  }

  export type TickerCreateWithoutStock_market_dataInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutStock_market_dataInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutStock_market_dataInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutStock_market_dataInput, TickerUncheckedCreateWithoutStock_market_dataInput>
  }

  export type TickerUpsertWithoutStock_market_dataInput = {
    update: XOR<TickerUpdateWithoutStock_market_dataInput, TickerUncheckedUpdateWithoutStock_market_dataInput>
    create: XOR<TickerCreateWithoutStock_market_dataInput, TickerUncheckedCreateWithoutStock_market_dataInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutStock_market_dataInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutStock_market_dataInput, TickerUncheckedUpdateWithoutStock_market_dataInput>
  }

  export type TickerUpdateWithoutStock_market_dataInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutStock_market_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutCumulative_returnInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutCumulative_returnInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutCumulative_returnInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutCumulative_returnInput, TickerUncheckedCreateWithoutCumulative_returnInput>
  }

  export type TickerUpsertWithoutCumulative_returnInput = {
    update: XOR<TickerUpdateWithoutCumulative_returnInput, TickerUncheckedUpdateWithoutCumulative_returnInput>
    create: XOR<TickerCreateWithoutCumulative_returnInput, TickerUncheckedCreateWithoutCumulative_returnInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutCumulative_returnInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutCumulative_returnInput, TickerUncheckedUpdateWithoutCumulative_returnInput>
  }

  export type TickerUpdateWithoutCumulative_returnInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutCumulative_returnInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutTrendingInput = {
    name: string
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutTrendingInput = {
    id?: number
    name: string
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutTrendingInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutTrendingInput, TickerUncheckedCreateWithoutTrendingInput>
  }

  export type TickerUpsertWithoutTrendingInput = {
    update: XOR<TickerUpdateWithoutTrendingInput, TickerUncheckedUpdateWithoutTrendingInput>
    create: XOR<TickerCreateWithoutTrendingInput, TickerUncheckedCreateWithoutTrendingInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutTrendingInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutTrendingInput, TickerUncheckedUpdateWithoutTrendingInput>
  }

  export type TickerUpdateWithoutTrendingInput = {
    name?: StringFieldUpdateOperationsInput | string
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutTrendingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutVolatilityInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutVolatilityInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutVolatilityInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutVolatilityInput, TickerUncheckedCreateWithoutVolatilityInput>
  }

  export type TickerUpsertWithoutVolatilityInput = {
    update: XOR<TickerUpdateWithoutVolatilityInput, TickerUncheckedUpdateWithoutVolatilityInput>
    create: XOR<TickerCreateWithoutVolatilityInput, TickerUncheckedCreateWithoutVolatilityInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutVolatilityInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutVolatilityInput, TickerUncheckedUpdateWithoutVolatilityInput>
  }

  export type TickerUpdateWithoutVolatilityInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutVolatilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutAnomaly_predictionInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutAnomaly_predictionInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutAnomaly_predictionInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutAnomaly_predictionInput, TickerUncheckedCreateWithoutAnomaly_predictionInput>
  }

  export type TickerUpsertWithoutAnomaly_predictionInput = {
    update: XOR<TickerUpdateWithoutAnomaly_predictionInput, TickerUncheckedUpdateWithoutAnomaly_predictionInput>
    create: XOR<TickerCreateWithoutAnomaly_predictionInput, TickerUncheckedCreateWithoutAnomaly_predictionInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutAnomaly_predictionInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutAnomaly_predictionInput, TickerUncheckedUpdateWithoutAnomaly_predictionInput>
  }

  export type TickerUpdateWithoutAnomaly_predictionInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutAnomaly_predictionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutEma_indicatorsInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutEma_indicatorsInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutEma_indicatorsInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutEma_indicatorsInput, TickerUncheckedCreateWithoutEma_indicatorsInput>
  }

  export type TickerUpsertWithoutEma_indicatorsInput = {
    update: XOR<TickerUpdateWithoutEma_indicatorsInput, TickerUncheckedUpdateWithoutEma_indicatorsInput>
    create: XOR<TickerCreateWithoutEma_indicatorsInput, TickerUncheckedCreateWithoutEma_indicatorsInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutEma_indicatorsInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutEma_indicatorsInput, TickerUncheckedUpdateWithoutEma_indicatorsInput>
  }

  export type TickerUpdateWithoutEma_indicatorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutEma_indicatorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutSma_indicatorsInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutSma_indicatorsInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutSma_indicatorsInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutSma_indicatorsInput, TickerUncheckedCreateWithoutSma_indicatorsInput>
  }

  export type TickerUpsertWithoutSma_indicatorsInput = {
    update: XOR<TickerUpdateWithoutSma_indicatorsInput, TickerUncheckedUpdateWithoutSma_indicatorsInput>
    create: XOR<TickerCreateWithoutSma_indicatorsInput, TickerUncheckedCreateWithoutSma_indicatorsInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutSma_indicatorsInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutSma_indicatorsInput, TickerUncheckedUpdateWithoutSma_indicatorsInput>
  }

  export type TickerUpdateWithoutSma_indicatorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutSma_indicatorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutRsi_indicatorsInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutRsi_indicatorsInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutRsi_indicatorsInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutRsi_indicatorsInput, TickerUncheckedCreateWithoutRsi_indicatorsInput>
  }

  export type TickerUpsertWithoutRsi_indicatorsInput = {
    update: XOR<TickerUpdateWithoutRsi_indicatorsInput, TickerUncheckedUpdateWithoutRsi_indicatorsInput>
    create: XOR<TickerCreateWithoutRsi_indicatorsInput, TickerUncheckedCreateWithoutRsi_indicatorsInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutRsi_indicatorsInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutRsi_indicatorsInput, TickerUncheckedUpdateWithoutRsi_indicatorsInput>
  }

  export type TickerUpdateWithoutRsi_indicatorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutRsi_indicatorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutMacd_indicatorsInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutMacd_indicatorsInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutMacd_indicatorsInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutMacd_indicatorsInput, TickerUncheckedCreateWithoutMacd_indicatorsInput>
  }

  export type TickerUpsertWithoutMacd_indicatorsInput = {
    update: XOR<TickerUpdateWithoutMacd_indicatorsInput, TickerUncheckedUpdateWithoutMacd_indicatorsInput>
    create: XOR<TickerCreateWithoutMacd_indicatorsInput, TickerUncheckedCreateWithoutMacd_indicatorsInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutMacd_indicatorsInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutMacd_indicatorsInput, TickerUncheckedUpdateWithoutMacd_indicatorsInput>
  }

  export type TickerUpdateWithoutMacd_indicatorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutMacd_indicatorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutBollinger_indicatorsInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutBollinger_indicatorsInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutBollinger_indicatorsInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutBollinger_indicatorsInput, TickerUncheckedCreateWithoutBollinger_indicatorsInput>
  }

  export type TickerUpsertWithoutBollinger_indicatorsInput = {
    update: XOR<TickerUpdateWithoutBollinger_indicatorsInput, TickerUncheckedUpdateWithoutBollinger_indicatorsInput>
    create: XOR<TickerCreateWithoutBollinger_indicatorsInput, TickerUncheckedCreateWithoutBollinger_indicatorsInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutBollinger_indicatorsInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutBollinger_indicatorsInput, TickerUncheckedUpdateWithoutBollinger_indicatorsInput>
  }

  export type TickerUpdateWithoutBollinger_indicatorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutBollinger_indicatorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutIndicators_technicalInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Statistic?: StatisticCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutIndicators_technicalInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Statistic?: StatisticUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutIndicators_technicalInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutIndicators_technicalInput, TickerUncheckedCreateWithoutIndicators_technicalInput>
  }

  export type TickerUpsertWithoutIndicators_technicalInput = {
    update: XOR<TickerUpdateWithoutIndicators_technicalInput, TickerUncheckedUpdateWithoutIndicators_technicalInput>
    create: XOR<TickerCreateWithoutIndicators_technicalInput, TickerUncheckedCreateWithoutIndicators_technicalInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutIndicators_technicalInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutIndicators_technicalInput, TickerUncheckedUpdateWithoutIndicators_technicalInput>
  }

  export type TickerUpdateWithoutIndicators_technicalInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutIndicators_technicalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Statistic?: StatisticUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutStatisticInput = {
    name: string
    Trending?: TrendingCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutStatisticInput = {
    id?: number
    name: string
    Trending?: TrendingUncheckedCreateNestedManyWithoutTickerInput
    Anomaly_prediction?: Anomaly_predictionUncheckedCreateNestedManyWithoutTickerInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Cumulative_return?: Cumulative_returnUncheckedCreateNestedOneWithoutTickerInput
    Ema_indicators?: Ema_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Indicators_technical?: Indicators_technicalUncheckedCreateNestedManyWithoutTickerInput
    Macd_indicators?: Macd_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Rsi_indicators?: Rsi_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Sma_indicators?: Sma_indicatorsUncheckedCreateNestedManyWithoutTickerInput
    Stock_market_data?: Stock_market_dataUncheckedCreateNestedManyWithoutTickerInput
    Volatility?: VolatilityUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutStatisticInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutStatisticInput, TickerUncheckedCreateWithoutStatisticInput>
  }

  export type TickerUpsertWithoutStatisticInput = {
    update: XOR<TickerUpdateWithoutStatisticInput, TickerUncheckedUpdateWithoutStatisticInput>
    create: XOR<TickerCreateWithoutStatisticInput, TickerUncheckedCreateWithoutStatisticInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutStatisticInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutStatisticInput, TickerUncheckedUpdateWithoutStatisticInput>
  }

  export type TickerUpdateWithoutStatisticInput = {
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutStatisticInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Trending?: TrendingUncheckedUpdateManyWithoutTickerNestedInput
    Anomaly_prediction?: Anomaly_predictionUncheckedUpdateManyWithoutTickerNestedInput
    Bollinger_indicators?: Bollinger_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Cumulative_return?: Cumulative_returnUncheckedUpdateOneWithoutTickerNestedInput
    Ema_indicators?: Ema_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Indicators_technical?: Indicators_technicalUncheckedUpdateManyWithoutTickerNestedInput
    Macd_indicators?: Macd_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Rsi_indicators?: Rsi_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Sma_indicators?: Sma_indicatorsUncheckedUpdateManyWithoutTickerNestedInput
    Stock_market_data?: Stock_market_dataUncheckedUpdateManyWithoutTickerNestedInput
    Volatility?: VolatilityUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TrendingCreateManyTickerInput = {
    id?: number
    date: Date | string
    trend: string
    trend_close: number
    trend_open: number
    trend_adj_close: number
  }

  export type Anomaly_predictionCreateManyTickerInput = {
    id?: number
    date: Date | string
    anomaly_price: number
    anomaly_volume: number
  }

  export type Bollinger_indicatorsCreateManyTickerInput = {
    id?: number
    date: Date | string
    bollinger_5: number
    bollinger_10: number
    bollinger_20: number
    bollinger_50: number
    bollinger_100: number
    bollinger_200: number
  }

  export type Ema_indicatorsCreateManyTickerInput = {
    id?: number
    date: Date | string
    ema_5: number
    ema_10: number
    ema_20: number
    ema_50: number
    ema_100: number
    ema_200: number
  }

  export type Indicators_technicalCreateManyTickerInput = {
    id?: number
    date: Date | string
    rsi: number
    macd: number
    bollinger: number
    sma: number
    ema: number
  }

  export type Macd_indicatorsCreateManyTickerInput = {
    id?: number
    date: Date | string
    macd_5: number
    macd_10: number
    macd_20: number
    macd_50: number
    macd_100: number
    macd_200: number
  }

  export type Rsi_indicatorsCreateManyTickerInput = {
    id?: number
    date: Date | string
    rsi_5: number
    rsi_10: number
    rsi_20: number
    rsi_50: number
    rsi_100: number
    rsi_200: number
  }

  export type Sma_indicatorsCreateManyTickerInput = {
    id?: number
    date: Date | string
    sma_5: number
    sma_10: number
    sma_20: number
    sma_50: number
    sma_100: number
    sma_200: number
  }

  export type StatisticCreateManyTickerInput = {
    id?: number
    date: Date | string
    avg_price: number
    avg_volume: number
    median_price: number
    median_volume: number
    min_price: number
    min_volume: number
    max_price: number
    max_volume: number
    std_price: number
    std_volume: number
  }

  export type Stock_market_dataCreateManyTickerInput = {
    id?: number
    date: Date | string
    open: number
    high: number
    low: number
    close: number
    volume: number
    adj_close: number
  }

  export type VolatilityCreateManyTickerInput = {
    id?: number
    date: Date | string
    volatility: number
    volatility_open: number
    volatility_close: number
    volatility_adj_close: number
  }

  export type TrendingUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    trend?: StringFieldUpdateOperationsInput | string
    trend_close?: FloatFieldUpdateOperationsInput | number
    trend_open?: FloatFieldUpdateOperationsInput | number
    trend_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type TrendingUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    trend?: StringFieldUpdateOperationsInput | string
    trend_close?: FloatFieldUpdateOperationsInput | number
    trend_open?: FloatFieldUpdateOperationsInput | number
    trend_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type TrendingUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    trend?: StringFieldUpdateOperationsInput | string
    trend_close?: FloatFieldUpdateOperationsInput | number
    trend_open?: FloatFieldUpdateOperationsInput | number
    trend_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Anomaly_predictionUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly_price?: FloatFieldUpdateOperationsInput | number
    anomaly_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type Anomaly_predictionUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly_price?: FloatFieldUpdateOperationsInput | number
    anomaly_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type Anomaly_predictionUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly_price?: FloatFieldUpdateOperationsInput | number
    anomaly_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type Bollinger_indicatorsUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bollinger_5?: FloatFieldUpdateOperationsInput | number
    bollinger_10?: FloatFieldUpdateOperationsInput | number
    bollinger_20?: FloatFieldUpdateOperationsInput | number
    bollinger_50?: FloatFieldUpdateOperationsInput | number
    bollinger_100?: FloatFieldUpdateOperationsInput | number
    bollinger_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Bollinger_indicatorsUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bollinger_5?: FloatFieldUpdateOperationsInput | number
    bollinger_10?: FloatFieldUpdateOperationsInput | number
    bollinger_20?: FloatFieldUpdateOperationsInput | number
    bollinger_50?: FloatFieldUpdateOperationsInput | number
    bollinger_100?: FloatFieldUpdateOperationsInput | number
    bollinger_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Bollinger_indicatorsUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bollinger_5?: FloatFieldUpdateOperationsInput | number
    bollinger_10?: FloatFieldUpdateOperationsInput | number
    bollinger_20?: FloatFieldUpdateOperationsInput | number
    bollinger_50?: FloatFieldUpdateOperationsInput | number
    bollinger_100?: FloatFieldUpdateOperationsInput | number
    bollinger_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Ema_indicatorsUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ema_5?: FloatFieldUpdateOperationsInput | number
    ema_10?: FloatFieldUpdateOperationsInput | number
    ema_20?: FloatFieldUpdateOperationsInput | number
    ema_50?: FloatFieldUpdateOperationsInput | number
    ema_100?: FloatFieldUpdateOperationsInput | number
    ema_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Ema_indicatorsUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ema_5?: FloatFieldUpdateOperationsInput | number
    ema_10?: FloatFieldUpdateOperationsInput | number
    ema_20?: FloatFieldUpdateOperationsInput | number
    ema_50?: FloatFieldUpdateOperationsInput | number
    ema_100?: FloatFieldUpdateOperationsInput | number
    ema_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Ema_indicatorsUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ema_5?: FloatFieldUpdateOperationsInput | number
    ema_10?: FloatFieldUpdateOperationsInput | number
    ema_20?: FloatFieldUpdateOperationsInput | number
    ema_50?: FloatFieldUpdateOperationsInput | number
    ema_100?: FloatFieldUpdateOperationsInput | number
    ema_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Indicators_technicalUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi?: FloatFieldUpdateOperationsInput | number
    macd?: FloatFieldUpdateOperationsInput | number
    bollinger?: FloatFieldUpdateOperationsInput | number
    sma?: FloatFieldUpdateOperationsInput | number
    ema?: FloatFieldUpdateOperationsInput | number
  }

  export type Indicators_technicalUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi?: FloatFieldUpdateOperationsInput | number
    macd?: FloatFieldUpdateOperationsInput | number
    bollinger?: FloatFieldUpdateOperationsInput | number
    sma?: FloatFieldUpdateOperationsInput | number
    ema?: FloatFieldUpdateOperationsInput | number
  }

  export type Indicators_technicalUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi?: FloatFieldUpdateOperationsInput | number
    macd?: FloatFieldUpdateOperationsInput | number
    bollinger?: FloatFieldUpdateOperationsInput | number
    sma?: FloatFieldUpdateOperationsInput | number
    ema?: FloatFieldUpdateOperationsInput | number
  }

  export type Macd_indicatorsUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    macd_5?: FloatFieldUpdateOperationsInput | number
    macd_10?: FloatFieldUpdateOperationsInput | number
    macd_20?: FloatFieldUpdateOperationsInput | number
    macd_50?: FloatFieldUpdateOperationsInput | number
    macd_100?: FloatFieldUpdateOperationsInput | number
    macd_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Macd_indicatorsUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    macd_5?: FloatFieldUpdateOperationsInput | number
    macd_10?: FloatFieldUpdateOperationsInput | number
    macd_20?: FloatFieldUpdateOperationsInput | number
    macd_50?: FloatFieldUpdateOperationsInput | number
    macd_100?: FloatFieldUpdateOperationsInput | number
    macd_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Macd_indicatorsUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    macd_5?: FloatFieldUpdateOperationsInput | number
    macd_10?: FloatFieldUpdateOperationsInput | number
    macd_20?: FloatFieldUpdateOperationsInput | number
    macd_50?: FloatFieldUpdateOperationsInput | number
    macd_100?: FloatFieldUpdateOperationsInput | number
    macd_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Rsi_indicatorsUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi_5?: FloatFieldUpdateOperationsInput | number
    rsi_10?: FloatFieldUpdateOperationsInput | number
    rsi_20?: FloatFieldUpdateOperationsInput | number
    rsi_50?: FloatFieldUpdateOperationsInput | number
    rsi_100?: FloatFieldUpdateOperationsInput | number
    rsi_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Rsi_indicatorsUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi_5?: FloatFieldUpdateOperationsInput | number
    rsi_10?: FloatFieldUpdateOperationsInput | number
    rsi_20?: FloatFieldUpdateOperationsInput | number
    rsi_50?: FloatFieldUpdateOperationsInput | number
    rsi_100?: FloatFieldUpdateOperationsInput | number
    rsi_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Rsi_indicatorsUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rsi_5?: FloatFieldUpdateOperationsInput | number
    rsi_10?: FloatFieldUpdateOperationsInput | number
    rsi_20?: FloatFieldUpdateOperationsInput | number
    rsi_50?: FloatFieldUpdateOperationsInput | number
    rsi_100?: FloatFieldUpdateOperationsInput | number
    rsi_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Sma_indicatorsUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sma_5?: FloatFieldUpdateOperationsInput | number
    sma_10?: FloatFieldUpdateOperationsInput | number
    sma_20?: FloatFieldUpdateOperationsInput | number
    sma_50?: FloatFieldUpdateOperationsInput | number
    sma_100?: FloatFieldUpdateOperationsInput | number
    sma_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Sma_indicatorsUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sma_5?: FloatFieldUpdateOperationsInput | number
    sma_10?: FloatFieldUpdateOperationsInput | number
    sma_20?: FloatFieldUpdateOperationsInput | number
    sma_50?: FloatFieldUpdateOperationsInput | number
    sma_100?: FloatFieldUpdateOperationsInput | number
    sma_200?: FloatFieldUpdateOperationsInput | number
  }

  export type Sma_indicatorsUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sma_5?: FloatFieldUpdateOperationsInput | number
    sma_10?: FloatFieldUpdateOperationsInput | number
    sma_20?: FloatFieldUpdateOperationsInput | number
    sma_50?: FloatFieldUpdateOperationsInput | number
    sma_100?: FloatFieldUpdateOperationsInput | number
    sma_200?: FloatFieldUpdateOperationsInput | number
  }

  export type StatisticUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_price?: FloatFieldUpdateOperationsInput | number
    avg_volume?: FloatFieldUpdateOperationsInput | number
    median_price?: FloatFieldUpdateOperationsInput | number
    median_volume?: FloatFieldUpdateOperationsInput | number
    min_price?: FloatFieldUpdateOperationsInput | number
    min_volume?: FloatFieldUpdateOperationsInput | number
    max_price?: FloatFieldUpdateOperationsInput | number
    max_volume?: FloatFieldUpdateOperationsInput | number
    std_price?: FloatFieldUpdateOperationsInput | number
    std_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type StatisticUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_price?: FloatFieldUpdateOperationsInput | number
    avg_volume?: FloatFieldUpdateOperationsInput | number
    median_price?: FloatFieldUpdateOperationsInput | number
    median_volume?: FloatFieldUpdateOperationsInput | number
    min_price?: FloatFieldUpdateOperationsInput | number
    min_volume?: FloatFieldUpdateOperationsInput | number
    max_price?: FloatFieldUpdateOperationsInput | number
    max_volume?: FloatFieldUpdateOperationsInput | number
    std_price?: FloatFieldUpdateOperationsInput | number
    std_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type StatisticUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_price?: FloatFieldUpdateOperationsInput | number
    avg_volume?: FloatFieldUpdateOperationsInput | number
    median_price?: FloatFieldUpdateOperationsInput | number
    median_volume?: FloatFieldUpdateOperationsInput | number
    min_price?: FloatFieldUpdateOperationsInput | number
    min_volume?: FloatFieldUpdateOperationsInput | number
    max_price?: FloatFieldUpdateOperationsInput | number
    max_volume?: FloatFieldUpdateOperationsInput | number
    std_price?: FloatFieldUpdateOperationsInput | number
    std_volume?: FloatFieldUpdateOperationsInput | number
  }

  export type Stock_market_dataUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: FloatFieldUpdateOperationsInput | number
    high?: FloatFieldUpdateOperationsInput | number
    low?: FloatFieldUpdateOperationsInput | number
    close?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Stock_market_dataUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: FloatFieldUpdateOperationsInput | number
    high?: FloatFieldUpdateOperationsInput | number
    low?: FloatFieldUpdateOperationsInput | number
    close?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type Stock_market_dataUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: FloatFieldUpdateOperationsInput | number
    high?: FloatFieldUpdateOperationsInput | number
    low?: FloatFieldUpdateOperationsInput | number
    close?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type VolatilityUpdateWithoutTickerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volatility?: FloatFieldUpdateOperationsInput | number
    volatility_open?: FloatFieldUpdateOperationsInput | number
    volatility_close?: FloatFieldUpdateOperationsInput | number
    volatility_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type VolatilityUncheckedUpdateWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volatility?: FloatFieldUpdateOperationsInput | number
    volatility_open?: FloatFieldUpdateOperationsInput | number
    volatility_close?: FloatFieldUpdateOperationsInput | number
    volatility_adj_close?: FloatFieldUpdateOperationsInput | number
  }

  export type VolatilityUncheckedUpdateManyWithoutTickerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volatility?: FloatFieldUpdateOperationsInput | number
    volatility_open?: FloatFieldUpdateOperationsInput | number
    volatility_close?: FloatFieldUpdateOperationsInput | number
    volatility_adj_close?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}