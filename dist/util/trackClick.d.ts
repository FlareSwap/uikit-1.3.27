export interface TrackProps {
    event: string;
    chain: number | string;
    data: any;
    value?: number | string;
}
export declare type TrackHandler = ({ event, chain, data, value }: TrackProps) => void;
export interface clickProps {
    chainId: TrackProps["chain"];
    position: string;
    tracker?: TrackHandler;
    socialName?: string;
    clickUrl?: string;
}
declare const trackClick: (tracker: clickProps["tracker"], event: TrackProps["event"], position: clickProps["position"], chainId: clickProps["chainId"], socialName?: clickProps["socialName"], clickUrl?: clickProps["clickUrl"]) => void;
export default trackClick;
