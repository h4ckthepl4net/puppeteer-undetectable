import type { Browser, Page } from "puppeteer-undetectable/rebrowser-puppeteer-core";
import type { GhostCursor } from "ghost-cursor";

export interface PageWithCursor extends Page {
    realClick: GhostCursor["click"];
    realCursor: GhostCursor;
}

export interface ProxyOptions {
    host: string;
    port: number;
    username?: string;
    password?: string;
}

export function connect(options: Options): Promise<ConnectResult>;

export type { PageWithCursor, ProxyOptions };

export type ConnectResult = {
    browser: Browser;
    page: PageWithCursor;
};

export interface Options {
    args?: string[];
    headless?: boolean;
    customConfig?: import("chrome-launcher").Options;
    proxy?: ProxyOptions;
    turnstile?: boolean;
    connectOption?: import("rebrowser-puppeteer-core").ConnectOptions;
    disableXvfb?: boolean;
    plugins?: import("puppeteer-extra").PuppeteerExtraPlugin[];
    ignoreAllFlags?: boolean;
}
