// dprint-ignore-file
import { request } from "../api"

export type RpcInterface = {
  health: (params?: request.HealthParams) => Promise<request.HealthResult>
  status: (params?: request.StatusParams) => Promise<request.StatusResult>
  netInfo: (params?: request.NetInfoParams) => Promise<request.NetInfoResult>
  blockchain: (params?: request.BlockchainParams) => Promise<request.BlockchainResult>
  block: (params?: request.BlockParams) => Promise<request.BlockResult>
  header: (params?: request.HeaderParams) => Promise<request.HeaderResult>
  headerByHash: (params: request.HeaderByHashParams) => Promise<request.HeaderByHashResult>
  blockByHash: (params: request.BlockByHashParams) => Promise<request.BlockByHashResult>
  blockResults: (params?: request.BlockResultsParams) => Promise<request.BlockResultsResult>
  commit: (params?: request.CommitParams) => Promise<request.CommitResult>
  validators: (params?: request.ValidatorsParams) => Promise<request.ValidatorsResult>
  genesis: (params?: request.GenesisParams) => Promise<request.GenesisResult>
  genesisChunked: (params?: request.GenesisChunkedParams) => Promise<request.GenesisChunkedResult>
  dumpConsensusState: (params?: request.DumpConsensusStateParams) => Promise<request.DumpConsensusStateResult>
  consensusState: (params?: request.ConsensusStateParams) => Promise<request.ConsensusStateResult>
  consensusParams: (params?: request.ConsensusParamsParams) => Promise<request.ConsensusParamsResult>
  unconfirmedTxs: (params?: request.UnconfirmedTxsParams) => Promise<request.UnconfirmedTxsResult>
  numUnconfirmedTxs: (params?: request.NumUnconfirmedTxsParams) => Promise<request.NumUnconfirmedTxsResult>
  txSearch: (params: request.TxSearchParams) => Promise<request.TxSearchResult>
  blockSearch: (params: request.BlockSearchParams) => Promise<request.BlockSearchResult>
  tx: (params: request.TxParams) => Promise<request.TxResult>
  broadcastEvidence: (params: request.BroadcastEvidenceParams) => Promise<request.BroadcastEvidenceResult>
  broadcastTxSync: (params: request.BroadcastTxSyncParams) => Promise<request.BroadcastTxSyncResult>
  broadcastTxAsync: (params?: request.BroadcastTxAsyncParams) => Promise<request.BroadcastTxAsyncResult>
  broadcastTxCommit: (params: request.BroadcastTxCommitParams) => Promise<request.BroadcastTxCommitResult>
  checkTx: (params: request.CheckTxParams) => Promise<request.CheckTxResult>
  abciInfo: (params?: request.AbciInfoParams) => Promise<request.AbciInfoResult>
  abciQuery: (params: request.AbciQueryParams) => Promise<request.AbciQueryResult>
}