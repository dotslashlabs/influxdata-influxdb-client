import QueryApi, { QueryOptions } from '../QueryApi';
import { Transport, CommunicationObserver } from '../transport';
import FluxResultObserver from '../query/FluxResultObserver';
export declare class QueryApiImpl implements QueryApi {
    private transport;
    private options;
    constructor(transport: Transport, org: string);
    with(options: Partial<QueryOptions>): QueryApi;
    queryLines(query: string, consumer: CommunicationObserver<string>): void;
    queryRows(query: string, consumer: FluxResultObserver<string[]>): void;
}
export default QueryApiImpl;
//# sourceMappingURL=QueryApiImpl.d.ts.map