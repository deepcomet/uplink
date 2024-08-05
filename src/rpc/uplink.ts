import axios, { type AxiosInstance } from "axios"
import { ApiVersion, request } from "../api"
import { debug, error } from "../log"
import type { RpcInterface } from "./interface"

export type RpcUplinkConfig = { url: URL; timeout?: number }

export type RpcUplinkContext = { version?: ApiVersion; url: URL; httpClient: AxiosInstance }

export type RpcUplink = { context: RpcUplinkContext } & RpcInterface

export const newUplinkHttpClient = (url: URL, timeout = 12000): AxiosInstance =>
  axios.create({ baseURL: url.toString(), timeout })

export const newRpcUplinkContext = (config: RpcUplinkConfig): RpcUplinkContext => {
  const url = config.url
  const httpClient = newUplinkHttpClient(url, config.timeout)
  return { url, httpClient }
}

export const newRpcUplink = (config: RpcUplinkConfig): RpcUplink => {
  const context = newRpcUplinkContext(config)
  return {
    context,
    health: () => health(context),
    status: () => status(context),
    netInfo: () => netInfo(context),
    blockchain: (params) => blockchain(context, params),
    block: (params) => block(context, params),
    header: (params) => header(context, params),
    headerByHash: (params) => headerByHash(context, params),
    blockByHash: (params) => blockByHash(context, params),
    blockResults: (params) => blockResults(context, params),
    commit: (params) => commit(context, params),
    validators: (params) => validators(context, params),
    genesis: () => genesis(context),
    genesisChunked: (params) => genesisChunked(context, params),
    dumpConsensusState: () => dumpConsensusState(context),
    consensusState: () => consensusState(context),
    consensusParams: (params) => consensusParams(context, params),
    unconfirmedTxs: (params) => unconfirmedTxs(context, params),
    numUnconfirmedTxs: () => numUnconfirmedTxs(context),
    txSearch: (params) => txSearch(context, params),
    blockSearch: (params) => blockSearch(context, params),
    tx: (params) => tx(context, params),
    broadcastEvidence: (params) => broadcastEvidence(context, params),
    broadcastTxSync: (params) => broadcastTxSync(context, params),
    broadcastTxAsync: (params) => broadcastTxAsync(context, params),
    broadcastTxCommit: (params) => broadcastTxCommit(context, params),
    checkTx: (params) => checkTx(context, params),
    abciInfo: () => abciInfo(context),
    abciQuery: (params) => abciQuery(context, params),
  }
}

const health = async ({ httpClient, url }: RpcUplinkContext): Promise<request.HealthResult> => {
  try {
    debug("<uplink:health> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.HealthResult>("/health")
    debug("<uplink:health> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:health> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const status = async ({ httpClient, url }: RpcUplinkContext): Promise<request.StatusResult> => {
  try {
    debug("<uplink:status> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.StatusResult>("/status")
    debug("<uplink:status> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:status> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const netInfo = async ({ httpClient, url }: RpcUplinkContext): Promise<request.NetInfoResult> => {
  try {
    debug("<uplink:netInfo> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.NetInfoResult>("/net_info")
    debug("<uplink:netInfo> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:netInfo> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const blockchain = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BlockchainParams = {},
): Promise<request.BlockchainResult> => {
  try {
    debug("<uplink:blockchain> Send GET to '{}' with params {} ...", url, JSON.stringify(params))
    const res = await httpClient.get<request.BlockchainResult>("/blockchain", { params })
    debug("<uplink:blockchain> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:blockchain> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const block = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BlockParams = {},
): Promise<request.BlockResult> => {
  try {
    debug("<uplink:block> Send GET to '{}' with params {} ...", url, JSON.stringify(params))
    const res = await httpClient.get<request.BlockResult>("/block", { params })
    debug("<uplink:block> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:block> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const header = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.HeaderParams = {},
): Promise<request.HeaderResult> => {
  try {
    debug("<uplink:header> Send GET to '{}' with params {} ...", url, JSON.stringify(params))
    const res = await httpClient.get<request.HeaderResult>("/header", { params })
    debug("<uplink:header> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:header> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const headerByHash = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.HeaderByHashParams,
): Promise<request.HeaderResult> => {
  try {
    debug("<uplink:headerByHash> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.HeaderResult>("/header_by_hash", { params })
    debug("<uplink:headerByHash> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:headerByHash> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const blockByHash = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BlockByHashParams,
): Promise<request.BlockResult> => {
  try {
    debug("<uplink:blockByHash> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.BlockResult>("/block_by_hash", { params })
    debug("<uplink:blockByHash> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:blockByHash> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const blockResults = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BlockResultsParams,
): Promise<request.BlockResultsResult> => {
  try {
    debug("<uplink:blockResults> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.BlockResultsResult>("/block_results", { params })
    debug("<uplink:blockResults> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:blockResults> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const commit = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.CommitParams,
): Promise<request.CommitResult> => {
  try {
    debug("<uplink:commit> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.CommitResult>("/commit", { params })
    debug("<uplink:commit> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:commit> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const validators = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.ValidatorsParams,
): Promise<request.ValidatorsResult> => {
  try {
    debug("<uplink:validators> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.ValidatorsResult>("/validators", { params })
    debug("<uplink:validators> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:validators> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const genesis = async ({ httpClient, url }: RpcUplinkContext): Promise<request.GenesisResult> => {
  try {
    debug("<uplink:genesis> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.GenesisResult>("/genesis")
    debug("<uplink:genesis> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:genesis> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const genesisChunked = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.GenesisChunkedParams,
): Promise<request.GenesisChunkedResult> => {
  try {
    debug("<uplink:genesisChunked> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.GenesisChunkedResult>("/genesis_chunked", { params })
    debug("<uplink:genesisChunked> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:genesisChunked> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const dumpConsensusState = async (
  { httpClient, url }: RpcUplinkContext,
): Promise<request.DumpConsensusStateResult> => {
  try {
    debug("<uplink:dumpConsensusState> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.DumpConsensusStateResult>("/dump_consensus_state")
    debug(
      "<uplink:dumpConsensusState> Recv GET from '{}' ({}): {}",
      url,
      res.status,
      JSON.stringify(res.data),
    )
    return res.data
  } catch (err: any) {
    error(
      "<uplink:dumpConsensusState> Fail GET to '{}': {}",
      url,
      err.message || err.code || JSON.stringify(err),
    )
  }
}

const consensusState = async (
  { httpClient, url }: RpcUplinkContext,
): Promise<request.ConsensusStateResult> => {
  try {
    debug("<uplink:consensusState> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.ConsensusStateResult>("/consensus_state")
    debug("<uplink:consensusState> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:consensusState> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const consensusParams = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.ConsensusParamsParams,
): Promise<request.ConsensusParamsResult> => {
  try {
    debug("<uplink:consensusParams> Send GET to '{}' with params {} ...", url, JSON.stringify(params))
    const res = await httpClient.get<request.ConsensusParamsResult>("/consensus_params", { params })
    debug("<uplink:consensusParams> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error(
      "<uplink:consensusParams> Fail GET to '{}': {}",
      url,
      err.message || err.code || JSON.stringify(err),
    )
  }
}

const unconfirmedTxs = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.UnconfirmedTxsParams,
): Promise<request.UnconfirmedTxsResult> => {
  try {
    debug("<uplink:unconfirmedTxs> Send GET to '{}' with params {} ...", url, params)
    const res = await httpClient.get<request.UnconfirmedTxsResult>("/unconfirmed_txs", { params })
    debug("<uplink:unconfirmedTxs> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:unconfirmedTxs> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const numUnconfirmedTxs = async (
  { httpClient, url }: RpcUplinkContext,
): Promise<request.NumUnconfirmedTxsResult> => {
  try {
    debug("<uplink:numUnconfirmedTxs> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.NumUnconfirmedTxsResult>("/num_unconfirmed_txs")
    debug("<uplink:numUnconfirmedTxs> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error(
      "<uplink:numUnconfirmedTxs> Fail GET to '{}': {}",
      url,
      err.message || err.code || JSON.stringify(err),
    )
  }
}

const txSearch = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.TxSearchParams,
): Promise<request.TxSearchResult> => {
  try {
    debug("<uplink:txSearch> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.TxSearchResult>("/tx_search", { params })
    debug("<uplink:txSearch> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:txSearch> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const blockSearch = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BlockSearchParams,
): Promise<request.BlockSearchResult> => {
  try {
    debug("<uplink:blockSearch> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.BlockSearchResult>("/block_search", { params })
    debug("<uplink:blockSearch> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:blockSearch> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const tx = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.TxParams,
): Promise<request.TxResult> => {
  try {
    debug("<uplink:tx> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.TxResult>("/tx", { params })
    debug("<uplink:tx> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:tx> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const broadcastEvidence = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BroadcastEvidenceParams,
): Promise<request.BroadcastEvidenceResult> => {
  try {
    debug("<uplink:broadcastEvidence> Send POST to '{}' ...", url)
    const res = await httpClient.post<request.BroadcastEvidenceResult>("/broadcast_evidence", params)
    debug(
      "<uplink:broadcastEvidence> Recv POST from '{}' ({}): {}",
      url,
      res.status,
      JSON.stringify(res.data),
    )
    return res.data
  } catch (err: any) {
    error(
      "<uplink:broadcastEvidence> Fail POST to '{}': {}",
      url,
      err.message || err.code || JSON.stringify(err),
    )
  }
}

const broadcastTxSync = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BroadcastTxSyncParams,
): Promise<request.BroadcastTxSyncResult> => {
  try {
    debug("<uplink:broadcastTxSync> Send POST to '{}' ...", url)
    const res = await httpClient.post<request.BroadcastTxSyncResult>("/broadcast_tx_sync", params)
    debug("<uplink:broadcastTxSync> Recv POST from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error(
      "<uplink:broadcastTxSync> Fail POST to '{}': {}",
      url,
      err.message || err.code || JSON.stringify(err),
    )
  }
}

const broadcastTxAsync = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BroadcastTxAsyncParams,
): Promise<request.BroadcastTxAsyncResult> => {
  try {
    debug("<uplink:broadcastTxAsync> Send POST to '{}' ...", url)
    const res = await httpClient.post<request.BroadcastTxAsyncResult>("/broadcast_tx_async", params)
    debug("<uplink:broadcastTxAsync> Recv POST from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error(
      "<uplink:broadcastTxAsync> Fail POST to '{}': {}",
      url,
      err.message || err.code || JSON.stringify(err),
    )
  }
}

const broadcastTxCommit = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.BroadcastTxCommitParams,
): Promise<request.BroadcastTxCommitResult> => {
  try {
    debug("<uplink:broadcastTxCommit> Send POST to '{}' ...", url)
    const res = await httpClient.post<request.BroadcastTxCommitResult>("/broadcast_tx_commit", params)
    debug(
      "<uplink:broadcastTxCommit> Recv POST from '{}' ({}): {}",
      url,
      res.status,
      JSON.stringify(res.data),
    )
    return res.data
  } catch (err: any) {
    error(
      "<uplink:broadcastTxCommit> Fail POST to '{}': {}",
      url,
      err.message || err.code || JSON.stringify(err),
    )
  }
}

const checkTx = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.CheckTxParams,
): Promise<request.CheckTxResult> => {
  try {
    debug("<uplink:checkTx> Send POST to '{}' ...", url)
    const res = await httpClient.post<request.CheckTxResult>("/check_tx", params)
    debug("<uplink:checkTx> Recv POST from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:checkTx> Fail POST to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const abciInfo = async ({ httpClient, url }: RpcUplinkContext): Promise<request.AbciInfoResult> => {
  try {
    debug("<uplink:abciInfo> Send GET to '{}' ...", url)
    const res = await httpClient.get<request.AbciInfoResult>("/abci_info")
    debug("<uplink:abciInfo> Recv GET from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:abciInfo> Fail GET to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}

const abciQuery = async (
  { httpClient, url }: RpcUplinkContext,
  params: request.AbciQueryParams,
): Promise<request.AbciQueryResult> => {
  try {
    debug("<uplink:abciQuery> Send POST to '{}' with params ...", url, params)
    const res = await httpClient.post<request.AbciQueryResult>("/abci_query", params)
    debug("<uplink:abciQuery> Recv POST from '{}' ({}): {}", url, res.status, JSON.stringify(res.data))
    return res.data
  } catch (err: any) {
    error("<uplink:abciQuery> Fail POST to '{}': {}", url, err.message || err.code || JSON.stringify(err))
  }
}
