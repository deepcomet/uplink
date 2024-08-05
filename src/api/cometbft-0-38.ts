import { components, operations } from "~gen/api/cometbft-0-38-10"

export type EmptyResponse = components["schemas"]["EmptyResponse"]
export type ErrorResponse = components["schemas"]["ErrorResponse"]

// ======= INFO  =======
export type HealthRequest = {
  params?: operations["health"]["parameters"]
  body?: operations["health"]["requestBody"]
  responses?: operations["health"]["responses"]
}
export type HealthParams = never
export type HealthResponse = components["schemas"]["EmptyResponse"]
export type HealthResult = HealthResponse | ErrorResponse | undefined

export type StatusRequest = {
  params?: operations["status"]["parameters"]
  body?: operations["status"]["requestBody"]
  responses?: operations["status"]["responses"]
}
export type StatusParams = never
export type StatusResponse = components["schemas"]["StatusResponse"]
export type StatusResult = StatusResponse | ErrorResponse | undefined

export type NetInfoRequest = {
  params?: operations["net_info"]["parameters"]
  body?: operations["net_info"]["requestBody"]
  responses?: operations["net_info"]["responses"]
}
export type NetInfoParams = never
export type NetInfoResponse = components["schemas"]["NetInfoResponse"]
export type NetInfoResult = NetInfoResponse | ErrorResponse | undefined

export type BlockchainRequest = {
  params?: operations["blockchain"]["parameters"]
  body?: operations["blockchain"]["requestBody"]
  responses?: operations["blockchain"]["responses"]
}
export type BlockchainParams = operations["blockchain"]["parameters"]["query"]
export type BlockchainResponse = components["schemas"]["BlockchainResponse"]
export type BlockchainResult = BlockchainResponse | ErrorResponse | undefined

export type HeaderRequest = {
  params?: operations["header"]["parameters"]
  body?: operations["header"]["requestBody"]
  responses?: operations["header"]["responses"]
}
export type HeaderParams = operations["header"]["parameters"]["query"]
export type HeaderResponse = components["schemas"]["BlockHeader"]
export type HeaderResult = HeaderResponse | ErrorResponse | undefined

export type HeaderByHashRequest = {
  params: operations["header_by_hash"]["parameters"]
  body?: operations["header_by_hash"]["requestBody"]
  responses?: operations["header_by_hash"]["responses"]
}
export type HeaderByHashParams = operations["header_by_hash"]["parameters"]["query"]
export type HeaderByHashResponse = components["schemas"]["BlockHeader"]
export type HeaderByHashResult = HeaderByHashResponse | ErrorResponse | undefined

export type BlockRequest = {
  params?: operations["block"]["parameters"]
  body?: operations["block"]["requestBody"]
  responses?: operations["block"]["responses"]
}
export type BlockParams = operations["block"]["parameters"]["query"]
export type BlockResponse = components["schemas"]["BlockResponse"]
export type BlockResult = BlockResponse | ErrorResponse | undefined

export type BlockByHashRequest = {
  params: operations["block_by_hash"]["parameters"]
  body?: operations["block_by_hash"]["requestBody"]
  responses?: operations["block_by_hash"]["responses"]
}
export type BlockByHashParams = operations["block_by_hash"]["parameters"]["query"]
export type BlockByHashResponse = components["schemas"]["BlockResponse"]
export type BlockByHashResult = BlockByHashResponse | ErrorResponse | undefined

export type BlockResultsRequest = {
  params?: operations["block_results"]["parameters"]
  body?: operations["block_results"]["requestBody"]
  responses?: operations["block_results"]["responses"]
}
export type BlockResultsParams = operations["block_results"]["parameters"]["query"]
export type BlockResultsResponse = components["schemas"]["BlockResultsResponse"]
export type BlockResultsResult = BlockResultsResponse | ErrorResponse | undefined

export type CommitRequest = {
  params?: operations["commit"]["parameters"]
  body?: operations["commit"]["requestBody"]
  responses?: operations["commit"]["responses"]
}
export type CommitParams = operations["commit"]["parameters"]["query"]
export type CommitResponse = components["schemas"]["CommitResponse"]
export type CommitResult = CommitResponse | ErrorResponse | undefined

export type ValidatorsRequest = {
  params?: operations["validators"]["parameters"]
  body?: operations["validators"]["requestBody"]
  responses?: operations["validators"]["responses"]
}
export type ValidatorsParams = operations["validators"]["parameters"]["query"]
export type ValidatorsResponse = components["schemas"]["ValidatorsResponse"]
export type ValidatorsResult = ValidatorsResponse | ErrorResponse | undefined

export type GenesisRequest = {
  params?: operations["genesis"]["parameters"]
  body?: operations["genesis"]["requestBody"]
  responses?: operations["genesis"]["responses"]
}
export type GenesisParams = never
export type GenesisResponse = components["schemas"]["GenesisResponse"]
export type GenesisResult = GenesisResponse | ErrorResponse | undefined

export type GenesisChunkedRequest = {
  params?: operations["genesis_chunked"]["parameters"]
  body?: operations["genesis_chunked"]["requestBody"]
  responses?: operations["genesis_chunked"]["responses"]
}
export type GenesisChunkedParams = operations["genesis_chunked"]["parameters"]["query"]
export type GenesisChunkedResponse = components["schemas"]["GenesisChunkedResponse"]
export type GenesisChunkedResult = GenesisChunkedResponse | ErrorResponse | undefined

export type DumpConsensusStateRequest = {
  params?: operations["dump_consensus_state"]["parameters"]
  body?: operations["dump_consensus_state"]["requestBody"]
  responses?: operations["dump_consensus_state"]["responses"]
}
export type DumpConsensusStateParams = never
export type DumpConsensusStateResponse = components["schemas"]["DumpConsensusResponse"]
export type DumpConsensusStateResult = DumpConsensusStateResponse | ErrorResponse | undefined

export type ConsensusStateRequest = {
  params?: operations["consensus_state"]["parameters"]
  body?: operations["consensus_state"]["requestBody"]
  responses?: operations["consensus_state"]["responses"]
}
export type ConsensusStateParams = never
export type ConsensusStateResponse = components["schemas"]["ConsensusStateResponse"]
export type ConsensusStateResult = ConsensusStateResponse | ErrorResponse | undefined

export type ConsensusParamsRequest = {
  params?: operations["consensus_params"]["parameters"]
  body?: operations["consensus_params"]["requestBody"]
  responses?: operations["consensus_params"]["responses"]
}
export type ConsensusParamsParams = operations["consensus_params"]["parameters"]["query"]
export type ConsensusParamsResponse = components["schemas"]["ConsensusParamsResponse"]
export type ConsensusParamsResult = ConsensusParamsResponse | ErrorResponse | undefined

export type UnconfirmedTxsRequest = {
  params?: operations["unconfirmed_txs"]["parameters"]
  body?: operations["unconfirmed_txs"]["requestBody"]
  responses?: operations["unconfirmed_txs"]["responses"]
}
export type UnconfirmedTxsParams = operations["unconfirmed_txs"]["parameters"]["query"]
export type UnconfirmedTxsResponse = components["schemas"]["UnconfirmedTransactionsResponse"]
export type UnconfirmedTxsResult = UnconfirmedTxsResponse | ErrorResponse | undefined

export type NumUnconfirmedTxsRequest = {
  params?: operations["num_unconfirmed_txs"]["parameters"]
  body?: operations["num_unconfirmed_txs"]["requestBody"]
  responses?: operations["num_unconfirmed_txs"]["responses"]
}
export type NumUnconfirmedTxsParams = never
export type NumUnconfirmedTxsResponse = components["schemas"]["NumUnconfirmedTransactionsResponse"]
export type NumUnconfirmedTxsResult = NumUnconfirmedTxsResponse | ErrorResponse | undefined

export type TxSearchRequest = {
  params: operations["tx_search"]["parameters"]
  body?: operations["tx_search"]["requestBody"]
  responses?: operations["tx_search"]["responses"]
}
export type TxSearchParams = operations["tx_search"]["parameters"]["query"]
export type TxSearchResponse = components["schemas"]["TxSearchResponse"]
export type TxSearchResult = TxSearchResponse | ErrorResponse | undefined

export type BlockSearchRequest = {
  params: operations["block_search"]["parameters"]
  body?: operations["block_search"]["requestBody"]
  responses?: operations["block_search"]["responses"]
}
export type BlockSearchParams = operations["block_search"]["parameters"]["query"]
export type BlockSearchResponse = components["schemas"]["BlockSearchResponse"]
export type BlockSearchResult = BlockSearchResponse | ErrorResponse | undefined

export type TxRequest = {
  params: operations["tx"]["parameters"]
  body?: operations["tx"]["requestBody"]
  responses?: operations["tx"]["responses"]
}
export type TxParams = operations["tx"]["parameters"]["path"]
export type TxResponse = components["schemas"]["TxResponse"]
export type TxResult = TxResponse | ErrorResponse | undefined

export type BroadcastEvidenceRequest = {
  params: operations["broadcast_evidence"]["parameters"]
  body?: operations["broadcast_evidence"]["requestBody"]
  responses?: operations["broadcast_evidence"]["responses"]
}
export type BroadcastEvidenceParams = operations["broadcast_evidence"]["parameters"]["path"]
export type BroadcastEvidenceResponse = components["schemas"]["BroadcastEvidenceResponse"]
export type BroadcastEvidenceResult =
  | BroadcastEvidenceResponse
  | ErrorResponse
  | undefined

// ======= TX =======
export type BroadcastTxSyncRequest = {
  params: operations["broadcast_tx_sync"]["parameters"]
  body?: operations["broadcast_tx_sync"]["requestBody"]
  responses?: operations["broadcast_tx_sync"]["responses"]
}
export type BroadcastTxSyncParams = operations["broadcast_tx_sync"]["parameters"]["path"]
export type BroadcastTxSyncResponse = components["schemas"]["BroadcastTxResponse"]
export type BroadcastTxSyncResult = BroadcastTxSyncResponse | ErrorResponse | undefined

export type BroadcastTxAsyncRequest = {
  params: operations["broadcast_tx_async"]["parameters"]
  body?: operations["broadcast_tx_async"]["requestBody"]
  responses?: operations["broadcast_tx_async"]["responses"]
}
export type BroadcastTxAsyncParams = operations["broadcast_tx_async"]["parameters"]["path"]
export type BroadcastTxAsyncResponse = components["schemas"]["BroadcastTxResponse"]
export type BroadcastTxAsyncResult = BroadcastTxAsyncResponse | ErrorResponse | undefined

export type BroadcastTxCommitRequest = {
  params: operations["broadcast_tx_commit"]["parameters"]
  body?: operations["broadcast_tx_commit"]["requestBody"]
  responses?: operations["broadcast_tx_commit"]["responses"]
}
export type BroadcastTxCommitParams = operations["broadcast_tx_commit"]["parameters"]["path"]
export type BroadcastTxCommitResponse = components["schemas"]["BroadcastTxCommitResponse"]
export type BroadcastTxCommitResult = BroadcastTxCommitResponse | ErrorResponse | undefined

export type CheckTxRequest = {
  params: operations["check_tx"]["parameters"]
  body?: operations["check_tx"]["requestBody"]
  responses?: operations["check_tx"]["responses"]
}
export type CheckTxParams = operations["check_tx"]["parameters"]["path"]
export type CheckTxResponse = components["schemas"]["CheckTxResponse"]
export type CheckTxResult =
  | CheckTxResponse
  | ErrorResponse
  | undefined

// =======  ABCI =======
export type AbciInfoRequest = {
  params?: operations["abci_info"]["parameters"]
  body?: operations["abci_info"]["requestBody"]
  responses?: operations["abci_info"]["responses"]
}
export type AbciInfoParams = never
export type AbciInfoResponse = components["schemas"]["ABCIInfoResponse"]
export type AbciInfoResult = AbciInfoResponse | ErrorResponse | undefined

export type AbciQueryRequest = {
  params: operations["abci_query"]["parameters"]
  body?: operations["abci_query"]["requestBody"]
  responses?: operations["abci_query"]["responses"]
}
export type AbciQueryParams = operations["abci_query"]["parameters"]["query"]
export type AbciQueryResponse = components["schemas"]["ABCIQueryResponse"]
export type AbciQueryResult = AbciQueryResponse | ErrorResponse | undefined
